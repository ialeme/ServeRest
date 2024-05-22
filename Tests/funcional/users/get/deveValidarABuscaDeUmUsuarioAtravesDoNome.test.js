const { describe } = require("mocha")
const { buscarUsuariosAtravesDoNome } = require("../../../../core/services/users/getUsuarios.service")
const { postUsuarios } = require("../../../../core/services/users/postUsuarios.service.js")
const { TC08 } = require("../../../../data/users/usuario.data.js")

describe("GET - Usuarios", () => {
    let cadastrarCliente
    before("Cadastrar um usuário" , async () => {
        cadastrarCliente = await postUsuarios(TC08)
    })

    it("[TC-08] - Deve validar a busca de um usuário através do nome" , async () => {
        let response = await buscarUsuariosAtravesDoNome(TC08.nome)
        //console.log(response)
    })
})