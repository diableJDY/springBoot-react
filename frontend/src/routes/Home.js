import React, {Component} from 'react';

const Home = ({history}) => {
    return(
        <div>
            Home
            <button onClick={()=>{history.push('/posts')}}>버튼</button>
        </div>
    )
}

export default Home;