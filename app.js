document.addEventListener("DOMContentLoaded", function () {
  const assignments = [
    {
      name: "Cards using ForEach",
      description:
        "Explore a stylish and functional digital watch collection on this webpage. Discover various digital watch models with detailed features and sleek designs.",
      codeUrl:
        "https://github.com/syedfarhan1224/digital-watch-collection-webpage",
      livePreviewUrl:
        "https://syedfarhan1224.github.io/digital-watch-collection-webpage/?authuser=0",
    },
    {
      name: "Attendance Portal",
      description:
        "An interactive attendance portal for tracking daily attendance with real-time status updates. Easily mark and update students as present, absent, or on leave with a user-friendly interface.",
      codeUrl: "https://github.com/syedfarhan1224/Attendence_portal-assignment",
      livePreviewUrl:
        "https://syedfarhan1224.github.io/Attendence_portal-assignment/?authuser=0",
    },
    {
      name: "Todo app",
      description:
        "Designed a responsive todo list web app enabling users to effortlessly manage tasks, featuring dynamic editing capabilities and persistent storage of todo items.",
      codeUrl: "https://github.com/syedfarhan1224/todo-list",
      livePreviewUrl: "https://syedfarhan1224.github.io/todo-list/?authuser=0",
    },
    {
      name: "Text Editor",
      description:
        "Designed and implemented a user-friendly text editor with real-time formatting options, including text alignment, color changes, and style toggles, providing a versatile and interactive editing experience.",
      codeUrl: "https://github.com/syedfarhan1224/text-editor",
      livePreviewUrl:
        "https://syedfarhan1224.github.io/text-editor/?authuser=0",
    },
    {
      name: "light bulb",
      description:
        "Developed an interactive light switch application using HTML, CSS, and JavaScript, which visually toggles a light bulb and plays a sound effect upon activation.",
      codeUrl: "https://github.com/syedfarhan1224/bulb-assignment",
      livePreviewUrl:
        "https://syedfarhan1224.github.io/bulb-assignment/?authuser=0",
    },
    {
      name: "Counter Application",
      description:
        "Developed a dynamic Counter Application using HTML, CSS, and JavaScript that allows users to increment, decrement, and reset a counter with visual feedback and color changes based on the counter value.",
      codeUrl: "https://github.com/syedfarhan1224/counter-game-application",
      livePreviewUrl:
        "https://syedfarhan1224.github.io/counter-game-application/?authuser=0",
    },
    {
      name: "Expense Tracking App",
      description:
        "Implemented functionality to add income and expenses, dynamically updating the total income, total expenses, and total savings displayed on the page.",
      codeUrl: "https://github.com/syedfarhan1224/finance-app",
      livePreviewUrl:
        "https://syedfarhan1224.github.io/finance-app/?authuser=0",
    },
    {
      name: "Calculator",
      description:
        "Implemented dynamic display and button interactions for operations like addition, subtraction, multiplication, division, and special functions such as 'AC' (all clear) and 'DEL' (delete last entry)",
      codeUrl: "https://github.com/syedfarhan1224/Calculator-javascript",
      livePreviewUrl:
        "https://syedfarhan1224.github.io/Calculator-javascript/?authuser=0",
    },
    {
      name: "Quick Stop Game",
      description:
        "Implemented real-time number updates and win/loss detection with a visually appealing interface featuring custom backgrounds, button effects, and user feedback",
      codeUrl: "https://github.com/syedfarhan1224/Quick-Stop-Game-main",
      livePreviewUrl:
        "https://syedfarhan1224.github.io/Quick-Stop-Game-main/?authuser=0",
    },
    {
      name: "Stop Watch",
      description:
        "Developed a functional Stopwatch application with start, stop, and reset capabilities using HTML, CSS, and JavaScript, featuring a visually appealing interface and smooth time updates.",
      codeUrl: "https://github.com/syedfarhan1224/Stop-Watch-main",
      livePreviewUrl:
        "https://syedfarhan1224.github.io/Stop-Watch-main/?authuser=0",
    },
    {
      name: "Countdown",
      description:
        "This project is an attractive countdown timer for Eid ul Azha, showing days, hours, minutes, and seconds remaining until the event. The timer dynamically updates every second and displays Eid Mubarak! when the countdown ends.",
      codeUrl: "https://github.com/syedfarhan1224/countdown",
      livePreviewUrl: "https://syedfarhan1224.github.io/countdown/",
    },
    {
      name: "Clock",
      description:
        "This project is a digital clock web page that dynamically displays the current time and date with a modern design. It features gradient styling, shadow effects, and updates every second using JavaScript.",
      codeUrl: "https://github.com/syedfarhan1224/clock",
      livePreviewUrl: "https://syedfarhan1224.github.io/clock/",
    },
    {
      name: "Guess the Number",
      description:
        "Test your luck in this interactive dice game by selecting numbers and matching them against randomly generated results. Track your wins, losses, and turns in a sleek and engaging interface.",
      codeUrl: "https://github.com/syedfarhan1224/Javascript-game",
      livePreviewUrl:
        "https://syedfarhan1224.github.io/Javascript-game/?authuser=0",
    },
    // {
    //   name: "For Loop Basic Excercise",
    //   description: "",
    //   codeUrl: "",
    //   livePreviewUrl: "",
    // },
    {
      name: "JavaScript Alert and Variables",
      description: "",
      codeUrl: "https://github.com/syedfarhan1224/javascript",
      livePreviewUrl: "https://syedfarhan1224.github.io/javascript/?authuser=0",
    },
  ];

  const container = document.getElementById("assignments-container");

  assignments.forEach((assignment) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h2");
    title.textContent = assignment.name;
    card.appendChild(title);

    const description = document.createElement("p");
    description.textContent = assignment.description;
    card.appendChild(description);

    const codeButton = document.createElement("button");
    codeButton.textContent = "View Code";
    codeButton.onclick = () => window.open(assignment.codeUrl, "_blank");
    card.appendChild(codeButton);

    const demoButton = document.createElement("button");
    demoButton.textContent = "Live Preview";
    demoButton.onclick = () => window.open(assignment.livePreviewUrl, "_blank");
    card.appendChild(demoButton);

    container.appendChild(card);
  });
});
