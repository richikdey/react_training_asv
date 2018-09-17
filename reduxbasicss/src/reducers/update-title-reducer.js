const feedbackUpdated = function(state = null, action){
    switch (action.type) {
        case "TITLE_UPDATED":
            console.log("I am in update title reducer");
            console.log(action.payload);
            return action.payload
    
        default:
            break;
    }

    return state;


}

export default feedbackUpdated