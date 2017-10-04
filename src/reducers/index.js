import { SIGNED_IN, ADD_GOAL} from '../constants';
import {goalRef} from '../providers/firebase';

let user = {
  email: null
}

const goal = (action) => {
  let { text } = action;
  return {
    email: user.email,
    text
  }
}

export default (state = user, action) => {
  let goals = null;
  switch (action.type) {
    case SIGNED_IN:
      const { email } = action;
      user = {
        email
      };
      return user;
    case ADD_GOAL:
      goals = [...state, goal(action)];
      goalRef.push(goal(action));
      return goals;
    default:
      return state;

  }
}
