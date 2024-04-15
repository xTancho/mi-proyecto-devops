import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hola mundo");
});

app.post("/calcular", (req, res) => {
  const operacion = req.body;
  if (operacion.operacion === "suma") {
    return res.send({ resultado: operacion.num1 + operacion.num2 });
  } else if (operacion.operacion === "resta") {
    return res.send({ resultado: operacion.num1 - operacion.num2 });
  } else if (operacion.operacion === "division") {
    return res.send({ resultado: operacion.num1 / operacion.num2 });
  } else if (operacion.operacion === "multiplicacion") {
    return res.send({ resultado: operacion.num1 * operacion.num2 });
  }
  return res.send({ resultado: "hola mundo" });
});

app.listen(3000, () => {
  console.log("server started");
});
