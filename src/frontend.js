import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import CorrectMessage from "./components/CorrectMessage";
import IncorrectMessage from "./components/IncorrectMessage";
import "./frontend.scss";

document.addEventListener("DOMContentLoaded", function () {
  const divToUpdate = document.querySelectorAll(".quiz-update-me");
  divToUpdate.forEach(function (div) {
    const data = JSON.parse(div.querySelector("pre").innerHTML);
    ReactDOM.render(<Quiz data={data} />, div);
    div.classList.remove("quiz-update-me");
  });
});

const Quiz = ({ data }) => {
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(undefined);
  const [isCorrectDelayed, setIsCorrectDelayed] = useState(undefined);

  const handleAnswer = (index) => {
    setCorrectAnswer(index);
    if (index == data.correctAnswer) {
      setIsCorrect(true);
    } else {
      // alert('Wrong Answer')
      setIsCorrect(false);
    }
  };
  console.log(data.answerColor);

  useEffect(() => {
    if (isCorrect === false) {
      setTimeout(() => {
        setIsCorrect(undefined);
      }, 2500);
    }

    if (isCorrect === true) {
      setTimeout(() => {
        setIsCorrectDelayed(true);
      }, 1000);
    }
  }, [isCorrect]);
  return (
    <div
      className="quiz-frontend relative p-5  rounded-md shadow-md shadow-gray-400 "
      style={{ backgroundColor: data.bgColor }}
    >
      <div className="space-y-4 relative z-10">
        <p
          className="text-xl font-semibold"
          style={{
            color: data.headingColor,
            textAlign: data.theAlignment,
          }}
        >
          {data.question}
        </p>
        <ul className="flex justify-between gap-3">
          {data.answers.map((answer, index) => {
            return (
              <li
                key={index}
                onClick={
                  isCorrect === true ? undefined : () => handleAnswer(index)
                }
                style={{
                  color: data.answerColor ? data.answerColor : "#000000",
                  backgroundColor: data.answerBgColor
                    ? data.answerBgColor
                    : "#efdfdf",
                }}
                className={` ${
                  isCorrectDelayed === true && index === data.correctAnswer
                    ? "cursor-normal"
                    : isCorrectDelayed === true && index !== data.correctAnswer
                    ? "cursor-normal opacity-50"
                    : "cursor-pointer"
                }  hover:bg-[${
                  data.answerBgColorHover
                }] px-3 py-3 rounded-md w-full  flex gap-2 items-center font-semibold`}
              >
                {isCorrectDelayed === true && index == data.correctAnswer && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    className="bi bi-check text-blue-600"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                )}
                {isCorrectDelayed === true && index !== data.correctAnswer && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    className="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                )}
                <span>{answer}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <CorrectMessage show={isCorrect} />
      <IncorrectMessage show={isCorrect} />
    </div>
  );
};
