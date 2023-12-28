from database import Base
from sqlalchemy import Column, Date, ForeignKey, Integer, String
from sqlalchemy.orm import backref, relationship

class Employees(Base):
    __tablename__ = "employees"
    emp_no = Column(Integer, primary_key=True)
    birth_date = Column(Date)
    first_name = Column(String)
    last_name = Column(String)
    gender = Column(String)
