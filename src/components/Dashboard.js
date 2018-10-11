import React, {Component} from 'react';
import {connect} from 'react-redux';

class Dashboard extends Component {

    render() {
        const {answeredQsSorted, unAnsweredQsSorted} = this.props;
        console.log('answeredQ', answeredQsSorted, 'unAnsweredQ', unAnsweredQsSorted);
        return (
            <div>Dashboard
                <p>answeredQsSorted</p>
                <ul>
                    {answeredQsSorted.map(Q => (
                        <li key={Q.id}>{Q.id}</li>
                    ))}
                </ul>
                <p>unAnsweredQsSorted</p>
                <ul>
                    {unAnsweredQsSorted.map(Q => (
                        <li key={Q.id}>{Q.id}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({questions, authedUser}) {
    const answeredQ = Object.values(questions).filter(question => (
        question.optionOne.votes.includes(authedUser) || 
        question.optionTwo.votes.includes(authedUser)
    ));
    const unAnsweredQ = Object.values(questions).filter(question =>(
        !question.optionOne.votes.includes(authedUser) && 
        !question.optionTwo.votes.includes(authedUser)
    ));
    return {
        answeredQsSorted: answeredQ.sort((a, b) => b.timestamp - a.timestamp),
        unAnsweredQsSorted: unAnsweredQ.sort((a, b) => b.timestamp - a.timestamp)
    }
}

export default connect(mapStateToProps)(Dashboard);


/*
Each polling question resides in the correct category. For example, if a question hasn’t been answered by the current user, it should be in the “Unanswered” category.
A polling question links to details of that poll.
The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom).

questions = {
    "8xf0y6ziyjabvozdd253nd": {
      id: '8xf0y6ziyjabvozdd253nd',
      author: 'sarahedo',
      timestamp: 1467166872634,
      optionOne: {
        votes: ['sarahedo'],
        text: 'have horrible short term memory',
      },
      optionTwo: {
        votes: [],
        text: 'have horrible long term memory'
      }
*/

