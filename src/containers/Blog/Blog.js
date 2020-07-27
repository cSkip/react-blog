import React, { Component } from 'react';
import { Link, NavLink, Route } from 'react-router-dom';

import './Blog.css';
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import FullPost from "./FullPost/FullPost";

class Blog extends Component {

    render() {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/new-post">New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>

                {/*Load component based on path*/ }
                <Route path="/" exact component={ Posts }/>
                <Route path="/new-post" exact component={ NewPost }/>
                <Route path="/posts/:id" exact component={ FullPost }/>
            </div>
        );
    }
}

export default Blog;