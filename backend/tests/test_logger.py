import sys
import os
import logging
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app.core.logger import setup_logger

def test_logging():
    logger = setup_logger("test_logger")
    logger.setLevel(logging.DEBUG)
    
    logger.debug("Debug message - Testing system details")
    logger.info("Info message - Normal operation")
    logger.warning("Warning message - Something might be wrong")
    logger.error("Error message - Something went wrong")
    logger.critical("Critical message - System failure")

if __name__ == "__main__":
    test_logging()