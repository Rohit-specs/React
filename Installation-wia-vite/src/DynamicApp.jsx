import { Header } from './dynamic-card/Header'
import { Footer } from './dynamic-card/Footer'
import Dynamic_card from './dynamic-card/Dynamic_card'
import { Fragment } from 'react'

import './index.css'
function DynamicApp() {

    return(<Fragment>
        <Header/>
    <Dynamic_card/>
    <Footer/>
    </Fragment>
)
}

export default DynamicApp
