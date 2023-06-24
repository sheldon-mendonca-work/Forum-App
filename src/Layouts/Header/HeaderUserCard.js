import { useContext } from 'react';
import './HeaderUserCard.css';
import { ForumContext } from '../../contexts/ForumContext';

const HeaderUserCard = (props) => {
    
    const { forumState } = useContext(ForumContext);
    const { forumList } = forumState;

    return <div className="header-user-card"  >
            <span className="header-user-card-content">
                <div className="header-user-card-img">
                    <img src={forumList.picUrl} alt={forumList.name}/>
                </div>
                <div className="header-user-card-name">
                    <span className="header-user-card-displayName">{forumList.name}</span>
                    <span className="header-user-card-userName">@{forumList.username}</span>
                </div>
            </span>
        </div>
    
}

export default HeaderUserCard;