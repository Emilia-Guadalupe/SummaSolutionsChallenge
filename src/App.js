import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Components
import Main from './Components/Main/Main';
import ProductGallery from './Components/ProductGallery/ProductGallery';
import ProductSection from './Components/ProductDetails/ProductSection';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path="/detalles/:id">
          <ProductSection />
        </Route>
        <Route exact path="/">
          <Main />
          <ProductGallery />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
