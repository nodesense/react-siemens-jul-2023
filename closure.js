function useState (initialValue) {
    let value = initialValue;

    const setValue = function (v) {
        value = v
    }

    return [value, setValue]
}

