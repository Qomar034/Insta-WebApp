export default function PhotoProfile({ link, story, width }) {
  return story ? (
    <div style={{ width: (width + 2), height: (width + 2) }}
      className="rounded-full aspect-square justify-center items-center flex
                    bg-gradient-to-r from-red-500 to-yellow-500
                    hover:from-blue-500 hover:to-green-500"
    >
      <img
        src={link}
        className="rounded-full aspect-square border-2 border-white"
        style={{ width: width, height: width }}
      />
    </div>
  ) : (
    <div
      className="rounded-full w-auto h-auto aspect-square justify-center items-center flex">
      <img
        src={link}
        className="rounded-full aspect-square border-2 border-white"
        style={{ width: width, height: width }}
      />
    </div>
  );
}
