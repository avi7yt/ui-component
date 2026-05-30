
const componentsList = Object.values(document.getElementById('ComponentsList').children);
componentsList.forEach((item) => {
    item.addEventListener('click', (e) => {
        document.body.style.backgroundColor = "white";
    });
});


