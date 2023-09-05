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
                        this.state.isLoaded
                        ? <Postitems savedPosts = {savedPosts} /> 
                        : <Loader />
                    }
                </div>
            </div>
        )
    }
}

export default Content