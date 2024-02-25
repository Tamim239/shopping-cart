function getParseInner(elements){
    const element = document.getElementById(elements);
    const convertElement = element.innerText;
    const convert = parseInt(convertElement);
    return convert;
}