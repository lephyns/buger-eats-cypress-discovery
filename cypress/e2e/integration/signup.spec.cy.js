
// Funcionalidade principal da aplicação onde foi criado os cenários de teste


// Padrão page object
// Import signup para importar a massa de testes que criamos na pasta pages "SignupPage.js" para a suite de testes e2e
// E para conseguirmos usar as funções que foram encapsuladas basta instanciar a clase SignupPage.js
// Adicionamos mais um import signupFactory que é referente a massa de teste 
// Com o comando import signupFactory a gente usa ela ao invés de usar a que está na camada fixtures. A grande vantagem de usar a camada factory é
// é que temos uma única massa de teste, e toda a alteração para complementar o teste deixamos cravado no caso de teste usando o "deliver.XX = "
// Assim fica explicito o que está sendo feito no teste já que a alteração está ali no código. Como se fosse uma massa de teste "dinamica"
// Se houver muitos casos de teste e você quiser verificar apenas 1 mais rapido basta adicionar .skip para pular a etapa de teste it.skip('XXXX
// Lembrar de excluir o import que aparecerá quando informar o código acima (import { it } from ‘faker/lib/locales‘)


import signup from '../../pages/signupPage'
import signupFactory from '../../factories/SignupFactory.cy'
import signupPage from '../../pages/signupPage'

describe('Signup', () => {
    // O que ficar dentro de describe fica genérico e é utilizado em todos os casos de testes que estão dentro do describe (suite de testes). 
    // Usamos isso para não ter que ficar digitando o mesmo código sempre.

    // CST01: O usuário deve se tornar um entregador com sucesso
    it('User should be deliver', function () {

        var deliver = signupFactory.deliver()

        // Fazendo as chamadas das funções da signupPage.js
        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        // Foi colocado a constante antes do modalContentShouldBe porque é procedural e precisa ter essa informação antes de chegar na etapa
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)

    })

    // CST02: Tentativa com CPF incorreto
    it('Incorrect document', function () {

        var deliver = signupFactory.deliver()
        // alterando a informação
        deliver.cpf = 'x00000000199A'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')

    })

    // CST03: Tentativa com email incorreto
    it('Incorrect email', function () {

        var deliver = signupFactory.deliver()
        // alterando a informação
        deliver.email = 'papitocom.br'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')

    })

    
    // CST04: Sete cenários de teste através de uma constante (array de dados) onde criamos um loop (forEach) para poder multiplicar pela quantidade de "its"

    // Criado um contexto para testar campos obrigatórios como array. Esse contexto define uma massa de teste com o nome do campo que vai ser testado e com a mensagem esperada através da chave "output"
    // Na sequencia colocamos um before simples para ser executado uma única vez. Então quando esse gancho for acessado ele vai acessar a página e submeter o formulário uma única vez
    // Depois fazemos a validação campo por campo, neste caso se algum falhar ele não vai "abortar" o teste e sim irá continuar verificando
    // criado uma constante com os erros do formulário de cadastro
    context('Required fields', function () {

        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'delivery_method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
        ]

        before(function(){
            signup.go()
            signup.submit()
        })

        messages.forEach(function(msg){
            it(`${msg.field} is required`, function(){
                signupPage.alertMessageShouldBe(msg.output)
            })
        })

    })

})