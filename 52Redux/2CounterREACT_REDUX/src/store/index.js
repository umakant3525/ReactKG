import { createStore } from "redux";

const INITIAL_VALUE = {
    counter: 0,
    privacy : false
};

const counterReducer = (store = INITIAL_VALUE, action) => {

    // Here all valures are updted with all mens counterand privacy not related 
    // if(action.type === "INCREMENT"){
    //     return { counter : store.counter +1 }
    // }
    // else if(action.type === "DECREMENT"){
    //     return { counter : store.counter -1}
    // }
    // else if(action.type === "ADD"){
    //     return { counter : store.counter + Number(action.payload.num)}
    // }
    // else if(action.type === "SUB"){
    //     return { counter : store.counter - Number(action.payload.num)}
    // }
    // else if(action.type == "PRIVACY_TOGGLE"){
    //     return {privacy : !store.privacy }
    // }
 

    // Here we are sending data with objects but in the complex oobjects it is not possilbel
    // if (action.type === "INCREMENT") {
    //     return { counter: store.counter + 1, privacy: store.privacy }
    // }
    // else if (action.type === "DECREMENT") {
    //     return { counter: store.counter - 1, privacy: store.privacy }
    // }
    // else if (action.type === "ADD") {
    //     return { counter: store.counter + Number(action.payload.num), privacy: store.privacy }
    // }
    // else if (action.type === "SUB") {
    //     return { counter: store.counter - Number(action.payload.num), privacy: store.privacy }
    // }
    // else if (action.type == "PRIVACY_TOGGLE") {
    //     return { counter: store.counter, privacy: !store.privacy }
    // }


    // now we uses ... spread operator for objects which store old value and replace updated value  or use toolkit 
    if (action.type === "INCREMENT") {
        return {...store , counter: store.counter + 1 }
    }
    else if (action.type === "DECREMENT") {
        return {...store, counter: store.counter - 1 }
    }
    else if (action.type === "ADD") {
        return {...store, counter: store.counter + Number(action.payload.num) }
    }
    else if (action.type === "SUB") {
        return {...store, counter: store.counter - Number(action.payload.num)}
    }
    else if (action.type == "PRIVACY_TOGGLE") {
        return {...store, privacy: !store.privacy }
    }

    return store;
};

const counterStore = createStore(counterReducer);

export default counterStore;
