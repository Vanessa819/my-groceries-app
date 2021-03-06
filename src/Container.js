/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react"
import GroceryList from "./components/GroceryList"
import ShoppingCart from "./components/ShoppingCart"

class Container extends React.Component {
    constructor(props){
        super(props)
        this.state = {groceryItems :
        [{id : 1 , title : "Tortilla wraps"},
         {id : 2 , title : "Parmezaanse kaas"},
         {id : 3, title : "Ijsberg sla" },          
        {id : 4 , title : "Cherry tomaatjes"}
        ],
        shoppingListItems:
             [
            {id : 1, title: "Chocola", amount : 1},
            {id : 2 , title: "Pasta", amount : 1},
            {id : 3 , title : "Pita broodjes", amount : 1} ,
            {id : 4 , title : "Wafels" , amount : 1}
               ]
    }
    
     
this.handleClickGroceryAdd = this.handleClickGroceryAdd.bind(this)
this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this)
this.handleClickShoppingCartEmpty = this.handleClickShoppingCartEmpty.bind(this)
this.handleClickShoppingCartItem = this.handleClickShoppingCartItem.bind(this)
}


handleClickGroceryAdd(title){
    // console.log(title)
    if (title !== undefined && title !== null && title.length > 0) {
        this.setState(prevState => {
            console.log('add')
            const groceryItems = [...prevState.groceryItems]
            groceryItems.push({
                id: groceryItems.length + 1,
                title: title
            })
            return {
                groceryItems: groceryItems
            }
        })
    }
}

handleClickGroceryItem(title) {
    console.log(title)
    console.log("2e console log als test")
    if (title !== undefined && title !== null && title.length > 0) {
        this.setState(prevState => {
            console.log('item')

            const shoppingListItems = [...prevState.shoppingListItems]
            // const shoppingListItems = prevState.shoppingListItems.slice()

            const shoppingListItem = shoppingListItems.find(item => {
                return item.title === title
            })

            console.log(shoppingListItem)

            if (shoppingListItem !== undefined) {
                shoppingListItem.amount++;
            } else {
                shoppingListItems.push({
                    id: shoppingListItems.length + 1,
                    title: title,
                    amount: 1
                })
            }

            return {
                shoppingListItems: shoppingListItems
            }
        })
    }
}

handleClickShoppingCartEmpty() {
    // console.log("empty")
    this.setState(() => {
        return {
            shoppingListItems: []
        }
    })
}

handleClickShoppingCartItem(title) {
    console.log(title)
}

render() {
    return (
        <div className="container">
            <GroceryList
                list={this.state.groceryItems}
                addClick={this.handleClickGroceryAdd}
                itemClick={this.handleClickGroceryItem}
            />
            <ShoppingCart
                list={this.state.shoppingListItems}
                emptyClick={this.handleClickShoppingCartEmpty}
                itemClick={this.handleClickShoppingCartItem}
                className="ShoppingCart"
            />
        </div>
    )

}
}
 export default Container
