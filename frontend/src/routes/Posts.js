import React, {Component} from 'react';
import {Route,Link} from 'react-router-dom';

const Post = ({match})=>{
    return(
        <h2>
            {match.params.title}
        </h2>
    )
}


const Posts = ()=>{
    return(
        <div>
            posts
            {/*<Link to="/posts/react">React</Link>*/}
            {/*<Link to="/posts/redux">Redux</Link>*/}
            {/*<Link to="/posts/vue">VUE</Link>*/}
            {/*<Route path="/posts/:title" component={Post}/>*/}
        </div>
    )
}

export default Posts;