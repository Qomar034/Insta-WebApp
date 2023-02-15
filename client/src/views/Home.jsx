import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import StoryCard from "../components/StoryCard";
import { fetchPosts, fetchStories, } from "../stores/actions/actionCreator";

let user = {
    username: "Marqofy",
    photoUrl: "https://picsum.photos/200?random=99"
}

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
                <div className="fixed left-0 w-auto">
                    <Navbar user={user}/>
                </div>
                <div className="flex justify-center items-center flex-col" style={{width: "1000px"}}>
                    <div className="flex flex-col w-full h-auto my-10">
                        <div className=" flex justify-between items-center">
                            <p className="text-xl font-semibold">Stories For You</p>
                            <p className="text-sm">view all</p>
                        </div>
                        <div className="flex flex-row h-auto overflow-auto gap-4 py-5 border rounded">
                            {stories.map(el => <StoryCard data={el}/> )}
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-center">
                        <p className="text-xl font-semibold">Recent Feeds</p>
                    </div>
                    <div className="flex flex-row h-auto my-5">
                        <div className="flex flex-col">
                            {feeds.map((el, i) => (i % 3 == 0 ? <PostCard data={el}/> : null) )}
                        </div>
                        <div className="flex flex-col">
                            {feeds.map((el, i) => ((i-1) % 3 == 0 ? <PostCard data={el}/> : null) )}
                        </div>
                        <div className="flex flex-col">
                            {feeds.map((el, i) => ((i-2) % 3 == 0 ? <PostCard data={el}/> : null) )}
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}