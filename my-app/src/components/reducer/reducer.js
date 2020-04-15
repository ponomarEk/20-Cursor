import { ADD_DATA, CHANGE_LIKE, CHANGE_REPOST, CHANGE_COMMENT } from '../../App'

const initialState={
    data:[
        {
            author:'Anakin Skywalker',
            avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg', 
            nick:'@dart_vader',
            date:' 26.02.2019',
            text:'WTF? Who is Ray? Why she is Skywalker? ...?',
            image:'https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale',
            likes:4,
            comments:4,
            reposts:4

        }
    ]
}
const Anakin = {
    author:'Anakin Skywalker',
    avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg', 
    nick:'@dart_vader',
    date: (new Date).toLocaleDateString(),
    likes:4,
    comments:4,
    reposts:4

}
const Joda = {
    author:'Joda',
    avatar: 'https://upload.wikimedia.org/wikipedia/ru/9/96/CGIYoda.jpg', 
    nick:'@joda',
    date: (new Date).toLocaleDateString(),
    likes:4,
    comments:4,
    reposts:4

}
const Chewbacca = {
    author:'Chewbacca',
    avatar: 'https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png/revision/latest/top-crop/width/720/height/900?cb=20190830144754', 
    nick:'@chewbacca',
    date: (new Date).toLocaleDateString(),
    likes:4,
    comments:4,
    reposts:4
}

export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_DATA:
            switch(action.payload.author){
                case 'Anakin Skywalker' : 
                    action.payload.avatar=Anakin.avatar;
                    action.payload.nick=Anakin.nick;
                    action.payload.date=Anakin.date;
                    action.payload.likes=Anakin.likes;
                    action.payload.comments=Anakin.comments;
                    action.payload.reposts=Anakin.reposts;
                    state.data.push(action.payload); 
                    return {...state }

                case 'Joda' : 
                    action.payload.avatar=Joda.avatar;
                    action.payload.nick=Joda.nick;
                    action.payload.date=Joda.date;
                    action.payload.likes=Joda.likes;
                    action.payload.comments=Joda.comments;
                    action.payload.reposts=Joda.reposts;
                    state.data.push(action.payload); 
                    return {...state }

                case 'Chewbacca' : 
                    action.payload.avatar=Chewbacca.avatar;
                    action.payload.nick=Chewbacca.nick;
                    action.payload.date=Chewbacca.date;
                    action.payload.likes=Chewbacca.likes;
                    action.payload.comments=Chewbacca.comments;
                    action.payload.reposts=Chewbacca.reposts;
                    state.data.push(action.payload); 
                    return {...state }
            }
        case CHANGE_LIKE:
            state.data[action.payload[1]].likes=action.payload[0];
            return {...state}

        case CHANGE_REPOST: 
            state.data[action.payload[1]].reposts=action.payload[0];
            return {...state}
        case CHANGE_COMMENT:
            state.data[action.payload[1]].comments=action.payload[0];
            return {...state}        
    }
    return state;
}