import React from 'react';
import './Courses.css'

const Courses = (props) => {
    const {img, title, description, price, rating} = props.course
    return (
        <div className="single-course">
           <div>
           <img src={img} alt=""/>
                <h4 className="course-title">{title}</h4>
                <p className="course-description">{description}</p>
                <h5>{rating}</h5>
           </div>
            <div>
                <h5 className="course-price">Price: ${price}</h5>
                <button 
                onClick={()=>props.enrollHandler(props.course)}
                className="btn btn-sm btn-dark">Enroll now</button>
            </div>
        </div>
    );
};

export default Courses;