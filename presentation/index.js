// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  GoToAction,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from "spectacle";
import TweetEmbed from "react-tweet-embed";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quarternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  },
);

const tweetIds = ["936322163262369792", "935920460084023296"];

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
        autoplayDuration={7000}
        autoplay={true}
      >
        {tweetIds.map((tweetId, i) => (
          <Slide key={i} transition={["fade"]} bgColor="primary">
            <TweetEmbed className="tweet" id={tweetId} />
          </Slide>
        ))}
      </Deck>
    );
  }
}
