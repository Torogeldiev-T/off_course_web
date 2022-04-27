import React from "react";

const Info = ({ profile }) => {
    return (
        <div className="flex flex-row">
            <div className="flex flex-col w-1/2">
                {Object.keys(profile).map(
                    (key, index) =>
                        !Array.isArray(profile[key]) && (
                            <div
                                key={index}
                                className="w-full border-b-[3px] p-3 relative"
                            >
                                <b className="align-middle ">{key}</b>
                                <div className="inline absolute left-32 w-full">
                                    <span className="align-middle">
                                        {profile[key]}
                                    </span>
                                </div>
                            </div>
                        )
                )}
            </div>
            {/* <div className="flex flex-col w-full ">
                {Object.keys(profile).map(
                    (key, index) =>
                        !Array.isArray(profile[key]) && (
                            <div
                                key={index}
                                className="w-full border-b-[3px] p-3 text-gray-600"
                            >
                                {profile[key]}
                            </div>
                        )
                )}
            </div> */}
        </div>
    );
};

export default Info;
