const escribeUrlInput = document.getElementById('escribe-url');
const escribeNombreInput = document.getElementById('escribe-nombre');
const storagebtn = document.getElementById('storage-btn');
const ulList = document.getElementById('ul');



function storeData() {
    const url = escribeUrlInput.value;
    const nombre = escribeNombreInput.value;
    const linkObject = { url, nombre };

    const storeItem = localStorage.getItem('data');
    const saveLinks = storeItem ? JSON.parse(storeItem) : [];
    saveLinks.push(linkObject);

    localStorage.setItem('data', JSON.stringify(saveLinks)); 
   
    return saveLinks;
}

//storagebtn.addEventListener('click', storeData);
   


/*function renderizar(getData) {
    getData.forEach(({url, nombre}) => { 
        let template = `
        <li class='link-item'>
         <a href='${url}' target='_blank'>${nombre}</a>
         <button class='delete-btn'>X</button>
        </li>`;
       ulList.innerHTML += template;
    })
};
*/


