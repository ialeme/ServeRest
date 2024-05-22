const { spec } = require("pactum");

async function postLogin(email, password, statusCodeResponse = 200) {
    return await spec()
    .post("https://serverest.dev/login")
    .withBody({
        email: email,
        password: password
    })
    .expectStatus(statusCodeResponse)
}

module.exports = (postLogin)