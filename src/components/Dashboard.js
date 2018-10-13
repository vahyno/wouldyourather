import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import '../styles/dashboard.css';

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
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                    <ul className="left hide-on-med-and-down">
                        <li className={active===answ ? "active" : null}><Link to={'/'} onClick={()=> this.toggleState(answ)}>Answered polls</Link></li>
                        <li className={active===unAnsw ? "active" : null}><Link to={'/'} onClick={()=> this.toggleState(unAnsw)}>Unanswered polls</Link></li>
                    </ul>
                    </div>
                </nav>

                { this.state.active === answ &&
                    <div className='dash-list'>
                        <ul className='collection with-header'>
                            <li className="center collection-header"><h4>Answered Questions:</h4></li>
                            {answeredQsSorted.map(Q => (
                                <li className='dash-btn btn-large waves-effect waves-light collection-item' 
                                    key={Q.id}>
                                    <Link to={`/questions/${Q.id}`}>
                                        {Q.optionOne.text} - or - {Q.optionTwo.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                }

                { this.state.active === unAnsw &&
                    <div className='dash-list'>
                        <ul className='collection with-header'>
                            <li className='center collection-header'><h4>Unanswered Questions:</h4></li>
                            {unAnsweredQsSorted.map(Q => (
                                <li className='dash-btn btn-large waves-effect waves-light collection-item' 
                                    key={Q.id}>
                                    <Link to={`/questions/${Q.id}`} className=''>
                                        {Q.optionOne.text} - or - {Q.optionTwo.text}
                                    </Link>
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
