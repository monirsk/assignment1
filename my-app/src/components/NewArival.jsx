import React from 'react'
import { useState } from 'react';
import '../styles.css';
import Categories from './Categories';

const Category = () => {

    const[data, setData] = useState(Categories);

    //Filter for category
    const filterResult = (catItem) => {
        const result = Categories.filter((curDate) => {
            return curDate.category === catItem;
        });
        setData(result);
    }

        //Filter for color
        const filterColor = (catItem) => {
            const result = Categories.filter((curDate) => {
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
    



              <div className="col">
                    <div className="cards">
                        {data.map((values) => {
                            const{id, title, price, image} = values;
                            return (
                                <>
                                    <div className="card" key={id}>
                                        <div className="card-header">
                                            <img src={image} alt={title} />
                                        </div>
                                        <div className="card-body">
                                            <h2 className='titleProduct'>{title}</h2>
                                            <span className="price">${price}</span>
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
