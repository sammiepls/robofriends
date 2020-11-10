import React from "react";

interface CardProps {
  id: string;
  name: string;
  email: string;
}

const Card : React.FC<CardProps>= ({ id, name, email }) => {
  return (
    <article className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?size=200x200`} alt={name} />
      <h2>{name}</h2>
      <p>{email}</p>
    </article>
  );
};

export default Card;
