import { useContext } from "react";
import { BookmarkIcon, CommentIcon, RemoveBookmarkIcon, ShareIcon } from "../../Icons";
import './PostActionBar.css';
import { ForumContext } from "../../../contexts/ForumContext";
import { useNavigate } from "react-router-dom";

const PostActionBar = (props) => {
    const { post, className } = props;
    const { dispatchForum } = useContext(ForumContext);
    const navigate = useNavigate();

    const onCommentClick = (event, post) => {
        event.stopPropagation();
        navigate(`/post/${post.postId}`);
    }

    const onBookmarkClick = (event, post) => {
        event.stopPropagation();
        console.log(post)
        dispatchForum({type: 'BOOKMARK_POST', value: post});
    }


    return <div className={className}>
        <span onClick={(event)=>onCommentClick(event, post)} className="postaction-link postaction-comment">
            <CommentIcon className="postaction-svg"/>
            <span className="postaction-desc">{post.comments.length}</span>
        </span>
        
        <span onClick={(event)=>onBookmarkClick(event, post.postId)} className="postaction-link">
            {
                post.isBookmarked ?
                <RemoveBookmarkIcon className="postaction-svg postaction-removebookmark"/>
                :
                <BookmarkIcon className="postaction-svg postaction-addbookmark"/>
            }
        </span>

        <span className="postaction-link">
            <ShareIcon  className="postaction-svg"/>
        </span>
    </div>
}

export default PostActionBar;