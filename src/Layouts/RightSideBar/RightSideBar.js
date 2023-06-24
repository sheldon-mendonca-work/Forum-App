import './RightSideBar.css'

const RightSideBar = (props) => {
    const { className } = props;

    const SortByDiv = () => {
        return <div className='rightsidebar-box'>
                <h2 className='rightsidebar-heading2'>Sort By</h2>
                <div>
                    
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