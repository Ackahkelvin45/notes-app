from urllib import response
from django.shortcuts import render
from requests import request
from rest_framework.response import Response
from rest_framework.decorators import api_view
from yaml import serialize
from .models import *
from .serializers import NoteSerializer

@api_view(["GET"])
def getRoutes(request):
 return Response()


@api_view(["GET"])
def getNotes(request):
  notes=Note.objects.all().order_by("-updated")
  serializer=NoteSerializer(notes,many=True)
  return Response(serializer.data)

  
@api_view(["GET"])
def getNote(request,id):
  notes=Note.objects.get(pk=id)
  serializer=NoteSerializer(notes,many=False)
  return Response(serializer.data)

@api_view(['PUT',"GET"])
def updateNote(request,id):
  data=request.data
  note=Note.objects.get(pk=id)
  serializer=NoteSerializer(instance=note,data=data)
  if serializer.is_valid():
    serializer.save()

    return Response(serializer.data)

@api_view(["DELETE","GET"])
def deleteNote(request,id):
  note=Note.objects.get(pk=id)
  note.delete()
  return  Response("Note was deleted Succesfully")

@api_view(["POST"])

def createNote(request):
  data=request.data
  note=Note.objects.create(
    header=data["header"],
    body=data["body"]
  )
  serializer =NoteSerializer(note,many=False)

  return Response(serializer.data)