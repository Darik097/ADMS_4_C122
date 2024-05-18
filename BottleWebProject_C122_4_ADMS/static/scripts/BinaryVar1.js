// Функция для отображения раздела "Теория"
function showTheory() {
    document.getElementById('theorySection').style.display = 'block';
    document.getElementById('calculatorSection').style.display = 'none';
}

// Функция для отображения раздела "Калькулятор"
function showCalculator() {
    document.getElementById('calculatorSection').style.display = 'block';
    document.getElementById('theorySection').style.display = 'none';
}

// Функция для генерации вводов матрицы
function generateMatrixInputs(size) {
    // Очистить предыдущие вводы
    document.getElementById('matrix-container').innerHTML = '';

    // Генерировать вводы для каждой строки и столбца
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'matrix-input';
            input.placeholder = `${i + 1},${j + 1}`;
            input.addEventListener('input', function () {
                this.value = this.value.replace(/[^\d.-]/g, ''); // Ограничиваем ввод только числами и цифрами
            });
            document.getElementById('matrix-container').appendChild(input);
        }
        // Добавить перенос строки после каждой строки
        document.getElementById('matrix-container').appendChild(document.createElement('br'));
    }
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

// Функция для построения графа
function drawGraph(matrix, size) {
    const cy = cytoscape({
        container: document.getElementById('cy'),
        elements: [],
        style: [
            {
                selector: 'node',
                style: {
                    'background-color': '#fff',
                    'label': 'data(id)',
                    'color': '#000'  // Цвет текста
                }
            },
            {
                selector: 'edge',
                style: {
                    'width': 3,
                    'line-color': '#fff',
                    'target-arrow-color': '#fff',
                    'target-arrow-shape': 'triangle',
                    'color': '#fff'  // Цвет текста на ребре
                }
            }
        ],
        layout: {
            name: 'grid',
            rows: size
        }
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

// Функция для проверки эквивалентного отношения и нахождения дополнительного отношения
function checkEquivalenceRelation() {
    const size = parseInt(document.getElementById('matrix-size').value);
    const matrix = readMatrix(size);

    const reflexive = isReflexive(matrix, size);
    const symmetric = isSymmetric(matrix, size);
    const transitive = isTransitive(matrix, size);

    let resultText = `reflexive: ${reflexive ? 'Да' : 'Нет'}<br>`;
    resultText += `symmetric: ${symmetric ? 'Да' : 'Нет'}<br>`;
    resultText += `transitive: ${transitive ? 'Да' : 'Нет'}<br>`;

    if (reflexive && symmetric && transitive) {
        resultText += "Отношение является эквивалентным.";
    } else {
        resultText += "Отношение не является эквивалентным.";
    }

    document.getElementById('result').innerHTML = resultText;

    // Построить граф
    drawGraph(matrix, size);
}


// Инициализация матрицы по умолчанию
window.onload = function () {
    handleMatrixSizeChange();
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

