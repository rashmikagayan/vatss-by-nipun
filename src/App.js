import BottomNavigation from 'reactjs-bottom-navigation'
import {Component, React} from 'react';
import { Button, Image} from 'react-bootstrap';
import carImg from '../src/car.png'
import 'reactjs-bottom-navigation/dist/index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './firebase'
import { getDatabase, ref, set, update } from "firebase/database";
import './App.css';
import ReactSwipeButton from 'react-swipe-button'

const database = getDatabase();

class App extends Component {
  render (){
    return (
      <div className="App">
        <div className='container'>
          <br />
            <h4>Vehicle Anti-Theft Security System</h4>
            <h6 className="text-danger">by 19sea060</h6>
              <Image src={carImg} style={{ height:150, }}></Image>
              <div className="d-flex justify-content-around mt-4">
                <div className="vehicle-details">
                  <p>Vehicle Model :</p>
                  <p>Vehicle Number :</p>
                  <p>Color :</p>
                  <p>Owner :</p>
                </div>
                <div className="vehicle-details text-center">
                  <p id="car_model">Audi A6</p>
                  <p id="car_plate">CRX-5544</p>
                  <p id="car_color">Red</p>
                  <p id="car_owner">N T Nawarathne</p>
                </div>
              </div>
              <br />
              <div className="row">
              <ReactSwipeButton text='SWIPE TO STOP' color='#f00' onSuccess={stopCar} id="stop_btn" text_unlocked='CAR STOPPED'/>
              <div className="d-flex justify-content-around mt-5">
                <Button onClick={reset} className="btn btn-primary rounded-circle" style={{ width:80, height:80 }} variant="primary">Reset</Button>
                <Button onClick={startSiren} className="btn btn-danger rounded-circle" style={{ width:80, height:80 }} variant="primary">Siren</Button>
                <Button onClick={captureImage} className="btn btn-success rounded-circle" style={{ width:80, height:80 }} variant="primary">Camera</Button>
              </div>
              </div>
              <BottomNavigation 
                items={bottomNavItems}
                defaultSelected={0}
                onItemClick={(item) => console.log(item)}
              />
        </div>
      </div>
    );
  }
}
const bottomNavItems = [
  {
    title: 'Home',
  },
  {
    title: 'Location',
  },
  {
    title: 'Profile',
  },
]
function stopCar() {update(ref(database, 'actions/'), {stop: true, }); }
function startSiren() { update(ref(database, 'actions/'), {siren: true, });}
function captureImage() { update(ref(database, 'actions/'), {captureImage: true, });}
function reset() {
  update(ref(database, 'actions/'), {captureImage: false, stop: false, siren: false,});
  new ReactSwipeButton().setState({slideStatus: false});
  // window.location.reload(false);
}
export default App;
