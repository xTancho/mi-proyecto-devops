import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hola mundo");
});

app.post("/calcular", (req, res) => {
  const operacion = req.body;
  if (operacion.operacion === "add") {
    return res.send({ resultado: sumar(operacion.num1, operacion.num2) });
  } else if (operacion.operacion === "min") {
    return res.send({ resultado: restar(operacion.num1, operacion.num2) });
  } else if (operacion.operacion === "div") {
    return res.send({ resultado: dividir(operacion.num1, operacion.num2) });
  } else if (operacion.operacion === "mul") {
    return res.send({ resultado: multiplicar(operacion.num1, operacion.num2) });
  }
  return res.send({ resultado: "hola mundo" });
});

export function sumar(num1: number, num2: number) {
  return num1 + num2;
}

export function restar(num1: number, num2: number) {
  return num1 - num2;
}

export function dividir(num1: number | null | string | undefined, num2: number) {
  if (num1 === null || num1 === undefined || typeof num1 === 'string') {
    return;
  }
  if (num2 === 0 && num1 === 0) {
    throw new Error('No se puede dividir por 0');
  }
  return num1 / num2;
}

export function multiplicar(num1: number | undefined, num2: number) {
  if (num1 === null || num1 === undefined) {
    return;
  }

  return num1 * num2;
}

app.listen(3000, () => {
  console.log("server started");
});

export default app;