//1. npm i react-router-dom

//2. BrowswerRouter in index.js
// import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </React.StrictMode>
);

//3. declaring Routes in App 
// import {Routes,Route} from 'react-router-dom' 
import {Routes,Route} from 'react-router-dom'
import { Home } from './Home';
import { Pokemon } from './Pokemon';
import { Bunch } from './Bunch';
import { Example } from './Example';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={ <Home/> } />
    <Route path='/pokemon' element={ <Pokemon /> } />
    <Route path='/bunch' element={ <Bunch /> } />
    <Route path='/example' element={ <Example /> } />
    </Routes>
    </div>
  );
}

//4. Changing pages
//import {Link,useNavigate} from 'react-router-dom'

import {Link,useNavigate} from 'react-router-dom'


export const Home = () => {
    let navigate = useNavigate()

//logic exmaple for naviage
    // const pageSwtich=()=>{
    //     if(id=1){
    //         navigate('/pokemon')
    //     }else{
    //         navigate('/bunch')
    //     }

    // }

  return (
    <div className='Home'>
        
        <p>Home</p>

        <Link to='/pokemon'>
            <p>go to pokemon page</p>
        </Link>
     
        </div>
  )
}