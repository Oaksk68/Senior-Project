import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { city } from '../../data/city'
import FilterProduct from './FilterProduct'

const Filter = ({url}) => {

    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [query, setQuery] = useState("");
      const [cityData, setCityData] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`${url}${cityData !== "" ? `?city=${cityData}` : ""}`);
            console.log("url", url);
            console.log(result.data);
            setProducts(result.data);
            const res = await axios.get("/api/category");
            console.log(res.data);
            setCategory(res.data);
        }

        fetchData();

    }, [cityData,url]);

    const filterResult = (catItem) => {
        const catResult = products.filter((curCat) => {
            return curCat.category === catItem;
        });
        setProducts(catResult);
    }

    //search
    const keys = ["name", "seller"];

    const search = () => {
        return products.filter((item) => keys.some((key) => item[key].toLowerCase().includes(query)));
    };
    const handleReset = async (e) => {
        e.preventDefault();
        const result = await axios.get(`${url}`);
        console.log(result.data);
        setProducts(result.data);
    }

  return (
    <div className='filter-row'>
          <div className="filter-col">
                <div className="filter-group">
                    <button onClick={handleReset}>All</button>
                    {category.map((cat) => (
                        <button key={cat._id} onClick={() => filterResult(cat.name) }>{cat.name}</button>
                    ))}
                </div>
                <div className="filter-group">
                <select name="" id="" onChange={(e)=>{ setCityData(e.target.value)  }}>
                    <option value=""> Select City </option>
                 {
                    city?.map((el,index) => {
                        return <option key={index} value={el}>{el}</option>
                    })
                 }
                  </select>
                    <input type="search" placeholder='Search...' onChange={(e) => setQuery(e.target.value)} />
                </div>
            </div>
        {products.length === 0 ? (<h3 className='info'>There are currently no products!</h3>) : (

            <>
            
          
            <div className="filter-col">
                <FilterProduct products={search(FilterProduct)} />
            </div>
            
            </>

        )}
    </div>
  )
}

export default Filter
