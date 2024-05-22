<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Matrix Equivalence Result</title>
</head>
<body>
    <h1>Matrix Equivalence Result</h1>
    <!-- Отображение результатов проверки эквивалентности -->
    <p>Рефлексивное: {{ 'Да' if result['reflexive'] else 'Нет' }}</p>
    <p>Симметричное: {{ 'Да' if result['symmetric'] else 'Нет' }}</p>
    <p>Транзитивное: {{ 'Да' if result['transitive'] else 'Нет' }}</p>
    <p>{{ 'Отношение является эквивалентным.' if result['equivalent'] else 'Отношение не является эквивалентным.' }}</p>
    <!-- Отображение изображения графа -->
    <img src="{{ result['graph_image'] }}" alt="Граф матрицы">
    <!-- Кнопка для возвращения к проверке -->
    <a href="/Var1Binary">Вернуться к проверке</a>
</body>
</html>
