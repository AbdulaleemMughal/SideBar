import React, { useCallback, useEffect, useRef, useState } from "react";

const User = () => {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef =useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcddefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "1234567890";
    if(charAllowed) str += "!@#$%^&^*";

    for(let i = 0; i < length; i++){
      const index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current.select()
  };
 
  return (
    <>
    <div className="w-full max-w-md mx-40 shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-500">
      <h1 className="text-white text-center my-3 text-3xl">Password Generator</h1>
      <div className="flex shadow rounded-lg  mb-4 overflow-hidden">
        <input
          type="text"
          className="w-full outline-none py-1 px-3"
          value={password}
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button onClick={copyPassword} className="outline-none bg-blue-700 py-0.5 px-3 text-white shrink-0">Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input 
          type="range" 
          min={8}
          max={20}
          className="cursor-pointer"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="length">Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input 
          type="checkbox"
          className=""
          defaultChecked={numberAllowed}
          onChange={() => {
            setNumberAllowed(!numberAllowed);
          }}
          />
          <label htmlFor="number">Number</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input 
          type="checkbox"
          className=""
          defaultChecked={charAllowed}
          onChange={() => {
            setCharAllowed(!charAllowed);
          }}
          />
          <label htmlFor="charInput">Character</label>
        </div>
      </div>
    </div>
    </>
  );
};

export default User;
