import React, {useState, useEffect} from "react"
import "./SearchBar.css"


export default function SearchBar(){
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchVal,setSearchVal] = useState("");
    useEffect(fetchAPIData, [searchVal])
    function fetchAPIData() {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(products => {
                const filteredProducts = products.filter((el)=>{return el.title.toLowerCase().includes(searchVal.toLowerCase());})
                const currentFilter = filteredProducts.map((product, index) => {
                    return <div class="window" key={index}>
                        <img style={{width: "120px"}} src={product.image} alt={product.title} ></img>
                        <p>{product.title}</p>
                        <p>${product.price}</p>
                    </div>
                })
                setFilteredProducts(currentFilter)
            })
    }
    function handleInputChange(event){
            setSearchVal(event.target.value);
        }
    


    return <div id="searchDiv">
        <div>
        <input type="text" id="wordFilter" value={searchVal} onChange={handleInputChange}></input>
        </div>
        <div id="display" >
        {filteredProducts}
        </div>
    </div>


}