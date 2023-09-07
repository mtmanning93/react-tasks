import React, {useState, useEffect} from 'react'
import {savedPosts} from "../posts.json";
import css from "./css/Content.module.css";
import Postitems from './Postitems';
import Loader from './Loader';

function ContentHooks() {

    const [isLoaded, setisLoaded] = useState(false);
    const [fetchedPosts, setfetchedPosts] = useState([]);

    useEffect (() => {
        setTimeout(() => {
                setisLoaded(true);
                setfetchedPosts(savedPosts);
            }, 2000)
        }, [])

    const handleChange = (event) => {
        const name = event.target.value
        const filteredPosts = savedPosts.filter((post) => {
            return post.name.toLowerCase().includes(name)
        })
        setfetchedPosts(filteredPosts)
    }

    return (
        <div>
            <div className={css.TitleBar}>
                <h1>My Posts</h1>
                <form>
                    <label htmlFor="searchInput">Search:</label> 
                    <input onChange={(event) => handleChange(event)} id="searchInput" type="search" />
                    <h4>posts found: {fetchedPosts.length}</h4>
                </form>
            </div>
            <div className={css.SearchResults}>
                {
                    isLoaded
                    ? <Postitems savedPosts = {fetchedPosts} /> 
                    : <Loader />
                }
            </div>
        </div>
    )
}

export default ContentHooks