import React from "react"
import "./App.scss"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./store/store"
import { Home } from "./pages/home/Home"

const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Home />
            </Provider>
        </BrowserRouter>
    )
}

export default App
