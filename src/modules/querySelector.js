export default function $(el, all) {
    return all 
    ? document.querySelectorAll(el)
    : document.querySelector(el);
}
