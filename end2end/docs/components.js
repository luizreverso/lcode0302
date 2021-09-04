const apiComponents = {
    components: {
        schemas: {
            User: {
                type: "object",
                properties: {
                    name: {
                        type: "string",
                        description: "nome do usuario a ser criado",
                        example: "John Doe",
                        required: true
                    },
                    email: {
                        type: "string",
                        description: "email do usuario a ser criado",
                        example: "john@doe.com",
                        required: true
                    },
                    cpf: {
                        type: "string",
                        description: "cpf do usuario a ser criado",
                        example: "00000000000",
                        "maximum-length": 11
                    }
                }
            },
            UserList:{
                type: "array",
                items: {
                    $ref: "#/components/schemas/User"
                }
            }
        }
    }
}

module.exports = apiComponents;