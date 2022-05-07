import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../App";
import { Button, LinearProgress } from "@mui/material";
import Progress from "./Progress";
import Info from "./Info";
import { getUserProfile } from "../../api/profile";

const Profile = () => {
    // const {profile} = useContext(Context)
    const { user } = useContext(Context);

    const [userData, setUserData] = useState({});
    const [profileState, setProfileState] = useState("about");

    useEffect(() => {
        getUserProfile(user.id).then(({ args }) => setUserData(args));
    }, []);

    return (
        <div className="flex flex-row flex-wrap lg:flex-nowrap gap-4 p-4 sm:pr-12 mt-16 bg-gray-200 w-full">
            <div className="flex flex-col gap-4 w-full sm:w-auto">
                <div className="flex flex-wrap flex-col gap-1 items-center p-4 px-4 sm:px-16 bg-white ">
                    <div className="rounded-full mb-4 w-24 h-24 bg-red-600">
                        <img src="" alt="" />
                    </div>
                    <span className="text-xl font-bold text-violet-700">
                        {userData["Full name"]}
                    </span>
                    <span className="text-sm text-gray-600">
                        {userData["Status"]}
                    </span>
                    <span className="text-sm text-gray-600">
                        {userData["University"]}
                    </span>

                    <div className="flex flex-row gap-2 mt-3">
                        <Button variant="contained" size="small">
                            Follow
                        </Button>
                        <Button variant="outlined" size="small">
                            Message
                        </Button>
                    </div>
                </div>
                <div className="p-2 bg-white"></div>
            </div>

            <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-col gap-2 p-4  bg-white">
                    {Object.keys(userData).map(
                        (key, index) =>
                            !Array.isArray(userData[key]) && (
                                <div
                                    key={index}
                                    className="w-full flex border-b-2 p-2"
                                >
                                    <span className="align-middle text-sm font-semibold mr-4">{key}</span>
                                    <span className="mx-auto text-gray-500">{userData[key]}</span>
                                </div>
                            )
                    )}
                    <div className="mr-auto mt-4">
                        <Button variant="contained" size="small">Edit</Button>
                    </div>
                </div>
                <Progress courses={userData.courses || []}/>
            </div>
        </div>
    );
};

export default Profile;
