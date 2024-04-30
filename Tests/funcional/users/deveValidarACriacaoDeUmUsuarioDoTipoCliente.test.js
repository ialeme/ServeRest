const { assert, expect } = require("chai")
const { postUsuarios } = require("../../../core/services/users/postUsuarios.service")
const { TC01 } = require("../../../data/users/usuario.data")

describe("POST- Usuarios", () => {

    it("[TC-01] -  Deve validar criação de um usuario do tipo cliente", async () => {
        let cadastrarCliente = await postUsuarios(TC01)
        //console.log(cadastrarCliente.json)
        assert.equal(cadastrarCliente.json.message, "Cadastro realizado com sucesso", "a mensagem é diferente do esperado")
        expect(cadastrarCliente.json).to.have.property("message")
        expect(cadastrarCliente.json.message).to.be.a("string")
    })
})