import React, { useEffect, useState } from 'react';
import "./SearchPage.css";
import SearchIcon from "@material-ui/icons/Search";
import SearchResult from "./SearchResult";
import search1 from "./assets/search1.jpg";
import search2 from "./assets/search2.jpg";
import search3 from "./assets/search3.jpg";
import search4 from "./assets/search4.png";
import search5 from "./assets/search5.jpg";
import search6 from "./assets/search6.jpg";
import search7 from "./assets/search7.jpg";
import search8 from "./assets/search8.jpg";
import search9 from "./assets/search9.jpg";
import search10 from "./assets/search10.jpg";
import search11 from "./assets/search11.jpg";
import search12 from "./assets/search12.jpg";
import search13 from "./assets/search13.jpg";
import search14 from "./assets/search14.jpeg";
import search15 from "./assets/search15.png";

import product1 from "./assets/product1.jpg";
import product2 from "./assets/product2.jpg";
import product3 from "./assets/product3.jpg";
import product4 from "./assets/product4.jpg";
import product5 from "./assets/product5.jpg";
import product6 from "./assets/product6.jpg";
import product7 from "./assets/product7.jpg";
import product8 from "./assets/product8.jpg";
import product9 from "./assets/product9.jpg";
import product10 from "./assets/product10.jpg";

import tool1 from "./assets/tool1.jpg";
import tool2 from "./assets/tool2.jpg";
import tool3 from "./assets/tool3.jpg";
import tool4 from "./assets/tool4.jpg";
import tool5 from "./assets/tool5.jpg";
import tool6 from "./assets/tool6.jpg";
import tool7 from "./assets/tool7.jpg";
import tool8 from "./assets/tool8.jpg";
import tool9 from "./assets/tool9.jpg";
import tool10 from "./assets/tool10.jpg";

const people = [

  {
    img:search2,
    owner:'Wardha Nursery',
    details: 'Only Need To Water Every One To Two Weeks, Effective At Reducing Air Pollutants',
    rating:'4.6',
    name: 'Monstera Deliciosa',
    age: '₹ 599',
  },
  {
    img: search3,
    owner:'Magic Plantation',
    details: 'Needs Indirect Sunlight And Regular Misting, Ideally Placed On A Side Table Or The Mantel',
    rating:'4.2',
    name: 'Dracaena Reflexa (Song of India Plant)',
    age: '₹ 649',
  },
  {
    img: search4,
    owner:'Green Home',
    details: 'Aesthetically Pleasing, Easy-To-Maintain Indoor Plant, Air Purifying',
    rating:'4.4',
    name: 'Grape Ivy',
    age: '₹ 249',
  },
  {
    img: search1,
    owner:'Garden Palace',
    details: 'Known For Surviving Droughts, Can Filter Out Chemicals',
    rating:'4.6',
    name: 'Snake Plant',
    age: '₹ 499',
  },
  {
    img: search5,
    owner:'Amaze Green',
    details: 'Flowers Nearly Year-Round, Needs Indirect Sunlight And Moderate But Regular Watering',
    rating:'4.1',
    name: 'Anthurium',
    age: '₹ 749',
  },
  {
    img: search6,
    owner:'Natural Zone',
    details: 'Need moist soil and moderate sunlight for germination',
    rating:'4.4',
    name: 'Mini Lotus Seeds',
    age: '₹ 159',
  },
  {
    img: search7,
    owner:'Joy Garden',
    details: 'Moderately moist soil and low sunlight ',
    rating:'4.8',
    name: 'Tomato Seeds',
    age: '₹ 59',
  },
  {
    img: search8,
    owner:'Green Home',
    details: 'High moisture content required and less sunlight',
    rating:'4.4',
    name: 'Green Capsicum Seeds',
    age: '₹ 89',
  },
  {
    img: search9,
    owner:'Happy Green',
    details: 'High moisture content and less sunlight is suitable.',
    rating:'4.2',
    name: 'Capsicum Seeds',
    age: '₹ 69',
  },
  {
    img: search10,
    owner:'Garden Club',
    details: 'Moist soil and moderate sunlight are suitable.',
    rating:'4.5',
    name: 'Pumpkin Seeds',
    age: '₹ 99',
  },
  {
    img: search11,
    owner:'Green Home',
    details: 'High moisture content and moderate trapping capacity',
    rating:'4.1',
    name: 'Succulent and Cactus Potting Soil',
    age: 249,
  },
  {
    img: search12,
    owner:'Green Box',
    details: 'Moderate moisture content and high air trapping capacity.',
    rating:'4.4',
    name: 'General Purpose Gardening/Potting Soil',
    age: '₹ 349',
  },
  {
    img: search13,
    owner:'Garden Home',
    details: 'Organic manure with high moisture content.',
    rating:'4.4',
    name: 'Cow Dung Manure',
    age: '₹ 169',
  },
  {
    img: search14,
    owner:'Natural Zone',
    details: 'Best for small gardens.',
    rating:'4.7',
    name: 'Gardening Gloves',
    age: '₹ 199',
  },
  {
    img: search15,
    owner:'Garden Palace',
    details: 'Best for small shrubs and tender leaves.',
    rating:'4.4',
    name: 'Hedge Shear',
    age: '₹ 649',
  },
  






  {
    img:product1,
    owner:'Wardha Nursery',
    details: 'For less sunny environment. Best indoors.',
    rating:'4.6',
    name: 'Crotan ',
    age: '₹ 149',
  },
  {
    img: product2,
    owner:'Magic Plantation',
    details: 'For Outdoors. Moderate Sunlight.',
    rating:'4.2',
    name: 'Cycas Palm ',
    age: '₹ 399',
  },
  {
    img: product3,
    owner:'Green Home',
    details: 'for Inner Peace. Best suited for Indoors.',
    rating:'4.4',
    name: 'Ficus Compacta',
    age: '₹ 249',
  },
  {
    img: product4,
    owner:'Garden Palace',
    details: 'for Fengshui Geomancy. Best Suited Indoors.',
    rating:'4.6',
    name: 'Bamboo ',
    age: '₹ 149',
  },
  {
    img: product5,
    owner:'Amaze Green',
    details: 'for Meditation. Moderate Sunlight Requirement.',
    rating:'4.1',
    name: 'Peace Lily ',
    age: '₹ 349',
  },
  {
    img: product6,
    owner:'Natural Zone',
    details: 'for Decoration. Suitable for Outdoors.',
    rating:'4.4',
    name: 'Banyan Bonsai ',
    age: '₹ 499',
  },
  {
    img: product7,
    owner:'Joy Garden',
    details: 'for medicinal benifits. Moderate Sunlight Requirement. Ayurvedic Benefits. ',
    rating:'4.8',
    name: 'Tulsi',
    age: '₹ 99',
  },
  {
    img: product8,
    owner:'Green Home',
    details: 'for Decoration. Outdoors.',
    rating:'4.4',
    name: 'Money Plant ',
    age: '₹ 149',
  },
  {
    img: product9,
    owner:'Happy Green',
    details: 'for medicinal benefits. Moderate Sunlight. Less Water.',
    rating:'4.2',
    name: 'Aloevera',
    age: '₹ 399',
  },
  {
    img: product10,
    owner:'Garden Club',
    details: 'for Ayurvedic purposes. Best suited outdoors.',
    rating:'4.5',
    name: 'Neem',
    age: '₹ 199',
  },






  {
    img: tool1,
    owner:'Green Home',
    details: 'for delicate plants. Suitable for moist soil.',
    rating:'4.1',
    name: 'Trowel',
    age: 149,
  },
  {
    img: tool2,
    owner:'Green Box',
    details: 'for garden. Suitable for any soil type',
    rating:'4.4',
    name: 'Fork Hoe',
    age: '₹ 399',
  },
  {
    img: tool3,
    owner:'Garden Home',
    details: 'for small gardens. For moist soil type.',
    rating:'4.4',
    name: 'Dibber',
    age: '₹ 149',
  },
  {
    img: tool4,
    owner:'Natural Zone',
    details: 'for bonsai and delicate plants',
    rating:'4.7',
    name: 'Garden Knife ',
    age: '₹ 99',
  },
  {
    img: tool5,
    owner:'Garden Palace',
    details: 'for gardens. Best for shrubs.',
    rating:'4.4',
    name: 'Digging Spade ',
    age: '₹ 249',
  },
  

  {
    img:tool6,
    owner:'Wardha Nursery',
    details: 'for plant trimming. Works well for tender branches.',
    rating:'4.6',
    name: 'Secateurs  ',
    age: '₹ 199',
  },
  {
    img: tool7,
    owner:'Magic Plantation',
    details: 'for plantation. Moist soil type.',
    rating:'4.2',
    name: 'Hoe',
    age: '₹ 399',
  },
  {
    img: tool8,
    owner:'Green Home',
    details: 'for gardening. Suitable for lawns.',
    rating:'4.4',
    name: 'Golden Gark',
    age: '₹ 649',
  },
  {
    img: tool9,
    owner:'Garden Palace',
    details: 'for saplings and shrubs. Moist soil type.',
    rating:'4.6',
    name: 'Khurpi  ',
    age: '₹ 99',
  },
  {
    img: tool10,
    owner:'Amaze Green',
    details: 'for watering plants. Suitable for gardens.',
    rating:'4.1',
    name: 'Water Can',
    age: '₹ 199',
  },



  
];

function SearchPage() {

    

    const [searchItem, setSearchItem] = useState('');
    const [searchText, setSearchText] = useState([]);
    const handleChange = e => {
      setSearchItem(e.target.value);
    };

    useEffect(() => {
      const results = people.filter (
        person=>person.name.toLowerCase().includes(searchItem.toLowerCase())
        );
        setSearchText(results);
    
    }, [searchItem]);


    return (
        <div className="searchPage">
            <div className="searchPage__info">
            <div className="searchPage__optionSearch">
            <input placeholder="JoJoba Search..." value={searchItem}
        onChange={handleChange} type="text" />
            <SearchIcon className="searchPage__searchIcon" />
           
      
          </div>
            </div>
 
            {searchText.map(item => (
          <SearchResult
            title={item.name}
          price={item.age}
          img={item.img}
          details={item.details}
          owner={item.owner}
          rating={item.rating}/>
        ))}

        </div>
    )
}

export default SearchPage
