import React, { useContext, useState } from "react";
import {Context} from '../../App';
import {LinearProgress} from '@mui/material';
import Progress from "./Progress";
import Info from "./Info";

const Profile = () => {

    const {profile} = useContext(Context)

    const [profileState, setProfileState] = useState("about")

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
                                <span className={`text-xl cursor-pointer ${profileState === "about" ? "text-violet-700 border-b-2 border-b-violet-700 " : "text-gray-700"} `} onClick={() => setProfileState("about")}> About Me </span>
                                <span className={`text-xl cursor-pointer ${profileState === "courses" ? "text-violet-700 border-b-2 border-b-violet-700 " : "text-gray-700"} `} onClick={() => setProfileState("courses")}> Courses Progress </span>
                                <span className={`text-xl cursor-pointer ${profileState === "edit" ? "text-violet-700 border-b-2 border-b-violet-700 " : "text-gray-700"} `} onClick={() => setProfileState("edit")}> Edit </span>
                            </div>
                            
                            {
                                profileState === "about" && <Info profile={profile} /> ||
                                profileState === "courses" && <Progress courses={profile.courses} /> ||
                                profileState === "edit" && <Progress courses={profile.courses} />

                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
