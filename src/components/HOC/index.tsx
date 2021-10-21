import { useState } from "react";
import { QuizCard } from "../quizcard";
import { Spinner } from "../spinner";

const random = (arr: [], newArr: []) => {
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr.splice(randomIndex, 1)[0];
    newArr.push(item);
  }
  return newArr;
};

const countries: [] = [];

const promise = fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => random(data, countries));

export const QuizWrapper: React.FC = () => {
  const [data, setData] = useState([]);
  promise.then((res) => setData(res));

  return (
    <>
      {data.length === 0 && <Spinner />}
      {data.length !== 0 && <QuizCard questions={data} />}
    </>
  );
};
