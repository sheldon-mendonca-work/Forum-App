import Header from '../Header/Header';
import './BoilerPlate.css';
import RightSideBar from '../RightSideBar/RightSideBar';


const BoilerPlate = ({children, className}) => {

    return <div className={`boilerPlate ${className}`}>
        <Header className={'header'}/>
        <main className={'mainContent'}>
            {children}
        </main>
        <RightSideBar className={'rightsidebar'}/>
    </div>
};

export default BoilerPlate;