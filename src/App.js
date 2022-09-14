import React,{useState,useEffect} from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Table from "./components/Table";
import Alert from "./components/Alert";
import TypeHead from "./components/TypeHead";

function App() {
  
  const [input, setinput] = useState("");
  const [searchSubmit, setSearchSubmit] = useState(false);
  const [result, setResult] = useState();
  const [alert, setalert] = useState(false);
  const [typeHead, setTypeHead] = useState(null);
  const [selectedTypeHead, setSelectedTypeHead] = useState("");

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://jsonplaceholder.typicode.com/comments?q=${input}`, true); 
    xhr.onreadystatechange = function () { 
      if (xhr.readyState === 4 ) { 
              if (xhr.status === 200 ) {
                   setResult(JSON.parse(xhr.responseText)); 
              } else { 
                console.log("Error: " + xhr.status); 
              } 
          } 
    }; 
    xhr.send(null);
    console.log(result);
  }, [searchSubmit]);

  useEffect(() => {
    async function fetchTypeHead() {
      const response = await fetch(`https://api.datamuse.com/sug?s=${input}`);
      const data = await response.json();
      if(input !== "" && input !== selectedTypeHead){
        setTypeHead(data);
      } else {
        setTypeHead(null);
      }
  }
  fetchTypeHead();
  }, [input]);
  
  useEffect(()=>{
    setinput(selectedTypeHead);
    setTypeHead(null);
  },[selectedTypeHead])

  const handleInput = insertedInput => {
    setinput(insertedInput);
    setSearchSubmit(false);
  }

  const handleSearch = () => {
    if(input.length <= 3){
      setalert(true);
    } else {
      setalert(false);
      setSearchSubmit(true);
    }
  }

  const handleSelectTypeHead = (selected) =>{
    setSelectedTypeHead(selected.word);
  }

  return (
    <div>
      <div className="my-10 flex justify-center">
        <div>
          <h1 className="text-3xl font-bold mb-5 text-center">Search Pro</h1>
          <form onSubmit={(e)=>e.preventDefault()}>
            <Input handleInput={handleInput} value={input} placeholder="Search" id="SearchInput"/>
            <Button onClick={handleSearch} role="searchSubmit" css=" bg-blue-600 hover:shadow-lg text-white rounded-md h-11 w-20 md:w-14 mt-2 md:mt-0 block m-auto md:inline"/>
          </form>
          {typeHead !== null && <TypeHead content={typeHead} handleSelectTypeHead={handleSelectTypeHead}/>}
          {alert && <Alert role="alert" text="Input should be longer than 3 characters!"/>}
        </div>
      </div>
      <div className="flex justify-center">
        {searchSubmit && <Table data={result} />}
      </div>
    </div>
  );
}

export default App;
