# 🎲 Lottery Number Analysis Using Randomised Algorithms

An interactive web application demonstrating the concepts of **randomised algorithms, probability theory, and statistical analysis** through lottery number simulations.

This project was developed as part of the **Design and Analysis of Algorithms (DAA)** course to explore how randomness can be applied to algorithm design, computational problem-solving, and statistical analysis.

---

## 📌 Project Overview

Randomised algorithms use random choices during execution to influence their behaviour or performance.

This project explores these algorithms through an interactive website that simulates lottery draws, analyses number distributions, and visualises statistical results.

The application combines theoretical computer science concepts with practical implementations to make randomised algorithms easier to understand.



## ✨ Features

### 🏠 Home Page

* Introduction to randomised algorithms.
* Project objectives and key features.
* Animated canvas visualisation.
* Navigation between different sections of the application.

### 🧠 Algorithms Page

Explores the following algorithms, their working principles, and their computational complexity:

| Algorithm             | Description                                      | Average Time Complexity   |
| --------------------- | ------------------------------------------------ | ------------------------- |
| Randomised Quick Sort | Sorts elements using randomly selected pivots    | O(n log n)                |
| Randomised Selection  | Finds the k-th smallest element                  | O(n)                      |
| Monte Carlo Method    | Uses random sampling to estimate results         | Problem-dependent         |
| Fisher–Yates Shuffle  | Generates a random permutation                   | O(n)                      |
| Karger's Algorithm    | Finds a minimum cut in a graph probabilistically | Depends on implementation |

Each algorithm includes explanations, pseudocode, complexity analysis, and potential applications.

### 📊 Interactive Analysis Dashboard

The analysis page provides an interactive environment for simulating lottery draws and examining their statistical properties.

**Key features include:**

* Adjustable lottery parameters.
* Repeated lottery simulations.
* Frequency distribution analysis.
* Cumulative distribution visualisation.
* Top 10 most frequently occurring numbers.
* Statistical distribution analysis.
* Chi-square test results.
* Algorithm performance comparison.

## 🛠️ Technologies Used

| Technology        | Purpose                                              |
| ----------------- | ---------------------------------------------------- |
| HTML5             | Structures the web pages                             |
| CSS3              | Provides styling, layouts, gradients, and animations |
| JavaScript (ES6+) | Implements interactive features and simulation logic |
| Chart.js          | Creates statistical charts and visualisations        |
| Canvas API        | Supports animated visual elements                    |

## Screenshots

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/531b66c0-a046-498f-a507-feb25283ce62" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/252f3cc7-f909-4ed1-ab60-0f9f600d20fb" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/0f5480e3-bcca-4c7e-bfe8-4a6c9cd8a3f7" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d8f0c3cf-8b2c-4949-892a-16c1e4243d42" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/8d4449ab-e5ca-4348-81ae-8f944f200637" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/2156e5ce-4fea-4a9e-948e-5d99d6c9ddeb" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/a435eede-2d6c-4108-b392-d7012d77c3ac" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/08b9afed-52a1-402b-a987-2ffded2eaa6c" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/dfaaa0cc-9f33-43dd-b83a-30fee91bc647" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/7f4e2b2c-8f2e-46e7-ac27-5025d05c5dc3" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/2910c564-6937-4582-9d97-1ded8182b80f" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/8e4ca260-1b2c-4461-ad89-f347063eea8e" />










## 📁 Project Structure

```text
DAA-PROJECT/
│
├── index.html       # Main homepage
├── algorithms.html  # Algorithm explanations and pseudocode
├── analysis.html    # Interactive analysis dashboard
├── style.css        # Styling and animations
├── script.js        # General interactive functionality
├── analysis.js      # Analysis and chart-rendering logic
└── README.md        # Project documentation
```

## ⚙️ Getting Started

### Prerequisites

* A modern web browser.
* Python 3 or Node.js for running a local development server.

### Installation and Setup

**1. Clone the repository**

```bash
git clone https://github.com/HAJIRA2005/DAA-PROJECT.git
```

**2. Navigate to the project directory**

```bash
cd DAA-PROJECT
```

**3. Start a local server**

Using Python 3:

```bash
python -m http.server 8000
```

**4. Open the application**

Visit the following address in your browser:

```text
http://localhost:8000
```

The homepage will be available at `index.html`.

Alternatively, you can open `index.html` directly in a browser, although a local server is recommended if browser restrictions affect functionality.

## 📈 Statistical Analysis

The application explores the statistical properties of simulated lottery draws using measures such as:

* **Frequency Distribution:** Measures how often each number appears across simulated draws.
* **Cumulative Distribution:** Displays cumulative counts or proportions.
* **Chi-Square Test:** Evaluates whether observed frequencies differ significantly from expected frequencies under a specified probability model.
* **Mean:** Represents the average of observed values.
* **Standard Deviation:** Measures the spread of the observations.
* **Coefficient of Variation:** Measures relative variability.
* **Most Frequent Numbers:** Identifies numbers with the highest observed frequencies.

The results depend on the simulation parameters, number of iterations, and statistical assumptions.

## 📚 Algorithms and Concepts

### Randomised Quick Sort

Uses a randomly selected pivot to help avoid consistently unfavourable partitions.

* Average time complexity: O(n log n).
* Worst-case time complexity: O(n²).

### Randomised Selection

Finds the k-th smallest element without necessarily sorting the entire dataset.

* Average time complexity: O(n).
* Worst-case time complexity: O(n²).

### Monte Carlo Method

Uses random sampling to approximate results or solve computational problems. Its accuracy and running time depend on the problem and implementation.

### Fisher–Yates Shuffle

Generates a random permutation by progressively selecting and swapping elements.

* Time complexity: O(n).
* Produces a uniform random permutation when implemented correctly with unbiased random choices.

### Karger's Algorithm

Uses random edge contractions to find a minimum cut in a graph with a probability of success that depends on the graph and implementation.

## 🎯 Learning Outcomes

This project demonstrates practical applications of:

* Randomised algorithm design.
* Time and space complexity analysis.
* Probability theory and statistical distributions.
* Simulation-based analysis.
* Data visualisation using JavaScript and Chart.js.
* Applying theoretical computer science concepts to an interactive web application.

## 🔮 Future Enhancements

Potential improvements include:

* Exporting analysis results to CSV or PDF.
* Adding more randomised algorithms.
* Implementing additional statistical tests.
* Introducing step-by-step algorithm visualisations.
* Comparing randomised algorithms with deterministic approaches.
* Optimising performance for large-scale simulations.

## 📖 References

* *Introduction to Algorithms* — Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein.
* *The Algorithm Design Manual* — Steven S. Skiena.
* *Randomized Algorithms* — Rajeev Motwani and Prabhakar Raghavan.

## 👩‍💻 Author

**Hajira M**

GitHub: [@HAJIRA2005](https://github.com/HAJIRA2005)

## 🎓 Project Information

* **Subject:** Design and Analysis of Algorithms (DAA)
* **Year:** 2026
* **Project Type:** Educational Web Application

## ⚠️ Disclaimer

This project is intended solely for educational purposes to demonstrate randomised algorithms, probability theory, and statistical analysis.

Lottery simulations are not predictions of future lottery results and cannot guarantee winning numbers.

---

⭐ If you find this project useful for learning about randomised algorithms, feel free to explore the repository!

