#!/usr/bin/env sh
# abortar no caso de erros
set -e
# build
npm run build
# navegar para a pasta com o conteúdo compilado
cd dist 
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:lfernandes00/Trivia-Owl.git master
cd - 
