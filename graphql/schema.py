from models import Employees as EmployeesModel

import graphene
from graphene import relay
from graphene_sqlalchemy import SQLAlchemyConnectionField, SQLAlchemyObjectType


class Employees(SQLAlchemyObjectType):
    class Meta:
        model = EmployeesModel
        interfaces = (relay.Node,)

class Query(graphene.ObjectType):
    node = relay.Node.Field()

    all_employees = SQLAlchemyConnectionField(Employees.connection)


schema = graphene.Schema(query=Query)
