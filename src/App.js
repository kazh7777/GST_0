import './App.css';
import Modal from './modal';
import Dashboard from './dashboard';


function App() {
  return (
    <>
      <div>
      
        <div className = 'dashboardDiv'>
          <Dashboard></Dashboard>
        </div>
        <div className='Modal'>
          <Modal></Modal>
        </div >
      </div>
    </>
  );
}


export default App;
