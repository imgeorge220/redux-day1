const INITIAL_STATE = { face: "@(・●・)@", color: "white" };

function rootReducer(state = INITIAL_STATE, action) {
  return { ...state, face: action.face, color: action.color };
}

const store = Redux.createStore(rootReducer);