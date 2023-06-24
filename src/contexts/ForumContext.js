import { createContext, useEffect, useReducer } from "react";
import { forumData } from "../backend/database";

export const ForumContext = createContext();

const initDatabase = forumData;

//sort Posts = true: by Upvote, false: by date

const initialState = {
    forumList: initDatabase,
    sortPosts: true
};

const forumReducer = ( prevState, {type, value} ) => {
    switch (type) {
        case 'SET_INITIAL_STATE':
            return {...prevState, ...initialState};

        case 'SET_FORUM_LIST':
            return {...prevState, forumList: value};

        case 'UPVOTE_POST':
            return {...prevState, forumList: prevState.forumList.find(({postId}) => postId === value).upvotes++};

        case 'DOWNVOTE_POST':
            return {...prevState, forumList: prevState.forumList.find(({postId}) => postId === value).downvotes++};

        default:
            return prevState;
    }
}

export const ForumProvider = ({children}) => {
    
    const [ forumState, dispatchForum ] = useReducer(forumReducer, initialState);

    const getForumList = () => {
        dispatchForum({type: 'SET_INITIAL_STATE', value: initialState});    
    } 

    useEffect(()=>{
        getForumList();// eslint-disable-next-line
    }, [])

    return <ForumContext.Provider value={{ forumState, dispatchForum, getForumList }}>
        {children}
    </ForumContext.Provider>
};