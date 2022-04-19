import React, { useContext } from "react";
import { Context } from "../App";

const Courses = () => {
    const { courses } = useContext(Context);
    return (
        <div className="">
            
            <div className="flex flex-wrap flex-col m-8 mt-24">
                {courses.map((course, i) => (
                    <div key={i} className=" m-2">
                        <div className="text-lg">
                            {" "}
                            <b>Course name:</b> {course.name}{" "}
                        </div>
                        <div className="text-lg">
                            {" "}
                            Course creator: {course.creator}{" "}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Courses;
