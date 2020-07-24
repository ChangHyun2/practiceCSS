# Getting Started

## Box-sizing

border-box : width 계산이 쉽다.
content-box + padding + border = width

```css
from https://css-tricks.com/box-sizing/

1. normal

* {
  box-sizing: border-box;
}

2. better

*, *:before, *:after {
  box-sizing: border-box;
} 

3. best

html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit; // 다른 셀렉터에서 content-box로 지정할 수 있게 된다.
}
```

border-box는 구글맵 같은 API를 사용할 경우, 문제가 될 수 있다고 함.

## visually hidden content

시각장애인을 위한 컨텐츠는 <br>
`<span class="sr-only"></span>`<br>
`<a class="sr-only-focusable" href="#content">Skip to main content</a>`<br>
로 작성

