import React from "react";
import { Card, Button } from "react-bootstrap";

const Cards = ({ data }) => {
  return (
    <Card style={{ width: "20em" }}>
      <Card.Img variant="top" src={data.image} />
    </Card>
  );
};

export default Cards;
