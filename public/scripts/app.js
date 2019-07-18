/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {
  const flagUrl = 'https://img.icons8.com/ios-filled/10/000000/flag.png';
  const retweetUrl = 'https://img.icons8.com/material-two-tone/14/000000/retweet.png';
  const likesUrl = 'https://img.icons8.com/ios-filled/10/000000/like.png';

  const createTweetElement = function (tweetInfo) {
    const $article = $('<article>').addClass('tweet');

    const $header = $('<header>').addClass('tweet-Header');
    $article.append($header);
    const $divProfile = $('<div>').addClass('tweeter-Profile');
    $header.append($divProfile);
    const $divAvatar = $('<div>').addClass('avatar');
    $divProfile.append($divAvatar);
    const $imgAvatar = $('<img>').addClass('avatar-Icon').attr('src', tweetInfo.user.avatars);
    $divAvatar.append($imgAvatar);
    const $divName = $('<div>').addClass('tweeter-Name').text(tweetInfo.user.name);
    $divAvatar.append($divName);
    const $divHandle = $('<div>').addClass('tweeter-Handle').text(tweetInfo.user.handle);
    $divProfile.append($divHandle);

    const $p = $('<p>').addClass('tweet-Text').text(tweetInfo.content.text);
    $article.append($p);

    const $hr = $('<hr>');
    $article.append($hr);

    const $footer = $('<footer>').addClass('tweet');
    $article.append($footer);

    const $divMade = $('<div>').addClass('when-Made').text(tweetInfo.created_at);
    $footer.append($divMade);
    const $divSocialMedia = $('<div>').addClass('social-Media');
    $footer.append($divSocialMedia);

    const $imgFlag = $('<img>').attr('src', flagUrl).addClass('flag');
    $divSocialMedia.append($imgFlag);
    const $imgRetweet = $('<img>').attr('src', retweetUrl).addClass('retweet');
    $divSocialMedia.append($imgRetweet);
    const $imgLikes = $('<img>').attr('src', likesUrl).addClass('likes');
    $divSocialMedia.append($imgLikes);

    $("#all-Tweets").append($article);

  };

  $("#create-New-Tweet").submit(function (event) {
    console.log("Handler for .submit() called.");
    event.preventDefault();
  });

  // Test / driver code (temporary). Eventually will get this from the server.
  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  }

  const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});