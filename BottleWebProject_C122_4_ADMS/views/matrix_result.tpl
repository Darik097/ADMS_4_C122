<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Свойства матрицы</title>
    <link rel="stylesheet" href="static/content/StyleForResult1.css">
</head>
<body>
    <h2>Свойства матрицы</h2>
    <p>Рефлексивность: {{reflexive}}</p>
    <p>Симметричность: {{symmetric}}</p>
    <p>Транзитивность: {{transitive}}</p>
    <p>Эквивалентность: {{equivalent}}</p>
    <h3>График</h3>
    <img src="{{graph_image}}" alt="График">  

    <h2>Матрица дополнительного отношения</h2>
    <table>
        % if additional_relation is not None:
            % for row in additional_relation:
                <tr>
                % for item in row:
                    <td>{{ item }}</td>
                % end
                </tr>
            % end
        % else:
            <p>Дополнительные отношения отсутствуют</p>
        % end
    </table>

      <h3>Граф дополнительного отношения</h3>
    <img src="{{additional_relation_graph_image}}" alt="Граф дополнительного отношения">

</body>
</html>
