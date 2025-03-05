function addToTable() {
    let newRow = document.getElementById("newRow");
    newRow.innerHTML+= `<tr>
                            <th scope="row">1</th>
                            <td></td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>`
    
}

function remove(button){
    var row = button.closest('tr');
    row.remove();
}