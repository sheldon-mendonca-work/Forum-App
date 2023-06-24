import { useNavigate } from "react-router-dom";
import PostActionBar from "../PostActionBar/PostActionBar";
import './PostCard.css';
import dayjs from "dayjs";
import { DownvoteIcon, UpvoteIcon } from "../../Icons";

var relativeTime = require('dayjs/plugin/relativeTime');

const PostCard = (props) => {
    const { post } = props;
    // console.log(post);

    const navigate = useNavigate();

    dayjs.extend(relativeTime);

    const postClickHandler = () => {
        
        navigate(`/post/${post.postId}`);
    }

    const upvoteHandler = (event) => {
        event.stopPropagation();
        dispatchEvent({type: 'UPVOTE_POST', value: post.postId});
    }

    const downvoteHandler = (event) => {
        event.stopPropagation();
        dispatchEvent({type: 'DOWNVOTE_POST', value: post.postId});
    }
    
    return <div className="postcard" onClick={postClickHandler}>
        <div className="postcard-upvotediv" style={{cursor:"pointer"}} >
            <span><UpvoteIcon className="voted-icon" onClick={upvoteHandler}/></span>
            <span>{post.upvotes-post.downvotes}</span>
            <span><DownvoteIcon className="voted-icon" onClick={downvoteHandler}/></span>
        </div>
        <div className="postcard-userdetails">
            <div className="postcard-imgdiv" style={{cursor:"pointer"}} >
                <img src={post.picUrl} alt={post.name} className="postcard-img" />
            </div>
            <div style={{cursor:"pointer"}} className="postcard-user">
                
                <span className="postcard-displayName">{post.name}</span>
                <span className="postcard-username">@{post.username}</span>
                <span className="postcard-time">{dayjs(post.createdAt).fromNow()}</span>
            </div>
        </div>
        <div className="postcard-postTitle">{post.post}</div>
        <div className="postcard-postTags">
            {post.tags.map((tag, index) => <span className="postcard-postTag" key={index}>{tag}</span>)}
            </div>
        <div className="postcard-userpost">
            <div className="postcard-postDec">{post.postDescription}</div>
                        
        </div>
        <PostActionBar className="postcard-postaction" post={post}/>
        
    </div>
}

export default PostCard;