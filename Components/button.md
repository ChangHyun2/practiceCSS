
## type

- <button> submit
- <input> button
- <input> reset
- <a> role='button'  

## btn style

- btn-outline

## btn size

- btn-lg
- btn-md
- ...

## btn width

- btn-block : width : 100%

## btn state

- <button disabled> (pointer-events:none)
- color 흐리게
- <a> 버튼은 disabled 속성 미지원 >> .disabled 클래스(pointer-events:none)를 추가 >> html tabindex 속성 추가(키보드 링크 방지)
- disabled 시, aria-disabled='true' 설정

```html
<a href="#" class="btn btn-secondary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Link</a>

```



