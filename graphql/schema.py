from models import Employee as EmployeeModel

import graphene
from graphene import relay
from graphene_sqlalchemy import SQLAlchemyConnectionField, SQLAlchemyObjectType


class Employee(SQLAlchemyObjectType):
    class Meta:
        model = EmployeeModel
        interfaces = (relay.Node,)

class Query(graphene.ObjectType):
    node = relay.Node.Field()

    all_employees = SQLAlchemyConnectionField(Employee.connection)


schema = graphene.Schema(query=Query)
