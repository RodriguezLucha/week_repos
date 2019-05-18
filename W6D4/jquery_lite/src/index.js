DOMNodeCollection = require("./dom_node_collection")

const core = function (input) {
    if(input.constructor.name === "HTMLElement"){
        let htmlElementsArray = [];
        htmlElementsArray.push(input);
        let domNodeCollection = DOMNodeCollection(htmlElementsArray);
        return domNodeCollection;
    } else if (typeof input === "string") {
    // } else if (input.constructor.name === "String") {
        let elementList = document.querySelectorAll(input);
        let array = Array.from(elementList);
        let domNodeCollection = new DOMNodeCollection(array);
        return domNodeCollection;
    }
}

document.addEventListener("DOMContentLoaded", function (e) {
    window.$l = core;
});
