function start(){
    var rec = [
        ['https://m.media-amazon.com/images/M/MV5BNThiZjA3MjItZGY5Ni00ZmJhLWEwN2EtOTBlYTA4Y2E0M2ZmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', 'Spider-Man: Across the Spider-Verse', 'Super Hero', '2023'],
        ['https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpg', 'Spider-Man: Into the Spider-Verse', 'Super Hero', '2018'],
        ['https://m.media-amazon.com/images/M/MV5BNDUxMTc3YjktODhkYi00ZjE4LWJhYmEtOTI0NjUyMTAwMGY5XkEyXkFqcGc@._V1_.jpg', 'Puss in Boots: The Last Wish', 'Adventure', '2022'],
        ['https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg', 'John Wick', 'Action', '2014'],
        ['https://m.media-amazon.com/images/M/MV5BMjE2NDkxNTY2M15BMl5BanBnXkFtZTgwMDc2NzE0MTI@._V1_.jpg', 'John Wick: Chapter 2', 'Action', '2017'],
        ['https://m.media-amazon.com/images/M/MV5BYjdlNWFlZjEtM2U0NS00ZWU5LTk1M2EtZmQxNWFiZjk0MGM5XkEyXkFqcGc@._V1_.jpg', 'John Wick: Chapter 3 - Parabellum', 'Action', '2019'],
        ['https://m.media-amazon.com/images/I/81fk-N7tvbL._AC_UF894,1000_QL80_.jpg', 'John Wick: Chapter 4', 'Action', '2013'],
        
        //['imgURL', 'title', 'genre', 'date'],

    ];

    for (let i = 0; i < rec.length; i++){
        addToTable(rec[i][0], rec[i][1], rec[i][2], rec[i][3]);
    }
}

//Implemented by AI
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("addNewMovie").addEventListener("click", function (event) {
        event.stopPropagation();
    })
});

function promptAdd(){
    //With the help of AI
    var title = document.getElementById("newTitle").value;
    var genre = document.getElementById("newGenre").value;
    var date = document.getElementById("newDate").value;
    var img = document.getElementById("newImg").value;
    if (!img){
        img = "https://www.saltybottomreefcompany.com/assets/images/products_noimageyet.jpg";
    }
    if (!title){
        title = "N/A";
    }
    if (!date){
        date = "N/A";
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
            <select class="custom-select rounded" id="inputGroupSelect01">\
                <option value="1" selected>Not Watched</option>
                <option value="2" >In Progress</option>
                <option value="3" >Watched</option>
            </select>
        </td>
        <td>
            <button type="button" class="btn btn-danger rounded-pill" onclick="remove(this)" >Delete</button>
        </td>

    </tr>`
    
}

function remove(button){
    var rec = button.closest('tr');
    rec.remove();
}

function test(){
    let newRow = document.getElementById("newRow");
    newRow.innerHTML+= "hello"
}