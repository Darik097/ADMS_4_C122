from bottle import post, get, run, request, static_file, redirect, template, response
import json
import matplotlib.pyplot as plt
import networkx as nx
import os

# Функция для проверки рефлексивности отношения
def is_reflexive(matrix):
    for i in range(len(matrix)):
        if matrix[i][i] != 1:
            return "Нет"
    return "Да"

# Функция для проверки cимметричности отношения
def is_symmetric(matrix):
    for i in range(len(matrix)):
        for j in range(len(matrix)):
            if matrix[i][j] != matrix[j][i]:
                return "Нет"
    return "Да"

# Функция для проверки транзитивности отношения
def is_transitive(matrix):
    size = len(matrix)
    for i in range(size):
        for j in range(size):
            if matrix[i][j] == 1:
                for k in range(size):
                    if matrix[j][k] == 1 and matrix[i][k] != 1:
                        return "Нет"
    return "Да"

def is_additional_relation(matrix):
    size = len(matrix)
    additional_relation = [[0] * size for _ in range(size)]
    for i in range(size):
        for j in range(size):
            additional_relation[i][j] = 1 - matrix[i][j]  
    return additional_relation



def index_to_label(index):
    # Преобразует индекс в букву (или буквы)
    letters = ''
    while index >= 0:
        letters = chr(index % 26 + 97) + letters
        index = index // 26 - 1
    return letters

def create_graph(matrix):
    G = nx.DiGraph()
    size = len(matrix)
    labels = {i: index_to_label(i) for i in range(size)}
    
    for i in range(size):
        for j in range(size):
            if matrix[i][j] == 1:
                G.add_edge(labels[i], labels[j])

    fig, ax = plt.subplots(figsize=(8, 8))
    pos = nx.spring_layout(G)
    nx.draw(G, pos, with_labels=True, ax=ax, node_size=750, node_color='white', edge_color='green', font_color='green', font_size=14, font_weight='bold')
    ax.set_facecolor('black')  # Устанавливаем черный цвет заднего фона
    ax.spines['top'].set_color('white')  # Устанавливаем белый цвет верхней границы рамки
    ax.spines['bottom'].set_color('white')  # Устанавливаем белый цвет нижней границы рамки
    ax.spines['left'].set_color('white')  # Устанавливаем белый цвет левой границы рамки
    ax.spines['right'].set_color('white')  # Устанавливаем белый цвет правой границы рамки
    fig.savefig('./views/graph.png', facecolor='black')  # Сохраняем с черным задним фоном
    plt.close(fig)

def create_additional_relation_graph(additional_relation):
    G = nx.DiGraph()
    size = len(additional_relation)
    labels = {i: index_to_label(i) for i in range(size)}
    
    for i in range(size):
        for j in range(size):
            if additional_relation[i][j] == 1:
                G.add_edge(labels[i], labels[j])

    fig, ax = plt.subplots(figsize=(8, 8))
    pos = nx.spring_layout(G)
    nx.draw(G, pos, with_labels=True, ax=ax, node_size=750, node_color='white', edge_color='green', font_color='green', font_size=14, font_weight='bold')
    ax.set_facecolor('black')  # Устанавливаем черный цвет заднего фона
    ax.spines['top'].set_color('white')  # Устанавливаем белый цвет верхней границы рамки
    ax.spines['bottom'].set_color('white')  # Устанавливаем белый цвет нижней границы рамки
    ax.spines['left'].set_color('white')  # Устанавливаем белый цвет левой границы рамки
    ax.spines['right'].set_color('white')  # Устанавливаем белый цвет правой границы рамки
    fig.savefig('./views/additional_relation_graph.png', facecolor='black')  # Сохраняем с черным задним фоном
    plt.close(fig)

@post('/home')
def my_form():
    data = request.json
    if not data:
        return {"error": "No data received"}

    size = data.get('size')
    matrix = data.get('matrix')

    if size is None or matrix is None:
        return {"error": "Missing size or matrix data"}

    reflexive = is_reflexive(matrix)
    symmetric = is_symmetric(matrix)
    transitive = is_transitive(matrix)
    additional_relation = is_additional_relation(matrix)
    equivalent = "Да" if reflexive == "Да" and symmetric == "Да" and transitive == "Да" else "Нет"

    create_graph(matrix)

    # Проверяем, состоит ли вся матрица из нулей
    if all(all(element == 0 for element in row) for row in matrix):
        additional_relation = None
        equivalent = "Бинарное отношение равно 0"

    # Проверяем наличие дополнительного отношения
    if additional_relation is not None:
        create_additional_relation_graph(additional_relation)

    # Формируем данные для ответа
    response_data = {
        "status": "success",  # Статус успешного выполнения
        "size": size,  # Размер матрицы
        "matrix": matrix,  # Исходная матрица
        "reflexive": reflexive,  # Является ли отношение рефлексивным
        "symmetric": symmetric,  # Является ли отношение симметричным
        "transitive": transitive,  # Является ли отношение транзитивным
        "additional_relation": additional_relation,  # Дополнительное отношение
        "equivalent": equivalent,  # Является ли отношение эквивалентным
        "graph_image": "/graph.png",  # Путь к изображению графа
        "additional_relation_graph_image": "/additional_relation_graph.png"  # Путь к изображению графа дополнительного отношения
    }


    # Сохраняем данные в файл result.json
    with open('./views/result.json', 'w') as f:
        json.dump(response_data, f)

    # Возвращаем ответ с перенаправлением на маршрут /matrix_result
    return {"redirect": "/matrix_result"}


# Добавляем маршрут для отображения страницы с матрицей дополнительного отношения
@get('/additional_relation')
def serve_additional_relation():
    # Открываем файл result.json и загружаем данные
    with open('./views/result.json', 'r') as f:
        data = json.load(f)
    # Возвращаем шаблон additional_relation с данными
    return template('additional_relation', data)


# Маршрут для получения изображения графа
@get('/graph.png')
def serve_graph_image():
    # Открываем файл result.json и загружаем данные
    with open('./views/result.json', 'r') as f:
        data = json.load(f)
    # Проверяем, состоит ли вся матрица из нулей
    if all(all(element == 0 for element in row) for row in data['matrix']):
        return "Вся матрица состоит из нулей"  # Возвращаем сообщение, если матрица нулевая
    # Возвращаем файл изображения графа
    return static_file('graph.png', root='./views')

# Маршрут для получения изображения графа дополнительного отношения
@get('/additional_relation_graph.png')
def serve_additional_relation_graph():
    # Открываем файл result.json и загружаем данные
    with open('./views/result.json', 'r') as f:
        data = json.load(f)
    # Проверяем, состоит ли вся матрица из нулей
    if all(all(element == 0 for element in row) for row in data['matrix']):
        return "Вся матрица состоит из нулей"  # Возвращаем сообщение, если матрица нулевая
    # Возвращаем файл изображения графа дополнительного отношения
    return static_file('additional_relation_graph.png', root='./views')

# Маршрут для отображения результатов анализа матрицы
@get('/matrix_result')
def serve_matrix_result():
    # Открываем файл result.json и загружаем данные
    with open('./views/result.json', 'r') as f:
        data = json.load(f)
    # Возвращаем шаблон matrix_result с данными
    return template('matrix_result', data)

# Маршрут для скачивания файла с результатами
@get('/download_results')
def download_results():
    filename = 'result.json'  # Имя файла с результатами
    filepath = './views/' + filename  # Полный путь к файлу
    # Проверяем, существует ли файл
    if os.path.exists(filepath):
        # Устанавливаем заголовки для скачивания файла
        response.headers['Content-Type'] = 'application/json'
        response.headers['Content-Disposition'] = f'attachment; filename="{filename}"'
        # Отдаем файл пользователю
        return static_file(filename, root='./views', download=filename)
    else:
        return {"error": "File not found"}  # Возвращаем ошибку, если файл не найден


# Запуск приложения
if __name__ == "__main__":
    run(host='localhost', port=8080, debug=True)  # Запускаем сервер на локальном хосте и порту 8080

