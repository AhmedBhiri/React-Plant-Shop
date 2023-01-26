import Banner from "./banner";
//import QuestionForm from "./QuestionForm";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import logo from '../assets/logo.png'
import Recommendation from './recommendation';
import '../styles/layout.css';
import Footer from "./Footer";
function App() {

  return (
    <div className="App">

      <header className="App-header">
        <Banner>
          <head className="lmjhead">
            <img src={logo} alt='La maison jungle' className='lmjlogo' />
            <h1 className='lmjtitle' >La maison jungle</h1>

          </head>
          <Recommendation />
        </Banner>

        

      </header>
      <div className='lmj-layout-inner'>
				<Cart />
				<ShoppingList />
			</div>
      <Footer/>
    </div>
  );
}

export default App;
