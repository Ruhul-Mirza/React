import { useState } from "react";

function BgChanger() {
  const [color, setColor] = useState("dodgerblue");

  return (
    <div
      className="w-full h-screen ease-in-out duration-300"
      style={{ backgroundColor: color }}
    >
      <span className="text-white block m-auto bg-transparent border-2 border-white text-center w-fit relative top-40 p-5 text-xl font-bold rounded-2xl">Background Color Changer</span>
      <div className="fixed bottom-10 px-2 flex flex-wrap justify-center inset-x-0">
        <div className="flex flex-wrap justify-center gap-3 shadow-2xl bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            style={{ backgroundColor: "red" }}
            className="p-4 outline-none rounded-full text-white shadow-xl"
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            style={{ backgroundColor: "green" }}
            className="p-4 outline-none rounded-full text-white shadow-xl"
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            style={{ backgroundColor: "blue" }}
            className="p-4 outline-none rounded-full text-white shadow-xl"
          >
            Blue
          </button>
          <button
            onClick={() => setColor("orange")}
            style={{ backgroundColor: "orange" }}
            className="p-4 outline-none rounded-full text-white shadow-xl"
          >
            Orange
          </button>
          <button
            onClick={() => setColor("olive")}
            style={{ backgroundColor: "olive" }}
            className="p-4 outline-none rounded-full text-white shadow-xl"
          >
            Olive
          </button>
          <button
            onClick={() => setColor("black")}
            style={{ backgroundColor: "black" }}
            className="p-4 outline-none rounded-full text-white shadow-xl"
          >
            Black
          </button>
          <button
            onClick={() => setColor("brown")}
            style={{ backgroundColor: "brown" }}
            className="p-4 outline-none rounded-full text-white shadow-xl"
          >
            Brown
          </button>
        </div>
      </div>
    </div>
  );
}

export default BgChanger;
