"""
URL configuration for sales_backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from sales.views import all_sales, sales_summary, top_customers

urlpatterns = [
    path("all_sales/", all_sales, name="all_sales"),
    path("sales_summary/", sales_summary, name="sales_summary"),
    path("top_customers/", top_customers, name="top_customers"),
]
