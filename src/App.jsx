import { useState } from "react"
import styles from "./App.module.css"
import { ButtonContainer } from "./Components/ButtonContainer.jsx"
import Display from "./Components/Display.jsx"
function App() {
  const buttons = [
    {
      button: "C",
      value: ""
    },
    {
      button: "1",
      value: 1
    },
    {
      button: "2",
      value: 2
    },
    {
      button: "3",
      value: 3
    }, {
      button: "4",
      value: 4
    }, {
      button: "5",
      value: 5
    },
    {
      button: "6",
      value: 6
    }, {
      button: "7",
      value: 7
    }, {
      button: "8",
      value: 8
    },
    {
      button: "9",
      value: 9
    }, {
      button: "0",
      value: 0
    }, {
      button: "x",
      value: "*"
    }, {
      button: "/",
      value: "/"
    }, {
      button: "-",
      value: "-"
    }, {
      button: ".",
      value: "."
    },
    {
      button: "+",
    value: "+"
    },
    {
      button: "=",
      value: "="
    }


  ]

  const [currentvalue, setvalue] = useState("")
  const eventhandeler = (buttonvalue) => {

    if (buttonvalue === "=") {
      let result = eval(currentvalue);
      setvalue(result)
    }

    else if (buttonvalue === "") {
      setvalue("")
    }
    else {
      setvalue(currentvalue + buttonvalue)
    }
  }

  return (
    <>
      <h1 className={styles.title}>DEEP_ANMOL CALCULATOR</h1>
      <div className={styles.mainBorder}>
        <Display value={currentvalue} ></Display>
        <ButtonContainer buttonlist={buttons} fun={eventhandeler}></ButtonContainer>

      </div>
    </>
  )
}

export default App
