from django.contrib import admin
from django.urls import path
from ninja import NinjaAPI
from api.views import router as api_router

api = NinjaAPI()
api.add_router("/api/", api_router)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", api.urls),
]