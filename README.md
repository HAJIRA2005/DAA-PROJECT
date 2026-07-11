# Lottery Number Analysis Using Randomised Algorithms

## Project Overview

This is a comprehensive Design and Analysis of Algorithms (DAA) project that explores lottery number analysis using randomised algorithms. The project includes interactive demonstrations, detailed algorithm explanations, and statistical analysis tools.

## Project Structure

```
DAA PROJECT/
├── index.html          # Main homepage with project overview
├── algorithms.html     # Detailed algorithm explanations and pseudocode
├── analysis.html       # Interactive analysis tools and visualizations
├── style.css          # Global styling for all pages
├── script.js          # Interactive features and animations
├── analysis.js        # Chart rendering and analysis logic
└── README.md          # This file
```

## Features

### 1. **Home Page (index.html)**
- Hero section with animated canvas visualization
- Project objectives and key features
- Quick statistics overview
- Navigation to other sections

### 2. **Algorithms Page (algorithms.html)**
- **Randomised Quick Sort** (O(n log n) average time)
- **Randomised Selection** (O(n) average time)
- **Monte Carlo Method** (Probabilistic sampling)
- **Randomised Shuffle** (Fisher-Yates - O(n) time)
- **Karger's Algorithm** (Graph-based randomisation)

Each algorithm includes:
- Detailed description
- Pseudocode implementation
- Complexity analysis
- Use cases and advantages

### 3. **Analysis Page (analysis.html)**
Interactive lottery simulator with:
- Adjustable lottery parameters
- Statistical analysis tools
- Real-time chart visualizations:
  - Frequency distribution
  - Cumulative distribution
  - Top 10 numbers
  - Distribution analysis
- Chi-square test results
- Algorithm performance comparison

## How to Use

### Opening the Website

1. **Using a Local Server (Recommended)**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (if installed)
   npx serve
   ```
   Then navigate to `http://localhost:8000` in your browser.

2. **Direct File Opening**
   - Right-click on `index.html`
   - Select "Open with Browser"
   - Or drag `index.html` into your browser

### Using the Interactive Analysis

1. Go to the **Analysis** page
2. Adjust parameters:
   - **Lottery Size**: Maximum number (1 to N)
   - **Numbers to Draw**: Count of numbers per draw
   - **Iterations**: Number of simulations to run
3. Click **Run Analysis**
4. View results, charts, and statistical analysis

## Algorithms Explained

### Randomised Quick Sort
- **Uses randomness to select pivot**
- **Avoids worst-case scenarios**
- **Average: O(n log n), Worst: O(n²)**
- Suitable for large datasets

### Randomised Selection
- **Finds k-th smallest element efficiently**
- **Better than sorting entire array**
- **Average: O(n), Worst: O(n²)**
- Perfect for finding medians

### Monte Carlo Method
- **Probabilistic algorithm**
- **Uses random sampling for approximation**
- **Accuracy improves with iterations**
- Applications: π estimation, integration

### Fisher-Yates Shuffle (Las Vegas)
- **Generates uniform random permutation**
- **Guaranteed correctness**
- **Always O(n) time**
- Core algorithm for lottery simulation

### Karger's Algorithm
- **Finds minimum cuts in graphs**
- **Demonstrates probabilistic reasoning**
- **Simple but elegant approach**

## Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with gradients and animations
- **JavaScript (ES6+)**: Interactive features
- **Chart.js**: Data visualization
- **Canvas API**: Animated visualizations

## Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (responsive design)

## Key Concepts Covered

### Las Vegas Algorithms
- Always produce correct results
- Running time is randomised
- Example: Randomised Quick Sort

### Monte Carlo Algorithms
- Deterministic running time
- Probabilistic correctness
- Example: Monte Carlo sampling

### Probability Theory
- Uniform distributions
- Expected value analysis
- Entropy and randomness

### Time Complexity Analysis
- Big O notation
- Best, average, and worst cases
- Amortized analysis

## Statistics & Metrics

The analysis page computes:
- **Frequency Distribution**: How often each number appears
- **Chi-Square Test**: Tests uniformity of distribution
- **Mean & Standard Deviation**: Distribution properties
- **Coefficient of Variation**: Uniformity measure
- **Most Frequent Number**: Number with highest draws

## Educational Value

This project demonstrates:
1. **Algorithm Design**: How randomness improves algorithms
2. **Complexity Analysis**: Time and space complexity tradeoffs
3. **Statistical Testing**: Validating algorithm behavior
4. **Implementation**: Practical coding of theoretical concepts
5. **Visualization**: Understanding data through charts

## Project Requirements

- No external dependencies required (Chart.js loaded from CDN)
- Works offline (all functionality included locally)
- Responsive design for all screen sizes
- Accessibility-friendly

## Future Enhancements

- Add more randomised algorithms (Quickhull, Treap)
- Export analysis results as PDF/CSV
- More advanced statistical tests
- Multi-threaded simulations
- Live algorithm visualization
- Comparison with deterministic algorithms

## Learning Outcomes

After studying this project, you will understand:
- ✓ How randomisation improves algorithm performance
- ✓ The difference between Las Vegas and Monte Carlo algorithms
- ✓ Statistical analysis of randomised systems
- ✓ Time complexity analysis in depth
- ✓ Practical applications of randomised algorithms
- ✓ Lottery number generation and analysis

## References

- **Introduction to Algorithms** by Cormen, Leiserson, Rivest, Stein
- **Algorithm Design Manual** by Steven Skiena
- **Randomized Algorithms** by Rajeev Motwani and Prabhakar Raghavan

## Author Notes

This project serves as a comprehensive practical study of randomised algorithms through the lens of lottery number analysis. It combines theoretical computer science concepts with interactive implementations and real-time visualizations.

---

**Disclaimer**: This is an educational project for learning randomised algorithms and probability theory. It is not intended for actual lottery predictions or gambling purposes.

**Subject**: Design and Analysis of Algorithms (DAA)  
**Year**: 2026  
**Institution**: Educational Project
