from django import views
from django.urls import path
from . import views

urlpatterns=[
path("notes/",views.getNotes ,name="notes"),
path("notes/create",views.createNote,name="createnote"),
path("notes/update/<str:id>/",views.updateNote,name="updatenote"),
path("notes/delete/<str:id>/",views.deleteNote,name="deletenote"),
path("notes/<str:id>/",views.getNote,name="note")
]