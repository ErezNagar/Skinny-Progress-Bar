# Skinny Progress Bar

<!-- #### A skinny YouTube-like progress bar -->
A basic YouTube-like web progress bar implementation using CSS and jQuery.

### How To Use
#### Browser

```html
<script src="path/to/skinnyProgressBar.js"></script>
```

#### Node

```js
import SkinnyProgressBar from "./path/to/skinnyProgressBar";
```
And then simply initialize it and set the progress value:

```js
var progressBar = new SkinnyProgressBar();

// Load something awesome
progressBar.load(10);
// ...
progressBar.load(40);
// Finish loading
progressBar.load(100);
```

### Options

```js
var progressBar = new SkinnyProgressBar({
    el: ".someElement"
    color: "#ff6f00"
});
```

**el**: A DOM element into which the SkinnyProgressBar would be rendered.

**color**: The color of the progressBar.

### Demo

See it in action [here](https://ereznagar.github.io/Skinny-Progress-Bar/)

MIT licensed
