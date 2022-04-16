const apdateText = "APDATE-NEW-MASSAGE-BODY";
const SEND_MASSAGE = "SEND-MASSAGE";

let initialState = {
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
};

const dialogsReduce = (state = initialState, action) => {
  let stateCopy;
  switch (action.type) {
    case apdateText:
      stateCopy = { ...state, newMassageTextBody: action.body };
      return stateCopy;
    case SEND_MASSAGE:
      let body = state.newMassageTextBody;
      stateCopy = { ...state,
        newMassageTextBody : "",
        massages:[...state.massages,{ id: 6, massage: body } ]
      };
      return stateCopy;
    default:
      return state;
  }
};
export const sendMassageCreator = () => {
  return {
    type: SEND_MASSAGE,
  };
};
export const updateNewMassageBodyCreator = (body) => {
  return {
    type: apdateText,
    body: body,
  };
};

export default dialogsReduce;
