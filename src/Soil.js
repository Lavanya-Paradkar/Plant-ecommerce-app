import React from "react";
import Product from "./Product";
import SoilBanner from "./banner_soil.png";
import "./Soil.css";
import product1 from "./assets/nut1.jpg";
import product2 from "./assets/nut2.jpg";
import product3 from "./assets/nut3.jpg";
import product4 from "./assets/nut4.jpg";
import product5 from "./assets/nut5.jpg";
import product6 from "./assets/nut6.jpg";
import product7 from "./assets/nut7.jpg";
import product8 from "./assets/nut8.jpg";
import product9 from "./assets/nut9.jpg";
import product10 from "./assets/nut10.jpg";

function Soil() {
  return (
    <div className="soil">

    <img className="soil__image"
         src={SoilBanner}
        alt=""
        />
      
      <div className="soil__row">

        <Product
                  id="21"
                  title="Vermicompost for saplings and vegetables. High moisture absorption capability."
                  price={249}
                  rating={5}
                  image={product1}
                />

        <Product
                  id="22"
                  title="Mushroom Compost for fruits and vegetables. High air trapping capacity."
                  price={399}
                  rating={4}
                  image={product2}
                />
                <Product
                  id="23"
                  title="Neem Powder for removing pests and medicinal benifits. Suitable for crops."
                  price={199}
                  rating={5}
                  image={product3}
                />
<Product
                  id="24"
                  title="Bonsai Soil for saplings and bonsai plants. High moisture holding capabilty."
                  price={499}
                  rating={4}
                  image={product4}
                />
       
      </div>

      <div className="soil__row">
      <Product
                  id="25"
                  title="Pest Controller for removing pests from garden. Suitable for lawns."
                  price={249}
                  rating={4}
                  image={product5}
                />

<Product
                  id="26"
                  title="Potting Soil with high moisture absorption strength. Suitable for dry climate."
                  price={299}
                  rating={5}
                  image={product6}
                />

<Product
                  id="27"
                  title="Nitrogen for legumes and crops. Suitable for dry as well as moist soil."
                  price={699}
                  rating={5}
                  image={product7}
                />


      </div>

      <div className="soil__row">
      <Product
                  id="28"
                  title="Tomato Fertilizer for organic gardening. Enriches soil fertility."
                  price={199}
                  rating={4}
                  image={product8}
                />

<Product
                  id="19"
                  title="Red Soil for legumes and commercial crops. High air trapping capacity."
                  price={399}
                  rating={4}
                  image={product9}
                />

<Product
                  id="20"
                  title="Black potting soil with cocopeat vermicompost. Best suitable for saplings and bonsai."
                  price={449}
                  rating={4}
                  image={product10}
                />



      </div>
    </div>
  );
}

export default Soil;
