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
    return cS.task.filter((t) => !t.deleted);
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
    cS.task.push({ id, title, checked: false });
    this.setState(cS);
  },

  deleteItems(id) {
    const cS = this.getState();
    const found = cS.task.filter((i) => {
      return i.id != Number(id);
    });
    console.log(found);
    this.setState(found);
  },
};

export { state };
