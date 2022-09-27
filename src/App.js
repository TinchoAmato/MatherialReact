import './App.css';
import React, { Component } from 'react'
var preTexto = ""
var tipo = ""
var color = 0
var colores = ["Violeta", "Azul", "Celeste", "Verde", "Amarillo", "Naranja", "Rojo", "Marron"]
var data
const datos = async() => {
  try{
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '03df318e41mshcf036eb3de7e761p10fc2bjsn8395d423b2bd',
        'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
      }
    };
    if (tipo === ""){
      data = {
        number: ":/",
        text: "First Select a Button"
      }
    } else {
      const prueba = await fetch('https://numbersapi.p.rapidapi.com/random/' + tipo + '?fragment=true&json=true', options)
      data = await prueba.json()
    }
    PonerEnPantalla(data)
  } catch (error) {
    console.log(error)
  }
}


class Header extends Component{
  render() {
    return(
      <div className='Header'>
        <h3 className='Inicio'>Home</h3>
        <h1 className='Titulo Violeta'> Math<span className='Span'>erial</span> </h1>
        <h3 className='Info' onClick={ClickBtn}>Info</h3>
      </div>
    )
  }
} 

class Main extends Component{
  render(){
    return(
      <div className='Tarjeta'>
        <h1 className='Numero'></h1>
        <p className='Dato'></p>
      </div>
    )
  }
}

class ButtonC extends Component{
 render(){
    return(
      <div className='BtnChange Centrado'>
        <button onClick={datos} className='Change'><p>Give Me Data</p></button>
      </div>
    )
  }
}

class Button extends Component{
  render(){
    return(
      <div className='Centrado'>
        <button onClick={Math} className='Math Change'><p>Math</p></button>
        <button onClick={Trivia} className='Trivia Change'><p>Trivia</p></button>
        <button onClick={Year} className='Year Change'><p>Year</p></button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <ButtonC />
      <Button />
    </div>
  );
}

const Year = () => {
  if (tipo === ""){
    document.querySelector('.Year').classList.add('Activo')
    preTexto = "In"
    tipo = "year"
    datos()
  } else if (tipo !== "year"){
    document.querySelector('.Activo').classList.remove('Activo')
    document.querySelector('.Year').classList.add('Activo')
    preTexto = "In"
    tipo = "year"
    datos()
  }
}

const Math = () => {
  if (tipo === ""){
    document.querySelector('.Math').classList.add('Activo')
    tipo = "math"
    preTexto = ""
    datos()
  } else if (tipo !== "math"){
    document.querySelector('.Activo').classList.remove('Activo')
    document.querySelector('.Math').classList.add('Activo')
    tipo = "math"
    preTexto = ""
    datos()
  }
}

const Trivia = () => {
  if (tipo === ""){
    document.querySelector('.Trivia').classList.add('Activo')
    tipo = "trivia"
    preTexto = ""
    datos()
  } else if (tipo !== "trivia"){
    document.querySelector('.Activo').classList.remove('Activo')
    document.querySelector('.Trivia').classList.add('Activo')
    tipo = "trivia"
    preTexto = ""
    datos()
  }
}

const PonerEnPantalla = (datos) => {
  document.querySelector('.Numero').innerHTML = preTexto + " " + datos.number
  document.querySelector('.Dato').innerHTML = datos.text
  CambioDeColor()
}

const CambioDeColor = () => {
  const Cambio1 = document.querySelector('.' + colores[color] + '')
  Cambio1.classList.remove(colores[color])
  const Cambio2 = document.querySelector('.' + colores[color] + '-bg')
  Cambio2.classList.remove(colores[color] + "-bg")
  if (color === (colores.length - 1)){
    color = 0
  } else {
    color = color + 1
  }
  Cambio1.classList.add(colores[color])
  Cambio2.classList.add(colores[color] + "-bg")
}

const ClickBtn = () => {
  window.open('https://github.com/TinchoAmato')
}

export default App;
