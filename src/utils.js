export function parse(type) {
    return typeof type == 'string' ? JSON.parse(type) : type;
}

export function remove(arr, item)
{
    var index = arr.indexOf(item);
    return [
        ...arr.slice(0, index),
        ...arr.slice(index + 1)
    ];
}