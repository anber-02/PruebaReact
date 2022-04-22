
let firstName = 'Luis';
const lastName = "Mendoza";
const lastNameWithUppercase = lastName.toUpperCase();

console.log(lastNameWithUppercase)

const list = [];
list.push(157);

console.log(list[0]);

const persona = {
    name: "Luis",
    age: 20,
    isDeveloper: true,
    links: ['Link 1', 'Link2']
}

const field = 'age';

persona[field];//esto se transformara pasos abajo 
/** 1.- persona['age'];
 *  2.- persona.age;
 *esto para poder acceder a una propiedad del objeto
 */
console.log(persona[field])

const sumar = (a, b) => {
    console.log(a)
    console.log(b)
    return a + b;
}

console.log(sumar(10,2))