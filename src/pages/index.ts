import { todoItem } from "../../components/todo-items/todo-items";
import { state } from "../../state";

export function initStep1(container) {
  const div = document.createElement("div");
  const cS = state.getEnableTask();

  state.suscribe(() => {
    createTasks(state.getEnableTask());
  });
  div.innerHTML = `
    <header-comp variant=" "></header-comp>
    <div class="contenedor">
    <titulo-comp variant="Mis pendientes"></titulo-comp>
    <form class="formulario">
    <label-input variant="Nueva tarea" name="tarea" class="tarea"></label-input>
    <button-comp variant="Agregar"></button-comp>
    </form>
    <div class="contenedorUl"></div>
    
    
    `;

  const ulEl = document.createElement("ul");
  ulEl.setAttribute("id", "tasks-container");
  ulEl.setAttribute("class", "listaDeTareas");
  const contenedorUl = div.querySelector(".contenedorUl");
  contenedorUl?.appendChild(ulEl);
  const listaDeTareas = div.querySelector(".listaDeTareas");

  ////////////////////////////////////////////////////////////////////////
  const $ = (selector) => div.querySelector(selector);
  const getInputValue = (element) => element.querySelector("input").value;

  const contenedor = $(".contenedor");
  contenedor.style.padding = "25px";

  const formulario = $(".formulario");

  const tasksContainer = $("#tasks-container");
  /////////////////////////////////////////////////////////////////////////
  tasksContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove")) {
      const itemRemove = e.target.parentNode.parentNode.parentNode;
      state.deleteItems(Number(itemRemove.id));
    }
  });
  const style = document.createElement("style");
  style.innerHTML = `li{list-style-type: none} ul{padding:0px}`;
  contenedorUl?.appendChild(style);
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTask = getInputValue(formulario);
    if (newTask) {
      state.addTask(Math.floor(Math.random() * 1000), newTask);
    }
  });

  function createTasks(items) {
    listaDeTareas!.innerHTML = ``;
    for (const i of items) {
      const todoItemEl = document.createElement("todo-item");
      todoItemEl.setAttribute("title", i.title);
      todoItemEl.setAttribute("id", i.id);

      if (i.checked) {
        todoItemEl.setAttribute("checked", i.checked);
      }
      todoItemEl.addEventListener("change", (e: any) =>
        state.changeItem(e.detail.id, e.detail.value)
      );
      listaDeTareas?.appendChild(todoItemEl);
    }
  }
  createTasks(cS);

  return div;
}
