import './App.css';
import DisplayData from './components/DisplayData';
import Upload from './components/Upload';

function App() {
  return (
   <>
   <div className='flex justify-center items-center flex-col gap-10'>
    <div className='rowApp'>
      <Upload/>
    </div>
    <div className='rowApp'>
    <DisplayData/>
    </div>
      
   </div>
   </>
  );
}

export default App;
