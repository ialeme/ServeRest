const { describe } = require("mocha")
const { TC06 } = require("../../../data/users/usuario.data")
const { postUsuarios } = require("../../../core/services/users/postUsuarios.service")
const { assert } = require("chai")
const { deleteUsuarios } = require("../../../core/services/users/deleteUsuarios.service")


describe("DELETE- Usuários", () => {
    let cadastrarCliente, deletarUsuarios
    before("cadastrar um usuário do tipo Cliente",async () => {
        cadastrarCliente = await postUsuarios(TC06)
        //console.log(cadastrarCliente.json)
     })
    it("[TC-06] -  Deve validar exclusão de um usuário do tipo Cliente pelo ID", async () => {
        deletarUsuarios = await deleteUsuarios(cadastrarCliente.json._id)
        assert.equal(deletarUsuarios.json.message, TC06.responseMessage200, "A mensagem é diferente do esperado.")
        //console.log(deletarUsuarios.json)
    })
})