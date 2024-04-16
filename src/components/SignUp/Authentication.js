import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { saveTokenId, signUpUser } from "../../store/AuthSlice";

const Authentication = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const cPasswordRef = useRef(null);
  const dispatch = useDispatch();
  const signUpUser = async () => {
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC7sVHD3PsWo_Lma3A_MJKwkcCo-BjiFm8",
        {
          method: "POST",
          body: JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(await response.json);
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error.message);
      }
      dispatch(saveTokenId(data.idToken));
      console.log("User is Succesfully logged In");
    } catch (err) {
      alert(err);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (passwordRef.current.value === cPasswordRef.current.value) {
      signUpUser();
    } else {
      alert("Check password");
    }
  };
  return (
    <div className="flex flex-col justify-center items-center bg-[#f5f5f5] h-screen w-80 mx-auto">
      <form
        className="bg-white p-4 pb-6 w-full text-center "
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl mt-2 mb-6 ">Sign up</h1>
        <div className="relative my-4">
          <input
            id="email"
            type="email"
            className="border p-2 w-full rounded-lg focus:outline-none  focus:border-b-2 transition-colors peer "
            ref={emailRef}
            required
          />
          <label
            htmlFor="email"
            className="absolute left-2 top-2 cursor-text text-gray-600 z-10 bg-white peer-focus:text-xs peer-focus:-top-2 peer-focus:text-purple-400 transition-all duration-300"
          >
            Email
          </label>
        </div>
        <div className="relative my-4">
          <input
            id="password"
            type="password"
            className="border p-2 w-full rounded-lg focus:outline-none  focus:border-b-2 transition-colors peer "
            ref={passwordRef}
            required
          />
          <label
            htmlFor="password"
            className="absolute left-2 top-2 cursor-text text-gray-600 z-10 bg-white peer-focus:text-xs peer-focus:-top-2 peer-focus:text-purple-400 transition-all duration-300"
          >
            Password
          </label>
        </div>
        <div className="relative my-4">
          <input
            id="cpassword"
            type="password"
            className="border p-2 w-full rounded-lg focus:outline-none  focus:border-b-2 transition-colors peer "
            ref={cPasswordRef}
            required
          />
          <label
            htmlFor="cpassword"
            className="absolute left-2 top-2 cursor-text text-gray-600 z-10 bg-white peer-focus:text-xs peer-focus:-top-2 peer-focus:text-purple-400 transition-all duration-300"
          >
            Confirm password
          </label>
        </div>
        <button className="w-full bg-blue-400 rounded-full text-white p-2">
          Sign Up
        </button>
      </form>
      <div className="my-4 bg-slate-200 py-2 w-full text-center rounded-lg border-2 border-gray-400">
        Have An Account? Login
      </div>
    </div>
  );
};

export default Authentication;
