#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
# Import necessary modules
import os
import sys


def main():
    """Run administrative tasks."""
    # Set the default settings module for the Django project
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'myproject3.settings')
    try:
        # Import the function to execute commands from the command line
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        # Raise an error if Django isn't installed or the virtual environment isn't activated
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    # Pass command-line arguments to Django's command handler
    execute_from_command_line(sys.argv)

# Ensure this script runs only when executed directly
if __name__ == '__main__':
    main()
