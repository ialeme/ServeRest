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
    administrador: "true",
    responseMessage200: "Registro excluído com sucesso"
}

const TC06 = {
    nome: faker.person.fullName({firstName: "tc06"}),
    email: faker.internet.email({firstName: "tc06"}),
    password: faker.internet.password({length: 6}),
    administrador: "false",
    responseMessage200: "Registro excluído com sucesso"
}

const TC07 = { invalidID: "1456", responseMessage200: "Nenhum registro excluído" }

const TC08 = {
    nome: faker.person.fullName({firstName: "tc08"}),
    email: faker.internet.email({firstName: "tc08"}),
    password: faker.internet.password({length: 6}),
    administrador: "false"
}

const TC11 = {
    nome: faker.person.fullName({firstName: "tc11"}),
    email: faker.internet.email({firstName: "tc11"}),
    password: faker.internet.password({length: 6}),
    administrador: "false",
    responseMessage200: "Login realizado com sucesso"
}

const TC12 = {
    nome: faker.person.fullName({firstName: "tc12"}),
    email: faker.internet.email({firstName: "tc12"}),
    password: faker.internet.password({length: 6}),
    administrador: "true",
    responseMessage200: "Login realizado com sucesso"
}

const TC13 = {
    nome: faker.person.fullName({firstName: "tc13"}),
    email: faker.internet.email({firstName: "tc13"}),
    password: faker.internet.password({length: 6}),
    incorretPassword: faker.internet.password({length: 6}),
    administrador: "false",
    statusCode401: 401,
    responseMessage401: "Email e/ou senha inválidos"
}

const TC14 = {
    nome: faker.person.fullName({firstName: "tc14"}),
    email: faker.internet.email({firstName: "tc14"}),
    password: faker.internet.password({length: 6}),
    incorretPassword: faker.internet.password({length: 6}),
    administrador: "true",
    statusCode401: 401,
    responseMessage401: "Email e/ou senha inválidos"
}

const TC15 = {
    nome: faker.person.fullName({firstName: "tc15"}),
    email: faker.internet.email({firstName: "tc15"}),
    password: faker.internet.password({length: 6}),
    administrador: "true",
    statusCode401: 401,
    responseMessage401: "Email e/ou senha inválidos"
}

module.exports = { TC02, TC01, TC03, TC04, TC05, TC06, TC07, TC08, TC11, TC12, TC13,TC14, TC15 }