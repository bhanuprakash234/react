const initialState={
    list: []
}
//this is a reducer
const product=(state=initialState,action)=>{
    if(action.type === 'GET_LIST'){
        return {...state,list: action.payload}
    }

    if(action.type==='UPDATE_PRODUCT'){
        //STEP 1: FETCH THE OBJECT THAT I WISH TO UPDATE
        const {id,status}=action.payload;
        let productObj = state.list.find(p=>p.id ===id);
        //step 2: clone this object and update the status
        let cloneObj =Object.assign({},productObj);
        cloneObj.featured=status
        //setp 3: delete the object from the list before re-adding to prevent duplicate
        let tempList=state.list.filter(p=>p.id !==id);
        //step 4: add the updated object to the tempList
        tempList.push(cloneObj)
        //step 5: return and attach tempList to state List
        return {...state,list:tempList}
    }
    return state;
}

/*
action={
            type : 'GET_LIST',
            payload: response.data
        } 
*/


export default product;

/*state==>product.list=[]
state==>product.list[p1,p2,p3,p4p5,p6]
*/