import React from 'react';
import {Products} from './components/Products'
import {products} from './components/data/products'

function App() {
  return (
    <div className='container mx-auto max-w-2xl pt-5'>

      {
        products.map((product) => <Products product={product} key={product.id}/>)
      }

      {/* <Products product={products[0]}/>  */}
      {/* <Products product={products[1]}/>  */}
    </div>
  )
}

export default App;
