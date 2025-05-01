import { useEffect, useState } from 'react'
import ProductComponent from '../molecules/ProductComponent'
import IProductModel from '../../models/IProductModel';

function TrendProductComponent() {
    /**
     *      image: 'img/product-1.jpg',
            name: 'Colorful Stylish Shirt',
            price: '230.99₺',
            discount: '599.99₺'
     */
  const [productList, setProductList] = useState<IProductModel[]>([]);
  useEffect(()=>{
    fetch('http://34.10.50.108:9090/dev/v1/product/get-all-product')
    .then(res=> res.json())
    .then(response=> setProductList(response.data));
  },[]);
  return (
    <div className="container-fluid pt-5">
        <div className="text-center mb-4">
            <h2 className="section-title px-5"><span className="px-2">Trandy Products</span></h2>
        </div>
        <div className="row px-xl-5 pb-3">
            {
                productList.map((product, index)=>{
                    return  <ProductComponent 
                                    id={product.id}
                                    key={index}
                                    image={product.image}
                                    name={product.name}
                                    price={product.price+' ₺'}
                                    discount={(product.price*0.8)+' ₺'} />
                })
            }
           
           
        </div>
    </div>
  )
}

export default TrendProductComponent