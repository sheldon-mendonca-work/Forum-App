import { useContext } from 'react';
import BoilerPlate from '../../../Layouts/DefaultBoilerPlate/BoilerPlate';
import './SinglePost.css'
import { ForumContext } from '../../../contexts/ForumContext';
import { useNavigate, useParams } from 'react-router-dom';
import PostCard from '../../Cards/CommentCard/PostCard';
import CommentCard from '../../Cards/CommentCard/CommentCard';

// productList
// searchProduct

const SinglePost = () => {

    const { postID: currentPostID } = useParams();
    const { forumState } = useContext(ForumContext);
    const { forumList } = forumState;
    const navigate = useNavigate();
    const currentPost = forumList.posts.find(({postId}) => postId === currentPostID)
    
    return <BoilerPlate>
        <h2><span onClick={()=>navigate(-1)}>&larr;</span>Post</h2>
        {
            !currentPost && <h4>Post Not Found</h4>
        }
        {
            currentPost && <>
            <PostCard post={currentPost}/>
            {
                currentPost.comments.length > 0 && currentPost.comments.map(comment => <CommentCard post={comment} parentUser={currentPost.username}/>)
            }
            </>

        }
    </BoilerPlate>
}

export default SinglePost;

