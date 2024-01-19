const initialstate = {
    list:[]
};

const favoritesReducer = (state = initialstate, action) => {
switch (action.type) {
case 'ADD_FAVE':
    return{...state,
        list: action.payload
    };
}
}

export default favoritesReducer;