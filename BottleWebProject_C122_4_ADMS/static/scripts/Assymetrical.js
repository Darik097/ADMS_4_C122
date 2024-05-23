

// ������� ��� ����������� ������� "������"

function showTheory() {
    document.getElementById('theorySection').style.display = 'block';
    document.getElementById('calculatorSection').style.display = 'none';
}

// ������� ��� ����������� ������� "�����������"
function showCalculator() {
    document.getElementById('calculatorSection').style.display = 'block';
    document.getElementById('theorySection').style.display = 'none';
    document.getElementById('matrix-size').value = 3;
    fillMatrixRandomly(document.getElementById('matrix-size').value)
    // �������� ������� ������
    const resolveButton = document.getElementById('resolve');
    // ��������� ������
    resolveButton.disabled = true;
}

function generateMatrixInputs(size) {
    // �������� ���������� �����
    const matrixContainer = document.getElementById('matrix-container');
    matrixContainer.innerHTML = '';

    // ������� ������� ��� �������
    const table = document.createElement('table');

    // ������������ ����� ��� ������ ������ � �������
    for (let i = 0; i <= size; i++) {
        // ������� ������ ��� �������
        const row = document.createElement('tr');

        for (let j = 0; j <= size; j++) {
            // ������� ������
            const cell = document.createElement('td');

            if (i === 0 && j > 0) {
                // ��������� ����� ��� ��������
                const label = document.createElement('div');
                //label.textContent = String.fromCharCode(96 + j).toUpperCase();
                label.textContent = j.toString();
                cell.appendChild(label);
            } else if (j === 0 && i > 0) {
                // ��������� ����� ��� �����
                const label = document.createElement('div');
                label.textContent = i.toString();
                cell.appendChild(label);
            } else if (i > 0 && j > 0) {
                // ������� ����� ��� �������
                const input = document.createElement('input');
                input.type = 'text';
                input.className = 'matrix-input';

                input.min = "0"
                input.min = "100"

                input.required = true
                input.maxLength = 1; // ������������ ����� ����� ����� ��������
                input.addEventListener('input', function () {
                    let value = parseInt(this.value, 10);
                    if (value < 0 || value > 100 || isNaN(value)) {
                        this.value = '';
                    }
                });

                // ��������� �������� � ���� �������� title
                input.id = `matrix[${i}][${j}]`;
                input.name = `matrix[${i}][${j}]`;
                cell.appendChild(input);
            }

            // ��������� ������ � ������
            row.appendChild(cell);
        }

        // ��������� ������ � �������
        table.appendChild(row);
    }

    // ��������� ������� � ���������
    matrixContainer.appendChild(table);
}

// ������� ��� ��������� ������� ��������� ������� �������
function handleMatrixSizeChange() {
    const size = parseInt(document.getElementById('matrix-size').value);
    generateMatrixInputs(size);
}



// ������� ��� ��������� ������� ��������� ������� �������
function handleMatrixSizeChange() {
    const size = parseInt(document.getElementById('matrix-size').value);
    generateMatrixInputs(size);
}
// ������������� ������� �� ���������
window.onload = function () {
    handleMatrixSizeChange();
}

// ������� ��� ���������� ������� ���������� ���������� 0 � 1
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
                const randomValue = Math.round(Math.random()); // ���������� ��������� �������� 0 ��� 1
                inputs[i * size + j].value = randomValue; // ������������� �������� � ��������������� �����
            }
        }
        resolveButton.disabled = false;
    }
}


function loadDataIntoMatrixContainer(data) {
    const matrix = data.trim().split('\n').map(row => row.split(' ')); // ��������� �������
    sizeMatrix = matrix.length; // ��������� ������� �������
    const sizeOURmatrix = document.getElementById('matrix-size')
    sizeOURmatrix.value = sizeMatrix; // ��������� �������� ����������� �������
    // ��������� ���� �������
    generateMatrixInputs(sizeMatrix)
    // ��������� ������ � �������������� �� �������� �������
    let index = 0;
    const inputs = document.getElementsByClassName('matrix-input');
    for (let i = 0; i < sizeMatrix; i++) {
        for (let j = 0; j < sizeMatrix; j++) {
            const Value = matrix[i][j];
            inputs[index].value = Value; // ������������� �������� � ��������������� input
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

// ������� ��� ���������� ������ �� �������
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

// ������� ���������� ���� html
function downloadFile() {
    document.getElementById('buttonDownload').addEventListener('click', function () {
        // �������� ������� ���� � �����
        const currentDate = new Date().toLocaleString();
        // �������� ���������� ���� ��������
        const content = `<!-- Saved on: ${currentDate} -->\n${document.documentElement.outerHTML}`;
        // ������� ������ Blob ��� ���������� ������
        const blob = new Blob([content], { type: 'text/html' });
        // ������� ������ ��� ���������� �����
        const url = URL.createObjectURL(blob);
        // ������� ������ ��� �������� <a>, ����� ������������ ��� ������� ����
        const link = document.createElement('a');
        link.href = url;
        link.download = 'graph.html'; // ������ ��� ����� ��� ����������
        // ��������� ������ �� �������� � ��������� ������ �� ���
        document.body.appendChild(link);
        link.click();
        // ������� ������ �� DOM
        document.body.removeChild(link);
        // ����������� ������ URL
        URL.revokeObjectURL(url);
    });
}



// ������� ��� �������������
function initialize() {
    // �������� ������ "������"
    document.getElementById('showTheory').addEventListener('click', showTheory);

    // �������� ������ "�����������"
    document.getElementById('showCalculator').addEventListener('click', showCalculator);

    // ������� ��� ��������� ������� �������
    document.getElementById('matrix-size').addEventListener('change', handleMatrixSizeChange);

    // ������������ ����� ��� ���������� �������
    generateMatrixInputs(parseInt(document.getElementById('matrix-size').value));

    //������� �������� ������ �� �������� � python ��� � ��������� ������
    //document.getElementById('resolve').addEventListener('click', checkEquivalenceRelation);
}

// ����� ������� �������������
initialize();

