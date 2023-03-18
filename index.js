let startX = 0,
    startY = 0,
    scrollTop = 0,
    scrollLeft = 0;

const scrollableMap = document.getElementById("scrollable_map");
const wrapper = document.getElementById("map_wrapper");
scrollableMap.onmousedown = mouseDown;
scrollableMap.onmouseup = mouseUp;


function mouseDown(event) {
    scrollableMap.onmousemove = mouseMove;
    startX = event.clientX;
    startY = event.clientY;
    scrollTop = wrapper.scrollTop;
    scrollLeft = wrapper.scrollLeft;
}

function mouseMove(event){
    wrapper.scrollTo({
        left: scrollLeft + (startX - event.clientX),
        top: scrollTop + (startY - event.clientY)
    })
}
function mouseUp() {
    scrollableMap.onmousemove = null
}