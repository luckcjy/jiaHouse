import { createStore,combineReducers } from "redux";

function historyArr(state=[],action){
    switch (action.type) {
        case "addArr":
            // return  [...new Set([action.newObj,...state])] //利用set去重地址相同的对象
            return [action.newObj,...state.filter(item=>item.name !== action.newObj.name),]
        default:
            return state;
    }
}

function changeMsg(state="这是个消息",action){
    switch (action.type) {
        case "newMsg":
            return action.msg
        default:
            return state;
    }
}
export default createStore(combineReducers({
    historyArr,
    changeMsg
}))
// export default store
// console.log(store.getState())











// var store = createStore(function(state,action){
//     switch (action.type) {
//         case 'changeMsg':
//             return action.msg
//         default:
//             return "房价肯定拉萨"
//     }
// })
// console.log(store)
// console.log(store.getState())

// var a = {
//     type:"changeMsg",
//     msg:"累计发送的"
// }

// store.dispatch(a)


// console.log(store.getState())