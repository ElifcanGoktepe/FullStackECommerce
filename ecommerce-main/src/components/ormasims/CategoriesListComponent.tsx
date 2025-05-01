import {useState, useEffect} from 'react'
import CategoriesComponent from '../molecules/CategoriesComponent'
import ICategoryModel from '../../models/ICategoryModel';
function CategoriesListComponent() {
    /**
     * Burada categoies şeklinde yaptığım dizi bir sunucudan gelmeli
     * mesela RestAPI den gelebilir.
     */
   // img/cat-1.jpg

  const [categories, setCategories] = useState<ICategoryModel[]>([]);
    useEffect(()=>{
      fetch('http://34.10.50.108:9090/dev/v1/category/main-category')
      .then(res=> res.json())
      .then(response=> setCategories(response.data))
    },[]);

  return (
    <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
            {
                categories.map((categori,index)=>{
                    return  <CategoriesComponent 
                    key={index}
                    title={categori.name} 
                    productCount={12} 
                    imageUrl={'img/cat-'+(index%6+1)+'.jpg'} />
                })
            }
        </div>
    </div>
  )
}

export default CategoriesListComponent