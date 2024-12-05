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

def test_connection():
    spaces_client = configure_spaces()
    try:
        response = spaces_client.list_objects(Bucket=os.getenv('SPACES_BUCKET'))
        print("✅ Connected to Digital Ocean Spaces")
        print(f"\nContents of bucket: {os.getenv('SPACES_BUCKET')}")
        if 'Contents' in response:
            for obj in response['Contents']:
                print(f"- {obj['Key']}")
        else:
            print("Bucket is empty")
    except Exception as e:
        print(f"❌ Connection failed: {str(e)}")

if __name__ == "__main__":
    test_connection()