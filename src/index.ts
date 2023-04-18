export default class CreateHTMLElement{
    _element: HTMLElement

    constructor(elementType: string){
        this._element = document.createElement(elementType)
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

    public RemoveClass(className: string){
        this._element.classList.remove(className)
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

    public GetElementAs<T>(){
        return this._element as T
    }
}

module.exports = CreateHTMLElement