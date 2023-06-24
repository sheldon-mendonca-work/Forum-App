import { useNavigate } from "react-router-dom";
import PostActionBar from "../PostActionBar/PostActionBar";
import './PostCard.css';
import dayjs from "dayjs";
import { DownvoteIcon, UpvoteIcon } from "../../Icons";
import { useContext } from "react";
import { ForumContext } from "../../../contexts/ForumContext";

var relativeTime = require('dayjs/plugin/relativeTime');

const PostCard = (props) => {
    const { post } = props;
    const { dispatchForum } = useContext(ForumContext);
    // console.log(post);

    const navigate = useNavigate();

    dayjs.extend(relativeTime);

    const postClickHandler = () => {
        
        navigate(`/post/${post.postId}`);
    }

    const upvoteHandler = (event) => {
        event.stopPropagation();
        dispatchForum({type: 'UPVOTE_POST', value: post.postId});
    }

    const downvoteHandler = (event) => {
        event.stopPropagation();
        dispatchForum({type: 'DOWNVOTE_POST', value: post.postId});
    }
    
    return <div className="postcard" >
        <div className="postcard-upvotediv" style={{cursor:"pointer"}} >
            <span onClick={upvoteHandler}><UpvoteIcon className="voted-icon" /></span>
            <span>{post.upvotes-post.downvotes}</span>
            <span onClick={downvoteHandler}><DownvoteIcon className="voted-icon" /></span>
        </div>
        <div className="postcard-userdetails" onClick={postClickHandler}>
            <div className="postcard-imgdiv" style={{cursor:"pointer"}} >
                <img src={post.picUrl} alt={post.name} className="postcard-img" />
            </div>
            <div style={{cursor:"pointer"}} className="postcard-user">
                
                <span className="postcard-displayName">{post.name}</span>
                <span className="postcard-username">@{post.username}</span>
                <span className="postcard-time">{dayjs(post.createdAt).fromNow()}</span>
            </div>
        </div>
        <div className="postcard-postTitle" onClick={postClickHandler}>{post.post}</div>
        <div className="postcard-postTags" onClick={postClickHandler}>
            {post.tags.map((tag, index) => <span className="postcard-postTag" key={index}>{tag}</span>)}
            </div>
        <div className="postcard-userpost" onClick={postClickHandler}>
            <div className="postcard-postDec">{post.postDescription}</div>
                        
        </div>
        <PostActionBar className="postcard-postaction" post={post}/>
        
    </div>
}

export default PostCard;