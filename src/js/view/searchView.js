class searchView {
  _data;
  _parentEl = document.querySelector(".form");

  getQuery() {
    const query = this._parentEl.querySelector(".form__input").value;
    return query;
  }

  addHandlerSearch(handler) {
    this._parentEl.addEventListener("submit", handler);
  }
}

export default new searchView();
