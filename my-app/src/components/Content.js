import React, { Component } from 'react'
import {savedPosts} from "../posts.json";
import css from "./css/Content.module.css";
import Postitems from './Postitems';

export class Content extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <div className={css.TitleBar}>
                    <h1>My Posts</h1>
                </div>
                <div className={css.SearchResults}>
                    <Postitems savedPosts = {savedPosts} /> 
                    {/* {
                        savedPosts.map((post) => {
                            return (
                                <div key={post.title} className={css.SearchItem}>
                                    <p>Title: {post.title}</p>
                                    <p>Author: {post.name}</p>
                                    <img src={post.image}></img>
                                    <p>Description: {post.description}</p>
                                </div>
                        )})
                    } */}
                </div>
            </div>
        )
    }
}

export default Content