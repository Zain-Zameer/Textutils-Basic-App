
import './App.css';


let input = document.getElementById('takeInput');
let upperButton = document.getElementById('upperCase');
let lowerButton = document.getElementById('lowerCase');
let countSpacesButton = document.getElementById('countSpace');
let valuesCountButton = document.getElementById('countValues');
let output = document.getElementById('Output');
let clearButton = document.getElementById('clear');
upperButton.addEventListener('click',function(){
  let text = input.value; 
  output.value = text.toUpperCase();
  
})

clearButton.addEventListener('click',function(){
  input.value = "";
  output.value="";
})
lowerButton.addEventListener('click',function(){
  let text = input.value;
  output.value = text.toLowerCase();
})

valuesCountButton.addEventListener('click',function(){
  let text = input.value; 
  output.value = text.length;
  
})

countSpacesButton.addEventListener('click',function(){
  let text = input.value;
  let spaceCount = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      spaceCount++;
    }
  }
  output.value = spaceCount;
})

function App() {
  return (
   <>
    <div className="TitleContainer">
      <h1 className="titleHeading">Text Utils</h1>
      <br />
      <p className="titlePara">From this site you can make your text uppercase,<br></br>lowercase,count spaces and count values</p>
    </div>
    <br /><br />

    <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Enter your text" aria-label="Example text with button addon" aria-describedby="button-addon1" id='takeInput'/>
  </div>

  <div className="TitleContainer">
      <h4 className="actionsHeading">Following are the actions you can perform for free</h4>
    </div>

    <div className="TitleContainer">
    <button type="button" className="btn btn-primary" id='upperCase'>Upper Case</button>
    <button type="button" className="btn btn-primary" id='lowerCase'>Lower Case</button>
    <button type="button" className="btn btn-primary" id='countSpace'>Count Space</button>
    <button type="button" className="btn btn-primary" id='countValues'>Count Values</button><br />

    <button type="button" className="btn btn-primary" id='clear'>Clear</button><br />
    
    </div>
    <br />
    <div className="input-group mb-3">
    <textarea className="form-control" placeholder = "Output"id="Output" rows="2"></textarea>
  </div>
   </>
  );
}

export default App;
