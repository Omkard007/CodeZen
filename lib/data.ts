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
    thumbnail:
      "https://campus.w3schools.com/cdn/shop/files/Python_d3889400-7dfd-4be0-b42e-be4b186555a3_1078x1078.png?v=1764577019",
    instructor: "Dr. Sarah Chen",
    notes: `# Python Programming for Beginners

## 🐍 Introduction to Python

Python is a **beginner-friendly**, **powerful**, and **highly versatile** programming language trusted by developers worldwide. Created by Guido van Rossum in 1991, Python has grown to become one of the most popular programming languages in the world.

### What Makes Python Special?

Python emphasizes code readability and allows developers to express concepts in fewer lines of code compared to other languages. Its philosophy is summarized in "The Zen of Python" - *Beautiful is better than ugly, Simple is better than complex*.

---

## 🌟 Why Python is Loved Worldwide

| Feature | Description |
|---------|-------------|
| **Simple Syntax** | Easy to read and write, resembles plain English |
| **Versatile** | Used in web, AI, data science, automation, and more |
| **Huge Community** | Millions of developers, extensive documentation |
| **Rich Libraries** | 200,000+ packages available via PyPI |
| **Cross-Platform** | Runs on Windows, Mac, Linux, and more |
| **Free & Open Source** | Completely free to use and modify |

### Programming Paradigms Supported
- ✅ **Procedural Programming**
- ✅ **Object-Oriented Programming (OOP)**
- ✅ **Functional Programming**

---

## 📚 What You Will Learn

### Module 1: Getting Started
- Installing Python and setting up your environment
- Understanding the Python interpreter
- Writing your first "Hello, World!" program
- Using IDLE and VS Code for development

### Module 2: Python Basics
- **Variables and Data Types**
  - Integers, Floats, Strings, Booleans
  - Type conversion and type checking
- **Operators**
  - Arithmetic: +, -, *, /, //, %, **
  - Comparison: ==, !=, >, <, >=, <=
  - Logical: and, or, not
  - Assignment operators

### Module 3: Input and Output
\`\`\`python
# Input from user
name = input("Enter your name: ")

# Output to console
print(f"Hello, {name}!")
\`\`\`

### Module 4: Control Flow
- **Conditional Statements**
  - if, elif, else structures
  - Nested conditions
  - Ternary operators
- **Loops**
  - for loops with range()
  - while loops
  - break and continue statements
  - Loop else clause

### Module 5: Data Structures
| Structure | Mutable | Ordered | Syntax |
|-----------|---------|---------|--------|
| **List** | ✅ Yes | ✅ Yes | \`[1, 2, 3]\` |
| **Tuple** | ❌ No | ✅ Yes | \`(1, 2, 3)\` |
| **Dictionary** | ✅ Yes | ✅ Yes (3.7+) | \`{'key': 'value'}\` |
| **Set** | ✅ Yes | ❌ No | \`{1, 2, 3}\` |

### Module 6: Functions
- Defining and calling functions
- Parameters and arguments
- Return values
- Default parameters
- *args and **kwargs
- Lambda functions
- Scope and namespaces

### Module 7: Introduction to OOP
- Classes and Objects
- Attributes and Methods
- Constructor (\`__init__\`)
- Basic inheritance

### Module 8: File Handling
- Reading files: \`open(), read(), readline(), readlines()\`
- Writing files: \`write(), writelines()\`
- Context managers: \`with\` statement
- Working with CSV and JSON files

---

## 🚀 Real-World Applications

### Web Development
- **Django** - Full-stack web framework (Instagram, Pinterest)
- **Flask** - Lightweight micro-framework
- **FastAPI** - Modern, fast API development

### Data Science & Analytics
- **Pandas** - Data manipulation and analysis
- **NumPy** - Numerical computing
- **Matplotlib/Seaborn** - Data visualization

### Machine Learning & AI
- **TensorFlow** - Deep learning framework (Google)
- **PyTorch** - Research and production ML (Facebook)
- **Scikit-learn** - Traditional machine learning

### Automation & Scripting
- Web scraping with BeautifulSoup and Selenium
- Task automation with scripts
- DevOps and system administration
- Testing automation with Pytest

### Other Domains
- **Game Development** - Pygame
- **Desktop Applications** - Tkinter, PyQt
- **Networking** - Socket programming
- **Cybersecurity** - Penetration testing tools

---

## 💼 Companies Using Python

| Company | Use Case |
|---------|----------|
| **Google** | Core infrastructure, YouTube backend |
| **Netflix** | Data analysis, recommendation engine |
| **Instagram** | Entire backend built with Django |
| **Spotify** | Data analysis and backend services |
| **Dropbox** | Desktop client and backend |
| **NASA** | Scientific computing and analysis |

---

## 📊 Python vs Other Languages

### Comparison Table

| Feature | Python | Java | JavaScript | C++ |
|---------|--------|------|------------|-----|
| Learning Curve | Easy | Medium | Medium | Hard |
| Speed | Medium | Fast | Fast | Very Fast |
| Use Case | General Purpose | Enterprise | Web | Systems |
| Syntax | Simple | Verbose | Moderate | Complex |
| Community | Huge | Large | Huge | Large |

---

## 🎯 Learning Outcomes

By the end of this course, you will be able to:

✅ **Write Clean Python Code** - Understand syntax, best practices, and PEP 8 style guide

✅ **Solve Real Problems** - Build logic to solve algorithmic challenges

✅ **Handle Data Efficiently** - Work with lists, dictionaries, files, and JSON

✅ **Create Functions** - Write reusable, modular code

✅ **Understand OOP Basics** - Classes, objects, and basic inheritance

✅ **Build Small Projects** - Calculator, to-do list, file manager, web scraper

✅ **Prepare for Advanced Topics** - Ready for web development, data science, or automation

---

## 📖 Recommended Practice Resources

- **LeetCode** - Algorithmic problems
- **HackerRank** - Python challenges
- **Project Euler** - Mathematical problems
- **Real Python** - Tutorials and articles
- **Python Official Docs** - python.org/docs

---

## 🏆 Career Opportunities

### Job Roles
- Python Developer
- Data Scientist
- Machine Learning Engineer
- Backend Developer
- DevOps Engineer
- Automation Engineer
- Full Stack Developer (with JavaScript)

### Average Salaries (Global)
- Entry Level: $60,000 - $80,000
- Mid Level: $80,000 - $120,000
- Senior Level: $120,000 - $180,000+

---

## 🎓 Next Steps After This Course

1. **Web Development** → Learn Django or Flask
2. **Data Science** → Master Pandas, NumPy, Matplotlib
3. **Machine Learning** → Explore TensorFlow or PyTorch
4. **Automation** → Build scripts for daily tasks
5. **API Development** → Learn FastAPI or Flask-RESTful

---

*Happy Coding! 🐍✨*`,
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
    thumbnail:
      "https://campus.w3schools.com/cdn/shop/files/JavaScript_2dab2810-0f6f-4f72-af24-81c0cbda5e12_1078x1078.png?v=1764577028",
    instructor: "Michael Rodriguez",
    notes: `# JavaScript Fundamentals

## ⚡ Introduction to JavaScript

JavaScript is the **language of the web**, powering interactive websites, web apps, mobile apps, servers, and even desktop software. Created in 1995 by Brendan Eich, JavaScript has evolved into one of the most powerful and widely used programming languages in the world.

It runs everywhere:
- In your **browser**
- On **servers** (Node.js)
- In **mobile apps** (React Native)
- In **desktop apps** (Electron)
- In **IoT devices**

JavaScript + HTML + CSS = Modern Web

---

## 🌟 Why JavaScript is So Popular?

| Feature | Description |
|--------|-------------|
| **Runs Everywhere** | Browser, Server, Mobile, Desktop |
| **Beginner Friendly** | Easy to start, fast to build |
| **Huge Ecosystem** | Thousands of libraries & frameworks |
| **High Demand** | One of the most in-demand skills globally |
| **Full-Stack Power** | Same language frontend + backend |
| **Community Support** | Massive developer community |

---

## 🧠 Programming Paradigms Supported

JavaScript supports multiple programming styles:

- ✅ **Procedural**
- ✅ **Object-Oriented**
- ✅ **Functional Programming**
- ✅ **Event-Driven Programming**

---

## 📚 What You Will Learn

### 🔰 Module 1: Getting Started
- What is JavaScript?
- Running JS in browser + Node.js
- console.log()
- Comments in JavaScript

---

## ✨ Module 2: Variables & Data Types

### Variables
- \`var\` → old, avoid
- \`let\` → changeable variable
- \`const\` → constant value

### Primitive Data Types
- Number
- String
- Boolean
- Null
- Undefined
- BigInt
- Symbol

\`\`\`js
let name = "CodeZen";
const year = 2026;
console.log("Hello", name);
\`\`\`

---

## ➗ Module 3: Operators
- Arithmetic → + - * / %
- Comparison → == === != > <
- Logical →
  - && (AND)
  - || (OR)
  - ! (NOT)
- Assignment operators

---

## 🧩 Module 4: Control Flow

### Conditions
- if
- else
- else if
- switch

### Example
\`\`\`js
let age = 18;

if(age >= 18){
    console.log("Adult");
} else {
    console.log("Minor");
}
\`\`\`

---

## 🔁 Module 5: Loops

- for
- while
- do..while
- for..of
- for..in

\`\`\`js
for(let i=1; i<=5; i++){
  console.log(i);
}
\`\`\`

---

## 📦 Module 6: Arrays & Objects

### Arrays
- push()
- pop()
- map()
- filter()

\`\`\`js
let numbers = [1,2,3];
numbers.push(4);
console.log(numbers);
\`\`\`

### Objects
\`\`\`js
const student = {
  name: "Alex",
  age: 20
};
console.log(student.name);
\`\`\`

---

## 🧠 Module 7: Functions

- Normal functions
- Arrow functions
- Parameters
- Return values

\`\`\`js
function greet(name){
  return "Hello " + name;
}
console.log(greet("JavaScript"));
\`\`\`

Arrow:
\`\`\`js
const add = (a,b) => a + b;
console.log(add(5,3));
\`\`\`

---

## 🌐 Module 8: DOM Basics (Preview)

- Selecting elements
- Changing text
- Handling events

\`\`\`js
document.getElementById("title").innerText = "Welcome!";
\`\`\`

---

## 🚀 Real-World Applications

### 💻 Web Development
- React
- Vue
- Angular

### 🧠 Backend
- Node.js
- Express

### 📱 Mobile Apps
- React Native

### 🕹 Games
- Phaser.js

---

## 💼 Companies Using JavaScript

| Company | Use Case |
|--------|---------|
| Google | Web & Apps |
| Meta | React & Web Apps |
| Netflix | UI + Backend |
| PayPal | Node.js |
| Uber | Real-time apps |

---

## 📊 JavaScript vs Other Languages

| Feature | JS | Python | Java |
|--------|----|--------|------|
| Web Power | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| Speed | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| Learning Curve | Easy | Easy | Medium |
| Ecosystem | Huge | Huge | Large |

---

## 🎯 Learning Outcomes

By the end of this course:

✅ Build interactive programs  
✅ Understand real JavaScript logic  
✅ Work confidently with variables, functions, loops  
✅ Prepare for frameworks (React, Node.js)

---

## 📖 Practice Resources

- HackerRank — JavaScript challenges
- LeetCode — Problem solving
- FreeCodeCamp — Projects & lessons
- MDN Docs — Official documentation

---

## 🏆 Career Paths

- Frontend Developer
- Full Stack Developer
- Backend Developer
- App Developer
- Game Developer

---

## 🎓 Next Steps After This Course

1️⃣ Learn HTML + CSS Deeply  
2️⃣ Master DOM Manipulation  
3️⃣ Learn React or Vue  
4️⃣ Build Projects  
5️⃣ Learn Node.js for backend

---

*Happy Coding ⚡🚀*
`,

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
    thumbnail:
      "https://campus.w3schools.com/cdn/shop/files/Java_2e10524c-62ee-4383-972b-d28ae2ba9c2c_1078x1078.png?v=1764576940",
    instructor: "Prof. David Kim",
    notes: `# Java Programming Essentials

## ☕ Introduction to Java

Java is one of the most powerful, secure, and widely used programming languages in the world. Developed by Sun Microsystems (now Oracle), Java follows the philosophy **Write Once, Run Anywhere (WORA)** thanks to the Java Virtual Machine (JVM).

Java powers:

- Android Apps
- Banking & Financial Systems
- Enterprise Applications
- Backend Services
- Gaming Engines
- Big Data Platforms

---

## 🌟 Why Java is Trusted Worldwide

| Feature | Description |
|--------|-------------|
| **Platform Independent** | Runs anywhere with JVM |
| **Highly Secure** | Built-in security & sandboxing |
| **Object Oriented** | Clean structured programming |
| **High Performance** | Faster than Python & JS |
| **Enterprise Standard** | Used in banks, corporates |
| **Huge Community** | Millions of developers |

---

## 🧠 Programming Paradigms Supported
- ✅ Object-Oriented Programming
- ✅ Procedural
- ✅ Modular
- ⚙ Functional features (Lambdas)

---

## 📚 What You Will Learn

---

## 🔰 Module 1: Getting Started
- Install JDK
- Set PATH
- Compile & Run Java Programs
- Understanding JVM, JDK, JRE

### Your First Java Program
\`\`\`java
public class Main {
  public static void main(String[] args) {
    System.out.println("Hello Java!");
  }
}
\`\`\`

---

## 🏗 Module 2: Syntax & Structure
- class & main method
- Statements & Semicolons
- Packages & Imports

---

## ✨ Module 3: Variables & Data Types

### Primitive Data Types
- byte
- short
- int
- long
- float
- double
- boolean
- char

### Non-Primitive
- String
- Arrays
- Objects

\`\`\`java
int age = 21;
String name = "CodeZen";
System.out.println(name + " is " + age);
\`\`\`

---

## ➗ Module 4: Operators
- Arithmetic (+ - * / %)
- Comparison (== != > < >= <=)
- Logical (&& || !)
- Assignment (= += -=)

---

## 🧩 Module 5: Control Flow
- if / else
- switch
- ternary operator

### Example
\`\`\`java
int marks = 85;

if(marks >= 90){
  System.out.println("A Grade");
} else {
  System.out.println("Good Score");
}
\`\`\`

---

## 🔁 Module 6: Loops
- for loop
- while loop
- do while loop
- enhanced for loop

\`\`\`java
for(int i=1;i<=5;i++){
  System.out.println(i);
}
\`\`\`

---

## 📦 Module 7: Arrays
\`\`\`java
int nums[] = {1,2,3,4};
System.out.println(nums[0]);
\`\`\`

---

## 🧠 Module 8: Functions (Methods)

- Method declaration
- Parameters
- Return values
- Method Overloading

\`\`\`java
static int add(int a,int b){
 return a+b;
}
\`\`\`

---

## 🏛 Module 9: Object-Oriented Programming

### Concepts
- Classes
- Objects
- Constructor
- this keyword

\`\`\`java
class Student {
 String name;
 
 Student(String n){
  name = n;
 }
}
\`\`\`

---

## 👑 Advanced OOP (Preview)
- Inheritance
- Polymorphism
- Abstraction
- Encapsulation
- Interfaces

---

## 📂 File Handling (Preview)
- Reading files
- Writing files

---

## 🚀 Real-World Applications

### Android Development
- Entire Android ecosystem built on Java

### Enterprise Solutions
- Banking systems
- Billing systems
- Transaction processing

### Backend
- Spring Boot
- Microservices

### Big Data
- Hadoop
- Kafka

---

## 💼 Companies Using Java

| Company | Usage |
|--------|--------|
| Google | Android & backend |
| Netflix | Backend |
| Amazon | Services & APIs |
| HSBC | Banking |
| LinkedIn | Backend |
| NASA | Software systems |

---

## 📊 Java vs Other Languages

| Feature | Java | Python | JS |
|--------|------|--------|----|
| Speed | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| Security | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐ |
| Enterprise Use | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| Learning Curve | Medium | Easy | Easy |

---

## 🎯 Learning Outcomes

By the end:

✅ Strong programming foundation  
✅ Write Java programs confidently  
✅ Understand OOP deeply  
✅ Ready for Android, Spring Boot & Backend  

---

## 📖 Practice Resources
- HackerRank Java
- LeetCode
- CodeChef
- Oracle Java Docs
- GeeksForGeeks

---

## 🏆 Career Opportunities
- Java Developer
- Backend Developer
- Android Developer
- Software Engineer
- Enterprise Architect

---

## 🎓 Next Steps
1️⃣ Learn OOP deeply  
2️⃣ Learn Collections  
3️⃣ Learn Exception Handling  
4️⃣ Learn JDBC & Databases  
5️⃣ Move to Spring Boot / Android  

---

*Code Smart ☕🔥*
`,

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
    thumbnail:
      "https://campus.w3schools.com/cdn/shop/files/C_90973bf1-bebb-48d4-8818-603e177f5b0a_1078x1078.png?v=1764576919",
    instructor: "Dr. Emily Watson",
    notes: `# C++ Programming Basics

## 💻 Introduction to C++

C++ is a **high-performance, powerful, and feature-rich programming language** widely used in systems where **speed, control, and efficiency** are critical. Created by Bjarne Stroustrup, C++ extends the C programming language by adding **Object-Oriented Programming**, better abstraction, and modern features.

C++ is commonly used in:

- Game Development
- Operating Systems
- Desktop Applications
- Embedded Systems
- High-Frequency Trading
- Compilers & Browsers

---

## 🌟 Why Learn C++?

| Feature | Description |
|--------|-------------|
| ⚡ **Blazing Fast** | Close to hardware, near C speed |
| 🧠 **Powerful OOP** | Supports classes, inheritance & polymorphism |
| 🔧 **Fine Memory Control** | Pointers, manual memory management |
| 🏗 **Foundation Language** | Basis of Unreal Engine, Chrome, MySQL |
| 🌍 **Industry Standard** | Used by top tech companies |

---

## 🧠 Programming Paradigms Supported
- Procedural Programming
- Object-Oriented Programming
- Generic Programming
- Functional Programming (with modern C++)

---

## 📚 What You Will Learn

---

## 🔰 Module 1: Getting Started

- C++ Program Structure
- Compiler (g++, clang)
- Input / Output

### Hello World Program
\`\`\`cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello C++!";
    return 0;
}
\`\`\`

---

## ✨ Module 2: Variables & Data Types

### Basic Data Types
- int
- float
- double
- char
- bool
- string (from \<string\>)

### Example
\`\`\`cpp
int age = 20;
double price = 99.5;
string name = "CodeZen";

cout << name << " is " << age;
\`\`\`

---

## ➗ Module 3: Operators

- Arithmetic: + - * / %
- Comparison: == != > < >= <=
- Logical: && || !
- Assignment: = += -= *=

---

## 🧩 Module 4: Control Flow

### If / Else
\`\`\`cpp
int marks = 75;

if(marks >= 90)
    cout << "Excellent";
else if(marks >= 60)
    cout << "Good";
else
    cout << "Work Hard";
\`\`\`

### Switch
\`\`\`cpp
int day = 3;

switch(day){
 case 1: cout << "Mon"; break;
 case 2: cout << "Tue"; break;
 default: cout << "Other";
}
\`\`\`

---

## 🔁 Module 5: Loops

### For Loop
\`\`\`cpp
for(int i = 1; i <= 5; i++) {
  cout << i << endl;
}
\`\`\`

### While Loop
\`\`\`cpp
int x = 1;
while(x <= 5){
  cout << x << endl;
  x++;
}
\`\`\`

---

## 📦 Module 6: Arrays

\`\`\`cpp
int arr[3] = {10, 20, 30};
cout << arr[0];
\`\`\`

---

## 🧠 Module 7: Functions

\`\`\`cpp
int add(int a, int b){
  return a + b;
}
\`\`\`

---

## 🏛 Module 8: Object-Oriented Programming

C++ is famous for OOP.

### Concepts
- Classes
- Objects
- Constructors
- Inheritance
- Polymorphism
- Encapsulation

### Example
\`\`\`cpp
class Student {
public:
 string name;
 int age;

 void intro(){
  cout << name << " is " << age;
 }
};
\`\`\`

---

## 🧠 Module 9: Pointers & Memory (Preview)

- Address of (&)
- Dereferencing (*)
- Dynamic Memory

\`\`\`cpp
int a = 10;
int *p = &a;
cout << *p;
\`\`\`

---

## 🚀 Real-World Applications

### 🎮 Game Development
- Unreal Engine
- AAA Games

### 🧠 System Programming
- OS Kernel Components
- Drivers

### 🌐 Browsers
- Chrome Engine
- Firefox Components

### 💰 Finance
- High-frequency trading systems

---

## 💼 Companies Using C++

| Company | Usage |
|--------|--------|
| Microsoft | Windows, Office |
| Google | Chrome, Search Systems |
| Unreal Engine | Game Dev |
| Adobe | Photoshop, Premiere |
| Apple | OS Components |
| Meta | Performance Systems |

---

## 📊 C++ vs Other Languages

| Feature | C++ | Java | Python |
|--------|-----|------|--------|
| Speed | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |
| Memory Control | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐ |
| Learning Curve | Hard | Medium | Easy |
| System Level | Strong | Medium | Weak |

---

## 🎯 Learning Outcomes

By the end of this course:

✅ Write C++ programs confidently  
✅ Understand memory and performance  
✅ Work with OOP effectively  
✅ Build strong problem-solving ability  
✅ Prepare for development & competitive programming  

---

## 📖 Practice Resources

- HackerRank C++
- Codeforces
- LeetCode
- GeeksForGeeks
- CPP Reference Docs

---

## 🏆 Career Paths

- Game Developer
- System Programmer
- Software Engineer
- Embedded Developer
- Performance Engineer

---

## 🎓 Next Steps

1️⃣ Learn STL  
2️⃣ Learn Advanced OOP  
3️⃣ Learn File Handling  
4️⃣ Move to Competitive Programming or Game Dev  

---

*Code Fast, Code Powerful 💻⚡*
`,
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
    thumbnail:
      "https://campus.w3schools.com/cdn/shop/files/C_46bc7d0d-86d0-4991-a1c9-fc0dd025c006_1078x1078.png?v=1764575781",
    instructor: "Prof. Robert Johnson",
    notes: `# C Programming Foundation

## 🔧 Introduction to C Programming

C is a **powerful, low-level programming language** that forms the foundation of almost every modern programming language. Created by Dennis Ritchie in 1972, C is used to build:

- Operating Systems
- Embedded Systems
- Compilers
- Database Engines
- Drivers & Firmware
- High-Performance Applications

C gives you **complete control over memory and hardware**, making it essential for serious programmers.

---

## 🌟 Why Learn C?

| Feature | Description |
|--------|-------------|
| ⚙ **Low-Level Control** | Direct interaction with memory & hardware |
| ⚡ **Super Fast** | Used where performance matters |
| 🧠 **Foundation Language** | Base of C++, Java, Python, Go, Rust |
| 🏗 **System-Level Power** | Build OS, Kernels, Drivers |
| 🎯 **Deep Understanding** | Learn how computers actually work |

Learning C makes you a **stronger, smarter, more logical programmer**.

---

## 🧠 Programming Paradigms Supported
- Procedural Programming
- Structured Programming
- Modular Programming

---

## 📚 What You Will Learn

---

## 🔰 Module 1: Getting Started

- Installing GCC / MinGW
- Understanding Compiler
- Writing & running programs

### Hello World
\`\`\`c
#include <stdio.h>

int main() {
    printf("Hello C!\\n");
    return 0;
}
\`\`\`

---

## ✨ Module 2: Syntax & Structure
- Header Files
- Main Function
- Statements & Semicolons
- Comments

---

## 📦 Module 3: Variables & Data Types

### Basic Types
- int
- float
- double
- char

\`\`\`c
int age = 20;
float price = 99.5;
char grade = 'A';

printf("%d %f %c", age, price, grade);
\`\`\`

---

## ➗ Module 4: Operators

- Arithmetic: + - * / %
- Comparison: == != > < >= <=
- Logical: && || !
- Assignment: = += -=

---

## 🧩 Module 5: Control Flow

### If / Else
\`\`\`c
int marks = 80;

if(marks >= 90)
  printf("Excellent");
else
  printf("Good");
\`\`\`

### Switch
\`\`\`c
int day = 2;

switch(day){
 case 1: printf("Mon"); break;
 case 2: printf("Tue"); break;
 default: printf("Other");
}
\`\`\`

---

## 🔁 Module 6: Loops

### For Loop
\`\`\`c
for(int i=1; i<=5; i++){
  printf("%d\\n", i);
}
\`\`\`

### While Loop
\`\`\`c
int x = 1;
while(x <= 5){
  printf("%d\\n", x);
  x++;
}
\`\`\`

---

## 📂 Module 7: Arrays

\`\`\`c
int arr[3] = {10, 20, 30};
printf("%d", arr[0]);
\`\`\`

---

## 🧠 Module 8: Functions

- Function Declaration
- Parameters
- Return Value

\`\`\`c
int add(int a, int b){
  return a + b;
}
\`\`\`

---

## 🧬 Module 9: Pointers (Core Power of C)

- Memory Address (&)
- Pointer Variable (*)
- Dereferencing

\`\`\`c
int a = 10;
int *p = &a;
printf("%d", *p);
\`\`\`

---

## 📁 Module 10: File Handling (Preview)

- Reading files
- Writing files
- fopen, fclose, fprintf, fscanf

---

## 🚀 Real-World Applications

### 🖥 Operating Systems
- Windows
- Linux
- MacOS

### 📦 Compilers
- GCC
- Clang

### 🔌 Embedded Systems
- Microcontrollers
- Firmware
- IoT

### 💾 Databases
- MySQL core built in C

---

## 💼 Companies Using C

| Company | Usage |
|--------|--------|
| Microsoft | Windows Kernel |
| Apple | macOS components |
| Google | Performance systems |
| NASA | Hardware programming |
| Intel | Firmware & drivers |

---

## 📊 C vs Other Languages

| Feature | C | C++ | Python |
|--------|---|-----|--------|
| Speed | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ |
| Memory Control | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐ |
| Learning Curve | Hard | Hard | Easy |
| System Level | Strongest | Strong | Weak |

---

## 🎯 Learning Outcomes

By the end of this course:

✅ Write efficient C programs  
✅ Understand how memory works  
✅ Master logic & structured programming  
✅ Build strong problem-solving foundation  
✅ Be ready for C++ / Embedded / Systems Programming  

---

## 📖 Practice Resources

- HackerRank C
- CodeChef
- LeetCode
- GeeksForGeeks
- C Programming Docs

---

## 🏆 Career Opportunities

- Embedded Developer
- Firmware Engineer
- System Programmer
- Kernel & OS Developer
- Performance Engineer

---

## 🎓 Next Steps

1️⃣ Learn Pointers Deeply  
2️⃣ Learn Dynamic Memory (malloc, free)  
3️⃣ Learn Structures  
4️⃣ Learn File Handling  
5️⃣ Move to Embedded or C++  

---

*Think Low Level. Code Like a Pro 🔧⚙*
`,
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
    thumbnail:
      "https://campus.w3schools.com/cdn/shop/files/GO_Exam_1078x1078.png?v=1764575680",
    instructor: "Alex Thompson",
    notes: `# Go Programming Essentials

## 🚀 Introduction to Go (Golang)

Go (also called Golang) is a **modern, powerful, and highly efficient programming language** created by Google. It was designed to solve real-world problems related to **performance, scalability, and simplicity**, especially in **cloud computing and backend systems**.

With Go, you get:
- Speed like C++
- Simplicity like Python
- Power like Java
- Built-in concurrency
- Minimal complexity

Go is widely used in backend services, cloud computing, networking tools, DevOps, microservices, and distributed systems.

---

## 🌟 Why Learn Go?

| Feature | Description |
|--------|-------------|
| ⚡ **Blazing Fast** | Compiled language with high performance |
| 🧠 **Simple & Clean Syntax** | Easy to learn and read |
| 🔄 **Built-in Concurrency** | Goroutines & channels |
| ☁ **Cloud Native** | Perfect for microservices |
| 🏗 **Scalable** | Handles millions of users |
| 🛠 **Great Tooling** | Formatter, testing, profiling included |

---

## 🧠 Go Philosophy

Go follows three powerful principles:

- **Keep it simple**
- **Fast development**
- **Highly reliable programs**

Unlike many languages, Go focuses on **clarity over complexity**.

---

## 🧬 Programming Paradigms Supported

- Procedural Programming
- Concurrent Programming
- Modular Programming

(Go intentionally avoids full OOP complexity — but supports struct-based design.)

---

## 📚 What You Will Learn

---

## 🔰 Module 1: Getting Started

- Installing Go
- GOPATH & Workspace
- Running Programs

### Hello World
\`\`\`go
package main
import "fmt"

func main() {
  fmt.Println("Hello Go!")
}
\`\`\`

---

## ✨ Module 2: Variables & Data Types

### Declaring Variables
\`\`\`go
var name string = "CodeZen"
age := 21
\`\`\`

### Data Types
- int
- float32 / float64
- string
- bool

---

## ➗ Module 3: Operators
- Arithmetic
- Comparison
- Logical
- Assignment

---

## 🧩 Module 4: Control Flow

### If / Else
\`\`\`go
age := 18

if age >= 18 {
  fmt.Println("Adult")
} else {
  fmt.Println("Minor")
}
\`\`\`

### Switch
\`\`\`go
switch day := 2; day {
 case 1: fmt.Println("Mon")
 case 2: fmt.Println("Tue")
 default: fmt.Println("Other")
}
\`\`\`

---

## 🔁 Module 5: Loops
Go only has one loop → **for**

### Example
\`\`\`go
for i := 1; i <= 5; i++ {
  fmt.Println(i)
}
\`\`\`

---

## 📦 Module 6: Arrays, Slices & Maps

### Arrays
\`\`\`go
var arr = [3]int{1,2,3}
\`\`\`

### Slices (Dynamic Arrays)
\`\`\`go
nums := []int{10,20,30}
\`\`\`

### Maps (Key-Value)
\`\`\`go
student := map[string]int{
 "age": 20,
}
fmt.Println(student["age"])
\`\`\`

---

## 🧠 Module 7: Functions

\`\`\`go
func add(a int, b int) int {
  return a + b
}
\`\`\`

Support:
- return values
- multiple return values
- named returns

---

## 🏛 Module 8: Structs (Go’s OOP Style)

Go doesn’t use classes — it uses **structs + methods**

\`\`\`go
type Student struct {
 name string
 age int
}
\`\`\`

---

## ⚙ Module 9: Concurrency (Go’s Superpower)

Go provides **goroutines** → lightweight threads managed by Go runtime.

\`\`\`go
go myFunction()
\`\`\`

Used widely in:
- real-time systems
- chat apps
- streaming
- scalable servers

---

## 🚀 Real-World Applications

### ☁ Cloud & Backend
- Microservices
- APIs
- Distributed systems

### 🔧 DevOps & Tools
- Docker → built in Go
- Kubernetes → built in Go
- Terraform → built in Go
- Prometheus

### 🧠 Networking & Performance Apps
- Real-time services
- Scalable backends

---

## 💼 Companies Using Go

| Company | Usage |
|--------|--------|
| Google | Backend & Cloud |
| Netflix | High-performance systems |
| Uber | Real-time services |
| Twitch | Streaming backend |
| Dropbox | Infrastructure |
| Kubernetes | Written in Go |

---

## 📊 Go vs Other Languages

| Feature | Go | Java | Python |
|--------|----|------|--------|
| Speed | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |
| Simplicity | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐ |
| Concurrency | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| Learning Curve | Easy | Medium | Easy |
| Cloud Support | Excellent | Excellent | Good |

---

## 🎯 Learning Outcomes

By the end:

✅ Write Go programs confidently  
✅ Understand concurrency basics  
✅ Work with functions, slices & maps  
✅ Build backend-ready logic  
✅ Be prepared for real-world Go development  

---

## 📖 Practice Resources

- Go by Example
- Go.dev Documentation
- Exercism Go
- LeetCode
- HackerRank Go

---

## 🏆 Career Opportunities

- Backend Developer
- Cloud Engineer
- DevOps Engineer
- Golang Developer
- System Engineer

---

## 🎓 Next Steps

1️⃣ Learn Goroutines deeply  
2️⃣ Learn Channels  
3️⃣ Build REST APIs  
4️⃣ Learn Go Modules  
5️⃣ Move to Microservices & Cloud  

---

*Simple. Fast. Powerful. That’s Go 🚀*
`,
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
    thumbnail:
      "https://campus.w3schools.com/cdn/shop/files/PHP_582f1a79-dd8e-4762-9394-e359831e162e_203x203.png?v=1764576978",
    instructor: "Marco Rossi",
    notes: `# PHP Web Development

## 🛠 Introduction to PHP

PHP (Hypertext Preprocessor) is a **powerful server-side scripting language** used to build dynamic web applications. It powers **over 75% of the web**, including platforms like **Facebook (early years), WordPress, Wikipedia, Slack, and Laravel-based systems**.

PHP integrates seamlessly with HTML, databases, and modern frameworks, making it an excellent language for backend and full-stack developers.

---

## 🌟 Why Learn PHP?

| Feature | Description |
|--------|-------------|
| 🌍 **Most Used Backend Language** | Powers majority of websites |
| ⚙ **Server-Side Execution** | Runs on the server before sending data |
| 🧠 **Beginner Friendly** | Easy syntax, fast learning |
| 🏗 **Framework Support** | Laravel, CodeIgniter, Symfony |
| 📦 **Database Friendly** | MySQL, PostgreSQL, MongoDB |
| 💰 **High Demand** | Huge global job market |

---

## 🧠 PHP is Commonly Used For

- Dynamic Websites
- Web Applications
- APIs & Backend Services
- E-commerce Platforms
- Content Management Systems
- Authentication Systems
- Payment Gateways

---

## 📚 What You Will Learn

---

## 🔰 Module 1: Getting Started
- Installing XAMPP / WAMP / MAMP
- PHP Setup & Server
- Running PHP in Browser

### First PHP Program
\`\`\`php
<?php
echo "Hello PHP!";
?>
\`\`\`

---

## ✨ Module 2: Variables & Data Types

### Variables
\`\`\`php
$name = "CodeZen";
$age = 20;
\`\`\`

### Data Types
- String
- Integer
- Float
- Boolean
- Array
- Object
- NULL

---

## ➗ Module 3: Operators
- Arithmetic
- Comparison
- Logical
- Assignment

---

## 🧩 Module 4: Control Flow

### If / Else
\`\`\`php
$marks = 80;

if($marks >= 90){
 echo "Excellent";
} else {
 echo "Good";
}
\`\`\`

### Switch
\`\`\`php
$day = 2;

switch($day){
 case 1: echo "Mon"; break;
 case 2: echo "Tue"; break;
 default: echo "Other";
}
\`\`\`

---

## 🔁 Module 5: Loops
- for
- while
- do while
- foreach

\`\`\`php
for($i = 1; $i <= 5; $i++){
 echo $i;
}
\`\`\`

---

## 📦 Module 6: Arrays

### Indexed Array
\`\`\`php
$numbers = [1,2,3];
\`\`\`

### Associative Array
\`\`\`php
$student = [
 "name" => "Alex",
 "age" => 21
];
\`\`\`

---

## 🧠 Module 7: Functions

\`\`\`php
function greet($name){
 return "Hello " . $name;
}
\`\`\`

---

## 🗂 Module 8: Forms & Input Handling

- GET
- POST
- Form validation
- Sanitization

---

## 🔐 Module 9: Sessions & Cookies

- Authentication concepts
- Remember user
- Session security

---

## 🗄 Module 10: Database Connectivity

- MySQL connection
- CRUD operations
- PDO / MySQLi

---

## 🚀 Modern PHP (Preview)

- Laravel Framework
- MVC Concept
- REST API Development
- Authentication Systems

---

## 💼 Real-World Applications

### 🌍 Web Platforms
- WordPress
- Shopify
- Wikipedia

### 🛒 E-Commerce
- Payment systems
- Dynamic shopping carts

### 🧠 Backend Systems
- APIs
- Dashboards
- Admin panels

---

## 💼 Companies Using PHP

| Company | Usage |
|--------|--------|
| Facebook (Early) | Web Platform |
| Wikipedia | CMS |
| Slack | Backend Services |
| MailChimp | Web Platform |
| WordPress | Entire platform |

---

## 📊 PHP vs Other Backend Languages

| Feature | PHP | Node.js | Python |
|--------|-----|---------|--------|
| Ease of Learning | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Speed | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| Frameworks | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Hosting Support | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |

---

## 🎯 Learning Outcomes

By the end:

✅ Build dynamic websites  
✅ Work with forms & authentication  
✅ Connect with MySQL databases  
✅ Create backend logic  
✅ Prepare for Laravel / Full-Stack development  

---

## 📖 Practice Resources

- PHP Manual
- W3Schools
- HackerRank PHP
- Laravel Docs
- PHP The Right Way

---

## 🏆 Career Opportunities

- PHP Developer
- Backend Developer
- Full-Stack Developer
- CMS Developer
- API Developer

---

## 🎓 Next Steps

1️⃣ Learn OOP in PHP  
2️⃣ Learn Laravel  
3️⃣ Build REST APIs  
4️⃣ Work with Authentication  
5️⃣ Deploy Projects  

---

*Build Powerful Web Apps with PHP 🛠✨*
`,
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
    thumbnail:
      "https://chatgpt.com/backend-api/estuary/content?id=file_00000000188871fa878575f6041c3aa4&ts=491101&p=fs&cid=1&sig=fcfe400cf1d17a38888241d2d73974c6a83bf8e23ea0c58d4678f02790a8b084&v=0",
    instructor: "Emma Williams",
    notes: `# Swift Programming for iOS Development

## 🍎 Introduction to Swift

Swift is a **modern, fast, and safe programming language** developed by Apple for building applications across the Apple ecosystem, including:

- iOS (iPhone / iPad Apps)
- macOS Applications
- watchOS
- tvOS
- Backend with Swift Server

Swift was introduced in 2014 to replace Objective-C with a language that is **simpler**, **safer**, and **more powerful**, making it one of the most developer-friendly languages today.

---

## 🌟 Why Learn Swift?

| Feature | Description |
|--------|-------------|
| ⚡ **High Performance** | As fast as C++ |
| 🛡 **Memory Safe** | Prevents crashes & memory leaks |
| 🎯 **Easy to Learn** | Clean & modern syntax |
| 📱 **Native iOS Language** | Official Apple development language |
| 🎨 **Great for UI** | Seamless with SwiftUI & UIKit |
| 🔐 **Secure & Stable** | Strict compile-time checks |

---

## 🧠 Where Swift Is Used

- iPhone & iPad applications
- Mac desktop applications
- Apple Watch apps
- Apple TV apps
- Backend APIs (Vapor framework)
- Gaming (SpriteKit, SceneKit)
- AR Apps (ARKit)

---

## 📚 What You Will Learn

---

## 🔰 Module 1: Getting Started

- Install Xcode
- Swift playgrounds
- Running your first program

### Hello Swift
\`\`\`swift
import Foundation

print("Hello Swift!")
\`\`\`

---

## ✨ Module 2: Variables & Data Types

### Variables
\`\`\`swift
var name = "CodeZen"
let age = 21
\`\`\`

\`var\` → Changeable  
\`let\` → Constant (recommended)

### Data Types

- Int
- Double
- Float
- String
- Bool

---

## ➗ Module 3: Operators

Supports:
- Arithmetic Operators
- Logical Operators
- Comparison Operators
- Assignment Operators

---

## 🧩 Module 4: Control Flow

### If / Else
\`\`\`swift
let marks = 85

if marks >= 90 {
 print("Excellent")
} else {
 print("Good")
}
\`\`\`

### Switch
\`\`\`swift
let day = 2

switch day {
 case 1: print("Mon")
 case 2: print("Tue")
 default: print("Other")
}
\`\`\`

---

## 🔁 Module 5: Loops

### For Loop
\`\`\`swift
for i in 1...5 {
 print(i)
}
\`\`\`

### While Loop
\`\`\`swift
var x = 1
while x <= 5 {
 print(x)
 x += 1
}
\`\`\`

---

## 📦 Module 6: Collections

### Arrays
\`\`\`swift
var numbers = [1,2,3]
\`\`\`

### Dictionaries
\`\`\`swift
var student = ["name": "Alex", "age": "21"]
\`\`\`

### Sets
\`\`\`swift
var setValues: Set = [1,2,3]
\`\`\`

---

## 🧠 Module 7: Functions

\`\`\`swift
func greet(_ name: String) -> String {
 return "Hello \(name)"
}
\`\`\`

Supports:
- Parameters
- Return values
- Default parameters

---

## 🏛 Module 8: Object-Oriented Programming

Swift supports full OOP.

\`\`\`swift
class Student {
 var name = "Alex"
 var age = 21

 func intro() {
  print("\\(name) is \\(age)")
 }
}
\`\`\`

Concepts:
- Classes
- Objects
- Inheritance
- Polymorphism
- Encapsulation

---

## 🎨 Module 9: SwiftUI (Preview)

SwiftUI is Apple’s UI framework.

\`\`\`swift
import SwiftUI

struct ContentView: View {
 var body: some View {
  Text("Hello SwiftUI!")
 }
}
\`\`\`

---

## 🚀 Real-World Applications

### 📱 Mobile Apps
- iPhone Applications
- iPad Productivity Tools

### 🎮 Gaming
- SpriteKit
- SceneKit
- Metal

### 🧠 Modern Tech
- AI powered apps
- AR / VR apps using ARKit
- Health & Fitness Apps

---

## 💼 Companies Using Swift

| Company | Usage |
|--------|--------|
| Apple | Entire ecosystem |
| Uber | iOS app |
| Airbnb | Mobile app |
| Instagram | iOS app |
| LinkedIn | iOS app |
| WhatsApp | iOS App |

---

## 📊 Swift vs Other Languages

| Feature | Swift | Kotlin | Java | Flutter (Dart) |
|--------|-------|--------|------|----------------|
| Speed | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| Safety | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ |
| Native Support | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| Ease of Learning | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐ |

---

## 🎯 Learning Outcomes

By the end of this course:

✅ Write Swift programs confidently  
✅ Understand iOS fundamentals  
✅ Work with functions & classes  
✅ Handle logic and structure  
✅ Prepare for iOS App Development  

---

## 📖 Practice Resources

- Apple Swift Docs
- Hacking with Swift
- Swift Playground
- Ray Wenderlich Tutorials
- LeetCode Swift

---

## 🏆 Career Opportunities

- iOS Developer
- Mobile Engineer
- App Developer
- AR/VR Developer

---

## 🎓 Next Steps

1️⃣ Learn SwiftUI  
2️⃣ Learn UIKit Basics  
3️⃣ Build iOS Apps  
4️⃣ Learn API Integration  
5️⃣ Publish Apps to App Store  

---

*Build Beautiful Apps with Swift 🍎✨*
`,
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
    thumbnail:
      "https://campus.w3schools.com/cdn/shop/files/Rust_Exam_1078x1078.png?v=1764575031",
    instructor: "Dr. Thomas Anderson",
    notes: `# Rust Programming Fundamentals

## 🦀 Introduction to Rust

Rust is a **high-performance, memory-safe, and modern programming language** created by Mozilla. It is designed to provide **C/C++ level speed** while preventing memory errors, crashes, and security vulnerabilities.

Rust is massively popular in:

- System Programming
- WebAssembly
- Game Engines
- Blockchain
- Cloud Infrastructure
- Performance-Critical Applications

Rust gives you **speed, safety, and concurrency — without garbage collection**.

---

## 🌟 Why Learn Rust?

| Feature | Description |
|--------|-------------|
| 🛡 **Memory Safe** | Prevents crashes, null pointers & data races |
| ⚡ **Super Fast** | Comparable to C/C++ |
| 🔀 **Fearless Concurrency** | Safe multithreading |
| 🧠 **Modern Design** | Powerful features and clean syntax |
| 🚀 **High Demand** | Loved & highly paid language |
| 🏆 **Most Loved Language** | Frequently #1 on StackOverflow |

---

## 🧠 Rust Philosophy

Rust focuses on:

- **Safety**
- **Speed**
- **Concurrency**
- **Zero-cost abstractions**
- **No garbage collector**
- **No runtime overhead**

Rust makes you write **correct and efficient code** from the beginning.

---

## 📚 What You Will Learn

---

## 🔰 Module 1: Getting Started

- Install Rust using rustup
- cargo (Rust’s build system)
- Running programs

### Hello Rust
\`\`\`rust
fn main() {
    println!("Hello Rust!");
}
\`\`\`

---

## ✨ Module 2: Variables & Data Types

### Variables
\`\`\`rust
let name = "CodeZen";
let mut age = 21;
\`\`\`

\`let\` → immutable by default  
\`mut\` → makes variable changeable

### Data Types
- i32, i64
- f32, f64
- bool
- char
- String

---

## ➗ Module 3: Operators
- Arithmetic
- Comparison
- Logical
- Assignment

---

## 🧩 Module 4: Control Flow

### If / Else
\`\`\`rust
let marks = 85;

if marks >= 90 {
    println!("Excellent");
} else {
    println!("Good");
}
\`\`\`

### Match (Rust Switch)
\`\`\`rust
let day = 2;

match day {
    1 => println!("Mon"),
    2 => println!("Tue"),
    _ => println!("Other"),
}
\`\`\`

---

## 🔁 Module 5: Loops

### Loop
\`\`\`rust
loop {
    println!("Running");
    break;
}
\`\`\`

### While
\`\`\`rust
let mut x = 1;
while x <= 5 {
    println!("{}", x);
    x += 1;
}
\`\`\`

### For
\`\`\`rust
for i in 1..6 {
    println!("{}", i);
}
\`\`\`

---

## 📦 Module 6: Ownership — Rust’s Superpower

Rust prevents memory bugs using **Ownership Rules**:

1️⃣ Each value has one owner  
2️⃣ When owner goes out of scope, value is freed  
3️⃣ You cannot use data after move

Example:
\`\`\`rust
let s1 = String::from("Hello");
let s2 = s1; // ownership moved
\`\`\`

---

## 🧠 Borrowing & References

Rust allows safe sharing:

\`\`\`rust
let s = String::from("Rust");
let len = calculate_length(&s);

fn calculate_length(s: &String) -> usize {
    s.len()
}
\`\`\`

No null.
No dangling pointers.
No memory leaks.

---

## 🧑‍🔧 Module 7: Functions

\`\`\`rust
fn add(a: i32, b: i32) -> i32 {
    a + b
}
\`\`\`

Supports:
- Parameters
- Return values
- Expression-based returns

---

## 🏛 Module 8: Structs & Enums

### Struct
\`\`\`rust
struct Student {
    name: String,
    age: i32,
}
\`\`\`

### Enum
\`\`\`rust
enum Role {
    Admin,
    User,
}
\`\`\`

---

## ⚙ Module 9: Error Handling

Rust has **no exceptions**.
Instead uses:

- Result
- Option

\`\`\`rust
fn divide(a: i32, b: i32) -> Option<i32> {
    if b == 0 {
        None
    } else {
        Some(a / b)
    }
}
\`\`\`

---

## 🚀 Real-World Applications

### 🧠 System Programming
- OS Components
- Drivers
- Performance tools

### ☁ Cloud & Backend
- Distributed systems
- High performance APIs

### 🔐 Security
- Memory-safe secure apps

### 🎮 Gaming
- Game engines
- Real-time rendering

### 🌐 WebAssembly
- High performance web apps

---

## 💼 Companies Using Rust

| Company | Usage |
|--------|--------|
| Microsoft | Windows components |
| Google | System & security |
| Meta | Backend & infra |
| Amazon | Cloud services |
| Dropbox | Core systems |
| Discord | High performance backend |

---

## 📊 Rust vs Other Languages

| Feature | Rust | C++ | Go | Python |
|--------|------|-----|----|--------|
| Speed | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐ |
| Memory Safety | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐ |
| Concurrency | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |
| Learning Curve | Hard | Hard | Easy | Easy |

---

## 🎯 Learning Outcomes

By the end:

✅ Write safe & fast Rust programs  
✅ Understand ownership & borrowing  
✅ Build functions & structs  
✅ Handle errors safely  
✅ Be ready for real-world Rust projects  

---

## 📖 Practice Resources

- Rust Book (official)
- Rustlings
- Exercism Rust
- LeetCode
- Rust By Example

---

## 🏆 Career Opportunities

- System Engineer
- Rust Developer
- Blockchain Engineer
- Backend Engineer
- Performance Engineer

---

## 🎓 Next Steps

1️⃣ Learn Lifetimes  
2️⃣ Learn Traits & Generics  
3️⃣ Learn Async Rust  
4️⃣ Build Projects  
5️⃣ Explore WebAssembly  

---

*Fast. Safe. Powerful. That’s Rust 🦀🔥*
`,
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
    url: "https://chatgpt.com/backend-api/estuary/content?id=file_00000000fee071fa99512e31c3852900&ts=491101&p=fs&cid=1&sig=3fa49d5b00326cc9449ff3155006167a7f111cc0352802688e788dfc5b3e98a8&v=0",
    title: "Ruby Programming Basics",
    description:
      "Learn Ruby programming fundamentals including syntax, object-oriented concepts, and the foundation for modern web development using Ruby on Rails.",
    language: "Ruby",
    difficulty: "beginner",
    duration: 11,
    thumbnail: "/placeholder.svg?key=kvhij",
    instructor: "Jessica Martinez",
    notes: `# Ruby Programming Basics

## 💎 Introduction to Ruby

Ruby is a **beautiful, simple, and highly expressive programming language** created by Yukihiro “Matz” Matsumoto. Ruby is designed to make programmers **happy**, focusing on readability and developer productivity.

Ruby powers some of the world’s biggest platforms including:
- **Ruby on Rails**
- **GitHub**
- **Shopify**
- **Airbnb (early)**
- **Hulu**
- **Basecamp**

Ruby lets you **write less code and achieve more**, making it a favorite for startups, web apps, and rapid development.

---

## 🌟 Why Learn Ruby?

| Feature | Description |
|--------|-------------|
| ✨ **Clean & Readable Syntax** | Code feels like English |
| ⚡ **Highly Productive** | Build apps very fast |
| 🧠 **Beginner Friendly** | Perfect for new developers |
| 🏗 **Rails Framework** | Powerful web development |
| 🌍 **Strong Community** | Friendly & supportive |
| 💼 **Industry Ready** | Used in real-world large systems |

Ruby follows the philosophy:

> “Programming should be fun and enjoyable.”

---

## 🧠 Where Ruby is Used

- Web Applications
- APIs & Backend
- Startups and SaaS
- Automation & Scripting
- DevOps Tools
- E-commerce Platforms

---

## 📚 What You Will Learn

---

## 🔰 Module 1: Getting Started

- Install Ruby
- Use IRB (Interactive Ruby)
- First Ruby Program

\`\`\`ruby
puts "Hello Ruby!"
\`\`\`

---

## ✨ Module 2: Variables & Data Types

\`\`\`ruby
name = "CodeZen"
age = 21
\`\`\`

Ruby Data Types:
- Integer
- Float
- String
- Boolean
- Array
- Hash
- Symbol

---

## ➗ Module 3: Operators

Ruby supports:
- Arithmetic
- Comparison
- Logical
- Assignment

---

## 🧩 Module 4: Control Flow

### If / Else
\`\`\`ruby
marks = 85

if marks >= 90
  puts "Excellent"
else
  puts "Good"
end
\`\`\`

### Case (Switch)
\`\`\`ruby
day = 2

case day
when 1
  puts "Mon"
when 2
  puts "Tue"
else
  puts "Other"
end
\`\`\`

---

## 🔁 Module 5: Loops

### For Loop
\`\`\`ruby
for i in 1..5
  puts i
end
\`\`\`

### While Loop
\`\`\`ruby
x = 1
while x <= 5
  puts x
  x += 1
end
\`\`\`

### Each Loop
\`\`\`ruby
[1,2,3].each do |n|
  puts n
end
\`\`\`

---

## 📦 Module 6: Arrays & Hashes

### Array
\`\`\`ruby
numbers = [10,20,30]
puts numbers[0]
\`\`\`

### Hash (Like Dictionary)
\`\`\`ruby
student = {
 name: "Alex",
 age: 21
}

puts student[:name]
\`\`\`

---

## 🧠 Module 7: Functions (Methods)

\`\`\`ruby
def greet(name)
  "Hello #{name}"
end
\`\`\`

Ruby supports:
- Parameters
- Default values
- Return values

---

## 🏛 Module 8: Object-Oriented Programming

Ruby is **fully OOP** — everything is an object.

### Class Example
\`\`\`ruby
class Student
  def initialize(name, age)
    @name = name
    @age = age
  end

  def intro
    puts "#{@name} is #{@age}"
  end
end
\`\`\`

Concepts:
- Classes & Objects
- Attributes
- Methods
- Inheritance
- Polymorphism

---

## 🚀 Ruby on Rails (Preview)

Ruby becomes most powerful with **Rails Framework**, used for:

- Startups
- SaaS Platforms
- E-Commerce
- APIs
- Full Stack Web Apps

---

## 💼 Real-World Applications

### Popular Platforms
- GitHub
- Shopify
- Airbnb (early)
- Twitch
- Hulu
- Basecamp

### Use Cases
- Full Stack Apps
- APIs
- E-Commerce
- Dashboards
- Admin Panels

---

## 💼 Companies Using Ruby

| Company | Usage |
|--------|--------|
| GitHub | Web Platform |
| Shopify | E-Commerce |
| Airbnb | Web Platform |
| Hulu | Backend |
| Basecamp | Full Framework |

---

## 📊 Ruby vs Other Languages

| Feature | Ruby | Python | PHP |
|--------|------|--------|-----|
| Ease of Learning | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Syntax Beauty | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |
| Speed | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| Web Framework | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |

---

## 🎯 Learning Outcomes

By the end:

✅ Write Ruby programs easily  
✅ Understand OOP in Ruby  
✅ Work with arrays & hashes  
✅ Build logical backend foundation  
✅ Be ready for Ruby on Rails  

---

## 📖 Practice Resources

- Ruby Docs
- RubyMonk
- Exercism Ruby
- Codecademy Ruby
- Rails Guides

---

## 🏆 Career Opportunities

- Ruby Developer
- Rails Developer
- Backend Engineer
- Full-Stack Developer
- API Developer

---

## 🎓 Next Steps

1️⃣ Learn Ruby OOP deeply  
2️⃣ Learn Ruby on Rails  
3️⃣ Build CRUD Apps  
4️⃣ Learn APIs & Databases  
5️⃣ Build & Deploy Projects  

---

*Code Smart. Code Elegant. With Ruby 💎✨*
`,
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
