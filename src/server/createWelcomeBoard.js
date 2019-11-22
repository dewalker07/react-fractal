import shortid from "shortid";

// Give every card in a list an _id and the color white UNLESS those properties already exist
const appendAttributes = list =>
  list.map(card => ({
    color: "white",
    _id: shortid.generate(),
    ...card
  }));

// Generate the initial showcase board that every user and guest gets when they first log in
const createWelcomeBoard = userId => {
  const list1 = [
    { text: "### An open source application inspired by Fractal Analytics" },
    {
      text: `![Octocat](https://assets-cdn.github.com/images/modules/logos_page/Octocat.png)
Check out the [source code on GitHub](https://github.com/dewalker07/react-fractal)
`,
      color: "#6df"
    }
  ];

  const list2 = [
    {
      text: `### Supports GitHub flavored markdown
Featuring cutting edge HTML features like
* Headings
* Bullet points
* **Bold** and *italic* text
* Links
* Images
`
    },
    {
      text: `### Works on mobile devices
Unlike a certain other website...`
    },
    {
      text: `### And more!
[x] Colors
[x] Deadlines
[x] Checkboxes`,
      color: "#ff6",
      date: new Date()
    }
  ];

  const list3 = [
    {
      text: `### Edit a card
You can edit the contents of a card by clicking on it. Remember to use Shift + Enter to create a newline.`
    },
    {
      text: `### Drag a card or list
Reposition cards and lists by dragging them with a mouse or touch gesture.`
    },
    {
      text: `### Add a checklist
For a task that has many sub-tasks, you can create a checklist with markdown.
[x] Like this
[ ] Click me`
    },
    {
      text: `### Change the board
You can edit the title of the board by clicking it. You can also change the color of the board by clicking the button in the top right corner.`
    }
  ];

  // Append a warning message to the top of list3 for guest users only
  if (!userId) {
    list3.unshift({
      text: `### Sign in to save changes
Since you are not signed in, your changes will not persist after you leave the website. Go back to the login screen by pressing the 'Sign in' button in the top right corner.`
    });
  }

  return {
    _id: shortid.generate(),
    title: "Task Board",
    color: "blue",
    lists: [
      {
        _id: shortid.generate(),
        title: "To-Do",
        cards: appendAttributes(list1)
      },
      {
        _id: shortid.generate(),
        title: "Doing/Pending",
        cards: appendAttributes(list2)
      },
      {
        _id: shortid.generate(),
        title: "Done",
        cards: appendAttributes(list3)
      }
    ],
    users: userId ? [userId] : []
  };
};

export default createWelcomeBoard;
