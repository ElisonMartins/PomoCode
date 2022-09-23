import React from 'react';
import Button from './button.jsx';
import TodoList from './todo-list/TodoList'
import './Inicio.css';

export default ({})=>{
    return(
        <>
            <div className='corpo'>
                <header>
                    <p>PomoCode</p>
                    <p><a href="#sobre-pomo" className='sobre-pomodoro'>Sobre</a></p> 
                </header>
                <div className='container'>
                    <h1 className='timer'>25:00</h1>
                    <Button/>
                    <TodoList/>
                </div> 
            </div>
        </>
    )
}