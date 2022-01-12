javascript: (() => {
  var allVideos = document.getElementsByClassName(
    "video-count tiktok-1p23b18-StrongVideoCount eor0hs42"
  );
  var infoTab = document.getElementsByClassName(
    "tiktok-7k173h-H2CountInfos e1awr0pt0"
  );
  var viewsDiv = document.createElement("div");
  var spanViews = document.createElement("span");
  var strongValue = document.createElement("strong");
  spanViews.className = "tiktok-5sdvo-SpanUnit e1awr0pt2";
  viewsDiv.className = "tiktok-xeexlu-DivNumber e1awr0pt1";

  var views = 0;
  for (let i = 0; i < allVideos.length; i++) {
    if (allVideos[i].firstChild.data.includes("K")) {
      var part = allVideos[i].firstChild.data;
      if (part.includes(".")) {
        part = part.replace("K", "");
        part = part.replace(".", "");
        var num = parseInt(part, 10) * 100;
        views += num;
        console.log(num);
      } else {
        part = part.replace("K", "");
        num = parseInt(part, 10) * 1000;
        views += num;
        console.log(num);
      }
    } else if (allVideos[i].firstChild.data.includes("M")) {
      part = allVideos[i].firstChild.data;
      if (part.includes(".")) {
        part = part.replace("M", "");
        part = part.replace(".", "");
        num = parseInt(part, 10) * 100000;
        views += num;
        console.log(num);
      } else {
        part = part.replace("M", "");

        num = parseInt(part, 10) * 1000000;
        views += num;
        console.log(num);
      }
    } else {
      views += parseInt(allVideos[i].firstChild.data, 10);
      console.log(parseInt(allVideos[i].firstChild.data, 10));
    }
  }

  var value = views.toLocaleString(undefined, { minimumFractionDigits: 0 });
  strongValue.innerHTML = `${value}`;
  spanViews.innerHTML = ` Views`;
  viewsDiv.appendChild(strongValue);
  viewsDiv.appendChild(spanViews);
  infoTab[0].appendChild(viewsDiv);
})();
