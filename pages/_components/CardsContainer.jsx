/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { cardsData } from "../_utils/data";
import { generateRandomArray } from "../_utils/helpers";

const CardsContainer = () => {
  return (
    <>
      <div className="gridContainer">
        <div className="gridInstance">
            {cardsData.map((data) => <Card key={data.label} {...data}/>)}
        </div>
      </div>
    </>
  );
};

export default CardsContainer;
