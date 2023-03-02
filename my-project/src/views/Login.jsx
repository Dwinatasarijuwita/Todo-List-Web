import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../stores/actionCreators/users";
import TodoList from "../assets/Todo.png";

const Login = () => {
  const input = {
    email: "",
    password: "",
  };
  const [values, setValues] = useState(input);
  // const [password, setPassword] = useState('')
  // const {admin} = useSelector((state) => state.admin)

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

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await dispatcher(login(values));
      movePage("/list");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section>
      <div className="bg-white h-screen text-black py-12">
        <div className="container mx-auto flex flex-col md:flex-row my-6 md:my-24">
          <div className="flex flex-col w-full lg:w-1/3 p-8 ml-[50px]">
            <p className="text-8xl my-4 leading-relaxed md:leading-snug">
              To Do List!
            </p>
            <img src={TodoList} />
          </div>
          <div className="flex flex-col w-full lg:w-2/3 justify-center">
            <div className="container w-full px-4">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                    <div className="flex-auto p-5 lg:p-10">
                      <h4 className="text-2xl mb-4 text-black font-semibold">
                        Please Login Your Account
                      </h4>
                      <form id="feedbackForm" onSubmit={handleLogin}>
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

export default Login;
