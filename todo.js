// Reto 1
// Un botón que elimine todo

// Reto 2
// La temática será de producto y precio (2 inputs)

// Reto 3
// Un botón extra que obtenga la suma de todos los precios, se deberá de ver en pantalla

const registroProducto = document.getElementById('producto')
const registroPrecio = document.getElementById('precio')
const botonRegistrar = document.getElementById('buttonRegistrar')
const listadoProductos = document.getElementById('listaProducto')
const listadoPrecios = document.getElementById('listaPrecios')
const botonLimpiar = document.getElementById('limpiarTodo')
const botonTotal = document.getElementById('totalPrecios')
const resultado = document.getElementById('resultado')

const arregloProductos = [] //string
const arregloPrecios= []  // numeros

botonRegistrar.addEventListener('click',()=>{

    const producto = registroProducto.value.trim()
    const precio = Number(registroPrecio.value)

        if(producto ===''){
            alert(`Por favor Ingrese un producto`)
            return
        }
        if(registroPrecio.value ===''|| isNaN(precio) || precio < 0){
            alert(`Por favor ingrese un precio válido(número mayor o igual a 0)`)
            return
        }

    arregloProductos.push(producto)
    arregloPrecios.push(precio)

    listadoProductos.innerHTML = ''    
    arregloProductos.forEach((prod,i)=>{
        listadoProductos.innerHTML+= `<p>${i+1}. ${prod}</p>`
    })
    
    listadoPrecios.innerHTML= ''
    arregloPrecios.forEach(prec=> {
        listadoPrecios.innerHTML += `<p>${prec}</p>`
    })

    registroProducto.value = ''
    registroPrecio.value = ''
})

botonLimpiar.addEventListener('click', ()=>{
    arregloProductos.length = 0
    arregloPrecios.length = 0

    listadoPrecios.innerHTML = ''
    listadoProductos.innerHTML = ''
    resultado.innerHTML = ''
})

botonTotal.addEventListener('click', ()=>{
    let suma = 0
    arregloPrecios.forEach(prec=>{
        suma += prec
    })
    resultado.innerHTML = `<p>Total: ${suma.toFixed(2)}</p>`

})

// estilos
const fondo = document.querySelector('body')
fondo.style.backgroundColor="#f5f5f5"
fondo.style.fontFamily="Lucida Sans"
const encabezado = document.querySelector('header')
encabezado.style.cssText= " background:rgb(238, 234, 234); padding: 0.2em; text-align: center; font-size: 1em; color: #3e7065"

const form = document.querySelector('form')
form.style.cssText="display:flex; flex-direction:column; align-items:center; gap:10px; margin:20px; font-size:0.8em; font-weight:500;"

botonRegistrar.style.cssText="border-radius:5px; border:none; background-color:rgb(48, 88, 80); color:white; padding:8px; width:300px"
botonRegistrar.classList.add('animacionBotonRegistrar')

const main = document.querySelector('main')
main.style.cssText="padding:10px 20px; display:flex; flex-direction:row; justify-content:center; gap:20px; margin-bottom:20px"

const cajaProductos = document.getElementById('lProductos')
cajaProductos.style.cssText = "background-color:#c0bc73; padding:20px; border-radius:8px; width:200px; text-align:center; font-size:0.8em; min-height: 200px"

const cajaPrecios = document.getElementById('lPrecios')
cajaPrecios.style.cssText = "background-color:#c0bc73; padding:20px; border-radius:8px; width:200px; text-align:center; font-size:0.8em; min-height: 200px"

listadoProductos.style.cssText = "background-color:white; padding:0 0 0 8px"
listadoPrecios.style.cssText = "background-color:white; padding:0 0 0 8px"

botonTotal.style.cssText="border-radius:5px; border:none;background-color:rgb(48, 88, 80); color:white; padding:8px;width:100px"
botonTotal.classList.add('animacionBotonTotal')

resultado.style.cssText="background-color:white; font-weight:500"

botonLimpiar.style.cssText = "background-color: #f0a15e; border:none; padding:10px; border-radius:8px; display:block; margin-left:auto; margin-right:30px"
botonLimpiar.classList.add('animacionBotonEliminar')



