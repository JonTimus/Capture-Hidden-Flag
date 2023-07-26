import "./styles.css";
import TypewriterFlag from "./components/TypewriterFlag";

/**
 * Find a hidden URL within the HTML using below function
 */

// function getHiddenURL() {
//   const characters = [];
//   const ulElements = document.querySelectorAll("ul[data-tag]");

//   for (const ul of ulElements) {
//     const li = ul.querySelector("li[data-id]");
//     const div = li.querySelector("div[data-class]");
//     const span = div.querySelector("span.value");
//     const character = span.getAttribute("value");

//     characters.push(character);
//   }

//   const urlChars = characters.join("");
//   return urlChars;
// }

// const urlChars = getHiddenURL();
// console.log(urlChars);

export default function App() {
  return (
    <div className="App">
      <h1>Hidden Flag</h1>
      <TypewriterFlag />
    </div>
  );
}
