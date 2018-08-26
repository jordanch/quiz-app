import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { MemoryRouter, Route } from "react-router-dom"

describe("<App>", () => {
	it("renders / without crashing", () => {
		const div = document.createElement("div")
		const INITIAL_STATE = {
			isFetchingData: false,
			hasError: false,
			quizEntities: [],
			currentQuizEntityIndex: null
		}
		ReactDOM.render(
			<MemoryRouter initialEntries={["/"]}>
				<App
					store={{
						dispatch: () => {},
						subscribe: () => {},
						getState: () => INITIAL_STATE
					}}
				/>
			</MemoryRouter>,
			div
		)
		ReactDOM.unmountComponentAtNode(div)
	})

	it("render /quiz without crashing (no api data)", () => {
		const div = document.createElement("div")
		const INITIAL_STATE = {
			isFetchingData: false,
			hasError: false,
			quizEntities: [],
			currentQuizEntityIndex: null
		}
		ReactDOM.render(
			<MemoryRouter initialEntries={["/quiz"]}>
        <App
          store={{
            dispatch: () => {},
            subscribe: () => {},
            getState: () => INITIAL_STATE
          }}
        />
			</MemoryRouter>,
			div
		)
		ReactDOM.unmountComponentAtNode(div)
	})
})
