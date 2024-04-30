const { faker } = require('@faker-js/faker');

const TC01 = {
    nome: faker.person.fullName({firstName: "tc01"}),
    email: faker.internet.email({firstName: "tc01"}),
    password: faker.internet.password({length: 6}),
    administrador: "false"
}

const TC02 = {
    nome: faker.person.fullName({firstName: "tc02"}),
    email: faker.internet.email({firstName: "tc02"}),
    password: faker.internet.password({length: 6}),
    administrador: "true"
}

const TC03 = {
    nome: faker.person.fullName({firstName: "tc03"}),
    email: faker.internet.email({firstName: "tc03", allowSpecialCharacters: true}),
    password: faker.internet.password({length: 6}),
    administrador: "false",
    responseMessage400: "Este email já está sendo usado"
}

const TC04 = {
    nome: faker.person.fullName({firstName: "tc04"}),
    email: faker.internet.email({firstName: "tc04", allowSpecialCharacters: true}),
    password: faker.internet.password({length: 6}),
    administrador: "true",
    responseMessage400: "Este email já está sendo usado"
}

const TC05 = {
    nome: faker.person.fullName({firstName: "tc05"}),
    email: faker.internet.email({firstName: "tc05"}),
    password: faker.internet.password({length: 6}),
    administrador: "true"
}

module.exports = { TC02, TC01, TC03, TC04, TC05 }