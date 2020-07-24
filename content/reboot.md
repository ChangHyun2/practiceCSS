## approach

margin-collapse가 골치아프니까 margin-top은 지양 bottom만 사용해서 방향을 통일

### margin-collapse

- +/+ : 더 큰 값이 margin
- -/+ : 계산 값이 margin
- -/- : 더 작은 값이 margin
- 즉, 부호가 같을 경우 : 절대값이 큰 값이 margin


## Native font stack

```css
$font-family-sans-serif:
  // Safari for macOS and iOS (San Francisco)
  -apple-system,
  // Chrome < 56 for macOS (San Francisco)
  BlinkMacSystemFont,
  // Windows
  "Segoe UI",
  // Android
  Roboto,
  // Basic web fallback
  "Helvetica Neue", Arial,
  // Linux
  "Noto Sans",
  // Sans serif fallback
  sans-serif,
  // Emoji fonts
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !default;

```

## `<h>` & `<p>`

`<h>` 태그는 margin-bottom : 1rem
`<p> `태그는 margin-bottom : 1rem

## Lists

margin-top : 0
margin-bottom : 1rem
nested lists의 경우 margin-bottom: 0
padding-left : 0

ul, ol{
    margin-top : 0;
    margin-bottom: 1rem;
}
ul > ul{
    margin-bottom: 0;
}

## Forms

- fieldset
  - no border,padding,margin
  - inputs를 wrapping하는 용도
- label
  - inline-block으로 설정해
  - input과의 여백이 생김
- input, select, textarea, button
  - margin 0
- button
  - :not(:disabled)일 때 cursor:pointer

## Misc elements

- address
  - font-style을 normal로 reset
  - line-height이 상속됨
  - margin-bottom: 1rem
- blockquote
  - margin을 0 0 1rem으로 reset
- HTML 5 hidden 속성
  - css display:none과 동일
  - display:none이 될 경우 workflow에 영향을 줌.
  - visibility를 invisible로 바꿀 경우 workflow에 영향을 주지 않고 사라짐