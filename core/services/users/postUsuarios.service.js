const { spec } = require("pactum");

async function postUsuarios(data, statusCode = 201){
    return await spec()
    .post("https://serverest.dev/usuarios")
    .withBody({
        "nome": data.nome,
        "email": data.email,
        "password": data.password,
        "administrador": data.administrador
    })
    .expectStatus(statusCode)
}

module.exports = {postUsuarios}