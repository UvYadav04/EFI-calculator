const form = document.querySelector('#form')
const select = document.querySelector('#cordinate');


form.addEventListener('submit', function (e) {
    let selectvalue = select.options[select.selectedIndex].value;
    if (selectvalue == 'cartesian') {
        form.action = "cartesian.html"
    }

    else if (selectvalue == 'cylindrical') {
        form.action = "cylindrical.html"
    }

    else if (selectvalue == 'spherical')
        form.action = "spherical.html"



})


// select.addEventListener('change', function (e) {
//     let selectvalue = select.options[select.selectedIndex].value;
//     console.log(selectvalue);
//     const form = document.querySelector('#form')


//     if (selectvalue == "cartesian") {

//         document.body.style.backgroundColor = 'red'
//         form.setAttribute('action', 'create.html')
//     }

//     else if (selectvalue == "cylindrical") {
//         document.body.style.backgroundColor = 'pink'
//     }

//     else if (selectvalue == 'spherical') {
//         document.body.style.backgroundColor = 'brown'
//     }


// })
