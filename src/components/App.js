// App.js
import React from "react";
import HelloService from "./HelloService";
import QueryService from "./QueryService";
import CountService from "./CountService";

const App = () => {
    console.log("App is rendering...");

    return (
        <div>
            <h1>Микросервисы</h1>
            <HelloService />
            <QueryService />
            <CountService />
        </div>
    );
};

export default App;  // Экспорт по умолчанию
