import { useCallback, useState} from "react";
import { useRef } from "react";
import "./Password.css"

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)

  // for copy

  const copyToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,21)
    window.navigator.clipboard.writeText(password)
  },[password])

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) string += "0123456789";
    if (character) string += "!@#$%^&*()";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(char);
    }
    setPassword(pass);
  }, [length, number, character,setPassword]);
  
  function readyToGenerate(){
    passwordGenerator()
  };

  // for re-rendering
  // useEffect(()=>{
  //   readyToGenerate()
  // },[length,number,character,setPassword])

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-lg bg-white mx-auto my-5 rounded p-4 main">
        <h1 className="heading font-bold text-2xl text-center my-3">
          Password Generator :
        </h1>
        <div className="flex overflow-hidden rounded mb-5 ">
          <input
            type="text"
            className="w-full outline-none border p-2 text-lg"
            value={password}
            readOnly
            placeholder="Password"
            ref={passwordRef}
          />
          <button onClick={copyToClipboard} className="copy text-center shrink-0 px-3 py-2 font-semibold text-white">
            Copy
          </button>
        </div>
        <div className="middle">
          <input type="range" className="curson-pointer" min={8} max={20} value={length} onChange={(e)=>{setLength(e.target.value)}}/>
          <label htmlFor="" className="label mx-2">
            Length : {length}
          </label>
        </div>
        <div className="middle my-5">
          <input type="checkbox" defaultChecked={number} onChange={()=>{setNumber((prev)=>!prev)}}/>
          <label htmlFor="" className="label mx-3">
            Number
          </label>
        </div>
        <div className="middle">
        <input type="checkbox" defaultChecked={character} onChange={()=>{setChar((prev)=>!prev)}}/>
          <label htmlFor="" className="label mx-3">
            Character
          </label>
        </div>
        <div className="foot">
          <button onClick={readyToGenerate} className="generate rounded w-full mt-10 text-center px-3 py-2 font-semibold text-xl text-white">
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
