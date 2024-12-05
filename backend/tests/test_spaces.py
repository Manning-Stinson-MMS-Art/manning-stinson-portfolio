import unittest
import sys
import os
import logging
from app.core.logger import setup_logger
from app.services.spaces import configure_spaces

class TestSpacesConnection(unittest.TestCase):
    def test_spaces_connection(self):
        logger = setup_logger("test_spaces")
        try:
            spaces_client = configure_spaces()
            response = spaces_client.list_objects(Bucket=os.getenv('SPACES_BUCKET'))
            logger.info(f"Successfully connected to Spaces. Bucket: {os.getenv('SPACES_BUCKET')}")
            if 'Contents' in response:
                for obj in response['Contents']:
                    logger.info(f"Found object: {obj['Key']}")
            else:
                logger.info("Bucket is empty")
        except Exception as e:
            logger.error(f"Spaces connection failed: {str(e)}")

if __name__ == "__main__":
    unittest.main()