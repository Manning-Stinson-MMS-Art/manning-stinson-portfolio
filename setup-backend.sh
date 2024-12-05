#!/bin/bash

# Create main directory structure
mkdir -p backend/{app,tests,alembic/versions}

# Create app structure
cd backend/app
mkdir -p {core,api/v1/endpoints,models,schemas,services}

# Create __init__.py files
touch __init__.py main.py
touch core/{__init__.py,config.py,database.py,security.py,logger.py}
touch api/__init__.py
touch api/v1/__init__.py
touch api/v1/endpoints/{__init__.py,auth.py,portfolio.py}
touch models/{__init__.py,user.py,portfolio.py}
touch schemas/{__init__.py,user.py,portfolio.py}
touch services/{__init__.py,spaces.py}

# Create test files
cd ../tests
touch __init__.py conftest.py test_auth.py test_portfolio.py

# Create root level files
cd ..
touch {.env,requirements.txt,alembic.ini}

echo "Backend directory structure created successfully!"