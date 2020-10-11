import React from 'react'
import './calculator.css'

function Calculator() {

    const [result, setResult] = React.useState('')

    function handleClick(event){
        event.preventDefault()
        setResult (result + event.target.value)
    }

    function backspace(){
        setResult (result.slice(0,-1))
    }

    function equal() {
        try{
            setResult(eval(result).toString())
        } catch(error) {
            setResult('ERROR! Please press "Clear"')
        }
    }

    return (
        <div className='calculator'>
            <section>
                
                <input type="text" value={result} className='input'/>
                
                <div className='keypad'>
                <button onClick={()=>setResult('')} className="clear light">AC</button>
                <button onClick={backspace} className='light'>C</button>
                <button onClick={handleClick} value='/' className='gold'>/</button>
                <button onClick={handleClick} value='7'>7</button>
                <button onClick={handleClick} value='8'>8</button>
                <button onClick={handleClick} value='9'>9</button>
                <button onClick={handleClick} value='*' className='gold'>&times;</button>
                <button onClick={handleClick} value='4'>4</button>
                <button onClick={handleClick} value='5'>5</button>
                <button onClick={handleClick} value='6'>6</button>
                <button onClick={handleClick} value='-' className='gold'>-</button>
                <button onClick={handleClick} value='1'>1</button>
                <button onClick={handleClick} value='2'>2</button>
                <button onClick={handleClick} value='3'>3</button>
                <button onClick={handleClick} value='+' className='gold'>+</button>
                <button onClick={handleClick} className='zero' value='0'>0</button>
                <button onClick={handleClick} value='.'>.</button>
                <button onClick={equal} className='gold'>=</button>
                </div>
                
            </section>
        </div>
    )
}

export default Calculator
