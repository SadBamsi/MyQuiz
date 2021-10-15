import React, { useEffect } from "react";
import styles from "./style.module.css";

interface IProps {
  quest?: string;
}

const getData = async () =>
  await fetch("https://restcountries.com/v3.1/name/peru")
    .then((res) => res.json())
    .then((el) => el);

export const QuizCard: React.FC<IProps> = ({ quest }) => {
  const farmDataCpountries = getData().then((res) => console.log(res));

  return (
    <div className={styles.quizCard}>
      <h3 className={styles.quizCard_title}>{quest ?? "Some quest"}</h3>
    </div>
  );
};
