#Код Егора#
import random
from bottle import abort, datetime, post, request, template
from pyvis.network import Network

def is_asymmetric_relation(relation):
    for a, b in relation:
        if (a, b) in relation and (b, a) in relation:
            return False
    return True

def is_antitransitive_relation(relation):
    for a, b in relation:
        for c in [elem for elem in relation if elem[0] == b]:
            if (a, c[1]) in relation:
                return False
    return True

####Функция получения множества значений (множества А)####
def getABunch(relation):
    result = []
    for a2, b2, in relation:
        if a2 not in result:
            result.append(a2)
        if b2 not in result:
            result.append(b2)
    return result

# функция нахождения обратного отношения
def find_inverse_relation(relation):
    Abunch = getABunch(relation)
    result = [(b, a) for a, b in relation]
    return result

#### Функция генерации подписей к вершинам графа ###
def namePeak(relation):  # получает отношение вида [(1, 2), (2, 1), (3, 2)]
    resultTitles = []
    bunchA = getABunch(relation)
    for i in bunchA:
        resultTitles.append(str(i))
   
    return resultTitles

#### Функция генерации titles к вершинам графа ###
def nameTitles(relation):  # получает отношение вида [(1, 2), (2, 1), (3, 2)]
    resultTitles = []
    count = 0
    bunchA = getABunch(relation)
    for i in bunchA:
        count += 1
        resultTitles.append("PointN " + str(count))
    return resultTitles
### Функция перевода числового представления числа в hex
def goToHex(listIntColor):
    color_number = 0
    for i, jval in enumerate(listIntColor):
        if (i==0):
            color_number = jval << 8
        if (i==1):
            color_number += jval << 2
        else:
            color_number += jval
    # Перевод числового значения в формат Hex
    color_hex = '#{:06x}'.format(color_number)
    return color_hex

### Метод задания массива цветов для нодов (вершин) - сюда уже передается множество А
def getColorForNod(bunchA):
    resultColors = []
    for i in bunchA:
        arrayNumber = [random.randint(100, 255), random.randint(125, 200),
                       random.randint(200, 255)]
        hex = goToHex(arrayNumber)
        resultColors.append(hex)
    return resultColors

### Для неориентированного графа нет необходимости в методе, который расположился выше #######

###Функция отрисовки графа######
def drawGraph(relation, matrixOur):
    Abunch = getABunch(relation)
    net = Network() #объект графа
    labels = namePeak(relation)
    #labels = namePeak(matrixOur)
    colors = getColorForNod(Abunch)
    titles = nameTitles(relation)

    net.add_nodes(Abunch, label=labels, color=colors, title =titles)

    net.add_edges(relation)
   
    net.show('graph.html', notebook=False)

#### Функция генерации отношения из матрицы смежности ####
def generationRelation(matrix):
    resultRelation = []
    for i in range(0, len(matrix)):
        for j in range(0, len(matrix[0])):
            if matrix[i][j] != 0:
                new_element = (i+1, j+1)
                resultRelation.append(new_element)
    return resultRelation


####Главный метод#####
@post('/solutionSBO', method='POST')
#@app.route('/sbo', methods=['POST'])
def mainMethod():
    size = int(request.forms.get('sizeOurmatrix'))
    with open('graph.html', 'w'):
        pass
    
    # Создание матрицы заданного размера, заполненной нулями
    matrixOur = [[0 for _ in range(size)] for _ in range(size)]
    for i in range(size):
        for j in range(size):
            try:
                key = int(request.forms.get('matrix[%i][%i]' % (i+1, j+1)))
                matrixOur[i][j] = key
            except Exception as e:
                message = "Произошла ошибка при обработке данных: {}".format(str(e))
                return template('solutionSBO.tpl',
                                dataOne=message,
                                dataTwo='Неверные данные',
                                dataThree = 'Неверные данные',
                                dataA='Неверные данные',
                                year=datetime.now().year
                )
            
    relation = generationRelation(matrixOur)# Генерация отношения, переданного матрицей
    
    Abunch = getABunch(relation) # Генерация множества, из которого состоит подмножество бинарного отношения
    
    message_symmetric = is_asymmetric_relation(relation)# Проверка на асимметричность
    message_transitive  = is_antitransitive_relation(relation)# Проверка на антитранзитивность

    inverse_relation = find_inverse_relation(relation) # Нахождение обратного отношения
    messageOne = ""
    drawGraph(relation, matrixOur) # Получение html файла - графа
    if (message_symmetric and message_transitive):
        messageOne = 'Асимметрично  и антитринзитивно'
    else:
       if (message_symmetric):
        messageOne = "Асимметрично"
       if (message_transitive):
           messageOne += " Антитранзитивно"
       if not message_symmetric:
           messageOne += " Не асимметрично"
       if not message_transitive:
           messageOne += " Не антитранзитивно"
    messageTwo = str(inverse_relation)    
    
    return template('solutionSBO.tpl',
            dataOne = messageOne,
            dataTwo = messageTwo,
            dataThree = relation,
            dataA = str(Abunch),
            year=datetime.now().year
        )


