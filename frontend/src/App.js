import React, {Component} from 'react';
import { hot } from 'react-hot-loader'
import member from './components/Data';

class App extends Component {



    state = {
        keyword : '',
        name    : '',
        age     : ''
    }

    box = null;

    setKeyword = (e) => {
        this.setState({
            keyword: e.target.value
        });
    }
    setValue = (obj) => {
        this.setState({
            name : obj.name,
            age  : obj.age
        });
    }
    search = (e) => {
        if(this.state.keyword != '') {
            for(let value of member) {
                if(value.name === this.state.keyword) {
                    this.setValue(value);
                    e.preventDefault();
                } else {
                    e.preventDefault();
                }
            }
        } else {
            e.preventDefault();
        }
    }


    render() {
        return (
            <form onSubmit={this.search}>
                <h1>Home</h1>
                <hr/>

                <input type={"text"} onChange={this.setKeyword} value={this.state.keyword}/>
                <button type={onsubmit}>
                    검색
                </button>
                <div ref={ref => this.box = ref}>
                    <ul>
                        <li>이름 : {this.state.name}</li>
                        <li>나이 : {this.state.age}</li>
                    </ul>
                </div>
            </form>
        )
    }
}

export default hot(module) (App);
