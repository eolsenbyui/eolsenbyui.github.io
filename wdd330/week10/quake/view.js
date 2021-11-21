// Quake View handler
export default class QuakesView {
    constructor (listSelector, detailSelector) {
        this.listElement = document.querySelector(listSelector);
        this.detailElement = document.querySelector(detailSelector);
    }


    renderQuakeList(quakeList, listElement) {
        // Build a list of the quakes...include the title and time of each quake then append the list to listElement. You should also add the id of the quake record as a data- property to the li. ie. <li data-id="">
        listElement.innerHTML = quakeList.features
            .map( (quake, index) => {
                let date = new Date(quake.properties.time);
                return `<tr data-index="${index}">
                            <td>${date.toLocaleDateString()}</td>
                            <td>${date.toLocaleTimeString()}</td>
                            <td style="text-align: center">${quake.properties.mag}</td>
                            <td>${quake.properties.place}</td>
                            <td>${quake.id}</td>
                        </tr>`;
            })
            .join('');
    }

    
    renderQuake(quake) {
        // Note: Object.entries() is a slick way to turn an object into an array so that we can iterate over it easier! 
        const quakeProperties = Object.entries(quake.properties);

        // For the provided quake make a list of each of the properties associated with it. 
        // Then append the list to the provided element. Notice the first line of this method. 
        this.listElement.classList.add("hidden");
        this.detailElement.classList.remove("hidden");
        document.getElementById("quakeId").innerText = quake.id;

        let ul = this.detailElement.querySelector("ul");

        ul.innerHTML = quakeProperties
            .map( (property) => {
                return `<li>${property[0]}: ${property[1]}</li>`
            })
            .join('');

        document.getElementById("back").addEventListener('touchend', (event) => {
            this.detailElement.classList.add("hidden");
            this.listElement.classList.remove("hidden");
        });
    }
}
