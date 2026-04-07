let editantId = null;

const modal = document.querySelector('#modal');
const modalTitol = document.querySelector('#modal-titol');
const inputNom = document.querySelector('#input-nom');
const inputPreu = document.querySelector('#input-preu');
const inputTalla = document.querySelector('#input-talla');
const inputCategoria = document.querySelector('#input-categoria');
const inputImatge = document.querySelector('#input-imatge');
const btnAfegir = document.querySelector('#btn-afegir');
const btnGuardar = document.querySelector('#btn-guardar');
const btnCancelar = document.querySelector('#btn-cancelar');

window.addEventListener('load', () => {
    getProductes();
    btnAfegir.addEventListener('click', obrirModalAfegir);
    btnGuardar.addEventListener('click', guardarProducte);
    btnCancelar.addEventListener('click', tancarModal);
});

async function getProductes() {
    let response = await fetch('../servidor/getProducts.php');
    let productes = await response.json();
    mostrarProductes(productes);
}

function mostrarProductes(productes) {
    const categories = ['Samarretes', 'Pantalons', 'Jaquetes'];

    categories.forEach(categoria => {
        let seccio = document.querySelector(`#seccio-${categoria.toLowerCase()}`);
        if (!seccio) return;
        let grid = seccio.querySelector('.cards-productes');
        grid.innerHTML = '';

        let productesFiltrats = productes.filter(p => p.categoria === categoria);

        productesFiltrats.forEach(producte => {
            let card = document.createElement('article');
            card.classList.add('card-producte');
            card.dataset.id = producte.id;

            card.innerHTML = `
                <div class="card-imatge" style="background-image: url('../recursos/${producte.imatge}')"></div>
                <div class="card-info">
                    <h4>${producte.nom}</h4>
                    <p class="preu">${producte.preu} €</p>
                    <p class="talla"><i class="fa-solid fa-tag"></i> ${producte.talla}</p>
                </div>
                <div class="card-botons">
                    <button class="btn-editar"><i class="fa-solid fa-pen"></i> Editar</button>
                    <button class="btn-eliminar"><i class="fa-solid fa-trash"></i> Eliminar</button>
                </div>
            `;

            card.querySelector('.btn-editar').addEventListener('click', () => obrirModalEditar(producte));
            card.querySelector('.btn-eliminar').addEventListener('click', () => eliminarProducte(producte.id));

            grid.append(card);
        });
    });
}

function obrirModalAfegir() {
    editantId = null;
    modalTitol.innerHTML = 'Afegir Producte';
    inputNom.value = '';
    inputPreu.value = '';
    inputTalla.value = '';
    inputCategoria.value = '';
    inputImatge.value = '';
    modal.classList.remove('hidden');
}

function obrirModalEditar(producte) {
    editantId = producte.id;
    modalTitol.innerHTML = 'Editar Producte';
    inputNom.value = producte.nom;
    inputPreu.value = producte.preu;
    inputTalla.value = producte.talla;
    inputCategoria.value = producte.categoria;
    inputImatge.value = producte.imatge;
    modal.classList.remove('hidden');
}

function tancarModal() {
    modal.classList.add('hidden');
}

async function guardarProducte() {
    let nom = inputNom.value;
    let preu = inputPreu.value;
    let talla = inputTalla.value;
    let categoria = inputCategoria.value;
    let imatge = inputImatge.value;

    if (nom === '' || preu === '' || categoria === '' || imatge === '') {
        alert('Omple tots els camps!');
        return;
    }

    let payload = new FormData();
    payload.append('nom', nom);
    payload.append('preu', preu);
    payload.append('talla', talla);
    payload.append('categoria', categoria);
    payload.append('imatge', imatge);

    let url = '../servidor/addProduct.php';

    if (editantId !== null) {
        payload.append('id', editantId);
        url = '../servidor/editProduct.php';
    }

    let options = { method: 'POST', body: payload };
    let response = await fetch(url, options);
    let msg = await response.json();
    console.log(msg);

    tancarModal();
    getProductes();
}

async function eliminarProducte(id) {
    let payload = new FormData();
    payload.append('id', id);

    let options = { method: 'POST', body: payload };
    let response = await fetch('../servidor/deleteProduct.php', options);
    let msg = await response.json();
    console.log(msg);

    getProductes();
}