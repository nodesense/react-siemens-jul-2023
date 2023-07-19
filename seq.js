function seq(startValue, incr) {
    let result = startValue  // closure, function memory, function state

    const incrementValue = () => {
        // result is visible here, so result is not desroyed until incrementValue reference destroyed
        let s = result
        result = result + incr
        return s;
    }

    return incrementValue;  // return function , curry function
}// scope of result end here, result will not be cleaned depends on if 

seq10by1 = seq(10, 1)
seq10by1()