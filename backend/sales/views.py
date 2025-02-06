# sales/views.py

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from sales.services import fetch_all_sales, fetch_sales_summary, fetch_top_customers

@csrf_exempt
def all_sales(request):
    start_date = request.GET.get("start_date")
    end_date = request.GET.get("end_date")
    category = request.GET.get("category")

    data = fetch_all_sales(start_date, end_date, category)
    return JsonResponse(data, safe=False)

@csrf_exempt
def sales_summary(request):
    start_date = request.GET.get("start_date")
    end_date = request.GET.get("end_date")
    category = request.GET.get("category")

    data = fetch_sales_summary(start_date, end_date, category)
    return JsonResponse(data)

@csrf_exempt
def top_customers(request):
    data = fetch_top_customers()
    return JsonResponse(data, safe=False)
