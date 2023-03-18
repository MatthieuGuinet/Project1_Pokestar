let _startX = 0,
    _startY = 0,
    _scrollTop = 0,
    _scrollLeft = 0;

const scrollableMap = document.getElementById("scrollable_map");
const wrapper = document.getElementById("map_wrapper")
scrollableMap.onmousedown = mouseDown;
scrollableMap.onmouseup = mouseUp;

function mouseDown(event) {
    scrollableMap.onmousemove = mouseMove;
    _startX = event.clientX;
    _startY = event.clientY;
    _scrollTop = wrapper.scrollTop;
    _scrollLeft = wrapper.scrollLeft;
}

function mouseMove(event){
    wrapper.scrollTo({
        left: _scrollLeft + (_startX - event.clientX),
        top: _scrollTop + (_startY - event.clientY)
    })
}
function mouseUp() {
    scrollableMap.onmousemove = null
}