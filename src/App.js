import React, {Component, useState} from 'react';
import { scryRenderedComponentsWithType } from 'react-dom/cjs/react-dom-test-utils.production.min';
var result;
function App(){
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [total, setTotal] = useState('');
    function addition(num1, num2)  {
      var apiUrl ="http://localhost:8000/add/"+num1+"/"+num2;
      apiCall(apiUrl);
    }
      function substract(num1, num2) {
        var apiUrl ="http://localhost:8000/subtract/"+num1+"/"+num2;
        apiCall(apiUrl);  
        //setTotal(number1 - number2);
      }
      function multiplication(num1, num2) {
        var apiUrl ="http://localhost:8000/multiply/"+num1+"/"+num2;
        apiCall(apiUrl);
        //setTotal(number1 * number2);
      }
      function division(num1, num2) {
        var apiUrl ="http://localhost:8000/divide/"+num1+"/"+num2;
        apiCall(apiUrl);
        //setTotal(number1 / number2);
      }
    /*class Result extends Component{
      constructor(props){
        super(props)

        this.state={
          result:''
        }
      }*/
      const calculateResult = (e) => {
        e.preventDefault()
        
        const data = {

          num1: number1,
          num2: number2

        }
        /*function apiCall(link){
          fetch(link, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then((res) => {
          return res.json()
        }).then((data) => {
          setTotal(data.sum)
        })
        }*/
          
        }

        function apiCall(link){
          fetch(link)
            .then((res) => {
          return res.json()
        }).then((data) => {
          setTotal(data.res)
        })
        }
        
        
      //render(){
        

        return (
            <div className="App">
            <h1>Simple-Calculator</h1>
           
          <input
            type="number"
            value={number1}
            onChange={e => setNumber1(+e.target.value)}
            //placeholder="0"
          />
          <input
            type="number"
            value={number2}
            onChange={e => setNumber2(+e.target.value)}
            //placeholder="0"
          />
       
       <button onClick={ ()=>{addition(number1, number2)}}>Add</button>
        <button onClick={ ()=>{substract(number1, number2)}}>Sub</button>
        <button onClick={ ()=>{multiplication(number1, number2)}}>Mul</button>
        <button onClick={ ()=>{division(number1, number2)}}>Div</button>
        
        <h2>
            {total}
        </h2>
      </div>
    );
  }
  /*num1 = String(number1);
  num2 = String(number2);
  componentDidMount(){
  fetch(`http://localhost:5000/add/${num1}/${num2}`,{
      Method: 'POST'})
      .then((res) => res.json())
  }
}*/

export default App;

//<button onClick={substract}>Subtract</button>
//<button onClick={multiplication}>Multiply</button>
//<button onClick={division}>Division</button>
/*<button onClick={addition(number1, number2)}>Add</button>
        <button onClick={substract(number1, number2)}>Sub</button>
        <button onClick={multiplication(number1, number2)}>Mul</button>
        <button onClick={division(number1, number2)}>Div</button>*/