const { spec } = require("pactum");

async function getUsuarios(parametro, valorDoParametro, statusCode = 200){
    return await spec()
        .get("https://serverest.dev/usuarios")
        .withQueryParams(parametro, valorDoParametro)
        .expectStatus(statusCode)
}

async function buscarUsuariosAtravesDoNome(nome){
    let usuario = await getUsuarios("nome", nome)
    return usuario.json
}

module.exports = { getUsuarios, buscarUsuariosAtravesDoNome }