import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import CourseData from "./fakeData/CourseData";
import Courses from "./Components/Courses/Courses";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";
import Header from "./Components/Header/Header";


function App() {
  let totalCost = 0;
  const [course, setCourse] = useState(CourseData);
  const [totalEnrolled, setTotalEnrolled] = useState([]);

  const enrollHandler = (enrolled) => {
    let newEnrolled = [...totalEnrolled, enrolled];
    setTotalEnrolled(newEnrolled);
  }
  totalEnrolled.map((data) => {
    totalCost = totalCost + data.price;
  });
  return (
    <div className="fullPage">
        <div className="header">
          <Header/>  
        </div>
        <h2 className="title text-center text-dark">
          *Explore our schools to find your perfect program 
        </h2>
        <h4 className="course-name">
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>Bootstrap</li>
                <li>Javascript</li>
                <li>Advance Javascript</li>
                <li>React</li>
                <li>Jquery</li>
                <li>Python</li>
                <li>PHP</li>
            </ul>
        </h4>
      <div className="course-container">
          <div className="course-details">
              {
                course.map((course) => {
                  return (
                    <Courses
                      key={course.id}
                      course={course}
                      enrollHandler={enrollHandler}
                    />
                  );
                })
              }
          </div>

          <div className="cart">
              <Cart totalCost={totalCost} totalEnrolled={totalEnrolled} />
          </div>
        </div>
    </div>
  );
}

export default App;
