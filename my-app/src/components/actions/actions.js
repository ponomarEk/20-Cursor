import { CHANGE_TEXT,CHANGE_AUTHOR,CHANGE_IMAGE, CHANGE_LIKE, CHANGE_REPOST, CHANGE_COMMENT } from '../../App'

export const changeText=(newText)=>{
    return{
        type:CHANGE_TEXT,
        payload:newText
    }
}
export const changeImage=(newImage)=>{
    return{
        type:CHANGE_IMAGE,
        payload:newImage
    }
}

export const changeAuthor=(newAuthor)=>{
    return{
        type:CHANGE_AUTHOR,
        payload:newAuthor
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