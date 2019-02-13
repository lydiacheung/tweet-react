class Tweet extends React.Component {
  render() {
    let tweetElements = this.props.tweets.map(tweet => {
      return (
        <div>
          <img src={tweet.user.profile_image_url} />
          KANYE WEST@ {tweet.user.screen_name}
          <br />
          <br />
          {tweet.text}
          <br />
          <br />
          Retweets:{tweet.retweet_count}&nbsp; Favorites:{tweet.favorite_count}
          <hr />
        </div>
      );
    });

    return <ul>{tweetElements}</ul>;
  }
}

ReactDOM.render(
  <Tweet tweets={Tweets} />,

  document.getElementById("root")
);
