import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [data, setdata] = useState([])
  const [filter, setFilter] = useState(null)
  const [sort, setShort] = useState(null)
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")

  const fetchdata = () => {
    axios.get(" http://localhost:8080/data", {
      params:
      {
        category: filter,
        _sort: "price",
        _order: sort,
        _limit: "4",
        _page: page,
        q: search
      }
    }
    )
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err))

  }
  useEffect (()=>{
    fetchdata()
  },[filter, sort, page, search,data])

  const handledelete = (id) => {
       
    axios.delete(`http://localhost:8080/data/${id}`)
        .then(res =>
            {
                console.log('Data deleted:', res.data)
                alert("Data is Deleted")
            })
        .catch(error => console.error('Error deleting data:', error));

}
  return (
    <div >
        <Link className='link' to="/post" >Post Data</Link>
        <br />
            <div>
                {/* filter */}
                <select className='btn' onChange={(e) => setFilter(e.target.value)}>
                    <option value="" hidden>Select</option>
                    <option value="men's clothing">men's clothing</option>
                    <option value="women's clothing">women's clothing</option>
                    <option value="jewelery">jewelery</option>
                    <option value="electronics">electronics</option>
                </select>
                {/* Sort */}
                <button className='btn' onClick={(e) => setShort("desc")}>Hight To Low</button>
                <button className='btn' onClick={(e) => setShort("asc")} >Low To Hight</button>
                {/* Pagination */}
                <button className='btn' disabled={page == 1} onClick={() => setPage(page - 1)}>Pre</button>
                <button className='btn' disabled>{page}</button>
                <button className='btn' disabled={page == 4} onClick={() => setPage(page + 1)}>Next</button>
                {/* Search */}
                <input className='btn' type="text" onChange={(e) => setSearch(e.target.value)} placeholder='Search Here' />
            </div>
            <div className='maindiv'>
                {data.map((el) => (<div className='scDiv' key={el.id}>
                <p>{el.id}</p>
                    <img src={el.image} alt="" className='img' />
                    <h3>{el.title}</h3>
                    <h3>Price $ {el.price}</h3>
                    <p className='para'>{el.description}</p>
                    <h4>{el.category}</h4>
                    <button onClick={() => handledelete(el.id)}>Delete</button>
                    <Link className='linkto' to={`/put/${el.id}`}>
                    <button>Update</button>
                    </Link>
                    
                </div>))}
            </div>
        </div> 
  )
}

export default Home

