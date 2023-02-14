import React from "react";
import CommentCard from "./CommentCard";
import PhotoProfile from "./PhotoProfile";

import { useImageSize } from 'react-image-size';

let komentar = {
  username: "comment1",
  photoUrl: "https://picsum.photos/200?random=20",
  story: true,
  comment: "Great Job Buddy",
  time: "80w"
}

export default function PostCard({ data }) {
  const [showModal, setShowModal] = React.useState(false);
  const [showLikes, setShowLikes] = React.useState(false);
  const [showComments, setShowComments] = React.useState(false);

  const [photoSize, { loading, error }] = useImageSize(data.postUrl);

  let captionData = {
    username: data.username,
    photoUrl: data.profileUrl,
    story: true,
    comment: data.caption,
    time: "80w"
  }

  return (
    <>
      <div
        className="m-1 border rounded w-80"
        onClick={() => setShowModal(true)}
      >
        <div className="relative">
          <img src={data.postUrl} className="h-auto w-80 aspect-auto" />
          <div className="absolute top-0 right-0 m-1 w-5 h-5 z-10 bg-white opacity-20 hover:opacity-100 items-center justify-center flex rounded">
            <img
              src={"options.png"}
              alt="Options Icon"
              className="w-4 h-4 aspect-square opacity-30"
            />
          </div>
          <div className="absolute top-6 right-0 m-1 w-5 h-5 z-10 bg-white opacity-20 hover:opacity-100 items-center justify-center flex rounded">
            <img
              src={"save.png"}
              alt="Save Icon"
              className="w-4 h-4 aspect-square opacity-30"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between my-2 mx-2">
          <div className="flex flex-row gap-2 justify-start items-center">
            <PhotoProfile link={data.profileUrl} story={true} width={26} />
            <p className="text-sm">{data.username}</p>
          </div>
          <div className="flex flex-row justify-between items-center gap-3 w-auto ">
            <div
              className="flex flex-row items-center justify-center gap-1"
              onMouseEnter={() => setShowLikes(true)}
              onMouseLeave={() => setShowLikes(false)}
            >
              <img
                src={"love.png"}
                alt="Like Icon"
                className="aspect-square"
                style={{ width: "14px", height: "14px" }}
              />
              {showLikes ? <p className="text-xs">{data.likes}</p> : null}
            </div>

            <div
              className="flex flex-row items-center justify-center gap-1"
              onMouseEnter={() => setShowComments(true)}
              onMouseLeave={() => setShowComments(false)}
            >
              <img
                onClick={() => setShowModal(true)}
                src={"comment.png"}
                alt="Comment Icon"
                className="w-3 h-3 aspect-square"
              />

              {showComments ? (
                <p className="text-xs">{data.commentsCount}</p>
              ) : null}
            </div>

            <img
              src={"sent.png"}
              alt="Sent Icon"
              className="w-3 h-3 aspect-square hover:w-4 hover:h-4"
            />
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-6 flex flex-row">
                  <div className=" border-r border-solid border-slate-200 rounded-t p-2 mx-1 w-auto h-auto">
                    <img
                      src={data.postUrl}
                      style={{
                        height: photoSize.height,
                        width: photoSize.width,
                      }}
                    />
                    <div className="flex flex-row justify-between items-center gap-3 w-full my-2 ">
                      <div className="flex gap-4">
                        <img
                          src={"love.png"}
                          alt="Like Icon"
                          className="aspect-square"
                          style={{ width: "26px", height: "26px" }}
                        />
                        <img
                          src={"comment.png"}
                          alt="Comment Icon"
                          className="w-6 h-6 aspect-square"
                        />
                        <img
                          src={"sent.png"}
                          alt="Sent Icon"
                          className="w-6 h-6 aspect-square"
                        />
                      </div>
                      <div>
                        <img
                          src={"save.png"}
                          alt="Save Icon"
                          className="w-6 h-6 aspect-square"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="" style={{ width: 360 }}>
                    <div className="flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <div className="flex items-center justify-center gap-5 ">
                        <PhotoProfile
                          link={data.profileUrl}
                          story={true}
                          width={34}
                        />
                        <h3 className="text-md font-semibold">{data.username}</h3>
                      </div>
                      <div className="w-auto h-auto justify-center flex rounded">
                        <img
                          src={"options.png"}
                          alt="Options Icon"
                          className="w-6 h-6"
                        />
                      </div>
                    </div>

                    <div
                      className="mt-2 overflow-y-auto overflow-x-hidden w-full"
                      style={{ height: photoSize.height - 85 }}
                    >
                      <CommentCard data={captionData} type="caption" />
                      <CommentCard data={komentar} />
                      <CommentCard data={komentar} />
                      <CommentCard data={komentar} />
                      <CommentCard data={komentar} />
                      <CommentCard data={komentar} />
                      <CommentCard data={komentar} />
                      <CommentCard data={komentar} />
                      <CommentCard data={komentar} />
                      <CommentCard data={komentar} />
                      <CommentCard data={komentar} />
                    </div>
                    <div className="w-full">
                      <CommentCard form={true} data={komentar} />
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}