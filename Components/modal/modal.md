# modal

- position : fixed 사용 ( [모바일 ie 미지원 ](https://caniuse.com/#search=position%20fixed))
- 다른 fixed el과 겹치면 안 되므로 z-index에 유의
- autofocus 속성 : 접근성에 좋지 않아
- tabindex
  - 탭 키 입력 시 탭이 위치하는 순서
  - [0, -1은 예외](https://stackoverflow.com/questions/32911355/whats-the-tabindex-1-in-bootstrap-for)

```
$zindex-dropdown:                   1000;
$zindex-sticky:                     1020;
$zindex-fixed:                      1030;
$zindex-modal-backdrop:             1040;
$zindex-modal:                      1050;
$zindex-popover:                    1060;
$zindex-tooltip:                    1070;
```

modal
  - dialog
      - content
        - header
        - body
        - footer

modal
- backdrop
- transition oopacity
  
dialog
- container
- margin 1.75rem auto로 중앙정렬 
- transition transform

```html
<div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
```

## css transition when a class changes

- collapse에서와 똑같은 문제 발생
- transition은 value를 계산하면서 연결해야되는데
- display의 경우는 none 과 block에 대한 value가 없음.
- visibility : visible / hidden으로 스위칭하거나
- overflow: hidden, max-height: 0/9999px으로 스위칭
https://stackoverflow.com/questions/13667827/css-transition-from-display-none-on-class-change
