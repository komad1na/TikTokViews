javascript: (() => {
  // Get Array of all videos
  var allVideos = document.getElementsByClassName(
    "video-count tiktok-1p23b18-StrongVideoCount eor0hs42"
  );

  // Get Flexbox with Followers, Following and Likes
  var infoTab = document.getElementsByClassName(
    "tiktok-7k173h-H2CountInfos e1awr0pt0"
  );

  // Creating another flex item for Info Tab
  var viewsDiv = document.createElement("div");
  var spanViews = document.createElement("span");
  var strongValue = document.createElement("strong");
  spanViews.className = "tiktok-5sdvo-SpanUnit e1awr0pt2";
  viewsDiv.className = "tiktok-xeexlu-DivNumber e1awr0pt1";

  // Initialize views
  var views = 0;

  for (let i = 0; i < allVideos.length; i++) {
    // Check if video has K (kilo, 21K == 21,000)
    if (allVideos[i].firstChild.data.includes("K")) {
      // Take the string and parse it properly
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
      // Check if video has M (Million, 2.3M == 2,300,000)
    } else if (allVideos[i].firstChild.data.includes("M")) {
      // Take the string and parse it properly
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
      // If video does not have either K or M its below 10,000 views than its
      // proper value (8945 views)
      views += parseInt(allVideos[i].firstChild.data, 10);
      console.log(parseInt(allVideos[i].firstChild.data, 10));
    }
  }

  // Parse value to Locale output
  var value = views.toLocaleString(undefined, { minimumFractionDigits: 0 });

  // Assign value to the element for Info Tab
  strongValue.innerHTML = `${value}`;
  spanViews.innerHTML = ` Views`;
  viewsDiv.appendChild(strongValue);
  viewsDiv.appendChild(spanViews);

  // Append views to Info Tab
  infoTab[0].appendChild(viewsDiv);
})();
