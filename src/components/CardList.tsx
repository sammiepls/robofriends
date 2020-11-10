import React from "react";
import Card from "./Card";
import { Robot } from "redux/actions/requestActions";

interface CardListProps {
  robots: Robot[];
}

const CardList: React.FC<CardListProps> = ({ robots }) => {
  return (
    <>
      {robots.map((robot) => (
        <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
      ))}
    </>
  );
};

export default CardList;
