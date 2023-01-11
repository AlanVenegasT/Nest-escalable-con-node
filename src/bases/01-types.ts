
export let name: string = 'Alan';
export const age: number = 35;
export const isVaLID: boolean = true;

name = 'Giovanni';

export const templateString = ` Esto es un string
mulrilinea
que puede tener
"" dobles
' simple
inyectar valores ${name}
expresiones ${ 1 + 1}
números: ${ age }
booleanos: ${isVaLID}
`

console.log( templateString);
