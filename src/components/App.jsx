import Banner from "./banner";
//import QuestionForm from "./QuestionForm";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import logo from '../assets/logo.png'
import Recommendation from './recommendation';
import '../styles/layout.css';
import Footer from "./Footer";
import { useState, useEffect } from 'react'

function App() {
  
  const [isOpen, setIsOpen] = useState(false)
  
  const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])
  
  return (
    <div className="App">

      
        <Banner>
          <head className="lmjhead">
            <img src={logo} alt='La maison jungle' className='lmjlogo' />
            <h1 className='lmjtitle' >La maison jungle</h1>

          </head>
          <Recommendation />
        </Banner>

        

      
      <div className='lmj-layout-inner'>
				<Cart cart={cart} isOpen={isOpen} setIsOpen={setIsOpen} updateCart={updateCart}/>
				<ShoppingList cart={cart} updateCart={updateCart} setIsOpen={setIsOpen} />
			</div>
      <Footer/>
    </div>
  );
}

export default App;
