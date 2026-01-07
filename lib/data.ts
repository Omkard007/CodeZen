// Mock data for CodeZen platform - 10 programming language courses

export interface Lesson {
  id: string;
  title: string;
  duration: number; // in minutes
  videoUrl: string;
  notes: string;
  codeExample: string;
  language: string;
}

export interface TestQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // index of correct option
  explanation: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  language: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  duration: number;
  thumbnail: string;
  instructor: string;
  url: string;
  notes: string; // MDX content
  test: TestQuestion[];
}

export const COURSES: Course[] = [
  {
    id: "python-beginner",
    url: "https://www.youtube.com/embed/rfscVS0vtbw",
    title: "Python Programming for Beginners",
    description:
      "Master Python from absolute basics to functional programming concepts with real-world logic building, problem solving, and practical coding experience.",
    language: "Python",
    difficulty: "beginner",
    duration: 12,
    thumbnail: "/placeholder.svg?key=ld672",
    instructor: "Dr. Sarah Chen",
    notes:
      "# Python Programming for Beginners\n\nPython is a beginner-friendly, powerful, and highly versatile programming language trusted by developers worldwide.\nIt is widely used in **Web Development**, **Data Science**, **Machine Learning**, **AI**, **Automation**, **Cybersecurity**, **Scripting**, and **Backend Development**.\n\n## Why Python is Loved\n- Simple and readable syntax\n- Huge community support\n- Rich standard library\n- Cross-platform and portable\n- Great for beginners and professionals\n\n## What You Will Learn\n- Installing Python & environment setup\n- Variables, data types, and operators\n- Input and output handling\n- Conditional statements and loops\n- Functions and reusable logic\n- Lists, Tuples, Dictionaries\n- Basics of Object-Oriented Programming\n- File handling basics\n\n## Real-World Uses\n- Instagram, YouTube, Netflix backend\n- Machine Learning & AI (TensorFlow, PyTorch)\n- Data Analysis (Pandas, NumPy)\n- Automation & Scripting\n- Web Development (Django, Flask)\n\n## Outcome\nBy the end of this course, you'll confidently write Python programs, solve logical problems, understand real-world applications, and be ready to explore **Web Development**, **Machine Learning**, or **Automation**.",
    test: [
      {
        id: "py-q1",
        question: "Python is classified as which type of programming language?",
        options: ["Compiled", "Interpreted", "Assembly", "Low Level"],
        correctAnswer: 1,
        explanation:
          "Python is an interpreted language which executes code line-by-line.",
      },
      {
        id: "py-q2",
        question: "Which function is used to display output in Python?",
        options: ["echo()", "display()", "print()", "out()"],
        correctAnswer: 2,
        explanation: "print() is the built-in output function.",
      },
      {
        id: "py-q3",
        question: "Which of the following represents a string in Python?",
        options: [
          "name = Alice",
          'name = "Alice"',
          "name = str()",
          "name = text",
        ],
        correctAnswer: 1,
        explanation:
          "Python strings must be enclosed in single or double quotes.",
      },
      {
        id: "py-q4",
        question: "Which symbol is used for comments in Python?",
        options: ["//", "#", "/* */", "--"],
        correctAnswer: 1,
        explanation: "Python uses # for single-line comments.",
      },
      {
        id: "py-q5",
        question: "Which keyword is used to define a function in Python?",
        options: ["func", "function", "define", "def"],
        correctAnswer: 3,
        explanation: "Functions in Python are declared using the def keyword.",
      },
    ],
  },
  {
    id: "javascript-beginner",
    url: "https://www.youtube.com/embed/W6NZfCO5SIk",
    title: "JavaScript Fundamentals",
    description:
      "Learn modern JavaScript from the ground up — build logic, understand core programming concepts, and create interactive web functionality.",
    language: "JavaScript",
    difficulty: "beginner",
    duration: 14,
    thumbnail: "/placeholder.svg?key=h1qs8",
    instructor: "Michael Rodriguez",
    notes:
      "# JavaScript Fundamentals\n\nJavaScript is the **programming language of the web**, responsible for making websites interactive, dynamic, and functional. It powers modern web applications, browsers, servers, mobile apps, and even games.\n\n## Why JavaScript is Important\n- Runs in every web browser\n- Used in Frontend, Backend, Mobile, and Desktop apps\n- Core of modern frameworks like React, Angular, Vue\n- Massive community and ecosystem\n\n## What You Will Learn\n- JavaScript syntax and execution\n- Variables: var, let, const\n- Data types and operators\n- Conditional statements and loops\n- Functions and Arrow Functions (ES6)\n- Arrays and Objects basics\n- Basic DOM manipulation\n- Introduction to asynchronous programming\n\n## Real-World Uses\n- Interactive web interfaces\n- Dynamic UI behavior\n- Backend development using Node.js\n- Single Page Applications (React, Next.js)\n- APIs and real-time applications\n\n## Outcome\nBy the end of this course, you will be confident in writing JavaScript code, understanding logic building, and building interactive web features.",
    test: [
      {
        id: "js-q1",
        question: "Which keyword declares a constant variable?",
        options: ["var", "let", "const", "static"],
        correctAnswer: 2,
        explanation: "const is used for values that cannot be reassigned.",
      },
      {
        id: "js-q2",
        question: "What is the result of typeof '42'?",
        options: ["number", "string", "text", "undefined"],
        correctAnswer: 1,
        explanation:
          "Anything inside quotes in JavaScript is treated as a string.",
      },
      {
        id: "js-q3",
        question:
          "Arrow functions were introduced in which version of JavaScript?",
        options: ["ES5", "ES6", "ES7", "ES8"],
        correctAnswer: 1,
        explanation: "Arrow functions were added in ES6 (2015).",
      },
      {
        id: "js-q4",
        question: "Which operator checks both value and type?",
        options: ["==", "===", "=", "!="],
        correctAnswer: 1,
        explanation: "=== checks both value and data type.",
      },
      {
        id: "js-q5",
        question: "console.log() is used to:",
        options: [
          "Display popup",
          "Print to console",
          "Save data",
          "Debug browser",
        ],
        correctAnswer: 1,
        explanation: "console.log() prints output to the browser console.",
      },
    ],
  },
  {
    id: "java-beginner",
    url: "https://www.youtube.com/embed/eIrMbAQSU34",
    title: "Java Programming Essentials",
    description:
      "Learn Java fundamentals including syntax, OOP concepts, logic building, and structured programming to build real-world applications.",
    language: "Java",
    difficulty: "beginner",
    duration: 16,
    thumbnail: "/placeholder.svg?key=r6sqa",
    instructor: "Prof. David Kim",
    notes:
      "# Java Programming Essentials\n\nJava is a powerful, object-oriented programming language widely used in enterprise systems, Android development, finance, and large-scale applications. It is known for its reliability, performance, and security.\n\n## Why Learn Java?\n- Platform Independent (Write Once, Run Anywhere)\n- Strongly Typed and Structured\n- Backbone of many enterprise systems\n- Used in Android apps, banking systems, backend APIs\n\n## What You Will Learn\n- Java syntax and program structure\n- Variables, data types, and operators\n- Control flow: if, loops, switches\n- Functions (methods) and parameters\n- Classes, Objects, and OOP basics\n- Introduction to error handling\n\n## Real-World Uses\n- Android application development\n- Enterprise applications\n- Banking and finance systems\n- Backend REST APIs\n\n## Outcome\nBy the end of this course, you’ll understand how Java programs execute, write structured code, and be prepared for Object-Oriented and advanced Java development.",
    test: [
      {
        id: "java-q1",
        question: "What does JVM stand for?",
        options: [
          "Java Visual Machine",
          "Java Virtual Machine",
          "Java Version Manager",
          "Java Variable Machine",
        ],
        correctAnswer: 1,
        explanation: "JVM executes Java bytecode on any platform.",
      },
      {
        id: "java-q2",
        question: "Which method acts as the entry point of Java programs?",
        options: [
          "main()",
          "public main()",
          "public static void main()",
          "start()",
        ],
        correctAnswer: 2,
        explanation:
          "Java programs start execution from public static void main().",
      },
      {
        id: "java-q3",
        question: "Which data type is used to store decimal values?",
        options: ["int", "double", "boolean", "char"],
        correctAnswer: 1,
        explanation: "double is used for floating-point numbers.",
      },
      {
        id: "java-q4",
        question: "Java is:",
        options: [
          "Compiled",
          "Interpreted",
          "Both compiled and interpreted",
          "None",
        ],
        correctAnswer: 2,
        explanation: "Java compiles to bytecode and JVM interprets it.",
      },
      {
        id: "java-q5",
        question: "String in Java is:",
        options: ["Primitive type", "Object", "Keyword", "Operator"],
        correctAnswer: 1,
        explanation: "String is a class object in Java.",
      },
    ],
  },
  {
    id: "cpp-beginner",
    url: "https://www.youtube.com/embed/vLnPwxZdW4Y",
    title: "C++ Programming Basics",
    description:
      "Learn C++ fundamentals, memory concepts, logic building, and the foundation required for performance-critical applications and system programming.",
    language: "C++",
    difficulty: "beginner",
    duration: 15,
    thumbnail: "/placeholder.svg?key=ox15q",
    instructor: "Dr. Emily Watson",
    notes:
      "# C++ Programming Basics\n\nC++ is a high-performance programming language widely used in game development, system programming, embedded systems, finance, and applications that require speed and efficiency.\n\n## Why Learn C++?\n- Extremely fast and powerful\n- Close to hardware yet high-level capability\n- Strong control over memory management\n- Used in game engines, operating systems, and performance systems\n\n## What You Will Learn\n- C++ syntax and structure\n- Input and output using iostream\n- Variables, data types, and operators\n- Conditional statements and loops\n- Functions and modular programming\n- Basic introduction to Object-Oriented Programming\n\n## Real-World Uses\n- Game engines (Unreal Engine)\n- Operating systems and drivers\n- High-speed trading systems\n- Embedded and real-time applications\n\n## Outcome\nBy the end of this course, you will understand how C++ works, write efficient programs, and build a strong foundation for advanced C++ development like OOP, STL, and memory handling.",
    test: [
      {
        id: "cpp-q1",
        question: "What is the purpose of #include <iostream>?",
        options: [
          "File handling",
          "Input/Output operations",
          "Math operations",
          "Memory management",
        ],
        correctAnswer: 1,
        explanation:
          "iostream is used for input and output operations using cin and cout.",
      },
      {
        id: "cpp-q2",
        question: "Which operator is used to output data in C++?",
        options: ["<<", ">>", "::", ":"],
        correctAnswer: 0,
        explanation: "The << operator sends output to cout.",
      },
      {
        id: "cpp-q3",
        question: "Which statement is used to end a program successfully?",
        options: ["stop;", "exit;", "return 0;", "end;"],
        correctAnswer: 2,
        explanation: "return 0 inside main indicates successful execution.",
      },
      {
        id: "cpp-q4",
        question: "C++ is primarily known for:",
        options: [
          "Web development",
          "Memory control and performance",
          "Designing UI",
          "Only scripting",
        ],
        correctAnswer: 1,
        explanation: "C++ is loved for speed and memory control.",
      },
      {
        id: "cpp-q5",
        question: "Which line must every C++ program contain?",
        options: ["int start()", "main()", "program()", "execute()"],
        correctAnswer: 1,
        explanation:
          "The main() function is the entry point of every C++ program.",
      },
    ],
  },
  {
    id: "c-beginner",
    url: "https://www.youtube.com/embed/KJgsSFOSQv0",
    title: "C Programming Foundation",
    description:
      "Learn the core foundations of the C programming language including syntax, memory concepts, logic building, and system-level programming basics.",
    language: "C",
    difficulty: "beginner",
    duration: 13,
    thumbnail: "/placeholder.svg?key=rypdo",
    instructor: "Prof. Robert Johnson",
    notes:
      "# C Programming Foundation\n\nC is one of the most powerful and foundational programming languages ever created. It is used in system programming, operating systems, embedded devices, game engines, and performance-critical applications.\n\n## Why Learn C?\n- Extremely fast and efficient\n- Provides low-level memory access\n- Foundation for C++, Java, and many modern languages\n- Used in operating systems, device drivers, and embedded systems\n\n## What You Will Learn\n- C program structure\n- Variables, data types, and operators\n- Input/Output using stdio\n- If-else, loops, and conditions\n- Functions and modular programming\n- Basic memory understanding\n\n## Real-World Uses\n- Operating systems like Windows and Linux components\n- Embedded systems and microcontrollers\n- Game engines and performance systems\n- Compiler and interpreter development\n\n## Outcome\nBy the end of this course, you will understand low-level programming concepts, write efficient C programs, and build a strong base for C++, system programming, and embedded development.",
    test: [
      {
        id: "c-q1",
        question: "Which function is used to print output in C?",
        options: ["print()", "echo()", "printf()", "cout"],
        correctAnswer: 2,
        explanation: "printf() is the standard C function for output.",
      },
      {
        id: "c-q2",
        question: "Every C program must have a:",
        options: ["start()", "main()", "program()", "run()"],
        correctAnswer: 1,
        explanation: "The main() function is the entry point of a C program.",
      },
      {
        id: "c-q3",
        question: "Which header file is required for input/output?",
        options: ["<conio.h>", "<stdio.h>", "<stdlib.h>", "<iostream>"],
        correctAnswer: 1,
        explanation: "stdio.h provides printf() and scanf().",
      },
      {
        id: "c-q4",
        question: "C is known for:",
        options: [
          "Web development",
          "Mobile development",
          "Low-level programming",
          "Game design only",
        ],
        correctAnswer: 2,
        explanation: "C provides direct access to memory and hardware.",
      },
      {
        id: "c-q5",
        question: "Which symbol is used to end statements in C?",
        options: [".", ":", ";", ","],
        correctAnswer: 2,
        explanation: "Each C statement ends with a semicolon.",
      },
    ],
  },
  {
    id: "go-beginner",
    url: "https://www.youtube.com/embed/YS4e4q9oBaU",
    title: "Go Programming Essentials",
    description:
      "Learn Go (Golang) fundamentals including syntax, concurrency basics, fast execution concepts, and real-world backend development foundations.",
    language: "Go",
    difficulty: "beginner",
    duration: 12,
    thumbnail: "/placeholder.svg?key=415ai",
    instructor: "Alex Thompson",
    notes:
      "# Go Programming Essentials\n\nGo (Golang) is a modern programming language created by Google, designed for simplicity, performance, and massive scalability. It is commonly used for backend services, cloud computing, DevOps tools, and distributed systems.\n\n## Why Learn Go?\n- Extremely fast compiled language\n- Simple and clean syntax\n- Built-in support for concurrency (goroutines)\n- Designed for cloud, microservices, and scalable systems\n\n## What You Will Learn\n- Go program structure\n- Variables, data types, and operators\n- Input and output basics\n- Conditional statements and loops\n- Functions and reusable logic\n- Introduction to Goroutines\n\n## Real-World Uses\n- Cloud applications\n- Backend APIs and microservices\n- Networking tools and servers\n- DevOps and automation tools (Docker, Kubernetes)\n\n## Outcome\nBy the end of this course, you will understand Go fundamentals, write efficient programs, and be ready to explore backend development, microservices, and cloud programming.",
    test: [
      {
        id: "go-q1",
        question: "Which keyword starts a Go program?",
        options: ["package main", "class main", "module main", "begin main"],
        correctAnswer: 0,
        explanation: "Every executable Go program must be inside package main.",
      },
      {
        id: "go-q2",
        question: "Which function is the entry point of Go programs?",
        options: ["start()", "main()", "execute()", "run()"],
        correctAnswer: 1,
        explanation: "Execution begins from the main() function.",
      },
      {
        id: "go-q3",
        question: "Go is primarily used for:",
        options: [
          "Game development",
          "Mobile UI",
          "Scalable backend and cloud systems",
          "Graphic design",
        ],
        correctAnswer: 2,
        explanation:
          "Go is designed for scalable backend, cloud computing, and concurrency.",
      },
      {
        id: "go-q4",
        question: "Which keyword is used to declare variables?",
        options: ["var", "let", "define", "int"],
        correctAnswer: 0,
        explanation: "var is commonly used to declare variables in Go.",
      },
      {
        id: "go-q5",
        question: "Which unique feature makes Go powerful for concurrency?",
        options: ["Threads", "Processes", "Goroutines", "Pipelines"],
        correctAnswer: 2,
        explanation: "Goroutines allow lightweight concurrent execution.",
      },
    ],
  },
  {
    id: "php-beginner",
    url: "https://www.youtube.com/embed/OK_JCtrrv-c",
    title: "PHP Web Development",
    description:
      "Learn PHP fundamentals for backend web development including server-side scripting, data handling, and dynamic website creation.",
    language: "PHP",
    difficulty: "beginner",
    duration: 13,
    thumbnail: "/placeholder.svg?key=hbmnz",
    instructor: "Marco Rossi",
    notes:
      "# PHP Web Development\n\nPHP is a powerful server-side scripting language used to build dynamic and interactive websites. It powers a large portion of the internet including websites like Facebook (early versions), WordPress, and many modern CMS platforms.\n\n## Why Learn PHP?\n- Widely used in backend web development\n- Easy to learn and beginner friendly\n- Excellent database support (MySQL, MariaDB, etc.)\n- Huge ecosystem including WordPress and Laravel\n\n## What You Will Learn\n- PHP syntax and execution\n- Variables and data handling\n- Echo and output handling\n- Conditional statements and loops\n- Basic server-side logic\n- Introduction to forms and data processing\n\n## Real-World Uses\n- Dynamic websites\n- Content Management Systems\n- Backend web applications\n- API development\n\n## Outcome\nBy the end of this course, you will understand how server-side programming works, build dynamic PHP programs, and prepare for frameworks like Laravel.",
    test: [
      {
        id: "php-q1",
        question: "How do you start a PHP script?",
        options: ["<php>", "<?php", "{php}", "<%php%>"],
        correctAnswer: 1,
        explanation: "A PHP script begins with <?php.",
      },
      {
        id: "php-q2",
        question: "PHP is mainly used for:",
        options: [
          "Mobile apps",
          "Frontend UI",
          "Backend web development",
          "Game design",
        ],
        correctAnswer: 2,
        explanation: "PHP runs on the server to build backend systems.",
      },
      {
        id: "php-q3",
        question: "Which function outputs text in PHP?",
        options: ["print()", "echo", "console.log()", "write()"],
        correctAnswer: 1,
        explanation: "echo is commonly used to output text in PHP.",
      },
      {
        id: "php-q4",
        question: "PHP works closely with which database?",
        options: ["MongoDB", "Firebase", "MySQL", "SQLite only"],
        correctAnswer: 2,
        explanation: "PHP is popularly paired with MySQL.",
      },
      {
        id: "php-q5",
        question: "PHP runs on:",
        options: ["Browser", "Client only", "Server", "Mobile device only"],
        correctAnswer: 2,
        explanation: "PHP is a server-side language.",
      },
    ],
  },
  {
    id: "swift-beginner",
    url: "https://www.youtube.com/embed/comQ1-x2a1Q",
    title: "Swift Programming for iOS",
    description:
      "Learn Swift programming from the basics and build a strong foundation for iOS, macOS, and Apple ecosystem development.",
    language: "Swift",
    difficulty: "beginner",
    duration: 14,
    thumbnail: "/placeholder.svg?key=lfl1r",
    instructor: "Emma Williams",
    notes:
      "# Swift Programming for iOS\n\nSwift is Apple's modern programming language used for building applications for **iOS**, **macOS**, **watchOS**, and **tvOS**. It is fast, safe, and designed with developer productivity in mind.\n\n## Why Learn Swift?\n- Official language for iPhone and Apple development\n- Clean, simple, and expressive syntax\n- Extremely fast and powerful\n- Backed by Apple with continuous improvements\n\n## What You Will Learn\n- Swift syntax and structure\n- Variables, constants, and data types\n- Functions and reusable logic\n- Conditions and loops\n- Optionals and safe programming basics\n- Basics of Swift development concepts\n\n## Real-World Uses\n- iOS mobile apps\n- macOS desktop software\n- Watch and TV apps\n- Swift-based backend development in some cases\n\n## Outcome\nBy the end of this course, you will understand the Swift language basics and be ready to explore iOS development using SwiftUI or UIKit.",
    test: [
      {
        id: "swift-q1",
        question: "Swift is mainly used for developing apps for:",
        options: ["Android", "Windows", "Apple platforms", "Linux"],
        correctAnswer: 2,
        explanation:
          "Swift is designed for Apple's ecosystem including iOS, macOS, watchOS, and tvOS.",
      },
      {
        id: "swift-q2",
        question: "Which keyword declares a constant in Swift?",
        options: ["const", "let", "var", "static"],
        correctAnswer: 1,
        explanation: "let is used to declare constants in Swift.",
      },
      {
        id: "swift-q3",
        question: "Swift is known for being:",
        options: ["Slow", "Unsafe", "Fast and safe", "Difficult to learn"],
        correctAnswer: 2,
        explanation: "Swift is designed to be fast and memory safe.",
      },
      {
        id: "swift-q4",
        question: "Which company created Swift?",
        options: ["Google", "Microsoft", "Apple", "Meta"],
        correctAnswer: 2,
        explanation: "Swift was developed and is maintained by Apple.",
      },
      {
        id: "swift-q5",
        question: "Swift supports:",
        options: [
          "Only procedural programming",
          "Only scripting",
          "Modern programming with OOP concepts",
          "No structured programming",
        ],
        correctAnswer: 2,
        explanation:
          "Swift supports object-oriented and modern structured programming.",
      },
    ],
  },
  {
    id: "rust-beginner",
    url: "https://www.youtube.com/embed/BpPEoZW5IiY",
    title: "Rust Programming Fundamentals",
    description:
      "Learn Rust programming fundamentals focusing on memory safety, performance, ownership principles, and modern systems programming concepts.",
    language: "Rust",
    difficulty: "beginner",
    duration: 15,
    thumbnail: "/placeholder.svg?key=0kef0",
    instructor: "Dr. Thomas Anderson",
    notes:
      "# Rust Programming Fundamentals\n\nRust is a modern systems programming language designed for **safety**, **speed**, and **concurrency** without relying on garbage collection. It is used in system programming, game engines, web assembly, embedded systems, and performance-critical applications.\n\n## Why Learn Rust?\n- Memory safety without garbage collector\n- Extremely fast like C/C++\n- Prevents null pointer and data race issues\n- Increasingly adopted in industry\n\n## What You Will Learn\n- Rust syntax and basics\n- Variables, data types, and mutability\n- Ownership and borrowing introduction\n- Control flow and loops\n- Functions and scopes\n- Basic error handling\n\n## Real-World Uses\n- System-level programming\n- Game engines\n- WebAssembly applications\n- Embedded systems\n- High-performance backend services\n\n## Outcome\nBy the end of this course, you will clearly understand Rust fundamentals, memory safety concepts, and be ready to explore advanced Rust programming like lifetimes, traits, and concurrency.",
    test: [
      {
        id: "rust-q1",
        question: "Rust is primarily designed for:",
        options: [
          "Web design",
          "Low-level safe programming",
          "Mobile UI design",
          "Graphics only",
        ],
        correctAnswer: 1,
        explanation:
          "Rust focuses on low-level system programming with memory safety.",
      },
      {
        id: "rust-q2",
        question: "Rust is known for its unique:",
        options: [
          "Garbage collector",
          "Ownership system",
          "Slow performance",
          "Lack of features",
        ],
        correctAnswer: 1,
        explanation: "Rust's ownership system ensures memory safety.",
      },
      {
        id: "rust-q3",
        question: "Rust performance is comparable to:",
        options: ["JavaScript", "Python", "C/C++", "PHP"],
        correctAnswer: 2,
        explanation: "Rust is designed to match C/C++ performance levels.",
      },
      {
        id: "rust-q4",
        question: "Rust is used in:",
        options: [
          "Only web design",
          "Only mobile apps",
          "System programming and performance apps",
          "Only database systems",
        ],
        correctAnswer: 2,
        explanation:
          "Rust excels in system, embedded, and performance-heavy applications.",
      },
      {
        id: "rust-q5",
        question: "Rust prevents:",
        options: [
          "HTML errors",
          "Design mistakes",
          "Memory safety issues like null pointer dereferencing",
          "Syntax highlighting issues",
        ],
        correctAnswer: 2,
        explanation: "Rust's ownership and borrowing prevent memory crashes.",
      },
    ],
  },
  {
    id: "ruby-beginner",
    url: "https://www.youtube.com/embed/t_ispmWmdjY",
    title: "Ruby Programming Basics",
    description:
      "Learn Ruby programming fundamentals including syntax, object-oriented concepts, and the foundation for modern web development using Ruby on Rails.",
    language: "Ruby",
    difficulty: "beginner",
    duration: 11,
    thumbnail: "/placeholder.svg?key=kvhij",
    instructor: "Jessica Martinez",
    notes:
      "# Ruby Programming Basics\n\nRuby is a dynamic, object-oriented programming language known for its elegant and human-friendly syntax. It emphasizes developer happiness and productivity, making coding feel natural and expressive.\n\n## Why Learn Ruby?\n- Clean and readable syntax\n- Highly productive development experience\n- Strong focus on simplicity\n- Backbone of the Ruby on Rails framework\n\n## What You Will Learn\n- Ruby syntax and structure\n- Variables and data handling\n- Conditions and loops\n- Functions (methods) and reuse\n- Basic Object-Oriented Programming\n\n## Real-World Uses\n- Web development using Ruby on Rails\n- Backend systems and APIs\n- Automation scripts\n- Prototyping applications quickly\n\n## Outcome\nBy the end of this course, you will comfortably understand Ruby fundamentals, write expressive programs, and be ready to explore web development with Ruby on Rails.",
    test: [
      {
        id: "ruby-q1",
        question: "Ruby is best known for:",
        options: [
          "Complex syntax",
          "Performance only",
          "Readable and elegant syntax",
          "Low-level programming",
        ],
        correctAnswer: 2,
        explanation: "Ruby focuses on simplicity and readable code.",
      },
      {
        id: "ruby-q2",
        question: "Ruby is primarily used for:",
        options: [
          "Game engines",
          "Mobile UI",
          "Web development",
          "Hardware programming",
        ],
        correctAnswer: 2,
        explanation: "Ruby is most popular for building web applications.",
      },
      {
        id: "ruby-q3",
        question: "Which framework is Ruby famous for?",
        options: ["Laravel", "Spring", "Ruby on Rails", "Django"],
        correctAnswer: 2,
        explanation: "Ruby on Rails is a powerful web framework built on Ruby.",
      },
      {
        id: "ruby-q4",
        question: "Ruby is:",
        options: [
          "Statically typed",
          "Low-level",
          "Dynamically typed",
          "Assembly based",
        ],
        correctAnswer: 2,
        explanation: "Ruby is a dynamically typed language.",
      },
      {
        id: "ruby-q5",
        question: "Ruby code is:",
        options: [
          "Hard to read",
          "Similar to machine code",
          "Human-friendly and expressive",
          "Strictly complex",
        ],
        correctAnswer: 2,
        explanation: "Ruby prioritizes developer happiness and readability.",
      },
    ],
  },
];

// Language configurations for the compiler
export const LANGUAGE_CONFIGS = {
  python: {
    id: "python",
    name: "Python",
    extension: ".py",
    boilerplate: '# Write your Python code here\nprint("Hello, World!")',
  },
  javascript: {
    id: "javascript",
    name: "JavaScript",
    extension: ".js",
    boilerplate:
      '// Write your JavaScript code here\nconsole.log("Hello, World!");',
  },
  java: {
    id: "java",
    name: "Java",
    extension: ".java",
    boilerplate:
      'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}',
  },
  cpp: {
    id: "cpp",
    name: "C++",
    extension: ".cpp",
    boilerplate:
      '#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}',
  },
  c: {
    id: "c",
    name: "C",
    extension: ".c",
    boilerplate:
      '#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}',
  },
  ruby: {
    id: "ruby",
    name: "Ruby",
    extension: ".rb",
    boilerplate: '# Write your Ruby code here\nputs "Hello, World!"',
  },
  go: {
    id: "go",
    name: "Go",
    extension: ".go",
    boilerplate:
      'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello, World!")\n}',
  },
  php: {
    id: "php",
    name: "PHP",
    extension: ".php",
    boilerplate:
      '<?php\n// Write your PHP code here\necho "Hello, World!\\n";\n?>',
  },
  swift: {
    id: "swift",
    name: "Swift",
    extension: ".swift",
    boilerplate:
      'import Foundation\n\n// Write your Swift code here\nprint("Hello, World!")',
  },
  rust: {
    id: "rust",
    name: "Rust",
    extension: ".rs",
    boilerplate:
      'fn main() {\n    // Write your Rust code here\n    println!("Hello, World!");\n}',
  },
};

// Mock user progress data
export interface UserProgress {
  courseId: string;
  completedLessons: string[];
  testScore?: number;
  certificateIssued: boolean;
  lastAccessed: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  enrolledCourses: string[];
  progress: UserProgress[];
  totalCertificates: number;
  streak: number;
}
