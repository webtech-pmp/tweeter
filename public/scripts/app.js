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

    const $divMade = $('<div>').addClass('when-Made').text(moment(tweetInfo.created_at).fromNow());
    $footer.append($divMade);

    const $divSocialMedia = $('<div>').addClass('social-Media');
    $footer.append($divSocialMedia);
    const $imgFlag = $('<img>').attr('src', flagUrl).addClass('flag');
    $divSocialMedia.append($imgFlag);
    const $imgRetweet = $('<img>').attr('src', retweetUrl).addClass('retweet');
    $divSocialMedia.append($imgRetweet);
    const $imgLikes = $('<img>').attr('src', likesUrl).addClass('likes');
    $divSocialMedia.append($imgLikes);

    return $article;
  };

  $('#create-New-Tweet').submit(function (event) {
    event.preventDefault();
    let txt = $('#new-Tweet-Text');
    if (txt.val() === '' || txt.val() === 'null') {
      $('.isa_error span').text('No tweet entered. Please enter text.')
      toggleErrorMsg('show');
    } else if (txt.val().length > 140) {
      $('.isa_error span').text('Over 140 characters entered! Please re-enter text!')
      toggleErrorMsg('show');
    } else {
      toggleErrorMsg('hide');
      $.post('/tweets', $(this).serialize(), (data, status) => {
        txt.val('');
        $("#all-Tweets").empty();
        $('.counter').text('140');
        loadTweets();
      })
      console.log($(this).serialize());
    }
  });

  const renderTweets = function (tweets) {
    for (let tweet of tweets) {
      const $article = createTweetElement(tweet);
      $('#all-Tweets').prepend($article);
    }
  }

  const loadTweets = function () {
    $.ajax('/tweets', {
        method: 'GET'
      })
      .then(renderTweets);
  }
  loadTweets();

  // 
  $("#arrow-CTA").click(function () {
    $(".new-tweet").slideToggle("slow");
  });

  const toggleErrorMsg = function (toggle) {
    if (toggle === 'show') {
      $(".isa_error").slideDown("slow");
    } else {
      $(".isa_error").hide();
    }
  };
  toggleErrorMsg('hide');

});