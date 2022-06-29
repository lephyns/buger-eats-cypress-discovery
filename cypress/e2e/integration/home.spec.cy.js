
// Criado o caso de teste que basicamente verifica se a aplicação está online

// Minhas anotações:
// ()=> Isso é um arrow function
// Caso de teste é feito com a palavra "it" no início
// "viewport" é o tamanho da resolução
// "visit" é pra visitar o site 
// "get" sintaxse é para pegar o elemento e o "should" é para verificar se está como queremos. 
// Usamos essa verificação para ter certeza que o site está online.

describe('home page', ()=>{
    it('app deve estar online', ()=>{
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app')
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    })
})