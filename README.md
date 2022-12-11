# 🐾 Veterinaria Nueva Estrada 🐾

## Que es esto?

- Veterinaria Nueva Estrada es un proyecto basado en Angular, con estilo Scss y de momento eso es todo.

## Para empezar

- Clonar el repo (claramente)
- `npm install`
- Thats pretty much it

## Para subirlo

- `git add .`
- `git commit -m "tag/ Description"` (tag basicamente puede ser fix, update, o algo semejante, fijate que la descripcion este copada, y en ingle no seas paja)
- `git push`

## Para Deploy

- La idea, al menos de momento, es que estamos haciendo deploy a Github-pages, entonces el rpoceso es el sigueinte: una vex commiteado y pusheado todo, en angular.json -> projects -> veterinaria-estrada -> architect -> options -> outputPath: debe estar "docs". Ahi se va a buildear el proyecto.
- Despues, index.html en el tag base debe decir `href="/veterinaria-estrada-deploy/"`, pero para correrlo en local debe decir `href="/"`.
- Asi que nada, ahora buildeamos con `ng build --base-href=/veterinaria-estrada-deploy/`, esto va a generar el build de angular en la carpeta docs.
- A esta carpeta entramos con la consola y pusheamos con `git push https://github.com/TiagoAltstadt/veterinaria-estrada-deploy.git`
