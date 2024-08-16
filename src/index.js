import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() {
    // const styleTitle = { color: "red", fontSize: "48px", textTransform: "uppercase" };
    const styleTitle = {};
    return (
        <header className="header">
            <h1 style={styleTitle}>Fast React Pizza Co.</h1>
        </header>
    );
}

function Menu() {
    const pizzas = pizzaData;
    // const pizzas = [];
    const numPizzas = pizzas.length;

    return (
        <main className="menu">
            <h2>Our Menu</h2>

            {numPizzas > 0 ? (
                // React Fragments : <> </>
                // allows us to have more than one elemnet inside a piece of JSX
                // used for grouping elements without actually grouping them in a div
                // invisible in the DOM tree
                <>
                    <p>
                        Authentic Italian cuisine. 6 creative dishes to choose from. All from our
                        stove oven, all organic, all delicious.
                    </p>
                    <ul className="pizzas">
                        {/* using map method to iterate over the pizzaData array which is creating a new array 
                with a new Pizza component at every position, 
                the current pizza object (passed as a parameter in the map method) is passed as a prop */}
                        {pizzas.map((pizza) => (
                            <Pizza pizzaObj={pizza} key={pizza.name} />
                        ))}
                    </ul>
                </>
            ) : (
                <p>We're still working on the menu. Please come back later. :) </p>
            )}

            {/* <Pizza
                name="Pizza Spinaci"
                ingredients="Tomato, mozarella, spinach, and ricotta cheese"
                photoName="pizzas/spinaci.jpg"
                price={10}
            />

            <Pizza
                name="Pizza Funghi"
                ingredients="Tomato, mozarella, mushrooms, and onion"
                price={12}
                photoName="pizzas/funghi.jpg"
            /> */}
        </main>
    );
}

// component is loaded and props are recevied

// passing exactly the name of the prop we are passing (props destructuring)
function Pizza({ pizzaObj }) {
    console.log(pizzaObj);

    // if (pizzaObj.soldOut) return null;

    return (
        // Setting the className conditionally using the ternary operator by entering the JavaScript Mode using (``)
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                {/* Displaying the element conditionally */}
                {/* {pizzaObj.soldOut ? (
                    <span>SOLD OUT</span>
                    ) : (
                    <span>{pizzaObj.price}</span>
                    )} */}

                {/* Setting the text content conditionally using the ternary operator */}
                <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
            </div>
        </li>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);

    // if (hour >= openHour && hour <= closeHour) alert("We're currently open.");
    // else alert("Sorry we're closed. :( :(");

    return (
        <footer className="footer">
            {isOpen ? (
                <Order closeHour={closeHour} openHour={openHour} />
            ) : (
                <p>
                    We're happy to welcome you between {openHour}:00 and {closeHour}:00.
                </p>
            )}
        </footer>
    );
    // return React.createElement("footer", null, "We're currently open.");
}

function Order({ closeHour, openHour }) {
    return (
        <div className="order">
            <p>
                We're open from {openHour}:00 to {closeHour}:00. Come visit us or order online.
            </p>
            <button className="btn">Order</button>
        </div>
    );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
