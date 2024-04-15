import { useState } from "react";
import Form from "./Form";
import Car from "./Car";
import Retry from "./Retry";

let cars = [
  {
    id: 1,
    carColor: "Blue",
    carBrand: "Toyota",
    carModel: "Corolla",
    year: 2022,
    price: 25000,
  },
  {
    id: 2,
    carColor: "Red",
    carBrand: "Honda",
    carModel: "Civic",
    year: 2021,
    price: 23000,
  },
  {
    id: 3,
    carColor: "Black",
    carBrand: "Ford",
    carModel: "Mustang",
    year: 2023,
    price: 35000,
  },
  {
    id: 4,
    carColor: "Silver",
    carBrand: "Chevrolet",
    carModel: "Cruze",
    year: 2020,
    price: 20000,
  },
  {
    id: 5,
    carColor: "White",
    carBrand: "Nissan",
    carModel: "Altima",
    year: 2022,
    price: 27000,
  },
];

let name = "Abas";

let myStyle = {
  color: "red",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Sans-Serif",
};

function App() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });

  let loggedIn = false;

  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }


  return (
    <div>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button onClick={updateColor}>update color</button>
      {
        loggedIn ? <h1>jerry you are welcome</h1> : <h1>bros login na</h1>
        // <h1>bros login na</h1>
      }

      <br />
      <br />
      <br />
      <br />

      <Retry />
      <Form  />
      <hr />
      {cars.map(car => (
        <Car
          key={car.id}
          kaki={car.carColor}
          carBrand={car.carBrand}
          carModel={car.carModel}
          year={car.year}
        />
      ))}
    </div>
  );
}

export default App;
