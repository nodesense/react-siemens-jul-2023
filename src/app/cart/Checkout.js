import React, {createRef} from 'react';

// createRef is useful to get access REAL DOM element
// use case for 3rd party charting, control libraries
// use case, when the form is loaded, set a partciular control with cursor 
export default class Checkout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            city: '',
            lastName: '',
            show: false // toggle last name
        }

        // DOM is HTML element/control, not  data, so dom should not be put into component state
        // reference to REAL DOM is limited only to currrent component instance
        this.firstNameRef = createRef();
        this.lastNameRef = createRef();
    }

    onValueChange = (e) => {
        // e is event, target is the DOM element, input/select etc
        const name = e.target.name;
        const value = e.target.value
        console.log("onValueChange", name, value)

        this.setState( {[name]: value})
    }

    // life cycle method
    // called ONLY ONCE per component instance during creation stage
    componentDidMount() {
        console.log("Checkout componentDidMount")
        //current means the ACTUAL REAL DOM, input control
        this.firstNameRef.current.focus()

        console.log("firstname ref ", this.firstNameRef.current) // actual input dom
        console.log("lastname ref", this.lastNameRef.current) // undefined

        
    }

    // called during update cycle after render function
    // useful to get dom reference after initial render
    componentDidUpdate() {
        console.log("lastname ref", this.lastNameRef.current) // undefined
     
        if (this.lastNameRef.current) {
            this.lastNameRef.current.focus()
        }
    }

    render() {
        console.log('Checkout render', this.state)

        return (
            <div>
                <h2>Checkout</h2>
                
                <button onClick={() => this.setState({show: !this.state.show})}>
                    {this.state.show? "Hide LastName": "Show LastName"}
                </button>

                <br />

                <span>First name</span>

                <input name="firstName" type="text" 
                       value={this.state.firstName} 
                       id ="myfirstName"
                       onChange={this.onValueChange}

                       ref = {this.firstNameRef}
                       />

                <br />

                { this.state.show &&
                <>
                    <span>Last name</span>
                    <input name="lastName" type="text" 
                        value={this.state.lastName} 
                        
                        onChange={this.onValueChange}

                        ref = {this.lastNameRef}
                        />
                        <br />
                </>
                }

                <span>City</span>

                <select name="city" value={this.state.city} 
                        onChange={this.onValueChange} >
                    <option value={"BLR"}>BLR</option>
                    <option value={"MYS"}>MYS</option>
                    <option value={"MUM"}>MUM</option>
                </select>

            </div>
        )
    }
}