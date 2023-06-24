import { BookmarkIcon, CommentIcon, RemoveBookmarkIcon, ShareIcon } from "../../Icons";
import './PostActionBar.css';

const PostActionBar = (props) => {
    const { post, className } = props;

    const onCommentClick = (event, post) => {
        event.stopPropagation();
    }

    const onBookmarkClick = (event, post) => {
        event.stopPropagation();
    }


    return <div className={className}>
        <span onClick={(event)=>onCommentClick(event, post)} className="postaction-link postaction-comment">
            <CommentIcon className="postaction-svg"/>
            <span className="postaction-desc">{post.comments.length}</span>
        </span>
        
        <span onClick={(event)=>onBookmarkClick(event, post._id)} className="postaction-link">
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