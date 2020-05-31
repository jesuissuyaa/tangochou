### how to run this app

STEP 1: run the web app

```bash
npm run dev
```

or 

```bash

yarn dev
```

STEP 2: start the db server

```bash
npm run json-server --routes
```

## TODO

- [ ] 0921: retrieving definition takes too much time
- [ ] 0921: default dictionary skips linguee

- add text page
  - layout
  - feedback on adding text

- change link to definition depending on dictionary 
- Github stuff: 
  - configure gitignore
  - delete unused files

## SOLVED ISSUES

- [x] collins -> redirect: needs url separate encoding from linguee; use utf-8 encoding

