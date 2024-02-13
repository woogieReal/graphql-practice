from models import Employee as EmployeeModel

import graphene
from graphene import relay, Connection, Int
from graphene_sqlalchemy import SQLAlchemyConnectionField, SQLAlchemyObjectType


class ExtendedConnection(Connection):
    class Meta:
        abstract = True

    total_count = Int()
    edge_count = Int()

    def resolve_total_count(root, info, **kwargs):
        return root.length
    def resolve_edge_count(root, info, **kwargs):
        return len(root.edges)

class Employee(SQLAlchemyObjectType):
    class Meta:
        model = EmployeeModel
        interfaces = (relay.Node,)
        connection_class = ExtendedConnection

class Query(graphene.ObjectType):
    node = relay.Node.Field()

    all_employees = SQLAlchemyConnectionField(Employee.connection)


schema = graphene.Schema(query=Query)
