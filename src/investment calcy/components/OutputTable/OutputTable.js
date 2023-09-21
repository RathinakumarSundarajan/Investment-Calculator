import React from 'react'
import './OutPutTable.css'


const formatter = new Intl.NumberFormat('en-IN',{
  style:'currency',
  currency:'INR',
  minimumFractionDigits:3,
  maximumFractionDigits:3
})

const OutputTable = (props) => {

  //  console.log(props.data)


  return (
    <div>
      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((yearData) => (
            <tr key= {yearData.year}>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.savingsEndOfYear)}</td>
            <td>{formatter.format(yearData.yearlyInterest)}</td>
            <td>
              {formatter.format(
              yearData.savingsEndOfYear - 
              props.initialInvetment - 
              yearData.yearlyContribution * yearData.year
              )}
              </td>
            <td>{formatter.format(
              props.initialInvetment +
               yearData.yearlyContribution * yearData.year)}</td>
          </tr> 
          ))}
          
        </tbody>
      </table>
    </div>
  )
}

export default OutputTable
