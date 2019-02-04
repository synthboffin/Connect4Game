import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const ReactTransportationTitle = props => (
  <div>
    <h1>{props.title}</h1>
    <h2>The best place to buy vehicles online</h2>
  </div>
);

const OptionsTitle = props => (
  <div>
    New Only
    <input type="checkbox" id="coding" name="interest" value="coding" checked />
  </div>
);

const VehicleOption = props => <option value={props.name}>{props.name}</option>;

const SelectVehicleType = props => (
  <div>
    <p />
    Select Type
    <select>
      <VehicleOption name="All" />
      <VehicleOption name="Cars" />
      <VehicleOption name="Trucks" />
      <VehicleOption name="Convertibles" />
    </select>
  </div>
);

const VehicleHeader = props => (
  <tr>
    <th>Year</th>
    <th>Model</th>
    <th>Price</th>
    <th>Buy</th>
  </tr>
);

const VehicleDetail = props => (
  <tr>
    <td>{props.year}</td>
    <td>{props.model}</td>
    <td>{props.price}</td>
    <td>
      <button>Buy Now</button>
    </td>
  </tr>
);

const Vehicle = props => (
  <ul>
    <table>
      <VehicleHeader />
      <VehicleDetail
        year={props.year}
        model={props.model}
        price={props.price}
      />
    </table>
  </ul>
);

const VehicleList = ({ vehicles }) =>
  vehicles.map(item => (
    <Vehicle year={item.year} model={item.model} price={item.price} />
  ));

const VehicleCategory = ({ title, vehicles }) => (
  <div>
    <h2>{title}</h2>
    <VehicleList vehicles={vehicles} />
  </div>
);

const App = () => {
  const cars = [
    { year: "2011", model: "Ford", price: "$3400" },
    { year: "2012", model: "Volvo", price: "$4600" },
    { year: "2013", model: "Audi", price: "$5600" }
  ];

  const trucks = [
    { year: "2011", model: "EMF", price: "$6700" },
    { year: "2015", model: "Volvo", price: "$4500" },
    { year: "2009", model: "Mercedes", price: "$86400" }
  ];

  const convertibles = [
    { year: "2001", model: "BMW", price: "$3400" },
    { year: "2016", model: "Volvo", price: "$3400" },
    { year: "2006", model: "Audi", price: "$3400" },
    { year: "2004", model: "Volvo", price: "$3400" },
    { year: "2013", model: "Audi", price: "$3400" }
  ];

  return (
    <div>
      <ReactTransportationTitle title="Welcome to React Transportation" />
      <OptionsTitle />
      <SelectVehicleType />
      <VehicleCategory title="Cars" vehicles={cars} />
      <VehicleCategory title="Trucks" vehicles={trucks} />
      <VehicleCategory title="Convertibles" vehicles={convertibles} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
