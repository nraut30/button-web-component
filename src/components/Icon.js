import { html } from "lit";

const IconNames = {
    Submit: "submit",
    Home: "home",
};

export const renderIconChild = (name) => {
    console.log("name", name)
    switch (name) {
        case IconNames.Submit:
            return html`
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.1056 7.55279L0.800241 0.40012C0.450394 0.225196 0.044219 0.501609 0.0785665 0.89124L0.376532 4.27129C0.442936 5.02456 0.928506 5.67597 1.63142 5.95477L5.61608 7.53522C6.03695 7.70216 6.03695 8.29784 5.61608 8.46478L1.63142 10.0452C0.928504 10.324 0.442935 10.9754 0.376532 11.7287L0.0785659 15.1088C0.0442183 15.4984 0.450392 15.7748 0.800241 15.5999L15.1056 8.44721C15.4741 8.26295 15.4741 7.73705 15.1056 7.55279Z"
            fill="white"
          />
        </svg>
      `;

        case IconNames.Home:
            return html`
        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.90295 7.63636V15.1364C2.90295 15.1364 2.90295 16.5 4.24131 16.5C5.57967 16.5 14.9482 16.5 14.9482 16.5C14.9482 16.5 16.2865 16.5 16.2865 15.1364C16.2865 13.7727 16.2865 7.63636 16.2865 7.63636L9.59473 1.5L2.90295 7.63636Z" stroke="white"/>
        </svg>
      `;
        default:
            break;
    }
};
