import pandas as pd
from sqlalchemy import Column, Integer, String, Float, create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

# Define the base class for the ORM models
Base = declarative_base()

# Define the PaintingData class to map to the 'painting_data' table
class PaintingData(Base):
    __tablename__ = 'painting_data'
    id = Column(Integer, primary_key=True, autoincrement=True)
    painting_index = Column(Integer)
    img_src = Column(String)
    painting_title = Column(String)
    season = Column(Integer)
    episode = Column(Integer)
    num_colors = Column(Integer)
    youtube_src = Column(String)
    colors = Column(String)
    color_hex = Column(String)
    Black_Gesso = Column(Integer)
    Bright_Red = Column(Integer)
    Burnt_Umber = Column(Integer)
    Cadmium_Yellow = Column(Integer)
    Dark_Sienna = Column(Integer)
    Indian_Red = Column(Integer)
    Indian_Yellow = Column(Integer)
    Liquid_Black = Column(Integer)
    Liquid_Clear = Column(Integer)
    Midnight_Black = Column(Integer)
    Phthalo_Blue = Column(Integer)
    Phthalo_Green = Column(Integer)
    Prussian_Blue = Column(Integer)
    Sap_Green = Column(Integer)
    Titanium_White = Column(Integer)
    Van_Dyke_Brown = Column(Integer)
    Yellow_Ochre = Column(Integer)
    Alizarin_Crimson = Column(Integer)

# Function to create the database tables
def create_tables(engine):
    Base.metadata.create_all(engine)

# Function to insert data into the database
def insert_data(data, session):
    for row in data:
        try:
            new_row = PaintingData(
                painting_index=row['painting_index'],
                img_src=row['img_src'],
                painting_title=row['painting_title'],
                season=row['season'],
                episode=row['episode'],
                num_colors=row['num_colors'],
                youtube_src=row['youtube_src'],
                colors=row['colors'],
                color_hex=row['color_hex'],
                Black_Gesso=row.get('Black_Gesso', 0),
                Bright_Red=row.get('Bright_Red', 0),
                Burnt_Umber=row.get('Burnt_Umber', 0),
                Cadmium_Yellow=row.get('Cadmium_Yellow', 0),
                Dark_Sienna=row.get('Dark_Sienna', 0),
                Indian_Red=row.get('Indian_Red', 0),
                Indian_Yellow=row.get('Indian_Yellow', 0),
                Liquid_Black=row.get('Liquid_Black', 0),
                Liquid_Clear=row.get('Liquid_Clear', 0),
                Midnight_Black=row.get('Midnight_Black', 0),
                Phthalo_Blue=row.get('Phthalo_Blue', 0),
                Phthalo_Green=row.get('Phthalo_Green', 0),
                Prussian_Blue=row.get('Prussian_Blue', 0),
                Sap_Green=row.get('Sap_Green', 0),
                Titanium_White=row.get('Titanium_White', 0),
                Van_Dyke_Brown=row.get('Van_Dyke_Brown', 0),
                Yellow_Ochre=row.get('Yellow_Ochre', 0),
                Alizarin_Crimson=row.get('Alizarin_Crimson', 0)
            )
            session.add(new_row)
        except Exception as e:
            print(f"Error inserting row: {e}")
    # Commit the transaction to save all the changes
    session.commit()

# Main script to set up the database connection and load data
if __name__ == "__main__":
    # Database connection string (adjust as needed for your setup)
    DATABASE_URL = "sqlite:///paintings.db"  # Example using SQLite

    # Create the database engine
    engine = create_engine(DATABASE_URL)
    # Create a configured "Session" class
    Session = sessionmaker(bind=engine)
    # Create a session
    session = Session()

    # Create tables in the database
    create_tables(engine)

    # Assuming 'transformed_data' is the data you have after the Transform step
    transformed_data = [
        # Example transformed data
        {
            'painting_index': 1,
            'img_src': 'http://example.com/image1.jpg',
            'painting_title': 'Happy Little Trees',
            'season': 1,
            'episode': 1,
            'num_colors': 5,
            'youtube_src': 'http://youtube.com/example',
            'colors': 'Blue, Green, White',
            'color_hex': '#0000FF, #00FF00, #FFFFFF',
            'Black_Gesso': 0,
            'Bright_Red': 1,
            'Burnt_Umber': 0,
            'Cadmium_Yellow': 2,
            # ... other color fields
            'Alizarin_Crimson': 0
        }
        # Add more data dictionaries as needed
    ]

    # Insert the transformed data into the database
    insert_data(transformed_data, session)

    # Close the session
    session.close()
