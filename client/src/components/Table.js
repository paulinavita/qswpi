import React, { useContext } from "react";
import { SwapiContext } from "../Context";

export default function Table() {
  const { state, dispatch } = useContext(SwapiContext);

  const handleClick = obj => {
    obj.type === "inc"
      ? dispatch({
          type: "INC_PAGE",
          payload: {
            isLoading: false,
            page: state.page + 1
          }
        })
      : dispatch({
          type: "DEC_PAGE",
          payload: {
            isLoading: false,
            page: state.page - 1
          }
        });
  };

  return (
    <>
      <table className="table table-sm table-hover table-inverse">
        <thead className="thead-inverse">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Hair Color</th>
            <th>Skin Color</th>
          </tr>
        </thead>
        <tbody>
          {state.data.results &&
            state.data.results.map((datum, i) => (
              <tr key={datum.name}>
                <td>{i + 1 + (state.page - 1) * 10}</td>
                <td>{datum.name}</td>
                <td>{+datum.height}</td>
                <td>{+datum.mass}</td>
                <td>{datum.hair_color}</td>
                <td>{datum.skin_color}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="py-3 row justify-content-around">
        {state.page === 1 ? (
          <button
            disabled
            onClick={() => handleClick({ type: "dec" })}
            className="btn btn-outline-dark"
          >
            Previous
          </button>
        ) : (
          <button
            onClick={() => handleClick({ type: "dec" })}
            className="btn btn-outline-dark"
          >
            Previous
          </button>
        )}
        <p className="pt-1"> Page {state.page} </p>
        {state.page < state.data.count / 10 ? (
          <button
            onClick={() => handleClick({ type: "inc" })}
            className="btn btn-outline-dark"
          >
            Next
          </button>
        ) : (
          <button
            disabled
            onClick={() => handleClick({ type: "inc" })}
            className="btn btn-outline-dark"
          >
            Next
          </button>
        )}
      </div>
    </>
  );
}
