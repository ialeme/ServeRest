const { assert, expect } = require("chai")
const postLoginController = require("../../../core/services/login/postLogin.controller")
const { postUsuarios } = require("../../../core/services/users/postUsuarios.service")
const { TC11 } = require("../../../data/users/usuario.data")

describe("POST - Login", () => {
    let usuarioCliente
  before("Cadastrar um usuário do tipo cliente", async () =>{
    usuarioCliente = await postUsuarios(TC11)
  })
  
  it("[TC-11] - Deve validar o login de um usuário do tipo cliente", async () => {
    let loginUsuario = await postLoginController(TC11.email, TC11.password)
    assert.equal(loginUsuario.json.message, TC11.responseMessage200, "A mensagem é diferente do esperado." )
    expect(loginUsuario.json).to.have.property("authorization")
    expect(loginUsuario.json.authorization).to.be.a("string")
  })
})