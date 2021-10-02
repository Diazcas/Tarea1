//Codigo para generar información de categorias y almacenarlas en un arreglo.
var categorias = [];
(() => {
    //Este arreglo es para generar textos de prueba
    let textosDePrueba = [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
        "Quaerat quod qui molestiae sequi, sint aliquam omnis quos voluptas?",
        "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
        "Ducimus, repellendus voluptate quo veritatis tempora recusandae dolorem optio illum."
    ]

    //Genera dinamicamente los JSON de prueba para esta evaluacion,
    //Primer ciclo para las categorias y segundo ciclo para las apps de cada categoria


    let contador = 1;
    for (let i = 0; i < 5; i++) {//Generar 5 categorias
        let categoria = {
            nombreCategoria: "Categoria " + i,
            descripcion: textosDePrueba[Math.floor(Math.random() * (5 - 1))],
            aplicaciones: []
        };
        for (let j = 0; j < 10; j++) {//Generar 10 apps por categoria
            let aplicacion = {
                codigo: contador,
                nombre: "App " + contador,
                descripcion: textosDePrueba[Math.floor(Math.random() * (5 - 1))],
                icono: `img/app-icons/${contador}.webp`,
                instalada: contador % 3 == 0 ? true : false,
                app: "app/demo.apk",
                calificacion: Math.floor(Math.random() * (5 - 1)) + 1,
                descargas: 1000,
                desarrollador: `Desarrollador ${(i + 1) * (j + 1)}`,
                imagenes: ["img/app-screenshots/1.webp", "img/app-screenshots/2.webp", "img/app-screenshots/3.webp"],
                comentarios: [
                    { comentario: textosDePrueba[Math.floor(Math.random() * (5 - 1))], calificacion: Math.floor(Math.random() * (5 - 1)) + 1, fecha: "12/12/2012", usuario: "Juan" },
                    { comentario: textosDePrueba[Math.floor(Math.random() * (5 - 1))], calificacion: Math.floor(Math.random() * (5 - 1)) + 1, fecha: "12/12/2012", usuario: "Pedro" },
                    { comentario: textosDePrueba[Math.floor(Math.random() * (5 - 1))], calificacion: Math.floor(Math.random() * (5 - 1)) + 1, fecha: "12/12/2012", usuario: "Maria" },
                ]
            };
            contador++;
            categoria.aplicaciones.push(aplicacion);
        }
        categorias.push(categoria);
    }

    console.log(categorias)

    showApps('Categorias');

    var newEl;
    for (let i = 0; i < categorias.length; i++) {
        newEl = document.createElement('Option');
        newEl.setAttribute('value', `${categorias[i].nombreCategoria}`)
        newEl.innerHTML = `${categorias[i].nombreCategoria}`;
        // console.log(newEl);
        document.getElementById('categoria').appendChild(newEl)
    };

    var SsHtml =
        `<img id="imgF" class="P" src="img/app-screenshots/1.webp" alt="">
    <img class="" src="img/app-screenshots/2.webp" alt="">
    <img class="" src="img/app-screenshots/3.webp" alt="">
    <div id="arrows">
        <i id="leftArrow" class="fas fa-arrow-left"></i>
        <i id="rightArrow" class="fas fa-arrow-right"></i>
    </div>
    `;

    document.getElementById('ssC').innerHTML = SsHtml;

})();

function showApps(categoria) {
    var appHtmlT = '';
    var estrella = '<i class="fas fa-star"></i>'
    var estrellaSin = `<i class="far fa-star"></i>`
    if (categoria == 'Categorias' || categoria == '') {
        for (let l = 0; l < 5; l++) {
            for (let i = 0; i < 10; i++) {
                var appHtml =
                    `<div class="col">
                <figure>
                <img src="${categorias[l].aplicaciones[i].icono}" alt="">
                </figure>
                <p id="nombreApp"><strong id="nombreApp">${categorias[l].aplicaciones[i].nombre}</strong></p>
                <p id="desarrollador"> ${categorias[l].aplicaciones[i].desarrollador}</p>
                <p id="valor">${estrella.repeat(categorias[l].aplicaciones[i].calificacion)}${estrellaSin.repeat(5 - categorias[l].aplicaciones[i].calificacion)}</p>
                <p id="precio">pisto</p>
                </div>`;
                appHtmlT += appHtml;
            }
        }
    } else {
        for (let l = 0; l < 5; l++) {
            if (l == categoria) {
                for (let i = 0; i < 10; i++) {
                    var appHtml =
                        `<div class="col">
                    <figure>
                    <img src="${categorias[l].aplicaciones[i].icono}" alt="">
                    </figure>
                    <p id="nombreApp1"><strong id="nombreApp">${categorias[l].aplicaciones[i].nombre}</strong></p>
                    <p id="desarrollador"> ${categorias[l].aplicaciones[i].desarrollador}</p>
                    <p id="valor">${estrella.repeat(categorias[l].aplicaciones[i].calificacion)}${estrellaSin.repeat(5 - categorias[l].aplicaciones[i].calificacion)}</p>
                    <p id="precio">pisto</p>
                    </div>`;
                    appHtmlT += appHtml;
                }
            }
        }
    }



    document.getElementById('apps').innerHTML = appHtmlT;

    var colsEl = document.getElementsByClassName('col');
    if(colsEl){
        for (let i = 0; i < colsEl.length; i++) {
            colsEl[i].addEventListener('click', function () {
                var num = this.children[0].children[0].getAttribute('src').substr(14,2);
                console.log(num);
                showDetail(num);
                document.getElementById('forBackDF').classList.toggle('active');
                document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
            })
        }
    }
}

function showDetail(num){
    var estrella = '<i class="fas fa-star"></i>'
    var estrellaSin = `<i class="far fa-star"></i>`
    var elDetail = document.getElementById('second');
    var elDetailInfo = elDetail.children[2];
    var elDetailInfo2 = elDetailInfo.children[1];
    var x = 0;

    for(let i = 0; i < categorias.length; i++){
        for(let j = 0; j < categorias[i].aplicaciones.length; j++){
            if(categorias[i].aplicaciones[j].icono.substr(14,2) == num){

                var acceso = categorias[i].aplicaciones[j];
                elDetailInfo.children[0].setAttribute('src', `${acceso.icono}`);
                elDetailInfo2.children[0].innerHTML = acceso.nombre;
                elDetailInfo2.children[1].innerHTML = acceso.desarrollador;
                elDetailInfo2.children[2].innerHTML = acceso.descripcion;
                elDetail.children[4].children[0].innerHTML = `${estrella.repeat(acceso.calificacion)}${estrellaSin.repeat(5 - acceso.calificacion)}`;
                for(let l = 0; l < 3; l++){
                    var elDetailComents = elDetail.children[6].children[x];
                    elDetailComents.children[0].setAttribute('src', '../img/user.webp');
                    elDetailComents.children[1].children[0].innerHTML = acceso.comentarios[l].usuario;
                    elDetailComents.children[1].children[1].innerHTML = acceso.comentarios[l].comentario;
                    x += 2;
                }
                if(!acceso.instalada){
                    var btnEl = elDetail.children[7];
                    btnEl.style.display = 'block';
                } else{
                    var btnEl = elDetail.children[7];
                    btnEl.style.display = 'none';
                }

            }
        }
    }
};

document.getElementById('cerrar').addEventListener('click', function () {
    document.getElementById('forBackDF').classList.toggle('active');
    document.getElementsByTagName('body')[0].style.overflowY = ''
});


var imgSs = document.getElementById('imgF');

document.getElementById('rightArrow').addEventListener('click', function () {
    if (imgSs.className == 'P') {
        imgSs.className = 'S';
    } else {
        if (imgSs.className == 'S') {
            imgSs.className = 'T';
        }
    }
});

document.getElementById('leftArrow').addEventListener('click', function () {
    if (imgSs.className == 'T') {
        imgSs.className = 'S';
    } else {
        if (imgSs.className == 'S') {
            imgSs.className = 'P';
        }
    }
});

var CatEl = document.getElementById('categoria');
document.getElementById('categoria').addEventListener('change', function () {
    var num = CatEl.value.substr(10, 1)
    // console.log(num);
    showApps(num);
});




