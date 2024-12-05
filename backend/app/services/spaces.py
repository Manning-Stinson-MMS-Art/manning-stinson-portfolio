import boto3
import os
from dotenv import load_dotenv

load_dotenv()

def configure_spaces():
    session = boto3.session.Session()
    client = session.client('s3',
        endpoint_url="https://nyc3.digitaloceanspaces.com",
        region_name='nyc3',
        aws_access_key_id=os.getenv('SPACES_KEY'),
        aws_secret_access_key=os.getenv('SPACES_SECRET')
    )
    return client