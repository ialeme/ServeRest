const { assert, expect } = require("chai")
const postLoginController = require("../../../core/services/login/postLogin.controller")
const { postUsuarios } = require("../../../core/services/users/postUsuarios.service")
const { TC14 } = require("../../../data/users/usuario.data")

describe("POST - Login", () => {
    let usuarioCliente
  before("Cadastrar um usuário do tipo cliente", async () =>{
    usuarioCliente = await postUsuarios(TC14)
  })
  
  it("[TC-14] - Deve validar o login de um usuário do tipo Administrador com senha inválida.", async () => {
    let loginUsuario = await postLoginController(TC14.email, TC14.incorretPassword, TC14.statusCode401)
    assert.equal(loginUsuario.json.message, TC14.responseMessage401, "A mensagem é diferente do esperado." )
  })
})