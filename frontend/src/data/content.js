export const CATEGORIES = {
  career: {
    label: "Career", icon: "💼",
    skills: [
      { id: "webdev", name: "Web Development", icon: "🌐" },
      { id: "datascience", name: "Data Science", icon: "📊" },
      { id: "uiux", name: "UI/UX Design", icon: "🎨" },
      { id: "cybersecurity", name: "Cyber Security", icon: "🔐" },
      { id: "cloudcomputing", name: "Cloud Computing", icon: "☁️" },
      { id: "aiml", name: "AI / ML", icon: "🤖" },
    ],
  },
  extracurricular: {
    label: "Extra-Curricular", icon: "🌟",
    skills: [
      { id: "publicspeaking", name: "Public Speaking", icon: "🎤" },
      { id: "photography", name: "Photography", icon: "📷" },
      { id: "music", name: "Music", icon: "🎵" },
      { id: "writing", name: "Creative Writing", icon: "✍️" },
      { id: "fitness", name: "Fitness & Health", icon: "💪" },
      { id: "cooking", name: "Cooking", icon: "🍳" },
    ],
  },
};

export const DAY_PLANS = {
  webdev: [
    {
      topic: "HTML Basics", videoId: "qz0aGYrrlhU",
      questions: [
        { q: "What does HTML stand for?", options: ["Hyper Text Markup Language","High Text Machine Language","Home Tool Markup Language","Hyperlink Text Method Language"], answer: "Hyper Text Markup Language" },
        { q: "Which tag creates a hyperlink?", options: ["<link>","<a>","<href>","<url>"], answer: "<a>" },
        { q: "Which tag defines the page title shown in the browser tab?", options: ["<meta>","<head>","<title>","<header>"], answer: "<title>" },
        { q: "Which HTML element is used for the largest heading?", options: ["<h6>","<heading>","<h1>","<head>"], answer: "<h1>" },
        { q: "What attribute specifies the URL of a link?", options: ["src","href","link","url"], answer: "href" },
        { q: "Which tag is used to display an image?", options: ["<image>","<img>","<pic>","<src>"], answer: "<img>" },
        { q: "What does the <br> tag do?", options: ["Bold text","Line break","Border","Background"], answer: "Line break" },
        { q: "Which tag creates an unordered list?", options: ["<ol>","<li>","<ul>","<list>"], answer: "<ul>" },
        { q: "What is the correct HTML for a comment?", options: ["// comment","/* comment */","<!-- comment -->","# comment"], answer: "<!-- comment -->" },
        { q: "Which attribute makes an input field required?", options: ["validate","mandatory","required","must"], answer: "required" },
      ],
    },
    {
      topic: "CSS Fundamentals", videoId: "OXGznpKZ_sA",
      questions: [
        { q: "What does CSS stand for?", options: ["Cascading Style Sheets","Creative Style System","Computer Style Sheets","Colorful Style Syntax"], answer: "Cascading Style Sheets" },
        { q: "Which property changes text color?", options: ["font-color","text-color","color","foreground"], answer: "color" },
        { q: "Which property controls inner spacing?", options: ["margin","spacing","padding","border"], answer: "padding" },
        { q: "How do you select an element with id='main'?", options: [".main","#main","*main","main"], answer: "#main" },
        { q: "Which property makes text bold?", options: ["font-weight: bold","text-bold: true","font-style: bold","bold: yes"], answer: "font-weight: bold" },
        { q: "What value of display makes elements sit side by side?", options: ["block","inline","flex","grid"], answer: "inline" },
        { q: "Which property sets the background color?", options: ["color","bg-color","background-color","fill"], answer: "background-color" },
        { q: "How do you add a 10px space outside an element?", options: ["padding: 10px","spacing: 10px","margin: 10px","border: 10px"], answer: "margin: 10px" },
        { q: "Which CSS property controls the font size?", options: ["text-size","font-size","size","text-style"], answer: "font-size" },
        { q: "What does z-index control?", options: ["Zoom level","Stacking order","Zoom animation","Zero position"], answer: "Stacking order" },
      ],
    },
    {
      topic: "JavaScript Basics", videoId: "PkZNo7MFNFg",
      questions: [
        { q: "Which keyword declares a block-scoped variable?", options: ["var","let","define","set"], answer: "let" },
        { q: "What does === check?", options: ["Value only","Type only","Value and type","Reference"], answer: "Value and type" },
        { q: "Which method adds to end of array?", options: ["push()","append()","add()","insert()"], answer: "push()" },
        { q: "How do you write a single-line comment in JS?", options: ["<!-- -->","/* */","//","#"], answer: "//" },
        { q: "Which method removes the last element of an array?", options: ["pop()","remove()","delete()","splice()"], answer: "pop()" },
        { q: "What is the output of typeof 42?", options: ["int","number","integer","float"], answer: "number" },
        { q: "Which function converts a string to an integer?", options: ["toInt()","parseInt()","Integer()","Number.parse()"], answer: "parseInt()" },
        { q: "What does DOM stand for?", options: ["Document Object Model","Data Object Method","Document Order Map","Dynamic Object Model"], answer: "Document Object Model" },
        { q: "Which event fires when a button is clicked?", options: ["onhover","onchange","onclick","onfocus"], answer: "onclick" },
        { q: "How do you declare a function in JS?", options: ["func myFn()","def myFn():","function myFn(){}","fn myFn()"], answer: "function myFn(){}" },
      ],
    },
    {
      topic: "React Introduction", videoId: "bMknfKXIFA8",
      questions: [
        { q: "React is maintained by?", options: ["Google","Microsoft","Facebook/Meta","Twitter"], answer: "Facebook/Meta" },
        { q: "What is JSX?", options: ["A database","JavaScript XML syntax","A CSS framework","A testing tool"], answer: "JavaScript XML syntax" },
        { q: "Which hook manages state?", options: ["useEffect","useRef","useState","useContext"], answer: "useState" },
        { q: "What is a React component?", options: ["A CSS class","A reusable UI piece","A database table","A server route"], answer: "A reusable UI piece" },
        { q: "Which hook runs side effects?", options: ["useState","useEffect","useRef","useMemo"], answer: "useEffect" },
        { q: "How do you pass data to a child component?", options: ["state","context","props","hooks"], answer: "props" },
        { q: "What does the key prop help React with?", options: ["Styling","Identifying list items","Routing","API calls"], answer: "Identifying list items" },
        { q: "Which command creates a new React app?", options: ["npm react new","npx create-react-app","react init","npm new react"], answer: "npx create-react-app" },
        { q: "What is the virtual DOM?", options: ["A browser API","A lightweight copy of the real DOM","A CSS engine","A database"], answer: "A lightweight copy of the real DOM" },
        { q: "How do you conditionally render in JSX?", options: ["if/else block","switch statement","Ternary or &&","for loop"], answer: "Ternary or &&" },
      ],
    },
    {
      topic: "Node.js & APIs", videoId: "Oe421EPjeBE",
      questions: [
        { q: "Node.js runs on which engine?", options: ["SpiderMonkey","V8","Chakra","Nitro"], answer: "V8" },
        { q: "Which command initializes a Node project?", options: ["node start","npm init","node init","npm start"], answer: "npm init" },
        { q: "What is npm?", options: ["Node Package Manager","New Project Manager","Node Process Module","None"], answer: "Node Package Manager" },
        { q: "Which module handles HTTP in Node?", options: ["fs","path","http","net"], answer: "http" },
        { q: "What does REST stand for?", options: ["Remote Execution State Transfer","Representational State Transfer","Remote State Technology","Reliable State Transfer"], answer: "Representational State Transfer" },
        { q: "Which HTTP method retrieves data?", options: ["POST","PUT","GET","DELETE"], answer: "GET" },
        { q: "What does Express.js do?", options: ["Manages databases","Provides a web framework for Node","Handles CSS","Compiles JavaScript"], answer: "Provides a web framework for Node" },
        { q: "What is JSON?", options: ["JavaScript Object Notation","Java Syntax Object Notation","JavaScript Online Network","None"], answer: "JavaScript Object Notation" },
        { q: "Which status code means 'Not Found'?", options: ["200","301","404","500"], answer: "404" },
        { q: "What is middleware in Express?", options: ["A database layer","Functions that run between request and response","A CSS preprocessor","A testing library"], answer: "Functions that run between request and response" },
      ],
    },
  ],
  datascience: [
    {
      topic: "Python Basics", videoId: "rfscVS0vtbw",
      questions: [
        { q: "Python was created by?", options: ["Guido van Rossum","James Gosling","Bjarne Stroustrup","Dennis Ritchie"], answer: "Guido van Rossum" },
        { q: "Which is a Python list?", options: ["{}","()","[]","<>"], answer: "[]" },
        { q: "How do you print in Python?", options: ["echo()","console.log()","print()","write()"], answer: "print()" },
        { q: "Which keyword defines a function in Python?", options: ["func","function","def","fn"], answer: "def" },
        { q: "What is the output of 2 ** 3 in Python?", options: ["6","8","9","5"], answer: "8" },
        { q: "Which data type is immutable in Python?", options: ["list","dict","set","tuple"], answer: "tuple" },
        { q: "How do you start a comment in Python?", options: ["//","/*","#","--"], answer: "#" },
        { q: "What does len() do?", options: ["Returns last element","Returns length","Loops through list","Deletes element"], answer: "Returns length" },
        { q: "Which keyword is used for a loop in Python?", options: ["loop","repeat","for","each"], answer: "for" },
        { q: "What does 'None' represent in Python?", options: ["Zero","Empty string","Null/no value","False"], answer: "Null/no value" },
      ],
    },
    {
      topic: "Data Analysis with Pandas", videoId: "vmEHCJofslg",
      questions: [
        { q: "Pandas is used for?", options: ["Web development","Data manipulation","Game development","Networking"], answer: "Data manipulation" },
        { q: "Which object is like a table in Pandas?", options: ["Series","Array","DataFrame","Matrix"], answer: "DataFrame" },
        { q: "How to read a CSV in Pandas?", options: ["pd.open_csv()","pd.read_csv()","pd.load_csv()","pd.import_csv()"], answer: "pd.read_csv()" },
        { q: "Which method shows the first 5 rows?", options: ["df.top()","df.first()","df.head()","df.start()"], answer: "df.head()" },
        { q: "How do you select a column named 'age'?", options: ["df[age]","df.col('age')","df['age']","df->age"], answer: "df['age']" },
        { q: "Which method gives basic statistics?", options: ["df.info()","df.stats()","df.describe()","df.summary()"], answer: "df.describe()" },
        { q: "How do you drop rows with missing values?", options: ["df.remove_na()","df.dropna()","df.fillna()","df.clean()"], answer: "df.dropna()" },
        { q: "What does df.shape return?", options: ["Column names","Data types","Rows and columns count","Index values"], answer: "Rows and columns count" },
        { q: "Which method merges two DataFrames?", options: ["df.join()","df.concat()","pd.merge()","df.combine()"], answer: "pd.merge()" },
        { q: "How do you group data by a column?", options: ["df.sort()","df.groupby()","df.cluster()","df.partition()"], answer: "df.groupby()" },
      ],
    },
    {
      topic: "Data Visualization", videoId: "a9UrKTVEeZA",
      questions: [
        { q: "Matplotlib is used for?", options: ["Machine learning","Data visualization","Web scraping","Database management"], answer: "Data visualization" },
        { q: "Which function creates a line plot?", options: ["plt.bar()","plt.scatter()","plt.plot()","plt.pie()"], answer: "plt.plot()" },
        { q: "Seaborn is built on top of?", options: ["Plotly","Bokeh","Matplotlib","D3.js"], answer: "Matplotlib" },
        { q: "Which plot shows distribution of a single variable?", options: ["Scatter plot","Bar chart","Histogram","Line chart"], answer: "Histogram" },
        { q: "How do you show a plot in Matplotlib?", options: ["plt.render()","plt.display()","plt.show()","plt.draw()"], answer: "plt.show()" },
        { q: "Which chart is best for comparing categories?", options: ["Line chart","Bar chart","Scatter plot","Pie chart"], answer: "Bar chart" },
        { q: "What does plt.xlabel() do?", options: ["Sets y-axis label","Sets title","Sets x-axis label","Sets legend"], answer: "Sets x-axis label" },
        { q: "Which Seaborn function creates a heatmap?", options: ["sns.heat()","sns.heatmap()","sns.map()","sns.grid()"], answer: "sns.heatmap()" },
        { q: "What is Plotly used for?", options: ["Static charts only","Interactive visualizations","Database queries","Machine learning"], answer: "Interactive visualizations" },
        { q: "Which plot shows relationship between two variables?", options: ["Histogram","Bar chart","Scatter plot","Pie chart"], answer: "Scatter plot" },
      ],
    },
  ],
  uiux: [
    {
      topic: "Design Principles", videoId: "a5KYlHNKQB8",
      questions: [
        { q: "What does UX stand for?", options: ["User Experience","User Extension","Unique Experience","Unified Exchange"], answer: "User Experience" },
        { q: "What is a wireframe?", options: ["A color palette","A low-fidelity layout sketch","A final design","A font collection"], answer: "A low-fidelity layout sketch" },
        { q: "Which principle means keeping things simple?", options: ["Hierarchy","Contrast","Minimalism","Alignment"], answer: "Minimalism" },
        { q: "What does UI stand for?", options: ["User Interface","Unique Interaction","Universal Input","User Integration"], answer: "User Interface" },
        { q: "What is a prototype?", options: ["Final product","Interactive mockup for testing","A color scheme","A font choice"], answer: "Interactive mockup for testing" },
        { q: "Which principle guides the eye through a design?", options: ["Balance","Visual hierarchy","Repetition","Proximity"], answer: "Visual hierarchy" },
        { q: "What is white space in design?", options: ["White background","Empty space around elements","A font color","A border style"], answer: "Empty space around elements" },
        { q: "What does accessibility in design mean?", options: ["Fast loading","Usable by people with disabilities","Mobile-first","Colorful design"], answer: "Usable by people with disabilities" },
        { q: "What is a persona in UX?", options: ["A logo","A fictional user representing a target audience","A color palette","A navigation menu"], answer: "A fictional user representing a target audience" },
        { q: "What is the purpose of user testing?", options: ["To write code","To validate design decisions with real users","To create wireframes","To pick colors"], answer: "To validate design decisions with real users" },
      ],
    },
    {
      topic: "Figma Basics", videoId: "FTFaQWZBqQ8",
      questions: [
        { q: "Figma is primarily used for?", options: ["Coding","UI/UX Design","Video editing","3D modeling"], answer: "UI/UX Design" },
        { q: "What are Figma components?", options: ["Reusable design elements","Color themes","Fonts","Plugins"], answer: "Reusable design elements" },
        { q: "Figma runs in?", options: ["Only desktop app","Only mobile","Browser and desktop","Only browser"], answer: "Browser and desktop" },
        { q: "What is an Auto Layout in Figma?", options: ["Automatic color fill","Responsive resizing of frames","Auto-save feature","Grid system"], answer: "Responsive resizing of frames" },
        { q: "What are Figma variants?", options: ["Color styles","Multiple states of a component","Font options","Export formats"], answer: "Multiple states of a component" },
        { q: "How do you create a frame in Figma?", options: ["Press R","Press F","Press T","Press G"], answer: "Press F" },
        { q: "What is a Figma plugin?", options: ["A design template","An extension that adds functionality","A color palette","A font library"], answer: "An extension that adds functionality" },
        { q: "What does 'constraints' do in Figma?", options: ["Locks colors","Controls how elements resize with parent frame","Adds borders","Sets opacity"], answer: "Controls how elements resize with parent frame" },
        { q: "What is the purpose of Figma prototyping?", options: ["Export assets","Simulate user interactions","Write CSS","Create animations only"], answer: "Simulate user interactions" },
        { q: "What are Figma styles used for?", options: ["Saving reusable colors, fonts, and effects","Exporting files","Creating grids","Writing code"], answer: "Saving reusable colors, fonts, and effects" },
      ],
    },
  ],
  publicspeaking: [
    {
      topic: "Building Confidence", videoId: "tShavGuo0_E",
      questions: [
        { q: "What is the most common fear?", options: ["Heights","Public speaking","Spiders","Darkness"], answer: "Public speaking" },
        { q: "Eye contact in speaking shows?", options: ["Nervousness","Confidence and engagement","Boredom","Aggression"], answer: "Confidence and engagement" },
        { q: "Pausing in a speech is?", options: ["A mistake","A sign of forgetting","A powerful tool","Unprofessional"], answer: "A powerful tool" },
        { q: "What helps reduce speaking anxiety?", options: ["Avoiding practice","Preparation and rehearsal","Speaking faster","Reading from notes"], answer: "Preparation and rehearsal" },
        { q: "Good posture while speaking conveys?", options: ["Laziness","Authority and confidence","Nervousness","Boredom"], answer: "Authority and confidence" },
        { q: "What is vocal variety?", options: ["Speaking in one tone","Changing pitch, pace, and volume","Using big words","Speaking quietly"], answer: "Changing pitch, pace, and volume" },
        { q: "How should you handle a mistake mid-speech?", options: ["Stop and apologize repeatedly","Panic","Acknowledge briefly and continue","Start over"], answer: "Acknowledge briefly and continue" },
        { q: "What does 'filler words' mean?", options: ["Important keywords","Um, uh, like — words that add no meaning","Technical terms","Transition words"], answer: "Um, uh, like — words that add no meaning" },
        { q: "Why is knowing your audience important?", options: ["To impress them","To tailor your message to their needs","To memorize names","To avoid questions"], answer: "To tailor your message to their needs" },
        { q: "What is the best way to open a speech?", options: ["List your credentials","Start with a story, question, or surprising fact","Read the agenda","Thank everyone"], answer: "Start with a story, question, or surprising fact" },
      ],
    },
    {
      topic: "Structuring Your Talk", videoId: "Unzc731iCUY",
      questions: [
        { q: "A good speech has how many main parts?", options: ["2","3","5","7"], answer: "3" },
        { q: "The opening of a speech should?", options: ["List all points","Grab attention","Thank everyone","State the conclusion"], answer: "Grab attention" },
        { q: "What is a call to action?", options: ["A dramatic pause","Asking audience to do something","A joke","A statistic"], answer: "Asking audience to do something" },
        { q: "What is the purpose of the conclusion?", options: ["Introduce new ideas","Summarize and leave a lasting impression","List references","Repeat the intro"], answer: "Summarize and leave a lasting impression" },
        { q: "What is a transition in a speech?", options: ["A pause","A phrase connecting one idea to the next","A visual aid","A statistic"], answer: "A phrase connecting one idea to the next" },
        { q: "How many main points should a short speech have?", options: ["1","2-3","7-10","As many as possible"], answer: "2-3" },
        { q: "What makes evidence in a speech credible?", options: ["Personal opinion","Statistics and expert sources","Emotional stories only","Repetition"], answer: "Statistics and expert sources" },
        { q: "What is the rule of three in speeches?", options: ["Speak for 3 minutes","Use 3 examples, points, or words for impact","Pause 3 times","Repeat 3 times"], answer: "Use 3 examples, points, or words for impact" },
        { q: "Why should you rehearse out loud?", options: ["To memorize word for word","To hear how it sounds and fix awkward parts","To impress others","To time yourself only"], answer: "To hear how it sounds and fix awkward parts" },
        { q: "What is the PREP method?", options: ["Point, Reason, Example, Point","Prepare, Rehearse, Execute, Polish","Practice, Repeat, Evaluate, Present","None of the above"], answer: "Point, Reason, Example, Point" },
      ],
    },
  ],
};

const DEFAULT_PLAN = [
  {
    topic: "Introduction & Basics", videoId: "dQw4w9WgXcQ",
    questions: [
      { q: "Learning new skills requires?", options: ["Luck","Consistent practice","Natural talent","Expensive tools"], answer: "Consistent practice" },
      { q: "The best way to retain knowledge is?", options: ["Reading once","Active recall and practice","Watching videos only","Memorizing"], answer: "Active recall and practice" },
      { q: "Setting goals helps with?", options: ["Nothing","Focus and motivation","Stress only","Avoiding work"], answer: "Focus and motivation" },
      { q: "What is spaced repetition?", options: ["Cramming","Reviewing material at increasing intervals","Reading fast","Skipping topics"], answer: "Reviewing material at increasing intervals" },
      { q: "Which study technique is most effective?", options: ["Highlighting","Re-reading","Practice testing","Summarizing"], answer: "Practice testing" },
      { q: "What does a growth mindset mean?", options: ["You are born talented","Abilities can be developed through effort","Intelligence is fixed","Avoiding challenges"], answer: "Abilities can be developed through effort" },
      { q: "How long should a focused study session be?", options: ["5 minutes","25-50 minutes","3 hours","All day"], answer: "25-50 minutes" },
      { q: "What is the Pomodoro technique?", options: ["A cooking method","25 min work + 5 min break cycles","Studying for 2 hours straight","A memory palace"], answer: "25 min work + 5 min break cycles" },
      { q: "Why is sleep important for learning?", options: ["It isn't","Brain consolidates memories during sleep","It makes you forget","Only for physical skills"], answer: "Brain consolidates memories during sleep" },
      { q: "What is deliberate practice?", options: ["Casual repetition","Focused practice targeting weaknesses","Watching others","Reading textbooks"], answer: "Focused practice targeting weaknesses" },
    ],
  },
  {
    topic: "Core Concepts", videoId: "dQw4w9WgXcQ",
    questions: [
      { q: "Breaking a skill into steps is called?", options: ["Chunking","Skipping","Rushing","Guessing"], answer: "Chunking" },
      { q: "Feedback helps you?", options: ["Feel bad","Improve faster","Slow down","Quit"], answer: "Improve faster" },
      { q: "Consistency means?", options: ["Doing it once","Doing it perfectly","Doing it regularly","Doing it fast"], answer: "Doing it regularly" },
      { q: "What is a learning objective?", options: ["A grade","A clear statement of what you will learn","A textbook chapter","A test score"], answer: "A clear statement of what you will learn" },
      { q: "Why is teaching others effective for learning?", options: ["It wastes time","It forces you to understand deeply","It helps others only","It is not effective"], answer: "It forces you to understand deeply" },
      { q: "What is metacognition?", options: ["A memory technique","Thinking about your own thinking and learning","A study schedule","A type of quiz"], answer: "Thinking about your own thinking and learning" },
      { q: "What does 'interleaving' mean in studying?", options: ["Studying one topic for hours","Mixing different topics in one session","Taking breaks","Using flashcards"], answer: "Mixing different topics in one session" },
      { q: "What is the best response to making mistakes?", options: ["Give up","Ignore them","Analyse and learn from them","Blame others"], answer: "Analyse and learn from them" },
      { q: "What is intrinsic motivation?", options: ["Motivation from rewards","Motivation from within yourself","Motivation from grades","Motivation from others"], answer: "Motivation from within yourself" },
      { q: "How does curiosity help learning?", options: ["It distracts you","It drives deeper exploration and retention","It slows you down","It has no effect"], answer: "It drives deeper exploration and retention" },
    ],
  },
];

export function getDayPlan(skillId, totalDays) {
  const base = DAY_PLANS[skillId] || DEFAULT_PLAN;
  const plan = [];
  for (let i = 0; i < totalDays; i++) {
    plan.push(base[i % base.length]);
  }
  return plan;
}

export function applyAdaptiveLogic(plan, dayIndex, wrongCount) {
  const totalQuestions = plan.dayPlans[dayIndex]?.questions?.length || 10;
  const correct = totalQuestions - wrongCount;
  const score = (correct / totalQuestions) * 100;
  const newDayPlans = [...plan.dayPlans];
  const currentDay = newDayPlans[dayIndex];
  const revisionDay = { ...currentDay, topic: "Revision: " + currentDay.topic, isRevision: true };
  let daysAdded = 0;
  let message;
  if (score < 40) {
    newDayPlans.splice(dayIndex + 1, 0, revisionDay, { ...revisionDay, topic: "Deep Dive: " + currentDay.topic });
    daysAdded = 2;
    message = { type: "struggling", text: `You got ${correct}/${totalQuestions}. 2 revision days added to reinforce this topic.` };
  } else if (score < 60) {
    newDayPlans.splice(dayIndex + 1, 0, revisionDay);
    daysAdded = 1;
    message = { type: "review", text: `You got ${correct}/${totalQuestions}. A revision day has been added.` };
  } else {
    message = { type: "good", text: score >= 80 ? `Excellent! ${correct}/${totalQuestions} — moving on.` : `Good work! ${correct}/${totalQuestions} — keep it up!` };
  }
  return { updatedPlan: { ...plan, days: plan.days + daysAdded, dayPlans: newDayPlans }, message };
}
