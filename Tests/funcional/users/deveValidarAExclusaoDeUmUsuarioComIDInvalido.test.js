const { assert } = require("chai")
const { deleteUsuarios } = require("../../../core/services/users/deleteUsuarios.service")
const { TC07 } = require("../../../data/users/usuario.data")


describe("DELETE - Usuários", () => {
    it('[TC-07] - Deve validar a exclusão de um usuário com ID inválido.', async () => {
        let deletarUsuario = await deleteUsuarios(TC07.invalidID)
        assert.equal(deletarUsuario.json.message, TC07.responseMessage200, "A mensagem é diferente do esperado.")
    })
})