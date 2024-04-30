const { assert} = require("chai")
const { TC03 } = require("../../../data/users/usuario.data")
const { postUsuarios } = require("../../../core/services/users/postUsuarios.service")

describe("POST - Usuarios", () => {
    before("cadastrar um usuário do tipo Cliente",async () => {
       await postUsuarios(TC03)
       //console.log(usuario.json)
    })
    it("[TC-03] - Deve validar o cadastro de um usuário do tipo cliente com um e-mail já cadastrado", async () => {
        let cadastrarClienteJaCadastrado = await postUsuarios(TC03, 400)
        assert.equal(cadastrarClienteJaCadastrado.json.message, TC03.responseMessage400, "a mensagem é diferente do esperado.")
    })
})