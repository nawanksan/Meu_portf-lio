from ninja import Router
router = Router()

@router.get("/mensagem")
def mensagem(request):
    return {"mensagem": "Olá do Django Ninja!"}