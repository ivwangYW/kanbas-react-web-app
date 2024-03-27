import React, {useState} from "react";
import { Link } from "react-router-dom";
import {courses} from "../Database/";
import { SlNote } from "react-icons/sl";
import "./style.css";
function Dashboard() {
    const [_courses,setCourses] = useState(courses);
    const [course, setCourse] = useState({
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "/images/reactjs.jpg"
        });
    const addNewCourse = () =>{
        const newCourse = {
            ...course,_id: new Date().getTime().toString()};
            setCourses([...courses,{...course,...newCourse}]);
        };
    const deleteCourse =(courseId:string) => {setCourses(courses.filter((course)=> course._id !== courseId));};
return (

<div className="p-4">
<h1>Dashboard</h1> <hr />
<h5>Course</h5>
<input value={course.name} className="form-control m-4 mx-auto" style={{ width: '400px' }}
onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
<input value={course.number} className="form-control m-4 mx-auto" style={{ width: '400px' }}
onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
<input value={course.startDate} className="form-control m-4 mx-auto" style={{ width: '400px' }} type="date"
onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
<input value={course.endDate} className="form-control m-4 mx-auto" style={{ width: '400px' }} type="date"
onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
<button className= "btn m-button-add" onClick={addNewCourse} >
Add
</button>
<h2>Published Courses (12)</h2> <hr />
<div className="row m-4">
<div className="row row-cols-1 row-cols-md-5 g-4">
{_courses.map((course) => (
<div key={course._id} className="col" style={{ width: 300 }}>
<div className="card shadow p-0 mb-5 bg-white rounded ">
<img src={`./images/${course.image}`} alt={"course"} className="card-img-top m-0"
 style={{ height: 150 }}/>
<div className="card-body">
    
<Link className="card-title " to={`/Kanbas/Courses/${course._id}/Home`}
style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
{course.name}
</Link>

<p className="card-text">{course.name}</p>
<Link to={`/Kanbas/Courses/${course._id}/Home`} className="text-black  float-start">
<SlNote size={20} color="gray"/></Link>
<div className="float-end d-flex m-button"> 
    <button className ="btn " onClick={(event) => {
    event.preventDefault();
    setCourse(course);
    }}>
    Edit
    </button>
    <button className ="btn" onClick={(event) => {
    event.preventDefault();
    deleteCourse(course._id);
    }}>
    Delete
    </button>
</div>
</div>
</div>
</div>
))}
</div>
</div>
</div>
);
}
export default Dashboard;