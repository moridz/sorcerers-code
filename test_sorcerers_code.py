"""Run with python3 -m unittest -v."""

import subprocess
import sys
import unittest
from pathlib import Path

from sorcerers_code import greeting


class GreetingTests(unittest.TestCase):
    def test_trims_name(self):
        self.assertEqual(
            greeting("  Merlin  "),
            "Welcome, Merlin! Your next adventure starts here.",
        )

    def test_blank_name_is_rejected(self):
        with self.assertRaises(ValueError):
            greeting("  ")

    def run_cli(self, *args):
        return subprocess.run(
            [sys.executable, str(Path(__file__).with_name("sorcerers_code.py")), *args],
            capture_output=True,
            text=True,
        )

    def test_cli_default(self):
        result = self.run_cli()
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertIn("Welcome, Sorcerer!", result.stdout)

    def test_cli_custom_name(self):
        result = self.run_cli("--name", "Merlin")
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertIn("Welcome, Merlin!", result.stdout)

    def test_cli_blank_name_exits_with_error(self):
        result = self.run_cli("--name", " ")
        self.assertEqual(result.returncode, 2)
        self.assertIn("Name must not be blank", result.stderr)


if __name__ == "__main__":
    unittest.main()
