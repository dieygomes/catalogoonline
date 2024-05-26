from django.db import models

class Comercio(models.Model):
    nome = models.CharField(max_length=255)
    descricao = models.CharField(max_length=356)
    endereco = models.CharField(max_length=500)
    telefone = models.CharField(max_length=20)
    link_catalogo = models.URLField(blank=True, null=True)
    informacoes_adicionais = models.TextField(max_length=2000, blank=True, null=True)
    logo = models.ImageField(upload_to='logos/', blank=True, null=True)

    def __str__(self):
        return self.nome