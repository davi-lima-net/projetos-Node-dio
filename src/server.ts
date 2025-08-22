
import * as http from 'http';
import { app } from './app';

const server = http.createServer(app)
const port = process.env.port

server.listen(port, () => {
  console.log(`Server iniciado na porta ${port}`);
});
// console.log('http://localhost:3000'); ele acessa uma porta do servidor criado pelo vscode