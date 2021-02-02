const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

// Postagem.sync({force: true});

// Postagem.create({
//     titulo: 'Um titulo qualuqer',
//     conteudo: 'asdfasdfasdfasdfasdfasdf'
// });


const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});

// Usuario.sync({force: true});

// Usuario.create({
//     nome: 'Miguel',
//     sobrenome: 'Oliveira',
//     idade: 25,
//     email: 'miguel@dd.com'

// });



