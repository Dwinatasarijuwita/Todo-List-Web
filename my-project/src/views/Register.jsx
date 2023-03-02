import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../stores/actionCreators/users";

const Register = () => {
  const input = {
    name: "",
    phoneNumber: "",
    email: "",
    username: "",
    password: "",
  };

  const [values, setValues] = useState(input);

  const dispatcher = useDispatch();
  const movePage = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log(value);
  };

  const handleRegsiter = async (event) => {
    event.preventDefault();
    try {
      dispatcher(register(values));
      movePage("login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section>
      <div className="bg-white h-screen text-black py-12">
        <div className="container mx-auto flex flex-col md:flex-row my-6 md:my-24">
          <div className="flex flex-col w-full lg:w-1/3 p-8 ml-[50px]">
            <p className="ml-6 text-yellow-300 text-lg uppercase tracking-loose">
              Register
            </p>
            <p className="text-3xl md:text-5xl my-4 leading-relaxed md:leading-snug">
              To Do List!
            </p>
            <p className="text-sm md:text-base leading-snug text-black text-opacity-100">
              Please provide your valuable feedback and something something ...
            </p>
          </div>
          <div className="flex flex-col w-full lg:w-2/3 justify-center">
            <div className="container w-full px-4">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                    <div className="flex-auto p-5 lg:p-10">
                      <h4 className="text-2xl mb-4 text-black font-semibold">
                        New Account?
                      </h4>
                      <form id="feedbackForm" onSubmit={handleRegsiter}>
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            for="name"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value={values.name}
                            id="name"
                            className="border-0 px-3 py-3 rounded text-sm shadow w-full
                    bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400"
                            placeholder=" "
                            style={{ transition: "all 0.15s ease 0s" }}
                            required
                          />
                        </div>
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            for="phoneNumber"
                          >
                            Phone Number
                          </label>
                          <input
                            type="text"
                            name="phoneNumber"
                            onChange={handleChange}
                            value={values.phoneNumber}
                            id="phoneNumber"
                            className="border-0 px-3 py-3 rounded text-sm shadow w-full
                    bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400"
                            placeholder=" "
                            style={{ transition: "all 0.15s ease 0s" }}
                            required
                          />
                        </div>
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            for="email"
                          >
                            Email
                          </label>
                          <input
                            type="text"
                            name="email"
                            onChange={handleChange}
                            value={values.email}
                            id="email"
                            className="border-0 px-3 py-3 rounded text-sm shadow w-full
                  bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400"
                            placeholder=" "
                            style={{ transition: "all 0.15s ease 0s" }}
                            required
                          />
                        </div>
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            for="username"
                          >
                            Username
                          </label>
                          <input
                            type="text"
                            name="username"
                            onChange={handleChange}
                            value={values.username}
                            id="username"
                            className="border-0 px-3 py-3 rounded text-sm shadow w-full
                bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400"
                            placeholder=" "
                            style={{ transition: "all 0.15s ease 0s" }}
                            required
                          />
                        </div>
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            for="password"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            value={values.password}
                            id="password"
                            className="border-0 px-3 py-3 rounded text-sm shadow w-full
                  bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400"
                            placeholder=" "
                            style={{ transition: "all 0.15s ease 0s" }}
                            required
                          />
                        </div>
                        <div className="text-center mt-6">
                          <button
                            id="feedbackBtn"
                            className="bg-yellow-300 text-black text-center mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                            type="submit"
                            style={{ transition: "all 0.15s ease 0s" }}
                          >
                            Submit
                          </button>
                        </div>
                        <p className="text-center font-extrabold">
                          have an account?{" "}
                          <Link
                            to={"/login"}
                            className="text-red-500 hover:underline"
                          >
                            Login
                          </Link>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
