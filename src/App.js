
import './App.css';
import { GroceryList } from './GroceryList';
import ImageOne from './gsOne.jpg';
import ImageTwo from './gsTwo.jpg';

function App() {
  return (
      <div className="App">
       <div className='container imageOne'>
       <img src={ImageOne} alt='groceryShopping' width='300px'/>
       </div> 
       <div className='container'>
       <GroceryList/>
       </div> 
       <div className='container'>
       <img src={ImageTwo} alt='shoppingCart' width='200px'/>
       </div> 
      
      
      
    
    </div>
  );
}

export default App;
