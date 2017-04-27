from django.shortcuts import render


# Create your views here.
def home(request):

    args = dict()

    args["page_title"] = 'Hello, React!'

    return render(request, 'home.html', args)
