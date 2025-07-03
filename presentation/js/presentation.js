/* Revenue Pie Chart */
document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('revPie');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Tier III Sites', 'AI Audits', 'Retainers'],
            datasets: [{
                data: [800, 150, 60],
                backgroundColor: ['#00d26a', '#009dff', '#ffb000'],
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        font: {
                            size: 14
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = Math.round((value / total) * 100);
                            return `${label}: $${value}K (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
});

/* Smooth Scrolling for Navigation */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* Add scroll effect to navigation */
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header-presentation');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});