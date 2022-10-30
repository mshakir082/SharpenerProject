let formData = JSON.parse(localStorage.getItem('ExpenseData')) || [];

const displayData = (formData) => {

  document.getElementById('items').innerHTML = null;
  formData.map((el, index) => {
    var divflex = document.createElement('div');
    var div1 = document.createElement('div');
    div1.setAttribute('style', 'display:flex;justify-content:left;');
    divflex.setAttribute('style', 'display:flex;justify-content:space-between;');
    var list = document.createElement('li');
    list.setAttribute('class', 'list-group-item')
    var p1 = document.createElement('h2');
    var p2 = document.createElement('h2');
    var p3 = document.createElement('h2');

    p1.innerText = `${el.expenseamount} -`;
    p2.innerText = `${el.description} -`;
    p3.innerText = el.category;
    div1.append(p1, p2, p3);
    var div2 = document.createElement('div');
    div2.setAttribute('style', 'display:flex;gap:15px;');
    let btnDelete = document.createElement('button');
    btnDelete.innerText = 'Expense delete';
    btnDelete.addEventListener('click', () => {
      formData.splice(index, 1);
      localStorage.setItem('ExpenseData', JSON.stringify(formData))
      displayData(formData);
    })
    let btnEdit = document.createElement('button');

    btnEdit.innerText = 'Expense Edit'
    document.getElementById('udateBtn').style.display = "none";

    btnEdit.addEventListener('click', function () {

      document.getElementById('submitBtn').style.display = "none";
      document.getElementById('udateBtn').setAttribute('style', 'width:15%;');
      document.getElementById('udateBtn').style.display = "block";
      document.getElementById('expenseamount').value = el.expenseamount;
      document.getElementById('description').value = el.description;
      document.getElementById('category').value = el.category;

      document.getElementById('udateBtn').addEventListener('click', function () {

        document.getElementById('submitBtn').style.display = "block";
        document.getElementById('udateBtn').style.display = "none";
        formData[index].expenseamount = document.getElementById('expenseamount').value;
        formData[index].description = document.getElementById('description').value;
        formData[index].category = document.getElementById('category').value;
        localStorage.setItem('ExpenseData', JSON.stringify(formData));
        displayData(formData);

      })
    })
    div2.append(btnDelete, btnEdit);
    divflex.append(div1, div2)
    list.append(divflex);
    document.getElementById('items').append(list);
  })
}
displayData(formData);

// Add new Data list------------------------------

var form = document.querySelector('.form-inline');
form.addEventListener('submit', (e) => {

  e.preventDefault();
  let items = document.querySelectorAll('.list-group-item');
  let expenseamount = form.expenseamount.value;
  let description = form.description.value;
  let category = form.category.value;
  let obj = {
    expenseamount,
    description,
    category
  }
  formData.push(obj);
  localStorage.setItem('ExpenseData', JSON.stringify(formData));
  let formDatq = JSON.parse(localStorage.getItem('ExpenseData'));
  displayData(formDatq);
});
