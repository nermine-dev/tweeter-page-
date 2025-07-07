  document.getElementById("tweetBtn").addEventListener("click", function () {
      const tweetText = document.getElementById("tweetInput").value;

      if (tweetText.trim() !== "") {
        const tweetFeed = document.getElementById("tweetFeed");

        // Create tweet element
        const tweet = document.createElement("div");
        tweet.className = "tweet";
        tweet.innerHTML = `
          <div class="tweet-author">👤 Your Name <span style="color: gray;">@username</span></div>
          <div class="tweet-content">${tweetText}</div>
        `;

        tweetFeed.prepend(tweet); // Add new tweet on top
        document.getElementById("tweetInput").value = ""; // Clear input
      }
    });