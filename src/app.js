
const componentsList = Object.values(document.getElementById('ComponentsList').children);
componentsList.forEach((item) => {
    item.addEventListener('click', (e) => {
        alert(e.target);
    });
});


