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
      topic: "HTML Basics", videoId: "salY_Sm6mv4",
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
      topic: "CSS Fundamentals", videoId: "1Rs2ND1ryYc",
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
      topic: "JavaScript Basics", videoId: "W6NZfCO5SIk",
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
      topic: "React Introduction", videoId: "SqcY0GlETPk",
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
      topic: "Node.js & APIs", videoId: "BLl32FvcdVM",
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
      topic: "Python Basics", videoId: "kqtD5dpn9C8",
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
      topic: "Data Analysis with Pandas", videoId: "ZyhVh-qRZPA",
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

  cybersecurity: [
    { topic: "Intro to Cyber Security", videoId: "inWWhr5tnEA", questions: [
      { q: "What is cybersecurity?", options: ["Protecting computers and networks","Building websites","Writing code","Managing databases"], answer: "Protecting computers and networks" },
      { q: "What does VPN stand for?", options: ["Virtual Private Network","Very Private Node","Virtual Public Network","Verified Private Node"], answer: "Virtual Private Network" },
      { q: "What is phishing?", options: ["A fishing game","Tricking users into revealing info","A type of virus","A firewall"], answer: "Tricking users into revealing info" },
      { q: "What is malware?", options: ["Good software","Malicious software","A network protocol","A type of hardware"], answer: "Malicious software" },
      { q: "What does HTTPS mean?", options: ["Hyper Text Transfer Protocol Secure","High Transfer Protocol System","Hyper Text Transfer Public Server","None"], answer: "Hyper Text Transfer Protocol Secure" },
      { q: "What is a firewall?", options: ["A physical wall","Software/hardware that filters network traffic","A type of virus","An encryption method"], answer: "Software/hardware that filters network traffic" },
      { q: "What is two-factor authentication?", options: ["Two passwords","A second verification step beyond password","Two usernames","Double encryption"], answer: "A second verification step beyond password" },
      { q: "What is encryption?", options: ["Deleting data","Converting data to unreadable format","Copying data","Compressing data"], answer: "Converting data to unreadable format" },
      { q: "What is a DDoS attack?", options: ["Data Deletion","Overwhelming a server with traffic","Stealing passwords","Installing malware"], answer: "Overwhelming a server with traffic" },
      { q: "What is social engineering?", options: ["Building social apps","Manipulating people to reveal info","Network engineering","Social media marketing"], answer: "Manipulating people to reveal info" },
    ]},
    { topic: "Network Security", videoId: "E03gh1huvW4", questions: [
      { q: "What is a subnet?", options: ["A type of virus","A division of an IP network","A web browser","A firewall rule"], answer: "A division of an IP network" },
      { q: "What does DNS stand for?", options: ["Domain Name System","Data Network Service","Digital Node Server","Domain Node Security"], answer: "Domain Name System" },
      { q: "What is an IP address?", options: ["A website name","A unique identifier for a device on a network","A type of cable","A browser"], answer: "A unique identifier for a device on a network" },
      { q: "What is a proxy server?", options: ["A backup server","An intermediary between client and internet","A type of firewall","A DNS server"], answer: "An intermediary between client and internet" },
      { q: "What is port scanning?", options: ["Scanning documents","Checking open ports on a network","A type of attack","Monitoring bandwidth"], answer: "Checking open ports on a network" },
      { q: "What is SSL?", options: ["Secure Socket Layer","System Security Layer","Safe Server Link","Secure Software License"], answer: "Secure Socket Layer" },
      { q: "What is a man-in-the-middle attack?", options: ["A physical attack","Intercepting communication between two parties","A password attack","A DDoS attack"], answer: "Intercepting communication between two parties" },
      { q: "What is network sniffing?", options: ["Detecting viruses","Capturing network packets","Blocking traffic","Encrypting data"], answer: "Capturing network packets" },
      { q: "What is NAT?", options: ["Network Address Translation","Node Authentication Token","Network Access Tool","None"], answer: "Network Address Translation" },
      { q: "What is a honeypot?", options: ["A sweet trap","A decoy system to detect attackers","A type of malware","A firewall"], answer: "A decoy system to detect attackers" },
    ]},
    { topic: "Ethical Hacking Basics", videoId: "3Kq1MIfTWCE", questions: [
      { q: "What is ethical hacking?", options: ["Illegal hacking","Authorized testing of systems for vulnerabilities","Hacking for fun","Social media hacking"], answer: "Authorized testing of systems for vulnerabilities" },
      { q: "What is penetration testing?", options: ["Testing physical security","Simulated cyber attack to find weaknesses","Testing network speed","Password testing"], answer: "Simulated cyber attack to find weaknesses" },
      { q: "What is a vulnerability?", options: ["A strength","A weakness that can be exploited","A type of firewall","An encryption key"], answer: "A weakness that can be exploited" },
      { q: "What is SQL injection?", options: ["Adding SQL to a database","Inserting malicious SQL code into a query","A type of encryption","A network attack"], answer: "Inserting malicious SQL code into a query" },
      { q: "What is XSS?", options: ["Extra Security System","Cross-Site Scripting","Extended Security Standard","None"], answer: "Cross-Site Scripting" },
      { q: "What is a zero-day exploit?", options: ["An old vulnerability","An unknown vulnerability with no patch","A daily attack","A type of virus"], answer: "An unknown vulnerability with no patch" },
      { q: "What is footprinting?", options: ["Tracking footsteps","Gathering information about a target","Installing malware","Encrypting data"], answer: "Gathering information about a target" },
      { q: "What is a CVE?", options: ["Common Vulnerability Exposure","Cyber Vulnerability Engine","Common Virus Entry","None"], answer: "Common Vulnerability Exposure" },
      { q: "What is OWASP?", options: ["A hacking group","Open Web Application Security Project","A firewall standard","A network protocol"], answer: "Open Web Application Security Project" },
      { q: "What is a brute force attack?", options: ["Physical attack","Trying all possible passwords","A DDoS attack","Social engineering"], answer: "Trying all possible passwords" },
    ]},
  ],
  cloudcomputing: [
    { topic: "Cloud Fundamentals", videoId: "M988_fsOSWo", questions: [
      { q: "What is cloud computing?", options: ["Weather forecasting","Delivering computing services over the internet","A type of hardware","Local storage"], answer: "Delivering computing services over the internet" },
      { q: "What does IaaS stand for?", options: ["Infrastructure as a Service","Internet as a Service","Integration as a Service","None"], answer: "Infrastructure as a Service" },
      { q: "What does SaaS stand for?", options: ["Software as a Service","Storage as a Service","Security as a Service","None"], answer: "Software as a Service" },
      { q: "What is a public cloud?", options: ["A private server","Cloud services available to anyone over the internet","A local network","A government cloud"], answer: "Cloud services available to anyone over the internet" },
      { q: "What is scalability in cloud?", options: ["Reducing costs","Ability to increase or decrease resources as needed","A security feature","A type of storage"], answer: "Ability to increase or decrease resources as needed" },
      { q: "What is AWS?", options: ["A programming language","Amazon Web Services","Advanced Web System","None"], answer: "Amazon Web Services" },
      { q: "What is a virtual machine?", options: ["A physical computer","Software emulation of a computer","A cloud storage unit","A network device"], answer: "Software emulation of a computer" },
      { q: "What is cloud storage?", options: ["Local hard drive","Storing data on remote servers","A type of RAM","A USB drive"], answer: "Storing data on remote servers" },
      { q: "What is a CDN?", options: ["Content Delivery Network","Cloud Data Node","Central Database Network","None"], answer: "Content Delivery Network" },
      { q: "What is serverless computing?", options: ["Computing without servers","Running code without managing servers","A type of cloud storage","None"], answer: "Running code without managing servers" },
    ]},
    { topic: "AWS & Azure Basics", videoId: "ulprqHHWlng", questions: [
      { q: "What is EC2 in AWS?", options: ["Email service","Virtual server in the cloud","A database","A storage bucket"], answer: "Virtual server in the cloud" },
      { q: "What is S3 in AWS?", options: ["A server","Simple Storage Service","Security Service","None"], answer: "Simple Storage Service" },
      { q: "What is Azure?", options: ["A Google product","Microsoft cloud platform","An AWS service","A Linux distro"], answer: "Microsoft cloud platform" },
      { q: "What is a cloud region?", options: ["A country","A geographic area with data centers","A type of server","A network zone"], answer: "A geographic area with data centers" },
      { q: "What is load balancing?", options: ["Weighing servers","Distributing traffic across multiple servers","A storage technique","A security feature"], answer: "Distributing traffic across multiple servers" },
      { q: "What is auto-scaling?", options: ["Manual scaling","Automatically adjusting resources based on demand","A billing feature","None"], answer: "Automatically adjusting resources based on demand" },
      { q: "What is a cloud database?", options: ["A local database","A database hosted on cloud infrastructure","A spreadsheet","None"], answer: "A database hosted on cloud infrastructure" },
      { q: "What is DevOps?", options: ["A programming language","Combining development and operations practices","A cloud service","A database"], answer: "Combining development and operations practices" },
      { q: "What is Kubernetes?", options: ["A programming language","Container orchestration system","A cloud provider","A database"], answer: "Container orchestration system" },
      { q: "What is Docker?", options: ["A shipping company","A platform for containerizing applications","A cloud service","A database"], answer: "A platform for containerizing applications" },
    ]},
  ],
  aiml: [
    { topic: "AI & ML Fundamentals", videoId: "ukzFI9rgwfU", questions: [
      { q: "What does AI stand for?", options: ["Automated Intelligence","Artificial Intelligence","Advanced Integration","None"], answer: "Artificial Intelligence" },
      { q: "What is machine learning?", options: ["Teaching machines manually","Systems that learn from data","A programming language","A type of robot"], answer: "Systems that learn from data" },
      { q: "What is supervised learning?", options: ["Learning without labels","Learning with labeled training data","Unsupervised learning","Reinforcement learning"], answer: "Learning with labeled training data" },
      { q: "What is a neural network?", options: ["A computer network","A system inspired by the human brain","A type of database","A programming framework"], answer: "A system inspired by the human brain" },
      { q: "What is deep learning?", options: ["Learning slowly","Neural networks with many layers","A type of database","Basic machine learning"], answer: "Neural networks with many layers" },
      { q: "What is overfitting?", options: ["Model performs well on all data","Model memorizes training data but fails on new data","A type of neural network","None"], answer: "Model memorizes training data but fails on new data" },
      { q: "What is a training dataset?", options: ["Data used to test a model","Data used to train a model","Random data","Production data"], answer: "Data used to train a model" },
      { q: "What is NLP?", options: ["Natural Language Processing","Network Layer Protocol","Neural Learning Process","None"], answer: "Natural Language Processing" },
      { q: "What is a classification problem?", options: ["Predicting a number","Predicting which category data belongs to","Clustering data","None"], answer: "Predicting which category data belongs to" },
      { q: "What is reinforcement learning?", options: ["Learning from labeled data","Learning through rewards and penalties","Unsupervised learning","Deep learning"], answer: "Learning through rewards and penalties" },
    ]},
    { topic: "Python for ML", videoId: "7eh4d6sabA0", questions: [
      { q: "Which library is used for ML in Python?", options: ["Django","Scikit-learn","Flask","Pygame"], answer: "Scikit-learn" },
      { q: "What is NumPy used for?", options: ["Web development","Numerical computing","Database management","UI design"], answer: "Numerical computing" },
      { q: "What is a tensor?", options: ["A type of database","Multi-dimensional array used in ML","A neural network","A Python function"], answer: "Multi-dimensional array used in ML" },
      { q: "What is TensorFlow?", options: ["A database","An open-source ML framework by Google","A Python library for web","A cloud service"], answer: "An open-source ML framework by Google" },
      { q: "What is a model in ML?", options: ["A fashion model","A mathematical representation trained on data","A database schema","A Python class"], answer: "A mathematical representation trained on data" },
      { q: "What is feature engineering?", options: ["Building features in software","Creating input variables for ML models","A type of neural network","None"], answer: "Creating input variables for ML models" },
      { q: "What is cross-validation?", options: ["Validating across countries","Technique to evaluate model performance","A type of training","None"], answer: "Technique to evaluate model performance" },
      { q: "What is a confusion matrix?", options: ["A confusing table","A table showing model prediction results","A type of neural network","None"], answer: "A table showing model prediction results" },
      { q: "What is gradient descent?", options: ["Going downhill","Optimization algorithm to minimize loss","A type of neural network","None"], answer: "Optimization algorithm to minimize loss" },
      { q: "What is transfer learning?", options: ["Transferring files","Using a pre-trained model for a new task","A type of deep learning","None"], answer: "Using a pre-trained model for a new task" },
    ]},
  ],
  photography: [
    { topic: "Photography Basics", videoId: "LxO-6rlihSg", questions: [
      { q: "What is aperture?", options: ["Camera speed","Opening that controls light entering the lens","A type of lens","Camera memory"], answer: "Opening that controls light entering the lens" },
      { q: "What does ISO control?", options: ["Camera color","Sensor sensitivity to light","Shutter speed","Lens zoom"], answer: "Sensor sensitivity to light" },
      { q: "What is shutter speed?", options: ["How fast you move the camera","How long the shutter stays open","Lens focal length","Camera resolution"], answer: "How long the shutter stays open" },
      { q: "What is the rule of thirds?", options: ["Using 3 cameras","Dividing frame into 9 equal parts for composition","A lighting technique","A type of lens"], answer: "Dividing frame into 9 equal parts for composition" },
      { q: "What is depth of field?", options: ["Camera depth","Range of distance that appears sharp in a photo","A lighting technique","Lens type"], answer: "Range of distance that appears sharp in a photo" },
      { q: "What is white balance?", options: ["Camera brightness","Adjusting colors to look natural under different lighting","A type of filter","Exposure setting"], answer: "Adjusting colors to look natural under different lighting" },
      { q: "What is RAW format?", options: ["Unedited JPEG","Uncompressed image file with all sensor data","A type of camera","A filter"], answer: "Uncompressed image file with all sensor data" },
      { q: "What is bokeh?", options: ["A camera brand","Aesthetic blur in out-of-focus areas","A type of lens","A lighting style"], answer: "Aesthetic blur in out-of-focus areas" },
      { q: "What is exposure?", options: ["Camera brand","Amount of light reaching the sensor","A type of lens","Camera resolution"], answer: "Amount of light reaching the sensor" },
      { q: "What is a prime lens?", options: ["A zoom lens","A lens with a fixed focal length","A wide-angle lens","A macro lens"], answer: "A lens with a fixed focal length" },
    ]},
    { topic: "Composition & Lighting", videoId: "iCBDfGMBGAQ", questions: [
      { q: "What is the golden hour?", options: ["A camera setting","The hour after sunrise or before sunset for soft light","A type of filter","A composition rule"], answer: "The hour after sunrise or before sunset for soft light" },
      { q: "What is leading lines?", options: ["Camera cables","Lines in a photo that guide the viewer's eye","A type of lens","A lighting technique"], answer: "Lines in a photo that guide the viewer's eye" },
      { q: "What is negative space?", options: ["Dark photos","Empty space around the subject","A type of filter","Underexposure"], answer: "Empty space around the subject" },
      { q: "What is fill light?", options: ["Main light source","Secondary light to reduce shadows","A type of flash","A reflector"], answer: "Secondary light to reduce shadows" },
      { q: "What is a reflector used for?", options: ["Taking selfies","Bouncing light to fill shadows","A type of lens","Camera protection"], answer: "Bouncing light to fill shadows" },
      { q: "What is framing in photography?", options: ["Putting photos in frames","Using elements to frame the subject","A camera setting","A type of lens"], answer: "Using elements to frame the subject" },
      { q: "What is symmetry in composition?", options: ["Asymmetric photos","Balanced, mirror-like arrangement in a photo","A type of filter","A lighting style"], answer: "Balanced, mirror-like arrangement in a photo" },
      { q: "What is a silhouette?", options: ["A colorful photo","Dark shape against a bright background","A type of lens","A camera setting"], answer: "Dark shape against a bright background" },
      { q: "What is backlighting?", options: ["Lighting from the front","Light source behind the subject","A type of flash","A reflector"], answer: "Light source behind the subject" },
      { q: "What is the exposure triangle?", options: ["A camera shape","The relationship between ISO, aperture, and shutter speed","A type of lens","A composition rule"], answer: "The relationship between ISO, aperture, and shutter speed" },
    ]},
  ],
  music: [
    { topic: "Music Theory Basics", videoId: "rgaTLrZGlk0", questions: [
      { q: "What is a musical note?", options: ["A written message","A symbol representing a sound's pitch and duration","A type of instrument","A chord"], answer: "A symbol representing a sound's pitch and duration" },
      { q: "What is a scale?", options: ["A weighing device","A sequence of notes in ascending or descending order","A type of chord","A rhythm pattern"], answer: "A sequence of notes in ascending or descending order" },
      { q: "What is a chord?", options: ["A single note","Three or more notes played together","A rhythm pattern","A type of scale"], answer: "Three or more notes played together" },
      { q: "What is tempo?", options: ["Volume of music","Speed of a piece of music","A type of scale","A chord progression"], answer: "Speed of a piece of music" },
      { q: "What is rhythm?", options: ["Pitch of notes","Pattern of sounds and silences in music","A type of scale","Volume"], answer: "Pattern of sounds and silences in music" },
      { q: "What is melody?", options: ["A chord","A sequence of single notes that form a tune","A rhythm pattern","A type of scale"], answer: "A sequence of single notes that form a tune" },
      { q: "What is harmony?", options: ["A single note","Combination of notes played simultaneously","A rhythm pattern","A type of scale"], answer: "Combination of notes played simultaneously" },
      { q: "What is a time signature?", options: ["A clock","Notation showing beats per measure","A type of note","A chord"], answer: "Notation showing beats per measure" },
      { q: "What is an octave?", options: ["8 chords","Interval spanning 8 notes","A type of scale","A rhythm pattern"], answer: "Interval spanning 8 notes" },
      { q: "What is dynamics in music?", options: ["Movement","Variation in loudness and softness","A type of scale","Tempo changes"], answer: "Variation in loudness and softness" },
    ]},
    { topic: "Learning an Instrument", videoId: "sLt-QQKQBWQ", questions: [
      { q: "What is the best way to start learning an instrument?", options: ["Jump to advanced pieces","Learn basic scales and chords first","Skip theory","Play by ear only"], answer: "Learn basic scales and chord first" },
      { q: "What is muscle memory in music?", options: ["Memorizing lyrics","Automatic physical movements from repeated practice","A type of scale","A chord"], answer: "Automatic physical movements from repeated practice" },
      { q: "What is sight-reading?", options: ["Reading music books","Playing music from sheet music without prior practice","A type of scale","A chord"], answer: "Playing music from sheet music without prior practice" },
      { q: "What is a metronome used for?", options: ["Tuning instruments","Keeping steady tempo while practicing","A type of scale","Recording music"], answer: "Keeping steady tempo while practicing" },
      { q: "What is ear training?", options: ["Cleaning ears","Developing ability to identify notes and chords by ear","A type of scale","A chord"], answer: "Developing ability to identify notes and chords by ear" },
      { q: "What is fingering in music?", options: ["Pointing","Which fingers to use for notes or chords","A type of scale","A chord"], answer: "Which fingers to use for notes or chords" },
      { q: "What is a chord progression?", options: ["A single chord","A sequence of chords in a piece of music","A type of scale","A rhythm pattern"], answer: "A sequence of chords in a piece of music" },
      { q: "What is improvisation?", options: ["Playing from sheet music","Creating music spontaneously","A type of scale","A chord"], answer: "Creating music spontaneously" },
      { q: "What is vibrato?", options: ["A type of instrument","Slight variation in pitch for expressive effect","A chord","A scale"], answer: "Slight variation in pitch for expressive effect" },
      { q: "What is a rest in music notation?", options: ["Taking a break","A symbol indicating silence for a specific duration","A type of note","A chord"], answer: "A symbol indicating silence for a specific duration" },
    ]},
  ],
  writing: [
    { topic: "Creative Writing Fundamentals", videoId: "iiCMzPHaOoE", questions: [
      { q: "What is a protagonist?", options: ["The villain","The main character of a story","A type of plot","A narrative device"], answer: "The main character of a story" },
      { q: "What is a plot?", options: ["A garden plot","The sequence of events in a story","A type of character","A writing style"], answer: "The sequence of events in a story" },
      { q: "What is the setting?", options: ["Camera settings","The time and place where a story occurs","A type of character","A narrative device"], answer: "The time and place where a story occurs" },
      { q: "What is conflict in a story?", options: ["An argument","The central struggle or problem in a narrative","A type of character","A writing style"], answer: "The central struggle or problem in a narrative" },
      { q: "What is a theme?", options: ["A party theme","The central message or idea of a story","A type of plot","A character trait"], answer: "The central message or idea of a story" },
      { q: "What is foreshadowing?", options: ["A shadow","Hints about future events in a story","A type of character","A writing style"], answer: "Hints about future events in a story" },
      { q: "What is dialogue?", options: ["A type of story","Conversation between characters","A narrative device","A plot element"], answer: "Conversation between characters" },
      { q: "What is a narrative arc?", options: ["A curved line","The structure of a story from beginning to end","A type of character","A writing style"], answer: "The structure of a story from beginning to end" },
      { q: "What is show don't tell?", options: ["A magic trick","Conveying emotions through actions rather than stating them","A type of plot","A character trait"], answer: "Conveying emotions through actions rather than stating them" },
      { q: "What is a cliffhanger?", options: ["Rock climbing","An ending that leaves the reader in suspense","A type of character","A writing style"], answer: "An ending that leaves the reader in suspense" },
    ]},
  ],
  fitness: [
    { topic: "Fitness Fundamentals", videoId: "vc1E5CfRfos", questions: [
      { q: "What is cardiovascular exercise?", options: ["Weightlifting","Exercise that raises heart rate","Stretching","Yoga"], answer: "Exercise that raises heart rate" },
      { q: "What is a rep in exercise?", options: ["A rest period","One complete movement of an exercise","A type of workout","A muscle group"], answer: "One complete movement of an exercise" },
      { q: "What is a set in exercise?", options: ["A group of reps","A type of equipment","A rest period","A muscle group"], answer: "A group of reps" },
      { q: "What is HIIT?", options: ["A type of yoga","High Intensity Interval Training","A diet plan","A stretching routine"], answer: "High Intensity Interval Training" },
      { q: "What is BMI?", options: ["Body Mass Index","Basic Muscle Intensity","Body Movement Index","None"], answer: "Body Mass Index" },
      { q: "What is the importance of warm-up?", options: ["It is not important","Prepares body for exercise and prevents injury","Cools down the body","Builds muscle"], answer: "Prepares body for exercise and prevents injury" },
      { q: "What is progressive overload?", options: ["Overworking muscles","Gradually increasing workout intensity over time","A type of diet","A rest technique"], answer: "Gradually increasing workout intensity over time" },
      { q: "What is protein important for?", options: ["Energy only","Muscle repair and growth","Hydration","Flexibility"], answer: "Muscle repair and growth" },
      { q: "What is flexibility training?", options: ["Cardio exercise","Exercises that improve range of motion","Weightlifting","HIIT"], answer: "Exercises that improve range of motion" },
      { q: "What is rest day important for?", options: ["Laziness","Muscle recovery and growth","Losing fitness","None"], answer: "Muscle recovery and growth" },
    ]},
  ],
  cooking: [
    { topic: "Cooking Basics", videoId: "ZJy1ajvMU1k", questions: [
      { q: "What is saut�ing?", options: ["Boiling food","Cooking food quickly in a small amount of oil","Baking food","Steaming food"], answer: "Cooking food quickly in a small amount of oil" },
      { q: "What is blanching?", options: ["Making food white","Briefly boiling then cooling in ice water","A type of baking","Frying food"], answer: "Briefly boiling then cooling in ice water" },
      { q: "What is mise en place?", options: ["A French dish","Having all ingredients prepared before cooking","A cooking technique","A type of sauce"], answer: "Having all ingredients prepared before cooking" },
      { q: "What is deglazing?", options: ["Removing glass","Adding liquid to a hot pan to loosen browned bits","A type of cutting","A baking technique"], answer: "Adding liquid to a hot pan to loosen browned bits" },
      { q: "What is al dente?", options: ["A type of sauce","Pasta cooked to be firm to the bite","Overcooked pasta","A cooking technique"], answer: "Pasta cooked to be firm to the bite" },
      { q: "What is a roux?", options: ["A French greeting","A mixture of fat and flour used to thicken sauces","A type of vegetable","A cooking technique"], answer: "A mixture of fat and flour used to thicken sauces" },
      { q: "What is marinating?", options: ["Adding salt","Soaking food in seasoned liquid before cooking","A type of cutting","A baking technique"], answer: "Soaking food in seasoned liquid before cooking" },
      { q: "What is the Maillard reaction?", options: ["A French chef","Browning reaction that creates flavor when food is cooked","A type of sauce","A baking technique"], answer: "Browning reaction that creates flavor when food is cooked" },
      { q: "What is julienning?", options: ["A French name","Cutting food into thin matchstick strips","A cooking technique","A type of sauce"], answer: "Cutting food into thin matchstick strips" },
      { q: "What is braising?", options: ["Frying food","Slow cooking in liquid after browning","A type of baking","Steaming food"], answer: "Slow cooking in liquid after browning" },
    ]},
  ],
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
  const score = Math.round((correct / totalQuestions) * 100);
  const newDayPlans = [...plan.dayPlans];
  const currentDay = newDayPlans[dayIndex];

  // Build revision days with same video but flagged as revision
  const quickRevision = {
    ...currentDay,
    topic: "📝 Quick Revision: " + currentDay.topic,
    isRevision: true,
    revisionNote: "You scored " + score + "%. Review the key concepts before moving on.",
  };
  const deepDive = {
    ...currentDay,
    topic: "🔍 Deep Dive: " + currentDay.topic,
    isRevision: true,
    revisionNote: "Focus on the questions you got wrong. Take your time.",
  };
  const practiceDay = {
    ...currentDay,
    topic: "💪 Practice: " + currentDay.topic,
    isRevision: true,
    revisionNote: "Extra practice to solidify your understanding.",
  };

  let daysAdded = 0;
  let message;

  if (score < 30) {
    // Very poor — add 3 extra days
    newDayPlans.splice(dayIndex + 1, 0, quickRevision, deepDive, practiceDay);
    daysAdded = 3;
    message = {
      type: "struggling",
      text: `You scored ${score}% (${correct}/${totalQuestions}). Don't worry — 3 extra revision days added to help you master this topic before moving on.`,
    };
  } else if (score < 50) {
    // Poor — add 2 extra days
    newDayPlans.splice(dayIndex + 1, 0, quickRevision, deepDive);
    daysAdded = 2;
    message = {
      type: "struggling",
      text: `You scored ${score}% (${correct}/${totalQuestions}). 2 revision days added to reinforce this topic.`,
    };
  } else if (score < 70) {
    // Below average — add 1 revision day
    newDayPlans.splice(dayIndex + 1, 0, quickRevision);
    daysAdded = 1;
    message = {
      type: "review",
      text: `You scored ${score}% (${correct}/${totalQuestions}). A revision day has been added to strengthen your understanding.`,
    };
  } else if (score < 80) {
    // Average — no extra days, gentle encouragement
    message = {
      type: "good",
      text: `Good work! You scored ${score}% (${correct}/${totalQuestions}). Keep it up and aim higher next time!`,
    };
  } else if (score < 90) {
    // Good
    message = {
      type: "good",
      text: `Great job! You scored ${score}% (${correct}/${totalQuestions}). You're on track — moving to the next topic.`,
    };
  } else {
    // Excellent — 90%+
    message = {
      type: "good",
      text: `Outstanding! You scored ${score}% (${correct}/${totalQuestions}). You've mastered this topic!`,
    };
  }

  return {
    updatedPlan: { ...plan, days: plan.days + daysAdded, dayPlans: newDayPlans },
    message,
  };
}
