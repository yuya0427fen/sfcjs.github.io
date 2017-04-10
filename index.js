(() => {
  function createContainer() {
    const container = document.createElement("div");
    container.classList.add("container");
    return container;
  }
  function empty(elm) {
    const list = Array.prototype.slice.apply(elm.children);
    for (const child of list) {
      elm.removeChild(child);
    }
  }
  function render(text) {
    const container = createContainer();
    const rendered = marked(text);
    container.innerHTML = rendered;
    return container;
  }
  function mount(container, elm) {
    empty(container);
    container.appendChild(elm);
  }
  window.addEventListener("DOMContentLoaded", e => {
    fetch("README.md")
      .then(response => response.text())
      .then(text => render(text))
      .then(rendered => mount(document.body, rendered))
      .catch(error => console.log(error));
  }, { once: true });
})()