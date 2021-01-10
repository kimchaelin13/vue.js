# vue-news

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


### 실습순서

1.ItemsView 생성
2.라우터에 ItemView로 갈 수 있는 라우터 정보를 등록
{
  path:'',
  component:'',
}

3.해당 페이지 컴포넌트로 이동했을때 받아온 params(id)를 이용해서 페이지에 데이터를 표시
created() {
  this.$store.dispatch('');
}


### 데이터 호출 시점

1.컴포넌트 라이프 사이클 훅
  - created : 컴포넌트 생성 되자마자 호출되는 로직

2. 라우터 네비게이션 가드
  - 특정 url로 접근하기 전의 동작을 정의하는 속성(함수)