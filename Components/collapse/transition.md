
- value : auto는 transition이 적용되지 않는다.
- so, max-height를 사용한다.

1. max-height 이용하는 방법
   
```css
      .collapse {
        max-height: 0px;
        overflow: hidden;
        height: auto;
        transition: max-height 2s;
      }
      .collapse.show {
        max-height: 999px;
      }
```

- collapse의 height가 아닌 collapse의 max-height가 애니메이션 처리되기 때문에
- max-height 값을 너무 크거나 너무 작게 설정할 경우 
- show / hide 동작의 속도가 상이해진다.
- 따라서, collapse의 실제 box 사이즈에 가까운 height의 max-height를 설정하는 것이 바랍직
- 만약 collapse를 컴포넌트화시킨다면, DOM 요소가 생성될 떄 height를 이용해 실제 height를 그대로 max-height에 적용할 수 있을 것 같다


[고민하던 내용을 그대로 구현한 내용](https://css-tricks.com/using-css-transitions-auto-dimensions/)

부트스트랩에서도 data-attribute를 사용했는데 비슷한 동작 방식인 것 같다


2. js를 이용한 방법

- element.scrollHeight : element의 content-box height를 가져온다. so, height가 content-box height보다 작을 경우, 보이는 부분과 보이지 않는 부분을 모두 더한 결과가 반환됨
- 