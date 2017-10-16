import { SIGNED_IN, ADD_GOAL, LIST_GOAL} from '../constants';

export function logUser(email){
  const action = {
    type: SIGNED_IN,
    email
  }
  return action;
}

export function addGoal(goal){
  const { email, text } = goal;
  const action = {
    type: ADD_GOAL,
    email: email,
    text: text
  }
  return action;
}

export function listGoal(goals){
  const action = {
    type: LIST_GOAL,
    goals
  }
  return action;
}
