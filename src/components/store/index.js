import { combineReducers, createStore } from "redux";
import { abitsReducer, group108reducer, group306reducer, group309reducer, modalDocsreducer, modalGroupsReducer, otlenieFirstReducer, otlenieSecondReducer, otlenieThirdReducer, teachersReducer } from "./WindowStates";


const rootReducer = combineReducers({
    otdelenie1: otlenieFirstReducer,
    otdelenie2: otlenieSecondReducer,
    otdelenie3: otlenieThirdReducer,
    group108: group108reducer,
    group306: group306reducer,
    group309: group309reducer,
    modalDocs: modalDocsreducer,
    abits: abitsReducer,
    teachers: teachersReducer,
    modalGroups: modalGroupsReducer,
})



export const store = createStore(rootReducer)