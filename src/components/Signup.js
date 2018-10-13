import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {handleAddNewUser} from '../actions/users';
import '../styles/signUp.css';

const defaultAvatarImg = 'https://icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png';

class Signup extends Component {

    state= {
        username: '',
        name: '',
        avatarURL: defaultAvatarImg,
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        const {username, name, avatarURL} = this.state;
        const {dispatch} = this.props;

        dispatch(handleAddNewUser(username, name, avatarURL));
        this.props.history.push('/login');
    }

    handleInputChange = (e) => {
        let inputFieldName = e.target.id;
        this.setState({
            [inputFieldName]: e.target.value
        })
    }


    handleURLChange = (e) => {
        if (this.state.avatarURL === defaultAvatarImg) {
            this.setState({avatarURL: ''});
        } else {
            this.setState({
                avatarURL: e.target.value
            })
        }
    }


    render(){
        return (
            <div>
                <h5 className='signUp-title'>Please Sign Up:</h5>
                <form className="signUp-form col s12" onSubmit={this.handleFormSubmit}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input 
                                id="username" 
                                type="text"
                                onChange={this.handleInputChange} 
                                value={this.state.username}  
                                className="validate" 
                                required/>
                            <label>Username</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input  
                                id="name" 
                                type="text"
                                onChange={this.handleInputChange} 
                                value={this.state.name}  
                                className="validate" 
                                required/>
                            <label>Full Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input 
                                id="avatarURL" 
                                type="text"
                                onFocus={this.handleURLChange} 
                                onChange={this.handleURLChange}
                                name="avatarURL" 
                                value={this.state.avatarURL} 
                                className="validate"/>
                            <label>avatar URL</label>
                        </div>
                    </div>
                    <Link
                        to ={`/login`} 
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

export default connect()(Signup);