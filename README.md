# hackernews-vue-test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


1-ch2: for resolving firebase problem just uninstall firebase with ``` npm uninstall firebase``` 
and  install this version instead ```npm i firebase@^8.10.0```

2-ch2: after installing ``` babel-jest & vue-jest ```, I had problem which when you ran the test your test fail because it couldn't found imported component, I solve this but adding this config to jest section in package.json:
``` moduleFileExtensions: ["js","json","vue"] ```. but I'm wonder it is working now even without this config!!!


3-ch2: for getting data from firebase you should turn on vpn.