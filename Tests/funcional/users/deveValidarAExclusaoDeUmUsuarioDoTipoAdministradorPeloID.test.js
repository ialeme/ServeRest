const { assert, expect } = require("chai")
const { postUsuarios } = require("../../../core/services/users/postUsuarios.service")
const { TC05 } = require("../../../data/users/usuario.data")
const { deleteUsuarios } = require("../../../core/services/users/deleteUsuarios.service")

describe("DELETE- Usuários", () => {
    let cadastrarAdmin, deletarUsuarios
    before("cadastrar um usuário do tipo Administrador",async () => {
        cadastrarAdmin = await postUsuarios(TC05)
        //console.log(cadastrarCliente.json)
     })
    it("[TC-05] -  Deve validar exclusão de um usuário do tipo Administrador pelo ID", async () => {
        deletarUsuarios = await deleteUsuarios(cadastrarAdmin.json._id)
        assert.equal(deletarUsuarios.json.message, TC05.responseMessage200, "A mensagem é diferente do esperado.")
        //console.log(deletarUsuarios.json)
    })
})