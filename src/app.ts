import express from "express";
import router from "./routes";

function createApp() {  
const app = express();

app.use (express.json()); //middleware para interpretar json
app.use ("/api", router);

return app;
}

export default createApp;

// o server le a aplicacao e a aplicacao le as rotas que apntam para o controller, que faz a logica do negocio
// separacao de responsabilidades no app  e rotas e nao precisa indicar o controller no import