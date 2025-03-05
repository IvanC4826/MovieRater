function start(){
    var row = [
        ["https://m.media-amazon.com/images/M/MV5BNThiZjA3MjItZGY5Ni00ZmJhLWEwN2EtOTBlYTA4Y2E0M2ZmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", "Spider-Man: Across the Spider-Verse", "Super Hero", "2h 20m"]

        //["imgURL", "title", "genre", "duration"]
    ];

    for (let i = 0; row.length > i; ++i){
        addToTable((row[i][1]), (row[i][2]), (row[i][3]), (row[i][4]));
    }
}

function addToTable(imgURL, title, genre, duration) {
    let newRow = document.getElementById("newRow");
    newRow.innerHTML+= `<tr>

                            <th scope="row">
                                <div class="text-center">
                                    <img src="`+imgURL+`" class="rounded rowImg" alt="Image">
                                </div>
                            </th>
                            <td>`+title+`</td>
                            <td>`+genre+`</td>
                            <td>`+duration+`</td>
                            <td>
                                <select class="custom-select" id="inputGroupSelect01">\
                                    <option value="1" selected>Not Watched</option>
                                    <option value="2">In Progress</option>
                                    <option value="3">Watched</option>
                                </select>
                            </td>
                            <td>
                                <button type="button" class="btn btn-danger" onclick="remove(this)">Delete</button>
                            </td>

                        </tr>`
    
}

function remove(button){
    var row = button.closest('tr');
    row.remove();
}