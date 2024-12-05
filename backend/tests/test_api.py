from dotenv import load_dotenv
load_dotenv()

from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_get_projects():
    print("Testing /api/v1/projects endpoint...")
    response = client.get("/api/v1/projects")
    print(f"Status code: {response.status_code}")
    data = response.json()
    print(f"Response data: {data}")
    assert response.status_code == 200

if __name__ == "__main__":
    test_get_projects()