import Card from "./components/Card"
import {Header} from "./components/Header"
import {Footer} from "./components/Footer"

import './index.css'

// import { Food } from "./components/Food"


// function App() {

//   return (
//     <>
//       <Header />
//       <Food />
//       <Footer />
//     </>
//   )
// }
function StaticApp() {


  return (
    <>
      <Header></Header>
      <Card />
      <Footer />
    </>
  )
}

export default StaticApp
