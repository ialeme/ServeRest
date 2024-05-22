const { assert, expect } = require("chai")
const postLoginController = require("../../../core/services/login/postLogin.controller")
const { postUsuarios } = require("../../../core/services/users/postUsuarios.service")
const { TC12 } = require("../../../data/users/usuario.data")

describe("POST - Login", () => {
    let usuarioCliente
  before("Cadastrar um usuário do tipo administrador", async () =>{
    usuarioCliente = await postUsuarios(TC12)
  })
  
  it("[TC-12] - Deve validar o login de um usuário do tipo administrador.", async () => {
    let loginUsuario = await postLoginController(TC12.email, TC12.password)
    assert.equal(loginUsuario.json.message, TC12.responseMessage200, "A mensagem é diferente do esperado." )
    expect(loginUsuario.json).to.have.property("authorization")
    expect(loginUsuario.json.authorization).to.be.a("string")
  })
})