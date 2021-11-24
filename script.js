// document.getElementById('submit-1').onclick = myClick;
// function myClick() {
//     fetch('http://hp-api.herokuapp.com/api/characters/house/Gryffindor')
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data)
//         })
// }

// document.getElementById('submit-2').onclick = myClick2;
// function myClick2() {
//     fetch('http://hp-api.herokuapp.com/api/characters/house/Slytherin')
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data)
//         })
// }

// document.getElementById('submit-3').onclick = myClick3;
// function myClick3() {

//     fetch('http://hp-api.herokuapp.com/api/characters/house/Ravenclaw')
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data)
//         })
// }
// document.getElementById('submit-4').onclick = myClick4;
// function myClick4() {

//     fetch('http://hp-api.herokuapp.com/api/characters/house/Hufflepuff')
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data)
//         })
// }

document.querySelector('.house').onchange = myChange;
function myChange() {
    let sel = document.querySelector('.house').value;

        fetch(`http://hp-api.herokuapp.com/api/characters/house/${this.value}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data)
            })


}







