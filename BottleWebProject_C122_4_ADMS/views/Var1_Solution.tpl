<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Matrix Equivalence Result</title>
</head>
<body>
    <h1>Matrix Equivalence Result</h1>
    <!-- ����������� ����������� �������� ��������������� -->
    <p>������������: {{ '��' if result['reflexive'] else '���' }}</p>
    <p>������������: {{ '��' if result['symmetric'] else '���' }}</p>
    <p>������������: {{ '��' if result['transitive'] else '���' }}</p>
    <p>{{ '��������� �������� �������������.' if result['equivalent'] else '��������� �� �������� �������������.' }}</p>
    <!-- ����������� ����������� ����� -->
    <img src="{{ result['graph_image'] }}" alt="���� �������">
    <!-- ������ ��� ����������� � �������� -->
    <a href="/Var1Binary">��������� � ��������</a>
</body>
</html>
