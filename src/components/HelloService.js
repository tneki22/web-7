// HelloService.js
import React, { useState } from "react";
import { getHello } from "../services/api";

const HelloService = () => {
    const [message, setMessage] = useState("");

    const fetchHello = async () => {
        try {
            const response = await fetch("http://localhost:8080/get");
            if (!response.ok) {
                throw new Error("Ошибка при получении данных");
            }
            // Читаем ответ как текст
            const data = await response.text();
            setMessage(data); // Устанавливаем полученное текстовое сообщение
        } catch (error) {
            console.error("Ошибка:", error);
        }
    };
    return (
        <div>
            <h2>Сервис Hello</h2>
            <button onClick={fetchHello}>Получить приветствие</button>
            <p>{message}</p>
        </div>
    );
};

export default HelloService;  // Экспорт по умолчанию
