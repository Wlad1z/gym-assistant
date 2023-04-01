import React from 'react';
import {BsCheck} from 'react-icons/bs'


const Check = ({isCompleted}) => {
    return ( 
    <div className={`border-2 rounded-3xl border-rose-500 
    ${isCompleted ? 'bg-rose-500' : ''}
     w-7 h-7 mr-3 flex items-center justify-center`}>
        {isCompleted &&
        <BsCheck size={24} className='text-gray-900'/>
        }
    </div>
     );
 }
  
 export default Check;