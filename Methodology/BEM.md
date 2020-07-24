https://en.bem.info/methodology/quick-start/#element

# BEM

BEM : Block ELement Modifier
BEM은 컴포넌트 기반의 web 개발 방식에 대한 접근법으로, UI를 독립된 블락으로 나누어 개발한다.

## 목차
- Block
- Element
- Modifier
- Mix
- File structure

## Block

기능적으로 독립된, 재사용이 가능한 페이지 구성요소.
ex) HTML의 class 속성

- block name은 해당 컴포넌트의 **사용 목적**을 나타낸다. (menu or button)
- not state (red or big)

```HTML
purpose : correct
<div class="error"></div>

<!-- state : incorrect
<div class="red-text"></div>  -->
```

- block은 margin이나 positioning과 같은 block이 놓여있는 환경(external gemoetry)에 영향을 주어서는 안 된다. 
- BEM을 사용할 경우, class로만 작성한다.

block의 재사용을 위한 독립성을 보장하기 위해 위 조건들을 충족해야 한다.

Nesting
- 블락은 서로 nest되어질 수 있다.

```HTML
<!-- 'header' block -->
<header class="header">
    <!-- nested 'logo' block-->
    <div class="logo"></div>
    <!-- nested 'search-form' block-->
    <form class="search-form"></form>
</header>
```

## Element

block과 혼합되어 사용되고 block의 일부를 나타내며, 단독으로 사용될 수 없다.

- block과 마찬가지로, state가 아닌 purpose를 나타낸다.
- `block-name__element-name`와 같이 class명을 작성한다.

```HTML
<!-- 'header' block -->
<header class="header">
    <!-- nested 'logo' block-->
    <div class="logo"></div>
    <!-- nested 'search-form' block-->
    <form class="search-form">
        <!-- 'input' element in the 'search-form block -->
        <input class="search-form__input">
        <!-- 'button' element in the 'search-form block -->
        <button class="search-form__button">Search</button>
    </form>
</header>
```

Nesting of Elements
- elements는 서로 nest되어질 수 있다.
- element는 항상 block의 일부이며, element의 inner로 nest되는 것은 불가능하다.

```HTML
<form class="search-form">
    
    <div class="search-form__content">
        <!-- <input class="search-form__content__input"> -->
        <input class="search-form__content-input">
        <!-- <button class="search-form__content__button">Search</button> -->
        <button class="search-form__content-button">Search</button>
    </div>

    <div class="search-form__content2">
        <input class="search-form__input">
        <button class="search-form__button">Search</button>
    </div>
</form>
```

block은 namespace를 정의하여, elements가 block에 의존적이게 된다.

`block
block_elem`

block은 DOM tree에서 nested elements를 가질 수 있지만,

```HTML
<div class ="block">
    <div class="block__elem1">
        <div class="block__elem2">
        </div>
    </div>
</div>
```

BEM 방법론에서는 elements가 flat list로 보여진다. 

.block {}
.block__eleme1 {}
.block__eleme2 {}
.block__eleme3 {}

```HTML
<div class ="block">
    <div class="block__elem1">
    </div>
    <div class="block__elem2">
    </div>
</div>
```
block의 구조가 바뀔지라도, elements의 css 규칙은 그대로 유지된다.

Membership

element는 항상 block의 일부이며, block과 떨어져 단독으로 사용할 수 없다.

Optionality

모든 block이 element를 가져야할 필요는 없다.

## Should I create a block or an element?

Create a block
만약, 코드가 재사용될 수 있고 다른 page의 컴포넌트이 구현되는 것과 독립되어있을 경우.

Create an element
만약, 코드가 parent entity(block, not element)없이는 사용이 불가능한 경우.

## Modifier

block/element의 appearance, state, behavior를 정의.

modifier name은 appearance(size_s, theme_islands, ...), state(disabled, focused), behavior(directions_left-top)와 같은 것들을 묘사한다.
modifier 이름은 (_)를 사용해 block/element와 분리되어진다. 

### Types of Modifier

1. Boolean

`disabled`와 같이 true/false state를 가지는 경우.
block modifier : block-name_modifier-name
element modifier : block-name__element-name_modifier-name
modifier는 단독으로 사용될 수 없으며, block 또는 element class명과 함께 사용한다.

```HTML
<form class = "search-form search-form_focused">
    <input class="search-form__input">
    <button class="search-form__button search-form__button_disabled">search</button>
</form>

<form class="search-form search-form_theme_islands">
    <input class="search-form__input">
    <button class="search-form__button">Search</button>
</form>

<!-- incorrect 단독 사용 불가-->
<form class="search-form_theme_islands"> 
    <input class="search-form__input">
    <button class="search-form__button">Search</button>
</form>
```

2. Key-value

modifier value가 중요할 경우 사용한다. 
'a menu with the `islands`(value) design' >> menu_theme_islands

- block-name_modifier-name_modifier-value
- block-name__element-name_modifier-name_modifier-value

```HTML
<form class="search-form search-form_theme_islands">
    <input class="search-form__input">

    <!-- The `button` element has the `size` modifier with the value `m` -->
    <button class="search-form__button search-form__button_size_m">Search</button>
</form>

<!-- 다음과 같이 2개의 동일한 modifier를 동시에 사용할 수 없다. -->
<form class="search-form
             search-form_theme_islands
             search-form_theme_lite">

    <input class="search-form__input">

    <button class="search-form__button
                   search-form__button_size_s
                   search-form__button_size_m">
        Search
    </button>
</form>
```

## Mix

1개의 DOM node에 서로 다른 BEM entities를 사용하는 기법

```HTML
<div class="header">
    header에 search-form block을 mix
    <div class="search-form header__search-form"></div>
</div>
<div class="search-form">
    <input class="search-form__input">
    <button class="search-form__button">
</div>

.header{}
.header__search-form{}

.search-form{}
.search-form__input{}
.search-form__button{}
```
위와 같이 header 내에서 search-form block을 사용하면서도 header__search-form element를 통해 padding, margin, position과 같은 external geometry를 설정할 수 있다.

## File Structure

BEM 방법론에서 사용하는 컴포넌트 접근법은 독립성에 의해 서로 다른 파일로 분리되어 관리될 수 있다.
각 components에 대한 source files를 single file로 조합하기 위해, build process를 사용하며, files의 결과는 bundles라고 한다.

![](2020-06-30-20-06-17.png)

```

search-form/                           # Directory of the search-form

    __input/                           # Subdirectory of the search-form__input
        search-form__input.css         # CSS implementation of the
                                       # search-form__input element
        search-form__input.js          # JavaScript implementation of the
                                       # search-form__input element

    __button/                          # Subdirectory of the search-form__button
                                       # element
        search-form__button.css
        search-form__button.js

    _theme/                            # Subdirectory of the search-form_theme
                                       # modifier
        search-form_theme_islands.css  # CSS implementation of the search-form block
                                       # that has the theme modifier with the value
                                       # islands
        search-form_theme_lite.css     # CSS implementation of the search-form block
                                       # that has the theme modifier with the value
                                       # lite

    search-form.css                    # CSS implementation of the search-form block
    search-form.js                     # JavaScript implementation of the
                                       # search-form block
s
```
