## api

heroku buildpacks:add -a github-trending-app-api heroku/nodejs

heroku buildpacks:add -a github-trending-app-api -i 1 https://github.com/lstoll/heroku-buildpack-monorepo

heroku config:set -a github-trending-app-api APP_BASE="api"

git push github-trending-app-api main

## vue

heroku buildpacks:add -a github-trending-app-vue heroku/nodejs

heroku buildpacks:add -a github-trending-app-vue -i 1 https://github.com/lstoll/heroku-buildpack-monorepo

heroku config:set -a github-trending-app-vue APP_BASE="vue"

git push github-trending-app-vue main
