import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DeleteProduct from './DeleteProduct'

const ProductList = () => {
  const [data, setdata] = useState([])
  const [filter, setFilter] = useState(null)
  const [sort, setShort] = useState(null)
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")


  const fetchdata = () => {
    axios.get("http://localhost:8000/data", {
      params:
      {
        category: filter,
        _sort: "price",
        _order: sort,
        _limit: "4",
        _page: page,
        q: search
      }
    })
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchdata()
  }, [filter, sort, page, search, data])


  return (
    <div>
      <Link to='/productlist' className='link'>Product List</Link>
      <br />
      <div>
        {/*  Filter */}
        <select className='btn' onChange={(e) => setFilter(e.target.value)}>
          <option value="" hidden>Select</option>
          <option value="men's clothing">men's clothing</option>
          <option value="women's clothing">women's clothing</option>
          <option value="jewelery">jewelery</option>
          <option value="electronics">electronics</option>
        </select>

        {/*  Sort */}

        <Button className='btn' onClick={(e) => setShort("desc")}> High To Low  </Button>
        <Button className='btn' onClick={(e) => setShort("asc")}>Low To High</Button>

        {/*  Search */}

        <input className='btn' type="text" onChange={(e) => setSearch(e.target.value)} placeholder='Search Here' />

      </div>

      <div className='main'>
        {data.map((el) => (<div className='scDiv' key={el.id}>
          <Card style={{ width: '18rem' }}>
            <p>{el.id}</p>
            <Card.Img variant="top" src={el.image} className='img' />
            <Card.Body>
              <Card.Title>{el.title}</Card.Title>
              <h3>Price $ {el.price}</h3>
              <Card.Text>{el.description}</Card.Text>
              <h4>{el.category}</h4>
              <DeleteProduct />
              <Link className='linkto' to={`/put/${el.id}`}>
                <Button variant="primary">Update</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        ))}
      </div>

      {/* Pagination */}
      <button className='btn' disabled={page == 1} onClick={() => setPage(page - 1)}>Pre</button>
      <button className='btn' disabled>{page}</button>
      <button className='btn' disabled={page == 4} onClick={() => setPage(page + 1)}>Next</button>
    </div>
  )
}

export default ProductList
