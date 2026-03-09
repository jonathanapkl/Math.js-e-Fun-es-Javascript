# Principais recursos da biblioteca Math.js e Principais funções em Javascript

## 🧮 Exemplo de Código com Math.js

```js
const math = require('mathjs');

console.log("Soma: ", math.add(10, 5));                  // 15
console.log("Multiplicação: ", math.multiply(4, 7));     // 28
console.log("Expressão: ", math.evaluate('2 + 3 * 4'));  // 14
console.log("Média: ", math.mean([3, 6, 9]));            // 6
```

---

## 🧰 Funções comuns em JavaScript

### 🔤 Manipulação de Strings

- `.split()` -> Divide uma string em partes
- `.trim()` -> Remove espaços no início/fim
- `.toLowerCase()` / `.toUpperCase()`
- `.replace()` -> Substitui trechos da string
- `.includes()` -> Verifica se contém texto

### 🧱 Manipulação de Arrays

- `.push()`, `.pop()`, `.shift()`, `.unshift()`
- `.map()`, `.filter()`, `.reduce()`
- `.forEach()` -> Itera sobre o array
- `.includes()`, `.indexOf()`
- `.slice()`, `.splice()`

### 🔁 Conversões

- `Number("10")` -> converte para número
- `String(123)` ou `123.toString()`
- `JSON.stringify()` / `JSON.parse()`
- `parseInt()` / `parseFloat()`

### ⚙️ Utilidades

- `typeof` -> verifica o tipo
- `isNaN()` -> verifica se não é número
- `Math.random()`, `Math.floor()`, `Math.ceil()`
- `Date()` -> cria data/hora atual

---

## 📐 Math.js - Recursos úteis

- `math.add(a, b)`
- `math.subtract(a, b)`
- `math.multiply(a, b)`
- `math.divide(a, b)`
- `math.evaluate("expressão")`
- `math.mean([valores])`
- `math.sqrt(n)`
- `math.pow(base, expoente)`
- `math.round(valor, casas)`
