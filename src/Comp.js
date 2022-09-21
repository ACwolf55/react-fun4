import React,{useState} from 'react'

export default function Comp() {

    const [colors,setColors] = useState(['red','blue'])

    const [num,setNum] = useState(1)

    const colorChanger =()=>{
        if(num==0){
            setNum(1)
        }else{
            setNum(0)
        }
    }

  return (
    <div className='Comp'>
   
   <p>{colors[num]}</p>
   <button onClick={colorChanger}>change color</button>
   </div>
  )
}
