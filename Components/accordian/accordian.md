https://cubic-bezier.com/#.17,.67,.83,.67

## 문제점

해결완료

![](2020-07-27-20-49-42.png)

- transition 발생 시 간헐적으로 background가 모두 채워지지 않는 현상

```css
/* after로 채워보았지만 여전히 발생 */
.accordian__bellow .btn:after {
position: absolute;
content: "";
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: #478bf1;
}

/* after에 border를 추가해 해결*/

.accordian__bellow .btn:after {
position: absolute;
content: "";
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: #478bf1;
}

/* after 대신 box-shadow로 해결*/
```

- collapse에 styling하지 말 것
- transition 중에 styling 변동에 의해 애니메이션이 매끄럽지 못 해
- collapse는 그대로 놔두고 collapse 하위의 컴포넌트를 스타일링할 것

## tabindex

- focus pseudo class는 입력이 focusing되는 element를 스타일링
- 따라서 a, li는 적용되지 않아.
- focus가 적용되지 않을 때에는 tab-index 속성 추가할 것