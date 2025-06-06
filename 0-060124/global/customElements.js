class StepElement extends HTMLElement {
    head = null;
    content = null;
    contentWrapper = null;

    constructor() {
        super();
    }

    static get observedAttributes() {
        return ['type', 'head'];
    }

    connectedCallback() {
        this.head = document.createElement("div");
        this.head.classList.add("step-head");


        this.content = document.createElement("div");
        this.content.classList.add("step-content");

        this.contentWrapper = document.createElement("div");
        this.contentWrapper.classList.add("step-content-wrapper");

        this.contentWrapper.appendChild(this.content);

        this.content.innerHTML = this.innerHTML;
        this.innerHTML = "";

        if (this.attributes.getNamedItem("head") !== null) {
            this.head.innerHTML = this.attributes.getNamedItem("head").value;
        }

        this.appendChild(this.head);
        this.appendChild(this.contentWrapper);

        this.classList.add("step");
        this.style.display = "block";
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            if (name === 'type') {
                this.classList.add(newValue);
            } else if (name === 'head') {
                if (this.head === null) {
                    return;
                }
                this.head.innerHTML = newValue;
            }
        }
    }
}

class BrandNav extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="navbar">
                <div class="account-dropdown-wrapper">
                    <div class="username-link">Login</div>
                    <div class="account-options">
                        <div class="logout-button option">Logout</div>
                    </div>
                </div>
            </div>
            <div class="navbar-visibility-button">
                ^
            </div>
            <div class="nav-shift-fix"></div>
        `
    }
}

class ConsoleLogElement extends HTMLElement {
    head = null;
    content = null;

    constructor() {
        super();
    }

    static get observedAttributes() {
        return ['type', 'message',"head"];
    }

    connectedCallback() {
        this.head = document.createElement("div");
        this.head.classList.add("log-head");

        this.content = document.createElement("div");
        this.content.classList.add("log-content");

        if (this.attributes.getNamedItem("message") !== null) {
            this.content.innerHTML = this.attributes.getNamedItem("message").value;
        }

        if (this.attributes.getNamedItem("head") !== null) {
            this.head.innerHTML = this.attributes.getNamedItem("head").value;
        }

        this.appendChild(this.head);
        this.appendChild(this.content);

        this.classList.add("console-log");
        this.style.display = "block";
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            if (name === 'type') {
                this.classList.add(newValue);
            } else if (name === 'message') {
                if (this.content === null) {
                    return;
                }
                this.content.innerHTML = newValue;
            }else if (name === 'head') {
                if (this.head === null) {
                    return;
                }
                this.head.innerHTML = newValue;
            }
        }
    }
}

customElements.define("editor-step", StepElement);
customElements.define("brand-nav", BrandNav);
customElements.define("console-log", ConsoleLogElement);