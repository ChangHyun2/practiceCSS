https://www.youtube.com/watch?v=_a5j7KoflTs

# vscode live sass compiler 설정

```js
"liveSassCompile.settings.autoprefix": ["> 1%", "last 2 versions"],
  "liveSassCompile.settings.formats": [
    {
      "format": "expanded",
      "extensionName": ".css",
      "savePath": "~/../css/"
    }
  ]
```

# scss 문법

## mapping

$variables : (
    "key" : value,
    "key2" : value2,
    "key3" : value3
)

selector{
    property : map-get($variables, key)
}

## nesting(?)

.main {
    #{&}__paragraph{
        color:green;
    }
}

.main .main__paragraph{
    color:green;
}

## function

@function weight($weight-name){
  @return map-get($font-weight, $weight-name);
}

## mixin

css 스타일 선언 snippet을 정의하고 재사용

@mixin whichStyle(variable: default) {
  property: value;
  property2: value2;
  property3: variable;
}

.main{
  @include whichStyle;
}

## if

@mixin theme($light-theme: true){  
  @if $light-theme {
    background: lighten($primary-color, 100%);
    color: darken($text-color, 100%);
  }
}
.light {
  @include theme($light-theme: true);
  // 파라미터만 전달하면 되지만, 명시적으로 선언
}
만약 false일 경우, 선언할 속성이 없기 때문에 css에 .light 셀렉터가 컴파일되지 않아.

## mixin media content

@mixin mobile {
  @media (max-width :800px){
    @content 
  }
}

@mixin mobile {
  flex-direction: column;
}

// mixin 내의 파라미터가 @content로 전달되어 @media를 생성

## extend

selector{

}
@extend selector

앞에서 선언한 selector 내용을 그대로 적용

## calc

sass에서는 서로 다른 타입을 계산할 수 없어

background:
linear-gradient(
  to right, 
  rgba($primary-color, 0.9),
  rgba($primary-color, 0.3)
),
url('.../img/model-1.jpg') center top;
background-size: cover;