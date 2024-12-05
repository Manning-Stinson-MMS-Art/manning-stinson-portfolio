import json
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.core.db_connection import get_db
from app.models.portfolio import Project
from app.models.categories import IllustrationCategory, UiUxCategory, DevelopmentCategory
from app.models.tags import IllustrationTag, UiUxTag, DevelopmentTag
from app.models.colors import Color, ProjectColor

router = APIRouter()

@router.get("/projects")
def get_projects(db: Session = Depends(get_db)):
   projects = db.query(Project).all()
   project_data = {
       "projects": [
           {
               "id": p.id,
               "title": p.title,
               "type": p.project_type,
               "category_id": p.illustration_category_id,
               "created": p.created_at.strftime("%Y-%m-%d")
           } for p in projects
       ]
   }
   print(json.dumps(project_data, indent=2))
   return project_data

@router.get("/projects/{project_id}")
def get_project(project_id: int, db: Session = Depends(get_db)):
   project = db.query(Project).filter(Project.id == project_id).first()
   if not project:
       raise HTTPException(404, "Project not found")
   return project

@router.get("/categories/{category_type}")
def get_categories(category_type: str, db: Session = Depends(get_db)):
   category_models = {
       "illustration": IllustrationCategory,
       "uiux": UiUxCategory,
       "development": DevelopmentCategory
   }
   model = category_models.get(category_type)
   if not model:
       raise HTTPException(400, "Invalid category type")
   return db.query(model).all()

@router.get("/colors")
def get_colors(db: Session = Depends(get_db)):
   return db.query(Color).all()

@router.get("/project/{project_id}/colors")
def get_project_colors(project_id: int, db: Session = Depends(get_db)):
   return db.query(ProjectColor).filter(ProjectColor.project_id == project_id).all()