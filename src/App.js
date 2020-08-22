import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() { 
  const nayoks = ['Alomgir','Salman','sah','najmul']
  const prodacts =[{name:'photoshop',price:'99.99'},
                  {name:'PDF Readar',price:'20.99'},
                  {name:'AdobeIlasttor',price:'66.99'}]
  return(
    <div className="App">
  <header className="App-header">
  
    <p>I react Person</p>
    <Counter></Counter>
    <Users></Users>
    <ul>
      {
        nayoks.map(nayok => <li>{nayok}</li>)
      }
    </ul>
    {
      prodacts.map(prodact => <Product product={prodact}></Product>)
    }
  </header>
</div>
  );
}

function Counter() {
  const [count, setCount] = useState(10);
  const hand = () => setCount( count+1);
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount( count-1)}>Incrise</button>
      <button onClick={() => setCount( count+1)}>Incrise</button>
    </div>
  )
}
function Users() {
  const [users,setusers] = useState([])
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setusers(data))
  })
  return(
    <div>
      <h3>Daynamic Design:{users.name}</h3>
      <ul>
        {
          users.map(user => <li>{user.name} , {user.phone}</li> )
        }
      </ul>
    </div>
  )
}

function Product(props) {
  const prodactStyle ={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    flot:'left'
  }
  const{name,price} = props.product
  return (
    <div style={prodactStyle}>
      <h3>{name}</h3>
       <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}


export default App;
