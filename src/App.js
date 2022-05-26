import {React, Component} from 'react'

import './App.css'

import Button from './components/Button/Button'

class App extends Component {


  buttonClick=(e)=>{
    const btnText = e.target.innerText
    const calculatorDisplay = document.querySelector('input')

    if (btnText!=='=' && btnText!=='-/+' && btnText!=='%')
        calculatorDisplay.value+=btnText
    if (btnText==='-/+')
        calculatorDisplay.value+='-'
    if (btnText==='=')
        calculatorDisplay.value=eval(String(calculatorDisplay.value))   
    if (btnText==='AC')
        calculatorDisplay.value=''
    if (btnText==='%'){
      calculatorDisplay.value+='*0.01'
      calculatorDisplay.value=eval(String(calculatorDisplay.value)) 
    }
    
  }

  render(){

  const calculatorBtns =[
      {text: 'AC',style: 'button-special-symbols'},{text: '-/+',style: 'button-special-symbols'},{text: '%',style: 'button-special-symbols'},{text: '/',style: 'button-math-symbols'},
      {text: '7',style: 'button-numbs'},{text: '8',style: 'button-numbs'},{text: '9',style: 'button-numbs'},{text: '*',style: 'button-math-symbols'},
      {text: '4',style: 'button-numbs'},{text: '5',style: 'button-numbs'},{text: '6',style: 'button-numbs'},{text: '-',style: 'button-math-symbols'},
      {text: '1',style: 'button-numbs'},{text: '2',style: 'button-numbs'},{text: '3',style: 'button-numbs'},{text: '+',style: 'button-math-symbols'},
      {text: '0',style: 'button-numbs'},{text: '.',style: 'button-numbs'},{text: '=',style: 'button-math-symbols'},
  ]

  const calculatorButtonsRender = calculatorBtns.map((btn,indx)=>{
    if (btn.text==='0')
    return(
      <Button 
      style={{width: '100%', gridColumn:'1 / 3'}} key={indx} classes={btn.style}
      text={btn.text} buttonClick={this.buttonClick}></Button>
      )
    else return(
      <Button key={indx} classes={btn.style} text={btn.text}
      buttonClick={this.buttonClick}></Button>)
  })


  return (
      <div className="App">
        <div className='calculator'>
          <input type="text" className='calculator__display' readOnly/>

          <div className='calculator__buttons'>
            {calculatorButtonsRender}
          </div>
          
        </div>
      </div>
  )}
}

export default App;
