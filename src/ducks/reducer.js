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
const UPDATE_CREDIT = 'UPDATE_CREDIT';
const UPDATE_HISTORY = 'UPDATE_HISTORY';
const UPDATE_ADDONE = 'UPDATE_ADDONE';
const UPDATE_ADDTWO = 'UPDATE_ADDTWO';
const UPDATE_ADDTHREE = 'UPDATE_ADDTHREE';
const UPDATE_FIRST = 'UPDATE_FIRST';
const UPDATE_LAST = 'UPDATE_LAST';
const UPDATE_EMAIL = 'UPDATE_EMAIL';

function reducer(state = initialState, action){
    // console.log(action)
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
        case UPDATE_CREDIT:
            return {...state, credit: action.payload}
        case UPDATE_HISTORY:
            return {...state, history: action.payload}
        case UPDATE_ADDONE:
            return {...state, addressOne: action.payload}
        case UPDATE_ADDTWO:
            return {...state, addressTwo: action.payload}
        case UPDATE_ADDTHREE:
            return {...state, addressThree: action.payload}
        case UPDATE_FIRST:
            return {...state, firstName: action.payload}
        case UPDATE_LAST:
            return {...state, lastName: action.payload}
        case UPDATE_EMAIL:
            return {...state, email: action.payload}
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
    // console.log(value)
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

export function updateCredit(value){
    // console.log(value)
    return {
        type: UPDATE_CREDIT,
        payload: value
    }
}

export function updateHistory(value){
    // console.log(value)
    return {
        type: UPDATE_HISTORY,
        payload: value
    }
}

export function updateAddressOne(value){
    return {
        type: UPDATE_ADDONE,
        payload: value
    }
}

export function updateAddressTwo(value){
    return {
        type: UPDATE_ADDTWO,
        payload: value
    }
}

export function updateAddressThree(value){
    return {
        type: UPDATE_ADDTHREE,
        payload: value
    }
}

export function updateFirst(value){
    return {
        type: UPDATE_FIRST,
        payload: value
    }
}

export function updateLast(value){
    return {
        type: UPDATE_LAST,
        payload: value
    }
}

export function updateEmail(value){
    return {
        type: UPDATE_EMAIL,
        payload: value
    }
}