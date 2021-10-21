import React from "react";
import styles from "./style.module.css";

interface IProps {
  questions: any[];
}

const random = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

const randomTheme = random(["capital", "flag"]);

export const QuizCard: React.FC<IProps> = ({ questions }) => {
  const rightAnswer = random(questions);
  console.log(rightAnswer.capital);

  const quest =
    randomTheme === "capital"
      ? `${rightAnswer.capital[0]} is the capital of`
      : "Which country does this flag belong to?  ";

  return (
    <div className={styles.quizCard}>
      {randomTheme === "flag" && (
        <img
          className={styles.quizCard_flag}
          src={rightAnswer.flags.svg}
          alt="flag of country"
        />
      )}
      <h3 className={styles.quizCard_title}>{quest}</h3>
      <ul className={styles.quizCard_list}>
        {questions.map((el) => (
          <li className={styles.quizCard_item} key={el.capital}>
            {el.name.common}
          </li>
        ))}
      </ul>
    </div>
  );
};
