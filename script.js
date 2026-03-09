const botaoTema = document.getElementById("toggle-tema");

botaoTema.addEventListener("click", () => {
  document.body.classList.toggle("modo-escuro");

  const temaAtual = document.body.classList.contains("modo-escuro") ? "escuro" : "claro";
  localStorage.setItem("tema", temaAtual);
});

window.addEventListener("DOMContentLoaded", () => {
  const temaSalvo = localStorage.getItem("tema");
  if (temaSalvo === "escuro") {
    document.body.classList.add("modo-escuro");
  }
});
// script para o código do editor interativo ---------------------------------------------------------------------
function executarCodigo() {
  const entrada = document.getElementById("editor").value;
  const saida = document.getElementById("resultado");

  // Limpar saída anterior
  saida.textContent = "";

  // Captura os console.log
  const originalConsoleLog = console.log;
  const logs = [];
  console.log = function (...args) {
    logs.push(args.join(" "));
    originalConsoleLog.apply(console, args);
  };

  try {
    const func = new Function("math", entrada);
    func(math);
    saida.textContent = logs.length ? logs.join("\n") : "[Executado sem saída]";
  } catch (erro) {
    saida.textContent = "Erro: " + erro.message;
  }

  // Restaura o console original
  console.log = originalConsoleLog;
}

// Executa automaticamente enquanto digita
document.getElementById("editor").addEventListener("input", () => {
  executarCodigo();
});
// Código para o relógio digital -------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('digital-clock').textContent = `${hours}:${minutes}:${seconds}`;
  }

  updateClock(); // Atualiza imediatamente
  setInterval(updateClock, 1000); // Atualiza a cada segundo
});
// -------- Tornar o relógio digital arrastável e salvar posição --------
const clock = document.getElementById("digital-clock");
let offsetX = 0, offsetY = 0, isDragging = false;

clock.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - clock.getBoundingClientRect().left;
  offsetY = e.clientY - clock.getBoundingClientRect().top;
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    const left = e.clientX - offsetX;
    const top = e.clientY - offsetY;
    clock.style.left = `${left}px`;
    clock.style.top = `${top}px`;
    clock.style.right = "auto";
    // Salvar no localStorage
    localStorage.setItem("clockPosition", JSON.stringify({ top, left }));
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

// Restaurar posição salva
document.addEventListener("DOMContentLoaded", () => {
  const savedPosition = localStorage.getItem("clockPosition");
  if (savedPosition) {
    const { top, left } = JSON.parse(savedPosition);
    clock.style.top = `${top}px`;
    clock.style.left = `${left}px`;
    clock.style.right = "auto";
  }
});
// Código para resetar a posição do relógio
document.getElementById("resetar-rel").addEventListener("click", () => {
  // Volta ao canto superior direito
  clock.style.top = "20px";
  clock.style.left = "auto";
  clock.style.right = "20px";

  // Remove posição salva
  localStorage.removeItem("clockPosition");

  // Animação visual ao resetar
  clock.classList.add("animando-reset");
  setTimeout(() => {
    clock.classList.remove("animando-reset");
  }, 600); // mesmo tempo da animação
});

// -------- Botão de copiar código --------
document.querySelectorAll(".copiar-btn").forEach((botao, index) => {
  botao.addEventListener("click", () => {
    const blocoCodigo = document.querySelectorAll("pre code")[index];
    const codigo = blocoCodigo.innerText;

    navigator.clipboard.writeText(codigo).then(() => {
      botao.textContent = "Copiado!";
      setTimeout(() => (botao.textContent = "Copiar"), 1500);
    });
  });
});
// -------- Modo tela cheia para o editor --------
const editor = document.getElementById("editor");
const btnFullscreen = document.querySelector(".toggle-fullscreen");
const btnFechar = document.getElementById("fechar-fullscreen");

btnFullscreen.addEventListener("click", () => {
  editor.classList.add("fullscreen");
  btnFechar.style.display = "block";
  btnFullscreen.style.display = "none";

  // trava scroll da página
  document.body.classList.add("no-scroll");
});

btnFechar.addEventListener("click", () => {
  editor.classList.remove("fullscreen");
  btnFechar.style.display = "none";
  btnFullscreen.style.display = "inline-block";

  // libera scroll da página
  document.body.classList.remove("no-scroll");
});
/*
// Inicializa o editor com autocomplete
const editorCM = CodeMirror.fromTextArea(document.getElementById("editor"), {
  lineNumbers: true,
  mode: "javascript",
  theme: "bearded theme vivid black",   // ou o tema que você escolher
  tabSize: 2,
  indentWithTabs: true,
  extraKeys: {
    "Ctrl-Space": "autocomplete" // atalho para ativar autocomplete
  }
});
editorCM.on("inputRead", function(editor, change) {
  if (change.text[0].match(/[a-zA-Z_.]/)) {
    editor.showHint();
  }
});
*/