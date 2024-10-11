from django.shortcuts import render
from rest_framework import viewsets
from . import serializer
from . import models

class TodoViewSet(viewsets.ModelViewSet):
    queryset = models.Todo.objects.all()
    serializer_class = serializer.TodoSerializer
