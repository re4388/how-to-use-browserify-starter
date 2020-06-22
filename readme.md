# How to use Browserify

## Note
- Install browserify globally, `npm install -g browserify`
- Compile the entry point, in this case, main.js -> `browserify main.js -o bundle.js`

## 坑
1. Order is matter, `<script src="bundle.js"></script>` above `</body>`
2. Don't use `<button onclick="myFunction()">Click me</button>`, use below instead:

```
    <button id="my-button">Click me</button>
    var button = document.getElementById('my-button'); // add id="my-button" into html
    button.addEventListener('click', hello);
```

## Reference
- [Browserify](http://browserify.org/)

