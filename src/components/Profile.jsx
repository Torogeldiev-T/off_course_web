import React, { useContext, useState } from "react";
import {Context} from '../App';
import {LinearProgress} from '@mui/material';

const Profile = () => {

    const {profile} = useContext(Context)

    const [currentPage, setCurrentPage] = useState("about")

    return (
        <div className="flex p-4 pb-16 mt-16 bg-pink-100 w-full">
            <div className="flex flex-wrap w-4/5">
                <div className="w-full h-40 bg-teal-100"></div>

                <div className="flex flex-wrap bg-white w-full p-6 pb-12">
                    <div className="profile-header flex w-full">
                        <div className="rounded-full w-28 h-28 -mt-16 bg-red-400"></div>
                        <div className="mx-6 flex flex-col">
                            <span className="text-xl font-bold">{profile.name}</span>
                            <span className="text-sm text-gray-500">
                                {profile.about}
                            </span>
                        </div>

                        <div className="flex flex-row ml-auto">
                            <span>Contacts</span>
                        </div>
                    </div>

                    <div className="mt-12  bg-slate-100 w-full rounded-xl p-4">
                        <div>
                            <div className="mb-8 m-2 flex flex-row gap-5">
                                <span className={`text-xl cursor-pointer ${currentPage === "about" ? "text-violet-700 border-b-2 border-b-violet-700 " : "text-gray-700"} `} onClick={() => setCurrentPage("about")}> About Me </span>
                                <span className={`text-xl cursor-pointer ${currentPage === "courses" ? "text-violet-700 border-b-2 border-b-violet-700 " : "text-gray-700"} `} onClick={() => setCurrentPage("courses")}> Courses Progress </span>
                                <span className={`text-xl cursor-pointer ${currentPage === "edit" ? "text-violet-700 border-b-2 border-b-violet-700 " : "text-gray-700"} `} onClick={() => setCurrentPage("edit")}> Edit </span>
                            </div>
                            <div>
                            {
                                profile.courses.map( (course, index) => (
                                    <div key={index} className="flex flex-col m-2 my-4 rounded-lg border bg-white shadow-md p-2">
                                        <div className="flex flex-col justify-between gap-4"> 
                                            <span className="text-fuchsia-900 font-bold"> {course.name} </span>
                                            <div className="w-full flex flex-col">
                                                <div className="font-bold ml-auto"> {course.completed + '%'} </div>
                                                <LinearProgress color="success" variant="determinate" value={course.completed} />
                                            </div>
                                        </div>
                                        <span className="text-xs text-gray-400">by {course.creator}</span>
                                    </div>
                                ))
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
