import csv
from pathlib import Path

def extract_csv_data(file_paths):
    data = []
    for file_path in file_paths:
        with open(file_path, 'r') as file:
            reader = csv.DictReader(file)
            for row in reader:
                data.append(row)
    return data