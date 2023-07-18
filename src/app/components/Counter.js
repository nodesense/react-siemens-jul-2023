import React, {useState, useEffect} from 'react';


// useState is a feature from react hooks to have component state inside 
//  functional component

//useEffect useful for life cycle of events, helping two aspects of life cycle
// componentDidMount - called once during creation
// componentDidUpdate called during update stage
const Counter = (props) => {
    console.log("Counter render", props)

    // destructuring array
    // userState [get/set]
    // 0 is initial default value
    // initially deault value shall be returned to counter variable
    // we have to use setCounterValue function to update the value
    const [counter, setCounterValue] = useState(props.startValue)

    // by default, use effect works like a componentDidMount, componentDidUpdate
    useEffect( () => {
        console.log('useEffect counter called', counter)
        document.title = `count is ${counter}`

        // componentWillUnmount like for cleanup
        return function() {
            console.log("useEffect Cleanup func called like component will unmount ")
        }
    })

    // sometimes, you may want useEffect to be called only once LIKE componentDidMount
    // [] represent no dependencies, no side dependencies
    useEffect( () => {
        console.log("userEffect one time init called", counter)

        
        // componentWillUnmount like for cleanup
        return () => {
            console.log("useeffect cleanup")
        }
    }, [])


    // componentDidMount, componentWillUnmount
    useEffect ( () => {
        console.log("useEffect Timer start ", counter)
        const handle = setInterval( () => {
            console.log("timer called , counter is ", counter)
            setCounterValue (counter + 1)
        }, 5000)

        // componentWillunmount like
        return () => {
            console.log("Stop timer ")
            clearInterval(handle)
        }
    }, [])


    return (
        <div>
            <h2>Counter</h2>
            
            <button onClick={ () => setCounterValue(counter + 1)}>
                +1
            </button>

            <button onClick={ () => setCounterValue(0)}>
                Reset [0]
            </button>
            
            <p>Counter is {counter}</p>
        </div>
    )
}

Counter.defaultProps = {
    startValue: 0
}

export default Counter;