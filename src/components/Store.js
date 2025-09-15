import React, { createContext, useReducer, useContext } from "react";

const StoreContext = createContext();

const initialState = {
  users: [
    { id: "u1", name: "Alice" },
    { id: "u2", name: "Bob" },
    { id: "u3", name: "Carol" }
  ],
  posts: [],
  notifications: []
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_POST":
      return { ...state, posts: [action.payload, ...state.posts] };
    case "UPDATE_POST":
      return {
        ...state,
        posts: state.posts.map((p) =>
          p.id === action.payload.id ? { ...p, ...action.payload.updates } : p
        )
      };
    case "INCREMENT_REACTION":
      const { postId, idx } = action.payload;
      return {
        ...state,
        posts: state.posts.map((p) => {
          if (p.id !== postId) return p;
          const newReactions = [...p.reactions];
          if (idx < 4) newReactions[idx]++;
          return { ...p, reactions: newReactions };
        })
      };
    case "LOAD_NOTIFICATIONS":
      return { ...state, notifications: action.payload };
    default:
      return state;
  }
}

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
