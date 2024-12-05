# app/models/tags.py
from sqlalchemy import Column, Integer, String, ForeignKey, TIMESTAMP, Boolean
from sqlalchemy.orm import relationship
from app.core.db_connection import Base

class Tag(Base):
    __tablename__ = "tags"
    
    id = Column(Integer, primary_key=True)
    name = Column(String(100))
    category_id = Column(Integer, ForeignKey('ui_ux_categories.id'))
    category_type = Column(String(50))

class IllustrationTag(Base):
    __tablename__ = "illustration_tags"
    
    id = Column(Integer, primary_key=True)
    name = Column(String(50))
    illustration_category_id = Column(Integer, ForeignKey('illustration_categories.id'))
    created_at = Column(TIMESTAMP)
    is_active = Column(Boolean)

class UiUxTag(Base):
    __tablename__ = "ui_ux_tags"
    
    id = Column(Integer, primary_key=True)
    name = Column(String(50))
    ui_ux_category_id = Column(Integer, ForeignKey('ui_ux_categories.id'))
    created_at = Column(TIMESTAMP)
    is_active = Column(Boolean)

class DevelopmentTag(Base):
    __tablename__ = "development_tags"
    
    id = Column(Integer, primary_key=True)
    name = Column(String(50))
    development_category_id = Column(Integer, ForeignKey('development_categories.id'))
    logo_icon = Column(String(255))
    is_active = Column(Boolean)
    created_at = Column(TIMESTAMP)