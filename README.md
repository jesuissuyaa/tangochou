### how to run this app
STEP 1: run the web app
```
npm run dev
```
or 
```
yarn dev
```

STEP 2: start the db server
```
npm run json-server --routes
```

## TODO
- show definitions in vocab list: check
  - [id].tsx
  - [word].tsx
  - dbUtils.tsx
  
- use react-loader

## ISSUE
- multiple occurences of same word -> how to store in database? index?
- replacing ' -> &ampapos; ?
- restructure DB
- update DB
- how to get definitions for multiple entries e.g. "est" -> "être", "Est", ...
- "puisqu'il" -> "puisque" or "il"? 