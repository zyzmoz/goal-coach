import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addGoal } from '../actions';
import { goalRef } from '../providers/firebase';

class AddGoal extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      text: ''
    }

  }

  addGoal(){
    const { email } = this.props.user;
    const { text } = this.state;
    this.props.addGoal({email, text});
    goalRef.push({email, text});
  }

  render(){
    return(
      <div className="form-inline">
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            onChange={e => this.setState({text: e.target.value})}
            placeholder="Write your Goal"
          />
          <button
            className="btn btn-success"
            onClick={() => this.addGoal()}>
            Submit
          </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  const { user, goals } = state;
  return {
    user
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ addGoal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGoal);
