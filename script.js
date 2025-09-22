const squares = document.querySelectorAll(".square");
let dontPaint = null;

squares.forEach((ele) => {
    ele.addEventListener('mousemove', (e) => {
        dontPaint = e.target.id
        squares.forEach((element) => {
            if (!(element.id == dontPaint)) {
                element.style.backgroundColor = "#6F4E37";
            }
        })
    })
})

squares.forEach((ele)=>{
    ele.addEventListener("mouseout",(e)=>{
        squares.forEach((ele)=>{
            ele.style.backgroundColor = "lavender"
        })
    })
})