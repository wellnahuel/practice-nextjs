import { useState } from "react"
import StateContainer from "../components/stateContainer";
import "../styles/globals.css"


function MyApp({ Component, pageProps }) {
  return (
    <StateContainer>
      <Component {...pageProps} />
    </StateContainer>
  )

}

export default MyApp;


//import stateContainer y encierro a Component dentro de ella para que stateContainer este visible en todos lados
