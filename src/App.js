import './App.css'
import SearchBar from './components/SearchBar'
import ProductTable from './components/ProductTable'
import PRODUCTS from './components/Products';


function FilterableProductTable({ products }) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}



export default function App() {
  return <FilterableProductTable products={PRODUCTS} />
}
