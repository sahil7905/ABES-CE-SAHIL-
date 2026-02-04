import React from 'react'
import Main from './component/Main'

function () {
  return (
    const[books, setBooks] = useState([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>{
      setBooks(data);

    })
  )
}

export default 