import React, { useState } from 'react'
function App() {

  const [result, setResult] = useState('')
  const [resultSegitiga, setResultSegitiga] = useState('')
  const [resultPrima, setResultPrima] = useState('')
  const [currentValue, setCurrentValue] = useState("")

  const convertSegitiga = () => {
    let temp = ``
    let arr = currentValue.split("")
    let total = arr.length

    for (let a = 0; a < total; a++) {
      if (temp == "") {
        temp = arr[a]
      } else {
        temp = temp + `${arr[a]}`
      }
      for (let b = 0; b < a; b++) {
        temp = temp + "0"
        if (b == a - 1) {
          temp = temp + " "
        }
      }
    }
    let ah = temp.split(" ")
    console.log("ah", ah)
    setResultSegitiga(ah)
  }

  const convertGanjil = () => {
    let temp = ""
    for (let a = 0; a < currentValue; a++) {
      if (a % 2 != 0) {
        temp = temp + "," + a
      }
    }
    setResult(temp)
  }

  const convertPrima = () => {
    let temp = ""
    for (let a = 0; a < currentValue; a++) {
      let val = a
      let maxdibagi = 0;
      if(val != 1){
        for (let a = 0; a < 10; a++) {
          if (val % a == 0) {
            maxdibagi++
          }
        }
        if (maxdibagi == 1 && val % 2 != 0 && val % 3 != 0) {
          temp = temp + "," + val
        }
        if(maxdibagi>1){
          if(val==2 || val==3 || val==5 || val==7){
            temp = temp + "," + val
          }
        }
      }
    }
    setResultPrima(temp)
  }

  return (
    <div>
      <input
        type="text"
        placeholder='Input Angka'
        value={currentValue}
        onChange={($e) => {
          setCurrentValue($e.target.value)
        }}
      />
      <div>
        <button onClick={() => {
          convertSegitiga()
        }}>Generate Segitiga</button>
        <button onClick={() => {
          convertGanjil()
        }}>Generate Bilangan Ganjil</button>
        <button onClick={() => {
          convertPrima()
        }}>Generate Bilangan Prima</button>
      </div>
      <h2>Result</h2>
      {result}
      <ul>
        {resultSegitiga && resultSegitiga.map(res => {
          return <li style={{ listStyle: 'none' }}>{res}</li>
        })}
      </ul>
      {resultPrima}
    </div>
  );
}

export default App;
