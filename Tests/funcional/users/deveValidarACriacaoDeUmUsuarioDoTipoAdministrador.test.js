const { assert, expect } = require("chai")
const { postUsuarios } = require("../../../core/services/users/postUsuarios.service")
const { TC02 } = require("../../../data/users/usuario.data")

describe("POST- Usuarios", () => {

    it("[TC-02] -  Deve validar criação de um usuario do tipo administrador", async () => {
        let cadastrarAdmin = await postUsuarios(TC02)
        //console.log(cadastrarAdmin.json)
        assert.equal(cadastrarAdmin.json.message, "Cadastro realizado com sucesso", "a mensagem é diferente do esperado")
        expect(cadastrarAdmin.json).to.have.property("message")
        expect(cadastrarAdmin.json.message).to.be.a("string")
    })
})