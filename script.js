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
            name: "Valley View RV Park",
            location: "13483 N I 35, Jarrell, TX 76537",
            lat: 30.8111,
            lng: -97.6141,
            image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=2070&auto=format&fit=crop",
            link: "https://your-cashflow-portal.com/north-shore",
            status: "closed",
            units: 85,
            irr: "22-24%",
            annualizedReturn: "24%",
            preferredReturn: "7%"
        },
        {
            name: "Kenedy Village RV Park",
            location: "304 Freeny Drive, Kenedy, TX 78119",
            lat: 28.8200,
            lng: -97.8600,
            image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=2070&auto=format&fit=crop",
            link: "#",
            status: "coming-soon",
            units: 0,
            minInvestment: "TBD",
            offeringSize: "TBD",
            secType: "TBD",
            dealType: "Direct Syndication",
            investmentType: "Equity",
            propertyType: "RV Park",
            highlights: [
                "Positioned for workforce and transient housing demand in the Kenedy region",
                "Significant value-add potential through site and operational enhancements"
            ]
        },
        {
            name: "Lake Murray RV Park",
            location: "3433 US Highway 70, Ardmore, OK 73401",
            lat: 34.1750,
            lng: -97.1000,
            image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=2070&auto=format&fit=crop",
            link: "#",
            status: "coming-soon",
            units: 0,
            minInvestment: "TBD",
            offeringSize: "TBD",
            secType: "TBD",
            dealType: "Direct Syndication",
            investmentType: "Equity",
            propertyType: "RV Park",
            highlights: [
                "Strategically located near Lake Murray recreation and attractions",
                "Value-add opportunity through expansion and operational improvements"
            ]
        },
        {
            name: "Lost Lake RV Park",
            location: "1222 Jeffcote Rd, Conroe, TX 77303",
            lat: 30.3119,
            lng: -95.4560,
            image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=2070&auto=format&fit=crop",
            link: "#",
            status: "coming-soon",
            units: 0,
            minInvestment: "TBD",
            offeringSize: "TBD",
            secType: "TBD",
            dealType: "Direct Syndication",
            investmentType: "Equity",
            propertyType: "RV Park",
            highlights: [
                "Located in the rapidly growing Conroe market near major thoroughfares",
                "Strong value-add opportunity through operational and site improvements"
            ]
        },
        {
            name: "North Shore Landing RV Park",
            location: "Texas Region",
            lat: 31.5000,
            lng: -98.0000,
            image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=2070&auto=format&fit=crop",
            link: "#",
            status: "coming-soon",
            units: 0,
            minInvestment: "TBD",
            offeringSize: "TBD",
            secType: "TBD",
            dealType: "Direct Syndication",
            investmentType: "Equity",
            propertyType: "RV Park",
            highlights: [
                "Currently in the underwriting phase",
                "Join our investor list for early access and deal alerts"
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
    const comingSoonContainer = document.getElementById('coming-soon-container');
    
    if (activeContainer) activeContainer.innerHTML = '';
    if (closedContainer) closedContainer.innerHTML = '';
    if (comingSoonContainer) comingSoonContainer.innerHTML = '';

    let totalUnits = 0;

    properties.forEach(prop => {
        totalUnits += prop.units || 0;

        const isClosed = prop.status === 'closed';
        const isComingSoon = prop.status === 'coming-soon';
        
        let ribbonHTML = '';
        if (isClosed) {
            ribbonHTML = '<div class="closed-ribbon">CLOSED</div>';
        } else if (isComingSoon) {
            ribbonHTML = '<div class="closed-ribbon" style="background-color: #ffc107; color: #0d1b2a;">SOON</div>';
        }

        const cardClass = isClosed ? 'portfolio-card closed-card' : 'portfolio-card';
        const btnClass = (isClosed || isComingSoon) ? 'learn-more-btn closed-btn' : 'learn-more-btn';
        const buttonLink = (isClosed || isComingSoon) ? '#' : prop.link;
        const buttonText = isComingSoon ? 'COMING SOON' : 'LEARN MORE';

        // Map Pin Logic
        if (map && prop.lat && prop.lng) {
            let strokeColor = '#1e7b34'; 
            let fillColor = '#28a745'; 
            
            if (isClosed) {
                strokeColor = '#b52a36';
                fillColor = '#e63946'; 
            } else if (isComingSoon) {
                strokeColor = '#b58500';
                fillColor = '#ffc107'; 
            }

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
                            <strong>${prop.irr || 'TBD'}</strong>
                            <span>Internal Rate of Return</span>
                        </div>
                        <div class="data-cell">
                            <strong>${prop.annualizedReturn || 'TBD'}</strong>
                            <span>Annualized Return</span>
                        </div>
                        <div class="data-cell">
                            <strong>${prop.preferredReturn || 'TBD'}</strong>
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
                            <strong>${prop.minInvestment || 'TBD'}</strong>
                            <span>Minimum Investment</span>
                        </div>
                        <div class="data-cell">
                            <strong>${prop.offeringSize || 'TBD'}</strong>
                            <span>Offering size</span>
                        </div>
                        <div class="data-cell">
                            <strong>${prop.secType || 'TBD'}</strong>
                            <span>SEC Type</span>
                        </div>
                    </div>
                    <div class="data-row">
                        <div class="data-cell">
                            <strong>${prop.dealType || 'TBD'}</strong>
                            <span>Deal Type</span>
                        </div>
                        <div class="data-cell">
                            <strong>${prop.investmentType || 'TBD'}</strong>
                            <span>Investment Type</span>
                        </div>
                        <div class="data-cell">
                            <strong>${prop.propertyType || 'TBD'}</strong>
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
                    <a href="${buttonLink}" ${isClosed || isComingSoon ? '' : 'target="_blank"'} class="${btnClass}">${buttonText}</a>
                </div>
                
                ${dataGridHTML}
            </div>
        `;

        if (isClosed && closedContainer) {
            closedContainer.innerHTML += cardHTML;
        } else if (isComingSoon && comingSoonContainer) {
            comingSoonContainer.innerHTML += cardHTML;
        } else if (activeContainer) {
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
