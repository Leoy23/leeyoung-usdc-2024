/**
 * RECOMMENDATION
 *
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 *
 * The Developer Tools in Chrome are available under the "..." menu,
 * futher hidden under the option "More Tools." In Firefox, they are
 * under the hamburger (three horizontal lines), also hidden under "More Tools."
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for.
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */
function findSearchTermInBooks(searchTerm, scannedTextObj) {
  if (!searchTerm || !scannedTextObj) {
    return {
      SearchTerm: searchTerm ? searchTerm : "", // error handling => "please input term to search!" (front end dev would be able to create additional functionality to configure proper error handling if creating additional functionality)
      Results: [], // error handling => "There are no results for "space". Please try again."
    };
  }

  const bookContentResults = scannedTextObj.reduce((acc, bookInfo) => {
    const filterBooksByQuery = bookInfo.Content.filter((bookContent) =>
      bookContent.Text.includes(searchTerm)
    );
    filterBooksByQuery.forEach((locatedBook) => {
      acc.push({
        ISBN: bookInfo.ISBN,
        Page: locatedBook.Page,
        Line: locatedBook.Line,
      });
    });
    return acc;
  }, []);

  return {
    SearchTerm: searchTerm,
    Results: bookContentResults,
  };
}

/** Example input object */
const twentyLeaguesIn = [
  {
    Title: "Twenty Thousand Leagues Under the Sea",
    ISBN: "9780000528531",
    Content: [
      {
        Page: 31,
        Line: 8,
        Text: "now simply went on by her own momentum.  The dark-",
      },
      {
        Page: 31,
        Line: 9,
        Text: "ness was then profound; and however good the Canadian's",
      },
      {
        Page: 31,
        Line: 10,
        Text: "eyes were, I asked myself how he had managed to see, and",
      },
    ],
  },
];

/** Example output object */
const twentyLeaguesOut = {
  SearchTerm: "the",
  Results: [
    {
      ISBN: "9780000528531",
      Page: 31,
      Line: 9,
    },
  ],
};

/********* ADDITIONAL MOCK DATA *********/
const journeyThroughStars = [
  {
    Title: "Journey Through the Stars",
    ISBN: "123456789012",
    Content: [
      {
        Page: 1,
        Line: 5,
        Text: "The night sky was clear, revealing the vast cosmos.",
      },
      {
        Page: 2,
        Line: 3,
        Text: "She pondered over the mysteries of the universe, akin to an explorer seeking new lands.",
      },
      {
        Page: 3,
        Line: 1,
        Text: "Every star seemed akin to a distant beacon, guiding her thoughts. Blythe imagined...",
      },
      {
        Page: 1,
        Line: 1,
        Text: "This text includes @special! characters",
      },
    ],
  },
];

const secondSearchQueryObj = {
  SearchTerm: "akin",
  Results: [
    {
      ISBN: "123456789012",
      Page: 2,
      Line: 3,
    },
    {
      ISBN: "123456789012",
      Page: 3,
      Line: 1,
    },
  ],
};

const caseSensitiveObj = {
  SearchTerm: "The",
  Results: [
    {
      ISBN: "123456789012",
      Page: 1,
      Line: 5,
    },
  ],
};

const specialCharacterObj = {
  SearchTerm: "@special!",
  Results: [
    {
      ISBN: "123456789012",
      Page: 1,
      Line: 1,
    },
  ],
};

const undefinedOrNullObj = {
  SearchTerm: "",
  Results: [],
};

const undefinedScannedTextObj = {
  SearchTerm: "cater",
  Results: [],
};

const multipleWordOutputObj = {
  SearchTerm: "This text includes",
  Results: [
    {
      ISBN: "123456789012",
      Page: 1,
      Line: 1,
    },
  ],
};

const multipleWordOutputErrorObj = {
  SearchTerm: "this text includes",
  Results: [],
};

const partOfWordObj = {
  SearchTerm: "sta",
  Results: [{ ISBN: "123456789012", Page: 3, Line: 1 }],
};

const partOfWordErrorObj = {
  SearchTerm: "cra",
  Results: [],
};

/* LARGE MOCK DATA */
const expandedJourneyThroughStars = [
  {
    Title: "Journey Through the Stars",
    ISBN: "123456789012",
    Content: [
      {
        Page: 1,
        Line: 5,
        Text: "The night sky was clear, revealing the vast cosmos.",
      },
      {
        Page: 2,
        Line: 3,
        Text: "She pondered over the mysteries of the universe, akin to an explorer seeking new lands.",
      },
      {
        Page: 3,
        Line: 1,
        Text: "Every star seemed akin to a distant beacon, guiding her thoughts. Blythe imagined...",
      },
      {
        Page: 1,
        Line: 1,
        Text: "This text includes @special! characters",
      },
    ],
  },
  {
    Title: "Galactic Adventures",
    ISBN: "987654321098",
    Content: [
      {
        Page: 1,
        Line: 1,
        Text: "Zooming past the milky way, the spaceship ventured into unknown territories.",
      },
      {
        Page: 2,
        Line: 4,
        Text: "In this vast expanse of space, stars twinkled like distant lighthouses.",
      },
      {
        Page: 3,
        Line: 2,
        Text: "The crew prepared for a daring expedition on a remote alien planet.",
      },
    ],
  },
  {
    Title: "Mysteries of the Cosmos",
    ISBN: "112233445566",
    Content: [
      {
        Page: 1,
        Line: 3,
        Text: "The black hole's gravity pulled at the fabric of spacetime itself.",
      },
      {
        Page: 2,
        Line: 1,
        Text: "Ancient galaxies spun in a mesmerizing dance, narrating the universe's untold stories.",
      },
      {
        Page: 3,
        Line: 3,
        Text: "Theoretical physics offered glimpses into dimensions beyond human comprehension.",
      },
    ],
  },
  {
    Title: "Starlight Chronicles",
    ISBN: "665544332211",
    Content: [
      {
        Page: 1,
        Line: 2,
        Text: "Staring into the telescope, she marveled at the constellation's intricate patterns.",
      },
      {
        Page: 2,
        Line: 3,
        Text: "The comet's tail blazed across the sky, a harbinger of cosmic events.",
      },
      {
        Page: 3,
        Line: 4,
        Text: "Ancient astral maps held secrets to civilizations long gone.",
      },
    ],
  },
];

const largerDataResultsObj = {
  SearchTerm: "sky",
  Results: [
    {
      ISBN: "123456789012",
      Page: 1,
      Line: 5,
    },
    {
      ISBN: "665544332211",
      Page: 2,
      Line: 3,
    },
  ],
};

const largeDataNoResultsObj = {
  SearchTerm: "skater",
  Results: [],
};
/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that
 * output to the console. We've provided two tests as examples, and
 * they should pass with a correct implementation of `findSearchTermInBooks`.
 *
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
  console.log("PASS: Test 1");
} else {
  console.log("FAIL: Test 1");
  console.log("Expected:", twentyLeaguesOut);
  console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn);
if (test2result.Results.length == 1) {
  console.log("PASS: Test 2");
} else {
  console.log("FAIL: Test 2");
  console.log("Expected:", twentyLeaguesOut.Results.length);
  console.log("Received:", test2result.Results.length);
}

/** We can check if another given input returns another known output.*/
const test3result = findSearchTermInBooks("akin", journeyThroughStars);
if (JSON.stringify(secondSearchQueryObj) === JSON.stringify(test3result)) {
  console.log("PASS: Test 3");
} else {
  console.log("FAIL: Test 3");
  console.log("Expected:", secondSearchQueryObj);
  console.log("Received:", test3result);
}

/** We can check that given another input, we also get the right number of results. */
const test4result = findSearchTermInBooks("akin", journeyThroughStars);
if (test4result.Results.length == 2) {
  console.log("PASS: Test 4");
} else {
  console.log("FAIL: Test 4");
  console.log("Expected:", 2);
  console.log("Received:", test4result.Results.length);
}

/** We can check if there are no matches found, our function returns no matches (empty Results array). */
const test5result = findSearchTermInBooks("space", journeyThroughStars);
if (!test5result.Results.length) {
  console.log("PASS: Test 5");
  console.log(
    `Test 5: There are no results for "${test5result.SearchTerm}". Please try again.`
  );
} else {
  console.log("FAIL: Test 5");
  console.log("Expected:", 0);
  console.log("Received:", test5result.Results.length);
}

/** Given a case sensitive input, our function returns a known output. */
const test6result = findSearchTermInBooks("The", journeyThroughStars);
if (JSON.stringify(test6result) === JSON.stringify(caseSensitiveObj)) {
  console.log("PASS: Test 6");
} else {
  console.log("FAIL: Test 6");
  console.log("Expected:", caseSensitiveObj);
  console.log("Received:", test6result);
}

/** If our input includes special characters, our function returns matches with specified characters.  */
const test7result = findSearchTermInBooks("@special!", journeyThroughStars);
if (JSON.stringify(test7result) === JSON.stringify(specialCharacterObj)) {
  console.log("PASS: Test 7");
} else {
  console.log("FAIL: Test 7");
  console.log("Expected:", specialCharacterObj);
  console.log("Received:", test7result);
}

/** We can run multiple test cases to check if given any null or undefined inputs, the function will return the search term and no results. */
const test8result = findSearchTermInBooks(null, journeyThroughStars);
if (JSON.stringify(test8result) === JSON.stringify(undefinedOrNullObj)) {
  console.log("PASS: Test 8");
} else {
  console.log("FAIL: Test 8");
  console.log("Expected:", undefinedOrNullObj);
  console.log("Received:", test8result);
}

const test9result = findSearchTermInBooks("cater", undefined);
if (JSON.stringify(test9result) === JSON.stringify(undefinedScannedTextObj)) {
  console.log("PASS: Test 9");
} else {
  console.log("FAIL: Test 9");
  console.log("Expected:", undefinedScannedTextObj);
  console.log("Received:", test9result);
}

const test10result = findSearchTermInBooks(undefined, null);
if (JSON.stringify(test10result) === JSON.stringify(undefinedOrNullObj)) {
  console.log("PASS: Test 10");
} else {
  console.log("FAIL: Test 10");
  console.log("Expected:", undefinedOrNullObj);
  console.log("Received:", test10result);
}

/** We can check if given a longer input that matches text within the scannedTextObj, the function will return any matches that exist. */
const test11result = findSearchTermInBooks(
  "This text includes",
  journeyThroughStars
);
if (JSON.stringify(test11result) === JSON.stringify(multipleWordOutputObj)) {
  console.log("PASS: Test 11");
} else {
  console.log("FAIL: Test 11");
  console.log("Expected:", multipleWordOutputObj);
  console.log("Received:", test11result);
}

/** We can check if given longer text input that does not match text within the scannedTextObj, the function will return no matches. */
const test12result = findSearchTermInBooks(
  "this text includes",
  journeyThroughStars
);
if (
  JSON.stringify(test12result) === JSON.stringify(multipleWordOutputErrorObj)
) {
  console.log("PASS: Test 12");
} else {
  console.log("FAIL: Test 12");
  console.log("Expected:", multipleWordOutputErrorObj);
  console.log("Received:", test12result);
}

/** We can check if given an input, the output will include the search term as part of the text. */
const test13result = findSearchTermInBooks("sta", journeyThroughStars);
if (JSON.stringify(test13result) == JSON.stringify(partOfWordObj)) {
  console.log("PASS: Test 13");
} else {
  console.log("FAIL: Test 13");
  console.log("Expected:", partOfWordObj);
  console.log("Received:", test13result);
}

/** We can check if given an unknown input, the function will return no matches. */
const test14result = findSearchTermInBooks("cra", journeyThroughStars);
if (JSON.stringify(test14result) == JSON.stringify(partOfWordErrorObj)) {
  console.log("PASS: Test 14");
} else {
  console.log("FAIL: Test 14");
  console.log("Expected:", partOfWordErrorObj);
  console.log("Received:", test14result);
}

/** We can check if given a larger scannedTextObj dataset, the function will return a known output. */
const test15result = findSearchTermInBooks("sky", expandedJourneyThroughStars);
if (JSON.stringify(test15result) == JSON.stringify(largerDataResultsObj)) {
  console.log("PASS: Test 15");
} else {
  console.log("FAIL: Test 15");
  console.log("Expected:", largerDataResultsObj);
  console.log("Received:", test15result);
}

/** We can check if given an unknown input within a larger scannedTextObj dataset, the function will return no matches. */
const test16result = findSearchTermInBooks(
  "skater",
  expandedJourneyThroughStars
);
if (JSON.stringify(test16result) === JSON.stringify(largeDataNoResultsObj)) {
  console.log("PASS: Test 16");
} else {
  console.log("FAIL: Test 16");
  console.log("Expected:", largeDataNoResultsObj);
  console.log("Received:", test16result);
}
