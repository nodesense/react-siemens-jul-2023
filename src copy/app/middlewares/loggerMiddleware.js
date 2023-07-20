export default function loggerMiddleware(store) { // called once during initial stage
    return function (next) { // called once during initial stage
        // next will forward the action to next middleware or reducer(s)

        return function (action) { // called for every action dispatched
            console.log("LOGGERMIDDLEWARE ", action.type, action)
            return next(action) // forward request to middleware/reducer
        }

    }
}
