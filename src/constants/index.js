import project1 from "../assets/projects/project-1.jpeg";
import project2 from "../assets/projects/project-2.jpeg";
import project3 from "../assets/projects/project-3.jpeg";
import project4 from "../assets/projects/project-4.jpeg";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";
import project7 from "../assets/projects/project-7.png";
import project8 from "../assets/projects/project-8.png";
import project9 from "../assets/projects/project-9.png";
import project10 from "../assets/projects/project-10.png";
import project11 from "../assets/projects/project-11.png";
import project12 from "../assets/projects/project-12.png";
import project13 from "../assets/projects/project-13.png";
import project14 from "../assets/projects/project-14.png";
import project15 from "../assets/projects/project-15.png";
import project16 from "../assets/projects/project-16.png";
import project17 from "../assets/projects/project-17.png";
import project18 from "../assets/projects/project-18.png";
import project19 from "../assets/projects/project-19.png";
import project20 from "../assets/projects/project-20.png";
import project21 from "../assets/projects/project-21.png";
import project22 from "../assets/projects/project-22.png";
import project23 from "../assets/projects/project-23.png";
import project24 from "../assets/projects/project-24.png";
import project25 from "../assets/projects/project-25.png";
import project26 from "../assets/projects/project-26.png";
import project27 from "../assets/projects/project-27.png";

export const HERO_CONTENT = `I am a third year undergraduate from Bandung's Institute of Technology with a knack for crafting robust and scalable web applications. I'm currently a Computer Engineering and Science Laboratory Assistant at Bandung's Institute of Technology. Eager to apply skills in programming, problem-solving, and teamwork to contribute to team success..`;

export const ABOUT_TEXT = `I am a dedicated and versatile informatic undergraduate who is aiming to become full stack developer with a passion for creating efficient and user-friendly web applications. As an undergraduate who is aiming to be a full stack developer, I have worked with a variety of technologies like React, Tailwind CSS, PostgreSQL, PHP, etc. My journey in web development began with a deep curiosity for how things work, and it has evolved into a state where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Other than web developments, I've also worked with programming languages, such as C, C++, python, java, and javascript. Outside of coding, I enjoy staying active and exploring new technologies. To fill my boredom, I like to play games and watch shows`;

export const EXPERIENCES = [
  {
    year: "2026",
    role: "IF2211 ALgorithm Strategy Course Assistant",
    company: "ITB Computational Engineering and Science Laboratory",
    description: `Became an assistant of IF2211 course to create various major and minor project assignments and supervise quizzes & exams.`,
  },
  {
    year: "2025",
    role: "KM ITB Frontend Staff",
    company: "ITB",
    description: `Joined as part of ITB's KM ITB team to help develop various websites of need.`,
  },
  {
    year: "2025",
    role: "October Graduation Event Tech Staff",
    company: "ITB",
    description: `Joined as part of ITB's October Graduation Event team to help build its website.`,
  },
  {
    year: "2025",
    role: "Computational Thinking Practicum Assistant",
    company: "ITB",
    description: `Became an assistant of Computational Thinking 2025 practicum for international shift 4.3.c.`,
  },
  {
    year: "2025",
    role: "IF2120 Probabilty and Statistics Course Assistant",
    company: "ITB Computational Engineering and Science Laboratory",
    description: `Became an assistant of IF2120 course to create major project assignment and supervise quizzes & exams.`,
  },
  {
    year: "2025",
    role: "Technology Development Staff",
    company: "HMIF",
    description: `Joined as part of HMIF's Technology Development team to improve HMIF's super app.`,
  },
  {
    year: "2024",
    role: "Computational Thinking Practicum Assistant",
    company: "ITB",
    description: `Became an assistant of Computational Thinking 2024 practicum for shift 4.1.e.`,
  },
  {
    year: "2024",
    role: "Publicity and Documentation Staff",
    company: "HMIF",
    description: `Joined as part of HMIF's publicity and documentation team to documentate October Graduation Event 2024.`,
  },
  {
    year: "2024",
    role: "Publicity and Documentation Staff",
    company: "ITBJazz",
    description: `Joined as part of the publicity and documentation team to documentate Kroyokeanjes 24, which is the new ITBjazz member selection program.`,
  },
  {
    year: "2024",
    role: "Logistic Staff",
    company: "KMB",
    description: `Joined as part of the logistic team to assist the process of PPAB KMB, which is the new KMB member selection program.`,
  },
  {
    year: "2024",
    role: "Sponsorship Staff",
    company: "ITBJazz",
    description: `Joined as part of the fundraise team to find sponsors of Jazzmosphere, which is a gig orchestrated by Majazztic of ITBJazz 2023.`,
  },
  {
    year: "2024",
    role: "Publicity and Documenation Staff",
    company: "KMB",
    description: `Joined as part of the publicity and documentation team to publicate and documenate Viriya's Enviromental Action Program, which occured in Panti Asuhan Bina Iman, Rancaekek.`,
  },
  {
    year: "2024 - Present",
    role: "Member",
    company: "HMIF",
    description: `Joined as a member of HMIF. HMIF is an organization inside ITB which consists of undergradutes with the passion of technologies. In HMIF, there are lots of benefits and things you can do, especially expanding relations, lots of IT projects, and as a room to improve tech skills to prepare for the tech world beyond university.`,
  },
  {
    year: "2024 - Present",
    role: "Member",
    company: "ITBJazz",
    description: `Joined as a member of ITBJazz. ITBJazz is an organization inside ITB which primarily revolves around jazz music. In ITBJazz, there are lots of benefits and things you can do, especially expanding relations, jamming together, and learning jazz music`,
  },
  {
    year: "2024 - Present",
    role: "Member",
    company: "KMB",
    description: `Joined as a member of KMB. KMB is a Buddhism organization inside ITB. In KMB, there are lots of benefits and things you can do, especially expanding relations and leaning the religion and culture.`,
  },
];

export const PROJECTS = [
  {
    title: "Nimonspedia",
    image: project27,
    link: "https://github.com/TKurr/Nimonspedia",
    description:
      "Fullstack E-commerce utilizing Nginx and Redis on configuring interaction between PHP legacy code and React that implements websocket. While the legacy PHP code implements the usual e-commerce management like tokopedia, the react side implements live update features, like chat, live auction, push notification, and also admin's feature flag.",
    technologies: ["HTML", "CSS", "PHP", "JavaScript", "React", "Tailwind CSS", "NodeJS", "MySQL", "Websocket", "Docker"],
  },
  {
    title: "Raft Consensus",
    image: project26,
    link: "https://github.com/TKurr/Raft-Consensus",
    description:
      "A CLI program that simulates the Raft consensus algorithm through docker.",
    technologies: ["Typescript", "RPC", "Docker"],
  },
  {
    title: "TheoLearning",
    image: project25,
    link: "https://github.com/TKurr/TheoLearning",
    description:
      "A prgram that DTL, Logistic Regression, and SVM algorithms from scratch to classify university students final status",
    technologies: ["Python"],
  },
  {
    title: "Wumpus Enjoyer",
    image: project24,
    link: "https://github.com/TKurr/wumpus-enjoyer",
    description:
      "A program that implements traditional AI, such as Hill Climbings, Simmulated Annealing, and Genetic Algorithm, to automatically arrange a schedule.",
    technologies: ["Python"],
  },
  {
    title: "BBC - Big Black Compiler",
    image: project23,
    link: "https://github.com/TKurr/BBC-Tubes-IF2224",
    description:
      "A Indonesian-version of pascal compiler that is built until Semantic analysis.",
    technologies: ["Python"],
  },
  {
    title: "IRK Library",
    image: project22,
    link: "https://github.com/TKurr/IRK-Library",
    description:
      "A mobile application that provides a library for educational purpose, which are gaussian matrix calculator, cryptography algorithm like caesar cipher and RSA, and Huffman encoding & decoding with tree visualization and animation.",
    technologies: ["Kotlin"],
  },
  {
    title: "Judol Detector",
    image: project21,
    link: "https://github.com/TKurr/Judol-Detector",
    description:
      "A website that utilizes Youtube API to detect youtube comments that contain words that matches the inputed keyword list. Website also allows user to insert or delete multiple comments to the inputed youtube link.",
    technologies: ["Typescript"],
  },
  {
    title: "2D Shape Side Matcher",
    image: project20,
    link: "https://github.com/TKurr/2D-Shape-Side-Matching",
    description:
      "A website that calculates the matchness between the side of a single shape to the whole database of shapes with weighted levenshtein algorithm.",
    technologies: ["Typescript", "FastAPI"],
  },
  {
    title: "Quaternion Visualizer",
    image: project19,
    link: "https://github.com/TKurr/QuaternionVisualizer",
    description:
      "A custom engine quaternion visualizer that visualize quternion concept on 3D object (.obj).",
    technologies: ["Python"],
  },
  {
    title: "Color Connect Solver",
    image: project18,
    link: "https://github.com/TKurr/Makalah_Stima",
    description:
      "An program that solves Color Connect puzzles by utilizing backtracking algorithm and manhattan distance heuristic.",
    technologies: ["Java", "JavaFX"],
  },
  {
    title: "Camel Up Game",
    image: project17,
    link: "https://github.com/TheoK13523154/praktikum-if1221-logika-komputasional-sigma-boy", // tubes logkom
    description:
      "A group of 4 project of a recreation of the game 'Camel Up'.",
    technologies: ["Prolog"],
  },
  {
    title: "Dotkom's Chat App",
    image: project16,
    link: "https://github.com/TKurr/Dotkom-Chat", // tubes jarkom
    description:
      "A group of 5 project of an application that utilize TCP over UDP to allow users to chat with each other in a server, including sending and receiving messages. This application also provides port-forwarding to allow users to access the server from outside the local network (online, no need to connect to the same network).",
    technologies: ["Python", "TKinter"],
  },
  {
    title: "Logistic Management App",
    image: project15,
    link: "https://github.com/TKurr/TIT-Logistic-Management", // tubes oop 2
    description:
      "A group of 5 project of an application that manages logistics, including managing shipments, couriers, and parcels. The application provides different features for different roles (admin & courier) and allows plugin usage on statistics.",
    technologies: ["Java", "JavaFX", "Maven"],
  },
  {
    title: "RPG Turn Based 'TIT Game'",
    image: project14, 
    link: "https://github.com/TKurr/TIT-game", // tubes oop 1
    description:
      "A group of 5 project of a game that features a turn-based battle system, various characters, skill trees, various items, and shop system.",
    technologies: ["C++", "SFML", "MakeFile"],
  },
  {
    title: "CLI Email Management",
    image: project13,
    link: "https://github.com/TheoK13523154/if2110-tugas-besar-2024-if2110-03-c", 
    description:
      "A group of 5 project of a command line interface (CLI) application that allows users to manage their emails, including sending, receiving, and deleting emails. The application also provides notifications and statuses for each email, and can be used to send emails to multiple recipients at once. Additionally, users can encrypt and decrypt their emails.",
    technologies: ["C++", "MakeFile"],
  },
  {
    title: "Macrosoft",
    image: project12,
    link: "https://github.com/TKurr/Macrosoft", // tubes os
    description:
      "A group of 4 project of a simple operating system that feature shell commands, file system, and process management, etc. Additionally, this operating system can run bad apple",
    technologies: ["C", "Assembly", "QEMU"],
  },
  {
    title: "Little Alchemy 2 Recipe Finder",
    image: project11,
    link: "https://github.com/TKurr/Tubes2_dropwlpls",
    description:
      "A group of 3 project of a website that allows you to find recipes for Little Alchemy 2 by utilizing graph traversal algorithm, such as BFS, DFS, and Bidirectional BFS. Additionally, the algorithms use multithreading to get faster results.",
    technologies: ["NextJS", "Tailwind CSS", "Golang", "Docker", "Gin", "GoRoutine"],
  },
  {
    title: "Rush Hour Puzzle Solver",
    image: project10,
    link: "https://github.com/TKurr/Tucil3_13523126_13523154",
    description:
      "A group of 2 project of an application that solves Rush Hour puzzles using various algorithms such as A*, UCS, and GBFS. The application also provides a GUI to visualize the puzzle and the solution steps.",
    technologies: ["Java", "JavaFX", "Maven"],
  },
  {
    title: "Algorithm-based Image Compressor",
    image: project9,
    link: "https://github.com/TKurr/Tucil2_13523154_13523163",
    description:
      "A group of 2 project of a program that compresses images using divide and conquer algorithm. The application uses IQA methods to calculate the percentage needed as the base threshold for the algorithm",
    technologies: ["Java", "MakeFile"],
  },
  {
    title: "IQ Puzzler Pro Solver",
    image: project8,
    link: "https://github.com/TKurr/Tucil1_13523154",
    description:
      "An application that solves IQ Puzzler Pro puzzles that utilize backtracking algorithm and JavaFX as its GUI.",
    technologies: ["Java", "JavaFX", "Maven"],
  },
  {
    title: "Algorithm-based Image and Audio Similarity Searcher",
    image: project7,
    link: "https://github.com/TKurr/Algeo02-23147",
    description:
      "A group of 5 project of a website named 'Boboiboy Kuasa Tiga', that allows users to search for similar images and audio files based on a given query of image or audio. It uses various algorithms to compare the features of the images and audio files, and returns the most similar ones.",
    technologies: ["NextJS", "TailwindCSS", "Flask", "Python"],
  },
  {
    title: "RenovMemo",
    image: project6,
    link: "https://github.com/TKurr/IF2150-2024-K03-G06-RenovMemo",
    description:
      "A group of 5 project of a python-based application that organizes and manages projects, tasks, and notes for renovation projects. It allows users to create, update, and delete projects, tasks, and notes, as well as view them in a user-friendly interface.",
    technologies: ["Python", "Flet", "SQLite"],
  },
  {
    title: "Matrix Calculator",
    image: project5,
    link: "https://github.com/TKurr/Algeo01-23142",
    description:
      "A program that calculates various matrix problems through various solutions, including Gauss, Gauss Jordan, Cramer's, Bicubic Spline Interpolation, etc.",
    technologies: ["Java"],
  },
  {
    title: "HealthyU",
    image: project4,
    link: "https://github.com/19623248Git/14_HealthyU",
    description:
      "A mobile-based website that allows you to track hospitals based on each specialization and its distance from each ITB campus.",
    technologies: ["TailwindCSS", "Next.js", "Typescript", "MongoDB"],
  },
  {
    title: "Sea Salon",
    image: project3,
    link: "https://github.com/TKurr/Sea-Salon",
    description:
      "A salon homepage website which was used for COMPFEST academy selection",
    technologies: ["HTML", "CSS"],
  },
  {
    title: "Youtube Appearance Replica",
    image: project2,
    link: "https://github.com/TKurr/Youtube-Wannabe",
    description:
      "A small stepping stone project for me to learn frontend development with HTML and CSS.",
    technologies: ["HTML", "CSS"],
  },
  {
    title: "Agent P & O.W.C.A Team Mission",
    image: project1,
    link: "https://github.com/Labpro-21/if1210-2024-tubes-k07-f",
    description:
      "A turn-based game made with python where you can battle other monsters with your own monsters and items that you can manage.",
    technologies: ["Python"],
  },
];

export const CONTACT = {
  phoneNo: "+21 857 1733 8470 ",
  email: "theokurniady12@gmail.com",
};
