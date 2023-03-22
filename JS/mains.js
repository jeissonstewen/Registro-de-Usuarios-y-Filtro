const nombres = document.getElementById('nombres')
const apellidos = document.getElementById('apellidos')
const area = document.getElementById('area')
const usuario = document.getElementById('usuario')
const edad = document.getElementById('edad')
const direccion = document.getElementById('direccion')
const email = document.getElementById('email')

let datos = []
class Usuario{
    nombres
    apellidos
    area
    usuario
    edad
    direccion
    email

    constructor(nombres,apellidos,area,usuario,edad,direccion,email){
        this.nombres = nombres
        this.apellidos = apellidos
        this.area = area
        this.usuario = usuario
        this.edad = edad
        this.direccion = direccion
        this. email = email
    }
}
if(localStorage.getItem('datos')==null){
    datos = [...datos]
    localStorage.setItem('datos',JSON.stringify(datos))
} else {
    datos = JSON.parse(localStorage.getItem(datos))
}

function agregarUsuario(){
    let user = new Usuario(nombres.value, apellidos.value, area.value, usuario.value, edad.value, direccion.value, email.value)
    datos.push(user)
    console.log(datos)
    datos = JSON.parse(localStorage.getItem('datos'))
    datos.push(user)
    localStorage.setItem('datos', JSON.stringify(datos))
}
function tablaUsuarios(){
    datos = JSON.parse(localStorage.getItem('datos'))
    datos.forEach(element => {
        tabla.innerHTML +=`
            <tr>
                <td>${datos.nombres}></td>
                <td>${datos.apellidos}></td>
                <td>Usuario <img src="./Images/Vector.svg" alt=""></td>
                <td>Email</td>
                <td>Edad <img src="./Images/Vector.svg" alt=""></td>
            </tr>
        `
    });
}
enviar.addEventListener('click',()=>{
    agregarUsuario()
    console.log('enviado')
    tablaUsuarios()
})


