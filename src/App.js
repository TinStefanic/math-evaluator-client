//@ts-check
import './App.css';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ExpressionInput from './components/expressionInput';
import DisplayEvaluatorResponse from './components/displayEvaluatorResponse';

function App() {
  const [input, setInput] = useState("");

  const [response, setResponse] = useState({
    result: undefined,
    errorMessage: undefined,
    errorStartPos: undefined,
    errorEndPos: undefined,
    errorOpStartPos: undefined,
    errorOpEndPos: undefined,
    input: undefined // Not part of original response, added copy of input.
  });

  const fetchEvaluationResult = async () => {
    const urlParams = new URLSearchParams({expression: input});
    const response = await fetch("http://localhost:40404/api?" + urlParams, {headers: {Accept: "application/json"}});

    const respJson = await response.json();
    respJson.input = input;

    setResponse(respJson);
  };

  return (
    <div className="d-flex align-items-center min-vh-100">
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <h1>Mathematical expression evaluator</h1>
          </div>
          <div className="col-12">
            <ExpressionInput input={input} setInput={setInput}/>
          </div>
          <div className="col-12">
            <DisplayEvaluatorResponse response={response}/>
          </div>
          <div className="col-12">
            <Button onClick={fetchEvaluationResult}>Evaluate</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
