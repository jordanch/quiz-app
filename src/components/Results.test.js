import React from "react"
import Results from "./Results"
import renderer from "react-test-renderer"
import { MemoryRouter } from "react-router"


it("renders 10 quiz entities correct with some right and some wrong", () => {
  const quizEntities = [
    {
      category: "General Knowledge",
      question:
        "This is the correct spelling of &quot;Supercalifragilisticexpialidocious&quot;.",
      appId: 1,
      userAnswer: true,
      correctAnswer: true
    },
    {
      category: "History",
      question:
        "Joseph Stalin&#039;s real name was Ioseb Bessarionis dze Dzugashvili.",
      appId: 2,
      userAnswer: true,
      correctAnswer: true
    },
    {
      category: "Entertainment: Video Games",
      question:
        "In &quot;Portal 2&quot;, Cave Johnson started out Aperture Science as a shower curtain company.",
      appId: 3,
      userAnswer: false,
      correctAnswer: true
    },
    {
      category: "Science: Mathematics",
      question:
        "If you could fold a piece of paper in half 50 times, its&#039; thickness will be 3/4th the distance from the Earth to the Sun.",
      appId: 4,
      userAnswer: false,
      correctAnswer: true
    },
    {
      category: "Entertainment: Film",
      question:
        "&quot;Cube&quot;, &quot;Cube 2: Hypercube&quot; and &quot;Cube Zero&quot; were directed by the same person.",
      appId: 5,
      userAnswer: false,
      correctAnswer: true
    },
    {
      category: "Entertainment: Books",
      question: "Harry Potter was born on July 31st, 1980.",
      appId: 6,
      userAnswer: true,
      correctAnswer: true
    },
    {
      category: "Entertainment: Television",
      question: "The Klingon home planet is Qo&#039;noS.",
      appId: 7,
      userAnswer: true,
      correctAnswer: true
    },
    {
      category: "Science: Mathematics",
      question:
        "L&#039;H&ocirc;pital was the mathematician who created the homonymous rule that uses derivatives to evaluate limits with indeterminations.",
      appId: 8,
      userAnswer: true,
      correctAnswer: false
    },
    {
      category: "Entertainment: Music",
      question:
        "Pete Townshend&#039;s solo album, &quot;White City: A Novel&quot;, is set in the metropolitan area of Chicago.",
      appId: 9,
      userAnswer: false,
      correctAnswer: false
    },
    {
      category: "General Knowledge",
      question:
        "Spoon theory is a theory, utilizing &quot;Spoons&quot; as a metaphor for energy they can use in a day.",
      appId: 10,
      userAnswer: true,
      correctAnswer: true
    }
  ]
  const tree = renderer
    .create(
      <MemoryRouter>
        <Results quizEntities={quizEntities} />
      </MemoryRouter>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
