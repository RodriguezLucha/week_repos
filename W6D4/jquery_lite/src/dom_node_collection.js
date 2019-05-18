class DOMNodeCollection {
    constructor(htmlElementsArray) {
        this.htmlElementsArray = htmlElementsArray;
    }

    html(string) {
        if (!string) {
            return this.htmlElementsArray[0].innerHTML;
        } else {
            for (let i = 0; i < this.htmlElementsArray.length; i++) {
                this.htmlElementsArray[i].innerHTML = string;
            }
        }
    }

    empty() {
        for (let i = 0; i < this.htmlElementsArray.length; i++) {
            this.htmlElementsArray[i].innerHTML = "";
        }
    }

    append(input){
        if(input.constructor.name === 'String'){
            for (let i = 0; i < this.htmlElementsArray.length; i++) {
                this.htmlElementsArray[i].innerHTML += input;
            }
        } else if (input instanceof HTMLElement){
            for (let i = 0; i < this.htmlElementsArray.length; i++) {
                let deep = true;
                let cloned = input.cloneNode(deep);
                this.htmlElementsArray[i].appendChild(cloned);
            }

        } else if (input.constructor.name === 'DOMNodeCollection') {
            for (let i = 0; i < this.htmlElementsArray.length; i++) {
                for(let j = 0; j < input.htmlElementsArray.length; j++ ){
                    let deep = true;
                    let clone = input.htmlElementsArray[j].cloneNode(deep);
                    this.htmlElementsArray[i].appendChild(clone);
                }
            }
        }
    }

    attr(attrName){
        return (this.htmlElementsArray[0].getAttribute(attrName)) ? (this.htmlElementsArray[0].getAttribute(attrName)) : undefined;
    }

    addClass(classNames){
        for (let i = 0; i < this.htmlElementsArray.length; i++) {
            let classAttr = this.htmlElementsArray[i].getAttribute("class");
            classNames = classAttr + " " + classNames;
            this.htmlElementsArray[i].setAttribute("class", classNames);
        }
    }

    removeClass(classNames){
        for(let i = 0; i < this.htmlElementsArray.length; i++){
            this.htmlElementsArray[i].classList.remove(classNames);
        }
    }

    children(){
        let domNodeCollection = new DOMNodeCollection;
        for (let i = 0; i < this.htmlElementsArray.length; i++) {
            domNodeCollection.push( [this.htmlElementsArray[i], this.htmlElementsArray[i].children()])
        }
        return domNodeCollection;
    }

}

module.exports = DOMNodeCollection;