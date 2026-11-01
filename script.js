"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const languages = [
    {
      id: "html", name: "HTML", logo: "5", category: "web", categoryName: "Web development",
      level: "Beginner", time: "2–4 hours", color: "orange",
      description: "Build the structure of websites with headings, links, images, forms, and semantic page elements.",
      lesson: `DETAILED NOTES: HTML ELEMENTS, TEXT, ATTRIBUTES, AND FORMS

1. What HTML does
HTML (HyperText Markup Language) describes the meaning and structure of web content. It is not a programming language: it marks up headings, paragraphs, links, images, lists, tables, and forms. Browsers parse the HTML and build a Document Object Model (DOM) that CSS and JavaScript can work with.

2. Elements and tags
Most elements have an opening tag, content, and a closing tag, such as <p>Hello</p>. Some elements, such as <img> and <br>, are void elements and do not have closing tags. Nest elements correctly: close the inner element before closing the outer element. Use lowercase tag names consistently.

3. Text and strings in HTML
Text between tags is displayed as page content. HTML is not a place to declare programming variables or data types; those concepts belong to JavaScript or the server-side language. Special characters can be represented with character references, for example &amp; for &, &lt; for <, and &gt; for >. Use semantic elements such as <strong> and <em> when the meaning matters, not just for visual appearance.

4. Attributes
Attributes provide extra information inside an opening tag. For example, href on an anchor identifies the destination, src on an image identifies the image file, and alt provides alternative text. Quote attribute values. Use unique id values and reusable class names. Avoid putting sensitive information in HTML because anything sent to the browser can be viewed by the visitor.

5. Links, images, and lists
Use <a href="about.html">About</a> for navigation. Images should have meaningful alt text when they convey information; decorative images can use alt="". Use <ul> for an unordered list and <ol> for a sequence. Use headings in a logical hierarchy rather than choosing a heading only because of its default size.

6. Forms and data
Forms collect user input. Associate each <label> with an input using matching for and id values. Choose suitable input types such as email, number, date, or password. The required attribute can help browser validation, but the server must validate input again. Never trust browser validation alone.

7. Safe and accessible HTML
Use semantic landmarks such as <header>, <nav>, <main>, and <footer>. Make controls usable with a keyboard and give buttons clear names. Do not insert untrusted user input as raw HTML. Escape data on the server and use safe DOM APIs in JavaScript.

PRACTICE
Build a profile page with a heading, paragraph, image with alt text, a list of interests, two navigation links, and a form with a labelled name field and submit button. Check that the document has one clear main heading and that all form controls have labels.
\n\nLEVELLED LEARNING PATH\n\nBEGINNER — Core skills\n• Rebuild the example without copying, then explain every line in your own words.\n• Add validation and clear error or empty states.\n• Submit a short note describing inputs, outputs, and one limitation.\n\nINTERMEDIATE — Combine concepts\n• Split the solution into small reusable functions/components.\n• Add search/filter/sort or equivalent data processing.\n• Persist data or read a structured data source where the language supports it.\n• Test at least five normal and edge cases.\n\nADVANCED — Project challenge\n• PROJECT: Build a multi-page student portal with semantic landmarks, accessible navigation, a registration form, validation attributes, a timetable table, and a reusable component structure. Test keyboard-only navigation and meaningful alt text.\n\nADVANCED CHECKLIST\n• Separate responsibilities instead of placing everything in one block.\n• Validate untrusted input and handle failure paths.\n• Document design choices and trade-offs.\n• Include at least five tests, including boundary cases.\n• Review readability, performance, accessibility or safety where relevant.`,
      code: '<h1>Hello, world!</h1>\\n<p>My first webpage.</p>',
      tip: "Create a page about your favourite book using a heading, paragraph, image, and link."
    },
    {
      id: "css", name: "CSS", logo: "CSS", category: "web", categoryName: "Web development",
      level: "Beginner", time: "3–5 hours", color: "blue",
      description: "Style webpages with colours, layouts, typography, responsive designs, and animations.",
      lesson: `DETAILED NOTES: CSS VALUES, UNITS, SELECTORS, AND THE BOX MODEL

1. CSS basics
A CSS rule consists of a selector and declarations. The selector identifies elements; each declaration contains a property and value. Example: p { color: navy; }. CSS controls presentation while HTML supplies structure.

2. Data types and values in CSS
CSS has several kinds of values. Keywords include auto and none. Lengths include px, em, rem, vw, and vh. Percentages depend on the relevant containing size or property rules. Colours can be written as names, hexadecimal values, rgb(), or hsl(). Numbers may be unitless for properties such as line-height or opacity. Functions include calc(), min(), max(), and clamp().

3. Strings in CSS
Strings are text values written in single or double quotes, for example content: "New"; or font-family: "Open Sans", sans-serif;. The content property is commonly used with pseudo-elements, not as a replacement for meaningful HTML content. If a font name contains spaces, quote the name.

4. Selectors and cascade
Element selectors target tags, class selectors begin with a dot, and ID selectors begin with #. Descendant selectors target nested elements. Pseudo-classes such as :hover and :focus describe states. If multiple rules apply, cascade origin, importance, specificity, and source order determine the result. Prefer simple reusable classes over overly specific selectors.

5. Box model
Every element has content, padding, border, and margin. With content-box sizing, declared width applies to the content area; border-box includes padding and border in the declared width. Many sites use * { box-sizing: border-box; } to make layout calculations easier. Padding adds internal space; margin adds external space.

6. Layout and responsive design
Flexbox arranges items along one main axis. Grid supports rows and columns. Use media queries to adapt layouts to smaller screens. Relative units such as rem, %, and fr can help content scale. Avoid fixed widths that force horizontal scrolling on phones.

7. Accessibility and debugging
Maintain readable contrast, visible keyboard focus, and comfortable line spacing. Use browser developer tools to inspect computed styles and identify which rule wins. Test at multiple widths.

PRACTICE
Create a card with a heading, paragraph, and button. Give it padding, border, rounded corners, and a shadow. Use Flexbox to align two cards, then add a media query that stacks them on narrow screens.
\n\nLEVELLED LEARNING PATH\n\nBEGINNER — Core skills\n• Rebuild the example without copying, then explain every line in your own words.\n• Add validation and clear error or empty states.\n• Submit a short note describing inputs, outputs, and one limitation.\n\nINTERMEDIATE — Combine concepts\n• Split the solution into small reusable functions/components.\n• Add search/filter/sort or equivalent data processing.\n• Persist data or read a structured data source where the language supports it.\n• Test at least five normal and edge cases.\n\nADVANCED — Project challenge\n• PROJECT: Build a responsive admin dashboard using CSS Grid for the page shell, Flexbox for toolbars, clamp() typography, custom properties, dark-mode variables, focus states, and breakpoints at 900px and 600px. Avoid horizontal overflow.\n\nADVANCED CHECKLIST\n• Separate responsibilities instead of placing everything in one block.\n• Validate untrusted input and handle failure paths.\n• Document design choices and trade-offs.\n• Include at least five tests, including boundary cases.\n• Review readability, performance, accessibility or safety where relevant.`,
      code: 'h1 {\\n  color: rebeccapurple;\\n  font-size: 2rem;\\n}',
      tip: "Style your HTML page and make it look good on both a phone and a computer."
    },
    {
      id: "javascript", name: "JavaScript", logo: "JS", category: "web", categoryName: "Web development",
      level: "Beginner", time: "8–12 hours", color: "orange",
      description: "Make websites interactive with events, functions, variables, and dynamic content.",
      lesson: `DETAILED NOTES: DATA TYPES, STRINGS, VARIABLES, AND FUNCTIONS

1. Variables: let and const
Use const when a variable binding will not be reassigned and let when it will. Avoid var in new code unless you need to understand older examples. A const object or array can still have its contents changed; const prevents reassignment of the binding, not deep mutation.

2. Primitive data types
JavaScript primitives include string, number, bigint, boolean, undefined, symbol, and null. Numbers represent integers and decimals, though they use floating-point representation. typeof null returns "object" for historical reasons. Use Number.isNaN() when you need to check for NaN.

3. Strings
Strings store text and can use single quotes, double quotes, or backticks. Backticks create template literals, which can interpolate expressions: \`Hello, \${name}\`. Common properties and methods include length, toUpperCase(), toLowerCase(), includes(), slice(), and trim(). Strings are immutable: methods return new strings instead of changing the original.

4. Arrays and objects
Arrays store ordered values, such as [10, 20, 30]. Common methods include push(), map(), filter(), and find(). Objects store named properties, such as { name: "Ama", age: 20 }. Use dot notation for known property names and bracket notation when the key is dynamic. JSON is a text format for exchanging data; JSON.parse() reads JSON and JSON.stringify() creates JSON text.

5. Conversion and comparisons
Input from prompt() and many HTML form controls arrives as text. Convert deliberately with Number(), parseInt(), or parseFloat(), and check that conversion succeeded. The === operator compares without automatic type coercion and is usually preferred to ==. A value can be truthy or falsy; examples of falsy values include false, 0, "", null, undefined, and NaN.

6. Conditions, loops, and functions
Use if/else or switch to branch. Use for, while, or for...of to repeat actions. Functions group reusable work. Parameters receive inputs and return sends a result back. Arrow functions are compact function expressions. Keep functions small and give them descriptive names.

7. DOM, events, and safety
Select page elements with querySelector(), and respond to actions with addEventListener(). Use textContent to display plain text from users. Avoid inserting untrusted text through innerHTML because it can create cross-site scripting risks. Validate data, handle errors, and read the browser console when something fails.

PRACTICE
Write a function that accepts a person's name and age, returns a greeting string, and checks whether the age is a valid positive number. Make a button display the result on the page using textContent.
\n\nLEVELLED LEARNING PATH\n\nBEGINNER — Core skills\n• Rebuild the example without copying, then explain every line in your own words.\n• Add validation and clear error or empty states.\n• Submit a short note describing inputs, outputs, and one limitation.\n\nINTERMEDIATE — Combine concepts\n• Split the solution into small reusable functions/components.\n• Add search/filter/sort or equivalent data processing.\n• Persist data or read a structured data source where the language supports it.\n• Test at least five normal and edge cases.\n\nADVANCED — Project challenge\n• PROJECT: Build a task manager with create/edit/delete, priority and due date, search, filters, localStorage persistence, empty states, form validation, and unit-testable pure functions. Handle malformed stored JSON safely.\n\nADVANCED CHECKLIST\n• Separate responsibilities instead of placing everything in one block.\n• Validate untrusted input and handle failure paths.\n• Document design choices and trade-offs.\n• Include at least five tests, including boundary cases.\n• Review readability, performance, accessibility or safety where relevant.`,
      code: 'const greeting = "Hello!";\\nconsole.log(greeting);',
      tip: "Make a button that changes a message when a visitor clicks it."
    },
    {
      id: "typescript", name: "TypeScript", logo: "TS", category: "web", categoryName: "Web development",
      level: "Intermediate", time: "6–10 hours", color: "blue",
      description: "Add static types to JavaScript to help catch mistakes and maintain larger applications.",
      lesson: `DETAILED NOTES: TYPES, STRINGS, ARRAYS, OBJECTS, AND FUNCTIONS

1. What TypeScript adds
TypeScript is JavaScript with static type checking and additional type syntax. It is usually compiled into JavaScript. Types help during development, but most type annotations are removed from the emitted JavaScript and do not validate data at runtime.

2. Basic types
Common types include string, number, boolean, null, undefined, unknown, never, and object. TypeScript generally infers a variable's type from its initial value. Use annotations when they improve clarity or when a function's public contract should be explicit. Avoid any when possible because it disables useful checking.

3. Strings and template literals
Use string for text. JavaScript string methods such as trim(), includes(), and toUpperCase() also work in TypeScript. Backtick template literals allow interpolation: \`Welcome, \${userName}\`. The compiler can check that a variable used in a string expression has a valid type, but it does not automatically clean HTML or validate external data.

4. Arrays and object shapes
Use string[] or Array<string> for an array of strings. A type alias or interface can describe an object, for example type Learner = { name: string; age: number }. Optional properties use ?, and readonly can communicate that a property should not be reassigned through that type. Union types such as string | number represent more than one allowed type.

5. Functions and narrowing
Declare parameter and return types when useful: function add(a: number, b: number): number. TypeScript checks the values passed to the function. Narrowing uses checks such as typeof value === "string" to learn more about a union value. For external data, use unknown and validate before treating it as a trusted shape.

6. Generics and interfaces
Generics allow reusable code to preserve type information, such as a function that works with arrays of different element types. Interfaces and type aliases both describe shapes; interfaces can be extended, while type aliases are flexible for unions and other compositions. Learn these after becoming comfortable with basic annotations.

7. Runtime validation
A type declaration does not guarantee that a server response or form value is valid. Check values at runtime, handle missing fields, and do not assume a cast changes the underlying data.

PRACTICE
Define a Learner type with name, age, and optional email. Write a function that accepts a Learner and returns a greeting. Then write a safe function that accepts unknown data and checks its fields before using them.
\n\nLEVELLED LEARNING PATH\n\nBEGINNER — Core skills\n• Rebuild the example without copying, then explain every line in your own words.\n• Add validation and clear error or empty states.\n• Submit a short note describing inputs, outputs, and one limitation.\n\nINTERMEDIATE — Combine concepts\n• Split the solution into small reusable functions/components.\n• Add search/filter/sort or equivalent data processing.\n• Persist data or read a structured data source where the language supports it.\n• Test at least five normal and edge cases.\n\nADVANCED — Project challenge\n• PROJECT: Refactor a task manager into typed models, discriminated unions for UI states, generic repository interfaces, strict null checks, async API errors, and typed validation results. Explain where runtime validation is still needed.\n\nADVANCED CHECKLIST\n• Separate responsibilities instead of placing everything in one block.\n• Validate untrusted input and handle failure paths.\n• Document design choices and trade-offs.\n• Include at least five tests, including boundary cases.\n• Review readability, performance, accessibility or safety where relevant.`,
      code: 'let username: string = "Ama";\\nlet lessonsCompleted: number = 3;',
      tip: "Convert a small JavaScript function to TypeScript and add parameter and return types."
    },
    {
      id: "python", name: "Python", logo: "Py", category: "data", categoryName: "Data & AI",
      level: "Beginner", time: "8–12 hours", color: "blue",
      description: "Start with readable code, then explore automation, data analysis, AI, and web backends.",
      lesson: `DETAILED NOTES: DATA TYPES, STRINGS, COLLECTIONS, AND FUNCTIONS

1. Variables and dynamic typing
Python variables refer to objects; you do not normally declare a variable's type first. Assign a value with =, such as age = 18. Use descriptive names and follow the usual snake_case style for variables and functions. Python is dynamically typed, but type hints can document expected values and help tools analyse code.

2. Basic data types
int represents whole numbers, float represents decimal numbers, bool is True or False, and str represents text. None represents the absence of a value. Use type(value) to inspect an object's type while learning. Convert carefully with int(), float(), and str(); conversion can fail if the input is not valid.

3. Strings
Strings can use single or double quotes. Triple quotes can represent multiline strings. Strings are immutable. Useful methods include strip(), lower(), upper(), replace(), startswith(), and split(). Use f-strings to insert values into text, such as f"Hello, {name}". Indexing starts at zero and negative indexes count from the end. Slicing uses a start and stop position, with the stop excluded.

4. Collections
A list is ordered and mutable: [1, 2, 3]. A tuple is ordered and generally used for fixed groups of values. A set stores unique values. A dictionary maps keys to values, for example {"name": "Ama", "age": 20}. Learn membership checks with in, iteration with for, and common operations such as append(), get(), keys(), and items().

5. Conditions, loops, and functions
Indentation defines code blocks. Use if/elif/else for decisions and for or while loops for repetition. Define a function with def. Parameters are inputs, and return sends a result back. A function without an explicit return returns None. Use docstrings to explain a function's purpose.

6. Errors and files
Exceptions such as ValueError and FileNotFoundError indicate problems. Use try/except only when you can handle the error meaningfully. Use with open(...) to work with files so they are closed reliably. When processing user input, validate it before using it in calculations or file paths.

7. Practice project
Build a score tracker that asks for several scores, converts them to numbers, stores them in a list, and calculates count, total, average, highest, and lowest. Handle empty input and invalid numbers gracefully. Then extend it to store learner names and scores in dictionaries.
\n\nLEVELLED LEARNING PATH\n\nBEGINNER — Core skills\n• Rebuild the example without copying, then explain every line in your own words.\n• Add validation and clear error or empty states.\n• Submit a short note describing inputs, outputs, and one limitation.\n\nINTERMEDIATE — Combine concepts\n• Split the solution into small reusable functions/components.\n• Add search/filter/sort or equivalent data processing.\n• Persist data or read a structured data source where the language supports it.\n• Test at least five normal and edge cases.\n\nADVANCED — Project challenge\n• PROJECT: Build a command-line gradebook with CSV import/export, weighted averages, validation, duplicate-student detection, sorting, search, and unit tests. Separate input/output from business logic and handle missing or malformed files.\n\nADVANCED CHECKLIST\n• Separate responsibilities instead of placing everything in one block.\n• Validate untrusted input and handle failure paths.\n• Document design choices and trade-offs.\n• Include at least five tests, including boundary cases.\n• Review readability, performance, accessibility or safety where relevant.`,
      code: 'name = "Kofi"\\nprint(f"Hello, {name}!")',
      tip: "Write a programme that asks for a name and prints a personalised greeting."
    },
    {
      id: "sql", name: "SQL", logo: "SQL", category: "data", categoryName: "Data & AI",
      level: "Beginner", time: "4–7 hours", color: "green",
      description: "Query and organise information stored in relational databases using structured queries.",
      lesson: `DETAILED NOTES: DATA TYPES, TEXT, NULL, FILTERS, AND JOINS

1. Tables and data types
A relational database stores data in tables. A row is a record and a column describes one field. Common SQL types include integer types, decimal/numeric types, date/time types, boolean types where supported, and character types such as CHAR and VARCHAR. Exact type names and behaviour vary between database systems.

2. Strings and text
Text is commonly stored in VARCHAR or TEXT columns, depending on the database. String literals are usually written in single quotes, such as 'Ghana'. Escape rules differ by database, so use parameters in application code rather than manually constructing query strings. Functions such as LOWER(), UPPER(), TRIM(), and CONCAT() may help process text, with some differences across systems.

3. NULL and comparisons
NULL represents a missing or unknown value; it is not the same as zero or an empty string. Use IS NULL or IS NOT NULL to test for it, not = NULL. SQL uses three-valued logic, so comparisons involving NULL may produce UNKNOWN. COALESCE() can provide a fallback value where appropriate.

4. Query basics
SELECT chooses columns and FROM names the table. WHERE filters rows. ORDER BY sorts results. DISTINCT removes duplicate result rows. Use AND, OR, and NOT to combine conditions. LIKE supports pattern matching, with % representing any sequence and _ representing one character in many SQL systems.

5. Aggregation and joins
COUNT(), SUM(), AVG(), MIN(), and MAX() calculate summaries. GROUP BY groups rows for aggregation, and HAVING filters the groups. JOIN combines related tables. An INNER JOIN returns matching rows; a LEFT JOIN keeps every row from the left table even when no match exists on the right.

6. Changing data safely
INSERT adds rows; UPDATE changes existing rows; DELETE removes rows. Always verify the target rows before an UPDATE or DELETE and use transactions when appropriate. In applications, use parameterised queries to protect against SQL injection. Give database users only the permissions they need.

PRACTICE
Create a courses table with id, title, category, and price. Insert sample rows, select courses in one category, search titles with LIKE, count courses per category, and practise a LEFT JOIN with a learner-enrolment table.
\n\nLEVELLED LEARNING PATH\n\nBEGINNER — Core skills\n• Rebuild the example without copying, then explain every line in your own words.\n• Add validation and clear error or empty states.\n• Submit a short note describing inputs, outputs, and one limitation.\n\nINTERMEDIATE — Combine concepts\n• Split the solution into small reusable functions/components.\n• Add search/filter/sort or equivalent data processing.\n• Persist data or read a structured data source where the language supports it.\n• Test at least five normal and edge cases.\n\nADVANCED — Project challenge\n• PROJECT: Design a school database with students, classes, enrollments, and assessments. Add primary/foreign keys, constraints, sample data, JOIN reports, GROUP BY summaries, a transaction that rolls back on error, and indexes justified by query patterns.\n\nADVANCED CHECKLIST\n• Separate responsibilities instead of placing everything in one block.\n• Validate untrusted input and handle failure paths.\n• Document design choices and trade-offs.\n• Include at least five tests, including boundary cases.\n• Review readability, performance, accessibility or safety where relevant.`,
      code: 'SELECT name, country\\nFROM learners\\nWHERE country = \'Ghana\';',
      tip: "Practise querying a sample table and filtering results by a category."
    },
    {
      id: "r", name: "R", logo: "R", category: "data", categoryName: "Data & AI",
      level: "Intermediate", time: "6–10 hours", color: "blue",
      description: "Analyse datasets, create statistics, and build visualisations for research and reporting.",
      lesson: `DETAILED NOTES: DATA TYPES, STRINGS, VECTORS, DATA FRAMES, AND FUNCTIONS

1. Basic values and assignment
R has values such as numeric, integer, character, logical, and complex. Missing values are represented by NA. Use <- for assignment, and use meaningful object names. R may automatically convert mixed values in a vector to a common type, so inspect the result when combining different types.

2. Character strings
Character values hold text and are written in quotes, such as "Ghana" or 'Accra'. Useful functions include nchar() to count characters, paste() and paste0() to combine text, substr() to extract parts, and trimws() to remove surrounding whitespace. Unlike many other languages, R uses vectorised operations: a function can often work on a whole vector of strings at once.

3. Vectors and logical values
A vector contains values of one basic type. c() combines values, length() counts elements, and indexing starts at 1. Logical comparisons such as x > 10 create TRUE/FALSE values that can filter a vector. Use is.na() to find missing values; comparisons with NA may themselves return NA.

4. Data frames and lists
A data frame is a table whose columns can have different types. A list can contain different kinds of objects, including vectors and data frames. Inspect data with str(), head(), summary(), and names(). Select columns and filter rows carefully, and check that columns have the types you expect.

5. Functions and packages
Create a function with function(arguments) { ... }. Functions can return a result, often using the final expression or an explicit return(). Packages add functions and datasets; install them when needed and load them with library(). Keep project scripts reproducible by documenting package dependencies.

6. Summaries and plots
Use mean(), median(), sd(), and table() to summarise data. Some summary functions need na.rm = TRUE to ignore missing values, but first understand whether missingness affects the analysis. Make plots with clear labels and choose a visual that answers the question. Statistical output still needs interpretation and context.

PRACTICE
Create a vector of exam scores, calculate the mean while handling missing values, create a data frame of names and scores, filter scores above a threshold, and plot the scores. Explain what the chart shows and what it does not show.
\n\nLEVELLED LEARNING PATH\n\nBEGINNER — Core skills\n• Rebuild the example without copying, then explain every line in your own words.\n• Add validation and clear error or empty states.\n• Submit a short note describing inputs, outputs, and one limitation.\n\nINTERMEDIATE — Combine concepts\n• Split the solution into small reusable functions/components.\n• Add search/filter/sort or equivalent data processing.\n• Persist data or read a structured data source where the language supports it.\n• Test at least five normal and edge cases.\n\nADVANCED — Project challenge\n• PROJECT: Analyze a messy student-performance dataset: inspect missingness, clean types, create grouped summaries, visualize distributions, compare groups cautiously, and write a reproducible report with assumptions and limitations.\n\nADVANCED CHECKLIST\n• Separate responsibilities instead of placing everything in one block.\n• Validate untrusted input and handle failure paths.\n• Document design choices and trade-offs.\n• Include at least five tests, including boundary cases.\n• Review readability, performance, accessibility or safety where relevant.`,
      code: 'scores <- c(70, 82, 91)\\nmean(scores)',
      tip: "Create a vector of sample scores and calculate the mean and median."
    },
    {
      id: "kotlin", name: "Kotlin", logo: "Kt", category: "mobile", categoryName: "Mobile apps",
      level: "Intermediate", time: "10–15 hours", color: "pink",
      description: "Build modern Android applications with concise syntax and helpful type-safety features.",
      lesson: `DETAILED NOTES: TYPES, STRINGS, NULL SAFETY, COLLECTIONS, AND FUNCTIONS

1. Variables and basic types
Use val for a binding that cannot be reassigned and var when reassignment is needed. Common types include Int, Long, Double, Float, Boolean, Char, and String. Kotlin often infers the type from the assigned value. Explicit type annotations can help when the type is not obvious.

2. Strings and characters
String stores text, while Char stores one character. String templates use a dollar sign, such as "Hello, $name" or "Total: \${price * quantity}". Strings are immutable. Common operations include length, uppercase(), lowercase(), trim(), and contains(). Kotlin strings are Unicode text, so do not assume every visible symbol is exactly one simple character.

3. Null safety
A type such as String is non-null by default; String? can hold null. Safe calls use ?. and the Elvis operator ?: provides a fallback. For example, val length = name?.length ?: 0. The non-null assertion !! can crash if the value is null, so avoid it unless you can prove the value is present.

4. Collections
List represents an ordered collection, Set stores unique values, and Map stores key-value pairs. Kotlin distinguishes read-only collection interfaces from mutable ones such as MutableList. Use loops and functions such as map(), filter(), and firstOrNull() to transform or inspect collections.

5. Functions and classes
Declare functions with fun, parameters in parentheses, and a return type after a colon. Classes describe objects; data class is convenient for values such as a Learner(name, score). when expressions support multi-branch decisions. Learn scope, visibility, and object construction as your projects grow.

6. Android context
For Android apps, understand the Activity or Compose lifecycle, state, permissions, accessibility, and data persistence. Do not store secrets in source code. Handle errors and empty states in the interface, and test on different screen sizes.

PRACTICE
Create a data class for a learner, store several learners in a list, filter passing scores, and safely display an optional nickname. Then build a small Android screen that accepts a name and displays a greeting.
\n\nLEVELLED LEARNING PATH\n\nBEGINNER — Core skills\n• Rebuild the example without copying, then explain every line in your own words.\n• Add validation and clear error or empty states.\n• Submit a short note describing inputs, outputs, and one limitation.\n\nINTERMEDIATE — Combine concepts\n• Split the solution into small reusable functions/components.\n• Add search/filter/sort or equivalent data processing.\n• Persist data or read a structured data source where the language supports it.\n• Test at least five normal and edge cases.\n\nADVANCED — Project challenge\n• PROJECT: Create a Kotlin console inventory manager using data classes, sealed result types, collection operations, input validation, exception-safe file persistence, and tests for stock updates and invalid quantities.\n\nADVANCED CHECKLIST\n• Separate responsibilities instead of placing everything in one block.\n• Validate untrusted input and handle failure paths.\n• Document design choices and trade-offs.\n• Include at least five tests, including boundary cases.\n• Review readability, performance, accessibility or safety where relevant.`,
      code: 'fun main() {\\n    val appName = "My App"\\n    println(appName)\\n}',
      tip: "Build a simple list of tasks and practise adding and removing items."
    },
    {
      id: "swift", name: "Swift", logo: "Sw", category: "mobile", categoryName: "Mobile apps",
      level: "Intermediate", time: "10–15 hours", color: "orange",
      description: "Learn the language commonly used to build apps for Apple platforms.",
      lesson: `DETAILED NOTES: TYPES, STRINGS, OPTIONAlS, COLLECTIONS, AND FUNCTIONS

1. Variables and types
Use let for constants and var for values that may change. Common Swift types include String, Int, Double, Float, and Bool. Swift uses type inference, but explicit types can make code easier to understand. Swift is strongly typed, so values of different types are not automatically interchangeable in every context.

2. Strings
String represents text, and Character represents a single extended grapheme cluster. String interpolation uses backslashes and parentheses, such as "Hello, \\(name)" or "Total: \\(price * quantity)". Strings are values and can be combined with +, but interpolation is often clearer. Common operations include isEmpty, contains(), lowercased(), uppercased(), and trimming whitespace with appropriate Foundation APIs.

3. Optionals
An optional type, such as String?, represents either a value or nil. Use if let or guard let to safely unwrap a value. Optional chaining uses ?. and the nil-coalescing operator ?? supplies a default. Avoid force unwrapping with ! unless you are certain the optional cannot be nil, because it can cause a runtime crash.

4. Collections
Array stores ordered values, Set stores unique values, and Dictionary maps keys to values. Use let for collections that should not be reassigned; whether their contents can change also depends on value mutability and how they are declared. Learn loops and methods such as map, filter, and first(where:).

5. Functions and structs
Declare functions with func, parameter names, and a return type after ->. Structs are useful for representing values, while classes support reference semantics and inheritance. Enums represent a fixed set of cases. Swift's switch statement must handle all cases unless a default branch is provided.

6. SwiftUI basics
SwiftUI builds interfaces from views. State lets a view update when data changes. Learn layout containers, buttons, text fields, accessibility labels, and how to handle loading and error states. Never hard-code passwords or private API keys into an app.

PRACTICE
Write a function that calculates a bill total, use an optional discount safely, and store items in an array. Then create a SwiftUI view with a text field and a button that greets the entered name.
\n\nLEVELLED LEARNING PATH\n\nBEGINNER — Core skills\n• Rebuild the example without copying, then explain every line in your own words.\n• Add validation and clear error or empty states.\n• Submit a short note describing inputs, outputs, and one limitation.\n\nINTERMEDIATE — Combine concepts\n• Split the solution into small reusable functions/components.\n• Add search/filter/sort or equivalent data processing.\n• Persist data or read a structured data source where the language supports it.\n• Test at least five normal and edge cases.\n\nADVANCED — Project challenge\n• PROJECT: Build a Swift student planner using structs, enums, protocols, Codable persistence, sorting/filtering, safe optional handling, and unit tests. Separate model logic from UI-facing code.\n\nADVANCED CHECKLIST\n• Separate responsibilities instead of placing everything in one block.\n• Validate untrusted input and handle failure paths.\n• Document design choices and trade-offs.\n• Include at least five tests, including boundary cases.\n• Review readability, performance, accessibility or safety where relevant.`,
      code: 'let greeting = "Hello, Swift!"\\nprint(greeting)',
      tip: "Practise variables and conditions, then explore SwiftUI for interface building."
    },
    {
      id: "java", name: "Java", logo: "Jv", category: "systems", categoryName: "Systems & games",
      level: "Beginner", time: "10–15 hours", color: "orange",
      description: "Learn object-oriented programming and build applications that run on the Java platform.",
      lesson: `DETAILED NOTES: PRIMITIVE TYPES, STRINGS, ARRAYS, CLASSES, AND METHODS

1. Variables and primitive types
Java requires variables to have declared types. Primitive types include byte, short, int, long, float, double, char, and boolean. String is not a primitive; it is a class. Choose a type appropriate to the range and precision of the data. Local variables should be initialised before use.

2. Strings
String stores text and is immutable: operations such as toUpperCase(), trim(), replace(), and substring() return a string result rather than changing the original. Join text with + or use formatted output when suitable. Compare string content with equals(), not ==, because == checks whether references point to the same object. Use equalsIgnoreCase() for case-insensitive comparisons when appropriate.

3. Conversion and input
Parsing methods such as Integer.parseInt() and Double.parseDouble() convert text to numeric values and can throw NumberFormatException for invalid input. Scanner can read console input. Validate user input and handle conversion errors rather than assuming every entry is valid.

4. Arrays and collections
Arrays have a fixed length and use indexes starting at zero. ArrayList is a resizable collection. Generics such as ArrayList<String> tell the compiler what type of values the collection should hold. Use loops and enhanced for loops to process collections. Maps store key-value pairs.

5. Methods and classes
Methods define reusable behaviour and can accept parameters and return a value. A method with return type void does not return a result. Classes define fields, constructors, and methods. Encapsulation means controlling access to internal state, often with private fields and public methods or properties-like accessors.

6. Conditions, errors, and debugging
Use if/else, switch, for, while, and try/catch. Exceptions should be handled where you can respond meaningfully. Read stack traces to identify the failing line. Write unit tests for important logic and avoid catching broad exceptions without a plan.

PRACTICE
Build a program that asks for three scores, parses them as numbers, calculates the average, and prints a grade. Handle invalid input, then represent a learner with a class and store several learners in an ArrayList.
\n\nLEVELLED LEARNING PATH\n\nBEGINNER — Core skills\n• Rebuild the example without copying, then explain every line in your own words.\n• Add validation and clear error or empty states.\n• Submit a short note describing inputs, outputs, and one limitation.\n\nINTERMEDIATE — Combine concepts\n• Split the solution into small reusable functions/components.\n• Add search/filter/sort or equivalent data processing.\n• Persist data or read a structured data source where the language supports it.\n• Test at least five normal and edge cases.\n\nADVANCED — Project challenge\n• PROJECT: Build a library lending system with classes, interfaces, collections, custom exceptions, search, overdue calculations, file persistence, and JUnit tests. Explain encapsulation and avoid one giant main method.\n\nADVANCED CHECKLIST\n• Separate responsibilities instead of placing everything in one block.\n• Validate untrusted input and handle failure paths.\n• Document design choices and trade-offs.\n• Include at least five tests, including boundary cases.\n• Review readability, performance, accessibility or safety where relevant.`,
      code: 'class Main {\\n  public static void main(String[] args) {\\n    System.out.println("Hello!");\\n  }\\n}',
      tip: "Create a calculator that adds, subtracts, multiplies, and divides two numbers."
    },
    {
      id: "cpp", name: "C++", logo: "C++", category: "systems", categoryName: "Systems & games",
      level: "Intermediate", time: "12–18 hours", color: "blue",
      description: "Explore performance-focused programming used in games, desktop software, and systems.",
      lesson: `DETAILED NOTES: TYPES, STRINGS, VECTORS, FUNCTIONS, AND MEMORY

1. Variables and fundamental types
C++ has types such as int, long long, float, double, char, and bool. Use std::string for text. Initialise variables before use and select types based on the range and precision needed. auto can infer a type from an initial value, but use it where the type remains clear.

2. Strings
Include the <string> header and use std::string for ordinary text. You can join strings with + and read a line using std::getline(std::cin, name). Common operations include size(), empty(), find(), and substr(). Be aware that mixing operator>> input with getline() can leave a newline in the input buffer; handle that deliberately.

3. Arrays, vectors, and containers
A built-in array has a fixed size. std::vector is a resizable container and is often a good default for a sequence. Use .size() to get the number of elements and index with [] only when you know the index is valid. Standard containers and algorithms can make code simpler and safer than manual memory management.

4. Functions and classes
Functions accept parameters and may return values. Use references when appropriate to avoid copying large objects, and const references when a function should not modify an object. Classes combine data and behaviour. Constructors initialise objects, and access modifiers such as public and private control visibility.

5. Pointers, references, and resource safety
A pointer stores an address and can be null; a reference is an alias to an existing object. Invalid pointers and out-of-range access can cause undefined behaviour. Prefer standard library types such as std::string and std::vector, and learn smart pointers such as std::unique_ptr before using raw owning pointers.

6. Compile and debug
Compile with warnings enabled and read them carefully. Use a debugger to inspect variables and step through code. Write small tests for functions. Keep input validation separate from calculations so errors are easier to find.

PRACTICE
Write a program that reads a name and three scores, stores the scores in a vector, calculates the average, and prints a result. Add a function for the average and test it with an empty vector and normal values.
\n\nLEVELLED LEARNING PATH\n\nBEGINNER — Core skills\n• Rebuild the example without copying, then explain every line in your own words.\n• Add validation and clear error or empty states.\n• Submit a short note describing inputs, outputs, and one limitation.\n\nINTERMEDIATE — Combine concepts\n• Split the solution into small reusable functions/components.\n• Add search/filter/sort or equivalent data processing.\n• Persist data or read a structured data source where the language supports it.\n• Test at least five normal and edge cases.\n\nADVANCED — Project challenge\n• PROJECT: Build a menu-driven inventory manager using structs/classes, vectors, maps, references, const correctness, file persistence, input recovery, and tests for add/update/remove/search. Explain ownership and bounds safety.\n\nADVANCED CHECKLIST\n• Separate responsibilities instead of placing everything in one block.\n• Validate untrusted input and handle failure paths.\n• Document design choices and trade-offs.\n• Include at least five tests, including boundary cases.\n• Review readability, performance, accessibility or safety where relevant.`,
      code: '#include <iostream>\\nint main() {\\n  std::cout << "Hello!";\\n  return 0;\\n}',
      tip: "Start with variables and loops, then build a number-guessing game."
    },
    {
      id: "csharp", name: "C#", logo: "C#", category: "systems", categoryName: "Systems & games",
      level: "Beginner", time: "9–14 hours", color: "green",
      description: "Build desktop applications, web services, and games using the .NET ecosystem.",
      lesson: `DETAILED NOTES: VALUE TYPES, STRINGS, COLLECTIONS, AND METHODS

1. Variables and types
C# includes types such as int, long, double, decimal, bool, char, and string. Use decimal for many financial calculations where decimal precision is preferable, while double is common for scientific calculations. The var keyword lets the compiler infer a local variable's type; it does not make that variable dynamically typed.

2. Strings
string stores text and is immutable. Common methods include Trim(), ToUpper(), ToLower(), Contains(), and Replace(). String interpolation uses a dollar sign before the quoted string, such as $"Hello, {name}". Use StringComparison options when you need predictable case-insensitive comparisons. Validate and encode untrusted text before displaying it in HTML.

3. Nullable values and conversion
A nullable value type such as int? can hold a number or null. Nullable reference types can help identify places where a string might be missing. Convert input carefully with int.TryParse() or double.TryParse() rather than assuming parsing will succeed. The TryParse pattern returns a success flag and an output value.

4. Arrays and collections
Arrays have fixed length. List<T> stores a resizable sequence, and Dictionary<TKey, TValue> stores key-value pairs. Generic type parameters help the compiler catch mismatched values. LINQ methods such as Where(), Select(), and OrderBy() can filter, transform, and sort data; learn the basic loops first so the operations are clear.

5. Methods and classes
Methods group reusable logic and may return values. Classes model reference types, while structs are value types suited to some small data models. Properties provide a clear way to expose state. Interfaces describe capabilities that different classes can implement.

6. Errors, async, and projects
Use try/catch when you can recover from an exception or add useful context. Async and await help with I/O operations without blocking in the usual way. Keep configuration and secrets out of source control, and write tests for important logic.

PRACTICE
Ask the user for three scores, parse each with TryParse, store valid scores in a List<double>, and calculate an average only if the list is not empty. Then create a Learner class and sort a list of learners by score.
\n\nLEVELLED LEARNING PATH\n\nBEGINNER — Core skills\n• Rebuild the example without copying, then explain every line in your own words.\n• Add validation and clear error or empty states.\n• Submit a short note describing inputs, outputs, and one limitation.\n\nINTERMEDIATE — Combine concepts\n• Split the solution into small reusable functions/components.\n• Add search/filter/sort or equivalent data processing.\n• Persist data or read a structured data source where the language supports it.\n• Test at least five normal and edge cases.\n\nADVANCED — Project challenge\n• PROJECT: Build a C# expense tracker using records/classes, LINQ reports, nullable reference types, async file I/O, dependency-injected services, validation, and unit tests for monthly totals and edge cases.\n\nADVANCED CHECKLIST\n• Separate responsibilities instead of placing everything in one block.\n• Validate untrusted input and handle failure paths.\n• Document design choices and trade-offs.\n• Include at least five tests, including boundary cases.\n• Review readability, performance, accessibility or safety where relevant.`,
      code: 'string name = "Amina";\\nConsole.WriteLine($"Hello, {name}!");',
      tip: "Try building a quiz app, then explore C# with the Unity game engine."
    },
    {
      id: "go", name: "Go", logo: "Go", category: "systems", categoryName: "Systems & games",
      level: "Intermediate", time: "7–11 hours", color: "green",
      description: "Create efficient backend services and command-line tools with a straightforward language.",
      lesson: `DETAILED NOTES: TYPES, STRINGS, SLICES, MAPS, AND FUNCTIONS

1. Variables and basic types
Go uses static types. Common types include int, int64, float64, bool, and string. Use := for short variable declarations inside functions and var for explicit declarations. Constants use const. Go does not silently convert between all numeric types; use explicit conversions where needed.

2. Strings and runes
A string is an immutable sequence of bytes, usually containing UTF-8 text. len(s) counts bytes, not necessarily visible characters. A rune represents a Unicode code point. Use range to iterate over a string by rune, and learn that some visible symbols may be made from multiple code points. The strings package provides functions such as TrimSpace(), ToUpper(), Contains(), and Split().

3. Arrays, slices, and maps
An array has a fixed length. A slice is a flexible view over an underlying array and is commonly used for lists of values. append() adds elements and may allocate a new underlying array. A map stores key-value pairs; check the second return value when you need to know whether a key exists. Map iteration order is not guaranteed.

4. Functions and errors
Functions are declared with func and can return multiple values. A common pattern is returning a result and an error. Check errors explicitly with if err != nil and return or handle them. Avoid ignoring errors without a reason. Named return values exist, but ordinary explicit returns are often clearer for beginners.

5. Structs and pointers
A struct groups named fields into a data type. Methods can be associated with a type. A pointer refers to a value's address; the zero value of a pointer is nil. Use pointers when mutation or avoiding copies makes sense, and check for nil when necessary.

6. Packages, tests, and concurrency
Packages organise code, and exported names begin with capital letters. gofmt formats source code. The testing package supports unit tests. Goroutines and channels help coordinate concurrent work, but learn ordinary functions, slices, maps, and error handling first.

PRACTICE
Write a function that accepts a slice of scores and returns the average plus an error when the slice is empty. Count words in a sentence with a map, test the function, and handle invalid input before converting it to numbers.
\n\nLEVELLED LEARNING PATH\n\nBEGINNER — Core skills\n• Rebuild the example without copying, then explain every line in your own words.\n• Add validation and clear error or empty states.\n• Submit a short note describing inputs, outputs, and one limitation.\n\nINTERMEDIATE — Combine concepts\n• Split the solution into small reusable functions/components.\n• Add search/filter/sort or equivalent data processing.\n• Persist data or read a structured data source where the language supports it.\n• Test at least five normal and edge cases.\n\nADVANCED — Project challenge\n• PROJECT: Build a concurrent URL status checker with context cancellation, bounded goroutines, timeouts, structured results, error handling, and tests. Explain race conditions and why concurrency must be limited.\n\nADVANCED CHECKLIST\n• Separate responsibilities instead of placing everything in one block.\n• Validate untrusted input and handle failure paths.\n• Document design choices and trade-offs.\n• Include at least five tests, including boundary cases.\n• Review readability, performance, accessibility or safety where relevant.`,
      code: 'package main\\nimport "fmt"\\nfunc main() {\\n  fmt.Println("Hello, Go!")\\n}',
      tip: "Write a small command-line tool that converts temperatures."
    }
  ];

  const grid = document.getElementById("languageGrid");
  const search = document.getElementById("languageSearch");
  const categoryGrid = document.getElementById("categoryGrid");
  const resultCount = document.getElementById("resultCount");
  const languageHeading = document.getElementById("languageHeading");
  const emptyState = document.getElementById("emptyState");
  const dialog = document.getElementById("lessonDialog");
  const toast = document.getElementById("toast");

  let activeCategory = "all";
  let activeLanguage = null;
  let toastTimer;

  // Progress is a convenience feature, not a security-sensitive record.
  const STORAGE_KEY = "codepath.completedLessons";
  function readProgress() {
    try {
      const value = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      return Array.isArray(value)
        ? value.filter(id => languages.some(language => language.id === id))
        : [];
    } catch {
      return [];
    }
  }

  let completed = readProgress();

  function saveProgress() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
    } catch {
      showToast("Progress could not be saved in this browser.");
    }
    updateProgressText();
  }

  function updateProgressText() {
    document.getElementById("heroProgress").textContent =
      `${completed.length} lesson${completed.length === 1 ? "" : "s"} completed`;
  }

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[char]);
  }

  function renderLanguages() {
    const query = search.value.trim().toLowerCase();

    const filtered = languages.filter(language => {
      const matchesCategory = activeCategory === "all" || language.category === activeCategory;
      const searchable = `${language.name} ${language.description} ${language.categoryName} ${language.level}`.toLowerCase();
      return matchesCategory && searchable.includes(query);
    });
    ```javascript
(function () {
    "use strict";

    // Check whether the current connection is HTTP
    if (window.location.protocol === "http:") {

        // Build the secure HTTPS URL
        const secureURL = new URL(window.location.href);

        secureURL.protocol = "https:";

        // Redirect the visitor to HTTPS
        window.location.replace(secureURL.href);
    }
})();



    resultCount.textContent = `Showing ${filtered.length} of ${languages.length} languages`;
    languageHeading.textContent = activeCategory === "all"
      ? "Popular languages"
      : categoryGrid.querySelector(`[data-category="${activeCategory}"] strong`).textContent;

    emptyState.hidden = filtered.length !== 0;

    // All interpolated language data is local, predefined content.
    grid.innerHTML = filtered.map(language => {
      const done = completed.includes(language.id);
      return `
        <article class="language-card">
          <img class="language-art" src="images/${language.category === "web" ? "web-development" : language.category === "data" ? "data-ai" : language.category === "mobile" ? "mobile-apps" : "systems-games"}.svg" alt="${escapeHTML(language.categoryName)} illustration" loading="lazy">
          <div class="language-top">
            <div class="language-logo ${language.color}">${escapeHTML(language.logo)}</div>
            <span class="level ${language.level.toLowerCase()}">${escapeHTML(language.level)}</span>
          </div>
          <h3>${escapeHTML(language.name)}</h3>
          <p>${escapeHTML(language.description)}</p>
          <div class="card-footer">
            <span>◷ ${escapeHTML(language.time)} · ${done ? "✓ Completed" : "Starter guide"}</span>
            <button type="button" data-open-lesson="${escapeHTML(language.id)}" aria-label="Open ${escapeHTML(language.name)} lesson">Start learning ↗</button>
          </div>
        </article>`;
    }).join("");
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
  }

  function openLesson(id) {
    const language = languages.find(item => item.id === id);
    if (!language) return;

    activeLanguage = language;
    document.getElementById("dialogIcon").textContent = language.logo;
    document.getElementById("dialogCategory").textContent = language.categoryName.toUpperCase();
    document.getElementById("dialogTitle").textContent = `Learn ${language.name}`;
    document.getElementById("dialogDescription").textContent = language.description;
    document.getElementById("dialogLesson").textContent = language.lesson;
    document.getElementById("dialogCode").textContent = language.code.replace(/\\n/g, "\n");
    document.getElementById("dialogTip").textContent = language.tip;

    const done = completed.includes(language.id);
    document.getElementById("completeLesson").textContent =
      done ? "✓ Lesson completed" : "Mark lesson complete ✓";
    document.getElementById("completeLesson").disabled = done;
    document.getElementById("dialogNote").textContent =
      "Expanded lesson: read the explanation, study the example, and complete the practice task before marking it done.";

    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      showToast("Your browser does not support lesson dialogs. Please update it.");
    }
  }

  categoryGrid.addEventListener("click", event => {
    const button = event.target.closest("[data-category]");
    if (!button) return;

    activeCategory = button.dataset.category;
    categoryGrid.querySelectorAll(".category-card").forEach(card => {
      const selected = card === button;
      card.classList.toggle("active", selected);
      card.setAttribute("aria-pressed", String(selected));
    });
    renderLanguages();
  });

  grid.addEventListener("click", event => {
    const button = event.target.closest("[data-open-lesson]");
    if (button) openLesson(button.dataset.openLesson);
  });

  search.addEventListener("input", renderLanguages);

  // "/" focuses search when the visitor is not typing in a field.
  document.addEventListener("keydown", event => {
    const target = event.target;
    const isTyping = target instanceof HTMLInputElement ||
      target instanceof HTMLTextAreaElement ||
      target instanceof HTMLSelectElement ||
      target.isContentEditable;

    if (event.key === "/" && !isTyping) {
      event.preventDefault();
      search.focus();
    }

    if (event.key === "Escape" && dialog.open) {
      dialog.close();
    }
  });

  document.getElementById("dialogClose").addEventListener("click", () => dialog.close());

  dialog.addEventListener("click", event => {
    if (event.target === dialog) dialog.close();
  });

  document.getElementById("copyCode").addEventListener("click", async () => {
    const code = document.getElementById("dialogCode").textContent;
    try {
      await navigator.clipboard.writeText(code);
      showToast("Code example copied.");
    } catch {
      showToast("Copy is unavailable. Select the code and copy it manually.");
    }
  });

  document.getElementById("completeLesson").addEventListener("click", () => {
    if (!activeLanguage || completed.includes(activeLanguage.id)) return;
    completed.push(activeLanguage.id);
    saveProgress();
    renderLanguages();
    document.getElementById("completeLesson").textContent = "✓ Lesson completed";
    document.getElementById("completeLesson").disabled = true;
    showToast(`${activeLanguage.name} lesson marked complete!`);
  });

  const mobileMenu = document.getElementById("mobileMenu");
  const navLinks = document.getElementById("navLinks");
  mobileMenu.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    mobileMenu.setAttribute("aria-expanded", String(open));
  });
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      mobileMenu.setAttribute("aria-expanded", "false");
    });
  });

  document.getElementById("year").textContent = new Date().getFullYear();
  updateProgressText();
  renderLanguages();
});
