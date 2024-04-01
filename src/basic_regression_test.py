import unittest
from basic_unit_test import TestCalculator  # Assuming this is your unit test class
from basic_integration_test import TestCalculatorIntegration  # Assuming this is your integration test class

class RegressionTestCalculator(unittest.TestCase):
    
    def test_all_unit_tests(self):
        # Run all unit tests as part of regression testing
        suite = unittest.TestLoader().loadTestsFromTestCase(TestCalculator)
        result = unittest.TextTestRunner().run(suite)
        self.assertEqual(result.errors, [])
        self.assertEqual(result.failures, [])
    
    def test_all_integration_tests(self):
        # Run all integration tests as part of regression testing
        suite = unittest.TestLoader().loadTestsFromTestCase(TestCalculatorIntegration)
        result = unittest.TextTestRunner().run(suite)
        self.assertEqual(result.errors, [])
        self.assertEqual(result.failures, [])

if __name__ == '__main__':
    unittest.main()
