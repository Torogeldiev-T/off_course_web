import React from "react";
import { LinearProgress } from "@mui/material";

const Progress = ({ courses }) => {
    return (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            {courses.map((course, index) => (
                <div
                    key={index}
                    className="flex flex-col rounded-lg  border bg-white shadow-md p-2"
                >
                    <div className="flex flex-col justify-between gap-4">
                        <div className="flex flex-row items-center">
                            <span className="text-fuchsia-900 font-bold">
                                {course.name}
                            </span>
                            <span className="text-sm text-blue-500 ml-auto">Progress status</span>
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
    );
};

export default Progress;
