import React from "react"
import Question from "./Question"
import renderer from "react-test-renderer"
import jestMock from "jest-mock"

describe("<Question>", () => {
  it("renders 1 out of 10 questions correctly", () => {
    const quizEntities = [
      {
        category: "General Knowledge",
        question:
          "This is the correct spelling of &quot;Supercalifragilisticexpialidocious&quot;.",
        appId: 1,
        userAnswer: true
      },
      {
        category: "History",
        question:
          "Joseph Stalin&#039;s real name was Ioseb Bessarionis dze Dzugashvili.",
        appId: 2,
        userAnswer: true
      },
      {
        category: "Entertainment: Video Games",
        question:
          "In &quot;Portal 2&quot;, Cave Johnson started out Aperture Science as a shower curtain company.",
        appId: 3,
        userAnswer: false
      },
      {
        category: "Science: Mathematics",
        question:
          "If you could fold a piece of paper in half 50 times, its&#039; thickness will be 3/4th the distance from the Earth to the Sun.",
        appId: 4,
        userAnswer: false
      },
      {
        category: "Entertainment: Film",
        question:
          "&quot;Cube&quot;, &quot;Cube 2: Hypercube&quot; and &quot;Cube Zero&quot; were directed by the same person.",
        appId: 5,
        userAnswer: false
      },
      {
        category: "Entertainment: Books",
        question: "Harry Potter was born on July 31st, 1980.",
        appId: 6,
        userAnswer: true
      },
      {
        category: "Entertainment: Television",
        question: "The Klingon home planet is Qo&#039;noS.",
        appId: 7,
        userAnswer: true
      },
      {
        category: "Science: Mathematics",
        question:
          "L&#039;H&ocirc;pital was the mathematician who created the homonymous rule that uses derivatives to evaluate limits with indeterminations.",
        appId: 8,
        userAnswer: true
      },
      {
        category: "Entertainment: Music",
        question:
          "Pete Townshend&#039;s solo album, &quot;White City: A Novel&quot;, is set in the metropolitan area of Chicago.",
        appId: 9,
        userAnswer: false
      },
      {
        category: "General Knowledge",
        question:
          "Spoon theory is a theory, utilizing &quot;Spoons&quot; as a metaphor for energy they can use in a day.",
        appId: 10,
        userAnswer: true
      }
    ]

    const tree = renderer
      .create(
        <Question
          quizEntities={quizEntities}
          currentQuizEntityIndex={0}
          answerQuizEntity={jestMock.fn()}
          cbAfterLastQuestion={jestMock.fn()}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})