import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addTasks } from "../stores/actionCreators/tasks";
const AddForm = () => {
  const input = {
    name: "",
    category: "",
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

  const handleAdd = async (event) => {
    event.preventDefault();
    try {
      dispatcher(addTasks(values));
      movePage("/list");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section>
      <div class="bg-white text-white">
        <div class="container mx-auto flex-col md:flex-row my-6 md:my-24 flex justify-center">
          <div class="flex flex-col  lg:w-2/3 justify-center">
            <div class="container w-full px-4">
              <div class="flex flex-wrap justify-center">
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                    <div class="flex-auto p-5 lg:p-10">
                      <h4 class="text-2xl mb-4 text-black font-semibold">
                        Have a new tasks?
                      </h4>
                      <form id="feedbackForm" onSubmit={handleAdd}>
                        <div class="relative w-full mb-3">
                          <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
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
                            class="border-0 px-3 py-3 rounded text-sm shadow w-full
                    bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400"
                            placeholder=" "
                            style={{ transition: "all 0.15s ease 0s" }}
                            required
                          />
                        </div>
                        <div class="relative w-full mb-3">
                          <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                            for="category"
                          >
                            Category
                          </label>
                          <input
                            maxlength="300"
                            name="category"
                            onChange={handleChange}
                            value={values.category}
                            id="category"
                            rows="4"
                            cols="80"
                            class="border-0 px-3 py-3 bg-gray-300 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full"
                            placeholder=""
                            required
                          ></input>
                        </div>
                        <div class="text-center mt-6">
                          <button
                            id="feedbackBtn"
                            class="bg-yellow-300 text-black text-center mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
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

export default AddForm;
