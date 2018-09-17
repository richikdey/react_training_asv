const feedbackClicked = (state = null, action) =>{
switch (action.type) {
    case "FEEDBACK_CLICKED":
        return action.payload;
}
return state
}

export default feedbackClicked;