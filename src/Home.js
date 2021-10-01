import React, {useEffect, useState}from "react";
import HomeBanner from "./banner_home.png";
import "./Home.css";
import Post from "./Post";
import {db} from './firebase';

function Home() {

  const[posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('seller_details').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id, 
        post: doc.data()
      })));
    })
  }, [])
  return (
    <div className="home">
    <img className="home__image"
         src={HomeBanner}
        alt=""
        />
      
      <div className="home__row">
        {
          posts.map(({id,post}) => (
            <Post key = {id} plantName = {post.plantName} price = {post.price} imgUrl = {post.imgUrl} />
          ))
        }
        
      </div>
    </div>
  );
}

export default Home;
