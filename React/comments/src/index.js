import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
        <ApprovalCard>
            <div>
                <h3>Warning!</h3>
                Are you sure you want to do this?
            </div>
            
        </ApprovalCard>
        <ApprovalCard >
            <CommentDetail 
                author={faker.name.firstName()} 
                avatar={faker.image.avatar()} 
                commentData={faker.commerce.department()} 
                timeAgo="Today at 2:12" 
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
                author={faker.name.firstName()} 
                avatar={faker.image.avatar()} 
                commentData={faker.commerce.department()} 
                timeAgo="Today at 4:12"
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
            author={faker.name.firstName()} 
            avatar={faker.image.avatar()} 
            commentData={faker.commerce.department()} 
            timeAgo="Today at 7:12"/>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
                author={faker.name.firstName()} 
                avatar={faker.image.avatar()} 
                commentData={faker.commerce.department()} 
                timeAgo="Today at 12:12"/>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
            author={faker.name.firstName()} 
            avatar={faker.image.avatar()} 
            commentData={faker.commerce.department()} 
            timeAgo="Today at 21:12"/>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
            author={faker.name.firstName()} 
            avatar={faker.image.avatar()} 
            commentData={faker.commerce.department()} 
            timeAgo="Today at 22:12"/>
        </ApprovalCard>
        </div>
    );
};
function genRandomNumber(minValue, maxValue) 
{
    return Math.random() * (maxValue-minValue) + minValue ;
}

ReactDOM.render(<App />, document.querySelector('#root'));
