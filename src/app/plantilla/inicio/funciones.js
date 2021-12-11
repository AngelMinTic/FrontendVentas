let imagenesCompu = ["https://www.ktronix.com/medias/4710180896312-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wyNjMxMzJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDlkL2g0ZS8xMDA2Njg0MTUwMTcyNi5qcGd8NjQ0MzA3ZTQwNzM5MDM2NzE1MjRiOGI2MDhjNzAyNmVjZjc2NDY4YWQ2OGMyYjI0OWE4ZGQyNWRhZmQ4NGY4Ng",
"https://www.ktronix.com/medias/4710180896312-002-750Wx750H?context=bWFzdGVyfGltYWdlc3wxOTE1NjB8aW1hZ2UvanBlZ3xpbWFnZXMvaGMxL2gxZS8xMDA2Njg0MDkxMTkwMi5qcGd8NzQxNGNjNmQxZjZiYjQ5YTJiZTZmN2E4Y2RmOTI0ZTAzNGRlYjM1YjdjZjQ2NDEyMzI0ZWJkNzRkZWUxNWU3Yg",
"https://www.ktronix.com/medias/4710180896312-006-750Wx750H?context=bWFzdGVyfGltYWdlc3wxODkxMzF8aW1hZ2UvanBlZ3xpbWFnZXMvaDI1L2gzMy8xMDA2Njg0Mzg2MTAyMi5qcGd8MzNlMzE2M2VmNzdmOWVmYWQyNGQ2ODliN2FlNTQxMTFkY2M5MmRhNzA0YTEyOGE4OGZkYzk0OWFiYzlkMjNhMQ",
"https://www.ktronix.com/medias/4710180896312-007-750Wx750H?context=bWFzdGVyfGltYWdlc3wxNDExMjl8aW1hZ2UvanBlZ3xpbWFnZXMvaGI1L2hiMS8xMDA2Njg0NDQ1MDg0Ni5qcGd8OGNjYTliNmZlZTMzMjMxZDY1MDI0NzAwYjU1Y2Q0ZWVhMjNjODgyMjk3ZGJlOGZiMGI4YzY1NmI5NjcyZmU1ZQ"
];
let imagenesImpre = ["https://www.ktronix.com/medias/010343957961-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxMTU0OTd8aW1hZ2UvanBlZ3xpbWFnZXMvaGE2L2hkMS8xMDc0Mjc5Njk3NjE1OC5qcGd8YjI3OTE3NmE2YmJjYTNlNjhlNTQzMjcxMzQ3YjRkYzNiNTMzMTFmMWY0YTE4ODQ3ZTJjY2U2Njg3MDVmOWYyYQ",
"https://www.ktronix.com/medias/010343957961-002-750Wx750H?context=bWFzdGVyfGltYWdlc3w4MzE2M3xpbWFnZS9qcGVnfGltYWdlcy9oODMvaDE1LzEwNzQyNzk3NTY1OTgyLmpwZ3xmZDEwM2NlMjhmNGE4NDVkNmQ1ZWMwMjkwYWJjNWRkN2RlM2NkYjMzNGNmM2Y0YzRmMTY1MjRkNDZjMzE4YmQz",
"https://www.ktronix.com/medias/010343957961-003-750Wx750H?context=bWFzdGVyfGltYWdlc3wxNzI3ODR8aW1hZ2UvanBlZ3xpbWFnZXMvaDMwL2gxMC8xMDc0Mjc5ODE1NTgwNi5qcGd8ZjNmOWQ5MTMzNmUzN2E2OGVkZTI2ZjM2ZDFkZDU3ZmZjNDk3ZDUxY2Q4ZGY0NzQ5ZjU1NTliNzZhYjA2YTZmZQ",
"https://www.ktronix.com/medias/010343957961-004-750Wx750H?context=bWFzdGVyfGltYWdlc3wxMzkzNDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDg5L2g5YS8xMDc0Mjc5ODgxMTE2Ni5qcGd8Y2I5ZDE3ZGZkYzMwZjhiOTczMTYxMjViOTBiMmQ5MmRjNWY3MjNiMzcyOTM3Nzc0ZjkyMmQxOThmMDljMTM3YQ"
];
let imagenesMouse = ["https://www.ktronix.com/medias/097855160621-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w2NTIzNHxpbWFnZS9qcGVnfGltYWdlcy9oYjAvaGI0LzEwNDQ1MzcyOTQ4NTEwLmpwZ3w4NTZhNzI5Y2QxNmIwMjI4ZTA3MDNhZmVlZTViMGFjMmZkMjFkMTg4ODFmYjUwYjNlMGE3MzA4MDM4NmM3NDM5",
"https://www.ktronix.com/medias/097855160621-002-750Wx750H?context=bWFzdGVyfGltYWdlc3w3MDI4NXxpbWFnZS9qcGVnfGltYWdlcy9oMGYvaDI2LzEwNDQ1Mzc0MTI4MTU4LmpwZ3xhZWRjOWMzNTczYzEzMmVkOTZiMWE1NTUyMGY1NTkwNmMwMzFkZjM4NzI4OWNiNmJhYWQ0YzI1Zjk4NzM3Y2Iz",
"https://www.ktronix.com/medias/097855160621-003-750Wx750H?context=bWFzdGVyfGltYWdlc3w2Mzg0N3xpbWFnZS9qcGVnfGltYWdlcy9oMGUvaGFkLzEwNDQ1Mzc0NzE3OTgyLmpwZ3xlNDgxYzA4ZjBhMDg3YWFmNThkZTkzOGU2MWJkODkxY2RkN2QwZThmOWFkZmEwM2IyYjQ5OTA2MzU5NDZlN2M4",
"https://www.ktronix.com/medias/097855160621-004-750Wx750H?context=bWFzdGVyfGltYWdlc3w3NDk4OXxpbWFnZS9qcGVnfGltYWdlcy9oNWEvaDg3LzEwNDQ1Mzc1MzA3ODA2LmpwZ3w2OWJlZTFlMDBmZDJlNjFkNGMwZjFjOWIyMmZhYjE0MWYwYTJhZGYxOThiMWQ3YTMwMDNjYTAwNTIwZGYyOTk2"
];

function Buscarproducto(){
    let mensaje = document.querySelector("#txtMensaje").value;

    alert("El producto que usted desea buscar es: " + mensaje);
    window.location.reload();
}

function CambiarImagenes(i){
        const elementC = imagenesCompu[i];
        const elementI = imagenesImpre[i];
        const elementM = imagenesMouse[i];
        document.querySelector("#Compu").src = elementC;
        document.querySelector("#Impre").src = elementI;
        document.querySelector("#Mouse").src = elementM;
}

let i = 0;

setInterval(() => {
    CambiarImagenes(i)
    i++;
    if (i>3){
        i = 0;
    }
}, 3000);
