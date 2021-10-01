import React, { useState } from 'react';
import "./Seller.css";
import firebase from "firebase";
import {storage, db} from "./firebase";


function Seller() {

    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [caption, setCaption] = useState('');


    const handleChange = (e) => {
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
    };



    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");
    const [category, setCategory] = useState("");
    const [items, setItems] = useState("");
    const [cost, setCost] = useState("");
    const [description, setDescription] = useState("");

    const[loader, setLoader] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();
        setLoader(true);

        const uploadTask = storage.ref(`images/${image.name}`).put(image);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            (error) => {
                console.log(error);
                alert(error.message);
            },
            () => {
                storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then(url => {

                    db.collection('seller_details').add({
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        userame:name,
                        email:email,
                        phone:phone,
                        location:location,
                        category:category,
                        items:parseInt(items, 10),
                        price:parseInt(cost, 10),
                        plantName: caption,
                        imgUrl:url
            
                    })
                    .then(()=>{
                        alert("Click OK to Submit and Proceed");
                        setLoader(false);
                    })
                    .catch(error =>{
                        alert(error.message);
                        setLoader(false);
                    });

                    setName("");
                    setEmail("");
                    setPhone("");
                    setLocation("");
                    setCategory("");
                    setItems("");
                    setCost("");
                    setDescription("");
                    setProgress(0);
                    setCaption("");
                    setImage(null);
                });
            }
        );
    };


    return (
        <div className="seller">
            
            <div className="seller__container">
            <h1>
                    Seller Details
                </h1>
            <form onSubmit={handleSubmit}>
                
                <label>Name</label>
                <input placeholder="Name" type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                <label>Email</label>
                <input placeholder="Email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <label>Phone No.</label>
                <input placeholder="Number" type="tel" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                <label>Location</label>
                <select placeholder="Location" id="location" value={location} onChange={(e)=>setLocation(e.target.value)}>
                    <option>Select</option>
                    <optgroup label="States">
                    <option value="andhra_pradesh">Andhra Pradesh</option>
                    <option value="arunachal_pradesh">Arunachal Pradesh</option>
                    <option value="assam">Assam</option>
                    <option value="bihar">Bihar</option>
                    <option value="chhattisgarh">Chhattisgarh</option>
                    <option value="goa">Goa</option>
                    <option value="gujarat">Gujarat</option>
                    <option value="haryana">Haryana</option>
                    <option value="himachal_pradesh">Himachal Pradesh</option>
                    <option value="jharkhand">Jharkhand</option>
                    <option value="karnataka">Karnataka</option>
                    <option value="kerela">Kerela</option>
                    <option value="madhya_pradesh">Madhya Pradesh</option>
                    <option value="maharashtra">Maharashtra</option>
                    <option value="manipur">Manipur</option>
                    <option value="meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="nagaland">Nagaland</option>
                    <option value="odisha">Odisha</option>
                    <option value="punjab">Punjab</option>
                    <option value="rajasthan">Rajasthan</option>
                    <option value="sikkim">Sikkim</option>
                    <option value="tamil_nadu">Tamil Nadu</option>
                    <option value="telangana">Telangana</option>
                    <option value="tripura">Tripura</option>
                    <option value="uttar_pradesh">Uttar Pradesh</option>
                    <option value="uttarakhand">Uttarakhand</option>
                    <option value="west_bengal">West Bengal</option>
                    </optgroup>
                    <br></br><br></br>
                    <optgroup label="Union Territories">
                    <option value="andaman">Andaman and Nicobar Islands</option>
                    <option value="chandigarh">Chandigarh</option>
                    <option value="dadra">Dadra and Nagar Haveli and Daman and Diu</option>
                    <option value="delhi">Delhi</option>
                    <option value="jammu_and_kashmir">Jammu and Kashmir</option>
                    <option value="ladakh">Ladakh</option>
                    <option value="lakshdweep">Lakshadweep</option>
                    <option value="puducherry">Puducherry</option>
                    </optgroup>
                    <optgroup label="Outside India">
                    <option value="asia">Asia</option>
                    <option value="africa">Africa</option>
                    <option value="north_america">North America</option>
                    <option value="south_america">South America</option>
                    <option value="europe">Europe</option>
                    <option value="australia">Australia</option>
                    </optgroup>
                </select>
                <label>
                    Category
                </label>
                <select placeholder="Category" id="category" value={category} onChange={(e)=>setCategory(e.target.value)}>
                    <option>Select</option>
                    <option placeholder="Plants" id="plants" value="plants">Plants</option> 
                    <option placeholder="Tools" id="tools" value="tools">Tools</option> 
                    <option placeholder="Soil" id="soil" value="soil">Soil</option> 
                    <option placeholder="Seeds" id="seeds" value="seeds">Seeds</option> 
                </select>

                <label>Number of Items</label>
                <input placeholder="Items" type="number" value={items} onChange={(e)=>setItems(e.target.value)}/>
                <label>Cost (per item)</label>
                <input placeholder="in ₹" type="number" min="50" value={cost} onChange={(e)=>setCost(e.target.value)}/>
                <label>Product Details</label>
                <textarea placeholder="Product Name, Details" onChange={event => setCaption(event.target.value)} value={caption}></textarea>
                <label>Product Image</label>
                <div className="seller__upload"><input type="file"  onChange = {handleChange}  name="No Image Uploaded" /></div>
                <button className="seller__signInButton" type="submit" style={{background: loader ? "#ccc": "rgb(3, 141, 141)"}}>Submit</button>
                
            </form>
            </div>
        </div>
    )
}

export default Seller
