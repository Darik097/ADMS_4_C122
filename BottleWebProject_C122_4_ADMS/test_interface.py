from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time


driver = webdriver.Edge()

# URL вашей страницы
url = 'http://yourwebsite.com/path/to/page'

# Инициализация WebDriver
driver.get(url)

try:
    # Перейти на часть страницы с калькулятором
    calculator_section = WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((By.ID, "calculatorSection"))
    )
    driver.execute_script("arguments[0].scrollIntoView();", calculator_section)

    # Выбрать размер матрицы 3x3
    select_element = Select(driver.find_element(By.ID, 'matrix-size'))
    select_element.select_by_value('3')

    # Нажать на кнопку "Загрузить из файла"
    load_button = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, "//button[contains(text(), 'Загрузить из файла')]"))
    )
    load_button.click()

    # Найти элемент загрузки файла и загрузить файл
    file_input = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, 'fileInput'))
    )
    file_input.send_keys(test_file_path)

    # Нажать кнопку "Решить"
    solve_button = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, "//button[contains(text(), 'Решить')]"))
    )
    solve_button.click()

    # Ожидание получения решения
    solution_block = WebDriverWait(driver, 20).until(
        EC.visibility_of_element_located((By.ID, "solution-block"))
    )

    # Проверка наличия результата
    result = driver.find_element(By.ID, 'result').text
    print("Result:", result)

finally:
    # Закрыть браузер
    time.sleep(5)  # Пауза для визуальной проверки результата, если нужно
    driver.quit()

