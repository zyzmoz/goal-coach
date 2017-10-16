import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {listGoal} from '../actions';
import { goalRef } from '../providers/firebase';

class GoalList extends Component {

  constructor(props){
    super(props);

  }

  componentDidMount(){

    goalRef.on('value', snap => {
      let goals = [];
      snap.forEach(goal => {
        let goalObj = goal.val();
        const {email, text} = goalObj;
        goals.push({email, text});
      });
      this.props.listGoal(goals);
    });

    console.log(this.props);
  }

  render(){
    return(
      <div>
        {
          this.props.goals.map((goal, index) => {
            return(
              <div key={index}>{goal.text}</div>
            )
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state){
  const { goals } = state;
  return {
    goals
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({listGoal}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalList);
