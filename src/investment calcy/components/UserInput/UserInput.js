import { useState } from "react"
import './UserInput.css'

const intialUserInvestment = {
  'current-savings': 0,
  'yearly-contribution': 10000,
  'expected-return': 10,
   duration: 10,
}

const UserInput = (props) => {

  const [userInput, setUserInput] = useState(intialUserInvestment)


    const submitHandler = (event) => {
        event.preventDefault();
        
        props.onCalculate(userInput) //-------Lifting the STATE-UP(Callback Function)----------------------
    }

    const resetHandler = () => {
        setUserInput(intialUserInvestment)
    }

    const inputChangeHandler = (input, value) => {
        setUserInput((prevInput) => {
          return{
            ...prevInput,
            [input] : +value   //----the "+", convert the string value to a number---------------------------------------------
          }
        })
    }


  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings (INR)</label>
            <input onChange={(event)=>inputChangeHandler('current-savings', event.target.value)} 
            value={userInput['current-savings']}
            type="number" 
            id="current-savings" />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings (INR)</label>
            <input onChange={(event)=>inputChangeHandler('yearly-contribution', event.target.value)} 
            value={userInput['yearly-contribution']}
            type="number" 
            id="yearly-contribution" />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">Expected Interest(%)</label>
            <input onChange={(event)=>inputChangeHandler('expected-return', event.target.value)} 
            value={userInput['expected-return']}
            type="number" 
            id="expected-return" />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input onChange={(event)=>inputChangeHandler('duration', event.target.value)} 
            value={userInput['duration']}
            type="number" 
            id="duration" />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={resetHandler}>
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  )
}

export default UserInput
