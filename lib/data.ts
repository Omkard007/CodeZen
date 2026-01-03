// Mock data for CodeZen platform - 10 programming language courses

export interface Lesson {
  id: string
  title: string
  duration: number // in minutes
  videoUrl: string
  notes: string
  codeExample: string
  language: string
}

export interface TestQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export interface Course {
  id: string
  title: string
  description: string
  language: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  duration: number // total hours
  thumbnail: string
  instructor: string
  lessons: Lesson[]
  test: TestQuestion[]
  totalLessons: number
}

export const COURSES: Course[] = [
  {
    id: 'python-beginner',
    title: 'Python Programming for Beginners',
    description: 'Master Python from scratch with hands-on examples and projects. Learn data types, control structures, functions, and OOP.',
    language: 'Python',
    difficulty: 'beginner',
    duration: 12,
    thumbnail: '/placeholder.svg?key=ld672',
    instructor: 'Dr. Sarah Chen',
    totalLessons: 15,
    lessons: [
      {
        id: 'py-1',
        title: 'Introduction to Python',
        duration: 25,
        videoUrl: 'https://www.youtube.com/embed/rfscVS0vtbw',
        notes: `# Introduction to Python

Python is a high-level, interpreted programming language known for its simplicity and readability. It's perfect for beginners and professionals alike.

## Why Learn Python?

- **Easy to Learn**: Clear and readable syntax
- **Versatile**: Web development, data science, automation, AI/ML
- **Large Community**: Extensive libraries and frameworks
- **High Demand**: One of the most sought-after skills in tech

## Your First Python Program

Let's start with the traditional "Hello, World!" program. This simple program displays text on the screen.

## Key Concepts

- **print()**: Built-in function to display output
- **Strings**: Text enclosed in quotes
- **Comments**: Lines starting with # are ignored by Python`,
        codeExample: `# Your first Python program
print("Hello, World!")

# Try printing your name
print("My name is CodeZen")

# You can print numbers too
print(2024)`,
        language: 'python'
      },
      {
        id: 'py-2',
        title: 'Variables and Data Types',
        duration: 30,
        videoUrl: 'https://www.youtube.com/embed/rfscVS0vtbw',
        notes: `# Variables and Data Types

Variables are containers for storing data values. Python has various data types to represent different kinds of information.

## Variable Assignment

You don't need to declare variable types in Python - it's dynamically typed!

## Common Data Types

- **int**: Integer numbers (1, 42, -5)
- **float**: Decimal numbers (3.14, -0.5)
- **str**: Strings/text ("hello")
- **bool**: Boolean (True, False)

## Type Conversion

You can convert between types using functions like int(), float(), str()`,
        codeExample: `# Variable assignment
name = "Alice"
age = 25
height = 5.6
is_student = True

# Print variables
print("Name:", name)
print("Age:", age)
print("Height:", height)
print("Student:", is_student)

# Type conversion
age_str = str(age)
print("Age as string:", age_str)`,
        language: 'python'
      },
      {
        id: 'py-3',
        title: 'Control Flow - If Statements',
        duration: 35,
        videoUrl: 'https://www.youtube.com/embed/rfscVS0vtbw',
        notes: `# Control Flow - If Statements

Control flow statements allow your program to make decisions and execute different code based on conditions.

## If Statement Syntax

Python uses indentation (4 spaces) to define code blocks.

## Comparison Operators

- == (equal to)
- != (not equal to)
- > (greater than)
- < (less than)
- >= (greater than or equal to)
- <= (less than or equal to)

## Logical Operators

- and: Both conditions must be true
- or: At least one condition must be true
- not: Negates the condition`,
        codeExample: `# If statement
age = 18

if age >= 18:
    print("You are an adult")
elif age >= 13:
    print("You are a teenager")
else:
    print("You are a child")

# Logical operators
score = 85
if score >= 90:
    print("Grade: A")
elif score >= 80 and score < 90:
    print("Grade: B")
else:
    print("Grade: C or below")`,
        language: 'python'
      }
    ],
    test: [
      {
        id: 'py-q1',
        question: 'What is the correct way to print "Hello" in Python?',
        options: ['echo("Hello")', 'print("Hello")', 'console.log("Hello")', 'printf("Hello")'],
        correctAnswer: 1,
        explanation: 'print() is the built-in function in Python used to display output to the console.'
      },
      {
        id: 'py-q2',
        question: 'Which of these is NOT a valid Python data type?',
        options: ['int', 'float', 'char', 'str'],
        correctAnswer: 2,
        explanation: 'Python does not have a char data type. Single characters are represented as strings.'
      },
      {
        id: 'py-q3',
        question: 'What does the == operator do in Python?',
        options: ['Assigns a value', 'Compares for equality', 'Adds two numbers', 'Concatenates strings'],
        correctAnswer: 1,
        explanation: 'The == operator is used to compare two values for equality. Use = for assignment.'
      }
    ]
  },
  {
    id: 'javascript-beginner',
    title: 'JavaScript Fundamentals',
    description: 'Learn modern JavaScript from basics to advanced concepts including ES6+ features, DOM manipulation, and async programming.',
    language: 'JavaScript',
    difficulty: 'beginner',
    duration: 14,
    thumbnail: '/placeholder.svg?key=h1qs8',
    instructor: 'Michael Rodriguez',
    totalLessons: 16,
    lessons: [
      {
        id: 'js-1',
        title: 'Getting Started with JavaScript',
        duration: 20,
        videoUrl: 'https://www.youtube.com/embed/W6NZfCO5SIk',
        notes: `# Getting Started with JavaScript

JavaScript is the programming language of the web. It makes websites interactive and dynamic.

## What Can JavaScript Do?

- **Manipulate HTML/CSS**: Change content and styles dynamically
- **Handle Events**: Respond to user actions (clicks, typing, etc.)
- **Communicate with Servers**: Fetch data without page reload
- **Build Applications**: From web apps to mobile apps and servers

## Your First JavaScript Program

JavaScript can be run in the browser console or in HTML files.

## Key Concepts

- **console.log()**: Display output in the browser console
- **Variables**: Store data with let, const, or var
- **Semicolons**: Optional but recommended for clarity`,
        codeExample: `// Your first JavaScript program
console.log("Hello, JavaScript!");

// Variables
let name = "CodeZen";
const year = 2024;

console.log("Welcome to " + name);
console.log("Year: " + year);

// Simple calculation
let x = 10;
let y = 5;
console.log("Sum:", x + y);`,
        language: 'javascript'
      },
      {
        id: 'js-2',
        title: 'Variables and Data Types',
        duration: 25,
        videoUrl: 'https://www.youtube.com/embed/W6NZfCO5SIk',
        notes: `# Variables and Data Types

JavaScript has several ways to declare variables and supports multiple data types.

## Variable Declaration

- **let**: Block-scoped, can be reassigned
- **const**: Block-scoped, cannot be reassigned
- **var**: Function-scoped (legacy, avoid in modern code)

## Primitive Data Types

- **Number**: 42, 3.14, -5
- **String**: "hello", 'world'
- **Boolean**: true, false
- **Undefined**: Variable declared but not assigned
- **Null**: Intentional absence of value

## Template Literals

Use backticks for multi-line strings and variable interpolation.`,
        codeExample: `// Variable declarations
let age = 25;
const name = "Alice";
var oldStyle = "avoid this";

// Data types
let number = 42;
let text = "Hello";
let isActive = true;
let notDefined;
let empty = null;

// Template literals
let greeting = \`Hello, \${name}! You are \${age} years old.\`;
console.log(greeting);

// Type checking
console.log(typeof number);  // "number"
console.log(typeof text);    // "string"`,
        language: 'javascript'
      },
      {
        id: 'js-3',
        title: 'Functions and Arrow Functions',
        duration: 30,
        videoUrl: 'https://www.youtube.com/embed/W6NZfCO5SIk',
        notes: `# Functions and Arrow Functions

Functions are reusable blocks of code that perform specific tasks.

## Function Declaration

Traditional way to define a function.

## Function Expression

Assigning a function to a variable.

## Arrow Functions (ES6+)

Shorter syntax for writing functions. Great for callbacks and simple operations.

## Parameters and Return Values

Functions can accept inputs (parameters) and return outputs.`,
        codeExample: `// Function declaration
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice"));

// Arrow function
const add = (a, b) => a + b;
console.log("Sum:", add(5, 3));

// Function with multiple statements
const calculateArea = (width, height) => {
  const area = width * height;
  return area;
};

console.log("Area:", calculateArea(5, 10));`,
        language: 'javascript'
      }
    ],
    test: [
      {
        id: 'js-q1',
        question: 'Which keyword should you use for a variable that won\'t be reassigned?',
        options: ['var', 'let', 'const', 'static'],
        correctAnswer: 2,
        explanation: 'const is used for variables that should not be reassigned after initialization.'
      },
      {
        id: 'js-q2',
        question: 'What is the output of: console.log(typeof "42")?',
        options: ['number', 'string', 'text', 'undefined'],
        correctAnswer: 1,
        explanation: 'The value "42" is wrapped in quotes, making it a string, not a number.'
      },
      {
        id: 'js-q3',
        question: 'Which is the correct arrow function syntax?',
        options: ['function => (x) { return x * 2 }', '(x) => { return x * 2 }', '(x) -> { return x * 2 }', '=> (x) { return x * 2 }'],
        correctAnswer: 1,
        explanation: 'Arrow functions use the syntax: (parameters) => { function body }'
      }
    ]
  },
  {
    id: 'java-beginner',
    title: 'Java Programming Essentials',
    description: 'Learn Java programming from ground up. Cover OOP principles, data structures, and build real-world applications.',
    language: 'Java',
    difficulty: 'beginner',
    duration: 16,
    thumbnail: '/placeholder.svg?key=r6sqa',
    instructor: 'Prof. David Kim',
    totalLessons: 18,
    lessons: [
      {
        id: 'java-1',
        title: 'Introduction to Java',
        duration: 30,
        videoUrl: 'https://www.youtube.com/embed/eIrMbAQSU34',
        notes: `# Introduction to Java

Java is a powerful, object-oriented programming language used for building enterprise applications, Android apps, and more.

## Why Learn Java?

- **Platform Independent**: Write once, run anywhere (WORA)
- **Object-Oriented**: Organize code with classes and objects
- **Robust**: Strong type checking and exception handling
- **Widely Used**: Enterprise applications, Android development

## Your First Java Program

Every Java program starts with a class and a main method.

## Key Concepts

- **class**: Blueprint for creating objects
- **public static void main**: Entry point of the program
- **System.out.println**: Print output to console`,
        codeExample: `// Your first Java program
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
        System.out.println("Welcome to CodeZen");
        
        // Simple calculation
        int x = 10;
        int y = 5;
        System.out.println("Sum: " + (x + y));
    }
}`,
        language: 'java'
      },
      {
        id: 'java-2',
        title: 'Variables and Data Types',
        duration: 35,
        videoUrl: 'https://www.youtube.com/embed/eIrMbAQSU34',
        notes: `# Variables and Data Types

Java is a statically-typed language, meaning you must declare variable types.

## Primitive Data Types

- **int**: Integer numbers (-2^31 to 2^31-1)
- **double**: Floating-point numbers
- **boolean**: true or false
- **char**: Single character ('A')
- **byte, short, long, float**: Other numeric types

## Variable Declaration

Always specify the type when declaring a variable.

## Naming Conventions

- Variables: camelCase (myVariable)
- Classes: PascalCase (MyClass)
- Constants: UPPER_SNAKE_CASE (MAX_VALUE)`,
        codeExample: `public class DataTypes {
    public static void main(String[] args) {
        // Variable declarations
        int age = 25;
        double price = 19.99;
        boolean isStudent = true;
        char grade = 'A';
        String name = "Alice";
        
        // Print variables
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Price: $" + price);
        System.out.println("Student: " + isStudent);
        System.out.println("Grade: " + grade);
    }
}`,
        language: 'java'
      }
    ],
    test: [
      {
        id: 'java-q1',
        question: 'What is the correct signature for the main method in Java?',
        options: ['public void main(String[] args)', 'public static void main(String[] args)', 'static void main(String args)', 'public main(String[] args)'],
        correctAnswer: 1,
        explanation: 'The main method must be public static void main(String[] args) to be recognized as the entry point.'
      },
      {
        id: 'java-q2',
        question: 'Which data type would you use for storing a decimal number?',
        options: ['int', 'double', 'boolean', 'char'],
        correctAnswer: 1,
        explanation: 'double is used for floating-point numbers with decimal places.'
      }
    ]
  },
  {
    id: 'cpp-beginner',
    title: 'C++ Programming Basics',
    description: 'Master C++ fundamentals including pointers, memory management, STL, and object-oriented programming concepts.',
    language: 'C++',
    difficulty: 'beginner',
    duration: 15,
    thumbnail: '/placeholder.svg?key=ox15q',
    instructor: 'Dr. Emily Watson',
    totalLessons: 17,
    lessons: [
      {
        id: 'cpp-1',
        title: 'Getting Started with C++',
        duration: 28,
        videoUrl: 'https://www.youtube.com/embed/vLnPwxZdW4Y',
        notes: `# Getting Started with C++

C++ is a powerful, high-performance language used for system software, game development, and applications requiring speed.

## Why Learn C++?

- **High Performance**: Close to hardware, fast execution
- **Control**: Direct memory management
- **Versatile**: Games, operating systems, embedded systems
- **Foundation**: Understanding C++ helps learn other languages

## Your First C++ Program

C++ programs consist of functions, with main() being the entry point.

## Key Concepts

- **#include**: Import libraries
- **iostream**: Input/output stream library
- **std::cout**: Print to console
- **std::endl**: End line/newline`,
        codeExample: `#include <iostream>

int main() {
    std::cout << "Hello, C++!" << std::endl;
    std::cout << "Welcome to CodeZen" << std::endl;
    
    // Simple calculation
    int x = 10;
    int y = 5;
    std::cout << "Sum: " << (x + y) << std::endl;
    
    return 0;
}`,
        language: 'cpp'
      }
    ],
    test: [
      {
        id: 'cpp-q1',
        question: 'What is the purpose of #include <iostream>?',
        options: ['To include input/output functionality', 'To declare the main function', 'To end the program', 'To define variables'],
        correctAnswer: 0,
        explanation: '#include <iostream> imports the input/output stream library, allowing use of cout and cin.'
      }
    ]
  },
  {
    id: 'c-beginner',
    title: 'C Programming Foundation',
    description: 'Learn C programming language fundamentals including pointers, arrays, functions, and memory management.',
    language: 'C',
    difficulty: 'beginner',
    duration: 13,
    thumbnail: '/placeholder.svg?key=rypdo',
    instructor: 'Prof. Robert Johnson',
    totalLessons: 14,
    lessons: [
      {
        id: 'c-1',
        title: 'Introduction to C',
        duration: 25,
        videoUrl: 'https://www.youtube.com/embed/KJgsSFOSQv0',
        notes: `# Introduction to C

C is a foundational programming language known for its efficiency and low-level control.

## Why Learn C?

- **Foundation**: Many languages are based on C
- **System Programming**: Operating systems, embedded systems
- **Performance**: Fast and efficient
- **Understanding**: Learn how computers work at a low level

## Your First C Program

Every C program must have a main() function.`,
        codeExample: `#include <stdio.h>

int main() {
    printf("Hello, C!\\n");
    printf("Welcome to CodeZen\\n");
    
    // Simple calculation
    int x = 10;
    int y = 5;
    printf("Sum: %d\\n", x + y);
    
    return 0;
}`,
        language: 'c'
      }
    ],
    test: [
      {
        id: 'c-q1',
        question: 'Which function is used to print output in C?',
        options: ['print()', 'printf()', 'cout', 'echo'],
        correctAnswer: 1,
        explanation: 'printf() is the standard function for formatted output in C.'
      }
    ]
  },
  {
    id: 'ruby-beginner',
    title: 'Ruby Programming Basics',
    description: 'Discover Ruby\'s elegant syntax and learn web development with Rails, testing, and object-oriented design.',
    language: 'Ruby',
    difficulty: 'beginner',
    duration: 11,
    thumbnail: '/placeholder.svg?key=kvhij',
    instructor: 'Jessica Martinez',
    totalLessons: 12,
    lessons: [
      {
        id: 'ruby-1',
        title: 'Welcome to Ruby',
        duration: 22,
        videoUrl: 'https://www.youtube.com/embed/t_ispmWmdjY',
        notes: `# Welcome to Ruby

Ruby is a dynamic, object-oriented language known for its elegant and readable syntax.

## Why Learn Ruby?

- **Readable**: Code that reads like English
- **Rails Framework**: Build web applications quickly
- **Productive**: Get more done with less code
- **Community**: Friendly and helpful community

## Your First Ruby Program

Ruby programs are simple and expressive.`,
        codeExample: `# Your first Ruby program
puts "Hello, Ruby!"
puts "Welcome to CodeZen"

# Variables
name = "Alice"
age = 25

puts "Name: #{name}"
puts "Age: #{age}"

# Simple calculation
x = 10
y = 5
puts "Sum: #{x + y}"`,
        language: 'ruby'
      }
    ],
    test: [
      {
        id: 'ruby-q1',
        question: 'Which method is used to print output in Ruby?',
        options: ['print', 'puts', 'console.log', 'printf'],
        correctAnswer: 1,
        explanation: 'puts is the standard method to print output with a newline in Ruby.'
      }
    ]
  },
  {
    id: 'go-beginner',
    title: 'Go Programming Essentials',
    description: 'Learn Go (Golang) for building scalable applications, microservices, and concurrent systems.',
    language: 'Go',
    difficulty: 'beginner',
    duration: 12,
    thumbnail: '/placeholder.svg?key=415ai',
    instructor: 'Alex Thompson',
    totalLessons: 13,
    lessons: [
      {
        id: 'go-1',
        title: 'Introduction to Go',
        duration: 24,
        videoUrl: 'https://www.youtube.com/embed/YS4e4q9oBaU',
        notes: `# Introduction to Go

Go (Golang) is a modern programming language designed for simplicity, efficiency, and concurrent programming.

## Why Learn Go?

- **Fast**: Compiled language with excellent performance
- **Simple**: Clean syntax, easy to learn
- **Concurrent**: Built-in support for concurrent programming
- **Modern**: Designed for cloud and microservices

## Your First Go Program

Go programs start with package declarations and a main function.`,
        codeExample: `package main

import "fmt"

func main() {
    fmt.Println("Hello, Go!")
    fmt.Println("Welcome to CodeZen")
    
    // Variables
    name := "Alice"
    age := 25
    
    fmt.Printf("Name: %s\\n", name)
    fmt.Printf("Age: %d\\n", age)
    
    // Simple calculation
    x := 10
    y := 5
    fmt.Printf("Sum: %d\\n", x + y)
}`,
        language: 'go'
      }
    ],
    test: [
      {
        id: 'go-q1',
        question: 'What package must every Go program include?',
        options: ['package main', 'import main', 'class main', 'module main'],
        correctAnswer: 0,
        explanation: 'Every executable Go program must be in package main and have a main() function.'
      }
    ]
  },
  {
    id: 'php-beginner',
    title: 'PHP Web Development',
    description: 'Learn PHP for server-side web development including forms, databases, sessions, and modern frameworks.',
    language: 'PHP',
    difficulty: 'beginner',
    duration: 13,
    thumbnail: '/placeholder.svg?key=hbmnz',
    instructor: 'Marco Rossi',
    totalLessons: 14,
    lessons: [
      {
        id: 'php-1',
        title: 'Getting Started with PHP',
        duration: 23,
        videoUrl: 'https://www.youtube.com/embed/OK_JCtrrv-c',
        notes: `# Getting Started with PHP

PHP is a popular server-side scripting language used for web development.

## Why Learn PHP?

- **Web Development**: Powers 78% of websites
- **Easy to Learn**: Simple syntax for beginners
- **Powerful**: Build dynamic websites and APIs
- **Community**: Large ecosystem of frameworks and tools

## Your First PHP Program

PHP code is embedded in HTML files and executed on the server.`,
        codeExample: `<?php
// Your first PHP program
echo "Hello, PHP!\\n";
echo "Welcome to CodeZen\\n";

// Variables
$name = "Alice";
$age = 25;

echo "Name: $name\\n";
echo "Age: $age\\n";

// Simple calculation
$x = 10;
$y = 5;
echo "Sum: " . ($x + $y) . "\\n";
?>`,
        language: 'php'
      }
    ],
    test: [
      {
        id: 'php-q1',
        question: 'How do you start a PHP code block?',
        options: ['<php>', '<?php', '{php}', '<%php%>'],
        correctAnswer: 1,
        explanation: 'PHP code blocks start with <?php and end with ?>'
      }
    ]
  },
  {
    id: 'swift-beginner',
    title: 'Swift Programming for iOS',
    description: 'Learn Swift for iOS and macOS development including SwiftUI, protocols, and app architecture.',
    language: 'Swift',
    difficulty: 'beginner',
    duration: 14,
    thumbnail: '/placeholder.svg?key=lfl1r',
    instructor: 'Emma Williams',
    totalLessons: 15,
    lessons: [
      {
        id: 'swift-1',
        title: 'Introduction to Swift',
        duration: 26,
        videoUrl: 'https://www.youtube.com/embed/comQ1-x2a1Q',
        notes: `# Introduction to Swift

Swift is Apple's modern programming language for iOS, macOS, watchOS, and tvOS development.

## Why Learn Swift?

- **Modern**: Clean, safe, and expressive syntax
- **Fast**: High-performance compiled language
- **iOS Development**: Build apps for Apple devices
- **Growing**: Expanding beyond Apple ecosystem

## Your First Swift Program

Swift programs can run in playgrounds or as part of apps.`,
        codeExample: `import Foundation

// Your first Swift program
print("Hello, Swift!")
print("Welcome to CodeZen")

// Variables
let name = "Alice"  // constant
var age = 25        // variable

print("Name: \\(name)")
print("Age: \\(age)")

// Simple calculation
let x = 10
let y = 5
print("Sum: \\(x + y)")`,
        language: 'swift'
      }
    ],
    test: [
      {
        id: 'swift-q1',
        question: 'What is the difference between let and var in Swift?',
        options: ['No difference', 'let is constant, var is variable', 'var is constant, let is variable', 'let is for strings only'],
        correctAnswer: 1,
        explanation: 'let declares a constant (immutable), while var declares a variable (mutable).'
      }
    ]
  },
  {
    id: 'rust-beginner',
    title: 'Rust Programming Fundamentals',
    description: 'Master Rust for systems programming with focus on memory safety, ownership, and concurrent programming.',
    language: 'Rust',
    difficulty: 'beginner',
    duration: 15,
    thumbnail: '/placeholder.svg?key=0kef0',
    instructor: 'Dr. Thomas Anderson',
    totalLessons: 16,
    lessons: [
      {
        id: 'rust-1',
        title: 'Getting Started with Rust',
        duration: 27,
        videoUrl: 'https://www.youtube.com/embed/BpPEoZW5IiY',
        notes: `# Getting Started with Rust

Rust is a systems programming language focused on safety, speed, and concurrency.

## Why Learn Rust?

- **Memory Safety**: No null pointers or data races
- **Performance**: As fast as C/C++
- **Modern**: Great tooling and package management
- **Growing**: Increasingly popular for systems programming

## Your First Rust Program

Rust programs start with a main function and use macros for common operations.`,
        codeExample: `fn main() {
    // Your first Rust program
    println!("Hello, Rust!");
    println!("Welcome to CodeZen");
    
    // Variables
    let name = "Alice";
    let age = 25;
    
    println!("Name: {}", name);
    println!("Age: {}", age);
    
    // Simple calculation
    let x = 10;
    let y = 5;
    println!("Sum: {}", x + y);
}`,
        language: 'rust'
      }
    ],
    test: [
      {
        id: 'rust-q1',
        question: 'What makes Rust unique compared to C/C++?',
        options: ['Faster execution', 'Memory safety without garbage collection', 'Easier syntax', 'Better for web development'],
        correctAnswer: 1,
        explanation: 'Rust provides memory safety guarantees at compile time without needing a garbage collector.'
      }
    ]
  }
]

// Language configurations for the compiler
export const LANGUAGE_CONFIGS = {
  python: { id: 'python', name: 'Python', extension: '.py', boilerplate: '# Write your Python code here\nprint("Hello, World!")' },
  javascript: { id: 'javascript', name: 'JavaScript', extension: '.js', boilerplate: '// Write your JavaScript code here\nconsole.log("Hello, World!");' },
  java: { id: 'java', name: 'Java', extension: '.java', boilerplate: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}' },
  cpp: { id: 'cpp', name: 'C++', extension: '.cpp', boilerplate: '#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}' },
  c: { id: 'c', name: 'C', extension: '.c', boilerplate: '#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}' },
  ruby: { id: 'ruby', name: 'Ruby', extension: '.rb', boilerplate: '# Write your Ruby code here\nputs "Hello, World!"' },
  go: { id: 'go', name: 'Go', extension: '.go', boilerplate: 'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello, World!")\n}' },
  php: { id: 'php', name: 'PHP', extension: '.php', boilerplate: '<?php\n// Write your PHP code here\necho "Hello, World!\\n";\n?>' },
  swift: { id: 'swift', name: 'Swift', extension: '.swift', boilerplate: 'import Foundation\n\n// Write your Swift code here\nprint("Hello, World!")' },
  rust: { id: 'rust', name: 'Rust', extension: '.rs', boilerplate: 'fn main() {\n    // Write your Rust code here\n    println!("Hello, World!");\n}' },
}

// Mock user progress data
export interface UserProgress {
  courseId: string
  completedLessons: string[]
  testScore?: number
  certificateIssued: boolean
  lastAccessed: string
}

export interface User {
  id: string
  name: string
  email: string
  enrolledCourses: string[]
  progress: UserProgress[]
  totalCertificates: number
  streak: number
}
