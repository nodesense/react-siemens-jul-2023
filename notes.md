for Performance, try to have smaller component

Assume a table of 1000 rows, 10 columns, each cell has approx 20 DOM Elements [div, span, .....]

Each row shall have    10 col elements * 20 DOM elements = 200 DOM elements
Each table has 1000 rows , then tabel elements = 1000 * 10 * 20 = 200000 [2 lakhs dom elements]

Remember Rule, READ V.DOMs are created, not updated, not inserted, not deleted

<table>
    <tr id=1234>
        ..
        ..
        ..
    <tr id=4567> - 1000 rows
        <td ..> 10 columns
           <div>
            ....<span>123.45</span>

Value changed from 123.45 to 123.46 [1 letter change], every second

We have ONLY ONE COMPONENT TO Represent UI
  then we need to create whole table, table rows, table cols ....

    every second, 
        200000 V.DOM elements are created
            V.DOM elements are DIFFed
             Find the different values
                        <span>123.46</span>

                        the changed value 123.46 PATCHed to REAL DOM

            Garbage collector to clear the memory

--
Assume we have TWO Components
    ONE Component for Table, [TableList]
    ONE component for Table Row [CartItem]

    Table DOM is not changed except Table Row

    Each row, has 200 V.DOMs
        we know the row changed
        only tat matched Row specific V.DOM updated
        Diffed 200 V.DOM
        Patched 
            <span>123.46</span>


what if the id 4567 is not present in the new data?
React try to diff V.DOM element and V.DOM attributes in hard comparsition and various algos present...

instead of id, react uses a key prop for kind of indexing so that it can avoid expensive compare..



function useState (initialValue) {
    let value = initialValue;

    const setValue = function (v) {
        value = v
    }

    return [value, setValue]
}


