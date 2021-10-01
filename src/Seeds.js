import React from "react";
import Product from "./Product";
import SoilBanner from "./banner_seeds.png";
import "./Seeds.css";
import product1 from "./assets/seed1.jpg";
import product2 from "./assets/seed2.jpg";
import product3 from "./assets/seed3.jpg";
import product4 from "./assets/seed4.jpg";
import product5 from "./assets/seed5.jpg";
import product6 from "./assets/seed6.jpg";
import product7 from "./assets/seed7.jpg";
import product8 from "./assets/seed8.jpg";
import product9 from "./assets/seed9.jpg";
import product10 from "./assets/seed10.jpg";

function Seeds() {
  return (
    <div className="seeds">

    <img className="seeds__image"
         src={SoilBanner}
        alt=""
        />
      
      
      <div className="seeds__row">

        <Product
                  id="31"
                  title="Lettuce"
                  price={69}
                  rating={5}
                  image={product1}
                />

        <Product
                  id="32"
                  title="Oregano"
                  price={99}
                  rating={4}
                  image={product2}
                />
                <Product
                  id="33"
                  title="Peas"
                  price={49}
                  rating={5}
                  image={product3}
                />
<Product
                  id="34"
                  title="NatureLoc Flax"
                  price={149}
                  rating={4}
                  image={product4}
                />
       
      </div>

      <div className="seeds__row">
      <Product
                  id="35"
                  title="Lemon Grass"
                  price={199}
                  rating={4}
                  image={product5}
                />

<Product
                  id="36"
                  title="Lavender"
                  price={129}
                  rating={5}
                  image={product6}
                />

<Product
                  id="37"
                  title="Pumpkin"
                  price={99}
                  rating={5}
                  image={product7}
                />


      </div>

      <div className="seeds__row">
      <Product
                  id="38"
                  title="Sunflower"
                  price={149}
                  rating={4}
                  image={product8}
                />
                
<Product
                  id="39"
                  title="Wild Rocket"
                  price={199}
                  rating={4}
                  image={product9}
                />


<Product
                  id="40"
                  title="Rosemary Seeds"
                  price={249}
                  rating={4}
                  image={product10}
                />



      </div>
    </div>
  );
}

export default Seeds;
