import { produce } from "immer";
let state = {
    houses: {
        gryffindor: {
            points: 15
        },
        ravenclaw: {
            points: 18
        },
        hufflepuff: {
            points: 7
        },
        slytherin: {
            points: 5
        }
    }
}

function plainJsReducer(state) {
    // Add 3 points to Ravenclaw,
    // when the name is stored in a variable
    const key = "ravenclaw";
    return {
        ...state, // copy state
        houses: {
            ...state.houses, // copy houses
            [key]: {  // update one specific house (using Computed Property syntax)
                ...state.houses[key],  // copy that specific house's properties
                points: state.houses[key].points + 3   // update its `points` property
            }
        }
    }
}

console.log(plainJsReducer(state))