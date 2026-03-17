// backend/server.js
import express from "express";
import cors from "cors";

const app = express();

// Permite requisições de outras origens (seu front-end)
app.use(cors());
app.use(express.json());
const PORTA = 3000;

// Rota de exemplo
app.get("/api/email", (req, res) => {
  res.json({ email: `Conexão estabelecida com sucesso! Olá do Node.js! na porta ${PORTA}` });
});

app.post("/api/email", (req, res) => { 
  const { email, assunto, mensagem } = req.body;
  // Lógica para enviar o email

  if (!email || !assunto || !mensagem) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }

});

app.listen(PORTA, () => {
  console.log(`Servidor rodando na porta ${PORTA}`);
});
