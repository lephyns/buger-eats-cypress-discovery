// A class não precisa se função quando criar, basta apenas escrever o nome como por exemplo o "go"
// A class segue o padrão PascalCase diferente da função que é camelCase
// criado a função "go" (poderia ser qualquer outro nome). 
// Quando a função estiver dentro da class não precisamos colocar o "function" na frente do go nem adicionar o arrow function ""=>"". Apenas lembrar que a função deve ter o "()"
// A função "go" vai acessar a página onde tem o formulário de cadastro

class SignupPage {
    go(){
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats-qa.vercel.app/')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    }

    // Função "fillForm" que é a massa de teste (que vai preencher todo o formulário)
    // Essa função está recebendo uma massa de teste como argumento (deliver)

    fillForm(deliver){
        cy.get('input[name="fullName"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)

        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        cy.get('input[type="button"][value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.details)

        cy.get('input[name="address"]').should('have.value', deliver.address.street)
        cy.get('input[name="district"]').should('have.value', deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)

        cy.contains('.delivery-method li', deliver.delivery_method).click()
        cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh)
    }

    // Função submit sem massa de teste como argumento
    submit() {
        cy.get('div form button[type="submit"]').click()
    }

    // Nova função para encapsular a validação
    // A variavel expectedMessage foi colocada como argumento para a função

    modalContentShouldBe(expectedMessage){
        cy.get('.swal2-container .swal2-html-container')
            .should('have.text', expectedMessage)
    }

    // Quando tiver vários elementos com a mesma caracteristica (como a obrigação de preenchimento) não dá para usarmos o cy.get porque vai dar erro.
    // O cy.get só consegue obter 1 elemento desta forma devemos informar como cy.contais porque tem 7 mensagens de erro no formulário de cadastro.
    alertMessageShouldBe(expectedMessage){
        // cy.get('.alert-error').should('have.text', expectedMessage)
        // Combinação de valor com o expectedMessage add o cy.contains para não dar o erro de ambiguidade. O .should vai fazer com que ele verifique se o erro está visivel
        cy.contains('.alert-error', expectedMessage).should('be.visible')
    }

}
// Exportar a página para que possamos importar na camada de testes (cadastro2). Aplicando new ela será exportada como uma nova instancia para ter menos código
export default new SignupPage;

