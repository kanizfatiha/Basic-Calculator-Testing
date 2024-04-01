import unittest
from io import StringIO
import sys
from basic import calc
# # Adjust the import path to include the src directory.
# sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'src')))

from basic import main  # Assuming main() encapsulates the running of your calculator.

class TestCalculatorIntegration(unittest.TestCase):

    def setUp(self):
        # Backup the original stdin and stdout
        self.original_stdin = sys.stdin
        self.original_stdout = sys.stdout
        # Set up the mock stdin and stdout
        self.mock_stdin = StringIO()
        self.mock_stdout = StringIO()
        sys.stdin = self.mock_stdin
        sys.stdout = self.mock_stdout

    def tearDown(self):
        # Restore stdin and stdout
        sys.stdin = self.original_stdin
        sys.stdout = self.original_stdout

    def test_integration(self):
        # Simulate input (e.g., "2 + 2" followed by "quit")
        self.mock_stdin.write('2 + 2\nquit\n')
        self.mock_stdin.seek(0)  # Reset the mock input's read position

        # Run the application
        main()

        # Check the output
        output = self.mock_stdout.getvalue()
        self.assertIn('4', output)  # Assuming the result "4" is part of the output for "2 + 2"

if __name__ == '__main__':
    unittest.main()
