export class CreateHTMLElement{
    _element
    _type

    constructor(elementTag: keyof HTMLElementTagNameMap ){
        this._element = document.createElement(elementTag)
        this._type = elementTag
        return this
    }

    public setId(id: string){
        this._element.id = id
        return this
    }

    public addClass(className: string){
        this._element.classList.add(className)
        return this
    }

    public setClass(className: string){
        this._element.className = className
        return this
    }

    public appendTo(parent: HTMLElement){
        parent.appendChild(this._element)
        return this
    }

    public addEventListener(event: string, callback: Function){
        this._element.addEventListener(event, (event) => callback)
        return this
    }

    public setInnerHTML(innerHTML: string){
        this._element.innerHTML = innerHTML
        return this
    }

    public setInnerText(innerText: string){
        this._element.innerText = innerText
        return this
    }

    public setAttribute(name: string, value: string){
        this._element.setAttribute(name, value)
        return this
    }

    public setSource(src: string){
        if('src' in this._element) {
            this._element.src = src
        }
        return this
    }

    public setName(name: string){
        if('name' in this._element) {
            this._element.name = name
        }
        return this
    }

    public setTarget(target: string){
        if('target' in this._element) {
            this._element.target = target
        }
        return this
    }

    public setValue(value: string){
        if('value' in this._element) {
            this._element.value = value
        }
        return this
    }

    public setType(type: string){
        if('type' in this._element){
            (this._element as HTMLInputElement).type = type
        }
        return this
    }

    public setMaxValue(max: string){
        if('max' in this._element){
            this._element.max = max
        }
        return this
    }

    public setMinValue(min: string){
        if('min' in this._element){
            this._element.min = min
        }
        return this
    }

    public setMaxLenght(maxLength: number){
        if('maxLength' in this._element){
            this._element.maxLength = maxLength
        }
        return this
    }

    public setMinLenght(minLength: number){
        if('minLength' in this._element){
            this._element.minLength = minLength
        }
        return this
    }

    public setPlaceholder(placeholder: string){
        if('placeholder' in this._element){
            this._element.placeholder = placeholder
        }
        return this
    }

    public getElement(){
        return this._element
    }
}