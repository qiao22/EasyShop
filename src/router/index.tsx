import React from 'react'
import RouterView from './routerview'
import routes from './routerconfig'
import { BrowserRouter } from 'react-router-dom'

export default () => {
    return <BrowserRouter>
        <RouterView routes={routes}></RouterView>
    </BrowserRouter>
}