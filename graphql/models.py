import enum
from database import Base
from sqlalchemy import Column, Date, ForeignKey, Integer, String, Enum
from sqlalchemy.orm import backref, relationship

class MF(enum.Enum):
    M = 'M'
    F = 'F'

class Employee(Base):
    __tablename__ = "employees"
    emp_no = Column(Integer, primary_key=True)
    birth_date = Column(Date)
    first_name = Column(String(14))
    last_name = Column(String(16))
    gender = Column(Enum(MF))

class Department(Base):
    __tablename__ = "departments"
    dept_no = Column(String(4), primary_key=True)
    dept_name = Column(String(40), unique=True)

class DeptManager(Base):
    __tablename__ = "dept_manager"
    emp_no = Column(Integer, ForeignKey("employees.emp_no"), primary_key=True)
    dept_no = Column(String(4), ForeignKey("departments.dept_no"), primary_key=True)
    from_date = Column(Date)
    to_date = Column(Date)

class DeptEmp(Base):
    __tablename__ = "dept_emp"
    emp_no = Column(Integer, ForeignKey("employees.emp_no"), primary_key=True)
    dept_no = Column(String(4), ForeignKey("departments.dept_no"), primary_key=True)
    from_date = Column(Date)
    to_date = Column(Date)

class Titles(Base):
    __tablename__ = "titles"
    emp_no = Column(Integer, ForeignKey("employees.emp_no"), primary_key=True)
    title = Column(String(50), primary_key=True)
    from_date = Column(Date, primary_key=True)
    to_date = Column(Date)

class Salaries(Base):
    __tablename__ = "salaries"
    emp_no = Column(Integer, ForeignKey("employees.emp_no"), primary_key=True)
    salary = Column(Integer)
    from_date = Column(Date, primary_key=True)
    to_date = Column(Date)