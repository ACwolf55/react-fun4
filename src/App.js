import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Comp from './Comp';
import Loading from './Loading';

function App() {


  const [num ,setNum ] = useState(1)

  const [username,setUsername] = useState('falcon')

  const [food, setfood] = useState('cake')

  const [car, setcar] = useState('corvette')

  const [arr,setarr] = useState([0,1,2,3,4])


  const math =()=>{
    let newArr = []
    for(let i =0 ; i<arr.length;i++){
      newArr.push(arr[i]++)
    }
    setarr(newArr)
    console.log(arr)
  }

  const increment =()=>{
   setNum((prevState)=>prevState+1)
  }

  return (
    <div className="App">
     <p>Hello World!~!~</p>
    <p>8*8</p>
    <p>{8*8}</p>
    <p>{num}</p>
    <p>{food}</p>
    <p>{car}</p>
    <button onClick={increment}>+</button>
    <div className='math' onClick={math}>
      <h4>math is ok i guess</h4>
      <h5>~~~~~</h5>
    </div>

    <button onClick={()=>console.log(arr)}>console log array!</button>
    <input onChange={(e)=>setUsername(e.target.value)}></input>
    <button onClick={()=>setcar('scion')}>corvette to scion</button>
     <Comp />
    <h3>{username}</h3>


     <Comp />


    <footer>
      <Loading />
    </footer>
    </div>
  );
}

export default App;
