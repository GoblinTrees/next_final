"use client"
import { useEffect, useState } from "react"
import CountButton from "./CountButton/CountButton"
import SearchBar from "./SearchBar/SearchBar"

/*
const App = () => {
  const [productsState, setProductState] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setProductState([
        "toothbrush",
        "toothpaste",
        "floss",
        "comb",
      ])
    }, 2000)
  }, [])
}

const products = [
  "toothbrush",
  "toothpaste",
]
*/
export default function Page() {
 return <div>
    <CountButton name={"Num1"} mult={1} />
    <CountButton name={"Num2"} mult={2} />
    <p><a href="https://github.com/GoblinTrees/demo_next">Github repo: demo_next</a></p>
    <SearchBar />
  </div> 
}