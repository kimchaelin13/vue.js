https://avaiable.tistory.com/140

# [Vue.js Error] These dependencies were not found:

[TOC]

## 출처

[출처](https://avaiable.tistory.com/140)



## 현상

`npm run serve `실행시 이런 에러가 뜬다.

```error
ERROR  Failed to compile with 2 errors

This dependency was not found:

* core-js/modules/es.object.to-string.js in ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js, ./src/routes/index.js

To install it, you can run: npm install --save core-js/modules/es.object.to-string.js
Error from chokidar (C:\): Error: EBUSY: resource busy or locked, lstat 'C:\hiberfil.sys'

```



## 원인

: (참고사이트) https://github.com/vuejs/vue-cli/issues/3678

 여러 개의 사이트에 나온 내용을 참고해서 다 실행해 봤는데 효과가 있었던 것은 이 사이트의 내용이었다. 

 바벨과 code-js 버전 사이에 서로 맞지 않는 부분이 있기 때문이라고 한다. 

 code-js 버전 2를 사용해야 하는데 바벨을 설치하면 code-js 버전 3을 같이 써야 하여 이 때문에 에러가 발생한다는 내용으로 보인다.





## 해결

: barbel.config.js 파일 내용을 아래 처럼 바꾼다.

 

[수정 전 코드]

```JS
module.exports = {
  presets: [
      '@vue/cli-plugin-babel/preset'
  ]
}
 
```

[수정 후 코드]

```JS
module.exports = {
    presets: [
        [ "@vue/app", { useBuiltIns: "entry" } ]
    ]
}
```



 