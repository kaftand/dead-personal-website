export default function (state="me", action) {
    console.log(action)
  switch(action.type)
  {
    case 'MODE_SELECTED':
      return action.payload;
      break;
  }
  return state
}
