import React from "react";

const Product = ({ item, onClick }) => {
  const { title, description, thumbnail } = item;

  return (
    <div>
      <div>
        <a href="#">
          <img
            class="rounded-t-lg"
            src={thumbnail}
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5>
              {title}
            </h5>
          </a>
          <p>
            {description}
          </p>
            <button className="text-white bg-blue-200 hover:bg-blue-100 focus:ring-4 focus:ring-blue-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-200 dark:hover:bg-blue-300 focus:outline-none dark:focus:ring-blue-200" onClick={() => onClick(item)}>Add to cart</button>
          
        </div>
        
      </div>

      {/* <h1>{title}</h1>
      <p>{description}</p>
      <img src={thumbnail} alt="" /> */}
      <br />
      <br />
      <br />
    </div> 
  );
};

export default Product;
