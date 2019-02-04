import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const ListItem = props => <li>{props.item}</li>;

const ShoppingTitle = props => (
  <div>
    <h1>{props.title}</h1>
    <h2>Total Number of Items: {props.numItems}</h2>
  </div>
);

const ShoppingList = props => (
  <div>
    <h3>{props.header}</h3>
    <ol>
      <ListItem item={props.items[0]} />
      <ListItem item={props.items[1]} />
      <ListItem item={props.items[2]} />
    </ol>
  </div>
);

const ShoppingApp = props => (
  <div>
    <ShoppingTitle title="My Shopping List" numItems="9" />
    <ShoppingList header="Food" items={["Apple", "Bread", "Cheese"]} />
    <ShoppingList header="Clothes" items={["Shirt", "Pants", "Hat"]} />
    <ShoppingList header="Supplies" items={["Pen", "Paper", "Glue"]} />
  </div>
);

ReactDOM.render(<ShoppingApp />, document.getElementById("root"));
