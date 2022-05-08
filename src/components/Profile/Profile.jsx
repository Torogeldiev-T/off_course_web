import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../App";
import { Button, LinearProgress } from "@mui/material";
import Progress from "./Progress";
import View from "./View";
import { getUserProfile } from "../../api/profile";
import Info from './Info';

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
                <View profile={userData}/>
                <div className="p-2 bg-white"></div>
            </div>

            <div className="flex flex-col gap-4 w-full">
                <Info profile={userData}/>
                <Progress courses={userData.courses || []}/>
            </div>
        </div>
    );
};

export default Profile;
