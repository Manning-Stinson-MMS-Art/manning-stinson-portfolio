# backend/etl/config/test_connection.py

import os
from dotenv import load_dotenv
import psycopg2
from sqlalchemy import create_engine

# Load environment variables
load_dotenv()

def test_db_connection():
    try:
        # Print environment variables (without password)
        print("Testing connection with:")
        print(f"Host: {os.getenv('DB_HOST')}")
        print(f"Port: {os.getenv('DB_PORT')}")
        print(f"Database: {os.getenv('DB_NAME')}")
        print(f"User: {os.getenv('DB_USER')}")
        print(f"SSL Mode: {os.getenv('DB_SSL_MODE')}")

        # Create connection string
        conn_string = f"postgresql://{os.getenv('DB_USER')}:{os.getenv('DB_PASSWORD')}@{os.getenv('DB_HOST')}:{os.getenv('DB_PORT')}/{os.getenv('DB_NAME')}"
        
        # Try SQLAlchemy connection
        engine = create_engine(conn_string, connect_args={'sslmode': 'require'})
        with engine.connect() as connection:
            print("\nSQLAlchemy Connection Successful!")
            
        # Try psycopg2 connection
        conn = psycopg2.connect(
            dbname=os.getenv('DB_NAME'),
            user=os.getenv('DB_USER'),
            password=os.getenv('DB_PASSWORD'),
            host=os.getenv('DB_HOST'),
            port=os.getenv('DB_PORT'),
            sslmode='require'
        )
        print("Psycopg2 Connection Successful!")
        conn.close()

    except Exception as e:
        print(f"Connection Failed: {str(e)}")

if __name__ == "__main__":
    test_db_connection()