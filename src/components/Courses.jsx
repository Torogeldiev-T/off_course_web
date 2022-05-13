import React, { useContext, useState } from "react";
import { Context } from "../App";
import { MenuItem, Select, TextField , FormControl, InputLabel, Box} from "@mui/material";

const Courses = () => {
    
    const { courses } = useContext(Context);

    const [filter, setFilter] = useState("");

    const handleChange = (event) => {
        setFilter(event.target.value);
    };

    return (
        <div className="flex flex-row p-8 w-full mt-[56px] bg-gray-200">
            <div className="w-full lg:w-5/6 xl:w-4/6">

                <TextField
                    label="Search here..."
                    variant="outlined"
                    autoComplete="off"
                    className="w-full"
                />

                <Box sx={{ maxWidth: 160, marginTop: 2 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
                        <Select
                            value={filter}
                            defaultValue={"relevance"}
                            label="Sort by"
                            onChange={handleChange}
                        >
                            <MenuItem value={"relevance"}>Relevance</MenuItem>
                            <MenuItem value={"rating"}>Rating</MenuItem>
                            <MenuItem value={"date"}>Date</MenuItem>
                            <MenuItem value={"participants"}>Participants</MenuItem>
                        </Select>
                    </FormControl>
                    </Box>

                <h1 className="text-3xl text-violet-700 font-bold mt-4">
                    My courses
                </h1>

                {/* <div className="flex flex-row gap-6 my-4 text-lg text-gray-600">
                    <span>All</span>
                    <span>Active</span>
                    <span>Upcoming</span>
                    <span>Completed</span>
                </div> */}

                <div className="flex flex-wrap flex-col ">
                    {courses.map((course, i) => (
                        <div
                            key={i}
                            className="flex flex-wrap md:flex-nowrap justify-center sm:justify-start p-4 my-2   bg-white rounded-xl"
                        >
                            <div className="shrink-0 hover:scale-[99%] transition-transform cursor-pointer">
                                <img
                                    className="rounded-lg"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKzYAA2Jo90klh6UsESnov-7HsbZI8new1Novf-w2FhiH8OLIuxAQGVftQBWwEnT1KBno&usqp=CAU"
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-col mx-5 my-3">
                                <div className="text-2xl font-bold cursor-pointer">
                                    {" "}
                                    {course.name}{" "}
                                </div>

                                <div className="my-2 text-base text-gray-800">
                                    {course.info}
                                </div>

                                <div className="mt-auto text-base text-gray-500">
                                    {"by "}
                                    {course.creator}{" "}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* <div className="m-4 w-1/3 hidden lg:flex flex-wrap flex-col">
                <div className="text-xl text-violet-600 font-bold mt-12">
                    Most popular courses
                </div>
                <div className="flex flex-wrap flex-col mt-8 mx-2">
                    {courses.map((course, i) => (
                        <div key={i} className="bg-white rounded p-2 my-2 text-lg hover:underline underline-offset-1">
                            <div className="">   
                                {course.name}
                            </div>
                            <div className="text-sm text-gray-400 m-1">   
                                {"by "}{course.creator}
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}
        </div>
    );
};

export default Courses;
