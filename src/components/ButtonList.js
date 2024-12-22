import React from 'react';
import Button from "./Button";
import {buttons} from "../utils/constants";
const ButtonList = () => {
  return (
    <div className='flex italic overflow-scroll'>
      {buttons.map((item,index)=>{
        return <Button key={index} name={item}/>
      })}
    </div>
  )
}

export default ButtonList