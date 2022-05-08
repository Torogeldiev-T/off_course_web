import React from "react";
import { Button } from "@mui/material";

const Info = ({ profile }) => {
    return (
        <div className="flex flex-col gap-2 p-4  bg-white">
            {Object.keys(profile).map(
                (key, index) =>
                    !Array.isArray(profile[key]) && (
                        <div key={index} className="w-full flex border-b-2 p-2">
                            <span className="align-middle text-sm font-semibold mr-4">
                                {key}
                            </span>
                            <span className="mx-auto text-gray-500">
                                {profile[key]}
                            </span>
                        </div>
                    )
            )}
            <div className="mr-auto mt-4">
                <Button variant="contained" size="small">
                    Edit
                </Button>
            </div>
        </div>
    );
};

export default Info;
