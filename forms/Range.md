## range input

- min/max default : 0/100
- step default : 1

```html
<input type="range" class="form-range" min="0" max="5" id="customRange2">
<input type="range" class="form-range" min="0" max="5" id="customRange2">
<input type="range" class="form-range" min="0" max="5" step="0.1"id="customRange2">
```


## 스타일링

1. thumb (원형 조종바)

- ::-webkit-slider-thumb
- ::-moz-range-thumb
- ::-ms-thumb

2. track

- ::-webkit-slider-runnable-track
- ::-moz-range-track
- ::-ms-thumb

3. state

- focus
- ::thumb:active 원형바 클릭 시 검정 배경색 처리
- :disabled 

