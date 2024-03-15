import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database/";
import { SlNote } from "react-icons/sl";
import "./style.css";
function Dashboard() {
return (
<div className="p-4">
<h1>Dashboard</h1> <hr />
<h2>Published Courses (12)</h2> <hr />
<div className="row m-4">
<div className="row row-cols-1 row-cols-md-5 g-4">
{courses.map((course) => (
<div key={course._id} className="col" style={{ width: 300 }}>
<div className="card shadow p-3 mb-5 bg-white rounded">
<img src={`./images/${course.image}`} alt={"course"} className="card-img-top"
style={{ height: 150 }}/>
<div className="card-body">
<Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
{course.name} </Link>
<p className="card-text">{course.name}</p>
<Link to={`/Kanbas/Courses/${course._id}/Home`} className="text-black  float-start">
<SlNote size={20} color="gray"/></Link>
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