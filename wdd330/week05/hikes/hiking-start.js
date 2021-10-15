//create an array of hikes
const hikeList = [
    {
      name: "Bechler Falls",
      imgSrc: "http://www.nps.gov/features/yell/slidefile/water/falls/bechler/Images/04022.jpg",
      imgAlt: "Image of Bechler Falls",
      distance: "3 miles",
      difficulty: "Easy",
      description:
        "Beautiful short hike along the Bechler river to Bechler Falls",
      directions:
        "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead."
    },
    {
      name: "Teton Canyon",
      imgSrc: "https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/static/optimized/rev-0404f4f/images/Cascade-Canyon-Hiking-Trail-Grand-tetons.jpg",
      imgAlt: "Image of Teton Canyon",
      distance: "3 miles",
      difficulty: "Easy",
      description: "Beautiful short (or long) hike through Teton Canyon.",
      directions:
        "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Stateline Road for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead."
    },
    {
      name: "Dunanda Falls",
      imgSrc: "https://hike734.com/wp-content/uploads/2016/05/Dunanda-Falls.jpg",
      imgAlt: "Image of Dunanda Falls",
      distance: "7 miles",
      difficulty: "Moderate",
      description:
        "Beautiful hike through Bechler meadows river to Dunanda Falls",
      directions:
        "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead."
    }
  ];
  
  const imgBasePath = "//byui-cit.github.io/cit261/examples/";
  //on load grab the array and insert it into the page
  window.addEventListener("load", () => {
    showHikeList();
  });

  document.getElementById("hikes").addEventListener("click", (event) => {
      // Display detail
      if (event.target && event.target.nodeName != 'UL') {
          let li = event.target.closest('li');

          if (li.index == undefined) {
              li = li.parentElement.closest('li');
          }

          const hikeListElement = document.getElementById("hikes");
          hikeListElement.innerHTML = "";

          let hike = hikeList[li.index];

          const item = document.createElement("li");

          item.innerHTML = `<h2>${hike.name}</h2>
            <div class="item">
              <div class="big-image"><img class="big-img" src="${hike.imgSrc}" alt="${hike.imgAlt}"></div>
            </div>
            <ul style="padding-left: 0">
                <li>
                    <h3>Description</h3>
                    <p>${hike.description}</p>
                </li>
                <li>
                    <strong>Distance:</strong>
                    ${hike.distance}
                </li>
                <li>
                    <strong>Difficulty:</strong>
                    ${hike.difficulty}
                </li>
                <li>
                    <h3>Directions</h3>
                    <p>${hike.directions}</p>
                </li>
            </ul>
            `;

          hikeListElement.appendChild(item);

          document.getElementById("back").classList.remove("hidden");

          return item;
      }
  });

  document.getElementById("back").addEventListener("click", (event) => {
    showHikeList();
    event.target.classList.add("hidden");
  });
  
  function showHikeList() {
    const hikeListElement = document.getElementById("hikes");
    hikeListElement.innerHTML = "";
    renderHikeList(hikeList, hikeListElement);
  }
  
  function renderHikeList(hikes, parent) {
    let index = 0;
    hikes.forEach(hike => {
      parent.appendChild(renderOneHike(hike, index++));
    });
  }

  function renderOneHike(hike, index) {
      const item = document.createElement("li");
      item.index = index;

      item.innerHTML = `<h2>${hike.name}</h2>
        <div class="item">
          <div class="image"><img class="img" src="${hike.imgSrc}" alt="${hike.imgAlt}"></div>
          <div class="short-description">
          <ul>
                  <li>
                      <strong>Distance:</strong>
                      ${hike.distance}
                  </li>
                  <li>
                      <strong>Difficulty:</strong>
                      ${hike.difficulty}
                  </li>
          </ul>
          </div>
        </div><br>`;

      return item;
  }
  