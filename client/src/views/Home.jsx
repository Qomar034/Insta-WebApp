import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import StoryCard from "../components/StoryCard";
import { fetchPosts } from "../stores/actions/actionCreator";

let data = [
    {
        username: "dummy1",
        profileUrl: "https://picsum.photos/200?random=1",
        postUrl: "https://picsum.photos/500/700?random=1",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        likes: 1500,
        commentsCount: 50,


    },
    {
        username: "dummy2",
        profileUrl: "https://picsum.photos/200?random=2",
        postUrl: "https://picsum.photos/500/500?random=2",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        likes: 1500,
        commentsCount: 50,


    },
    {
        username: "dummy3",
        profileUrl: "https://picsum.photos/200?random=3",
        postUrl: "https://picsum.photos/300/400?random=3",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        likes: 1500,
        commentsCount: 50,


    },
    {
        username: "dummy4",
        profileUrl: "https://picsum.photos/200?random=4",
        postUrl: "https://picsum.photos/400/600?random=4",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        likes: 1500,
        commentsCount: 50,


    },
    {
        username: "dummy5",
        profileUrl: "https://picsum.photos/200?random=5",
        postUrl: "https://picsum.photos/500/500?random=5",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        likes: 1500,
        commentsCount: 50,


    },
    {
        username: "dummy6",
        profileUrl: "https://picsum.photos/200?random=6",
        postUrl: "https://picsum.photos/500/700?random=6",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        likes: 1500,
        commentsCount: 50,


    },
    {
        username: "dummy7",
        profileUrl: "https://picsum.photos/200?random=7",
        postUrl: "https://picsum.photos/500/700?random=7",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        likes: 1500,
        commentsCount: 50,


    },
    {
        username: "dummy8",
        profileUrl: "https://picsum.photos/200?random=8",
        postUrl: "https://picsum.photos/500/700?random=8",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        likes: 1500,
        commentsCount: 50,


    },
    {
        username: "dummy9",
        profileUrl: "https://picsum.photos/200?random=9",
        postUrl: "https://picsum.photos/500/700?random=9",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        likes: 1500,
        commentsCount: 50,


    },
]

let stories = [
    {
        url: "https://picsum.photos/200?random=1",
        username: "stories1"
    },
    {
        url: "https://picsum.photos/200?random=2",
        username: "stories2"
    },
    {
        url: "https://picsum.photos/200?random=3",
        username: "stories3"
    },
    {
        url: "https://picsum.photos/200?random=4",
        username: "stories4"
    },
    {
        url: "https://picsum.photos/200?random=5",
        username: "stories5"
    },
    {
        url: "https://picsum.photos/200?random=6",
        username: "stories6"
    },
    {
        url: "https://picsum.photos/200?random=7",
        username: "stories7"
    },
    {
        url: "https://picsum.photos/200?random=8",
        username: "stories8"
    },
]

export default function Home(){
    // let dispatch = useDispatch()
    // let {feeds} = useSelector((state) => state.post)

    // useEffect(() => {
    //     dispatch(fetchPosts())
    //     .finally(_ => {
    //         setLoad(false)
    //     })
    //     console.log(feeds);
    // }, [load])

    let [feeds, setFeeds] = useState([])
    let [load, setLoad] = useState(true)

    const fetchFeed = async () => {
        try {
            let {data} =  await axios.get(`http://localhost:3000/post`)
            setFeeds(data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchFeed().finally(_ => setLoad(false))
    }, [])

    if (!load) return (
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