// Global variables for chart instances
let frequencyChart, cumulativeChart, topNumbersChart, distributionChart, performanceChart;

// Fisher-Yates Shuffle (Las Vegas Algorithm)
function fisherYatesShuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Generate lottery numbers using randomised selection
function generateLotteryNumbers(maxNum, count) {
    const numbers = Array.from({length: maxNum}, (_, i) => i + 1);
    const shuffled = fisherYatesShuffle(numbers);
    return shuffled.slice(0, count);
}

// Run lottery analysis
function runAnalysis() {
    const lotterySize = parseInt(document.getElementById('lotterySize').value);
    const numberCount = parseInt(document.getElementById('numberCount').value);
    const iterations = parseInt(document.getElementById('iterations').value);

    if (numberCount > lotterySize) {
        alert('Numbers to draw cannot exceed lottery size');
        return;
    }

    // Initialize frequency counter
    const frequency = {};
    for (let i = 1; i <= lotterySize; i++) {
        frequency[i] = 0;
    }

    // Run simulations
    for (let i = 0; i < iterations; i++) {
        const draw = generateLotteryNumbers(lotterySize, numberCount);
        draw.forEach(num => {
            frequency[num]++;
        });
    }

    // Calculate statistics
    updateResults(frequency, iterations, numberCount, lotterySize);
    updateCharts(frequency, lotterySize);
}

// Update results display
function updateResults(frequency, iterations, numberCount, lotterySize) {
    const totalDraws = iterations * numberCount;
    const uniqueNumbers = Object.values(frequency).filter(f => f > 0).length;
    const frequencies = Object.values(frequency);
    const mostFrequent = Math.max(...frequencies);
    const mostFrequentNum = Object.keys(frequency).find(k => frequency[k] === mostFrequent);
    const avgFrequency = (totalDraws / lotterySize).toFixed(2);

    document.getElementById('totalDraws').textContent = totalDraws.toLocaleString();
    document.getElementById('uniqueNumbers').textContent = uniqueNumbers;
    document.getElementById('mostFrequent').textContent = mostFrequentNum;
    document.getElementById('avgFrequency').textContent = avgFrequency;

    // Update statistical analysis
    updateStatisticalAnalysis(frequency, frequencies, totalDraws, lotterySize);
}

// Update statistical analysis
function updateStatisticalAnalysis(frequency, frequencies, totalDraws, lotterySize) {
    const expected = totalDraws / lotterySize;
    
    // Chi-square test
    let chiSquare = 0;
    Object.values(frequency).forEach(obs => {
        const diff = obs - expected;
        chiSquare += (diff * diff) / expected;
    });

    const variance = frequencies.reduce((sum, f) => sum + Math.pow(f - expected, 2), 0) / lotterySize;
    const stdDev = Math.sqrt(variance);
    const mean = expected;

    const chiSquareHTML = `
        <p><strong>Chi-Square Statistic:</strong> ${chiSquare.toFixed(2)}</p>
        <p><strong>Expected Frequency:</strong> ${expected.toFixed(2)}</p>
        <p><strong>Degrees of Freedom:</strong> ${lotterySize - 1}</p>
        <p><strong>Test Result:</strong> Distribution is ${chiSquare < 50 ? 'uniform ✓' : 'non-uniform ✗'}</p>
    `;

    const distributionHTML = `
        <p><strong>Mean:</strong> ${mean.toFixed(2)}</p>
        <p><strong>Standard Deviation:</strong> ${stdDev.toFixed(2)}</p>
        <p><strong>Min Frequency:</strong> ${Math.min(...frequencies)}</p>
        <p><strong>Max Frequency:</strong> ${Math.max(...frequencies)}</p>
        <p><strong>Coefficient of Variation:</strong> ${(stdDev / mean * 100).toFixed(2)}%</p>
    `;

    document.getElementById('chiSquareResults').innerHTML = chiSquareHTML;
    document.getElementById('distributionProperties').innerHTML = distributionHTML;
}

// Update all charts
function updateCharts(frequency, lotterySize) {
    updateFrequencyChart(frequency);
    updateCumulativeChart(frequency);
    updateTopNumbersChart(frequency);
    updateDistributionChart(frequency);
    updatePerformanceChart();
}

// Update frequency chart
function updateFrequencyChart(frequency) {
    const ctx = document.getElementById('frequencyChart').getContext('2d');
    
    if (frequencyChart) {
        frequencyChart.destroy();
    }

    const numbers = Object.keys(frequency).map(Number).sort((a, b) => a - b);
    const data = numbers.map(n => frequency[n]);

    frequencyChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: numbers,
            datasets: [{
                label: 'Frequency',
                data: data,
                backgroundColor: 'rgba(99, 102, 241, 0.6)',
                borderColor: 'rgba(99, 102, 241, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Update cumulative chart
function updateCumulativeChart(frequency) {
    const ctx = document.getElementById('cumulativeChart').getContext('2d');
    
    if (cumulativeChart) {
        cumulativeChart.destroy();
    }

    const numbers = Object.keys(frequency).map(Number).sort((a, b) => a - b);
    const data = numbers.map(n => frequency[n]);
    const cumulative = [];
    let sum = 0;
    data.forEach(d => {
        sum += d;
        cumulative.push(sum);
    });

    cumulativeChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: numbers,
            datasets: [{
                label: 'Cumulative Frequency',
                data: cumulative,
                borderColor: 'rgba(139, 92, 246, 1)',
                backgroundColor: 'rgba(139, 92, 246, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Update top numbers chart
function updateTopNumbersChart(frequency) {
    const ctx = document.getElementById('topNumbersChart').getContext('2d');
    
    if (topNumbersChart) {
        topNumbersChart.destroy();
    }

    const sorted = Object.entries(frequency)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10);

    topNumbersChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: sorted.map(s => `#${s[0]}`),
            datasets: [{
                label: 'Frequency',
                data: sorted.map(s => s[1]),
                backgroundColor: 'rgba(236, 72, 153, 0.6)',
                borderColor: 'rgba(236, 72, 153, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            indexAxis: 'y',
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Update distribution chart
function updateDistributionChart(frequency) {
    const ctx = document.getElementById('distributionChart').getContext('2d');
    
    if (distributionChart) {
        distributionChart.destroy();
    }

    const frequencies = Object.values(frequency);
    
    // Create bins
    const minFreq = Math.min(...frequencies);
    const maxFreq = Math.max(...frequencies);
    const binCount = Math.ceil(Math.sqrt(frequencies.length));
    const binSize = (maxFreq - minFreq + 1) / binCount;
    
    const bins = Array(binCount).fill(0);
    frequencies.forEach(f => {
        const binIndex = Math.floor((f - minFreq) / binSize);
        const index = Math.min(binIndex, binCount - 1);
        bins[index]++;
    });

    const labels = [];
    for (let i = 0; i < binCount; i++) {
        const start = (minFreq + i * binSize).toFixed(0);
        const end = (minFreq + (i + 1) * binSize).toFixed(0);
        labels.push(`${start}-${end}`);
    }

    distributionChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: bins,
                backgroundColor: [
                    'rgba(99, 102, 241, 0.8)',
                    'rgba(139, 92, 246, 0.8)',
                    'rgba(236, 72, 153, 0.8)',
                    'rgba(59, 130, 246, 0.8)',
                    'rgba(34, 197, 94, 0.8)',
                    'rgba(249, 115, 22, 0.8)',
                ],
                borderColor: 'white',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'right'
                }
            }
        }
    });
}

// Update performance chart
function updatePerformanceChart() {
    const ctx = document.getElementById('performanceChart').getContext('2d');
    
    if (performanceChart) {
        performanceChart.destroy();
    }

    const sizes = [100, 500, 1000, 5000, 10000];
    
    performanceChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: sizes.map(s => `n=${s}`),
            datasets: [
                {
                    label: 'O(n log n) - Quick Sort',
                    data: sizes.map(n => n * Math.log2(n)),
                    borderColor: 'rgba(99, 102, 241, 1)',
                    borderWidth: 2,
                    tension: 0.4
                },
                {
                    label: 'O(n) - Shuffle/Selection',
                    data: sizes.map(n => n),
                    borderColor: 'rgba(139, 92, 246, 1)',
                    borderWidth: 2,
                    tension: 0.4
                },
                {
                    label: 'O(n²) - Worst Case',
                    data: sizes.map(n => n * n),
                    borderColor: 'rgba(236, 72, 153, 1)',
                    borderWidth: 2,
                    tension: 0.4,
                    borderDash: [5, 5]
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true
                }
            },
            scales: {
                y: {
                    type: 'logarithmic',
                    title: {
                        display: true,
                        text: 'Operations (log scale)'
                    }
                }
            }
        }
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    const runButton = document.getElementById('runAnalysis');
    if (runButton) {
        runButton.addEventListener('click', runAnalysis);
    }

    // Run initial analysis
    runAnalysis();
});
