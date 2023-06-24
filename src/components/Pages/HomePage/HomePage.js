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
    
    
    return <BoilerPlate>
        <h2>{sortPosts ? "Most Upvoted" : "Latest Posts"}</h2>
        {
            posts.length > 0 && posts.map(post => (
                <PostCard post={post} key={post.postId} />
            ))
        }
    </BoilerPlate>
}

export default HomePage;

