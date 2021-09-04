const userCreate = require("./create")
const userList = require("./list")

const user = {
    paths: {
        "/user/create": userCreate,
        "/user/list": userList
    }
}

module.exports = user;

// requestBody: {
//     // expected request body
//     content: {
//       // content-type
//       "application/json": {
//         schema: {
//           $ref: "#/components/schemas/TodoInput", // todo input data model

            // type: "object", // data type
            //         properties: {
            //         title: {
            //             type: "string", // data type
            //             description: "Todo's title", // desc
            //             example: "Coding in JavaScript", // example of a title
            //         },
            //         completed: {
            //             type: "boolean", // data type
            //             description: "The status of the todo", // desc
            //             example: false, // example of a completed value
            //         },
            //         },
//         },
//       },
//     },
//   },
// get: {
//     tags: ["Todo CRUD operations"], // operation's tag.
//     description: "Get todos", // operation's desc.
//     operationId: "getTodos", // unique operation id.
//     parameters: [], // expected params.
//     // expected responses
//     responses: {
//       // response code
//       200: {
//         description: "Todos were obtained", // response desc.
//         content: {
//           // content-type
//           "application/json": {
//             schema: {
//               $ref: "#/components/schemas/Todo", // Todo model
//             },
//           },
//         },
//       },
//     },
//   },