import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { Container, Row, Col } from 'react-bootstrap';
import pizzas from './data.json';

import { Confirmation } from './compoments/Confirmation';
import { PizzaCard } from './compoments/PizzaCard';

export const App = () => {
  const [ordered, setOrdered] = useState(false);

  const handleDisplayConfirmation = () => {
    setOrdered(true);

    setTimeout(() => {
      setOrdered(false);
    }, 3000);
  };

  return (
    <>
      {ordered && <Confirmation toggle={setOrdered} />}
      <Container>
        <Row>
          {pizzas.map((data) => (
            <Col xs={12} sm={6} md={4} lg={3} className="mb-5" key={`${data.id}`}>
              <PizzaCard data={data} setOrdered={handleDisplayConfirmation} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
