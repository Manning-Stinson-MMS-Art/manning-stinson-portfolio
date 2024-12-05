# app/models/categories.py
from sqlalchemy import Column, Integer, String, Text, Boolean, TIMESTAMP
from sqlalchemy.orm import relationship
from app.core.db_connection import Base

class IllustrationCategory(Base):
    __tablename__ = "illustration_categories"
    
    id = Column(Integer, primary_key=True)
    name = Column(String(50), nullable=False)
    description = Column(Text)
    created_at = Column(TIMESTAMP)
    is_active = Column(Boolean)
    
    projects = relationship("Project", backref="illustration_category")

class UiUxCategory(Base):
    __tablename__ = "ui_ux_categories"
    
    id = Column(Integer, primary_key=True)
    name = Column(String(100))
    description = Column(Text)
    
    projects = relationship("Project", backref="ui_ux_category")

class DevelopmentCategory(Base):
    __tablename__ = "development_categories"
    
    id = Column(Integer, primary_key=True)
    name = Column(String(50))
    description = Column(Text)
    created_at = Column(TIMESTAMP)
    is_active = Column(Boolean)
    
    projects = relationship("Project", backref="development_category")