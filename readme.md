# dlopezcastellote.dev

Página web personal de David López Castellote: [dlopezcastellote.dev](https://dlopezcastellote.dev)

## Desplegar web a Github Pages con Github Actions

```bash
# Crear un commit con los cambios que sean
git add .
git commit -m "commit"
# Etiquetamos el commit para que Github Actions ejecute el workflow
git tag deploy-site_$(date +"%Y-%m-%d_%H-%M-%S")
git push origin source --tags
```

Podemos crear un alias de git para que sea más sencillo ejecutar el comando de `git tag`:

```bash 
git config alias.tag-deploysite '!git tag deploy-site_$(date +"%Y-%m-%d_%H-%M-%S")'
```

y la próxima vez ejecutar:

```bash
# ... commit
git tag-deploysite
git push origin source --tags
```

## TODOs:

- Filtro de posts por etiqueta
- Mantener la página del blog al entrar y salir de un post
- Página "about"
- Página "contact"