import './PostCard.css';
import dayjs from "dayjs";
import CommentActionBar from "../PostActionBar/CommentActionBar";

var relativeTime = require('dayjs/plugin/relativeTime');

const CommentCard = (props) => {
    const { post, parentUser } = props;

    dayjs.extend(relativeTime);

    
    
    return <div className="postcard">
        <div className="postcard-upvotediv" style={{cursor:"pointer"}} >
            <img src={post.picUrl} alt={post.name} className="postcard-img" />
        </div>
        <div className="postcard-userdetails">
            
            <div style={{cursor:"pointer"}} className="postcard-user">
                
                <span className="postcard-displayName">{post.name}</span>
                <span className="postcard-username">@{post.username}</span>
                <span className="postcard-time">{dayjs(post.createdAt).fromNow()}</span>
            </div>
        </div>
        <div className="postcard-commentTitle">replying to @{parentUser}</div>
        <div className="postcard-postTags">
            {post.comment}
        </div>
        
        <CommentActionBar className="postcard-postaction" post={post}/>
        
    </div>
}

export default CommentCard;