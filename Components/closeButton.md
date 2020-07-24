![](2020-07-24-03-14-30.png)

```html
<button type="button" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>

<button type="button" class="close" disabled aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
```

```css
*{
  padding:0;
  margin:0;
  box-sizing: border-box;
}

.close{
  display:inline-block;
  border:none;
  background: none;
  padding: 0.3em;
  color: #555;
  font-size: 2rem;
  transform: scalex(1.3);
  user-select:none;
  outline:none;
}
.close:not([disabled]){
    cursor:pointer;
}
.close:not([disabled]):hover{
color: #000;
}
```

## character entity

- &times; : `&times;`
- &plus; : `&plus;`
- &starf; : `&starf;`
- &star
- &phone
- ...
- https://dev.w3.org/html5/html-author/charref

## type selector & scalex

- [attribute]
- [attribute='value']
- text를 정사각형으로 바꾸기 위해 transform: scalex(1.3)을 사용