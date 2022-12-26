# 🐾 Veterinaria Nueva Estrada 🐾

## General information
- Deployed to [Github Pages](https://tiagoaltstadt.github.io/veterinaria-estrada-deploy/)
- Veterinaria Nueva Estrada its an [Angular](https://angular.io) project with Scss. 
## New here?
- Clone [repo](https://github.com/TiagoAltstadt/veterinaria-nueva-estrada).
- `npm install`.
- Thats pretty much it.
- Keep in mind that media, like pictures, fonts, icons and s*it should be as follows `assets/(...)` and not with the `../../../assets/(...)` thing going around.

## Submitting new changes  
- Keep in mind a branch structure should be as follows `type/XXX-NNN--Title`.
    - `type` might be `fix`, `update`, `hotfix`, `feature`, etc.
    - `XXX` card tag.  
    - `NNN` task number.
    - `Title` Card title.
- Note: Always run the following commands first
    - `git add .` 
    - `git commit .m "xxx-xxx: Description"`
    - `git push`
## Deploy (Github-pages)

- So, as we are using github pages to deploy, here its how it works:
    - First everything should be up to date on github.
    - Following the route`angular.json/projects/veterinaria-estrada/architect/options/outputPath` showld say `docs`. Thats the route where the angular project will be built.
    - `ng build --configuration production --base-href=/veterinaria-nueva-estrada/`

- After this just `git push` the f*uck out of it and Github should do the rest.

## Deploy (Heroku)
- Under construction...

###### tags: `veterinaria-nueva-estrada`