import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hola mundo");
});

app.post("/calcular", (req, res) => {
  const operacion = req.body;
  if (operacion.operacion === "add") {
    return res.send({ resultado: operacion.num1 + operacion.num2 });
  } else if (operacion.operacion === "min") {
    return res.send({ resultado: operacion.num1 - operacion.num2 });
  } else if (operacion.operacion === "div") {
    return res.send({ resultado: operacion.num1 / operacion.num2 });
  } else if (operacion.operacion === "multi") {
    return res.send({ resultado: operacion.num1 * operacion.num2 });
  }
  return res.send({ resultado: "hola mundo" });
});

app.listen(3000, () => {
  console.log("server started");
});
