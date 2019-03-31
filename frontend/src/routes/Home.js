import React, {Component} from 'react';

const Home = ({history}) => {
    return(
        <div>
            Home
            <button onClick={()=>{history.push('/posts')}}>버튼111112221211</button>
        </div>
    )
}

export default Home;