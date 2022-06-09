export default function reducer(state,action){
  
    switch(action.type){
        case "discount":return discount(state,"discount")
        case "price":return discount(state,"price")
        default:return state

    }
}

function discount(state,field){
    let copy=[...state]
    copy=copy.sort((a, b) =>parseInt(b[field])-parseInt(a[field]))
    return []
}
