import React, { Component } from 'react'
import {savedPosts} from "../posts.json";
import css from "./css/Content.module.css";
import Postitems from './Postitems';
import Loader from './Loader';

export class Content extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            isLoaded: false
        }
    }

    componentDidMount() {
        this.getData()
    }

    getData () {
        setTimeout(() => {
            this.setState({
                isLoaded: true
            })
        }, 2000)
    }

    render() {
        return (
            <div>
                <div className={css.TitleBar}>
                    <h1>My Posts</h1>
                </div>
                <div className={css.SearchResults}>
                    {
                    this.state.isLoaded ? <Postitems savedPosts = {savedPosts} /> : <Loader />
                    }
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