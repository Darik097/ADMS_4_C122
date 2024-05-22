// Функция для отображения раздела "Теория"
function showTheory() {
    document.getElementById('theorySection').style.display = 'block';
    document.getElementById('calculatorSection').style.display = 'none';
}

// Функция для отображения раздела "Калькулятор"
function showCalculator() {
    document.getElementById('calculatorSection').style.display = 'block';
    document.getElementById('theorySection').style.display = 'none';
    document.getElementById('solution-block').style.display = 'none';
    generateMatrixInputs();
}

function generateMatrixInputs() {
    const size = parseInt(document.getElementById('matrix-size').value);
    const container = document.getElementById('matrix-container');
    container.innerHTML = '';

    // Создаем матрицу в виде таблицы
    const table = document.createElement('table');

    // Создаем массив букв для подписей столбцов
    const columnLabels = Array.from({ length: size }, (_, i) => String.fromCharCode(97 + i));

    // Создаем заголовок для подписей столбцов
    const columnLabelRow = document.createElement('tr');

    // Добавляем пустую ячейку для первой строки (для подписи строк)
    columnLabelRow.appendChild(document.createElement('td'));

    // Добавляем ячейки с буквами для подписей столбцов
    columnLabels.forEach(label => {
        const cell = document.createElement('td');
        cell.textContent = label.toUpperCase();
        columnLabelRow.appendChild(cell);
    });

    // Добавляем заголовок в таблицу
    table.appendChild(columnLabelRow);

    for (let i = 0; i < size; i++) {
        const row = document.createElement('tr');

        // Создаем подпись строки (слева)
        const rowLabelCell = document.createElement('td');
        rowLabelCell.textContent = String.fromCharCode(97 + i).toUpperCase(); // Буквы от 'a' до 'z' и так далее
        row.appendChild(rowLabelCell);

        for (let j = 0; j < size; j++) {
            const cell = document.createElement('td');

            // Создаем input для каждой ячейки
            const input = document.createElement('input');
            input.type = 'text';
            input.maxLength = 1;
            input.size = 1;
            input.dataset.row = i;
            input.dataset.col = j;

            // Стилизуем input
            input.style.width = '50px'; // Ширина ячейки
            input.style.height = '32px'; // Высота ячейки
            input.style.textAlign = 'center'; // Выравнивание текста по центру
            input.style.margin = '4px'; // Добавляем фиксированные отступы
            input.style.border = '1px solid #ccc'; // Границы ячейки
            input.style.borderRadius = '8px'; // Закругляем углы
            input.style.fontSize = '1em'; // Размер шрифта
            input.style.transition = 'border-color 0.3s ease'; // Плавный переход цвета границы
            input.style.outline = 'none'; // Убираем обводку

            // Добавляем input в ячейку
            cell.appendChild(input);

            // Добавляем ячейку в строку
            row.appendChild(cell);
        }

        // Добавляем строку в таблицу
        table.appendChild(row);
    }
    // Добавляем таблицу в контейнер
    container.appendChild(table);
}


function submitForm(event) {
    event.preventDefault();
    const size = parseInt(document.getElementById('matrix-size').value);
    const matrix = [];
    let isValid = true;

    for (let i = 0; i < size; i++) {
        const row = [];
        for (let j = 0; j < size; j++) {
            const value = document.querySelector(`input[data-row='${i}'][data-col='${j}']`).value;
            const numericValue = parseInt(value);
            if (isNaN(numericValue) || numericValue < 0 || numericValue > 1) {
                isValid = false;
                break;
            }
            row.push(numericValue);
        }
        if (!isValid) {
            break;
        }
        matrix.push(row);
    }

    if (!isValid) {
        alert('Пожалуйста, убедитесь, что все значения в матрице являются целыми числами от 0 до 1, а также что все поля заполнены');
        return;
    }

    fetch('/home', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ size, matrix })
    })
        .then(response => response.json())
        .then(data => {
            if (data.redirect) {
                window.location.href = data.redirect;
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}



function generateRandomMatrix() {
    
    const size = parseInt(document.getElementById('matrix-size').value);
    const container = document.getElementById('matrix-container');
    container.innerHTML = '';

    // Создаем матрицу в виде таблицы
    const table = document.createElement('table');

    // Создаем массив букв для подписей столбцов
    const columnLabels = Array.from({ length: size }, (_, i) => String.fromCharCode(97 + i));

    // Создаем заголовок для подписей столбцов
    const columnLabelRow = document.createElement('tr');

    // Добавляем пустую ячейку для первой строки (для подписи строк)
    columnLabelRow.appendChild(document.createElement('td'));

    // Добавляем ячейки с буквами для подписей столбцов
    columnLabels.forEach(label => {
        const cell = document.createElement('td');
        cell.textContent = label.toUpperCase();
        columnLabelRow.appendChild(cell);
    });

    // Добавляем заголовок в таблицу
    table.appendChild(columnLabelRow);

    for (let i = 0; i < size; i++) {
        const row = document.createElement('tr');

        // Создаем подпись строки (слева)
        const rowLabelCell = document.createElement('td');
        rowLabelCell.textContent = String.fromCharCode(97 + i).toUpperCase(); // Буквы от 'a' до 'z' и так далее
        row.appendChild(rowLabelCell);

        for (let j = 0; j < size; j++) {
            const cell = document.createElement('td');

            // Создаем input для каждой ячейки
            const input = document.createElement('input');
            input.type = 'text';
            input.maxLength = 1;
            input.size = 1;
            input.dataset.row = i;
            input.dataset.col = j;

            const randomNumber = Math.random();
            const binaryValue = randomNumber < 0.5 ? 0 : 1; // Преобразуем в 0 или 1

            input.value = binaryValue;

            // Стилизуем input
            input.style.width = '50px'; // Ширина ячейки
            input.style.height = '32px'; // Высота ячейки
            input.style.textAlign = 'center'; // Выравнивание текста по центру
            input.style.margin = '4px'; // Добавляем фиксированные отступы
            input.style.border = '1px solid #ccc'; // Границы ячейки
            input.style.borderRadius = '8px'; // Закругляем углы
            input.style.fontSize = '1em'; // Размер шрифта
            input.style.transition = 'border-color 0.3s ease'; // Плавный переход цвета границы
            input.style.outline = 'none'; // Убираем обводку

            // Добавляем input в ячейку
            cell.appendChild(input);

            // Добавляем ячейку в строку
            row.appendChild(cell);
        }

        // Добавляем строку в таблицу
        table.appendChild(row);
    }
    // Добавляем таблицу в контейнер
    container.appendChild(table);
            // Генерируем случайное число от 0 до 1       
}

function loadFromFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (!file) {
        alert('Пожалуйста, выберите файл.');
        return;
    }

    const reader = new FileReader();

    reader.onload = function (event) {
        const content = event.target.result;
        const size = parseInt(document.getElementById('matrix-size').value);
        const matrix = parseFileContent(content, size);
        if (matrix) {
            fillMatrix(matrix);
            // Отправляем данные на сервер
            sendMatrixToServer(matrix);
        } else {
            alert('Файл имеет неправильный формат данных или размерность матрицы не совпадает с ожидаемой.');
        }
    };

    reader.readAsText(file);
}

// Функция отправки данных на сервер
function sendMatrixToServer(matrix) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/home', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Обработка успешного ответа сервера
            const response = JSON.parse(xhr.responseText);
            // Перенаправляем на страницу с результатом
            window.location.href = response.redirect;
        } else if (xhr.readyState === 4 && xhr.status !== 200) {
            // Обработка ошибок
            alert('Произошла ошибка при отправке данных на сервер.');
        }
    };
    // Отправляем данные в формате JSON
    xhr.send(JSON.stringify({ size: matrix.length, matrix: matrix }));
}


function parseFileContent(content, expectedSize) {
    const lines = content.trim().split('\n');
    const matrix = [];

    if (lines.length !== expectedSize) {
        alert('Размерность матрицы не совпадает с ожидаемой.');
        return null;
    }

    for (const line of lines) {
        const row = line.trim().split(',').map(Number);

        if (row.length !== expectedSize || row.some(isNaN) || row.some(num => num < 0 || num > 1)) {
            alert('Файл имеет неправильный формат данных.');
            return null;
        }
        matrix.push(row);
    }

    return matrix;
}

function fillMatrix(matrix) {
    const size = matrix.length;
    const container = document.getElementById('matrix-container');
    container.innerHTML = '';

    const table = document.createElement('table');
    table.classList.add('matrix-table');

    const rowLabels = Array.from({ length: size }, (_, i) => String.fromCharCode(97 + i));

    const rowLabelRow = document.createElement('tr');
    rowLabelRow.classList.add('row-label-row');
    rowLabelRow.appendChild(document.createElement('td'));

    rowLabels.forEach(label => {
        const cell = document.createElement('td');
        cell.textContent = label.toUpperCase();
        rowLabelRow.appendChild(cell);
    });

    table.appendChild(rowLabelRow);

    for (let i = 0; i < size; i++) {
        const row = document.createElement('tr');

        const columnLabelCell = document.createElement('td');
        columnLabelCell.classList.add('column-label-cell');
        columnLabelCell.textContent = String.fromCharCode(97 + i).toUpperCase();
        row.appendChild(columnLabelCell);

        for (let j = 0; j < size; j++) {
            const cell = document.createElement('td');
            cell.classList.add('matrix-cell');

            const input = document.createElement('input');
            input.type = 'text';
            input.maxLength = 1;
            input.size = 1;
            input.value = matrix[i][j];

            input.style.width = '50px';
            input.style.height = '32px';
            input.style.textAlign = 'center';
            input.style.margin = '4px';
            input.style.border = '1px solid #ccc';
            input.style.borderRadius = '8px';
            input.style.fontSize = '1em';
            input.style.transition = 'border-color 0.3s ease';
            input.style.outline = 'none';
            input.classList.add('matrix-input');

            cell.appendChild(input);
            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    container.appendChild(table);
}






// Функция для обработки события изменения размера матрицы
function handleMatrixSizeChange() {
    const size = parseInt(document.getElementById('matrix-size').value);
    generateMatrixInputs(size);
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

// Функция для проверки рефлексивности
function isReflexive(matrix, size) {
    for (let i = 0; i < size; i++) {
        if (matrix[i][i] !== 1) {
            return false;
        }
    }
    return true;
}

// Функция для проверки симметричности
function isSymmetric(matrix, size) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (matrix[i][j] !== matrix[j][i]) {
                return false;
            }
        }
    }
    return true;
}

// Функция для проверки транзитивности
function isTransitive(matrix, size) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            for (let k = 0; k < size; k++) {
                if (matrix[i][j] && matrix[j][k] && !matrix[i][k]) {
                    return false;
                }
            }
        }
    }
    return true;
}

function drawGraph(matrix, size) {
    const cy = cytoscape({
        container: document.getElementById('cy'),
        elements: [],
        style: [
            {
                selector: 'node',
                style: {
                    'background-color': '#fff',
                    'color': '#fff',
                    'font-size': '25px',
                    'grabbable': 'true' // Разрешаем перетаскивание вершин
                }
            },
            {
                selector: 'edge',
                style: {
                    'width': 3,
                    'line-color': 'green',
                    'target-arrow-color': 'green',
                    'target-arrow-shape': 'triangle'
                }
            }
        ],
        layout: {
            name: 'grid',
            rows: size
        },
       
        maxZoom: 3, // Ограничиваем максимальный зум
        panningEnabled: true, // Разрешаем перетаскивание
        userPanningEnabled: false // Отключаем перетаскивание за пределы блока
    });

    for (let i = 0; i < size; i++) {
        cy.add({ group: 'nodes', data: { id: `${i + 1}` } });
    }

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (matrix[i][j] === 1) {
                cy.add({ group: 'edges', data: { source: `${i + 1}`, target: `${j + 1}` } });
            }
        }
    }

    cy.layout({ name: 'grid', rows: size }).run();
}


function checkEquivalenceRelation() {
    const size = parseInt(document.getElementById('matrix-size').value);
    const inputs = document.getElementsByClassName('matrix-input');

    // Проверяем, все ли элементы матрицы заполнены и соответствуют правилам ввода
    let allInputsValid = true;
    for (let input of inputs) {
        if (input.value === '' || !/^[01]$/.test(input.value)) {
            allInputsValid = false;
            break;
        }
    }

    // Если не все элементы заполнены или не соответствуют правилам ввода, выводим сообщение об ошибке
    if (!allInputsValid) {
        alert('Пожалуйста, заполните все элементы матрицы корректно. Допустимы только значения 0 или 1.');
        document.getElementById('solution-block').style.display = 'none';
        return;
    }

    // Если все элементы заполнены и соответствуют правилам ввода, очищаем предыдущий блок решений
    document.getElementById('result').innerHTML = '';

    // Продолжаем считывание матрицы и проверку
    const matrix = readMatrix(size);

    const reflexive = isReflexive(matrix, size);
    const symmetric = isSymmetric(matrix, size);
    const transitive = isTransitive(matrix, size);

    let resultText = `Рефлексивное: ${reflexive ? 'Да' : 'Нет'}<br>`;
    resultText += `Симметричное: ${symmetric ? 'Да' : 'Нет'}<br>`;
    resultText += `Транзитивное: ${transitive ? 'Да' : 'Нет'}<br>`;

    if (reflexive && symmetric && transitive) {
        resultText += "Отношение является эквивалентным.";
    } else {
        resultText += "Отношение не является эквивалентным.";
    }

    // Выводим новый блок решений
    document.getElementById('result').innerHTML = resultText;
    document.getElementById('solution-block').style.display = 'block';

    // Отрисовываем граф
    drawGraph(matrix, size);
}


// Инициализация матрицы по умолчанию
window.onload = function () {
    handleMatrixSizeChange();
}

// Функция для заполнения матрицы случайными значениями 0 и 1
function fillMatrixRandomly(size) {
    const inputs = document.getElementsByClassName('matrix-input');
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const randomValue = Math.round(Math.random()); // Генерируем случайное значение 0 или 1
            inputs[i * size + j].value = randomValue; // Устанавливаем значение в соответствующий инпут
        }
    }
}



function triggerFileUpload() {
    document.getElementById('file-input').click();
}

function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        const content = e.target.result;
        const matrix = parseCSV(content);
        const size = matrix.length;
        generateMatrixInputs(size);
        populateMatrixInputs(matrix);
    };
    reader.readAsText(file);
}

function parseCSV(content) {
    const rows = content.trim().split('\n');
    return rows.map(row => row.split(',').map(cell => cell.trim()));
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
}


document.addEventListener('DOMContentLoaded', function () {
    const theoryBlocks = document.querySelectorAll('.theory-block');

    function checkVisibility() {
        const triggerBottom = window.innerHeight * 0.75;

        theoryBlocks.forEach(block => {
            const blockTop = block.getBoundingClientRect().top;

            if (blockTop < triggerBottom) {
                block.classList.add('scroll-animation');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Проверить сразу при загрузке страницы
});


// Вызов функции инициализации
initialize();

