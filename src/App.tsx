import React from "react"
import "./App.scss"
import { HashRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./store/store"
import { Shell } from "./pages/shell/Shell"

const App = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <Shell />
            </Provider>
        </HashRouter>
    )
}

export default App
