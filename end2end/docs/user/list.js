const list = {
    get: {
        operationId: "userList",
        description: "Lista usuario",
        responses: {
            200: {
                description: "listar todos os usuarios",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/UserList"
                        }
                    }
                }
            }
        }
    }
}

module.exports = list

// responses: {
//     // response code
//     200: {
//       description: "Todos were obtained", // response desc.
//       content: {
//         // content-type
//         "application/json": {
//           schema: {
//             $ref: "#/components/schemas/Todo", // Todo model
//           },
//         },
//       },
//     },
//   },