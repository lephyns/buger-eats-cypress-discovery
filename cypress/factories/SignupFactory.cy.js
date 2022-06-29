
// Criado módulo export e dentro a função deliver para criar uma massa de teste dinamica

// Adicionado variavél faker pelo npm (npm install faker@5.5.3 --save-dev) e adicionado codigo no início do projeto (var faker)
// Essa variável faker vai criar um nome e sobrenome aleatorios pela internet, e com o codigo na camada de teste ele cria um email considerando o primeiro nome
// Vale lembrar que essa biblioteca faker não tem CPF já que ela foi criada na nos EUA. Neste caso podemos usar outra biblioteca para o CPF.

// Adicionado variavél cpf pelo npm (npm install gerador-validador-cpf --save-dev) e adicionado codigo no início do projeto (var cpf)
// Adicionado função cpf.generate() para gerar um CPF dinamico

// No js pode ser escrito tanto com " quanto com '

var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver:function() {

        // criado variaveis para nome e sobrenome dinamicos
        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            // Codigo para criar um nome dinamico. É importante ter o espaço entre o } e $ para concatenar
            // XX: `${XX} ${XX}`,
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            // Codigo para criar um email dinamico considerando o nome (pela internet)
            email: faker.internet.email(firstName),
            whatsapp: '48999999999',
            address: {
                postalcode: '88804320',
                street: 'Rua Visconde de Cairu',
                number: '4',
                details: 'AP6',
                district: 'Santa Bárbara',
                city_state: 'Criciúma/SC'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
        // O metodo deliver que está dentro do módulo signup factory vai devolver uma massa de teste completa com a função abaixo
        return data
    }
}