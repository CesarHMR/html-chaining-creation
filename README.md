# html-elements-chaining-creation

Create HTML elements quickly in Typescript using function chaining.

### How To Use It?

After importing the **CreateHTMLElement** class, you must create a new CreateHTMLElement instance and pass the key of the element you want to create *(div, button, p, h1...)*. From that is possible to use all the [available funtions](#available-functions) of the package to set the element with the desired attributes. The last function MUST BE the **GetElementAs<T<T>>()** function, since is the function that return the element itself. If this is not done, the object returned is a CreateHTMLElement. The generic type <T> must be the desired HTML element type *(HTMLDivElement, HTMLButtonElement, HTMLImageElement...)*.

Follow the example bellow:
```
let gridCanva = new CreateHTMLElement('div').SetId('grid-canva').GetElementAs<HTMLDivElement>()

let button: HTMLButtonElement[] = []

for(let i = 0: i < 10; i++){

	let button = new CreateHTMLElement('button')
	.SetClass('canva-button')
	.AddEventListener('click', () => console.log('hello world!'))
	.AppendTo(gridCanva)
	.GetElementAs<HTMLButtonElement>()

	buttons.push(button)
}

```

### Available Functions

Because the ideia is to create HTML elements, not every existing function of an HTMLElement is available, only the ones that make sense in the context of an element creation. See bellow all possible functions and its correspondent native functions:

- **SetId(id: string)** > element id = id
- **SetClass(className: string)** > element.className = className
- **AddClass(className: string)** > element.classlist.add(classname)
- **AppendTo(parent: HTMLElement)** > parent.appendChild(element)
- **AddEventListener(event: string, callback: Function)** > element.addEventListener(event, () => callback)
- **SetInnerHTML(innerHTML: string)** -> element.innerHTML = innerHTML
- **SetInnerText(innerText: string)** -> element.innerText = innerText
- **SetAtribute(name: string, value: string)** -> element.setAttribute(name, value)