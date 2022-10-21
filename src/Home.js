import React from 'react'
import {Link,useNavigate} from 'react-router-dom'


export const Home = () => {
    let navigate = useNavigate()

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
