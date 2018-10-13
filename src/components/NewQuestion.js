import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {handleAddQuestion} from '../actions/shared';
import '../styles/newQuestion.css'


class NewQuestion extends Component {
    state = {
        optionOneText: '', 
        optionTwoText: '',
    }
    
    handleInputChange = (e) => {
        const {value, id} = e.target
        this.setState(() => ({[id]: value}))
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        const {optionOneText, optionTwoText} = this.state;
        const {dispatch} = this.props;

        dispatch(handleAddQuestion(optionOneText, optionTwoText));

        this.setState({
            optionOneText: '', 
            optionTwoText: '',
        });
        this.props.history.push('/');
    }

    render(){
        const {optionOneText, optionTwoText} = this.state;

        return (
            <div>
                <h5 className='newQuestion-title'>Would You Rather...</h5>
                <form 
                    className="newQuestion-form col s12" 
                    onSubmit={this.handleFormSubmit}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input 
                                id="optionOneText" 
                                type="text"
                                onChange={this.handleInputChange} 
                                value={optionOneText}  
                                className="validate" 
                                required/>
                            <label>Question 1</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input  
                                id="optionTwoText" 
                                type="text"
                                onChange={this.handleInputChange} 
                                value={optionTwoText}  
                                className="validate" 
                                required/>
                            <label>Question 2</label>
                        </div>
                    </div>
                    <Link
                        to ={`/`} 
                        className="waves-effect waves-light red lighten-3 btn">
                        Cancel
                    </Link>
                    <button 
                        className="waves-effect waves-light blue lighten-2 btn" 
                        type="submit" 
                        name="action">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default connect()(NewQuestion);