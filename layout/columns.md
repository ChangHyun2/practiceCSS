1. alginment

flexbox 정렬과 똑같

- align-items-start/center/end
- align-self-start/center/end
- justify-content-start/center/end

2. column wrapping / column breaks

column wrapping
- 12 columns를 넘지 않을 경우 row 내에서 한 줄에 위치

column breaks
- w-100 : width:100%로 line break
- d-md-block : md부터 line break 발생
  
```html
    <div class="w-100 d-none d-md-block"></div>
```

3. reordering

- order-1~12
- order-first, order-last

4. Offsetting columns

- offset-md-3 : md부터 좌측에 3 offset
- margin : percent

5. margin

ml-md-auto : md부터 left에 margin auto 적용
  
6. standalone column

row 없이 col만 사용할 경우
width %가 적용되며 padding이 생략됨