import './App.css'
import crewmates from './assets/crewmates.png'
import spaceship from './assets/spaceship.png'
import SideNav from './components/SideNav'

function App() {
  

  return (
    <div>
      <SideNav />
      <div className="whole-page">
        <div>
          <div className="home-page">
            <h1>Welcome to the Crewmate Creators!</h1>
            <h3>
              Here is where you can create your very own set of crewmates before sending them off into space!
            </h3>
            <img src={crewmates} alt="Group of colorful cartoon astronauts"  className='welcome-images'/>
            <br />
            <img src={spaceship} alt="Small spaceship"  className='welcome-images'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
