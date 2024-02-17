from models import Employee as EmployeeModel

import graphene
import graphene_sqlalchemy

from relay_pagination.fields import PageConnection, PageConnectionField


class Employee(graphene_sqlalchemy.SQLAlchemyObjectType):
    class Meta:
        model = EmployeeModel
        interfaces = (graphene.relay.Node,)
        connection_class = PageConnection

class Query(graphene.ObjectType):
    node = graphene.relay.Node.Field()

    employees = PageConnectionField(
        Employee,
        emp_no=graphene.Int(),
    )


schema = graphene.Schema(query=Query)
