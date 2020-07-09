import React, { useState } from 'react';
import './App.css';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import { Buttons } from './components/Button';
import { PrintResult } from './components/Result';

function App() {
  let [num1, setNum1] = useState('');
  let [operator, setOperator] = useState('');
  let [num2, setNum2] = useState('');
  let [result, setResult] = useState('');

  const handleClick = value => {
    if (value === '+' || value === '-' || value === '*' || value === '/') {
      setOperator(value);
    } else {
      if (operator === '') {
        setNum1(num1 + value)
      } else {
        setNum2(num2 + value)
      }
    }
  }

  const calculateResult = () => {
    let resultOfCalculateResult;
    if (operator === '+') {
      resultOfCalculateResult = (Number(num1) + Number(num2));
    }
    if (operator === '-') {
      resultOfCalculateResult = (Number(num1) - Number(num2));
    }
    if (operator === '*') {
      resultOfCalculateResult = (Number(num1) * Number(num2));
    }
    if (operator === '/') {
      resultOfCalculateResult = (Number(num1) / Number(num2));
    }
    return handleResult(resultOfCalculateResult);
  }

  const handleResult = (value) => {
    setNum2('');
    setOperator('');
    setResult(value);
    setNum1(value);
  }

  const handleClear = () => {
    setNum1('');
    setNum2('');
    setOperator('');
    setResult('');
  }

  return (
    <div className="App">
      <Container>
        <Row className="Result">
          <Col xs={{ size: 4, offset: 4 }} className="d-flex justify-content-center">
            <PrintResult result={result} />
          </Col>
        </Row>
        <Row className="Operators">
          <Col xs={{ size: 4, offset: 4 }} className="d-flex">
            <Row className="d-flex">
              <Col xs="3">
                <Buttons title="+" click={handleClick} />
              </Col>
              <Col xs="3">
                <Buttons title="-" click={handleClick} />
              </Col>
              <Col xs="3">
                <Buttons title="*" click={handleClick} />
              </Col>
              <Col xs="3">
                <Buttons title="/" click={handleClick} />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="Buttons">
          <Col xs={{ size: 4, offset: 4 }}>
            <Row className="d-flex">
              <Col xs="3">
                <Buttons title="1" click={handleClick} />
              </Col>
              <Col xs="3">
                <Buttons title="2" click={handleClick} />
              </Col>
              <Col xs="3">
                <Buttons title="3" click={handleClick} />
              </Col>
              <Col xs="3">
                <Buttons title="=" click={calculateResult} />
              </Col>
            </Row>
            <Row className="d-flex">
              <Col xs="3">
                <Buttons title="4" click={handleClick} />
              </Col>
              <Col xs="3">
                <Buttons title="5" click={handleClick} />
              </Col>
              <Col xs="3">
                <Buttons title="6" click={handleClick} />
              </Col>
            </Row>
            <Row className="d-flex">
              <Col xs="3">
                <Buttons title="7" click={handleClick} />
              </Col>
              <Col xs="3">
                <Buttons title="8" click={handleClick} />
              </Col>
              <Col xs="3">
                <Buttons title="9" click={handleClick} />
              </Col>
            </Row>
            <Row className="d-flex">
              <Col xs="3">
                <Buttons title="C" click={handleClear} />
              </Col>
              <Col xs="3">
                <Buttons title="0" click={handleClick} />
              </Col>
              <Col xs="3">
                <Buttons title="," click={''} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App;
