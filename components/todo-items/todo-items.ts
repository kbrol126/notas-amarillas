export function todoItem() {
  class TodoItemClass extends HTMLElement {
    title__El: string;
    checked: boolean = false;
    ids: number;

    constructor() {
      super();
    }
    connectedCallback() {
      this.title__El = this.getAttribute("title") || "";
      this.ids = Number(this.getAttribute("id") || "");
      this.checked = this.hasAttribute("checked");

      const h3 = document.createElement("h3");
      h3.textContent = this.title__El;
      h3.classList.add("h3");
      if (this.checked) {
        h3.classList.add("checked");
      }
      h3.setAttribute("id", this.ids.toString());

      const div = document.createElement("div");
      div.classList.add("estados");

      const input = document.createElement("input");
      input.classList.add("checkbox");
      input.type = "checkbox";
      if (this.checked) {
        input.setAttribute("checked", "");
      }
      if (this.checked) {
        input.setAttribute("checked", "");
      }

      const button = document.createElement("button");
      button.classList.add("boton");
      button.type = "button";

      const img = document.createElement("img");
      img.classList.add("remove");
      img.src =
        "https://icon-library.com/images/icon-remove/icon-remove-22.jpg";

      this.appendChild(h3);
      this.appendChild(div);
      button.appendChild(img);
      div.appendChild(input);
      div.appendChild(button);

      this.setAttribute("class", "todoItem");
      const style = document.createElement("style");
      style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
      *{  
        box-sizing: border-box;
        margin:0px;
        
      }
      
      
      .todoItem {
        display:flex;
        min-width: 311px;
        height: 112px;
        border-radius:30px;
        margin-top:26px;
        background-color: #FFF599;
        padding: 22px;
        align-items: baseline;
        justify-content: space-between;
        
        
        color: #000000;
      }
      .h3{
        max-height: 67px;
        width: 236px;
        font-style: normal;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        
      }
      
      .h3.checked{
        text-decoration: line-through;
      }
      input{
        height: 22px;
        width: 22px;
        border-radius: 0px;
        
      }
      .estados{
        display: grid;
        height: 67px;
        width: 22px;
        align-content: space-between;
      }
      .boton{
        background: transparent;
        border: none;
        margin: 0;
        padding: 0;
      }
      
      img{
        Width: 100%;
        Height: 100%;
      }
      
      `;
      this.appendChild(style);
      this.addCallbacks();
    }

    addCallbacks() {
      const inputEl = this.querySelector(".checkbox");

      inputEl?.addEventListener("click", (e) => {
        const target = e.target as any;
        const event = new CustomEvent("change", {
          detail: {
            id: this.id,
            value: target.checked,
          },
        });
        this.dispatchEvent(event);
      });
    }
  }

  customElements.define("todo-item", TodoItemClass);
}
