export function initButtonBlue() {
  class Buttonclass extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      var variant = this.getAttribute("variant") || "Button";

      var buttonEl = document.createElement("button");
      buttonEl.setAttribute("class", "button");
      buttonEl.setAttribute("type", "submit");
      buttonEl.textContent = variant;
      var styleButtonB = document.createElement("style");
      styleButtonB.textContent =
        ".button{display:block;width:100%;Height:55px;border: 2px solid #000000;background: #9CBBE9;border-radius: 4px;padding:0 3px;margin: 26px 0 0 0;font-family: 'Roboto';font-style: normal;font-weight: 500;font-size: 22px;line-height: 26px;text-align: center;color: #000000;}";
      this.appendChild(styleButtonB);
      this.appendChild(buttonEl);

      this.querySelector("div")?.appendChild(buttonEl);
    }
  }
  customElements.define("button-comp", Buttonclass);
}
