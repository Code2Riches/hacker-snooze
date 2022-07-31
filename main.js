const body = document.querySelector("body");

const parent = document.createElement("div");
parent.className = "parent";

const child = document.createElement("div");
child.className = "child";

let orderedList = document.createElement("ol");

child.appendChild(orderedList);
parent.appendChild(child);
body.appendChild(parent);

let topStoriesURL = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";

fetch(topStoriesURL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data)

    for (let i = 0; i < 100; i++) {
      fetch(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`)
        .then((response2) => {
          return response2.json();
        })
        .then((data2) => {
          console.log(data2);

        let newlistItem = document.createElement("li");
        orderedList.appendChild(newlistItem);

        let newstoryTitle = document.createElement("a");
        newlistItem.appendChild(newstoryTitle);
        newstoryTitle.className = "storyTitle";
        newstoryTitle.innerText = data2.title;
        newstoryTitle.href = data2.url;

        // Display score, author(by) & comments(descendants) on same line.     
        let newstoryScore = document.createElement("p");
        newlistItem.appendChild(newstoryScore);
        newstoryScore.className = "score";
        newstoryScore.innerText = `${data2.score} points`;

        let newstoryUsername = document.createElement("p");
        newlistItem.appendChild(newstoryUsername);
        // newstoryScore.appendChild(newstoryUsername);
        newstoryUsername.className = "submittedBy";
        newstoryUsername.innerText = `by: ${data2.by}`;

        let newstoryComments = document.createElement("p");
        newlistItem.appendChild(newstoryComments);
        // newstoryUsername.appendChild(newstoryComments);
        newstoryComments.className = "comments";
        newstoryComments.innerText = `${data2.descendants} comments`;
        });
    }
  });

//===========================================================================================
// ** Greyson version - class work
// let topStoriesURL = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";

// let top100List = async () => {
//     let res = await fetch(topStoriesUrl);
//     let data = await res.json();
//     // console.log(data);
//      for(let i = 0; i < 100; i++){
//         // console.log(data[i]);
//         let storyId = data[i];

//         //https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty
//         let storyRes = await fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`);
//         let storyData = await storyRes.json();

//         console.log(storyData);
//         console.log(storyData.title);
//      }
// }