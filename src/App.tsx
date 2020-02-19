import React from "react"
import { BrowserRouter } from "react-router-dom"
import "./App.scss"
import { Provider } from "react-redux"
import { store } from "./store/store"

const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className="App">
                    app content
                    {/* <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                            Edit <code>src/App.tsx</code> and save to reload.
                        </p>
                        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                            Hot reload
                        </a>
                    </header> */}
                </div>
            </Provider>
        </BrowserRouter>
    )
}

export default App
