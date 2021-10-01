import React from "react";
import Product from "./Product";
import HomeBanner from "./banner_tools.png";
import "./Tools.css";
import product1 from "./assets/tool1.jpg";
import product2 from "./assets/tool2.jpg";
import product3 from "./assets/tool3.jpg";
import product4 from "./assets/tool4.jpg";
import product5 from "./assets/tool5.jpg";
import product6 from "./assets/tool6.jpg";
import product7 from "./assets/tool7.jpg";
import product8 from "./assets/tool8.jpg";
import product9 from "./assets/tool9.jpg";
import product10 from "./assets/tool10.jpg";

function Tools() {
  return (
    <div className="tool">

    <img className="tool__image"
         src={HomeBanner}
        alt=""
        />
      
      <div className="tool__row">

        <Product
                  id="11"
                  title="Trowel for delicate plants. Suitable for moist soil."
                  price={149}
                  rating={5}
                  image={product1}
                />

        <Product
                  id="12"
                  title="Fork Hoe for garden. Suitable for any soil type"
                  price={399}
                  rating={4}
                  image={product2}
                />
                <Product
                  id="13"
                  title="Dibber for small gardens. For moist soil type."
                  price={149}
                  rating={5}
                  image={product3}
                />
<Product
                  id="14"
                  title="Garden Knife for bonsai and delicate plants."
                  price={99}
                  rating={4}
                  image={product4}
                />
       
      </div>

      <div className="tool__row">
      <Product
                  id="15"
                  title="Digging Spade for gardens. Best for shrubs."
                  price={249}
                  rating={4}
                  image={product5}
                />

<Product
                  id="16"
                  title="Secateurs for plant trimming. Works well for tender branches."
                  price={199}
                  rating={5}
                  image={product6}
                />

<Product
                  id="17"
                  title="Hoe for plantation. Moist soil type."
                  price={399}
                  rating={5}
                  image={product7}
                />


      </div>

      <div className="tool__row">
      <Product
                  id="18"
                  title="Golden Gark for gardening. Suitable for lawns."
                  price={649}
                  rating={4}
                  image={product8}
                />

<Product
                  id="19"
                  title="Khurpi for saplings and shrubs. Moist soil type."
                  price={99}
                  rating={4}
                  image={product9}
                />

<Product
                  id="20"
                  title="Water Can for watering plants. Suitable for gardens."
                  price={199}
                  rating={4}
                  image={product10}
                />



      </div>
    </div>
  );
}

export default Tools;
