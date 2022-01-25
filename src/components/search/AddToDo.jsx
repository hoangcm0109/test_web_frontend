import React, { useState } from 'react';
import './add-todo.scss'
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../../redux/TodoSlice';
import { changePiority } from '../../redux/SearchSlice';

const AddToDo = ({ onClose, value }) => {

    const [todo, setTodo] = useState('')
    const [desc, setDesc] = useState('')
    const [date, setDate] = useState(moment().format('YYYY-MM-DD'))
    const [piority, setPiority] = useState('normal')

    const dispatch = useDispatch()

    const handleAdd = (idUpdate) => {
        const newTodo = {
            id: uuidv4(),
            todo,
            desc,
            date: new Date(date).toString(),
            piority,
            complete: false
        }
        if (todo === '' && desc === '') {
            alert('Chưa nhập dữ liệu')
        } else if(onClose) {
            dispatch(updateTodo({
                idUpdate,
                ...newTodo
            }))
        } else {
            dispatch(addTodo(newTodo))
        }
        setTodo('')
        setDesc('')
    }

    const handlePiority = (e) => {
        setPiority(e.target.value)
        dispatch(changePiority(e.target.value))
    }

    return <div className='add-todo'>
        <div className="add-todo_form">
            <label htmlFor="sreach">New todo</label>
            <input type="text" className='input-todo' placeholder='Add new tasks...' value={todo} onChange={(e) => setTodo(e.target.value)} />
        </div>
        <div className="add-todo_form">
            <label htmlFor="sreach">Description</label>
            <textarea className='input-area' value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
        </div>
        <div className="add-todo_filter">
            <div className="group-date">
                <label>Due date</label>
                <input type="date" className='input-date' placeholder='Add new tasks...' value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="group-date" onChange={handlePiority}>
                <label>Piority</label>
                <select className='select'>
                    <option value="normal">Normal</option>
                    <option value="low">Low</option>
                    <option value="high">High</option>
                </select>
            </div>
        </div>
        <button className='btn' onClick={() => handleAdd(value.id)}>{onClose ? 'Update' : 'Add'}</button>
    </div>;
};

export default AddToDo;
