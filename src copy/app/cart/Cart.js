import React from 'react';
import CartList from './CartList';
import CartSummary from './CartSummary';
import Checkout from './Checkout';

// class component
// export DEFAULT, mean while importing, SHOULD NOT to use {}

// props
// state
// life cycle

// life cycle methods
// complex state management
// access to ref, reference to real dom element
export default class Cart extends React.Component {
    constructor() {
        super()// base class constructor
        console.log("Cart comp created")

        // class component state
        // state is a special way of handling component data
        // state is created when component created,
        // state is destroyed when component destroyed
        this.state = {
            items: [],
            amount: 0,
            totalItems: 0,
            showCart: true,
            flag: false // side effect of setState of the component
        }
    }

    generateItem = () => {
        let id = Math.ceil(Math.random() * 1000000);
        let item = {
            id: id,
            name: 'Product ' + id,
            price: 100 + Math.ceil(Math.random() * 1000),
            qty: 1
        }

        return item;
    }

    //called during button click
    addItem = (e) => {
        console.log("Event is ", e)

        const item = this.generateItem()
        const items = [...this.state.items, item]
        // WRONG WAY OF UPDATING STATE
        // this.state.items = items // MUTATING STATE directory

        // this will update this.state async,
        // trigger react to call render function
        this.setState({
            // items: items // es5
            items // es6
        })
    }

    emptyCart = () => {
        console.log("Empty cart")

        this.setState({
            items: []
        })
    }

    // is a callback function, shall be called by CartItem component
    // updateItem, deleteItem functions shall be passed as props to CartList component
    // CartList component shall pass updateItem, deleteItem props to CartItem
    //CartItem component shall invoke updateItem, deleteItem functions on button click
    updateItem = (id, qty) => {
        console.log('update Item ', id, qty)
        // items is an array - reference type, must be immutable ,
        //  original array should not be changed
        // items has item object  - reference type
        // original item should not be changed

        const items = this.state.items.map (item => item.id == id? {...item, qty} : item)
        this.setState({items})
    }

    
    // is a callback function, shall be called by CartItem component
    deleteItem = (id) => {
        console.log('deleteItem   ', id)

        const items = this.state.items.filter (item => item.id != id)
        this.setState({
            items
        })
    }

    // react keyword, called by react framework
    // called during mounting/creation stage
    // called during update stage
    // called before render function in mount/update
    // this function calculate a derived state from props from parent and state from local component
    // return a new state that shall be merged with this.state
    static getDerivedStateFromProps(props, state) {
        console.log('Cart getDerivedStateFromProps', props, state)
        let amount = 0
        let totalItems = 0

        for (let item of state.items) {
            amount += item.qty * item.price;
            totalItems += item.qty
        }

        return {amount, totalItems} // this data shall be updated with this.state
    }

    // pre-defined name
    // called by react
    // create and return V.DOM
    render() {
        console.log("Cart Render", this.state.items.length)

        return (
            <div>
                <h2>Cart</h2>

                <button onClick={this.addItem}> Add Item </button>
                <button onClick={this.emptyCart}> Empty </button>

                <button onClick={ () => this.setState({showCart: !this.state.showCart})}>
                    {this.state.showCart? "Hide Cart" : "Show Cart"}
                </button>

                {/* flag is local to cart component, not shard with child component as props,
                    when flag change, the render of children also will be called
                */}
                <button onClick={ () => this.setState( {flag: !this.state.flag})}>
                     {this.state.flag? "Hide flag" : "Show flag"}
                </button>

                {/* passing parent data to child component as props (property)  */}
                
                {/* passing function reference to child component
                    no function call made here   */}

                { 
                    this.state.showCart && <CartList items={this.state.items} 
                            updateItem = {this.updateItem}
                            deleteItem = {this.deleteItem}  
                    />
                }


                <CartSummary amount={this.state.amount}
                             totalItems = {this.state.totalItems}
                             
                />

                <Checkout />

            
            </div>
        )
    }

    componentDidMount() {
        // document.getElementById("myfirstName").focus() // Find DOM in the UI and set the focus 
    }
}