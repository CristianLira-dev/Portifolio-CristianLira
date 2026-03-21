// backend/server.js
import express from "express";
import cors from "cors";
import validator from "validator";
import process from "process";

const app = express();

app.use(cors());
app.use(express.json());

const PORTA = process.env.PORT || 3000;

// Mensagens de erro por idioma
const mensagens = {
  pt: {
    email_required: "O e-mail é obrigatório.",
    email_invalid: "Por favor, insira um e-mail válido.",
    assunto_required: "O assunto é obrigatório.",
    mensagem_required: "A mensagem é obrigatória.",
    success: "Dados validados com sucesso!",
  },
  en: {
    email_required: "E-mail is required.",
    email_invalid: "Please enter a valid e-mail.",
    assunto_required: "Subject is required.",
    mensagem_required: "Message is required.",
    success: "Data validated successfully!",
  },
  es: {
    email_required: "El e-mail es obligatorio.",
    email_invalid: "Por favor, introduce un e-mail válido.",
    assunto_required: "El asunto es obligatorio.",
    mensagem_required: "El mensaje es obligatorio.",
    success: "¡Datos validados con éxito!",
  },
};

// Remove TODAS as tags HTML (qualquer coisa entre < e >) e retorna só o texto puro
function stripHtml(str) {
  return (str || "")
    .replace(/<[^>]*>/g, "") // apaga tudo que começa em < e termina em >
    .replace(/&nbsp;/g, "")
    .trim(); // apaga espaços do início e fim
}

// Detecta o idioma pelo header Accept-Language
function detectarIdioma(req) {
  const acceptLanguage = req.headers["accept-language"] || "";
  if (acceptLanguage.startsWith("pt")) return "pt";
  if (acceptLanguage.startsWith("es")) return "es";
  return "en";
}

// Rota GET de teste
app.get("/api/email", (req, res) => {
  res.json({
    message: `Conexão estabelecida com sucesso! Servidor rodando na porta ${PORTA}`,
  });
});

// Rota POST de VALIDAÇÃO
app.post("/api/email", (req, res) => {
  const { email, assunto, mensagem } = req.body;
  const idioma = detectarIdioma(req);
  const msg = mensagens[idioma];

  // Aplica trim() nos campos de texto simples
  const emailTrimmed = (email || "").trim();
  const assuntoTrimmed = (assunto || "").trim();

  const mensagemTexto = stripHtml(mensagem);

  // Validação individual de cada campo com mensagem personalizada
  if (!emailTrimmed) {
    return res.status(400).json({ error: msg.email_required });
  }

  if (!validator.isEmail(emailTrimmed)) {
    return res.status(400).json({ error: msg.email_invalid });
  }

   if (emailTrimmed === "cristianfilho2008@outlook.com") {
    return res.status(400).json({ error: msg.email_invalid });
  }

  if (!assuntoTrimmed) {
    return res.status(400).json({ error: msg.assunto_required });
  }

  if (!mensagemTexto) {
    return res.status(400).json({ error: msg.mensagem_required });
  }

  // Passou por todas as validações
  return res.status(200).json({
    success: true,
    message: msg.success,
  });
});

app.listen(PORTA, () => {
  console.log(`Servidor rodando na porta ${PORTA}`);
});
