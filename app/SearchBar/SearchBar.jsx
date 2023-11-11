import React, {useState, useEffect} from "react"
import "./SearchBar.css"


export default function SearchBar(){
const [searchVal,setSearchVal] = useState("");
    function handleInputChange(){
            setSearchVal(event.target.value)
        }
    

    const [filteredProducts, setFilteredProducts] = useState([]);
    function fetchAPIData() {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            //.then(result =>console.log(result))
            .then(products => {
                const currentFilter = products.map((product, index) => {
                    return <div class="window">
                        <img style={{width: "150px"}} src={product.image} alt={product.title} ></img>
                        <p>{product.title}</p>
                        <p>{product.price}</p>
                    </div>
                })
                setFilteredProducts(currentFilter)
            })
    }
    useEffect(fetchAPIData, [])

    return <div id="searchDiv">
        <div>
        <input type="text" id="wordFilter" value={searchVal} onChange={handleInputChange}></input>
        </div>
        <div id="display">
        {filteredProducts}
        </div>
    </div>


}