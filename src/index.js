import React from "react";
import ReactDOM from "react-dom";
import Table from "react-dj-table";
import products from "./products.json";
import { InputReducer } from "./inputReducer";

import "semantic-ui-css/semantic.min.css";
import "./app.css";
import "./pager.css";
import "./search.css";
import "./dualRange.css";

// get icons here https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/icon.min.css
import { ACTIONS } from "./actions";
function App() {
  const options = {
    tableCss: "ui fixed red table",
    sortable: true,
    pageable: true,
    cellCss: "cellCss",
    pageSize: 5,
    pagerCss: "pager",
    hiddenCols: ["id", "ProductCode", "DateScanned"],
    searchable: true,
    searchInputCss: "searchInputCss",
    dateCols: [{ DateScanned: "en-GB" }],
    dateOptions: {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric"
    }
  };
  const initialState = {
    json: products,
    jsonCopy: products,
    options: options,
    minVal: 1,
    maxVal: 1000,
    currentMinVal: 1,
    currentMaxVal: 1000
  };

  //setup a reducer for the input
  const [state, dispatch] = React.useReducer(InputReducer, initialState);

  const onMinSliderChange = (e) => {
    dispatch({
      type: ACTIONS.UPDATEA,
      payload: { value: e.currentTarget.value }
    });
  };

  const onMaxSliderChange = (e) => {
    dispatch({
      type: ACTIONS.UPDATEB,
      payload: { value: e.currentTarget.value }
    });
  };
  return (
    <div className="App">
      <div className="title">
        <small>Semantic UI example, 1000 rows.</small>
        <small>Editable, Searchable, Pageable & Sortable.</small>
        <span className="secondspan">
          Yarn add
          <span className="firstspan">react-dj-table</span>
        </span>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://react-dj-table.netlify.app/"
            >
              <i className="book icon" />
              Docs
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/sajrashid/React-Dynamic-Json-Table"
            >
              <i className="github icon" />
              Source
            </a>
          </li>
        </ul>
      </div>
      <div
        style={{
          position: "relative",
          top: "-2em",
          left: "1.3em",
          width: "99%",
          color: "red"
        }}
      >
        Example: adding a external dual range filter, json filters outside the
        table
      </div>
      <div
        style={{
          color: "#bcbcbc",
          fontSize: "1.2em",
          position: "relative",
          marginleft: "1em",
          marginRight: "1em",
          left: "1em",
          top: "-1em",
          width: "99%",
          background: "#333",
          lineHeight: "2em",
          padding: "0.3em",
          borderRadius: "0.2em"
        }}
      >
        Filters Price Column, uses two input range filters, return all the rows
        between the min and max values
      </div>
      <div className="slidervDiv">
        <label htmlFor="a">{state.currentMinVal}</label>
        <input
          name="a"
          min={state.minVal}
          max={state.maxVal}
          onChange={onMinSliderChange}
          type="range"
          value={state.currentMinVal}
        />
        <input
          name="b"
          min={state.minVal}
          max={state.maxVal}
          className="b"
          onChange={onMaxSliderChange}
          type="range"
          value={state.currentMaxVal}
        />
        <label className="labelb" htmlFor="b">
          {state.currentMaxVal}
        </label>
      </div>
      <Table json={state.json} options={options} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
