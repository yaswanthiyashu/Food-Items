import "./App.css";
import { useState } from "react";
import FormComponent from "./components/FormComponent";
import Tables from "./components/Tables";

function App() {
  const [data, setData] = useState([{ name: "Yashu", cost: 20 }]);
  const [isEditing, setIsEditing] = useState(-1);

  const [name, setName] = useState("");
  const [cost, setCost] = useState(0);

  const addElement = (item) => {
    setData([...data, item]);
  };

  const editElement = (index) => {
    console.log(data[index].name);
    console.log(data[index].cost);
    setName(data[index].name);
    setCost(data[index].cost);
    setIsEditing(index);
  };

  const deleteElement = (index) => {
    const newData = data.filter((item, i) => {
      if (index !== i) {
        return item;
      }
    });
    setData(newData);
  };

  return (
    <div className="App">
      <Tables
        data={data}
        editElement={editElement}
        deleteElement={deleteElement}
      />
      <FormComponent
        name={name}
        setName={setName}
        cost={cost}
        setCost={setCost}
        isEditing={isEditing}
        addElement={addElement}
      />
    </div>
  );
}

export default App;
