import './App.css';
import  ReactDOM  from 'react-dom';
import AllRoutes from './components/Routes/AllRoutes';
import Notifications from './components/Cards/Notifications/Notfications';

function App() {
  return (
    <div className="App">
      <AllRoutes />
      {
        ReactDOM.createPortal(<Notifications />,document.getElementById("toast-notification"))
      }
    </div>
  );
}

export default App;
