import { ADD_GOAL, LIST_GOAL } from '../constants';
import { goalRef } from '../providers/firebase';

const goal = (action) => {
  let { email, text } = action;
  return {
    email,
    text
  }
}



export default (state = [], action) => {
  let goals = [];
  switch (action.type) {
    case ADD_GOAL:
      goals = [...state, goal(action)];
      return goals;
    case LIST_GOAL:
    console.log(action);
      goals = action.goals;
      console.log(goals);
      return goals;
    default:
      return state;

  }

}
