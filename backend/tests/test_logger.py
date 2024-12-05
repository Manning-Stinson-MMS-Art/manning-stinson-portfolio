import unittest
import sys
import os
import logging
from app.core.logger import setup_logger

class TestLogging(unittest.TestCase):
    def test_logging(self):
        logger = setup_logger("test_logger")
        logger.setLevel(logging.DEBUG)
        
        logger.debug("Debug message - Testing system details")
        logger.info("Info message - Normal operation")
        logger.warning("Warning message - Something might be wrong")
        logger.error("Error message - Something went wrong")
        logger.critical("Critical message - System failure")

if __name__ == "__main__":
    unittest.main()