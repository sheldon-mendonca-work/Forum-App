import { useContext } from 'react';
import BoilerPlate from '../../../Layouts/DefaultBoilerPlate/BoilerPlate';
import './HomePage.css'
import { ForumContext } from '../../../contexts/ForumContext';
import PostCard from '../../Cards/CommentCard/PostCard';

// productList
// searchProduct

const HomePage = () => {

    const { forumState } = useContext(ForumContext);
    const { forumList, sortPosts } = forumState;
    const { posts } = forumList;
    
    const getPosts = () => {
        let sendPosts = posts;
        sendPosts = sortPosts ? sendPosts.sort((a,b) => (
            (a.upvotes-a.downvotes) < ((b.upvotes-b.downvotes))
            )) : sendPosts.sort((a,b) => (a.createdAt < b.createdAt));
        return sendPosts;
    }
    
    return <BoilerPlate>
        <h2>{sortPosts ? "Most Upvoted" : "Latest Posts"}</h2>
        {
            posts.length > 0 && getPosts().map(post => (
                <PostCard post={post} key={post.postId} />
            ))
        }
    </BoilerPlate>
}

export default HomePage;

