const escribeUrlInput = document.getElementById('escribe-url');
const escribeNombreInput = document.getElementById('escribe-nombre');
const storagebtn = document.getElementById('storage-btn');
const ulList = document.getElementById('ul');

function storeData() {
    const url = escribeUrlInput.value;
    const nombre = escribeNombreInput.value;

    if (!url || !nombre) {
        console.error("Uno de los campos está vacío");
        return;
    }
    const linkObject = { url, nombre };

    const storeItem = localStorage.getItem('data');
    const saveLinks = storeItem ? JSON.parse(storeItem) : [];
    saveLinks.push(linkObject);

    localStorage.setItem('data', JSON.stringify(saveLinks)); 
   
    return saveLinks;
}

function renderizar(saveLinks) {
    ulList.innerHTML = ''; 
    
  saveLinks.forEach(({url, nombre}, index) => { 
        let template = `
        <li class= 'link-item'>
         <a href= '${url}' target='_blank'>${nombre}</a>
         <button class='delete-btn' data-index='${index}'>X</button>
        </li>`;
       ulList.innerHTML += template;
    })
};

storagebtn.addEventListener('click', () => {
    renderizar(storeData());
});

ulList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const index = e.target.dataset.index;
        const storeItem = localStorage.getItem('data');
        const saveLinks = storeItem ? JSON.parse(storeItem) : [];

        saveLinks.splice(index, 1);
        localStorage.setItem('data', JSON.stringify(saveLinks)); 
        renderizar(saveLinks); 
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const storedData = localStorage.getItem("data");
    const saveLinks = storedData ? JSON.parse(storedData) : [];
    renderizar(saveLinks);
  });