document.addEventListener("DOMContentLoaded", () => {
    // 1. Embedded property database (no local fetch required)
    const properties = [
        {
            name: "Trinity Bay RV Park & Lodging",
            location: "1512 South Main, Anahuac, TX 77514",
            image: "images/trinity-bay-rv-park-&-lodging/photo1.jpg", // Local folder path,
            link: "https://apex_cre.cashflowportal.com/offering/a0832e9a943c48b5af6bdb5ee9543614", // Link to portal
			status: "active", // Active deal
			units: 120,
            minInvestment: "$50,000",
            offeringSize: "$2,800,000",
            secType: "506(b)",
            dealType: "Direct Syndication",
            investmentType: "Equity",
            propertyType: "RV Park"
        },
        {
            name: "Nile Valley RV Park",
            location: "Texas / Oklahoma Region",
            image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=2070&auto=format&fit=crop",
            link: "https://your-cashflow-portal.com/north-shore", // Link to portal
			status: "closed", // Closed deal
			units: 85,
            minInvestment: "$50,000",
            offeringSize: "$2,500,000",
            secType: "506(c)",
            dealType: "Direct Syndication",
            investmentType: "Equity",
            propertyType: "RV Park"
        },
        {
            name: "Dell Creek RV Park",
            location: "515 Ulrich Ln, Crosby, TX 77532",
            image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=2070&auto=format&fit=crop",
            link: "https://your-cashflow-portal.com/north-shore", // Link to portal
			status: "closed", // Closed deal
			units: 95,
            minInvestment: "$75,000",
            offeringSize: "$1,400,000",
            secType: "506(c)",
            dealType: "Direct Syndication",
            investmentType: "Equity",
            propertyType: "RV Park"
        }
    ];

    const gridContainer = document.getElementById('portfolio-container');
    if (!gridContainer) return;

    let totalUnits = 0;
    gridContainer.innerHTML = '';

    properties.forEach(prop => {
        totalUnits += prop.units || 0;

        // Check if the deal is closed to apply classes
        const isClosed = prop.status === 'closed';
        const ribbonHTML = isClosed ? '<div class="closed-ribbon">CLOSED</div>' : '';
        const cardClass = isClosed ? 'portfolio-card closed-card' : 'portfolio-card';
        const btnClass = isClosed ? 'learn-more-btn closed-btn' : 'learn-more-btn';
        const buttonLink = isClosed ? '#' : prop.link;

        const cardHTML = `
            <div class="${cardClass}">
                <div class="property-img-wrapper">
                    <div class="property-img" style="background-image: url('${prop.image}');"></div>
                    ${ribbonHTML}
                </div>
                <div class="property-info">
                    <h3>${prop.name}</h3>
                    <p class="location">${prop.location}</p>
                    <a href="${buttonLink}" ${isClosed ? '' : 'target="_blank"'} class="${btnClass}">LEARN MORE</a>
                </div>
                
                <div class="card-data-grid">
                    <div class="data-row">
                        <div class="data-cell">
                            <strong>${prop.minInvestment}</strong>
                            <span>Minimum Investment</span>
                        </div>
                        <div class="data-cell">
                            <strong>${prop.offeringSize}</strong>
                            <span>Offering size</span>
                        </div>
                        <div class="data-cell">
                            <strong>${prop.secType}</strong>
                            <span>SEC Type</span>
                        </div>
                    </div>
                    <div class="data-row">
                        <div class="data-cell">
                            <strong>${prop.dealType}</strong>
                            <span>Deal Type</span>
                        </div>
                        <div class="data-cell">
                            <strong>${prop.investmentType}</strong>
                            <span>Investment Type</span>
                        </div>
                        <div class="data-cell">
                            <strong>${prop.propertyType}</strong>
                            <span>Property Type</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        gridContainer.innerHTML += cardHTML;
    });

    const totalProjects = properties.length;
    const projectCountElement = document.getElementById('project-count');
    if (projectCountElement) projectCountElement.setAttribute('data-target', totalProjects);

    const unitCountElement = document.getElementById('unit-count');
    if (unitCountElement) unitCountElement.setAttribute('data-target', totalUnits);

    runCounters();
});

function runCounters() {
    const counters = document.querySelectorAll('.counter, #project-count, #unit-count');
    const speed = 200;

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        
        const updateCount = () => {
            const increment = target / speed;
            if (count < target) {
                count += increment;
                counter.innerText = Math.ceil(count).toLocaleString();
                setTimeout(updateCount, 15);
            } else {
                counter.innerText = target.toLocaleString();
            }
        };
        
        updateCount();
    });
}