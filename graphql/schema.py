from models import Employee as EmployeeModel

import graphene
import graphene_sqlalchemy


class ExtendedConnection(graphene.Connection):
    class Meta:
        abstract = True

    total_count = graphene.Int()
    edge_count = graphene.Int()

    def resolve_total_count(root, info, **kwargs):
        return root.length
    def resolve_edge_count(root, info, **kwargs):
        return len(root.edges)

class MyConnectionField(graphene_sqlalchemy.SQLAlchemyConnectionField):
    RELAY_ARGS = ['first', 'last', 'before', 'after']

    @classmethod
    def get_query(cls, model, info, **args):
        query = super(MyConnectionField, cls).get_query(model, info, **args)
        for field, value in args.items():
            if field not in cls.RELAY_ARGS:
                query = query.filter(getattr(model, field) == value)
        return query

class Employee(graphene_sqlalchemy.SQLAlchemyObjectType):
    class Meta:
        model = EmployeeModel
        interfaces = (graphene.relay.Node,)
        connection_class = ExtendedConnection

class Query(graphene.ObjectType):
    node = graphene.relay.Node.Field()

    employees = MyConnectionField(
        Employee,
        emp_no=graphene.String()
    )


schema = graphene.Schema(query=Query)
