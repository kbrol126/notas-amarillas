export function initTitulo() {
  class Tituloclass extends HTMLElement {
    constructor() {
      super();

      var variant =
        this.getAttribute("variant") || "Título - Poppins - 52px - Bold";

      var tituloEl = document.createElement("h1");
      tituloEl.textContent = variant;
      tituloEl.setAttribute("class", "titulo");
      var styletituloEl = document.createElement("style");
      styletituloEl.textContent =
        ".titulo{display: flex;text-align:left;min-height: 61px;width:100%;font-family: 'Roboto';font-style: normal;font-weight: 700;font-size: 52px;line-height: 61px;color: #000000;}       ";
      this.appendChild(styletituloEl);
      this.appendChild(tituloEl);
    }
  }
  customElements.define("titulo-comp", Tituloclass);
}
