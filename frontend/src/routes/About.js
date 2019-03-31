import React , {Component} from 'react'

const About = ({match})=>{
    return(
        <div>
            {match.params.userName}을 소개합니다.
        </div>
    )
}

export default About;