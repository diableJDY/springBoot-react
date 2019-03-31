import React from 'react';
import {Redirect} from 'react-router-dom'

const logind = false;


const MyPage = () => {
    return (
        <div>
            {
                !logind && <Redirect to='/login' />
            }
            마이페이지
        </div>
    );
};

export default MyPage;
