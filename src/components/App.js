import Banner from "./banner";
import QuestionForm from "./QuestionForm";
//import Cart from "./cart";
import ShoppingList from "./ShoppingList";
import logo from '../assets/logo.png'
import Recommendation from './recommendation';

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

        { /*<Cart/>*/}

      </header>
      <ShoppingList />
      <QuestionForm />

    </div>
  );
}

export default App;
