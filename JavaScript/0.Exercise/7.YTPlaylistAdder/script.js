let here = document.querySelector(".playlist");

let title = document.getElementById("vid-title");
let views = document.getElementById("view-count");
let months = document.getElementById("months-old");
let time = document.getElementById("time-length");
let url = document.getElementById("img-url");

var index = 1;

function createcard() {
    if (title.value == "" || views.value == "" || months.value == "" || time.value == "")
        alert("All boxes are Required!");
    else {
        let x = parseInt(views.value);
        if (x < 1000)
            x = x;
        else if (x >= 1000 && x < 1000000)
            x = Math.floor(x / 1000) + "K";
        else
            x = Math.floor(x / 1000000) + "M";

        let xm = parseInt(months.value);
        if (xm < 2)
            xm = xm + " Month";
        else
            xm = xm + " Months";

        if (url.value == "")
            url.value = "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
        let copyHTML = `
        <div class="onecard">
        <div class="indexing">${index++}</div>
        <div class="img-time">
        <img src=${url.value} class="thumbnail">
                <div class="time-div">${time.value}</div>
            </div>

            <div class="play-text">
                <div class="play-title">${title.value}</div>
                <ul class="play-desc">
                    <li style="list-style-type: none;">CodeWithHarry</li>
                    <li>${x} Views</li>
                    <li>${xm} Ago</li>
                </ul>
            </div>
        </div>`
            ;

        here.innerHTML = here.innerHTML + copyHTML;

        /*
        title.value = "";
        views.value = "";
        months.value = "";
        time.value = "";
        url.value = "";

        // Created Dynamically using Javascript Dom, lot of typos and confusion. But great learning and dopamine

        let one = document.createElement("div");
        one.className = "onecard";
        here.append(one);

        let imgtime = document.createElement("div");
        imgtime.className = "img-time";
        one.append(imgtime);

        let image = document.createElement("img");
        image.setAttribute("src", url.value);
        image.setAttribute("alt", "thumbnail");
        image.className = "thumbnail";
        imgtime.append(image);

        let timediv = document.createElement("div");
        timediv.className = "time-div";
        timediv.innerText = time.value;
        imgtime.append(timediv);

        let ptext = document.createElement("div");
        ptext.className = "play-text";
        one.append(ptext);

        let ptitle = document.createElement("div");
        ptitle.className = "play-title";
        ptitle.innerHTML = title.value;
        ptext.append(ptitle);

        let pdesc = document.createElement("ul");
        pdesc.className = "play-desc";
        ptext.append(pdesc);

        let lname = document.createElement("li");
        lname.style.listStyleType = "none";
        lname.innerText = "CodeWithHarry";
        pdesc.append(lname);

        let lviews = document.createElement("li");
        let x = parseInt(views.value);
        if (x < 1000)
            lviews.innerText = `${views.value} views`;
        else if (x >= 1000 && x < 1000000)
            lviews.innerText = `${Math.floor(x / 1000)}K views`;
        else
            lviews.innerText = `${Math.floor(x / 1000000)}M views`;
        pdesc.append(lviews);

        let lmonth = document.createElement("li");
        if (parseInt(months.value) < 2)
            lmonth.innerText = `${months.value} Month Ago`;
        else
            lmonth.innerText = `${months.value} Months Ago`;

        pdesc.append(lmonth);
        */

    }
}
