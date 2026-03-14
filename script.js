function adicionarTarefa() {
  // não define um valor à mensagem a ser adicionada
  let mensagem = "";

  // Define as variáveis do input
  let inputTarefa = document.getElementById("inputTarefa");
  let Tarefa = inputTarefa.value;
  document.getElementById("mensagem").textContent = mensagem;

  // Faz com que o código não adicione tarefas caso o espaço esteja vazio

  if (Tarefa <= 0) {
    document.getElementById("mensagem").textContent =
      "Adicione uma tarefa primeiro!";
    return;
  } else {
    document.getElementById("mensagem").textContent =
      "Tarefa adicionada com sucesso!";
  }

  // cria uma lista com  tarefas
  let listaTarefas = document.getElementById("listaTarefas");
  let novaTarefa = document.createElement("li");

  novaTarefa.textContent = Tarefa;

  listaTarefas.appendChild(novaTarefa);

  // Esvazia o espaço a ser digitado
  inputTarefa.value = "";
}
