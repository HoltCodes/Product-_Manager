import React, { useState } from 'react';
import axios from 'axios';


const createProduct = (props)=>{

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    


    return (
      <div>
          <header>Product Manager</header>
          <form>
            <div className="form-fields">
              <label>Title</label>
              <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                name="title"
                type="text"
              />
            </div>

            <br/>

            <div className="form-fields">
              <label>Price</label>
              <input
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                name="price"
                type="number"
              />
            </div>

            <br/>

            <div className="form-fields">
              <label>Description</label>
              <input
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                name="description"
                type="text"
              />
            </div>

            <input type="submit" className="submit-input" value="Create" />
          </form>
      </div>
    );
}

export default createProduct;