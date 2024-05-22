import unittest
from BinaryVar1 import is_reflexive, is_symmetric, is_transitive, is_additional_relation

class Test_test1(unittest.TestCase):
    def test_is_reflexive(self):
        test_cases = [
            ([[1, 0], [0, 1]], "Да"),
            ([[0, 0], [0, 1]], "Нет"),
            ([[1, 1], [1, 1]], "Да"),
            ([[0, 0], [0, 0]], "Нет"),
            ([[0, 0, 0], [0, 0, 0], [0, 0, 0]], "Нет"),
            ([[1, 0, 0], [0, 1, 0], [0, 0, 1]], "Да"),
            ([[1]], "Да"),
            ([[0]], "Нет")
        ]
        for matrix, expected in test_cases:
            with self.subTest(matrix=matrix):
                # Arrange
                input_matrix = matrix
                expected_result = expected

                # Act
                result = is_reflexive(input_matrix)

                # Assert
                self.assertEqual(result, expected_result)


    def test_is_symmetric(self):
        test_cases = [
            ([[1, 0], [0, 1]], "Да"),
            ([[1, 1], [1, 1]], "Да"),
            ([[1, 0], [1, 1]], "Нет"),
            ([[0, 1], [1, 0]], "Да"),
            ([[0, 0, 0], [0, 0, 0], [0, 0, 0]], "Нет"),
            ([[1, 1, 1], [1, 1, 1], [1, 1, 1]], "Да"),
            ([[1]], "Да"),
            ([[0]], "Да")
        ]
        for matrix, expected in test_cases:
            with self.subTest(matrix=matrix):
                # Arrange
                input_matrix = matrix
                expected_result = expected

                # Act
                result = is_symmetric(input_matrix)

                # Assert
                self.assertEqual(result, expected_result)

    def test_is_transitive(self):
        test_cases = [
            ([[1, 0], [0, 1]], "Да"),
            ([[1, 1], [0, 1]], "Да"),
            ([[1, 1], [1, 1]], "Да"),
            ([[1, 1, 0], [0, 1, 1], [1, 0, 1]], "Нет"),
            ([[1, 0, 1], [0, 1, 0], [1, 0, 1]], "Да"), 
            ([[1, 1, 0], [1, 1, 1], [0, 1, 1]], "Нет"),  
            ([[1, 1, 1, 0], [1, 1, 1, 0], [1, 1, 1, 0], [0, 0, 0, 1]], "Нет"),  
            ([[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 1, 1], [1, 0, 0, 1]], "Нет")  
        ]
        for matrix, expected in test_cases:
            with self.subTest(matrix=matrix):
                # Arrange
                input_matrix = matrix
                expected_result = expected

                # Act
                result = is_transitive(input_matrix)

                # Assert
                self.assertEqual(result, expected_result)

    def test_is_additional_relation(self):
        test_cases = [
            ([[1, 0], [0, 1]], [[0, 1], [1, 0]]),
            ([[0, 0], [0, 1]], [[1, 1], [1, 0]]),
            ([[1, 1], [1, 1]], [[0, 0], [0, 0]]),
            ([[1, 1, 1], [1, 1, 1], [0, 0, 0] ], [[0, 0, 0], [0, 0, 0], [1, 1, 1]]),
            ([[0]], [[1]]),
            ([[1]], [[0]])
        ]
        for matrix, expected in test_cases:
            with self.subTest(matrix=matrix):
                # Arrange
                input_matrix = matrix
                expected_result = expected

                # Act
                result = is_additional_relation(input_matrix)

                # Assert
                self.assertEqual(result, expected_result)

if __name__ == '__main__':
    unittest.main()