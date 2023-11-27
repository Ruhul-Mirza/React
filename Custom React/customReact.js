function customReact(reactElement,container){
    const domElement = document.createElement(reactElement.type)
    // domElement.setAttribute("href",reactElement.props.href)
    // domElement.setAttribute("target",reactElement.props.target)
    // domElement.innerHTML = reactElement.children
    // main.append(domElement)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
     if(prop == reactElement.children) continue;
     const a = domElement.setAttribute(prop,reactElement.props[prop])
    }
    main.append(domElement)
}
const reactElement = {
    type:'a',
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:"Click ME"
}
const main = document.querySelector("#root")
customReact(reactElement,main)