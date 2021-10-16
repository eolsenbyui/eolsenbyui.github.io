// hikeList is the object array
// hikes is the UL that contains the hikes
document.getElementById("hikes").addEventListener("click", (event) => {
    // Display detail
    if (event.target && event.target.nodeName != 'UL') { // Ignore if clicked on the UL part
        let listItem = event.target.closest('li'); // Finds the <li> that encapsulates the hike

        let hike = hikeList[listItem.index];    // Get the index from the <li>

        renderOneHikeFull(hike);
    }
});


function renderHikeList(hikes, parent) {
    let index = 0;
    hikes.forEach(hike => {
        parent.appendChild(renderOneHikeLight(hike, index++));
    });
}

function renderOneHike(hike, index) {
    const item = document.createElement("li");

    // Encapsulate the array index in the <li> itself.
    item.index = index;     // This simplifies things a great deal!

    // etc.
}
