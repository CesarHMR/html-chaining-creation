export class CreateHTMLElement{
    _element
    _type

    constructor(elementTag: keyof HTMLElementTagNameMap ){
        this._element = document.createElement(elementTag)
        this._type = elementTag
        return this
    }

    public SetId(id: string){
        this._element.id = id
        return this
    }

    public AddClass(className: string){
        this._element.classList.add(className)
        return this
    }

    public SetClass(className: string){
        this._element.className = className
        return this
    }

    public AppendTo(parent: HTMLElement){
        parent.appendChild(this._element)
        return this
    }

    public AddEventListener(event: string, callback: Function){
        this._element.addEventListener(event, (event) => callback)
        return this
    }

    public SetInnerHTML(innerHTML: string){
        this._element.innerHTML = innerHTML
        return this
    }

    public SetInnerText(innerText: string){
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

    public SetName(name: string){
        if('name' in this._element) {
            this._element.name = name
        }
        return this
    }

    public SetTarget(target: string){
        if('target' in this._element) {
            this._element.target = target
        }
        return this
    }

    public SetValue(value: string){
        if('value' in this._element) {
            this._element.value = value
        }
        return this
    }

    public SetType(type: string){
        if('type' in this._element){
            (this._element as HTMLInputElement).type = type
        }
        return this
    }

    public SetMaxValue(max: string){
        if('max' in this._element){
            this._element.max = max
        }
        return this
    }

    public SetMinValue(min: string){
        if('min' in this._element){
            this._element.min = min
        }
        return this
    }

    public SetMaxLenght(maxLength: number){
        if('maxLength' in this._element){
            this._element.maxLength = maxLength
        }
        return this
    }

    public SetMinLenght(minLength: number){
        if('minLength' in this._element){
            this._element.minLength = minLength
        }
        return this
    }

    public SetPlaceholder(placeholder: string){
        if('placeholder' in this._element){
            this._element.placeholder = placeholder
        }
        return this
    }

    public GetElement(){
        return this._element
    }
}