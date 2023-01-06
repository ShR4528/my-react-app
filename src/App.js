import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import ProductTable from './components/ProductTable'
import PRODUCTS from './components/Products';


function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('')
  const [inStockOnly, setInStockOnly] = useState(false)
  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly} />
    </div>
  );
}



export default function App() {
  return <FilterableProductTable products={PRODUCTS} />
}
