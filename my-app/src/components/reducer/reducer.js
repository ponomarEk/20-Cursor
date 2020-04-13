import { CHANGE_TEXT,CHANGE_AUTHOR,CHANGE_IMAGE, CHANGE_LIKE, CHANGE_REPOST, CHANGE_COMMENT } from '../../App'

const initialState={

    author:'Anakin Skywalker',
    avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg', 
    nick:'@dart_vader',
    date:'~  26 febr',
    text:'WTF? Who is Ray? Why she is Skywalker? Luke...?',
    image:'https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale',
    likes:4,
    comments:4,
    reposts:4

}
const Joda = {
    author:'Joda',
    avatar: 'https://upload.wikimedia.org/wikipedia/ru/9/96/CGIYoda.jpg', 
    nick:'@joda'
}
const Chewbacca = {
    author:'Chewbacca',
    avatar: 'https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png/revision/latest/top-crop/width/720/height/900?cb=20190830144754', 
    nick:'@chewbacca'
}

export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case CHANGE_TEXT: return {...state, text: action.payload}
        case CHANGE_IMAGE: return {...state, image: action.payload}
        case CHANGE_AUTHOR: 
            switch(action.payload){
                case 'Anakin Skywalker' : return {
                    ...state,
                    avatar: initialState.avatar,
                    author: action.payload,
                    nick: initialState.nick
                }
                case 'Joda' : return {
                    ...state,
                    avatar: Joda.avatar,
                    author: action.payload,
                    nick: Joda.nick
                }
                case 'Chewbacca' : return {
                    ...state,
                    avatar: Chewbacca.avatar,
                    author: action.payload,
                    nick: Chewbacca.nick
                }
            }
        case CHANGE_LIKE: return {...state, likes: action.payload}
        case CHANGE_REPOST: return {...state, reposts: action.payload}
        case CHANGE_COMMENT: return {...state, comments: action.payload}
        
    }
    return state;
}