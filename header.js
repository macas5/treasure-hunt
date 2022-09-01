export const headerElement = () => {
    const headerElement = document.createElement('h1');
    headerElement.className += 'main-title'
    headerElement.innerText = "Treasure Hunters"
    document.querySelector('.body-class').appendChild(headerElement)
}


