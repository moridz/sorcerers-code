"""A small command-line starting point for Sorcerer's Code."""

import argparse


def greeting(name: str) -> str:
    """Return a greeting for a nonempty name."""
    name = name.strip()
    if not name:
        raise ValueError("Name must not be blank")
    return f"Welcome, {name}! Your next adventure starts here."


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--name", default="Sorcerer", help="Your name")
    args = parser.parse_args()
    try:
        print(greeting(args.name))
    except ValueError as error:
        parser.error(str(error))


if __name__ == "__main__":
    main()
