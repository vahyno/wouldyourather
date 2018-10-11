import React, {Component} from 'react';
import {connect} from 'react-redux';

const unAnsw = 'unAansw';
const answ = 'answ';

class Dashboard extends Component {

    state = {
        active: unAnsw
    }

    toggleState = (navTab) => {
        if (this.state.active !== navTab) {
            this.setState({active: navTab})
        } 
    }

    render() {
        const {active} = this.state
        const {answeredQsSorted, unAnsweredQsSorted} = this.props;
        console.log('answeredQ', answeredQsSorted, 'unAnsweredQ', unAnsweredQsSorted);
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                    <ul className="left hide-on-med-and-down">
                        <li className={active===answ ? "active" : null}><a onClick={()=> this.toggleState(answ)} href="#">Answered polls</a></li>
                        <li className={active===unAnsw ? "active" : null}><a onClick={()=> this.toggleState(unAnsw)} href="#">Unanswered polls</a></li>
                    </ul>
                    </div>
                </nav>



                { this.state.active === answ &&
                    <div>
                        <p>Answered Questions:</p>
                        <ul>
                            {answeredQsSorted.map(Q => (
                                <li key={Q.id}>{Q.id}</li>
                            ))}
                        </ul>
                    </div>
                }

                { this.state.active === unAnsw &&
                    <div>
                        <p>Unanswered Questions:</p>
                        <ul>
                            {unAnsweredQsSorted.map(Q => (
                                <li key={Q.id}>{Q.id}
                                </li>
                            ))}
                        </ul>
                    </div>
                }
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
The answered and unanswered polls are both available at the root.
The user can alternate between viewing answered and unanswered polls.
The unanswered questions are shown by default.
The name of the logged in user is visible on the page.
The user can navigate to the leaderboard.
The user can navigate to the form that allows the user to create a new poll.

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

