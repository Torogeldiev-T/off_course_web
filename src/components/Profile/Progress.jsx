import React, { useEffect, useState } from "react";
import { LinearProgress , Button} from "@mui/material";

const Progress = ({ courses }) => {
    const temp = courses.slice(0, 2);
    const [clippedCourses, setSlippedCourses] = useState([...temp]);


    useEffect(() => {
        console.log(temp)
    }, [])
    
    return (
        <div className="flex flex-col gap-2">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                {clippedCourses.map((course, index) => (
                    <div
                        key={index}
                        className="flex flex-col rounded-lg  border bg-white shadow-md p-2"
                    >
                        <div className="flex flex-col justify-between gap-4">
                            <div className="flex flex-row items-center">
                                <span className="text-fuchsia-900 font-bold">
                                    {course.name}
                                </span>
                                <span className="text-sm text-blue-500 ml-auto">
                                    Progress status
                                </span>
                            </div>
                            <div className="w-full flex flex-col">
                                <div className="font-bold ml-auto">
                                    {course.completed + "%"}
                                </div>
                                <LinearProgress
                                    color="success"
                                    variant="determinate"
                                    value={course.completed}
                                />
                            </div>
                        </div>
                        <span className="text-xs text-gray-400">
                            by {course.creator}
                        </span>
                    </div>
                ))}
            </div>

            <div className="ml-auto">
                <Button className="text-blue-500" onClick={() => setSlippedCourses([...courses])}>See all</Button>
            </div>
        </div>
    );
};

export default Progress;
