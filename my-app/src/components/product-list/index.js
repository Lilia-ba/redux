import { useSelector } from "react-redux";
import productReducer from "../../store/reducers/product-reducer";

const ProductList = () => {

    const productList = useSelector(state => state.productReducer.productsList)
    return <div className='P-product-list'>
               {productList.length ? productList.map((item, index) => {

               return <p>{item}</p>
              }) : <p>Product list was empty</p>}
         </div>
}

export default ProductList