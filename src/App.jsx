import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount'
import DinamicComponent from './components/DinamicComponent'
import NavbarBoo from './components/NavbarBoo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<NavbarBoo> </NavbarBoo>  
     
<ItemListContainer />
<DinamicComponent 
 id="1"
 nombre="Cerastus knight Atrapos"
  descripcion="Añade un poderoso y singular Caballero a tus Questoris Households"
  precio="345"
  imagen="https://www.warhammer.com/app/resources/catalog/product/920x950/99560108146_MechanicumCerastusKnightAtrapos01.jpg?fm=webp&w=892&h=920"
  descuento={10}
/>
<DinamicComponent
  
  id="2"
  nombre="Knight Castellan"
  descripcion="Añade un devastador bípode a tu ejército de Caballeros Imperiales, Marines Espaciales, Astra Militarum, Adepta Sororitas, Adeptus Custodes, Adeptus Mechanicus o Agentes Imperiales."
  precio="256"
  imagen="https://www.warhammer.com/app/resources/catalog/product/920x950/99120108016_IKCastellan01.jpg?fm=webp&w=892&h=920"
/>
<DinamicComponent
  id="3"
  nombre="Knight Despoiler"
  descripcion="Añade un bípode corrupto a tu ejército de Caballeros del Caos, Marines Espaciales del Caos, Guardia de la Muerte, Hijos del Emperador, Mil Hijos o Devoradores de Mundos"
  precio="199"
  imagen="https://www.warhammer.com/app/resources/catalog/product/920x950/99120108105_IKKnightQuestorisLEADDespoiler.jpg?fm=webp&w=892&h=920"
/>
<DinamicComponent 
  id="4"
  nombre="Knight Destrier"
  descripcion="Añade una aterradora fuerza de destrucción a tus ejércitos de Caballeros del Caos, Marines Espaciales del Caos, Guardia de la Muerte, Hijos del Emperador, Mil Hijos o Devoradores de Mundos"
  precio="220"
  imagen="https://www.warhammer.com/app/resources/catalog/product/920x950/99120102191_CKKnightRuinator01.jpg?fm=webp&w=892&h=920"
/>


</>
  )
}

export default App
