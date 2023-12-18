
import "./RollDice.css";

function RollDice({ dice, generateRandomNumber}) {
  const images = [
    "one.png",
    "two.png",
    "three.png",
    "four.png",
    "five.png",
    "six.png",
  ];

  return (
    <>
      <div className="flex items-center">
        <div className="main flex flex-row-reverse gap-5 w-full items-center justify-between p-5 rounded-2xl">
          <div className="h-20">
            <img
              className="h-full"
              src={`./src/Projects/RollDice/images/${images[dice - 1]}`}

            />
          </div>
          <div className="asd">
            <button
              className="rounded-xl border px-5 py-2 bg-white text-emerald-900 font-semibold hover:text-white hover:bg-emerald-950 hover:border-none"
              onClick={generateRandomNumber}
            >
              Roll Dice
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RollDice;
