import unittest
from dotenv import load_dotenv
load_dotenv()
import sys
import os
from sqlalchemy import inspect
from app.core.logger import setup_logger
from app.core.db_connection import engine

class TestDBSchema(unittest.TestCase):
    def test_db_schema(self):
        logger = setup_logger("test_db")
        try:
            inspector = inspect(engine)
            schemas = inspector.get_schema_names()

            for schema in schemas:
                logger.info(f"\nSchema: {schema}")
                for table_name in inspector.get_table_names(schema=schema):
                    logger.info(f"\nTable: {table_name}")

                    # Column information
                    columns = inspector.get_columns(table_name, schema=schema)
                    logger.info("Columns:")
                    for column in columns:
                        logger.info(f"  {column['name']}: {column['type']} (nullable: {column['nullable']})")

                    # Primary key
                    pk = inspector.get_pk_constraint(table_name, schema=schema)
                    logger.info(f"Primary key: {pk['constrained_columns']}")

                    # Foreign keys
                    fks = inspector.get_foreign_keys(table_name, schema=schema)
                    if fks:
                        logger.info("Foreign keys:")
                        for fk in fks:
                            logger.info(f"  {fk['constrained_columns']} -> {fk['referred_table']}.{fk['referred_columns']}")

                    # Indexes
                    indexes = inspector.get_indexes(table_name, schema=schema)
                    if indexes:
                        logger.info("Indexes:")
                        for index in indexes:
                            logger.info(f"  {index['name']}: {index['column_names']}")

        except Exception as e:
            logger.error(f"Database connection failed: {str(e)}")

if __name__ == "__main__":
    unittest.main()