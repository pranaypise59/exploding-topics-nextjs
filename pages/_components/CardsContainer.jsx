/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import Card from "./Card";
import { cardsData } from "../_utils/data";

const CardsContainer = () => {
  return (
    <>
      <div className="gridContainer">
        <div className="gridInstance">
            {cardsData.map((data) => <Card key={data.label} {...data} />)}
        </div>
      </div>
    </>
  );
};

export default CardsContainer;
