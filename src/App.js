import { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState();
  const [input2, setInput2] = useState();
  const [result, setResult] = useState();

  function arrayLength(args) {
    return args.length;
  }

  // console.log(arrayLength([1, 2, 3, 5, 6, 7]));

  function findItemInArray(array, item) {
    return array.indexOf(item);
  }

  // console.log(findItemInArray([1, 2, 3, 4, 5], 4));

  function replaceItemInArray(array, replace, newItem) {
    return array.map((item) => {
      if (item === replace) {
        return (item = newItem);
      }
      return item;
    });
  }

  // console.log(replaceItemInArray([1, 2, 3, 4, 5, 3], 3, 9));

  function mergeArrays(array1, array2) {
    return array1.concat(array2);
  }

  // console.log(mergeArrays([1, 2, 3], [5, 6, 7]));

  function findItemAtIndex(string, index) {
    return string[index];
  }

  // console.log(findItemAtIndex("Neogcamp", 4));

  function compareDates(date1, date2) {
    console.log(date1 > date2);
    if (date1 > date2) {
      return date2;
    }
    return date1;
  }

  function cipher(string, inc) {
    let encrypt = "";
    for (let i = 0; i < string.length; ++i) {
      encrypt += String.fromCharCode(
        string[i].charCodeAt() + inc
      );
    }
    return encrypt;
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="container">
        <h3>Which date comes first?</h3>
        <label>Date 1: </label>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="date"></input>
        <label>Date 2: </label>
        <input
          onChange={(e) => setInput2(e.target.value)}
          type="date"></input>
        <button
          onClick={() =>
            setResult(compareDates(input, input2))
          }>
          Check
        </button>
        <p>{result}</p>
      </div>
      <div className="container">
        <h3>Encrypt String</h3>
        <input
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your string"
        />
        <input
          onChange={(e) =>
            setInput2(parseInt(e.target.value))
          }
          type="number"
          placeholder="Enter number"
        />
        <button
          onClick={() => setResult(cipher(input, input2))}>
          Encrypt Data
        </button>
        <p>{result}</p>
      </div>
    </div>
  );
}
