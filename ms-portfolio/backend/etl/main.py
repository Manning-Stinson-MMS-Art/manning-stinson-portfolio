from pathlib import Path
from .pipeline.extract import extract_csv_data
from .pipeline.transform import transform_data
from .pipeline.load import load_data_to_database

def run_etl_pipeline():
    csv_file_paths = [
        Path('data/raw/jop-colors.csv'),
        Path('data/raw/jop-episode-dates.csv'),
        Path('data/raw/jop-subject-matter.csv')
    ]

    extracted_data = extract_csv_data(csv_file_paths)
    transformed_data = transform_data(extracted_data)
    load_data_to_database(transformed_data)