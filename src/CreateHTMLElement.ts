export class CreateHTMLElement{
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

    public SetAtribute(name: string, value: string){
        this._element.setAttribute(name, value)
        return this
    }

    public GetElementAs<T>(){
        return this._element as T
    }
}