import React, { Component } from 'react';

class GoalItem extends Component {

  render(){
    console.log(this.props);
    const {email, text} = this.props.goal;
    return (
      <div className="list">
        <div className="list-item">
          <strong>{email}</strong>
          <span>submitted by<em>{email}</em></span>
          <button className="btn btn-sm btn-50">
            Finish Goal
          </button>
        </div>
      </div>
    );
  }

}

export default GoalItem;
