import React from 'react'
import css from "./css/PostItem.module.css";

function Postitems(props) {
  return (
    props.savedPosts.map(post => {
        const { name, title, description, image } = post
        return (
            <div key={title} className={css.SearchItem}>
                <p>Title: {title}</p>
                <p>Author: {name}</p>
                <img src={image}></img>
                <p>Description: {description}</p>
            </div>
    )})
  )
}

export default Postitems