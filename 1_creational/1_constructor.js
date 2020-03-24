class CreateComponent {
	constructor(selector, tag, text, style) {
		this.selector = selector;
		this.tag = tag;
		this.text = text;
		this.style = style;
		this.component = undefined;
	}

	insert() {
		const parent = document.querySelector(this.selector);

		if (parent) {
			this.component = document.createElement(this.tag);
			this.component.innerHTML = this.text;

			for (let key in this.style) {
				this.component.style[key] = this.style[key];
			}

			parent.appendChild(this.component);
		}
	}

	getComponent() {
		return this.component;
	}
}
