import unittest
import sys
import os
from dotenv import load_dotenv
load_dotenv()

from app.core.logger import setup_logger
from app.core.db_connection import SessionLocal
from app.models.portfolio import Project
from app.models.categories import IllustrationCategory, UiUxCategory, DevelopmentCategory
from app.models.tags import Tag, IllustrationTag, UiUxTag, DevelopmentTag
from app.models.colors import Color, ProjectColor

class TestModels(unittest.TestCase):
    def test_models(self):
        logger = setup_logger("test_models")
        db = SessionLocal()
        
        try:
            # Test querying each model
            projects = db.query(Project).all()
            logger.info(f"Projects found: {len(projects)}")
            
            illustration_cats = db.query(IllustrationCategory).all()
            logger.info(f"Illustration categories found: {len(illustration_cats)}")
            
            colors = db.query(Color).all()
            logger.info(f"Colors found: {len(colors)}")
            
            tags = db.query(Tag).all()
            logger.info(f"Tags found: {len(tags)}")
            
        except Exception as e:
            logger.error(f"Database query failed: {str(e)}")
        finally:
            db.close()

if __name__ == "__main__":
    unittest.main()