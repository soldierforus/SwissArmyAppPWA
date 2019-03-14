import React from 'react'
import './Workout.css'

const Workout = () => {
  //   const showCardio = () => {
  //     document.getElementsByClassName('cardio').style.visibility = 'show'
  // }
  return (
    <div id="Workout">
      <h1>Workout Tracker</h1>
      <div>
        <h2> Exercises</h2>
        <form>
          <select>
            <option value="Cardio">Cardio</option>
            <option value="Strength">Sets</option>
            <option value="Stretching">Weight</option>
            <option value="Rest">Rest</option>
            <option value="Other">Other</option>
          </select>
          <div className="cardio">
            <h3>Cardio</h3>
            Distance in miles: <input type="text" name="distance" />
            <br />
            Time: <input type="text" name="time" />
            <br />
          </div>
          <div className="strength">
            <h3>Strength</h3>
            Sets: <input type="text" name="sets" />
            <br />
            Reps: <input type="text" name="reps" />
            <br />
            Weight <input type="text" name="weight" />
            <br />
          </div>
          <div className="stretch">
            <h3>Stretches</h3>
            Type of stretch: <input type="text" name="stretch" />
            <br />
            Duration of stretch: <input type="text" name="stretchTime" />
            <br />
          </div>
          <div className="rest">
            <h3>Rest</h3>
            Hours of rest: <input type="text" name="distance" />
            <br />
          </div>
          <div className="other">
            <h3>Other</h3>
            Name of exercise to add
            <input type="text" name="" />
            <br />
            Type of measurement to add
            <input type="text" name="" />
            <br />
            Number of exercises performed
            <input type="text" name="" />
            <br />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Workout

// import React, { Component } from 'react'
// import './Workout.css'

// // class Workout extends Component {
// //   // state = {
// //   //   data: [],
// //   // }

// //   // Code is invoked after the component is mounted/inserted into the DOM tree. Setting the value of result.data to the property data on that object litral being passed as the first property to setState

// //   render() {
// //     return (
// //       <div id="Workout">
// //         <h1>Weather</h1>
// //         <p>Weather will go here</p>
// //       </div>
// //     )
// //   }
// // }
// // export default Workout
