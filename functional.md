
// OOP

class Calculator {
    int sum = 0; // hidden state
    int add(int a) {
        // complex algo
        sum += a; // mutation sum value/state is modified, kept by calc object
        return sum;
    }
}

calc = new Calculator()

calc.add(10) // predict 10 as result
calc.add(10) // predict 10 will fail, you calculate in mind/paper/flow/debugging.. 
             // compute mental result 20
calc.add(20) // .... compute  mental result 40

Vs 
// Functional Programming
function add(sum, a) {
    // immutable
    return sum + a
}

shooping cart..
function addItemToCart(items, item) {
    // immutable
    return [...items, item] // original item is not modified
}

add(0, 10)// predict 10 as result
add(0, 10)// predict 10 as result
add(10, 20) // 30 as result
add(0, 10)// predict 10 as result
add(10, 20) // 30 as result
add(0, 10)// predict 10 as result
add(10, 20) // 30 as result
add(10, 20) // 30 as result
add(10, 20) // 30 as result
add(10, 20) // 30 as result
add(10, 20) // 30 as result
add(10, 20) // 30 as result
