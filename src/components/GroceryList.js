/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import List from './List';
import InputField from './InputField'

function GroceryList(props){
    return(
        <div className = "grocerylist">
            <h1>Boodschappenlijst</h1>
            < InputField click={props.addClick} />
            <List list={props.list} click={props.itemClick} />
        </div>
    )
}

export default GroceryList