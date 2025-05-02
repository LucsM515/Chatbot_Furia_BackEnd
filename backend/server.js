const express = require("express");
const cors = require("cors");
const app = express();

const furiaRoutes = require("./src/routes/furiaRoutes");

app.use(cors());
app.use(express.json());
app.use("/api/furia", furiaRoutes);

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});