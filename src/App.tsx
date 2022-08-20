import {Route, Routes} from 'react-router-dom'
import {ProductsPage} from './pages/ProductsPage'
import {AboutPage} from './pages/AboutPage'
import {Navigation} from './components/Navigation'
// import {products} from './data/products';

function App() {
	return (
      <>
         <Navigation />
         <Routes>
            <Route path="/" element={ <ProductsPage /> } />
            <Route path="/about" element={ <AboutPage /> } />
         </Routes>
      </>
   )
}

export default App;
