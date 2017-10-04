import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addGoal } from '../actions';

class AddGoal extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      text: ''
    }
  }

  addGoal(){
    this.props.addGoal(this.state);
    console.log(this.props);
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
  return {
    state
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({addGoal}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGoal);
