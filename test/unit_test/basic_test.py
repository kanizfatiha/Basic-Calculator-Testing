import unittest
from basic import calc  # Adjusted to import from basic.py
import math

class TestCalculator(unittest.TestCase):
    
    def test_basic_operations(self):
        self.assertEqual(calc('2 + 2'), 4)
        self.assertEqual(calc('2 - 3'), -1)
        self.assertEqual(calc('4 * 5'), 20)
        self.assertEqual(calc('8 / 2'), 4)
        self.assertEqual(calc('2^3'), 8)

    def test_function_operations(self):
        self.assertAlmostEqual(calc('sin(0)'), 0)
        self.assertAlmostEqual(calc('cos(0)'), 1)
        self.assertAlmostEqual(calc('tan(0)'), 0)
        self.assertAlmostEqual(calc('sqrt(4)'), 2)
        # Using math.radians to convert 90 degrees to radians for comparison
        self.assertAlmostEqual(calc('sin(radians(90))'), 1)

    def test_percentage(self):
        self.assertEqual(calc('50%'), 0.5)
        
    def test_advanced_operations(self):
        self.assertEqual(calc('2 + 3 * 4'), 14)
        self.assertEqual(calc('(2 + 3) * 4'), 20)
        self.assertAlmostEqual(calc('e'), math.e)
        self.assertAlmostEqual(calc('pi'), math.pi)

    def test_edge_cases(self):
        # Assuming your calc function returns 'None' for these scenarios
        self.assertIsNone(calc('2 / 0'))  # Division by zero
        self.assertIsNone(calc('aval(2, 3)'))  # Invalid function usage
        self.assertIsNone(calc('sin(90) + cos(0'))  # Missing parenthesis
    
    def test_type_errors(self):
        self.assertIsNone(calc('sin("90")'))  # Incorrect datatype
        self.assertIsNone(calc('sqrt(-1)'))  # Depending on how complex numbers are handled

if __name__ == '__main__':
    unittest.main()
