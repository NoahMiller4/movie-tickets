
export function print(arg) {
    console.log(arg);
}

export function select(selector, parent = document) {
    return parent.querySelector(selector);
}