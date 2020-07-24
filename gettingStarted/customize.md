# customize

## color

1. Theme에 따라 분류

- primary (main) 
- secondary (sub) 
- success (green)
- danger (red)
- warning (orange)
- info (teal)
- light
- dark

2. Alll colors

_variable.scss파일에서 Sass variable과 Sass map으로 작성

```scss
$colors: (
  "blue":       $blue,
  "indigo":     $indigo,
  "purple":     $purple,
  "pink":       $pink,
  "red":        $red,
  "orange":     $orange,
  "yellow":     $yellow,
  "green":      $green,
  "teal":       $teal,
  "cyan":       $cyan,
  "white":      $white,
  "gray":       $gray-600,
  "gray-dark":  $gray-800
);
```

mix()함수 사용해서 직접 색상 구현 : 500 생상을 기준으로 tint(lighten), shade(darken)해서 100~900까지 구현 (검, 흰 색상을 혼합)
ligten(), darken()은 밝기만 조절

**mix vs lighten, darken** : https://codepen.io/emdeoh/pen/zYOQOPB

1. 색상
- blue
- indigo `#6610f2`
- purple `#6f42c1`
- pink
- red
- orange
- yellow
- green
- teal `#20c997`
- cyan `#17a2b8`
- gray
- black
- white

2. 명암단계 : 100 ~ 900
   
3. 변수명 : $blue-100


