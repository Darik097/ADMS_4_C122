document.getElementById('saveButton').addEventListener('click', function () {
    // Получаем текущую дату и время
    const currentDate = new Date().toLocaleString();
    // Получаем содержимое всей страницы
    const content = `<!-- Saved on: ${currentDate} -->\n${document.documentElement.outerHTML}`;
    // Создаем объект Blob для сохранения данных
    const blob = new Blob([content], { type: 'text/html' });
    // Создаем ссылку для скачивания файла
    const url = URL.createObjectURL(blob);
    // Создаем ссылку для элемента <a>, чтобы пользователь мог скачать файл
    const link = document.createElement('a');
    link.href = url;
    link.download = 'matrix_properties.html'; // Задаем имя файла для скачивания
    // Добавляем ссылку на страницу и эмулируем щелчок на ней
    document.body.appendChild(link);
    link.click();
    // Удаляем ссылку из DOM
    document.body.removeChild(link);
    // Освобождаем объект URL
    URL.revokeObjectURL(url);
});

function downloadResults() {
    // Выполняем GET-запрос на сервер для скачивания файла JSON
    fetch('/download_results')
        .then(response => {
            // Проверяем статус ответа
            if (!response.ok) {
                throw new Error('Ошибка скачивания файла');
            }
            // Возвращаем ответ в формате JSON
            return response.json();
        })
        .then(data => {
            // Добавляем текущую дату и время
            data["downloaded_on"] = new Date().toLocaleString();
            // Создаем объект Blob для сохранения данных
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }); // Добавлено форматирование с отступами
            // Создаем ссылку для скачивания файла
            const url = URL.createObjectURL(blob);
            // Создаем ссылку для элемента <a>, чтобы пользователь мог скачать файл
            const link = document.createElement('a');
            link.href = url;
            link.download = 'result.json'; // Задаем имя файла для скачивания
            // Добавляем ссылку на страницу и эмулируем щелчок на ней
            document.body.appendChild(link);
            link.click();
            // Удаляем ссылку из DOM
            document.body.removeChild(link);
            // Освобождаем объект URL
            URL.revokeObjectURL(url);
        })
        .catch(error => {
            console.error('Ошибка:', error);
            alert('Произошла ошибка при скачивании файла');
        });
}