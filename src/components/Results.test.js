import React from "react"
import Results from "./Results"
import renderer from "react-test-renderer"
import { MemoryRouter } from "react-router"
import mockData from "../data/data.mock.json"
import { handleApiData } from "../data/transform"

it("renders 10 quiz entities correct with some right and some wrong", () => {
  const quizData = handleApiData(mockData).map((quizEntity, i) => ({
    ...quizEntity,
    userAnswer: i % 2 === 0 ? true : false
  }))

  const tree = renderer
    .create(
      <MemoryRouter>
        <Results quizEntities={quizData} />
      </MemoryRouter>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
