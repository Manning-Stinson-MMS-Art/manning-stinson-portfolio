# app/models/portfolio.py
from sqlalchemy import Column, Integer, String, Text, Boolean, ARRAY, ForeignKey, TIMESTAMP
from sqlalchemy.orm import relationship
from app.core.db_connection import Base

class Project(Base):
    __tablename__ = "projects"
    
    id = Column(Integer, primary_key=True)
    title = Column(String(100))
    description = Column(Text)
    thumbnail_url = Column(Text)
    project_type = Column(String(50))
    tech_stack = Column(ARRAY(String))
    github_url = Column(Text)
    live_url = Column(Text)
    created_at = Column(TIMESTAMP)
    is_active = Column(Boolean)
    sprout_video_url = Column(Text)
    youtube_video_url = Column(Text)
    
    illustration_category_id = Column(Integer, ForeignKey('illustration_categories.id'))
    ui_ux_category_id = Column(Integer, ForeignKey('ui_ux_categories.id'))
    development_category_id = Column(Integer, ForeignKey('development_categories.id'))
    
    colors = relationship("ProjectColor", back_populates="project")