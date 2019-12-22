# Tip n' Guess

```
A friendly game made to be played locally between friends.
It's a step by step game, which each step has its own difficulty, each step's goal is to guess five words that your partner will help you hit it by giving you one word tips about it. =)
```

## tipnguess workflow:

```
run: yarn install then yarn serve (compile and hot-reload for development)
run: yarn build (compiles and minifies for production)

```

### src folders:

```
assets: svgs and images
components: where the components of the application are created, both base and specific components.
i18n: internationalization folder, keep the project's locales used by vuetify.
modules: vuex modules of the aplication, containing global store that share information between components.
plugins: plugins such as vuetify(used to define its uses).
router: instances the vue router, defining its mode, base and routes.
services: contains the api calls, divided by modules.
utils: contains funcionalities that can be used anywhere inside the project.
views: main place to keep the views of the aplication, used mainly by router's routes.
```
