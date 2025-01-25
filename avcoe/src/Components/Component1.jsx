import React, { useState } from 'react'

function Calculator() {
const[num1, setnum1] = useState(0);
const[num2, setnum2] = useState(0);
const[res, setres] = useState(0);

const storenum1 = (e) => {
  setnum1(parseFloat(e.target.value));

}
const storenum2 = (e) => {
    setnum2(parseFloat(e.target.value))
}
const addition = (e) => {
    
    var c = num1 + num2
    setres(c)
}
const substraction = (e) => {
    
    var c = num1 - num2
    setres(c)
}
const multiplication = (e) => {
    
    var c = num1 * num2
    setres(c)
}
const division = (e) => {
    
    var c = num1 / num2;
    setres(c);
}

  return (
    <>
    <h1>Calculator</h1>
    <form>
        <input type="number" id='num1' placeholder='Enter Number' onChange={storenum1} />
        <input type="number" id='num2' placeholder='Enter Number' onChange={storenum2} />
        <input type="button" value='add' onClick={addition} />
        <input type="button" value='sub' onClick={substraction} />
        <input type="button" value='mul' onClick={multiplication} />
        <input type="button" value='div' onClick={division} />

        <h1>Result : {res}</h1>
        </form> 
        </>
    
  )
}

export default Calculator