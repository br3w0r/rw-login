import {store} from "./Base/storeCreator.js"
import Login from "./Comps/main.js"
import {Provider} from "react-redux"
import {render} from "react-dom"
import React from 'react'

render(
    <Provider store={store}>
        <Login />
    </Provider>,
    root
);
