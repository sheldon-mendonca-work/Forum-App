import { useContext } from 'react';
import './RightSideBar.css'
import { ForumContext } from '../../contexts/ForumContext';

const RightSideBar = (props) => {
    const { className } = props;
    const { dispatchForum } = useContext(ForumContext);

    const SortByDiv = () => {
        return <div className='rightsidebar-box'>
                <h2 className='rightsidebar-heading2'>Sort By</h2>
                <div>
                    <div className="rightsidebar-btn" onClick={()=>dispatchForum({type:'SORT_BY UPVOTES'})}>Upvotes</div>
                    <div className="rightsidebar-btn" onClick={()=>dispatchForum({type:'SORT_BY DATE'})}>date</div>
                </div>
            </div>
    }

    return <div className={className}>
        <div className="rightsidebar-content">
            <SortByDiv />
        </div>
    </div>
}

export default RightSideBar;