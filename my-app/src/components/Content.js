import React, { Component } from 'react'
import {savedPosts} from "../posts.json";
import css from "./css/Content.module.css";
import Postitems from './Postitems';
import Loader from './Loader';

export class Content extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            isLoaded: false,
            posts: []
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoaded: true,
                posts: savedPosts
            })
        }, 2000)
    }

    handleChange = (event) => {
        const name = event.target.value
        const filteredPosts = savedPosts.filter((post) => {
            return post.name.toLowerCase().includes(name)
        })
        this.setState({
            posts: filteredPosts
        })
    }

    render() {
        return (
            <div>
                <div className={css.TitleBar}>
                    <h1>My Posts</h1>
                    <form>
                        <label htmlFor="searchInput">Search:</label> 
                        <input onChange={(event) => this.handleChange(event)} id="searchInput" type="search" />
                        <h4>posts found: {this.state.posts.length}</h4>
                    </form>
                </div>
                <div className={css.SearchResults}>
                    {
                        this.state.isLoaded
                        ? <Postitems savedPosts = {this.state.posts} /> 
                        : <Loader />
                    }
                </div>
            </div>
        )
    }
}

export default Content