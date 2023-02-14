import React from "react";

export default function PostCard({data}) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div className="m-1 border rounded" onClick={() => setShowModal(true)}>
        <div className="flex flex-row gap-2 m-2 justify-start items-center">
          <div
            className="rounded-full w-12 h-12 aspect-square justify-center items-center flex
                  bg-gradient-to-r from-red-500 to-yellow-500
                  hover:from-blue-500 hover:to-green-500"
          >
            <img
              src={data.profileUrl}
              className="rounded-full aspect-square border-2 border-white"
              style={{ width: "44px", height: "44px" }}
            />
          </div>
          <p className="text-md">{data.username}</p>
        </div>
        <div>
          <img
            src={data.postUrl}
            className="h-auto" style={{width: "550px"}}
          />
        </div>
        <div className="flex flex-row justify-between my-2 mx-3">
          <div className="flex flex-row justify-between items-center gap-3 w-auto ">
            <img
              src={"love.png"}
              alt="Like Icon"
              className="aspect-square"
              style={{ width: "22px", height: "22px" }}
            />

            <img
              src={"comment.png"}
              alt="Comment Icon"
              className="w-5 h-5 aspect-square"
            />

            <img
              src={"sent.png"}
              alt="Sent Icon"
              className="w-5 h-5 aspect-square"
            />
          </div>
          <div>
            <img
              src={"save.png"}
              alt="Sent Icon"
              className="w-5 h-5 aspect-square"
            />
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
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
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
