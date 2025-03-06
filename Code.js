function start(){
    var rec = [
        ['https://m.media-amazon.com/images/M/MV5BNThiZjA3MjItZGY5Ni00ZmJhLWEwN2EtOTBlYTA4Y2E0M2ZmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', 'Spider-Man: Across the Spider-Verse', 'Super Hero', '2023'],
        ['https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpg', 'Spider-Man: Into the Spider-Verse', 'Super Hero', '2018'],
        //['imgURL', 'title', 'genre', 'date'],
    ];

    for (let i = 0; i < rec.length; i++){
        addToTable(rec[i][0], rec[i][1], rec[i][2], rec[i][3]);
    }
}

function promptAdd(){
    var title = document.getElementById("newTitle").value;
    var genre = document.getElementById("newGenre").value;
    var date = document.getElementById("newDate").value;
    var img = document.getElementById("newImg").value;
    alert(img, title, genre, date);
    if (img == ""){
        img = "https://www.saltybottomreefcompany.com/assets/images/products_noimageyet.jpg";
    }

    addToTable(img, title, genre, date);
}

function addToTable(imgURL, title, genre, date) {
    let newRow = document.getElementById("newRow");
    newRow.innerHTML+= 
    `<tr>

        <th scope="row">
            <div class="text-center">
                <img src="`+imgURL+`" class="rounded rowImg" alt="Image">
            </div>
        </th>
        <td>`+title+`</td>
        <td>`+genre+`</td>
        <td>`+date+`</td>
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
    var rec = button.closest('tr');
    rec.remove();
}

function test(){
    alert("test");
}