const { assert, expect } = require("chai")
const postLoginController = require("../../../core/services/login/postLogin.controller")
const { postUsuarios } = require("../../../core/services/users/postUsuarios.service")
const { TC13 } = require("../../../data/users/usuario.data")

describe("POST - Login", () => {
    let usuarioCliente
  before("Cadastrar um usuário do tipo cliente", async () =>{
    usuarioCliente = await postUsuarios(TC13)
  })
  
  it("[TC-13] - Deve validar o login de um usuário do tipo cliente com senha inválida", async () => {
    let loginUsuario = await postLoginController(TC13.email, TC13.incorretPassword, TC13.statusCode401)
    assert.equal(loginUsuario.json.message, TC13.responseMessage401, "A mensagem é diferente do esperado." )
  })
})