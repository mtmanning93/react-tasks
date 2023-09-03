import React from 'react'
import css from "./css/PostItem.module.css";

function Postitems(props) {
  return (
    props.savedPosts.map(post => {
        return (
            <div key={post.title} className={css.SearchItem}>
                <p>Title: {post.title}</p>
                <p>Author: {post.name}</p>
                <img src={post.image}></img>
                <p>Description: {post.description}</p>
            </div>
    )})
  )
}

export default Postitems