// Registry that the data files fill in. Loaded before any data file.
window.SEPassedOn = {
  unis: {},
  order: [],
  shared: {},   // guides shared by every university (NUS SEP admin)
  sep: null,
  addUni(uni) {
    if (!uni || !uni.id) { console.warn('SEPassedOn: university is missing an id', uni); return; }
    if (!this.unis[uni.id]) this.order.push(uni.id);
    this.unis[uni.id] = uni;
  }
};
