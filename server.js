require("dotenv").config();

const express = require("express");
const app = express();

//put in a route called calcquery takes in 2 parameters and a query for operation

app.get("/calcquery/:numOne/:numTwo", (request, response) => {
    // console.log(
    //     request.params.numOne,
    //     request.params.numTwo,
    //     `the object type of ${request.params.numOne} which is on the URL is ${}`,
    // )
    //anything typed inside the URL will always be a string

    const num1 = parseInt(request.params.numOne); //'2' ----> 2
    const num2 = parseInt(request.params.numTwo); //'2' ----> 2
    const operation = request.query.operation;

    if (operation === "add") {
        response.send(`the sum is ${num1 + num2}`);
    } else if (operation === "subtract") {
        response.send(`the subtracted value is ${num1 - num2}`);
    } else if (operation === "multiply") {
        response.send(`the multiply value is ${num1 * num2}`);
    } else if (operation === "divide") {
        response.send(`the divide value is ${num1 / num2}`);
    } else if (operation === "exponent") {
        response.send(`the exponent value is ${num1 ** num2}`);
    } else {
        response.send(`no operation`);
    }
});

app.listen(process.env.PORT, () => {
    console.log(`listening to port ${process.env.PORT}`);
});
