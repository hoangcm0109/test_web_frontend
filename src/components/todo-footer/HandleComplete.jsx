import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteComplete } from '../../redux/TodoSlice';
import './handle-complete.scss'

const HandleComplete = ({ value }) => {

    const dispatch = useDispatch()

    const handleComplete = () => {
        dispatch(deleteComplete())
    }

    const handleDone = () => {
        
    }

     return <div className='handle-complete'>
         <div className="handle-complete_title">
            Bulk Action
         </div>
         <div className="handle-complete_btn">
             <button className='done' onClick={() => handleDone()}>Done</button>
             <button className='remove' onClick={() => handleComplete()}>Remove</button>
         </div>
     </div>;
};

export default HandleComplete;
