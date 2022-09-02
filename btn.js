export const btnElement = () => {
    const btnElement = document.createElement('button');
    btnElement.className += 'main-btn'
    btnElement.innerText = "Let's play!"
    document.querySelector('.body-class').appendChild(btnElement)
}
