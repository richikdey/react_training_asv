const updateFieldReducer=(state=null,action)=>{
    switch (action.type) {
        case "TITLE_UPDATED":
            console.log("changed value",action.payload)
            return action.payload;
        default:
            break;
    }
    return state;
}
export default updateFieldReducer;