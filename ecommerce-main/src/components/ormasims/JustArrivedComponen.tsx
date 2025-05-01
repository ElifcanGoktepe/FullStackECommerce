import { useEffect, useState } from 'react'
import ProductComponent from '../molecules/ProductComponent';
import IProductModel from '../../models/IProductModel';

function JustArrivedComponen() {
    
    const [productList, setProductList] = useState<IProductModel[]>([]);
    useEffect(()=>{
        fetch('http://34.10.50.108:9090/dev/v1/product/get-all-product')
        .then(res=>res.json())
        .then(response=> setProductList(response.data));
    },[])
    
  return (
    <div className="container-fluid pt-5">
        <div className="text-center mb-4">
            <h2 className="section-title px-5"><span className="px-2">Just Arrived</span></h2>
        </div>
        <div className="row px-xl-5 pb-3">
            {
                productList.map((product,index)=>{
                    console.log(product);
                    return <ProductComponent 
                            id={product.id}
                            key={index}
                            name={product.name}
                            image={product.image}
                            price={product.price +' ₺'}
                            discount={product.price*1.18+' ₺'}
                        />
                })
            }
        </div>
    </div>
  )
}

export default JustArrivedComponen