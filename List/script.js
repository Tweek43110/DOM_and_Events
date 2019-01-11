let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

//Form submit event
form.addEventListener('submit', addItem);
//Delete item from list
itemList.addEventListener('click', removeItem);
//Filter from search
filter.addEventListener('keyup', filterItems);

//Add item
function addItem(e) {
    e.preventDefault();

    //Get input value
    let newItem = document.getElementById('item').value;

    //Create a new li element
    let li = document.createElement('li');
    //Add class
    li.className = 'list-group-item';
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    //Append new list item
    itemList.appendChild(li);

    //Create delete button on new element
    var del = document.createElement('button');
    //Add classes to delete button
    del.className = 'btn btn-danger btn-sm float-right delete';
    //Append text node
    del.appendChild(document.createTextNode('X'));
    //Append delete button to the list
    li.appendChild(del);

}

function removeItem(e) {
    //Checks to make sure the delete class is contained to proceed
    if (e.target.classList.contains('delete')){
        if(confirm('Are you sure')) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e) {
    //converts input to lowercase
    let text = e.target.value.toLowerCase();
    let items = itemList.getElementsByTagName('li');
    //convert reults to array
    Array.from(items).forEach(function(item) {
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })

}