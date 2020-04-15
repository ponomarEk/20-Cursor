import { ADD_DATA, CHANGE_LIKE, CHANGE_REPOST, CHANGE_COMMENT } from '../../App'

export const addData=(newData)=>{
    return{
        type:ADD_DATA,
        payload:newData
    }
}

export const changeLike=(newCount)=>{
    return{
        type:CHANGE_LIKE,
        payload:newCount
    }
}

export const changeRepost=(newCount)=>{
    return{
        type:CHANGE_REPOST,
        payload:newCount
    }
}
export const changeComment=(newCount)=>{
    return{
        type:CHANGE_COMMENT,
        payload:newCount
    }
}