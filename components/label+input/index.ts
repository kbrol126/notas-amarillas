export function initLabelInput() {
  class LabelInputclass extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var variant = this.getAttribute("variant") || "label";

      var divEl = document.createElement("div");
      divEl.setAttribute("class", "div-contenedor");
      var styleInputName = document.createElement("style");
      styleInputName.textContent =
        ".div-contenedor{height:83px;display: flex; flex-direction: column;gap: 5px;margin-top:26px}";
      this.appendChild(styleInputName);
      this.appendChild(divEl);

      var labelEl = document.createElement("label");
      labelEl.textContent = variant;
      labelEl.setAttribute("class", "label__del__input");
      var styleLabelEl = document.createElement("style");
      styleLabelEl.textContent =
        ".label__del__input{min-width:100%;height:23px;font-family: 'Roboto';font-style: normal;font-weight: 400;font-size: 18px;line-height: 21px;color: #000000;}";
      labelEl.appendChild(styleLabelEl);
      labelEl.setAttribute("for", "fname");

      var inputEl = document.createElement("input");
      inputEl.setAttribute("class", "input");
      var styleInputEl = document.createElement("style");
      styleInputEl.textContent =
        ".input{box-sizing: border-box;Width:100%;Height:55px;border: 2px solid #000000;border-radius: 4px;padding:0 3px;margin:0}";
      inputEl.appendChild(styleInputEl);
      inputEl.setAttribute("id", "fname");
      var typeInput = this.getAttribute("type") || "text";
      inputEl.setAttribute("type", typeInput);
      inputEl.setAttribute("name", "name");
      var textoParaInput = this.getAttribute("placeholder") || "Campo de Texto";
      inputEl.setAttribute("placeholder", textoParaInput);

      this.querySelector("div")?.appendChild(labelEl);
      this.querySelector("div")?.appendChild(inputEl);
    }
  }
  customElements.define("label-input", LabelInputclass);
}
