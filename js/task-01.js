var elements = document.getElementsByClassName('item');
var count = 0;

Array.prototype.forEach.call(elements, function (element) {
    count++;
});

console.log('Number of categories:', count);

var categoriesList = document.getElementById('categories');
var items = categoriesList.querySelectorAll('li.item');

items.forEach((item) => {
    var categoryTitle = item.querySelector('h2').textContent;
    var elementsCount = item.querySelectorAll('li').length;

    console.log('Category: ' + categoryTitle);
    console.log('Elements: ' + elementsCount);
});
