import { html, LitElement, unsafeCSS, svg } from "lit";
import { backGroundColorHandler, textColor, buttonBorder } from "./utils";
import { renderIconChild } from "./Icon";

export class Button extends LitElement {
  static properties = {
    variant: { type: String },
    disabled: { type: String },
    fullWidth: { type: String },
    size: { type: String },
    iconOnly: { type: Boolean },
    width: { type: String },
    height: { type: String },
    icon: { type: String }
  };

  constructor() {
    super();
    this.disabled = false;
    this.width = "189px";
    this.height = "85px";
  }

  render() {
    const dynamicStyle = `
    padding: ${this.size == "small" ? "6px 16px" : "8px, 0px, 8px, 0px"};
    border-radius: 4px;
    font-size:  ${this.iconOnly ? "" : "14px"};
    font-weight: ${this.iconOnly ? "" : "400"};
    line-height: ${this.iconOnly ? "" : "24px"};
    cursor: ${this.disabled ? "not-allowed" : "pointer"};
    background-color: var(
        --button-background-color,
        ${unsafeCSS(backGroundColorHandler(this.variant))}
    );
    color: var(
        --button-color,
        ${unsafeCSS(textColor(this.variant))}
    ); 
    border: var(
        --button-border,
        ${unsafeCSS(buttonBorder(this.variant))}
    );
    width: ${this.fullWidth ? "100%" : this.width};
    height: ${this.height};
    opacity: ${this.disabled ? "0.5" : "1"};
    margin: 5px;
`;
    if (this.iconOnly) {
      const iconSvg = renderIconChild(this.icon);
      return html`
        <button style="${dynamicStyle}">
        ${svg`${iconSvg}`}
        <br />
        <slot></slot>
        </button>
      `;
    } else {
      return html`<button style="${dynamicStyle}"><slot></slot></button>`;
    }
  }
}
customElements.define("lit-button", Button);
