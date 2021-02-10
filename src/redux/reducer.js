import Types from './types';

const INITIAL_STATE = {
    name: '',
    email: '',
    phone: '',
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.SUBMIT_FORM_START:
            const {name, email, phone} = action.payload;
            return {
                ...state,
                name,
                email,
                phone,
            };
    
        default:
            return state;
    }
}

export default reducer