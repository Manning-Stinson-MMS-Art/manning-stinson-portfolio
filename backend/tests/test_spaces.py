import sys
import os
import logging
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app.core.logger import setup_logger

def test_spaces_connection():
    logger = setup_logger("test_spaces")
    
    # Import here to avoid circular import
    from app.services.spaces import configure_spaces
    
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
    test_spaces_connection()