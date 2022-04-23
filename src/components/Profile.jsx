import React, { useContext } from "react";
import {Context} from '../App';
import {LinearProgress} from '@mui/material';

const Profile = () => {

    const {courses} = useContext(Context)

    return (
        <div className="flex p-4 pb-16 mt-16 bg-pink-100 w-full">
            <div className="flex flex-wrap w-4/5">
                <div className="w-full h-40 bg-teal-100"></div>

                <div className="flex flex-wrap bg-white w-full p-6 pb-12">
                    <div className="profile-header flex w-full">
                        <div className="rounded-full w-28 h-28 -mt-16 bg-red-400"></div>
                        <div className="mx-6 flex flex-col">
                            <span className="text-xl font-bold">John Doe</span>
                            <span className="text-sm text-gray-500">
                                Overcoming failures
                            </span>
                        </div>

                        <div className="flex flex-row ml-auto">
                            <span>Contacts</span>
                        </div>
                    </div>

                    <div className="mt-12 bg-slate-100 rounded-xl p-4">
                        <div>
                            <span className="text-xl text-violet-700 font-bold m-2"> Courses Progress </span>
                            <div>
                            {
                                courses.map( (course, index) => (
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
