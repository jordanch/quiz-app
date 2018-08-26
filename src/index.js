import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import "./index.css"
import store from "./store/quiz_app.store"
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
	<BrowserRouter>
		<App store={store} />
	</BrowserRouter>,
	document.getElementById("root")
)
registerServiceWorker()
