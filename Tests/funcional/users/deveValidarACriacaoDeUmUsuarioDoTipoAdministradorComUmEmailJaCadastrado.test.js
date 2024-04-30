const { assert, expect } = require("chai")
const { TC04 } = require("../../../data/users/usuario.data")
const { postUsuarios } = require("../../../core/services/users/postUsuarios.service")

describe("POST - Usuarios", () =>{
    before("cadastrar um usuário do tipo Administrador", async () =>{
        await postUsuarios(TC04)
    })
    it("[TC-04] - Deve validar o cadastro de um usuário do tipo administrador com um e-mail já cadastrado", async () => {
        let cadastrarAdminJaCadastrado = await postUsuarios(TC04, 400)
        assert.equal(cadastrarAdminJaCadastrado.json.message, TC04.responseMessage400, "A mensagem é diferente do esperado.")
    })
})
