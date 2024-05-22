<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Граф</title>
<style>
    body {
        background-color: #fff; /* Белый фон */
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
    }

    #theorySection {
        display: none;
    }

    .theory-block {
        border-radius: 10px;
        border: 2px solid #32CD32;
        padding: 20px;
        margin-bottom: 20px;
        background-color: transparent;
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }

    #cy {
        width: 50%;
        height: 600px;
        border: 2px solid #000;
        text-align: center;
    }
</style>
</head>
<body>

<div id="theorySection">
    <div class="theory-block">
        <h2>Теория</h2>
        <!-- Ваш текст с теорией здесь -->
    </div>
</div>

<div id="cy"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/cytoscape/3.18.2/cytoscape.min.js"></script>
<script>
    function drawGraph(matrix, size) {
        const cy = cytoscape({
            container: document.getElementById('cy'),
            elements: [],
            style: [
                {
                    selector: 'node',
                    style: {
                        'background-color': '#fff',
                        'color': '#008000',
                        'font-size': '20px'
                    }
                },
                {
                    selector: 'edge',
                    style: {
                        'width': 3,
                        'line-color': '#ccc',
                        'target-arrow-color': '#ccc',
                        'target-arrow-shape': 'triangle'
                    }
                }
            ],
            layout: {
                name: 'grid',
                rows: size
            },
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

    // Инициализация матрицы по умолчанию
    window.onload = function () {
        const size = 5; // Размер матрицы по умолчанию
        const matrix = [
            [1, 0, 1, 0, 0],
            [0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0],
            [0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1]
        ];
        drawGraph(matrix, size);
    };
</script>

</body>
</html>

