  let  miNumero : number = 10;
  miNumero = miNumero + 1
  console.log('mi numero', miNumero)
  // let productosStock : number;
  // console.log(productosStock);
  // if (productosStock > 10) {
  //   console.log("existen");
  // }
// HEXADECIMALES - BINARIOS
let hex = 0xfff; // lo va transofrmar al valor
console.log('hex', hex);
let bin = 0b1010;
console.log('bin', bin);
//----->BOOLEANS<--------
let isEnable = true;
// isEnable = 'as';
isEnable = false;
let isNew : boolean = false;
console.log('es nuevo', isNew);
isNew = true;
console.log('es nuevo', isNew);
const random = Math.random();
isNew = random >= 0.5 ? true : false;
console.log('es nuevo', isNew);
const miBooleano : boolean = true;
//------->STRINGS<----------
let productoTitulo = 'Mis productos titulo';
productoTitulo = 'Mis productos cambiados';
console.log(productoTitulo);
const productoDescripcion = 'Productos decripcion';
console.log(productoDescripcion);
// El uso de back tick’s se conoce como “interpolación de strings”
// y es sumamente útil para construir cadenas de forma muy sencilla,
// con la interpolación ya no necesitamos métodos de concatenación
const resumen = `
  titulo: ${productoTitulo}
  descripcion: ${productoDescripcion}
`;
console.log(resumen);
// ----->ARRAYS<-------------
let precios = [1,34,5,45,234,234,23,1,2,3,4,'hola'];
precios.push(500);
precios.push(true);
console.log(precios);
let mixto : (number | string | boolean | object) [] = ['hola', true];
mixto.push(10);
mixto.push(false);
mixto.push({});
mixto.push([]);
console.log(mixto);
// Las Mapentradas iteran en el orden de inserción .
//Un bucle for-each devuelve una matriz de [key, value]pares para cada iteración.
let numeros = [1,2,3,4,6];
let resultado = numeros.map(item => {return item * 2});
console.log(resultado);
//ANY
let miVlaorDinamico : any; //cualquier
//desactivamos el sistema de tipado de typescript
miVlaorDinamico = 100;
miVlaorDinamico = null;
miVlaorDinamico = {};
miVlaorDinamico = '';
//any nse considera que no es utilizable, mala practica
// typescript, no esta bien tipada
// puede utilziar un libreria que no este bien tipada y alli poder agarrar

miVlaorDinamico = 'hola';
const rta = (miVlaorDinamico as string).toLocaleUpperCase();
console.log(rta);
// NULL UNDEFINED
//NULL-> HASTA QUE NO CARGUES UN VALOR PUEDE OBLIGARTE A CARGAR ALGO
//UNDEFINED -> ALGO NO SE HA INICIALIZADO
//NULL -> ALGO NO ESTA DISPONIBLE : NULL
// Tanto nulo como indefinido son solo `==` para ellos mismos y entre sí:
console.log(null == null); // true (of course)
console.log(undefined == undefined); // true (of course)
console.log(null == undefined); // true
//FUNCIONES
// const miFuncion = (a,b) => a+ b;
//type es una palabra clave que se utiliza para definir un nuevo tipo de datos
//mediante la creación de un alias de tipo (también conocido como un tipo de nombre).
//Un alias de tipo se utiliza para crear un nombre más descriptivo para un tipo existente
//o para definir un tipo completamente nuevo a partir de otros tipos existentes.
type Tamano = 'S' | 'M' | 'L'  | 'XL'
function crearProductosJson (titulo: string, creadoEn: Date, stock: number, tamano?: Tamano){
  return { titulo, creadoEn, stock, tamano} // devolver un JSON
}
const producto1 = crearProductosJson('PL1', new Date(), 12, 'XL');
console.log(producto1);
console.log(producto1.tamano);

const producto2 = crearProductosJson('PL1', new Date(), 12);
//FUNCIONES CON RETORNO
const calculoTotal = (precios: number[]) : string => {
  let total = 0;
  precios.forEach((item) => {
    total += item;
  });
  return total.toString();
}
const imprimirTotal = (precios: number[]) : void => {
  const rta = calculoTotal(precios);
  console.log(`El total es ${rta}`);
}

imprimirTotal( [1,2,1,1,1]) ;
