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
      SearchTerm: searchTerm,
      Results: [],
    };
  }

  const bookContentResults = scannedTextObj.reduce((acc, bookInfo) => {
    const filterBooksByQuery = bookInfo.Content.filter((bookContent) =>
      bookContent.Text.includes(searchTerm)
    );
    filterBooksByQuery.forEach((locatedBook) => {
      acc.push({
        ISBN: bookInfo.ISBN,
        Page: locatedBook?.Page | undefined,
        Line: locatedBook?.Line | undefined,
      });
    });
    return acc;
  }, []);

  return {
    SearchTerm: searchTerm,
    Results: bookContentResults,
  };
}

/** Example input object. */
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

/* Mock data for additional test cases */
/* Example #2 Input object */
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
        Text: "Every star seemed akin to a distant beacon, guiding her thoughts.",
      },
    ],
  },
];

/* Example #2 Output object */
const journeyOutStars = {
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

const journeyOutStars2 = {
  SearchTerm: "The",
  Results: [
    {
      ISBN: "123456789012",
      Page: 1,
      Line: 5,
    },
  ],
};

const journeyOutStars3 = {
  SearchTerm: "camry",
  Results: [],
};

const secondOutputTest = {
  SearchTerm: "foster",
  Results: [],
}; // can use this as an empty result for sad path
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

/* happy paths */
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
if (JSON.stringify(journeyOutStars) === JSON.stringify(test3result)) {
  console.log("PASS: Test 3");
} else {
  console.log("FAIL: Test 3");
  console.log("Expected:", journeyOutStars);
  console.log("Received:", test3result);
}

/** We can check that given another input, we get the right number of results. */
const test4result = findSearchTermInBooks("akin", journeyThroughStars);
if (test4result.Results.length == 2) {
  console.log("PASS: Test 4");
} else {
  console.log("FAIL: Test 4");
  console.log("Expected:", twentyLeaguesOut.Results.length);
  console.log("Received:", test4result.Results.length);
}

/** We can check if there are no matches found, our output returns as an empty array. */
const test5result = findSearchTermInBooks("camry", journeyThroughStars);
if (test5result.Results.length === 0) {
  console.log("PASS: Test 5");
} else {
  console.log("FAIL: Test 5");
  console.log("Expected:", journeyOutStars3);
  console.log("Received:", test5result);
}

/** We can check that given a case sensitive input, we get a known output. */
const test6result = findSearchTermInBooks("The", journeyThroughStars);
if (JSON.stringify(test6result) === JSON.stringify(journeyOutStars2)) {
  console.log("PASS: Test 6");
} else {
  console.log("FAIL: Test 6");
  console.log("Expected:", journeyOutStars2);
  console.log("Received:", test6result);
}

/** We can check if our scannedTextObj is empty, the output will return undefined. */

/** We can check if our input includes special characters, the output will include those characters. */

/** We can check if given an input, the output will include the search term as part of a word. */

/** We can check if given a larger scannedTextObj dataset, the output will return the correct number of results */

/** We can check if given a scannedTextObj with no scanned text, the output will return a results object with only the searchTerm and an empty Results array */
