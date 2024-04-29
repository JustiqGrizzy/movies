import { createContext, useReducer } from "react";

const initialValue = {
  data: [],
  term: "",
  favourite: false,
  isLoading: "",
};

export const Context = createContext();
const reducer = (state = initialValue, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_DATA":
      return { ...state, data: payload };
    case "ON_DELETE":
      const deleteArr = state.data.filter((c) => c.id !== payload);
      return { ...state, data: deleteArr };
    case "ON_FAVOURITE":
      const { id, favourite } = payload;
      const favArr = state.data.map((item) => {
        if (item.id === id) {
          return { ...item, favourite: !favourite };
        }
        return item;
      });
      return { ...state, data: favArr };
    case "ADD_FORM":
      const { name, views } = payload;
      const addArr = { name, views, id: 10, favourite: false };
      return { ...state, data: [...state.data, addArr] };
    case "ON_TERM":
      return { ...state, term: payload };

    default:
      return { state };
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
export default Provider;
