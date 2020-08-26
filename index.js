const axios = require("axios");
const fs = require("fs");

const getQuote = async () => {
  try {
    const { data } = await axios.get(
      "https://gist.githubusercontent.com/codeaholicguy/be3c884ed8b2f49bf30f06555d022915/raw/79c57ecc2a256e3a3d02ac4676f77643f6f2529d/quotes.json"
    );
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
