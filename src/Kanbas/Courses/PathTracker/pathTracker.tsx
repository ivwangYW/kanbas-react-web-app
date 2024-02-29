import React from 'react';
import { useLocation } from 'react-router-dom';
import {links} from "../../commonData"
import "../index.css";
import { courses } from "../../Database";
import { useParams } from "react-router-dom";





function PathTracker() {
    //for getting current course nav of the page
    const {pathname} = useLocation(); //pathname is a prop
    const url = pathname;

    //for getting current coures of the page
    const {courseId} = useParams();  //coureID is a prop-based on previous path rout :coureId from parent page
    const course = courses.find((course) => course._id === courseId);

    function checkUrlContainString (url:string, links:string[]):string {
         // Find the first string in the links array that is included in the URL
    // If no match is found, return an empty string ""
        return links.find(link => url.includes(link)) || "";
    };
    
    
    return (
        <>

            <nav className="custom-breadcrumb-css" aria-label="breadcrumb">		
                <ol className="breadcrumb font-size-top-bar float-start">
                    <li className="breadcrumb-item "> Course {course?.name}</li>	
                    <li className="text-secondary " id="divider"> {' >'}</li>
                    <li className="breadcrumb-item" id="courseNav">{checkUrlContainString(url,links)}</li>		
                    		
                </ol>
            </nav>
        </>
    );
}

export default PathTracker
