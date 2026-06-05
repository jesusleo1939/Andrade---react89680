const Productos = [
    {
        id: "1",
        nombre: "Cerastus knight Atrapos",
        descripcion: "Añade un poderoso y singular Caballero a tus Questoris Households",
        precio: "345",
        stock: 12,
        imagen: "https://www.warhammer.com/app/resources/catalog/product/920x950/99560108146_MechanicumCerastusKnightAtrapos01.jpg?fm=webp&w=892&h=920",
        category: "descuento",
        descuento: 10
    },
    {
        id: "2",
        nombre: "Knight Castellan",
        descripcion: "Añade un devastador bípode a tu ejército de Caballeros Imperiales, Marines Espaciales, Astra Militarum, Adepta Sororitas, Adeptus Custodes, Adeptus Mechanicus o Agentes Imperiales.",
        precio: "256",
        stock: 8,
        imagen: "https://www.warhammer.com/app/resources/catalog/product/920x950/99120108016_IKCastellan01.jpg?fm=webp&w=892&h=920",
        category: "nuevos",
        
    },
    {
        id: "3",
        nombre: "Knight Despoiler",
        descripcion: "Añade un bípode corrupto a tu ejército de Caballeros del Caos, Marines Espaciales del Caos, Guardia de la Muerte, Hijos del Emperador, Mil Hijos o Devoradores de Mundos",
        precio: "199",
        imagen: "https://www.warhammer.com/app/resources/catalog/product/920x950/99120108105_IKKnightQuestorisLEADDespoiler.jpg?fm=webp&w=892&h=920",
        stock: 5,
        category: "nuevos",
    },
    {
        id: "4",
        nombre: "Knight Destrier",
        descripcion: "Añade una aterradora fuerza de destrucción a tus ejércitos de Caballeros del Caos, Marines Espaciales del Caos, Guardia de la Muerte, Hijos del Emperador, Mil Hijos o Devoradores de Mundos",
        precio: "220",
        imagen: "https://www.warhammer.com/app/resources/catalog/product/920x950/99120102191_CKKnightRuinator01.jpg?fm=webp&w=892&h=920",
        stock: 3,
        category: "nuevos",
    }
];

let error = false;
export const getProducts = ()=> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error){
                reject("Error al obtener los productos");
            }else {
                resolve(Productos);
            }
        }, 2000);
    });
}