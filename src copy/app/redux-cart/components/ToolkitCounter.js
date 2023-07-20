import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'

//actions exported by counter slice
import { decrement, increment, reset } from '../state/counterSlice'

// eliminate need of container component..
export default function ToolkitCounter() {
  // useState pick data from component memory

  // similar to use case where we use mapStateToProps
  // useSelector by defaut a memoized function, until the state change, it would call the 
  // implementation function (state) => state.counter.value
  // useSelector pick data from store

  const count = useSelector((state) => state.counter.value) // use store.getState
  // for use case , mapDispachToProps
  const dispatch = useDispatch() // dispatch from store.dispatch

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>

        <span>{count}</span>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        
        <button
          aria-label="Reset value"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </div>
  )
}