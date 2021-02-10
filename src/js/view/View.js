class View {
  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }
}

export default new View();
