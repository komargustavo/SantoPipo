let principal = document.getElementById("grilla");

const mates =[
    { imagen:"/img/imagenes/Mate_0.jpg", nombre:"mate 1"},
    { imagen:"/img/imagenes/Mate_1.jpg", nombre:"mate 2"},
    { imagen:"/img/imagenes/Mate_2.jpg", nombre:"mate 3"},
    { imagen:"/img/imagenes/Mate_3.jpg", nombre:"mate 4"},
    { imagen:"/img/imagenes/Mate_4.jpg", nombre:"mate 5"},
    { imagen:"/img/imagenes/Mate_5.jpg", nombre:"mate 6"},
    { imagen:"/img/imagenes/Mate_6.jpg", nombre:"mate 7"},
    { imagen:"/img/imagenes/Mate_7.jpg", nombre:"mate 8"},
    { imagen:"/img/imagenes/Mate_8.jpg", nombre:"mate 9"},
    { imagen:"/img/imagenes/Mate_9.jpg", nombre:"mate 10"},
    { imagen:"/img/imagenes/Mate_10.jpg", nombre: "mate 11"},
    { imagen:"/img/imagenes/Mate_11.jpg", nombre: "mate 12"},
    { imagen:"/img/imagenes/Mate_12.jpg", nombre: "mate 13"},
    { imagen:"/img/imagenes/Mate_13.jpg", nombre: "mate 14"},
    { imagen:"/img/imagenes/Mate_14.jpg", nombre: "mate 15"},
    { imagen:"/img/imagenes/Mate_15.jpg", nombre: "mate 16"},
    { imagen:"/img/imagenes/Mate_16.jpg", nombre: "mate 16"},
    { imagen:"/img/imagenes/Mate_17.jpg", nombre: "mate 17"},
    { imagen:"/img/imagenes/Mate_18.jpg", nombre: "mate 18"},
    { imagen:"/img/imagenes/Mate_19.jpg", nombre: "mate 19"},
    { imagen:"/img/imagenes/Mate_20.jpg", nombre: "mate 20"},
    { imagen:"/img/imagenes/Mate_21.jpg", nombre: "mate 21"},
    { imagen:"/img/imagenes/Mate_22.jpg", nombre: "mate 22"},
    { imagen:"/img/imagenes/Mate_23.jpg", nombre: "mate 23"},
    { imagen:"/img/imagenes/Mate_24.jpg", nombre: "mate 24"},
    { imagen:"/img/imagenes/Mate_25.jpg", nombre: "mate 25"},
    { imagen:"/img/imagenes/Mate_26.jpg", nombre: "mate 26"},
    { imagen:"/img/imagenes/Mate_27.jpg", nombre: "mate 27"},
    { imagen:"/img/imagenes/Mate_28.jpg", nombre: "mate 28"},
    { imagen:"/img/imagenes/Mate_29.jpg", nombre: "mate 29"},
    { imagen:"/img/imagenes/Mate_30.jpg", nombre: "mate 30"},
    { imagen:"/img/imagenes/Mate_31.jpg", nombre: "mate 31"},
    { imagen:"/img/imagenes/Mate_32.jpg", nombre: "mate 32"},
    { imagen:"/img/imagenes/Mate_33.jpg", nombre: "mate 33"},
    { imagen:"/img/imagenes/Mate_34.jpg", nombre: "mate 34"},
    { imagen:"/img/imagenes/Mate_35.jpg", nombre: "mate 35"},
    { imagen:"/img/imagenes/Mate_36.jpg", nombre: "mate 36"},
    { imagen:"/img/imagenes/Mate_37.jpg", nombre: "mate 37"},
    { imagen:"/img/imagenes/Mate_38.jpg", nombre: "mate 38"},
    { imagen:"/img/imagenes/Mate_39.jpg", nombre: "mate 39"},
    { imagen:"/img/imagenes/Mate_40.jpg", nombre: "mate 40"},
    { imagen:"/img/imagenes/Mate_41.jpg", nombre: "mate 41"},
    { imagen:"/img/imagenes/Mate_42.jpg", nombre: "mate 42"},
    { imagen:"/img/imagenes/Mate_43.jpg", nombre: "mate 43"},
    { imagen:"/img/imagenes/Mate_44.jpg", nombre: "mate 44"},
    { imagen:"/img/imagenes/Mate_45.jpg", nombre: "mate 45"},
    { imagen:"/img/imagenes/Mate_46.jpg", nombre: "mate 46"},
    { imagen:"/img/imagenes/Mate_47.jpg", nombre: "mate 47"},
    { imagen:"/img/imagenes/Mate_48.jpg", nombre: "mate 48"},
    { imagen:"/img/imagenes/Mate_49.jpg", nombre: "mate 48"},
    { imagen:"/img/imagenes/Mate_50.jpg", nombre: "mate 49"},
    { imagen:"/img/imagenes/Mate_51.jpg", nombre: "mate 49"},
    { imagen:"/img/imagenes/Mate_52.jpg", nombre: "mate 50"},
    { imagen:"/img/imagenes/Mate_53.jpg", nombre: "mate 51"},
    { imagen:"/img/imagenes/Mate_54.jpg", nombre: "mate 52"},
    { imagen:"/img/imagenes/Mate_55.jpg", nombre: "mate 53"},
    { imagen:"/img/imagenes/Mate_56.jpg", nombre: "mate 54"},
    { imagen:"/img/imagenes/Mate_57.jpg", nombre: "mate 55"},
    { imagen:"/img/imagenes/Mate_58.jpg", nombre: "mate 56"},
    { imagen:"/img/imagenes/Mate_59.jpg", nombre: "mate 57"},
    { imagen:"/img/imagenes/Mate_60.jpg", nombre: "mate 58"},
    { imagen:"/img/imagenes/Mate_61.jpg", nombre: "mate 59"},
    { imagen:"/img/imagenes/Mate_62.jpg", nombre: "mate 60"},
    { imagen:"/img/imagenes/Mate_63.jpg", nombre: "mate 61"},
    { imagen:"/img/imagenes/Mate_64.jpg", nombre: "mate 62"},
    { imagen:"/img/imagenes/Mate_65.jpg", nombre: "mate 63"},
    { imagen:"/img/imagenes/Mate_66.jpg", nombre: "mate 64"},
    { imagen:"/img/imagenes/Mate_67.jpg", nombre: "mate 65"},
    { imagen:"/img/imagenes/Mate_68.jpg", nombre: "mate 66"},
    { imagen:"/img/imagenes/Mate_69.jpg", nombre: "mate 67"},
    { imagen:"/img/imagenes/Mate_70.jpg", nombre: "mate 68"},
    { imagen:"/img/imagenes/Mate_71.jpg", nombre: "mate 69"},
    { imagen:"/img/imagenes/Mate_72.jpg", nombre: "mate 70"},
    { imagen:"/img/imagenes/Mate_73.jpg", nombre: "mate 71"},
    { imagen:"/img/imagenes/Mate_74.jpg", nombre: "mate 72"},
    { imagen:"/img/imagenes/Mate_75.jpg", nombre: "mate 73"},
    { imagen:"/img/imagenes/Mate_76.jpg", nombre: "mate 74"},
    { imagen:"/img/imagenes/Mate_77.jpg", nombre: "mate 75"},
    { imagen:"/img/imagenes/Mate_78.jpg", nombre: "mate 76"},
    { imagen:"/img/imagenes/Mate_79.jpg", nombre: "mate 77"},
    { imagen:"/img/imagenes/Mate_80.jpg", nombre: "mate 78"},
    { imagen:"/img/imagenes/Mate_81.jpg", nombre: "mate 79"},
    { imagen:"/img/imagenes/Mate_82.jpg", nombre: "mate 80"},
    { imagen:"/img/imagenes/Mate_83.jpg", nombre: "mate 81"},
    { imagen:"/img/imagenes/Mate_84.jpg", nombre: "mate 82"},
    { imagen:"/img/imagenes/Mate_85.jpg", nombre: "mate 83"}
];

console.log(mates)

mates.map(articulo => {
    const divMate = document.createElement("div");
    divMate.classList.add("elemento");

    //creacion de los elementos del div
    const imgMate = document.createElement("img");
    imgMate.src = articulo.imagen;
    imgMate.classList.add("img-fluid");

    const tituloMate = document.createElement("p");
    tituloMate.textContent = articulo.nombre;
    tituloMate.classList.add("texto-imagen")
    //asignacion de los elementos al divArticulo
    divMate.appendChild(imgMate);
    //divMate.appendChild(tituloMate);

    console.log(divMate);

    const articulos = document.querySelector(".grilla");
    articulos.appendChild(divMate);

})


