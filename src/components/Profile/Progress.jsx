import React from "react";
import {LinearProgress} from '@mui/material';

const Progress = ({ courses }) => {
    return (
        <div>
            {courses.map((course, index) => (
                <div
                    key={index}
                    className="flex flex-col m-2 my-4 rounded-lg border bg-white shadow-md p-2"
                >
                    <div className="flex flex-col justify-between gap-4">
                        <span className="text-fuchsia-900 font-bold">
                            {" "}
                            {course.name}{" "}
                        </span>
                        <div className="w-full flex flex-col">
                            <div className="font-bold ml-auto">
                                {" "}
                                {course.completed + "%"}{" "}
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
    );
};

export default Progress;
