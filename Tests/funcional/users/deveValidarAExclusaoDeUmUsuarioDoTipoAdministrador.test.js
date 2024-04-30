const { assert, expect } = require("chai")
const { postUsuarios } = require("../../../core/services/users/postUsuarios.service")
const { TC05 } = require("../../../data/users/usuario.data")
const { deleteUsuarios } = require("../../../core/services/users/deleteUsuarios.service")

describe("DELETE- Usuários", () => {
    let cadastrarAdmin
    before("cadastrar um usuário do tipo Administrador",async () => {
        cadastrarAdmin = await postUsuarios(TC05)
     })
    it("[TC-05] -  Deve validar exclusão de um usuário do tipo administrador", async () => {
        let usuarioDeletado = await deleteUsuarios(cadastrarAdmin.json._id)
        
        //console.log(usuarioDeletado.json)
    })
})