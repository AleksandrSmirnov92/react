import dialogsReduce from "./dialogsReduce";
import profileReduce from "./profileReduce";


let store = {
  _state: {
    massagePage: {
      massages: [
        { id: 1, massage: "hi" },
        { id: 2, massage: "How are you" },
        { id: 3, massage: "you" },
        { id: 4, massage: "yo" },
        { id: 5, massage: "yo" },
      ],
      dialogs: [
        { id: 1, name: "Dmitriy" },
        { id: 2, name: "Petr" },
        { id: 3, name: "Andrey" },
        { id: 4, name: "Vasya" },
        { id: 5, name: "Ivan" },
      ],
      newMassageTextBody: "",
    },
    profilePage: {
      postData: [
        { id: 1, massage: "hi how are you?", likescount: 0 },
        { id: 2, massage: "it's my first post", likescount: 12 },
        { id: 3, massage: "you" },
        { id: 4, massage: "yo" },
        { id: 5, massage: "yo" },
      ],
      newPostText: "",
    },
  },
  getState() {
    return this._state;
  },
  renderEntireTree() {},

  subscribe(observer) {
    this.renderEntireTree = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReduce(this._state.profilePage, action);
    this._state.massagePage = dialogsReduce(this._state.massagePage, action);

    this.renderEntireTree(this._state);
  },
};

export default store;
