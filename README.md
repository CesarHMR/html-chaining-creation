# html-elements-chaining-creation

Create HTML elements quickly in Typescript using function chaining.

### How to install it?

Use the npm install command to install the package.

```
npm i html-chaining-creation
```

### How to use it?

First you need to import **CreateHTMLElement** class from "html-chaining-creation". To create a html element, create a new instance of CreateHTMLElement and pass the string key of the element you want to create *('div', 'button', 'p', 'h1'...)*. From that is possible to chain all the [available funtions](#available-functions) of the package to set a series of attributes of the element *('id', 'className', 'src'...)*. Finally, the last function of the chain MUST BE the **getElement()** function, since is the function that returns the HTML element itself. Otherwise the chain will return the CreateHTMLElement instance.

Follow the example bellow:

```
import { CreateHTMLElement } from "html-chaining-creation"

let navBar = new CreateHTMLElement('div').setId('nav-bar').getElement()

let buttons: HTMLButtonElement[] = []

for(let i = 0; i < 10; i++){

	let button = new CreateHTMLElement('button')
	.setClass('nav-button')
	.addEventListener('click', () => console.log('hello world!'))
	.appendTo(navBar)
	.getElement()

	buttons.push(button)
}
```

### Available Functions

Because the ideia is to create HTML elements, not every existing function of an HTMLElement is available, only the ones that make sense in the context of an element creation. See bellow all available functions and what they actually do:

- **setId(id: string)** > element.id = id
- **setClass(className: string)** > element.className = className
- **addClass(className: string)** > element.classlist.add(classname)
- **appendTo(parent: HTMLElement)** > parent.appendChild(element)
- **addEventListener(event: string, callback: Function)** > element.addEventListener(event, () => callback)
- **setInnerHTML(innerHTML: string)** > element.innerHTML = innerHTML
- **setInnerText(innerText: string)** > element.innerText = innerText
- **setAtrtibute(name: string, value: string)** > element.setAttribute(name, value)
- **setSource(src: string)** > element.src = src
- **setName(name: string)** > element.name = name
- **setTarget(target: string)** > element.target = target
- **setValue(value: string)** > element.value = value
- **setType(type: string)** > element.type = type
- **setMaxValue(max: string)** > element.max = max
- **setMinValue(min: string)** > element.min = min
- **setMaxLength(maxLength: number)** > element.maxLength = maxLength
- **setMinLength(minLength: number)** > element.minLength = minLength
- **setPlaceholder(placeholder: string)** > element.placeholder = placeholder
- **setVolume(volume: number)** > element.volume = volume