export const testing = (maps) => {
    for (let i = 0; i < maps.length; i++) {
        const imgElement = document.createElement('img');
        imgElement.className += 'map '
        imgElement.className += `map${i}`
        imgElement.setAttribute('id', `map${i}`);
        imgElement.setAttribute('width', `300`);
        imgElement.setAttribute('height', `300`);
        imgElement.src = maps[i];
        document.getElementsByClassName('map').src = maps[i];
        document.querySelector('.grid-container').appendChild(imgElement);
    }
}

