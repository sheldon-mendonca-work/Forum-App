import { BookmarkIcon,  LikeIcon, RemoveBookmarkIcon, ShareIcon } from "../../Icons";
import './PostActionBar.css';

const CommentActionBar = (props) => {
    const { post, className } = props;

    const onLikeClick = (event, post) => {
        event.stopPropagation();
        dispatchEvent({type: 'UPVOTE_COMMENT', value: post.postId});
    }

    const onBookmarkClick = (event, post) => {
        event.stopPropagation();
    }


    return <div className={className}>
        <span onClick={(event)=>onLikeClick(event, post)} className="postaction-link postaction-comment">
            <LikeIcon className="postaction-svg"/>
            
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

export default CommentActionBar;