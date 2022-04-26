import React from "react";

const Info = ({ profile }) => {
    return (
        <div className="flex flex-col gap-4">

            <div>
                <span className="m-2 text-lg font-bold "> Interests </span>
                <div className="flex flex-row">
                    {profile.interests.map((item, i) => (
                        <div key={i} className="p-1 px-2 m-2 text-white bg-blue-400 rounded-full">
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <span className="m-2 text-lg font-bold"> Institution & Department </span>
                <div className="m-2 text-gray-600"> <b>{profile.university},</b> {profile.department} </div>
            </div>

            <div className="m-2 text-lg">
                Location: <b>{profile.location}</b>
            </div>

        </div>
    );
};

export default Info;
