import React from 'react';
import CartItem from './CartItem';

// Component Life Cycle
    // 1. Mounting / Creation stage
    // 2. Update stage
    // 3. Destruction stage

export default class CartList extends React.Component {
    constructor(props) {
        super(props) // base class initialize this.props = props
        console.log("CartList created")
    }

    
    // callback , called by react during creation stage
    // called during creation stage
    // usecase: calling APIs, setting up a timer, susbcribe for events like rxjs etc
    componentDidMount() {
        console.log("CartList componentDidMount")
    }

    // CALLED ONLY DURING update stage, NOT CALLED ON CREATION STAGE
    // SHOULD return true or false
    // if return true, render shall be called during update cycle
    // if return false, render shall NOT be called during update cycle 
    shouldComponentUpdate(nextProps, nextState) {
        console.log("CartList shouldComponentUpdate")
        console.log("nextProps", nextProps)
        console.log("current props", this.props)

        // we check if items really changed or not
        // only render if 
        console.log("nextProps.items != currentProps.items", nextProps.items != this.props.items)

        return  nextProps.items != this.props.items;
    }

    // called during creation  stage , WE CANNOT STOP RENDER CALL during CREATION STAGE
    // called during update stage but we can stop the render function being called with shouldComponentUpdate
    // called when parent render called 
    // create and return v.dom
    render() {
        console.log("CartList render", this.props.items.length)

        const {items, updateItem, deleteItem} = this.props;

        return (
            <div> 
            <h2>Cart List</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th>Update</th>
                        <th>Remove</th>
                    </tr>

                    {
                       items.map (item => (
                            <CartItem  key={item.id}
                                       item={item}
                                       updateItem = {updateItem}
                                       deleteItem = {deleteItem}      />
                       )) 
                    }

                </tbody>
            </table>
            </div>
        )
    }


    // callback , called by react during update stage
    // component did update
    // called during update stage, where the v.dom returned by render function is patched on diff/or not patched too
    // called after render function during update stage no matter whether real dom is patched or not
    // not called during creation time
    // usecase: to access the reference to real dom for charitng, user controls
    // usecase: conditional access to reference to component based on if..else
    componentDidUpdate() {
        console.log ("CartList componentDidUpdate")
    }

    // callback, called by react during destruction
    // called before component get destroyed
    // usecase: stop the timer, stop susbcription, stop pending API calls
    componentWillUnmount() {
        console.log ("CartList componentWillUnmount")
    }
}