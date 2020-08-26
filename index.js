const axios = require("axios");
const fs = require("fs");

const getQuote = async () => {
  try {
    const { data } = await axios.get("https://quotes.rest/qod?language=en");
    const quote = data.contents.quotes[0].quote;
    const author = data.contents.quotes[0].author;

    return {
      quote,
      author,
    };
  } catch (err) {
    return {};
  }
};

const generate = async () => {
  const { quote, author } = await getQuote();

  if (!quote) return;

  fs.writeFileSync("README.md", `_**${quote}**_\n\n${author}`);
};

generate();
