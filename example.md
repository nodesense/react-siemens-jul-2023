the code in single thread 
function algo(input...) { // 2 seconds
    heavy computing code
}

function add (a, b) {
    heavy computing code
    return a + b;
}

// pure component
// given same props/on given state, except same V.DOM created

// pure function
// given same input, return same output
add (1, 2) // 3, 2 sconds
add (1, 2) // 3 2 sconds
add (1, 2) // 3
add (1, 2) // 3
add (1, 2) // 3
add (1, 2) // 3
add (1, 2) // 3
add (1, 2) // 3
add (1, 2) // 3

memoized functions /component 
 wrapper function on the original algo/component function 

 //psudo code
 function wrapper(a, b) {
    let valueA = a
    let valueB = b
    ...a.
    ...

    let cache = none;
    if (valueA == a && valueB == b && cache != null)
      return cache; // will not call add function for given same input/output

    cache = add(a,b)
 }

 add(1, 2)
 add(1, 2)
 add(1, 2)
 add(1, 2)
 add(1, 2)
 add(3, 4) -- freed 


