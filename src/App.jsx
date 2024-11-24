import { useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [messg, setMessg] = useState("");

  const reload = () => {
    window.location.reload();
  };
  const calculateBMI = (event) => {
    event.preventDefault();
    const weightInKg = parseFloat(weight);
    const heightInMeters = parseFloat(height) / 100;
    if (height == 0 || weight == 0) {
      alert("please enter valid weight and height value");
    } else {
      let bmi = weightInKg / heightInMeters ** 2;
      setBmi(bmi.toFixed(1));

      if (bmi < 18.5) {
        setMessg("You are Underweight");
      }
      if (bmi < 25 && bmi > 18.5) {
        setMessg("You are Healthy");
      }
      if (bmi < 30 && bmi > 25) {
        setMessg("You are Overweight");
      }
    }
  };
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen ">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-blue-700 text-center mb-4">
          BODY MASS INDEX (BMI) CALCULATOR
        </h1>
        <p className="text-center text-gray-600 mb-6">FIND YOUR BMI</p>
        <form onSubmit={calculateBMI}>
          <div className="mb-4">
            <label
              htmlFor="height"
              className="block text-sm font-medium text-gray-700"
            >
              *Height (in cm)
            </label>
            <div className="flex items-center">
              <input
                type="number"
                id="height"
                placeholder="Enter your Height"
                className="mt-1 flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={height}
                onChange={(event) => {
                  setHeight(event.target.value);
                }}
              />
              <span className="ml-2 text-gray-500">cm</span>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="weight"
              className="block text-sm font-medium text-gray-700"
            >
              *Weight (in kgs)
            </label>
            <div className="flex items-center">
              <input
                type="number"
                id="weight"
                placeholder="Enter your Weight"
                className="mt-1 flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={weight}
                onChange={(event) => {
                  setWeight(event.target.value);
                }}
              />
              <span className="ml-2 text-gray-500">Kg</span>
            </div>
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Calculate
            </button>
            <button
              type="reset"
              className="bg-gray-600 text-white py-2 px-4 rounded-md shadow hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
              onClick={reload}
            >
              Reload
            </button>
          </div>
        </form>
        <div className="text-center">
          {bmi && <p className="text-gray font-bold text-lg">Your BMI:{bmi}</p>}
          {messg === "You are Healthy" ? (
            <p className="text-lg text-green-600 font-bold">{messg}</p>
          ) : (
            <p className="text-lg text-red-600 font-bold">{messg}</p>
          )}
       
     {  bmi &&<div className="border border-gray-600  mt-4 shadow-md bg-blue-100">
     <span className="text-lg font-bold  text-green-600 "> Healthy BMI range: </span>  
     <span className="text-lg font-extralight text-gray-600">18 kg/m2 - 25 kg/m2</span>
     </div>}
          
        </div>

      </div>
    </div>
  );
}

export default App;
