const UserClicked = (state = null, action) =>{
      switch (action.type) {
          case "TITLE_CLICKED":
              return action.payload
      
          default:
              break;
      }
      return state;
}

export default UserClicked;