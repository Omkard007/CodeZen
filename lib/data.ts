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
    thumbnail: "/swift.png",
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
    url: "https://www.youtube.com/embed/t_ispmWmdjY",
    title: "Ruby Programming Basics",
    description:
      "Learn Ruby programming fundamentals including syntax, object-oriented concepts, and the foundation for modern web development using Ruby on Rails.",
    language: "Ruby",
    difficulty: "beginner",
    duration: 11,
    thumbnail: "/ruby.png",
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
  {
    id: "kotlin-beginner",
    url: "https://www.youtube.com/embed/F9UC9DY-vIU",
    title: "Kotlin Programming for Beginners",
    description:
      "Learn Kotlin from scratch and build a strong foundation for Android development, backend services, and modern JVM-based applications.",
    language: "Kotlin",
    difficulty: "beginner",
    duration: 13,
    thumbnail:
      "https://campus.w3schools.com/cdn/shop/files/Kotlin_000b7c33-3027-46be-b684-600e68b0de26_1078x1078.png?v=1764575660",
    instructor: "Rahul Verma",
    notes: `# Kotlin Programming for Beginners

## 🟣 Introduction to Kotlin

Kotlin is a **modern, concise, and powerful programming language** developed by JetBrains and officially supported by Google for Android development. It runs on the **JVM**, interoperates fully with Java, and is designed to eliminate common programming errors while improving developer productivity.

Kotlin is used for:
- Android App Development
- Backend Development (Ktor, Spring)
- Desktop Applications
- Multiplatform Development
- JVM-based Systems

---

## 🌟 Why Learn Kotlin?

| Feature | Description |
|-------|-------------|
| ✅ Concise Syntax | Less boilerplate than Java |
| 🛡 Null Safety | Prevents NullPointerException |
| ⚡ JVM Performance | Fast and efficient |
| 🔄 Java Interoperability | Use Java libraries directly |
| 📱 Official Android Language | Preferred by Google |
| 🌍 Multiplatform | Android, iOS, Web, Desktop |

---

## 🧠 Programming Paradigms

Kotlin supports:
- Object-Oriented Programming
- Functional Programming
- Procedural Programming

---

## 📚 What You Will Learn

---

## 🔰 Module 1: Getting Started

- Installing Kotlin
- Kotlin Playground
- Using IntelliJ IDEA
- Running Kotlin programs

### Hello World
\`\`\`kotlin
fun main() {
    println("Hello Kotlin!")
}
\`\`\`

---

## ✨ Module 2: Variables & Data Types

### Variables
\`\`\`kotlin
var name = "CodeZen"
val age = 21
\`\`\`

- \`var\` → mutable
- \`val\` → immutable (recommended)

### Data Types
- Int
- Double
- Float
- String
- Boolean
- Char

---

## ➗ Module 3: Operators

- Arithmetic (+ - * / %)
- Comparison (== != > < >= <=)
- Logical (&& || !)
- Assignment (= += -=)

---

## 🧩 Module 4: Control Flow

### If / Else
\`\`\`kotlin
val marks = 85

if (marks >= 90) {
    println("Excellent")
} else {
    println("Good")
}
\`\`\`

### When (Switch)
\`\`\`kotlin
val day = 2

when (day) {
    1 -> println("Mon")
    2 -> println("Tue")
    else -> println("Other")
}
\`\`\`

---

## 🔁 Module 5: Loops

### For Loop
\`\`\`kotlin
for (i in 1..5) {
    println(i)
}
\`\`\`

### While Loop
\`\`\`kotlin
var x = 1
while (x <= 5) {
    println(x)
    x++
}
\`\`\`

---

## 📦 Module 6: Collections

### List
\`\`\`kotlin
val numbers = listOf(1, 2, 3)
\`\`\`

### Mutable List
\`\`\`kotlin
val nums = mutableListOf(1, 2)
nums.add(3)
\`\`\`

### Map
\`\`\`kotlin
val student = mapOf("name" to "Alex", "age" to 21)
\`\`\`

---

## 🧠 Module 7: Functions

\`\`\`kotlin
fun add(a: Int, b: Int): Int {
    return a + b
}
\`\`\`

Supports:
- Default parameters
- Named arguments
- Single-expression functions

---

## 🏛 Module 8: Object-Oriented Programming

### Class & Object
\`\`\`kotlin
class Student(val name: String, val age: Int) {
    fun intro() {
        println("\$name is \$age")
    }
}
\`\`\`

Concepts:
- Classes & Objects
- Constructors
- Inheritance
- Polymorphism
- Encapsulation

---

## 🛡 Module 9: Null Safety (Kotlin Superpower)

\`\`\`kotlin
var name: String? = null
println(name?.length)
\`\`\`

- Prevents crashes
- Safe calls (?.)
- Elvis operator (?:)

---

## 📱 Kotlin for Android (Preview)

- Activities & Fragments
- ViewBinding
- Jetpack Compose
- MVVM Architecture

---

## 🚀 Real-World Applications

- Android Apps
- Backend APIs
- Enterprise JVM Systems
- Multiplatform Apps

---

## 💼 Companies Using Kotlin

| Company | Usage |
|-------|------|
| Google | Android |
| Netflix | Backend |
| Pinterest | Mobile apps |
| Trello | Android |
| Uber | Mobile systems |

---

## 🎯 Learning Outcomes

By the end:

✅ Write clean Kotlin programs  
✅ Understand JVM & Android basics  
✅ Work with collections & functions  
✅ Avoid runtime crashes using null safety  
✅ Be ready for Android development  

---

## 📖 Practice Resources

- Kotlin Official Docs
- Kotlin Playground
- LeetCode Kotlin
- Android Developers
- JetBrains Academy

---

## 🏆 Career Opportunities

- Android Developer
- Kotlin Backend Developer
- Mobile Engineer
- JVM Software Engineer

---

## 🎓 Next Steps

1️⃣ Learn Android fundamentals  
2️⃣ Jetpack Compose  
3️⃣ MVVM Architecture  
4️⃣ Build Android apps  
5️⃣ Publish on Play Store  

---

*Modern. Safe. Powerful. Kotlin 🚀*
`,
    test: [
      {
        id: "kt-q1",
        question: "Kotlin runs on which platform?",
        options: ["CLR", "JVM", "Browser only", "Linux Kernel"],
        correctAnswer: 1,
        explanation: "Kotlin runs on the JVM.",
      },
      {
        id: "kt-q2",
        question: "Which keyword declares an immutable variable?",
        options: ["var", "let", "const", "val"],
        correctAnswer: 3,
        explanation: "val declares read-only variables.",
      },
      {
        id: "kt-q3",
        question: "Kotlin is officially supported by:",
        options: ["Microsoft", "Google", "Meta", "Amazon"],
        correctAnswer: 1,
        explanation: "Google officially supports Kotlin for Android.",
      },
    ],
  },
  {
    id: "html-beginner",
    url: "https://www.youtube.com/embed/pQN-pnXPaVg",
    title: "HTML Fundamentals for Beginners",
    description:
      "Learn HTML from scratch and build a strong foundation for web development by understanding structure, semantics, and modern web standards.",
    language: "HTML",
    difficulty: "beginner",
    duration: 8,
    thumbnail:
      "https://campus.w3schools.com/cdn/shop/files/HTML_1078x1078.png?v=1764577055",
    instructor: "Laura Mitchell",
    notes: `# HTML Fundamentals for Beginners

## 🌐 Introduction to HTML

HTML (HyperText Markup Language) is the **foundation of the web**. It defines the structure and content of websites and is used by every web page you see on the internet. HTML works together with CSS (styling) and JavaScript (interactivity).

HTML is used to:
- Structure web pages
- Display text, images, videos
- Create links, forms, and layouts
- Build the base of all websites and web apps

---

## 🌟 Why Learn HTML?

| Feature | Description |
|-------|-------------|
| 🌍 Universal | Used by every website |
| 🧠 Easy to Learn | Beginner-friendly syntax |
| 🧱 Foundation Skill | Required for CSS & JavaScript |
| ⚡ Fast Results | Build pages quickly |
| 📱 Responsive Ready | Works on all devices |

---

## 🧠 How HTML Works

HTML uses **tags** to define elements.
Tags tell the browser **what content is** and **how it is structured**.

Example:
\`<p>\` means paragraph  
\`<img>\` means image  

---

## 📚 What You Will Learn

---

## 🔰 Module 1: HTML Basics

- What is HTML?
- HTML file structure
- Tags & elements
- Attributes
- Comments

### Basic HTML Page
\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>My First Page</title>
</head>
<body>
  <h1>Hello HTML</h1>
  <p>This is my first webpage.</p>
</body>
</html>
\`\`\`

---

## 🧱 Module 2: Text & Formatting

- Headings (\`h1\` to \`h6\`)
- Paragraphs
- Bold, Italic, Underline
- Line breaks & horizontal rules

\`\`\`html
<h1>Main Heading</h1>
<p><strong>Bold</strong> and <em>Italic</em> text</p>
\`\`\`

---

## 🔗 Module 3: Links & Images

### Links
\`\`\`html
<a href="https://example.com">Visit Site</a>
\`\`\`

### Images
\`\`\`html
<img src="image.png" alt="Sample Image">
\`\`\`

Attributes:
- src
- alt
- width / height

---

## 📋 Module 4: Lists

### Unordered List
\`\`\`html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
\`\`\`

### Ordered List
\`\`\`html
<ol>
  <li>Install Editor</li>
  <li>Write Code</li>
  <li>Run Browser</li>
</ol>
\`\`\`

---

## 🧩 Module 5: Tables

\`\`\`html
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Alex</td>
    <td>21</td>
  </tr>
</table>
\`\`\`

Used for:
- Tabular data
- Reports
- Dashboards

---

## 📝 Module 6: Forms & Inputs

Forms collect user input.

\`\`\`html
<form>
  <input type="text" placeholder="Name">
  <input type="email" placeholder="Email">
  <button>Submit</button>
</form>
\`\`\`

Input types:
- text
- email
- password
- checkbox
- radio
- submit

---

## 🧠 Module 7: Semantic HTML

Semantic tags improve **SEO**, **accessibility**, and **readability**.

Examples:
- \`<header>\`
- \`<nav>\`
- \`<section>\`
- \`<article>\`
- \`<footer>\`

\`\`\`html
<header>
  <h1>Website</h1>
</header>
\`\`\`

---

## 📱 Module 8: Responsive Basics

- Viewport meta tag
- Mobile-friendly layouts

\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`

---

## 🚀 Real-World Applications

- Websites
- Landing pages
- Blogs
- Dashboards
- Web apps
- Emails

---

## 💼 Companies Using HTML

Every company using the web:
- Google
- Apple
- Meta
- Amazon
- Netflix
- Startups & Enterprises

---

## 📊 HTML vs Other Technologies

| Technology | Purpose |
|----------|--------|
| HTML | Structure |
| CSS | Styling |
| JavaScript | Logic & Interactivity |

HTML is the **base** — CSS and JS depend on it.

---

## 🎯 Learning Outcomes

By the end:

✅ Build complete HTML pages  
✅ Understand web structure  
✅ Use forms, tables, lists  
✅ Write clean semantic HTML  
✅ Prepare for CSS & JavaScript  

---

## 📖 Practice Resources

- MDN HTML Docs
- W3Schools HTML
- FreeCodeCamp
- HTML Validator (W3C)

---

## 🏆 Career Relevance

- Frontend Developer
- Web Designer
- UI Developer
- Full Stack Developer (with CSS & JS)

---

## 🎓 Next Steps

1️⃣ Learn CSS Styling  
2️⃣ Learn Responsive Design  
3️⃣ Learn JavaScript  
4️⃣ Build real websites  
5️⃣ Move to React / Next.js  

---

*Every Web Developer Starts with HTML 🌐*
`,
    test: [
      {
        id: "html-q1",
        question: "HTML stands for:",
        options: [
          "Hyper Tool Markup Language",
          "HyperText Markup Language",
          "HighText Machine Language",
          "Hyperlink Markup Language",
        ],
        correctAnswer: 1,
        explanation: "HTML stands for HyperText Markup Language.",
      },
      {
        id: "html-q2",
        question: "Which tag is used for the largest heading?",
        options: ["<h6>", "<p>", "<h1>", "<header>"],
        correctAnswer: 2,
        explanation: "<h1> defines the largest heading.",
      },
      {
        id: "html-q3",
        question: "Which tag is used to create a link?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        correctAnswer: 1,
        explanation: "<a> tag is used to create hyperlinks.",
      },
    ],
  },
  {
    id: "css-beginner",
    url: "https://www.youtube.com/embed/yfoY53QXEnI",
    title: "CSS Fundamentals for Beginners",
    description:
      "Learn CSS from scratch to style beautiful, responsive websites using modern layouts, colors, animations, and best practices.",
    language: "CSS",
    difficulty: "beginner",
    duration: 9,
    thumbnail:
      "https://campus.w3schools.com/cdn/shop/files/CSS_7c48e5b1-6d42-4936-aa4a-02a79ddbaeaf_1078x1078.png?v=1764577041",
    instructor: "Laura Mitchell",
    notes: `# CSS Fundamentals for Beginners

## 🎨 Introduction to CSS

CSS (Cascading Style Sheets) is used to **style and design web pages**. While HTML creates structure, CSS controls layout, colors, fonts, spacing, animations, and responsiveness.

CSS allows you to:
- Make websites visually appealing
- Control layouts across devices
- Create responsive designs
- Add animations and transitions
- Build modern UI components

HTML without CSS looks plain — CSS brings the web to life.

---

## 🌟 Why Learn CSS?

| Feature | Description |
|-------|-------------|
| 🎨 Visual Design | Control colors, fonts, layouts |
| 📱 Responsive | Works on all screen sizes |
| ⚡ Fast Results | See changes instantly |
| 🧩 Modular | Reusable styles |
| 🌍 Essential Skill | Required for frontend dev |

---

## 🧠 How CSS Works

CSS applies **rules** to HTML elements.

Rule structure:
selector → property → value

\`\`\`css
p {
  color: blue;
  font-size: 16px;
}
\`\`\`

---

## 📚 What You Will Learn

---

## 🔰 Module 1: CSS Basics

- Inline, Internal, External CSS
- CSS syntax
- Comments
- Linking CSS to HTML

\`\`\`html
<link rel="stylesheet" href="style.css">
\`\`\`

---

## 🎯 Module 2: Selectors

- Element selector
- Class selector
- ID selector
- Universal selector
- Group selector

\`\`\`css
#title { color: red; }
.card { padding: 16px; }
\`\`\`

---

## 🎨 Module 3: Colors & Backgrounds

- Named colors
- HEX
- RGB / RGBA
- Gradients
- Background images

\`\`\`css
body {
  background: #111;
  color: white;
}
\`\`\`

---

## 🔤 Module 4: Text & Fonts

- font-family
- font-size
- font-weight
- line-height
- text-align
- Google Fonts

\`\`\`css
h1 {
  font-size: 32px;
  font-weight: bold;
}
\`\`\`

---

## 📦 Module 5: Box Model (Core Concept)

Every element is a box.

- Content
- Padding
- Border
- Margin

\`\`\`css
.card {
  padding: 20px;
  margin: 10px;
  border: 2px solid #333;
}
\`\`\`

---

## 📐 Module 6: Layouts

### Display
- block
- inline
- inline-block
- none

### Position
- static
- relative
- absolute
- fixed
- sticky

\`\`\`css
.box {
  position: relative;
  top: 10px;
}
\`\`\`

---

## 🧩 Module 7: Flexbox (Modern Layout)

Used for one-dimensional layouts.

- flex-direction
- justify-content
- align-items
- gap

\`\`\`css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
\`\`\`

---

## 🧱 Module 8: Grid (Advanced Layout)

Used for two-dimensional layouts.

\`\`\`css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
\`\`\`

---

## 📱 Module 9: Responsive Design

- Media queries
- Mobile-first design
- Flexible units

\`\`\`css
@media (max-width: 768px) {
  body {
    font-size: 14px;
  }
}
\`\`\`

---

## ✨ Module 10: Transitions & Animations

### Transitions
\`\`\`css
button {
  transition: background 0.3s ease;
}
\`\`\`

### Animations
\`\`\`css
@keyframes fade {
  from { opacity: 0; }
  to { opacity: 1; }
}
\`\`\`

---

## 🚀 Real-World Applications

- Website layouts
- Landing pages
- Dashboards
- UI components
- Animations
- Responsive apps

---

## 💼 Companies Using CSS

All web-based companies:
- Google
- Apple
- Meta
- Netflix
- Amazon
- Startups

---

## 📊 CSS vs Other Styling Methods

| Method | Usage |
|------|------|
| CSS | Standard web styling |
| Inline styles | Not recommended |
| Tailwind | Utility-based CSS |
| CSS-in-JS | Component styling |

---

## 🎯 Learning Outcomes

By the end:

✅ Style modern websites  
✅ Build responsive layouts  
✅ Master Flexbox & Grid  
✅ Understand box model deeply  
✅ Prepare for frameworks  

---

## 📖 Practice Resources

- MDN CSS Docs
- CSS Tricks
- W3Schools CSS
- Flexbox Froggy
- Grid Garden

---

## 🏆 Career Relevance

- Frontend Developer
- UI Developer
- Web Designer
- Full Stack Developer

---

## 🎓 Next Steps

1️⃣ Learn Responsive Design Deeply  
2️⃣ Learn Tailwind CSS  
3️⃣ Learn JavaScript  
4️⃣ Build UI Projects  
5️⃣ Move to React / Next.js  

---

*Design the Web with CSS 🎨*
`,
    test: [
      {
        id: "css-q1",
        question: "CSS stands for:",
        options: [
          "Colorful Style Sheets",
          "Cascading Style Sheets",
          "Creative Style System",
          "Computer Style Sheets",
        ],
        correctAnswer: 1,
        explanation: "CSS stands for Cascading Style Sheets.",
      },
      {
        id: "css-q2",
        question: "Which property controls spacing inside an element?",
        options: ["margin", "padding", "border", "gap"],
        correctAnswer: 1,
        explanation: "Padding controls inner spacing.",
      },
      {
        id: "css-q3",
        question: "Which layout system is best for 2D layouts?",
        options: ["Flexbox", "Grid", "Float", "Position"],
        correctAnswer: 1,
        explanation: "CSS Grid handles rows and columns.",
      },
    ],
  },
  {
    id: "sql-beginner",
    url: "https://www.youtube.com/embed/7S_tz1z_5bA",
    title: "SQL Fundamentals for Beginners",
    description:
      "Learn SQL from scratch to store, retrieve, analyze, and manage data efficiently using relational databases and real-world queries.",
    language: "SQL",
    difficulty: "beginner",
    duration: 10,
    thumbnail:
      "https://campus.w3schools.com/cdn/shop/files/SQL_9503d82a-db63-4013-b4bb-4852a770eabc_1078x1078.png?v=1764576999",
    instructor: "Daniel Cooper",
    notes: `# SQL Fundamentals for Beginners

## 🗄 Introduction to SQL

SQL (Structured Query Language) is used to **communicate with databases**. It allows you to store, retrieve, update, and delete data from relational databases like MySQL, PostgreSQL, SQLite, and SQL Server.

Almost every application — web, mobile, enterprise — relies on SQL databases.

---

## 🌟 Why Learn SQL?

| Feature | Description |
|-------|-------------|
| 🧠 Data Power | Work directly with data |
| 🌍 Universal | Works across all major databases |
| 💼 High Demand | Required for backend & data roles |
| ⚡ Fast Queries | Efficient data access |
| 🔗 Works Everywhere | Web, mobile, enterprise |

---

## 🧠 How SQL Works

SQL works with **tables** (rows and columns).

- Rows → Records
- Columns → Fields

Example table:
Users(id, name, email)

---

## 📚 What You Will Learn

---

## 🔰 Module 1: Database Basics

- What is a database?
- Relational databases
- Tables, rows, columns
- Primary keys

---

## 📋 Module 2: Creating Tables

\`\`\`sql
CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  email VARCHAR(100)
);
\`\`\`

---

## 🔍 Module 3: SELECT Queries

\`\`\`sql
SELECT * FROM users;
SELECT name, email FROM users;
\`\`\`

- WHERE
- ORDER BY
- LIMIT

\`\`\`sql
SELECT * FROM users WHERE id = 1;
\`\`\`

---

## ✍ Module 4: INSERT Data

\`\`\`sql
INSERT INTO users (id, name, email)
VALUES (1, 'Alex', 'alex@mail.com');
\`\`\`

---

## 🔄 Module 5: UPDATE Data

\`\`\`sql
UPDATE users
SET email = 'new@mail.com'
WHERE id = 1;
\`\`\`

---

## ❌ Module 6: DELETE Data

\`\`\`sql
DELETE FROM users WHERE id = 1;
\`\`\`

---

## 🔗 Module 7: Constraints

- PRIMARY KEY
- FOREIGN KEY
- UNIQUE
- NOT NULL
- DEFAULT

\`\`\`sql
email VARCHAR(100) UNIQUE NOT NULL
\`\`\`

---

## 🔀 Module 8: Relationships & JOINS

### INNER JOIN
\`\`\`sql
SELECT orders.id, users.name
FROM orders
INNER JOIN users ON orders.user_id = users.id;
\`\`\`

Types:
- INNER JOIN
- LEFT JOIN
- RIGHT JOIN
- FULL JOIN

---

## 📊 Module 9: Aggregations

\`\`\`sql
SELECT COUNT(*) FROM users;
SELECT AVG(age) FROM users;
\`\`\`

Functions:
- COUNT
- SUM
- AVG
- MIN
- MAX

---

## 🧠 Module 10: Indexes & Performance

- Indexes speed up queries
- Use WHERE wisely
- Avoid SELECT *

\`\`\`sql
CREATE INDEX idx_email ON users(email);
\`\`\`

---

## 🚀 Real-World Applications

- User management systems
- E-commerce databases
- Analytics & reports
- Authentication systems
- Enterprise apps

---

## 💼 Companies Using SQL

- Google
- Amazon
- Meta
- Netflix
- Banks & Enterprises

---

## 📊 SQL vs NoSQL

| Feature | SQL | NoSQL |
|------|-----|------|
| Structure | Fixed schema | Flexible |
| Relations | Strong | Weak |
| Use Case | Transactions | Big data |
| Scaling | Vertical | Horizontal |

---

## 🎯 Learning Outcomes

By the end:

✅ Write SQL queries confidently  
✅ Manage relational databases  
✅ Use joins & aggregations  
✅ Optimize basic queries  
✅ Work with real data  

---

## 📖 Practice Resources

- SQLZoo
- LeetCode SQL
- HackerRank SQL
- W3Schools SQL
- Mode Analytics SQL

---

## 🏆 Career Opportunities

- Backend Developer
- Data Analyst
- Database Engineer
- Full Stack Developer
- Business Analyst

---

## 🎓 Next Steps

1️⃣ Learn Advanced Joins  
2️⃣ Learn Stored Procedures  
3️⃣ Learn Index Optimization  
4️⃣ Learn ORM tools  
5️⃣ Move to PostgreSQL / MySQL  

---

*Data is Power. SQL Unlocks It 🗄*
`,
    test: [
      {
        id: "sql-q1",
        question: "SQL is used for:",
        options: [
          "Styling websites",
          "Managing databases",
          "Building UI",
          "Writing servers",
        ],
        correctAnswer: 1,
        explanation: "SQL is used to interact with databases.",
      },
      {
        id: "sql-q2",
        question: "Which keyword retrieves data?",
        options: ["GET", "FETCH", "SELECT", "READ"],
        correctAnswer: 2,
        explanation: "SELECT retrieves data from tables.",
      },
      {
        id: "sql-q3",
        question: "Which clause filters records?",
        options: ["ORDER BY", "GROUP BY", "WHERE", "LIMIT"],
        correctAnswer: 2,
        explanation: "WHERE filters records.",
      },
    ],
  },
  {
    id: "bootstrap3-beginner",
    url: "https://www.youtube.com/embed/qIULMnbH2-o",
    title: "Bootstrap 3 Fundamentals",
    description:
      "Learn Bootstrap 3 from scratch to build fast, responsive, and mobile-first websites using its grid system, components, and utilities.",
    language: "Bootstrap 3",
    difficulty: "beginner",
    duration: 8,
    thumbnail:
      "https://campus.w3schools.com/cdn/shop/files/Bootstrap_3_1078x1078.png?v=1764576969",
    instructor: "Andrew Miller",
    notes: `# Bootstrap 3 Fundamentals

## 🎨 Introduction to Bootstrap 3

Bootstrap 3 is a **popular front-end CSS framework** developed by Twitter that helps developers build **responsive and mobile-first websites quickly**. It provides pre-built CSS classes, components, and a powerful grid system.

Bootstrap 3 is widely used in legacy projects and still important to understand for maintaining older applications.

---

## 🌟 Why Learn Bootstrap 3?

| Feature | Description |
|-------|-------------|
| 📱 Responsive Design | Mobile-first layout system |
| ⚡ Fast Development | Ready-made UI components |
| 🎯 Consistent UI | Uniform design across browsers |
| 🧩 Grid System | Flexible 12-column layout |
| 🌍 Cross-Browser | Works on all major browsers |

---

## 🧠 Core Concepts

Bootstrap 3 is based on:
- CSS
- HTML
- Optional JavaScript (jQuery based)

It focuses on **layout, responsiveness, and UI components**.

---

## 📚 What You Will Learn

---

## 🔰 Module 1: Getting Started

- Bootstrap CDN
- Local setup
- Required meta viewport

\`\`\`html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
\`\`\`

---

## 📐 Module 2: Grid System

Bootstrap 3 uses a **12-column grid**.

### Grid Classes
- col-xs-*
- col-sm-*
- col-md-*
- col-lg-*

\`\`\`html
<div class="row">
  <div class="col-md-6">Left</div>
  <div class="col-md-6">Right</div>
</div>
\`\`\`

---

## 🧱 Module 3: Containers

- container
- container-fluid

\`\`\`html
<div class="container">
  Content here
</div>
\`\`\`

---

## 🎛 Module 4: Typography & Utilities

- Headings
- text-center
- text-muted
- pull-left / pull-right
- hidden-xs, visible-md

---

## 🔘 Module 5: Buttons

\`\`\`html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
\`\`\`

---

## 📋 Module 6: Forms

\`\`\`html
<form>
  <div class="form-group">
    <label>Email</label>
    <input type="email" class="form-control">
  </div>
</form>
\`\`\`

---

## 📦 Module 7: Components

- Navbar
- Panels
- Alerts
- Wells
- Badges
- Labels

### Alert Example
\`\`\`html
<div class="alert alert-success">
  Success message
</div>
\`\`\`

---

## 🧭 Module 8: Navigation Bar

\`\`\`html
<nav class="navbar navbar-default">
  <div class="container">
    <a class="navbar-brand">Brand</a>
  </div>
</nav>
\`\`\`

---

## ⚙ Module 9: JavaScript Components

Requires **jQuery**.

- Modal
- Dropdown
- Carousel
- Collapse

\`\`\`html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
\`\`\`

---

## 🚀 Real-World Applications

- Corporate websites
- Admin dashboards
- Landing pages
- Legacy enterprise apps
- Rapid prototypes

---

## 📊 Bootstrap 3 vs Bootstrap 4/5

| Feature | Bootstrap 3 | Bootstrap 5 |
|------|------------|-------------|
| jQuery | Required | Not required |
| Grid | Float-based | Flexbox |
| Utility classes | Limited | Extensive |
| Icons | Glyphicons | External |

---

## 🎯 Learning Outcomes

By the end:

✅ Build responsive layouts  
✅ Use Bootstrap grid system  
✅ Create forms & navbars  
✅ Understand legacy Bootstrap projects  
✅ Style websites quickly  

---

## 📖 Practice Resources

- Bootstrap 3 Docs
- W3Schools Bootstrap
- FreeCodeCamp
- CodePen

---

## 🏆 Career Use

- Frontend Developer
- Web Designer
- UI Developer
- Legacy App Maintenance

---

## 🎓 Next Steps

1️⃣ Learn Bootstrap 4/5  
2️⃣ Learn Flexbox & CSS Grid  
3️⃣ Build responsive layouts  
4️⃣ Combine with JS frameworks  

---

*Design Fast. Build Responsive. Bootstrap 3 🎨*
`,
    test: [
      {
        id: "bs3-q1",
        question: "Bootstrap 3 grid system is based on:",
        options: ["Flexbox", "CSS Grid", "12-column layout", "Tables"],
        correctAnswer: 2,
        explanation: "Bootstrap 3 uses a 12-column grid layout.",
      },
      {
        id: "bs3-q2",
        question: "Bootstrap 3 JavaScript components require:",
        options: ["React", "Vue", "jQuery", "Angular"],
        correctAnswer: 2,
        explanation: "Bootstrap 3 depends on jQuery.",
      },
      {
        id: "bs3-q3",
        question: "Which class creates a responsive fixed-width container?",
        options: ["box", "wrapper", "container", "container-fluid"],
        correctAnswer: 2,
        explanation: "container provides fixed-width responsive layout.",
      },
    ],
  },
  {
    id: "xml-beginner",
    url: "https://www.youtube.com/embed/1JblVElt5K0",
    title: "XML Fundamentals",
    description:
      "Learn XML from scratch to understand structured data representation, data exchange, configuration files, and integration with modern systems.",
    language: "XML",
    difficulty: "beginner",
    duration: 6,
    thumbnail:
      "https://campus.w3schools.com/cdn/shop/files/XML_ede0d596-4b41-4269-b733-02f9b32cb4a0_1078x1078.png?v=1764576960",
    instructor: "Daniel Foster",
    notes: `# XML Fundamentals

## 📄 Introduction to XML

XML (eXtensible Markup Language) is a **markup language used to store, transport, and structure data**. Unlike HTML, XML is designed to **carry data**, not display it. XML is widely used in **configuration files, APIs, web services, enterprise systems, and data exchange**.

XML is human-readable, platform-independent, and supported by almost every programming language.

---

## 🌟 Why Learn XML?

| Feature | Description |
|-------|-------------|
| 📦 Data Exchange | Common format for sharing data |
| 🧠 Human Readable | Easy to read and understand |
| 🌍 Platform Independent | Works across systems |
| ⚙ Config Files | Used in apps, servers, tools |
| 🔗 Interoperability | Used with APIs & services |

---

## 🧠 Where XML Is Used

- Web services (SOAP)
- Configuration files
- Android layouts
- RSS feeds
- Office documents
- Enterprise systems
- Data storage & migration

---

## 📚 What You Will Learn

---

## 🔰 Module 1: XML Basics

- What is XML?
- XML vs HTML
- XML declaration

\`\`\`xml
<?xml version="1.0" encoding="UTF-8"?>
\`\`\`

---

## 🧱 Module 2: XML Structure

XML uses **elements, tags, and attributes**.

\`\`\`xml
<student>
  <name>Alex</name>
  <age>21</age>
</student>
\`\`\`

Rules:
- Tags must be closed
- Case-sensitive
- Proper nesting required

---

## 🏷 Module 3: Attributes

\`\`\`xml
<book id="101" category="programming">
  <title>XML Basics</title>
</book>
\`\`\`

---

## 🧩 Module 4: XML Data Types

- Text
- Numbers
- Boolean (as text)
- Nested elements

---

## 🧠 Module 5: XML Namespaces

Used to avoid name conflicts.

\`\`\`xml
<ns:student xmlns:ns="http://example.com/student">
  <ns:name>Alex</ns:name>
</ns:student>
\`\`\`

---

## 📂 Module 6: XML Comments & CDATA

### Comments
\`\`\`xml
<!-- This is a comment -->
\`\`\`

### CDATA
\`\`\`xml
<![CDATA[
  <data>Raw text</data>
]]>
\`\`\`

---

## 🔍 Module 7: XML Validation

### DTD (Document Type Definition)
### XSD (XML Schema Definition)

Used to **validate structure and data types**.

---

## 🔄 Module 8: XML Parsing (Preview)

XML can be parsed using:
- DOM Parser
- SAX Parser
- StAX Parser

Used in:
- Java
- Python
- JavaScript
- PHP

---

## 🚀 Real-World Applications

### 🌐 Web Services
- SOAP APIs
- Legacy integrations

### 📱 Mobile Apps
- Android UI layouts
- App configs

### ⚙ Enterprise Systems
- ERP systems
- Banking software
- Data exchange

---

## 💼 Companies Using XML

| Company | Usage |
|--------|--------|
| Google | Feeds & configs |
| Microsoft | Office files |
| Oracle | Enterprise systems |
| SAP | Business data |
| Android | UI layouts |

---

## 📊 XML vs JSON

| Feature | XML | JSON |
|------|-----|------|
| Readability | Medium | High |
| Size | Larger | Smaller |
| Validation | Strong (XSD) | Limited |
| Attributes | Yes | No |
| Enterprise Use | Very High | High |

---

## 🎯 Learning Outcomes

By the end:

✅ Understand XML syntax  
✅ Structure and store data  
✅ Validate XML documents  
✅ Read and write XML files  
✅ Work with enterprise systems  

---

## 📖 Practice Resources

- W3Schools XML
- XML Official Specs
- TutorialsPoint
- MDN Docs

---

## 🏆 Career Use

- Backend Developer
- Enterprise Software Engineer
- Integration Engineer
- Android Developer
- System Engineer

---

## 🎓 Next Steps

1️⃣ Learn JSON  
2️⃣ Learn XML Parsing in Java/Python  
3️⃣ Learn SOAP APIs  
4️⃣ Explore XSD deeply  

---

*Structure Your Data with XML 📄*
`,
    test: [
      {
        id: "xml-q1",
        question: "XML is mainly used for:",
        options: [
          "Styling web pages",
          "Displaying UI",
          "Storing and transporting data",
          "Game development",
        ],
        correctAnswer: 2,
        explanation: "XML is designed to store and transport structured data.",
      },
      {
        id: "xml-q2",
        question: "XML tags are:",
        options: [
          "Case insensitive",
          "Optional",
          "Case sensitive",
          "Auto-closed",
        ],
        correctAnswer: 2,
        explanation: "XML tags are case-sensitive.",
      },
      {
        id: "xml-q3",
        question: "Which is used to validate XML?",
        options: ["CSS", "XSD", "HTML", "JSON"],
        correctAnswer: 1,
        explanation: "XSD is used to validate XML structure and data.",
      },
    ],
  },
  {
    id: "numpy-beginner",
    url: "https://www.youtube.com/embed/QUT1VHiLmmI",
    title: "NumPy for Data Science & Scientific Computing",
    description:
      "Learn NumPy from scratch to perform fast numerical computations, array operations, and data processing essential for data science and machine learning.",
    language: "NumPy",
    difficulty: "beginner",
    duration: 8,
    thumbnail:
      "https://campus.w3schools.com/cdn/shop/files/NumPy_fe5df422-3ae0-4e82-883a-7a28c96bf25c_1078x1078.png?v=1764575945",
    instructor: "Dr. Alan Brooks",
    notes: `# NumPy for Data Science & Scientific Computing

## 🔢 Introduction to NumPy

NumPy (Numerical Python) is the **core library for numerical computing in Python**. It provides powerful tools to work with **arrays, matrices, mathematical functions, and linear algebra**, making it the foundation of data science, machine learning, AI, and scientific computing.

Most Python data libraries like **Pandas, Scikit-learn, TensorFlow, and PyTorch** are built on top of NumPy.

---

## 🌟 Why Learn NumPy?

| Feature | Description |
|-------|-------------|
| ⚡ High Performance | Faster than Python lists |
| 📦 N-Dimensional Arrays | Powerful ndarray structure |
| 🧮 Math & Linear Algebra | Built-in optimized functions |
| 🔬 Scientific Computing | Ideal for research & analytics |
| 🤖 ML & AI Foundation | Backbone of data libraries |

---

## 🧠 Where NumPy Is Used

- Data Science
- Machine Learning
- Artificial Intelligence
- Scientific Research
- Image Processing
- Financial Analysis
- Signal Processing

---

## 📚 What You Will Learn

---

## 🔰 Module 1: Getting Started with NumPy

- Installing NumPy
- Importing NumPy
- Understanding ndarray

\`\`\`python
import numpy as np
\`\`\`

---

## 📦 Module 2: NumPy Arrays

### Creating Arrays
\`\`\`python
import numpy as np

arr = np.array([1, 2, 3, 4])
print(arr)
\`\`\`

### Array Properties
- shape
- ndim
- size
- dtype

---

## 🔢 Module 3: Array Operations

NumPy supports **vectorized operations**.

\`\`\`python
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

print(a + b)
print(a * b)
\`\`\`

---

## 🧮 Module 4: Mathematical Functions

- sum()
- mean()
- median()
- min()
- max()
- std()

\`\`\`python
data = np.array([10, 20, 30])
print(np.mean(data))
\`\`\`

---

## 🧩 Module 5: Indexing & Slicing

\`\`\`python
arr = np.array([10, 20, 30, 40])
print(arr[1:3])
\`\`\`

Supports:
- Boolean indexing
- Fancy indexing

---

## 🔁 Module 6: Reshaping & Dimensions

\`\`\`python
arr = np.array([1,2,3,4,5,6])
reshaped = arr.reshape(2,3)
print(reshaped)
\`\`\`

Functions:
- reshape()
- flatten()
- ravel()
- transpose()

---

## 🧠 Module 7: Broadcasting

Allows operations on arrays of different shapes.

\`\`\`python
arr = np.array([1,2,3])
print(arr + 10)
\`\`\`

---

## 📐 Module 8: Linear Algebra Basics

- dot()
- matrix multiplication
- inverse
- determinant

\`\`\`python
a = np.array([[1,2],[3,4]])
b = np.array([[5,6],[7,8]])
print(np.dot(a, b))
\`\`\`

---

## 🚀 Real-World Applications

### 📊 Data Science
- Data cleaning
- Feature engineering
- Statistical analysis

### 🤖 Machine Learning
- Training datasets
- Numerical optimization

### 🔬 Scientific Computing
- Simulations
- Mathematical modeling

### 📈 Finance
- Risk analysis
- Time-series data

---

## 💼 Companies Using NumPy

| Company | Usage |
|--------|--------|
| Google | AI & ML |
| Netflix | Data analytics |
| Meta | Machine learning |
| NASA | Scientific research |
| Amazon | Forecasting systems |

---

## 📊 NumPy vs Python Lists

| Feature | NumPy | Python List |
|------|------|-------------|
| Speed | Very Fast | Slow |
| Memory | Efficient | High usage |
| Math Ops | Vectorized | Loop based |
| Dimensions | Multi-D | Single-D |

---

## 🎯 Learning Outcomes

By the end:

✅ Work with NumPy arrays confidently  
✅ Perform fast numerical operations  
✅ Manipulate multi-dimensional data  
✅ Build foundation for Pandas & ML  
✅ Write optimized numerical code  

---

## 📖 Practice Resources

- NumPy Official Docs
- Kaggle
- LeetCode
- DataCamp
- Real Python

---

## 🏆 Career Opportunities

- Data Analyst
- Data Scientist
- Machine Learning Engineer
- Research Engineer
- Quantitative Analyst

---

## 🎓 Next Steps

1️⃣ Learn Pandas  
2️⃣ Learn Matplotlib  
3️⃣ Start Machine Learning  
4️⃣ Explore Scikit-learn  

---

*Power Your Data with NumPy 🔢🚀*
`,
    test: [
      {
        id: "np-q1",
        question: "NumPy is mainly used for:",
        options: [
          "Web design",
          "Numerical and scientific computing",
          "Mobile UI",
          "Game engines",
        ],
        correctAnswer: 1,
        explanation:
          "NumPy is designed for fast numerical and scientific computations.",
      },
      {
        id: "np-q2",
        question: "Core data structure of NumPy is:",
        options: ["List", "Tuple", "ndarray", "Dictionary"],
        correctAnswer: 2,
        explanation: "ndarray is the core data structure in NumPy.",
      },
      {
        id: "np-q3",
        question: "NumPy operations are faster because they are:",
        options: ["Loop based", "Vectorized", "Interpreted", "Recursive"],
        correctAnswer: 1,
        explanation: "NumPy uses vectorized operations implemented in C.",
      },
      {
        id: "np-q4",
        question: "Which function reshapes an array?",
        options: ["resize()", "reshape()", "shape()", "convert()"],
        correctAnswer: 1,
        explanation: "reshape() changes the dimensions of an array.",
      },
      {
        id: "np-q5",
        question: "NumPy is the foundation of:",
        options: [
          "React",
          "Django",
          "Data science & ML libraries",
          "Game engines",
        ],
        correctAnswer: 2,
        explanation: "Most data science and ML libraries are built on NumPy.",
      },
    ],
  },
  {
    id: "pandas-beginner",
    url: "https://www.youtube.com/embed/vmEHCJofslg",
    title: "Pandas for Data Analysis",
    description:
      "Learn Pandas from scratch to clean, analyze, manipulate, and visualize structured data efficiently for data science and analytics.",
    language: "Pandas",
    difficulty: "beginner",
    duration: 9,
    thumbnail:
      "https://campus.w3schools.com/cdn/shop/files/Pandas_1078x1078.png?v=1764575937",
    instructor: "Dr. Lisa Morgan",
    notes: `# Pandas for Data Analysis

## 🐼 Introduction to Pandas

Pandas is a **powerful Python library for data analysis and manipulation**. It provides easy-to-use data structures like **Series** and **DataFrame**, making it simple to work with **tabular, time-series, and structured data**.

Pandas is widely used in **data science, analytics, finance, machine learning, and research** and is built on top of **NumPy**.

---

## 🌟 Why Learn Pandas?

| Feature | Description |
|-------|-------------|
| 📊 Tabular Data Handling | Work with rows & columns |
| ⚡ Fast Data Processing | Optimized with NumPy |
| 🧹 Data Cleaning | Handle missing & messy data |
| ⏱ Time-Series Support | Date & time operations |
| 📈 Data Analysis | Filtering, grouping, stats |

---

## 🧠 Where Pandas Is Used

- Data Analysis
- Data Science
- Machine Learning
- Business Analytics
- Finance & Trading
- Research & Statistics

---

## 📚 What You Will Learn

---

## 🔰 Module 1: Getting Started

- Installing Pandas
- Importing Pandas
- Understanding Series & DataFrame

\`\`\`python
import pandas as pd
\`\`\`

---

## 📦 Module 2: Series

\`\`\`python
s = pd.Series([10, 20, 30])
print(s)
\`\`\`

Properties:
- index
- values
- dtype

---

## 📊 Module 3: DataFrames

\`\`\`python
data = {
  "name": ["Alex", "Sam"],
  "age": [21, 22]
}
df = pd.DataFrame(data)
print(df)
\`\`\`

---

## 🔍 Module 4: Data Selection

- loc[]
- iloc[]
- Column selection

\`\`\`python
print(df["name"])
print(df.loc[0])
\`\`\`

---

## 🧹 Module 5: Data Cleaning

- Handling missing values
- dropna()
- fillna()

\`\`\`python
df.fillna(0, inplace=True)
\`\`\`

---

## 🔁 Module 6: Filtering & Sorting

\`\`\`python
df[df["age"] > 21]
df.sort_values("age")
\`\`\`

---

## 📐 Module 7: Grouping & Aggregation

\`\`\`python
df.groupby("age").count()
\`\`\`

Functions:
- sum()
- mean()
- count()
- max()

---

## ⏱ Module 8: Time Series Basics

\`\`\`python
df["date"] = pd.to_datetime(df["date"])
\`\`\`

---

## 📂 Module 9: Reading & Writing Data

Supported formats:
- CSV
- Excel
- JSON
- SQL

\`\`\`python
df = pd.read_csv("data.csv")
df.to_excel("data.xlsx")
\`\`\`

---

## 🚀 Real-World Applications

### 📊 Data Analytics
- Reports
- Dashboards
- KPI analysis

### 🤖 Machine Learning
- Feature engineering
- Data preprocessing

### 💰 Finance
- Stock data
- Time-series analysis

### 🧪 Research
- Experiment data
- Statistical studies

---

## 💼 Companies Using Pandas

| Company | Usage |
|--------|--------|
| Google | Analytics |
| Netflix | Recommendation systems |
| Meta | Data processing |
| Uber | Data pipelines |
| Airbnb | Business analytics |

---

## 📊 Pandas vs Excel

| Feature | Pandas | Excel |
|------|-------|-------|
| Automation | Yes | Limited |
| Large Data | Handles millions | Slow |
| Reproducibility | Code-based | Manual |
| Integration | Python ecosystem | Limited |

---

## 🎯 Learning Outcomes

By the end:

✅ Clean and analyze datasets  
✅ Manipulate DataFrames efficiently  
✅ Perform aggregations & filtering  
✅ Prepare data for ML models  
✅ Work with real-world datasets  

---

## 📖 Practice Resources

- Pandas Official Docs
- Kaggle Datasets
- LeetCode (Pandas)
- DataCamp
- Real Python

---

## 🏆 Career Opportunities

- Data Analyst
- Data Scientist
- Business Analyst
- ML Engineer
- Research Analyst

---

## 🎓 Next Steps

1️⃣ Learn NumPy deeply  
2️⃣ Learn Data Visualization  
3️⃣ Start Machine Learning  
4️⃣ Work on real datasets  

---

*Analyze Smarter with Pandas 🐼📊*
`,
    test: [
      {
        id: "pd-q1",
        question: "Pandas is mainly used for:",
        options: [
          "Game development",
          "Data analysis and manipulation",
          "UI design",
          "Mobile apps",
        ],
        correctAnswer: 1,
        explanation:
          "Pandas is designed for data analysis and structured data handling.",
      },
      {
        id: "pd-q2",
        question: "Which structure represents tabular data?",
        options: ["Series", "List", "DataFrame", "Tuple"],
        correctAnswer: 2,
        explanation: "DataFrame stores data in rows and columns.",
      },
      {
        id: "pd-q3",
        question: "Which function reads CSV files?",
        options: ["read()", "open()", "read_csv()", "load_csv()"],
        correctAnswer: 2,
        explanation: "read_csv() is used to load CSV data.",
      },
      {
        id: "pd-q4",
        question: "Which method removes missing values?",
        options: ["fillna()", "dropna()", "clean()", "remove()"],
        correctAnswer: 1,
        explanation: "dropna() removes rows with missing values.",
      },
      {
        id: "pd-q5",
        question: "Pandas is built on top of:",
        options: ["Java", "C++", "NumPy", "Rust"],
        correctAnswer: 2,
        explanation: "Pandas uses NumPy for efficient numerical operations.",
      },
    ],
  },
  {
    id: "dsa-beginner",
    url: "https://www.youtube.com/embed/8hly31xKli0",
    title: "Data Structures & Algorithms (DSA)",
    description:
      "Master Data Structures and Algorithms from scratch to build strong problem-solving skills, write optimized code, and crack technical interviews.",
    language: "DSA",
    difficulty: "beginner",
    duration: 18,
    thumbnail:
      "https://campus.w3schools.com/cdn/shop/files/DSA_ff1c775d-aa56-4287-a25c-76a42c19a67a_1078x1078.png?v=1764575760",
    instructor: "Rahul Verma",
    notes: `# Data Structures & Algorithms (DSA)

## 🧠 Introduction to DSA

Data Structures and Algorithms (DSA) form the **core foundation of computer science**. DSA teaches you **how data is stored, accessed, and processed efficiently**, and how to **solve problems optimally**.

Strong DSA skills are essential for:
- Software Engineering
- Competitive Programming
- Product-based company interviews
- Writing scalable and high-performance systems

---

## 🌟 Why Learn DSA?

| Feature | Description |
|-------|-------------|
| 🧩 Problem Solving | Think logically & analytically |
| ⚡ Optimized Code | Improve time & space efficiency |
| 🧠 Interview Essential | Asked in almost all tech interviews |
| 🏗 Strong Foundation | Core CS knowledge |
| 🚀 Career Growth | Required for top tech roles |

---

## 🧠 What DSA Teaches You

- How to break problems into steps
- How to choose the best approach
- How to analyze performance
- How to scale solutions

---

## 📚 What You Will Learn

---

## 🔰 Module 1: Introduction to Algorithms

- What is an algorithm?
- Characteristics of good algorithms
- Time Complexity
- Space Complexity
- Big-O Notation

### Example
\`\`\`
O(1), O(n), O(log n), O(n log n), O(n²)
\`\`\`

---

## 📦 Module 2: Arrays

- Static vs Dynamic Arrays
- Traversal
- Insertion & Deletion
- Searching

---

## 🔗 Module 3: Linked Lists

- Singly Linked List
- Doubly Linked List
- Circular Linked List
- Pointer manipulation

---

## 🧱 Module 4: Stacks

- LIFO principle
- Stack operations
- Applications:
  - Expression evaluation
  - Undo/Redo
  - Recursion

---

## 📬 Module 5: Queues

- FIFO principle
- Simple Queue
- Circular Queue
- Deque
- Priority Queue

---

## 🌳 Module 6: Trees

- Binary Tree
- Binary Search Tree (BST)
- Tree Traversals:
  - Inorder
  - Preorder
  - Postorder
- Height & Depth

---

## 🌲 Module 7: Heaps

- Min Heap
- Max Heap
- Heap operations
- Heap Sort

---

## 🔀 Module 8: Hashing

- Hash Tables
- Hash Functions
- Collision Handling
- Time complexity benefits

---

## 🧭 Module 9: Searching Algorithms

- Linear Search
- Binary Search
- Applications & comparisons

---

## 🔄 Module 10: Sorting Algorithms

- Bubble Sort
- Selection Sort
- Insertion Sort
- Merge Sort
- Quick Sort
- Time & space comparison

---

## 🧠 Module 11: Recursion

- Base case
- Recursive calls
- Call stack
- Backtracking basics

---

## 🧮 Module 12: Dynamic Programming (Intro)

- Overlapping subproblems
- Optimal substructure
- Memoization
- Tabulation

---

## 🕸 Module 13: Graphs (Intro)

- Graph representation
- BFS
- DFS
- Applications

---

## 🚀 Real-World Applications

### 🧠 Software Engineering
- Efficient backend systems
- Optimized APIs

### 🤖 Competitive Programming
- Fast problem solving

### 🌐 System Design
- Scalable architecture

### 💰 Finance & AI
- Optimization problems
- Graph-based models

---

## 💼 Companies That Test DSA

| Company | Importance |
|--------|------------|
| Google | Extremely High |
| Amazon | Extremely High |
| Microsoft | Very High |
| Meta | Very High |
| Apple | High |
| Netflix | High |

---

## 📊 Why DSA Matters More Than Languages

Languages change.  
Frameworks change.  
**DSA stays forever.**

---

## 🎯 Learning Outcomes

By the end of this course:

✅ Analyze time & space complexity  
✅ Choose optimal data structures  
✅ Solve real-world problems  
✅ Crack coding interviews  
✅ Build strong CS fundamentals  

---

## 📖 Practice Resources

- LeetCode
- CodeChef
- Codeforces
- GeeksForGeeks
- HackerRank

---

## 🏆 Career Opportunities

- Software Engineer
- Backend Developer
- SDE (Product Companies)
- Competitive Programmer
- Algorithm Engineer

---

## 🎓 Next Steps

1️⃣ Practice daily problems  
2️⃣ Learn Advanced DP  
3️⃣ Learn Graph Algorithms  
4️⃣ Mock Interviews  
5️⃣ Apply to product companies  

---

*Think Better. Code Faster. Master DSA 🧠🚀*
`,
    test: [
      {
        id: "dsa-q1",
        question: "DSA mainly helps in:",
        options: [
          "UI design",
          "Problem solving and optimization",
          "Graphic rendering",
          "Styling websites",
        ],
        correctAnswer: 1,
        explanation: "DSA improves problem-solving and optimized coding.",
      },
      {
        id: "dsa-q2",
        question: "Which notation is used to analyze algorithm performance?",
        options: ["HTML", "Big-O", "CSS", "JSON"],
        correctAnswer: 1,
        explanation: "Big-O notation measures time and space complexity.",
      },
      {
        id: "dsa-q3",
        question: "Which data structure follows LIFO?",
        options: ["Queue", "Stack", "Array", "Tree"],
        correctAnswer: 1,
        explanation: "Stack follows Last In First Out.",
      },
      {
        id: "dsa-q4",
        question: "Binary search works on:",
        options: [
          "Unsorted array",
          "Sorted array",
          "Linked list only",
          "Graphs only",
        ],
        correctAnswer: 1,
        explanation: "Binary search requires sorted data.",
      },
      {
        id: "dsa-q5",
        question: "Which is NOT a data structure?",
        options: ["Array", "Stack", "Loop", "Queue"],
        correctAnswer: 2,
        explanation: "Loop is a control structure, not a data structure.",
      },
    ],
  },
  {
    id: "git-beginner",
    url: "https://www.youtube.com/embed/RGOj5yH7evk",
    title: "Git & Version Control Essentials",
    description:
      "Learn Git from scratch to track code changes, collaborate with teams, manage versions, and work confidently with modern development workflows.",
    language: "Git",
    difficulty: "beginner",
    duration: 7,
    thumbnail:
      "https://campus.w3schools.com/cdn/shop/files/Git_d2b633bb-ca3e-43e5-8536-1e9f21546c7d_1078x1078.png?v=1764575706",
    instructor: "Chris Walker",
    notes: `# Git & Version Control Essentials

## 🔧 Introduction to Git

Git is a **distributed version control system** that helps developers **track changes in code**, collaborate with teams, and manage project history efficiently. Created by Linus Torvalds, Git is the backbone of modern software development.

Git is used everywhere:
- Open-source projects
- Company codebases
- Solo projects
- Large distributed teams

Git + GitHub/GitLab/Bitbucket = Modern Collaboration.

---

## 🌟 Why Learn Git?

| Feature | Description |
|-------|-------------|
| 🕒 Version History | Track every change |
| 🤝 Team Collaboration | Multiple developers, same code |
| 🔄 Easy Rollbacks | Revert mistakes safely |
| 🌍 Industry Standard | Used by all tech companies |
| 🚀 Faster Development | Parallel feature work |

---

## 🧠 What Git Solves

- Accidentally deleting code
- Overwriting teammate’s work
- Managing multiple features
- Tracking who changed what
- Maintaining stable releases

---

## 📚 What You Will Learn

---

## 🔰 Module 1: Getting Started with Git

- What is Version Control?
- Centralized vs Distributed VCS
- Installing Git
- Git configuration

\`\`\`bash
git --version
git config --global user.name "Your Name"
git config --global user.email "you@email.com"
\`\`\`

---

## 📁 Module 2: Git Repository Basics

- git init
- git status
- git add
- git commit

\`\`\`bash
git init
git add .
git commit -m "Initial commit"
\`\`\`

---

## 📦 Module 3: Tracking Changes

- Working directory
- Staging area
- Repository

\`\`\`bash
git status
git diff
git log
\`\`\`

---

## 🔁 Module 4: Branching

Branches allow parallel development.

\`\`\`bash
git branch feature-login
git checkout feature-login
\`\`\`

Why branches?
- New features
- Bug fixes
- Experiments

---

## 🔀 Module 5: Merging Branches

\`\`\`bash
git checkout main
git merge feature-login
\`\`\`

Types:
- Fast-forward
- Three-way merge

---

## ⚔ Module 6: Merge Conflicts

When Git can’t auto-merge changes.

Steps:
1. Open conflict file
2. Resolve manually
3. Add & commit

\`\`\`bash
git add .
git commit -m "Resolve conflict"
\`\`\`

---

## 🌐 Module 7: Remote Repositories

Work with GitHub/GitLab.

\`\`\`bash
git remote add origin URL
git push -u origin main
git pull origin main
\`\`\`

---

## 🔄 Module 8: Undoing Changes

- git checkout
- git reset
- git revert

\`\`\`bash
git reset --hard HEAD~1
\`\`\`

---

## 🏷 Module 9: Tags & Releases

\`\`\`bash
git tag v1.0
git push origin v1.0
\`\`\`

Used for:
- Releases
- Stable versions

---

## 🚀 Real-World Applications

### 👨‍💻 Development Teams
- Feature-based workflows
- Code reviews

### 🌍 Open Source
- Forks & pull requests

### 🏗 CI/CD
- Automated builds
- Deployment pipelines

---

## 💼 Companies Using Git

| Company | Usage |
|--------|--------|
| Google | Source control |
| Microsoft | GitHub |
| Meta | Large-scale repos |
| Netflix | Microservices |
| Amazon | DevOps workflows |

---

## 📊 Git vs Other VCS

| Feature | Git | SVN |
|-------|-----|-----|
| Distributed | Yes | No |
| Speed | Fast | Slower |
| Branching | Powerful | Limited |
| Offline Work | Yes | No |

---

## 🎯 Learning Outcomes

By the end:

✅ Track code changes confidently  
✅ Use branches & merges  
✅ Collaborate using GitHub  
✅ Fix mistakes safely  
✅ Work like a professional developer  

---

## 📖 Practice Resources

- Git Official Docs
- GitHub Learning Lab
- Atlassian Git Tutorials
- Learn Git Branching

---

## 🏆 Career Benefits

- Essential for all developers
- Required for internships & jobs
- Improves team productivity
- Industry-standard skill

---

## 🎓 Next Steps

1️⃣ Learn GitHub deeply  
2️⃣ Practice pull requests  
3️⃣ Learn rebasing  
4️⃣ Use Git daily  

---

*Version Your Code Like a Pro 🔧🚀*
`,
    test: [
      {
        id: "git-q1",
        question: "Git is mainly used for:",
        options: [
          "Designing UI",
          "Version control",
          "Running servers",
          "Styling web pages",
        ],
        correctAnswer: 1,
        explanation: "Git tracks changes and manages code versions.",
      },
      {
        id: "git-q2",
        question: "Which command creates a new repository?",
        options: ["git start", "git init", "git new", "git repo"],
        correctAnswer: 1,
        explanation: "git init initializes a new repository.",
      },
      {
        id: "git-q3",
        question: "Which command saves changes permanently?",
        options: ["git add", "git commit", "git push", "git status"],
        correctAnswer: 1,
        explanation: "git commit saves changes to the repository history.",
      },
      {
        id: "git-q4",
        question: "Branches are used to:",
        options: [
          "Delete code",
          "Run programs",
          "Work on features separately",
          "Compile projects",
        ],
        correctAnswer: 2,
        explanation: "Branches allow parallel feature development.",
      },
      {
        id: "git-q5",
        question: "Which platform is commonly used with Git?",
        options: ["Docker", "GitHub", "Figma", "Postman"],
        correctAnswer: 1,
        explanation: "GitHub hosts Git repositories for collaboration.",
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
