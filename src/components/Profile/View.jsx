import React from "react";
import { Button } from "@mui/material";

const View = ({ profile }) => {
    return (
        <div className="flex flex-wrap flex-col gap-1 items-center p-4 px-4 sm:px-16 bg-white ">
            <div className="rounded-full mb-4 w-24 h-24 bg-red-600">
                <img src="" alt="" />
            </div>
            <span className="text-xl font-bold text-violet-700">
                {profile["Full name"]}
            </span>
            <span className="text-sm text-gray-600">{profile["Status"]}</span>
            <span className="text-sm text-gray-600">
                {profile["University"]}
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
    );
};

export default View;
