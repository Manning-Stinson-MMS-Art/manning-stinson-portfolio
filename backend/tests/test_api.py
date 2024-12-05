import os
from dotenv import load_dotenv
load_dotenv()

import unittest
from fastapi.testclient import TestClient
from app.main import app

class TestAPI(unittest.TestCase):
    def setUp(self):
        self.client = TestClient(app)

    def test_get_projects(self):
        print("Testing /api/v1/projects endpoint...")
        response = self.client.get("/api/v1/projects")
        self.assertEqual(response.status_code, 200)
        data = response.json()
        print(f"Response data: {data}")

if __name__ == "__main__":
    unittest.main()