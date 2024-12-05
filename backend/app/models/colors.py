# app/models/colors.py
from sqlalchemy import Column, Integer, String, ForeignKey, TIMESTAMP, NUMERIC, Boolean
from sqlalchemy.orm import relationship
from app.core.db_connection import Base

class Color(Base):
    __tablename__ = "colors"
    
    id = Column(Integer, primary_key=True)
    name = Column(String(50), nullable=False)
    hex_value = Column(String(7))
    red = Column(Integer)
    green = Column(Integer)
    blue = Column(Integer)
    created_at = Column(TIMESTAMP)
    updated_at = Column(TIMESTAMP)
    source = Column(String(50))
    theme_name = Column(String(100))
    shade = Column(String(50))
    is_base_color = Column(Boolean)
    rgba_alpha = Column(NUMERIC(3, 2))
    hsla_hue = Column(Integer)
    hsla_saturation = Column(Integer)
    hsla_lightness = Column(Integer)
    hsla_alpha = Column(NUMERIC(3, 2))

class ProjectColor(Base):
    __tablename__ = "project_colors"
    
    id = Column(Integer, primary_key=True)
    project_id = Column(Integer, ForeignKey('projects.id'))
    color_id = Column(Integer, ForeignKey('colors.id'))
    color_position = Column(Integer)
    created_at = Column(TIMESTAMP)
    updated_at = Column(TIMESTAMP)
    
    project = relationship("Project", back_populates="colors")
    color = relationship("Color")