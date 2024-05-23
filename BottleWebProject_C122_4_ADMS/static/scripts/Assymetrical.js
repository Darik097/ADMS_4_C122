

// Функция для отображения раздела "Теория"

function showTheory() {
    document.getElementById('theorySection').style.display = 'block';
    document.getElementById('calculatorSection').style.display = 'none';
}

// Функция для отображения раздела "Калькулятор"
function showCalculator() {
    document.getElementById('calculatorSection').style.display = 'block';
    document.getElementById('theorySection').style.display = 'none';
    document.getElementById('matrix-size').value = 3;
    fillMatrixRandomly(document.getElementById('matrix-size').value)
    // Получаем элемент кнопки
    const resolveButton = document.getElementById('resolve');
    // Блокируем кнопку
    resolveButton.disabled = true;
}

function generateMatrixInputs(size) {
    // Очистить предыдущие вводы
    const matrixContainer = document.getElementById('matrix-container');
    matrixContainer.innerHTML = '';

    // Создаем таблицу для матрицы
    const table = document.createElement('table');

    // Генерировать вводы для каждой строки и столбца
    for (let i = 0; i <= size; i++) {
        // Создаем строку для таблицы
        const row = document.createElement('tr');

        for (let j = 0; j <= size; j++) {
            // Создаем ячейку
            const cell = document.createElement('td');

            if (i === 0 && j > 0) {
                // Добавляем буквы для столбцов
                const label = document.createElement('div');
                //label.textContent = String.fromCharCode(96 + j).toUpperCase();
                label.textContent = j.toString();
                cell.appendChild(label);
            } else if (j === 0 && i > 0) {
                // Добавляем буквы для строк
                const label = document.createElement('div');
                label.textContent = i.toString();
                cell.appendChild(label);
            } else if (i > 0 && j > 0) {
                // Создаем вводы для матрицы
                const input = document.createElement('input');
                input.type = 'text';
                input.className = 'matrix-input';

                input.min = "0"
                input.min = "100"

                input.required = true
                input.maxLength = 1; // Ограничиваем длину ввода одним символом
                input.addEventListener('input', function () {
                    let value = parseInt(this.value, 10);
                    if (value < 0 || value > 100 || isNaN(value)) {
                        this.value = '';
                    }
                });

                // Добавляем название в виде атрибута title
                input.id = `matrix[${i}][${j}]`;
                input.name = `matrix[${i}][${j}]`;
                cell.appendChild(input);
            }

            // Добавляем ячейку в строку
            row.appendChild(cell);
        }

        // Добавляем строку в таблицу
        table.appendChild(row);
    }

    // Добавляем таблицу в контейнер
    matrixContainer.appendChild(table);
}

// Функция для обработки события изменения размера матрицы
function handleMatrixSizeChange() {
    const size = parseInt(document.getElementById('matrix-size').value);
    generateMatrixInputs(size);
}



// Функция для обработки события изменения размера матрицы
function handleMatrixSizeChange() {
    const size = parseInt(document.getElementById('matrix-size').value);
    generateMatrixInputs(size);
}
// Инициализация матрицы по умолчанию
window.onload = function () {
    handleMatrixSizeChange();
}

// Функция для заполнения матрицы случайными значениями 0 и 1
function fillMatrixRandomly(size) {
    if (size === null || size === '' || size === "Size matrix" || size < 3 || size > 10) {
        document.getElementById('matrix-size').style.border = '2px solid red';
    }
    else {
        generateMatrixInputs(size);
        document.getElementById('matrix-size').style.border = '2px solid black';
        const inputs = document.getElementsByClassName('matrix-input');
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const randomValue = Math.round(Math.random()); // Генерируем случайное значение 0 или 1
                inputs[i * size + j].value = randomValue; // Устанавливаем значение в соответствующий инпут
            }
        }
        resolveButton.disabled = false;
    }
}


function loadDataIntoMatrixContainer(data) {
    const matrix = data.trim().split('\n').map(row => row.split(' ')); // получение матрицы
    sizeMatrix = matrix.length; // выяснение размера матрицы
    const sizeOURmatrix = document.getElementById('matrix-size')
    sizeOURmatrix.value = sizeMatrix; // Установка хначения размерности матрицы
    // Генерация вида матрицы
    generateMatrixInputs(sizeMatrix)
    // Вненсение данных в сформированную на странице матрицу
    let index = 0;
    const inputs = document.getElementsByClassName('matrix-input');
    for (let i = 0; i < sizeMatrix; i++) {
        for (let j = 0; j < sizeMatrix; j++) {
            const Value = matrix[i][j];
            inputs[index].value = Value; // Устанавливаем значение в соответствующий input
            index++;
        }
    }

}

function openFileExplorer() {
    const input = document.createElement('input');
    input.type = 'file';

    input.onchange = e => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = function () {
            const data = reader.result;
            loadDataIntoMatrixContainer(data);
        };

        reader.readAsText(file);
    };

    input.click();
}

// Функция для считывания данных из матрицы
function readMatrix(size) {
    const matrix = [];
    const inputs = document.getElementsByClassName('matrix-input');
    let index = 0;
    for (let i = 0; i < size; i++) {
        const row = [];
        for (let j = 0; j < size; j++) {
            row.push(parseInt(inputs[index].value) || 0);
            index++;
        }
        matrix.push(row);
    }
    return matrix;
}

// Функция скачивания файл html
function downloadFile() {
    document.getElementById('buttonDownload').addEventListener('click', function () {
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
        link.download = 'graph.html'; // Задаем имя файла для скачивания
        // Добавляем ссылку на страницу и эмулируем щелчок на ней
        document.body.appendChild(link);
        link.click();
        // Удаляем ссылку из DOM
        document.body.removeChild(link);
        // Освобождаем объект URL
        URL.revokeObjectURL(url);
    });
}



// Функция для инициализации
function initialize() {
    // Показать раздел "Теория"
    document.getElementById('showTheory').addEventListener('click', showTheory);

    // Показать раздел "Калькулятор"
    document.getElementById('showCalculator').addEventListener('click', showCalculator);

    // Событие для изменения размера матрицы
    document.getElementById('matrix-size').addEventListener('change', handleMatrixSizeChange);

    // Генерировать вводы для начального размера
    generateMatrixInputs(parseInt(document.getElementById('matrix-size').value));

    //Функция отправки данных со страницы в python код и получение данных
    //document.getElementById('resolve').addEventListener('click', checkEquivalenceRelation);
}

// Вызов функции инициализации
initialize();

