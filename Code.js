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

    Swal.fire({
        position: "top",
        title: "Movie: " + title + " has been added!",
        showConfirmButton: false,
        timer: 1500
    });
    addToTable(img, title, genre, date);
}

function addToTable(imgURL, title, genre, date) {
    var tableList = document.getElementById("newRow");
    let newRow = tableList.insertRow(); //Revised By AI

    newRow.innerHTML = 
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
            <select class="custom-select rounded rateSelect" disabled>
                <option value="1" >1</option>
                <option value="2" >2</option>
                <option value="3" >3</option>
                <option value="4" >4</option>
                <option value="5" >5</option>
            </select>
        </td>
        <td>
            <select class="custom-select rounded" onchange="statusCheck(this)">
                <option value="1" >Not Watched</option>
                <option value="2" >In Progress</option>
                <option value="3" >Watched</option>
            </select>
        </td>
        <td>
            <button type="button" class="btn btn-danger rounded-pill" onclick="promptRemove(this)" >Delete</button>
        </td>

    </tr>`

}

function statusCheck(select){
    var toggle = select.closest("tr").querySelector('.rateSelect');

    if(select.value === "3" && toggle.disabled == true){
        toggle.disabled = !toggle.disabled;
        congrats();
    } 

}

function congrats(){
    Swal.fire({
        title: "You have finished a Movie",
        text: "Dont forget to leave a Rating",
        icon: "success",
        position: "top",
        showConfirmButton: false,
        timer: 3500
    });
}

function titleSearch(){

    var filter = document.getElementById("searchBar").value.toUpperCase();
    var rows = document.getElementById("movieTable").getElementsByTagName("tr")

    for(var i = 0; i < rows.length; i++){

        var movieTitle = rows[i].getElementsByTagName("td")[0];

        if(movieTitle){
            var title = movieTitle.textContent || movieTitle.innerText;
            if(title.toUpperCase().indexOf(filter) > -1){
            rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }

        }

    }   

}

function promptRemove(button){
    var txt;
    Swal.fire({
        title: "Are you sure you want to remove this movie?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Movie has been deleted",
            position: "top",
            showConfirmButton: false,
            timer: 1000
          });
          remove(button);
        }
    });
}

function remove(button){
    var row = button.closest('tr');
    row.remove();
}

function test(){
    let newRow = document.getElementById("newRow");
    newRow.innerHTML+= "hello"
}
