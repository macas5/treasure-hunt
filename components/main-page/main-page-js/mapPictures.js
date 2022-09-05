export const mapPictures = (maps) => {
    for (let i = 0; i < maps.length; i++) {
        const imgElement = document.createElement('img');
        imgElement.className += 'map '
        imgElement.className += `map${i}`
        imgElement.setAttribute('id', `map${i}`);
        imgElement.setAttribute('width', `300`);
        imgElement.setAttribute('height', `300`);
        imgElement.setAttribute('data-index', i);
        imgElement.src = maps[i].pic;
        document.querySelector('.grid-container').appendChild(imgElement);

        //Movements
        imgElement.addEventListener('mouseover', mouseOver);
        imgElement.addEventListener('mouseout', mouseOut);
    
        function mouseOver() {
            let picMove = gsap.timeline({ repeat: 0, repeatDelay: 0})
            picMove.to(`#map${i}`, { rotation: 360 });           
        }

        function mouseOut() {
            let picMove = gsap.timeline({ repeat: 0, repeatDelay: 0})
            picMove.to(`#map${i}`, { rotation: 0, scale: 1});
        }

        //Click game
        imgElement.addEventListener('click', playGame);
        function playGame(e) {
            const targetIndex = parseInt(e.target.dataset.index);
            const { link } = maps[targetIndex];
            location.href = link
        }
    }
}

