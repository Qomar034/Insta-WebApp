import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import StoryCard from "../components/StoryCard";
import { fetchPosts, fetchStories, } from "../stores/actions/actionCreator";

export default function Home(){
    let dispatch = useDispatch()
    let {feeds} = useSelector((state) => state.post)
    let {stories} = useSelector((state) => state.story)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    useEffect(() => {
        dispatch(fetchStories())
    }, [])

    if (feeds && feeds.length !== 0 && stories && stories.length !== 0) return (
        <div className="w-full flex justify-center items-center flex-col">
            <div className="flex gap-5">
                <div className="fixed left-0">
                    <Navbar/>

                </div>
                <div className="flex justify-center items-center flex-col" style={{width: "1000px"}}>
                    <div className="flex flex-col w-full h-auto my-10">
                        <div className="flex flex-row h-auto overflow-auto gap-5">
                            <StoryCard data={stories[0]}/>
                            <StoryCard data={stories[1]}/>
                            <StoryCard data={stories[2]}/>
                            <StoryCard data={stories[3]}/>
                            <StoryCard data={stories[4]}/>
                            <StoryCard data={stories[5]}/>
                            <StoryCard data={stories[6]}/>
                        </div>
                    </div>
                        <div></div>
                    <div  className="flex flex-row h-auto my-10">
                        <div className="flex flex-col">
                            <PostCard data={feeds[0]}/>
                            <PostCard data={feeds[3]}/>
                            <PostCard data={feeds[6]}/>
                        </div>
                        <div className="flex flex-col">
                            <PostCard data={feeds[1]}/>
                            <PostCard data={feeds[4]}/>
                            <PostCard data={feeds[7]}/>
                        </div>
                        <div className="flex flex-col">
                            <PostCard data={feeds[2]}/>
                            <PostCard data={feeds[5]}/>
                            <PostCard data={feeds[8]}/>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}