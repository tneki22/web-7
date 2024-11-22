const BASE_URLS = {
    hello: "http://localhost:8080",
    query: "http://localhost:9000/api/user",
    count: "http://localhost:3333"
};
export async function getHello() {
    const response = await fetch(`${BASE_URLS.hello}/get`);
    return response.json();  // Используем .json() для парсинга данных в объект
}

export async function getUser(name) {
    const response = await fetch(`http://localhost:9000/api/user?name=${name}`);
    return response;
}


export async function getCount() {
    const response = await fetch(`${BASE_URLS.count}/count`);
    return response.json();  // То же самое для счётчика
}

export async function postCount(value) {
    const response = await fetch(`${BASE_URLS.count}/count`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `count=${value}`, // Тело запроса содержит данные для инкремента
    });

    if (!response.ok) {
        throw new Error("Ошибка обновления счётчика"); // Генерация исключения, если запрос не успешен
    }

    // Пытаемся обработать ответ как текст, так как сервер не возвращает JSON
    const textResponse = await response.text();
    
    // Преобразуем текстовый ответ в число (если нужно)
    return parseInt(textResponse, 10); // Возвращаем число для дальнейшей обработки
}
