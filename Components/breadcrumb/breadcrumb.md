```html
<div class="breadcrumb text-md">
  <a>bread</a>
  <div class="divider">/</div>
  <a>crumb</a>
  <div class="divider">/</div>
  <a>!</a>
</div>
<div class="breadcrumb text-lg">
  <a>bread</a>
  <i class="divider fa fa-arrow-right"></i>
  <a>crumb</a>
  <i class="divider fa fa-arrow-right"></i>
  <a>!</a>
</div>
```

```css
/* default */
.breadcrumb{
  display: flex;
  align-items: center;
}
.divider{
  margin: 0 0.5em;
}
i.divider{
  font-size: 0.6em;
  margin: 0 0.7em;
}

/* font size customizing */
.text-md{
  font-size: 2rem;
}
.text-lg{
  font-size: 3rem;
}


```