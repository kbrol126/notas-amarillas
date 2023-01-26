const state = {
  data: {
    task: [],
  },
  listeners: [],

  init() {
    const localData = localStorage.getItem("save-state");
    this.setState(JSON.parse(localData!));
  },
  getState() {
    return this.data;
  },
  getEnableTask() {
    const cS = this.getState();

    const arrayTask: [] = cS.task;
    console.log(arrayTask);
    return arrayTask.filter((t: any) => t.deleted == false);
  },
  changeItem(id, value) {
    const cS = this.getState();
    const found = cS.task.find((t) => {
      return t.id == id;
    });
    found.checked = value;
    this.setState(cS);
  },

  setState(newState) {
    this.data = newState;

    for (const cb of this.listeners) {
      cb(newState);
    }
    localStorage.setItem("save-state", JSON.stringify(this.getState()));
  },
  suscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },
  addTask(id: number, title: string) {
    const cS = state.getState();
    cS.task.push({ id, title, checked: false, deleted: false });
    this.setState(cS);
  },

  deleteItems(id: number) {
    const cS = this.getState();
    const arrayFiltrado = cS.task.filter((i) => {
      return i.id != id;
    });
    const itemDelete = cS.task.find((i) => {
      return i.id == id;
    });
    console.log(itemDelete);
    itemDelete.deleted = true;

    arrayFiltrado.push(itemDelete);
    cS.task = arrayFiltrado;
    this.setState(cS);
  },
};

export { state };
