
/**
 * myEach(collection, callback)
Purpose: Iterates over each element in collection, applying callback to each one.
Return: The original collection.
 */
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection);
        }
    } else {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                callback(collection[key], key, collection);
            }
        }
    }
    return collection;
}



/**
 * myMap(collection, callback)
Purpose: Creates a new array by applying callback to each element.
Return: A new array with the transformed values.
 */
function myMap(collection, callback) {
    const result = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            result.push(callback(collection[i], i, collection));
        }
    } else {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                result.push(callback(collection[key], key, collection));
            }
        }
    }
    return result;
}


/**
 * myReduce(collection, callback, acc)
Purpose: Reduces collection to a single value.
Return: The accumulated single value
 */
function myReduce(collection, callback, acc) {
    let start;
    let i = 0;

    if (Array.isArray(collection)) {
        // Handle array case as before
        start = acc !== undefined ? acc : collection[0];
        i = acc !== undefined ? 0 : 1;
        for (; i < collection.length; i++) {
            start = callback(start, collection[i], collection);
        }
    } else {
        // Handle object case
        const keys = Object.keys(collection);
        start = acc !== undefined ? acc : collection[keys[0]];
        i = acc !== undefined ? 0 : 1;
        for (let j = i; j < keys.length; j++) {
            start = callback(start, collection[keys[j]], collection);
        }
    }

    return start;
}


/**
 * myFind(collection, predicate)
Purpose: Returns the first element in collection that satisfies predicate.
Return: The found element or undefined.
 */
function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i], i, collection)) return collection[i];
        }
    } else {
        for (let key in collection) {
            if (collection.hasOwnProperty(key) && predicate(collection[key], key, collection)) {
                return collection[key];
            }
        }
    }
    return undefined;
}


/**
 * myFilter(collection, predicate)
Purpose: Creates a new array of elements that pass the truth test predicate.
Return: An array of elements that satisfy predicate.
 */
function myFilter(collection, predicate) {
    const result = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i], i, collection)) result.push(collection[i]);
        }
    } else {
        for (let key in collection) {
            if (collection.hasOwnProperty(key) && predicate(collection[key], key, collection)) {
                result.push(collection[key]);
            }
        }
    }
    return result;
}


/**
 * mySize(collection)
Purpose: Returns the count of elements in collection.
Return: Integer count of elements.
 */
function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}


/**
 * myFirst(array, [n])
Purpose: Returns the first element or the first n elements.
Return: Single element or array of elements.
 */
function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
}


/**
 * myLast(array, [n])
Purpose: Returns the last element or last n elements.
Return: Single element or array of elements.
 */
function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
}


/**
 * mySortBy(array, callback)
Purpose: Sorts array based on the callback's output.
Return: A new sorted array.
 */
function mySortBy(array, callback) {
    return array.slice().sort((a, b) => {
        const aVal = callback(a);
        const bVal = callback(b);
        if (aVal < bVal) return -1;
        if (aVal > bVal) return 1;
        return 0;
    });
}


/**
 * myFlatten(array, [shallow])
Purpose: Flattens a nested array.
Return: A new flattened array.
 */
function myFlatten(array, shallow = false, newArr = []) {
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            if (shallow) {
                newArr.push(...array[i]);
            } else {
                myFlatten(array[i], false, newArr);
            }
        } else {
            newArr.push(array[i]);
        }
    }
    return newArr;
}


/**
 * myKeys(object)
Purpose: Returns all enumerable property names.
Return: Array of property names.
 */
function myKeys(object) {
    const keys = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) keys.push(key);
    }
    return keys;
}


/**
 * myValues(object)
Purpose: Returns all property values.
Return: Array of property values.
 */
function myValues(object) {
    const values = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) values.push(object[key]);
    }
    return values;
}
