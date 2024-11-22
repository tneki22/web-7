import React, { useState, useEffect } from "react";
import { getCount, postCount } from "../services/api";

// Функциональный компонент для работы с сервисом Count
const CountService = () => {
    // Состояние для хранения текущего значения счётчика
    const [count, setCount] = useState(0);
    // Состояние для хранения введённого пользователем значения инкремента
    const [increment, setIncrement] = useState("");

    // Хук useEffect срабатывает при первом рендере компонента, вызывая fetchCount
    useEffect(() => {
        fetchCount(); // Загружаем текущее значение счётчика
    }, []); // Пустой массив зависимостей — хук выполнится только при монтировании

    // Асинхронная функция для получения значения счётчика с сервера
    const fetchCount = async () => {
        try {
            const response = await getCount(); // Вызов API для получения данных
            setCount(parseInt(response, 10)); // Парсим текстовый ответ как число и обновляем состояние
        } catch (error) {
            console.error("Ошибка при получении счётчика:", error);
            alert("Не удалось загрузить значение счётчика.");
        }
    };

    // Асинхронная функция для отправки нового значения инкремента на сервер
    const updateCount = async () => {
        try {
            await postCount(increment); // Вызов API для обновления данных
            fetchCount(); // Обновляем значение счётчика после изменения
        } catch (error) {
            console.error("Ошибка при обновлении счётчика:", error);
            alert("Не удалось обновить значение счётчика.");
        }
    };

    return (
        <div>
            <h2>Сервис Count</h2>
            <p>Текущий счётчик: {count}</p>
            {/* Поле ввода для значения инкремента */}
            <input
                type="number" // Тип ввода: числовое поле
                value={increment} // Текущее значение инкремента
                onChange={(e) => setIncrement(e.target.value)} // Обновляем состояние при вводе
                placeholder="Введите число"
            />
            {/* Кнопка для отправки нового значения инкремента */}
            <button onClick={updateCount}>Обновить счётчик</button>
        </div>
    );
};

export default CountService; // Экспорт компонента для использования в других местах
