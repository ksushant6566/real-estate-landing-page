import Types from './types';

export const submitFormStart = userDetails => ({
    type: Types.SUBMIT_FORM_START,
    payload: userDetails
})