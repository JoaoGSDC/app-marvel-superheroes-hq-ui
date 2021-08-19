import { createStore } from "redux";

const INITIAL_STATE = {
  superhero: {},
};

const superheroes = (state: any = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "ADD_SUPERHERO":
      return { ...state, superhero: action.superhero };

    default:
      return state;
  }
};

const store = createStore(superheroes);

export default store;
