import React, { useReducer } from "react";
import PersonCard from "../components/specific/PersonCard";

const initialState = {
  person: null,
  loading: false,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: "" };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, person: action.payload };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getPerson = async () => {
    dispatch({ type: "FETCH_START" });

    const url = "https://api.randomuser.me/";
    try {
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data.results);
      dispatch({ type: "FETCH_SUCCESS", payload: data.results[0] });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: "Error fetching data" });
    }
  };

  return (
    <div>
      <button
        disabled={state.loading}
        onClick={getPerson}
        style={{ cursor: state.loading ? "not-allowed" : "pointer" }}>
        {state.loading ? "Loading..." : "Get person"}
      </button>
      <div>
        {state.error && <h5>{state.error}</h5>}
        {state.person && <PersonCard person={state.person} />}
      </div>
    </div>
  );
};

export default UseReducer;
