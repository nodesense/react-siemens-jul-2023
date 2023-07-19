flux 

action created on UI based on User Interaction

specification/action = { type: 'add', payload: {a: 10, b: 20} } , no logic here, no implementation here
specification/action = { type: 'sub', payload: {a: 1, b: 2} } , no logic here, no implementation here
specification/action = { type: 'reset' } , no logic here, no implementation here

-----------------
Business Logic - redux
state = previous state/previously computed data/initial data

state = 0 // initial data
state = 30 after a + b 

// callback function or reducer function 
function calculator (state,  action) {
    switch(action.type) {
        case 'add':
                return state + action.payload.a + action.payload.b  // implementation
        case 'sub':
            return state + action.payload.a - action.payload.b  // implementation

        case 'reset':
            return 0;
    }
}


-- dispatch is a connector that bind react ui with redux business logic/state 
dispatch action is called from ui, which will call internally redux reducers/callback