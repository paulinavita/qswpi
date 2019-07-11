import React, {useEffect, useContext } from "react";
import { SwapiContext } from "./Context";
import axios from "axios";
import "./App.css";
import "@qlue-ui/react-component/dist/styles.css";
import LineGraph from "./components/LineGraph";
import Table from "./components/Table";
import Header from "./components/Header";
import Loading from "./components/Loading";

console.log(SwapiContext);
const baseURL = `https://swapi.co/api/people/`;

function App() {
  const { state, dispatch } = useContext(SwapiContext);

  const setLocal = (page, data) => {
    return localStorage.setItem(
      `data-${baseURL}?page=${page}`,
      JSON.stringify(data)
    );
  };

  const getLocal = page => {
    return JSON.parse(localStorage.getItem(`data-${baseURL}?page=${page}`));
  };

  const hitSwapi = async (page) => {
    dispatch({
      type: "LOADING",
      payload: {
        isLoading: true,
      }
    });
    
    if (getLocal(state.page)) {
        dispatch({
        type: "FETCH_API",
        payload: {
          isLoading: false,
          data: getLocal(page),
          page: page
        }
      });
    } else {
      try {
        let { data } = await axios.get(`${baseURL}?page=${page}`);
        for (const person of data.results) {
          person.mass = +person.mass
          person.height = +person.height
        }
        await setLocal(page, data);
        dispatch({
          type: "FETCH_API",
          payload: {
            isLoading: false,
            data: data,
            page: page
          }
        });   
      } catch (error) {
        console.log(error);  
      }
    }
  };

  useEffect(() => {
    hitSwapi(state.page);
  }, [state.page]);

  return (
    <div className="App">

      <Header />
      {state.isLoading && !state.data.results ? (
        <Loading />
      ) : (
        <>
        <div className="container">
          <Table  hitSwapi={hitSwapi} ></Table>
          <LineGraph></LineGraph>
        </div>
        </>
      )}
    </div>
  );
}

export default App;
