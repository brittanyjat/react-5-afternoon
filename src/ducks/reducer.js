const initialState = {
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: false,
    realEstateAgent: 'false',
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: '',
    lastName: '',
    email: ''
};

const UPDATE_LOAN_TYPE = 'UPDATE_LOAN_TYPE';
const UPDATE_PROPERTY_TYPE = 'UPDATE_PROPERTY_TYPE';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_PROP = 'UPDATE_PROP';
const UPDATE_FOUND = 'UPDATE_FOUND';
const UPDATE_AGENT = 'UPDATE_AGENT';
const UPDATE_COST = 'UPDATE_COST';
const UPDATE_PAYMENT = 'UPDATE_PAYMENT';

function reducer(state = initialState, action){
    console.log(action)
    // console.log(state)
    switch(action.type){
        case UPDATE_LOAN_TYPE:
            return {...state, loanType: action.payload}
        case UPDATE_PROPERTY_TYPE:
            return {...state, propertyType: action.payload}
        case UPDATE_CITY:
            return {...state, city: action.payload}
        case UPDATE_PROP:
            return {...state, propToBeUsedOn: action.payload}
        case UPDATE_FOUND:
            return {...state, found: action.payload}
        case UPDATE_AGENT:
            return {...state, realEstateAgent: action.payload}
        case UPDATE_COST:
            return {...state, cost: action.payload}
        case UPDATE_PAYMENT:
            return {...state, downPayment: action.payload}
        default:
            return state
    }
}

export default reducer;

export function updateLoanType(value){
    // console.log(value)
    return {
        type: UPDATE_LOAN_TYPE,
        payload: value
    }
}

export function updatePropertyType(value){
    return {
        type: UPDATE_PROPERTY_TYPE,
        payload: value
    }
}

export function updateCity(value){
    return{
        type: UPDATE_CITY,
        payload: value
    }
}

export function updateProp(value){
    return {
        type: UPDATE_PROP,
        payload: value
    }
}

export function updateFound(value){
    return {
        type: UPDATE_FOUND,
        payload: value
    }
}

export function updateAgent(value){
    return {
        type: UPDATE_AGENT,
        payload: value
    }
}

export function updateCost(value){
    return {
        type: UPDATE_COST,
        payload: value
    }
}

export function updatePayment(value){
    return {
        type: UPDATE_PAYMENT,
        payload: value
    }
}