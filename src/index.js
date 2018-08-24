import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import "./index.css"
import store from "./store/quiz_app.store"

ReactDOM.render(<App store={store} />, document.getElementById("root"))
registerServiceWorker()
