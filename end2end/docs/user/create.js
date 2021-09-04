const create = {
    post: {
        operationId: "userCreate",
        description: "Cria usuario",
        tags: ["User operations"],
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/User"
                        // type: "object",
                        // properties: {
                        //     name: {
                        //         type: "string",
                        //         description: "nome do usuario a ser criado",
                        //         example: "John Doe",
                        //         required: true
                        //     },
                        //     email: {
                        //         type: "string",
                        //         description: "email do usuario a ser criado",
                        //         example: "john@doe.com",
                        //         required: true
                        //     },
                        //     cpf: {
                        //         type: "string",
                        //         description: "cpf do usuario a ser criado",
                        //         example: "00000000000",
                        //         "maximum-length": 11
                        //     }
                        // }
                    }
                }
            }
        }
    }
}

module.exports = create