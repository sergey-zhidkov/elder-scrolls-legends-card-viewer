import React from "react"
import "./App.scss"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./store/store"
import { Shell } from "./pages/shell/Shell"

const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Shell />
            </Provider>
        </BrowserRouter>
    )
}

export default App
