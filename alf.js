class ALFjs {
	items;

	constructor(selector) {
		if (selector == '' || selector == undefined) {

		} else if (selector[0] != '.' && selector[0] != '#') {
			this.items = [selector];
		} else {
			this.items = document.querySelectorAll(selector);
		}
	}

	each(func) {
		return this.items.forEach(func);
	}

	addClass(name) {
		Array.prototype.forEach.call(this.items, function(el) {
			el.classList.add(name);
		});
		return this;
	}

	removeClass(name) {
		Array.prototype.forEach.call(this.items, function(el) {
			el.classList.remove(name);
		});
		return this;
	}

	toggleClass(name) {
		Array.prototype.forEach.call(this.items, function(el) {
			console.log(el);
			el.classList.toggle(name);
		});
		return this;
	}

	hide() {
		Array.prototype.forEach.call(this.items, function(el) {
			el.style.display = 'none';
		});
		return this;
	}

	show() {
		Array.prototype.forEach.call(this.items, function(el) {
			el.style.display = 'block';
		});
		return this;
	}

	style(property, value) {
		Array.prototype.forEach.call(this.items, function(el) {
			el.style[property] = value;
		});
		return this;
	}

	first() {
		return alf(this.items[0]);
	}

	last() {
		return alf(this.items[this.items.length - 1]);
	}

	count() {
		return this.items.length;
	}

	on(event, func) {
		Array.prototype.forEach.call(this.items, function(el) {
			el.addEventListener(event, func);
		});
		return this;
	}

	ajax(url, method, data, func) {
		var xhr = new XMLHttpRequest();
		xhr.open(method, url, true);
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
				func(xhr.responseText);
			}
		}
		xhr.send(data);
	}
}

export function alf(selector) {
	return new ALFjs(selector);
}