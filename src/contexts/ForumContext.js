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
        
        case 'SORT_BY UPVOTES':
            return {...prevState, sortPosts: true};

        case 'SORT_BY DATE':
            return {...prevState, sortPosts: false};

        case 'UPVOTE_POST':
            
            const oldForumList = prevState.forumList.posts;
            oldForumList.find(({postId}) => postId === value).upvotes++;
            return {...prevState, forumList: {...prevState.forumList, posts: oldForumList}};

        case 'DOWNVOTE_POST':
            const oldForumList2 = prevState.forumList.posts;
            oldForumList2.find(({postId}) => postId === value).downvotes++;
            
            return {...prevState, forumList: {...prevState.forumList, posts: oldForumList2}};

        case 'BOOKMARK_POST':
            const oldForumList3 = prevState.forumList.posts;
            oldForumList3.find(({postId}) => postId === value).isBookmarked = !(oldForumList3.find(({postId}) => postId === value).isBookmarked);
            
            return {...prevState, forumList: {...prevState.forumList, posts: oldForumList3}};

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