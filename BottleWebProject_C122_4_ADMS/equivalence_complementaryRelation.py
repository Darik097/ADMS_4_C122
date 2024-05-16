##### ��� ������ ######

import random
from bottle import datetime, post, request 
from pyvis.network import Network

### ������� �������� �� ��������������, ��������������, ��������������
def check_equivalence_relation(relation):
    # �������� �� ��������������
    is_reflexive = all((a, a) in relation for a in relation.keys())

    # �������� �� ��������������
    is_symmetric = all((b, a) in relation for a, b in relation.keys())

    # �������� �� ��������������
    is_transitive = all((a, c) in relation for a in relation.keys() for b in relation.keys() for c in relation.keys() if (a, b) in relation and (b, c) in relation)

    return is_reflexive, is_symmetric, is_transitive

# ��������� ��������������� ���������
def find_additional_relation(relation):
    # ��� ������� ������� ���� ���������, ������� �������� ��������������
    additional_relation = relation.sort()
    return additional_relation

####������� ��������� ��������� �������� (��������� �)####
def getABunch(relation):
    result = []
    for a2, b2, in relation:
        if a2 not in result:
            result.append(a2)
        if b2 not in result:
            result.append(b2)
    return result
# ������� ���������� ��������� ���������
def find_inverse_relation(relation):
    Abunch = getABunch(relation)
    result = [(b, a) for a, b in relation]
    return result

#### ������� ��������� �������� � �������� ����� ###
def namePeak(relation):  # �������� ��������� ���� [(1, 2), (2, 1), (3, 2)]
    resultTitles = []
    count = 0
    bunchA = getABunch(relation)
    for i in bunchA:
        count += 1
        resultTitles.append(str(count))
    return resultTitles
#### ������� ��������� titles � �������� ����� ###
def nameTitles(relation):  # �������� ��������� ���� [(1, 2), (2, 1), (3, 2)]
    resultTitles = []
    count = 0
    bunchA = getABunch(relation)
    for i in bunchA:
        count += 1
        resultTitles.append("���� �" + str(count))
    return resultTitles
### ������� �������� ��������� ������������� ����� � hex
def goToHex(listIntColor):
    color_number = 0
    for i, jval in enumerate(listIntColor):
        if (i==0):
            color_number = jval << 8
        if (i==1):
            color_number += jval << 2
        else:
            color_number += jval
    # ������� ��������� �������� � ������ Hex
    color_hex = '#{:06x}'.format(color_number)
    return color_hex

### ����� ������� ������� ������ ��� ����� (������) - ���� ��� ���������� ��������� �
def getColorForNod(bunchA):
    resultColors = []
    for i in bunchA:
        arrayNumber = [random.randint(100, 255), random.randint(125, 200),
                       random.randint(200, 255)]
        hex = goToHex(arrayNumber)
        resultColors.append(hex)
    return resultColors

### ��� ������������������ ����� ��� ������������� � ������, ������� ������������ ���� #######

###������� ��������� �����######
def drawGraph(relation):
    Abunch = getABunch(relation)
    net = Network() #������ �����
    labels = namePeak(relation)
    colors = getColorForNod(Abunch)
    titles = nameTitles(relation)

    net.add_nodes(Abunch, label=labels, color=colors, title =titles)

    net.add_edges(relation)
    net.show('graph.html', notebook=False)

#### ������� ��������� ��������� �� ������� ��������� ####
def generationRelation(matrix):
    resultRelation = []
    for i in range(0, len(matrix)):
        for j in range(0, len(matrix[0])):
            if matrix[i][j] == 1:
                new_element = (i+1, j+1)
                resultRelation.append(new_element)
    return resultRelation


def mainMethod():
    two_dimensional_array = request.forms.get('')
    relation = generationRelation(two_dimensional_array)
    
    Abunch = getABunch(relation)
    
    # �������� �� ��������������� � ������������������
    message_symmetric = is_asymmetric_relation(relation)
    message_transitive  = is_antitransitive_relation(relation)

    # ���������� ��������� ���������
    inverse_relation = find_inverse_relation(relation)
   
    drawGraph(relation)

