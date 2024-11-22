import React, { useState } from "react";
import { getUser } from "../services/api";

const QueryService = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const fetchUser = async () => {
        try {
            const response = await getUser(name);
            if (!response.ok) {
                throw new Error("Ошибка при получении данных");
            }
            // Читаем ответ как текст
            const data = await response.text();
            setMessage(data); // Устанавливаем полученное текстовое сообщение
        } catch (error) { 
            console.error("Ошибка:", error);
            setMessage("Ошибка при запросе данных");
        }
    };

    return (
        <div>
            <h2>Сервис Query</h2>
            <input
                type="text"
                value={name}
                placeholder="Введите имя"
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={fetchUser}>Получить приветствие</button>
            <p>{message}</p>
        </div>
    );
};

export default QueryService;
