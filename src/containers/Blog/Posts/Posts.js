import React, { Component } from 'react';
import axios from "axios";
import Post from '../../../components/Post/Post';
import './Posts.css';
import { Link } from "react-router-dom";

class Posts extends Component {

    state = {
        posts: []
    }

    postSelectedHandler = ( id ) => {
        this.setState( {selectedPostId: id} )
    }

    componentDidMount() {
        axios.get( '/posts' )
            .then( ( res ) => {
                const posts = res.data.slice( 0, 4 );
                const updatePosts = posts.map( post => {
                    return {
                        ...post,
                        author: 'Connor'
                    }
                } )
                this.setState( {posts: updatePosts} );
            } )
            .catch( ( error ) => {
                console.log( error )
                // this.setState( {error: true} )
            } );
    }

    render() {


        let posts = <p style={ {textAlign: 'center'} }>Http Error</p>;

        if (!this.state.error) {
            posts = this.state.posts.map( post => {
                return <Link to={ '/posts/' + post.id } key={post.id}>
                    <Post key={ post.id }
                          clicked={ () => this.postSelectedHandler( post.id ) }
                          author={ post.author }
                          title={ post.title }
                    />
                </Link>;
            } );
        }

        return (
            <section className="Posts">
                { posts }
            </section>
        )
    }
}

export default Posts;
