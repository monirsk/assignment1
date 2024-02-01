import React from 'react'
import { useState } from 'react';
import '../styles.css';
import {BATA} from '../Data';
import { NavLink } from 'react-router-dom';

const Category = () => {

    const[data, setData] = useState(BATA);

    //Filter for category
    const filterResult = (catItem) => {
        const result = BATA.filter((curDate) => {
            return curDate.category === catItem;
        });
        setData(result);
    }

        //Filter for color
        const filterColor = (catItem) => {
            const result = BATA.filter((curDate) => {
                return curDate.color === catItem;
            });
            setData(result);
        }

  return (
    <>
      <div className="container">
          <div className="row">
              <div className="col">
                  <h3 className='title'>New Arraivals</h3>
              </div>
          </div>
          <div className="row">
              <div className="col col-list">
                <h5 className='sideTitle'>Category</h5>
                  <button className='btnn' onClick={() => setData(BATA)}>All</button>
                  <button className='btnn' onClick={() => filterResult('Men')}>Men</button>
                  <button className='btnn' onClick={() => filterResult('Women')}>Women</button>
                  <button className='btnn' onClick={() => filterResult('Kids')}>Kids</button>

                  <h5 className='sideTitle'>Color</h5>
                  <button className='btnn' onClick={() => setData(BATA)}>All</button>
                  <button className='btnn' onClick={() => filterColor('White')}>White</button>
                  <button className='btnn' onClick={() => filterColor('Black')}>Black</button>
                  <button className='btnn' onClick={() => filterColor('Green')}>Green</button>
                  <button className='btnn' onClick={() => filterColor('Pink')}>Pink</button>
                  <button className='btnn' onClick={() => filterColor('Brown')}>Brown</button>
                  <button className='btnn' onClick={() => filterColor('Blue')}>Blue</button>
                  <button className='btnn' onClick={() => filterColor('MultiColor')}>MultiColor</button>
              </div>



              <div className="col">
                    <div className="cards">
                        {data.map((values) => {
                            const{id, title, price, img} = values;
                            return (
                                <>
                                    <div className="card" key={id}>
                                        <div className="card-header">
                                            <img src={img} alt={title} />
                                        </div>
                                        <div className="card-body text-center">
                                            <h2 className='titleProduct'>{title}</h2>
                                            <span className="price">${price}</span>
                                            <NavLink to={`/products/new/${id}`} class="btn btn-dark">Buy Now</NavLink>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                        
                    </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default Category
