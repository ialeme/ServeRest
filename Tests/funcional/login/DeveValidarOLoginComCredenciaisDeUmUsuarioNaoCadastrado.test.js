const { assert, } = require("chai")
const postLoginController = require("../../../core/services/login/postLogin.controller")
const { TC15 } = require("../../../data/users/usuario.data")

describe("POST - Login", () => {
    it("[TC-15] - Deve validar o login com credenciais de um usuário nao cadastrado", async () => {
        let loginUsuario = await postLoginController(TC15.email, TC15.password, TC15.statusCode401)
        assert.equal(loginUsuario.json.message, TC15.responseMessage401, "A mensagem é diferente do esperado.")
    })
})