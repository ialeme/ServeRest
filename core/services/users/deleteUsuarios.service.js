const { spec } = require("pactum");


async function deleteUsuarios(id, statusCodeResponse = 200){
    return await spec()
    .delete("https://serverest.dev/usuarios/{_id}")
    .withPathParams("_id", id)
    .expectStatus(statusCodeResponse)
}

module.exports = {deleteUsuarios}