import { useEffect, useState } from 'react'
import ProductComponent from '../molecules/ProductComponent'
import IProductModel from '../../models/IProductModel';

function ProductListComponent() {

    const[products, setProductList] = useState<IProductModel[]>([]);
    useEffect(()=>{
        fetch('http://34.10.50.108:9090/dev/v1/product/get-all-product')        
        .then(res => res.json())
        .then(response => setProductList(response.data))


    },[]);

      return (
        <div className="container-fluid pt-5">
            <div className="row px-xl-5 pb-3">
                
                {
                    products.map((product, index)=>{
                        return  <ProductComponent
                        id={product.id}
                        key={index}
                        image= {product.image}
                        name= {product.name}
                        price= {product.price+' ₺'}
                        discount = {(product.price*1.2)+' ₺'} />
                    })
                }
            </div>
        </div>
      )
}

export default ProductListComponent