import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
export default function Home() {
  const [search,setSearch]=useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5001/api/foodData",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })
    response = await response.json();

    setFoodItem(response[0]);
    setFoodCat(response[1]);
    // console.log(response[0],response[1])
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div>
  <div><Navbar /></div>
  <div>
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-caption" style={{ zIndex: "10" }}>
        <div className="d-flex justify-content-center" >
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </div>
      </div>
      <div className="carousel-inner" id="carousel">
        <div className="carousel-item active">
          <img
            src="https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="d-block w-100"
            style={{ filter: "brightness(30%)", height: "300px", objectFit: "cover" }}
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://source.unsplash.com/random/900×700/?momos"
            className="d-block w-100"
            style={{ filter: "brightness(30%)", height: "300px", objectFit: "cover" }}
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://source.unsplash.com/random/900×700/?paneer"
            className="d-block w-100"
            style={{ filter: "brightness(30%)", height: "300px", objectFit: "cover" }}
            alt="..."
          />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <div className='container m-3'>
    {
      foodCat !== []
        ? foodCat.map((data) => {
          return (
            <div className='row mb-3 gap-5'>
              <div key={data._id} className="fs-3 m-3">{data.CategoryName}</div>
              <hr />
              {foodItem !== [] ? 
                foodItem.filter((item) =>
                  (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
                .map(filterItems => {
                  return (
                    <div key={filterItems.id} className='col-12 col-md-5 col-lg-3'>
                      <Card foodItem={filterItems} options={filterItems.options[0]} />
                    </div>
                  )
                })
                : <div> No such data found</div>}
            </div>
          )
        })
        : ""
    }
  </div>
  <div> <Footer /> </div>
</div>

  )

}