document.addEventListener("DOMContentLoaded", () => {
    const properties = [
        {
            name: "Trinity Bay RV Park & Lodging",
            location: "1512 South Main, Anahuac, TX 77514",
            lat: 29.7730,
            lng: -94.6820,
            image: "images/trinity-bay-rv-park-&-lodging/photo1.jpg",
            link: "https://apex_cre.cashflowportal.com/offering/a0832e9a943c48b5af6bdb5ee9543614",
            status: "active",
            units: 120,
            minInvestment: "$50,000",
            offeringSize: "$2,800,000",
            secType: "506(b)",
            dealType: "Direct Syndication",
            investmentType: "Equity",
            propertyType: "RV Park",
            highlights: [
                "Below-market daily/monthly rates with immediate upside through professional management",
                "Expansion acreage ready for pad site development",
                "Strong historical cash flow with high demand corridor positioning"
            ]
        },
        {
            name: "Nile Valley RV Park",
            location: "3517 FM 2668, Bay City, TX 77414",
            lat: 28.969073,
            lng: -95.951974,
            image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=2070&auto=format&fit=crop",
            link: "https://your-cashflow-portal.com/north-shore",
            status: "closed",
            units: 85,
            irr: "19-21%",
            annualizedReturn: "22%",
            preferredReturn: "7%"
        },
        {
            name: "Dell Creek RV Park",
            location: "515 Ulrich Ln, Crosby, TX 77532",
            lat: 29.8970,
            lng: -95.0450,
            image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=2070&auto=format&fit=crop",
            link: "https://your-cashflow-portal.com/north-shore",
            status: "closed",
            units: 95,
            irr: "18-20%",
            annualizedReturn: "20.5%",
            preferredReturn: "7%"
        }
    ];

    // Initialize the Leaflet Map
    const mapElement = document.getElementById('portfolio-map');
    let map;
    
    if (mapElement) {
        map = L.map('portfolio-map').setView([31.9686, -96.9018], 6);

        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
            maxZoom: 19
        }).addTo(map);
    }

    const activeContainer = document.getElementById('active-container');
    const closedContainer = document.getElementById('closed-container');
    
    if (!activeContainer || !closedContainer) return;

    let totalUnits = 0;
    activeContainer.innerHTML = '';
    closedContainer.innerHTML = '';

    properties.forEach(prop => {
        totalUnits += prop.units || 0;

        const isClosed = prop.status === 'closed';
        const ribbonHTML = isClosed ? '<div class="closed-ribbon">CLOSED</div>' : '';
        const cardClass = isClosed ? 'portfolio-card closed-card' : 'portfolio-card';
        const btnClass = isClosed ? 'learn-more-btn closed-btn' : 'learn-more-btn';
        const buttonLink = isClosed ? '#' : prop.link;

        // Map Pin Logic
        if (map && prop.lat && prop.lng) {
            const strokeColor = isClosed ? '#b52a36' : '#1e7b34';
            const fillColor = isClosed ? '#e63946' : '#28a745';

            const marker = L.circleMarker([prop.lat, prop.lng], {
                radius: 8,
                color: strokeColor,
                weight: 3,
                fillColor: fillColor,
                fillOpacity: 1
            }).addTo(map);

            marker.bindPopup(`
                <div style="text-align: center; padding: 5px;">
                    <h4 style="margin: 0 0 5px; color: #0d1b2a; font-family: sans-serif;">${prop.name}</h4>
                    <p style="margin: 0 0 10px; font-size: 12px; color: #666;">${prop.location}</p>
                </div>
            `);
        }

        let highlightsHTML = '';
        if (prop.highlights && prop.highlights.length > 0) {
            highlightsHTML = `
                <div class="highlights-box">
                    <h4>Highlights</h4>
                    <ul>
                        ${prop.highlights.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        let dataGridHTML = '';
        if (isClosed) {
            dataGridHTML = `
                <div class="card-data-grid">
                    <div class="data-row">
                        <div class="data-cell">
                            <strong>${prop.irr}</strong>
                            <span>Internal Rate of Return</span>
                        </div>
                        <div class="data-cell">
                            <strong>${prop.annualizedReturn}</strong>
                            <span>Annualized Return</span>
                        </div>
                        <div class="data-cell">
                            <strong>${prop.preferredReturn}</strong>
                            <span>Preferred Return</span>
                        </div>
                    </div>
                </div>
            `;
        } else {
            dataGridHTML = `
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
            `;
        }

        const cardHTML = `
            <div class="${cardClass}">
                <div class="property-img-wrapper">
                    <div class="property-img" style="background-image: url('${prop.image}');"></div>
                    ${ribbonHTML}
                </div>
                <div class="property-info">
                    <h3>${prop.name}</h3>
                    <p class="location">${prop.location}</p>
                    ${highlightsHTML}
                    <a href="${buttonLink}" ${isClosed ? '' : 'target="_blank"'} class="${btnClass}">LEARN MORE</a>
                </div>
                
                ${dataGridHTML}
            </div>
        `;

        if (isClosed) {
            closedContainer.innerHTML += cardHTML;
        } else {
            activeContainer.innerHTML += cardHTML;
        }
    });

    const totalProjects = properties.length;
    const projectCountElement = document.getElementById('project-count');
    if (projectCountElement) {
        projectCountElement.setAttribute('data-target', totalProjects);
        projectCountElement.innerText = totalProjects;
    }

    const unitCountElement = document.getElementById('unit-count');
    if (unitCountElement) {
        unitCountElement.setAttribute('data-target', totalUnits);
    }

    runCounters();
});

function runCounters() {
    const counters = document.querySelectorAll('.counter, #unit-count');
    const speed = 200;

    counters.forEach(counter => {
        const targetAttr = counter.getAttribute('data-target');
        if (!targetAttr) return;
        const target = +targetAttr;
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
