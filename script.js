document.addEventListener("DOMContentLoaded", () => {
    let properties = [
        {
            name: "Trinity Bay RV Park & Lodging",
            location: "1512 South Main, Anahuac, TX 77514",
            lat: 29.7730,
            lng: -94.6820,
            boundary: [
                [29.7735, -94.6825],
                [29.7735, -94.6815],
                [29.7725, -94.6815],
                [29.7725, -94.6825]
            ],
            image: "images/trinity-bay-rv-park-&-lodging/photo1.jpg",
            link: "https://apex_cre.cashflowportal.com/offering/a0832e9a943c48b5af6bdb5ee9543614",
            sitePlan: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop", 
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
            name: "Dell Creek RV Park",
            location: "515 Ulrich Ln, Crosby, TX 77532",
            lat: 29.8970,
            lng: -95.0450,
            image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=2070&auto=format&fit=crop",
            link: "https://your-cashflow-portal.com/north-shore",
            status: "active",
            units: 95,
            minInvestment: "$50,000",
            offeringSize: "$1,990,000",
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
            preferredReturn: "7%",
            propertyType: "RV Park"
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
            location: "660 Co Rd 3325, Emory, TX 75440",
            lat: 32.8767,
            lng: -95.7671,
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
            preferredReturn: "7%",
            propertyType: "RV Park"
        }
    ];

    // Priority Sort
    properties.sort((a, b) => {
        const getFinancialWeight = (prop) => {
            const valStr = prop.annualizedReturn || prop.irr || prop.offeringSize || "0";
            const matches = valStr.replace(/,/g, '').match(/\d+(\.\d+)?/g);
            return matches ? Math.max(...matches.map(Number)) : 0;
        };
        return getFinancialWeight(b) - getFinancialWeight(a);
    });

    const mapElement = document.getElementById('portfolio-map');
    let map, markersLayer;
    
    if (mapElement) {
        // Define base map layers
        const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles &copy; Esri'
        });

        const streetLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
            maxZoom: 19
        });

        // Initialize map with Satellite as default
        map = L.map('portfolio-map', {
            center: [31.9686, -96.9018],
            zoom: 6,
            layers: [satelliteLayer]
        });

        // Add Layer Control Switch
        const baseMaps = {
            "Satellite": satelliteLayer,
            "Street Map": streetLayer
        };
        L.control.layers(baseMaps).addTo(map);

        markersLayer = L.layerGroup().addTo(map);
    }

    const activeContainer = document.getElementById('active-container');
    const closedContainer = document.getElementById('closed-container');
    const comingSoonContainer = document.getElementById('coming-soon-container');

    let currentStatusFilter = 'all';
    let currentTypeFilter = 'all';

    const renderPortfolio = () => {
        if (activeContainer) activeContainer.innerHTML = '';
        if (closedContainer) closedContainer.innerHTML = '';
        if (comingSoonContainer) comingSoonContainer.innerHTML = '';
        if (markersLayer) markersLayer.clearLayers();

        let visibleActiveCount = 0;
        let visibleClosedCount = 0;
        let visibleSoonCount = 0;

        properties.forEach(prop => {
            const matchesStatus = currentStatusFilter === 'all' || prop.status === currentStatusFilter;
            const matchesType = currentTypeFilter === 'all' || prop.propertyType === currentTypeFilter;

            if (!matchesStatus || !matchesType) return;

            const isClosed = prop.status === 'closed';
            const isComingSoon = prop.status === 'coming-soon';
            const isActive = prop.status === 'active';

            if (isActive) visibleActiveCount++;
            if (isClosed) visibleClosedCount++;
            if (isComingSoon) visibleSoonCount++;
            
            let ribbonHTML = '';
            if (isClosed) {
                ribbonHTML = '<div class="closed-ribbon">CLOSED</div>';
            } else if (isComingSoon) {
                ribbonHTML = '<div class="closed-ribbon" style="background-color: #ffc107; color: #0d1b2a;">SOON</div>';
            }

            const cardClass = isClosed ? 'portfolio-card closed-card' : 'portfolio-card';
            const btnClass = isClosed ? 'learn-more-btn closed-btn' : 'learn-more-btn';
            let buttonLink = prop.link;
            let buttonText = 'LEARN MORE';

            if (isClosed) {
                buttonLink = '#';
            } else if (isComingSoon) {
                buttonLink = `mailto:investments@apexcre.com?subject=Waitlist Request: ${prop.name}&body=Please add me to the early access waitlist for ${prop.name}.`;
                buttonText = 'JOIN WAITLIST';
            }

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

                let mapFeature;
                if (prop.boundary) {
                    mapFeature = L.polygon(prop.boundary, {
                        color: strokeColor,
                        fillColor: fillColor,
                        fillOpacity: 0.5,
                        weight: 3
                    });
                } else {
                    mapFeature = L.circleMarker([prop.lat, prop.lng], {
                        radius: 8,
                        color: strokeColor,
                        weight: 3,
                        fillColor: fillColor,
                        fillOpacity: 1
                    });
                }
                
                mapFeature.bindPopup(`
                    <div style="text-align: center; padding: 5px;">
                        <h4 style="margin: 0 0 5px; color: #0d1b2a; font-family: sans-serif;">${prop.name}</h4>
                        <p style="margin: 0 0 10px; font-size: 12px; color: #666;">${prop.location}</p>
                    </div>
                `);
                markersLayer.addLayer(mapFeature);
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

            let sitePlanHTML = '';
            if (prop.sitePlan) {
                sitePlanHTML = `<button class="secondary-btn" onclick="openModal('${prop.sitePlan}', '${prop.name}')">VIEW SITE PLAN</button>`;
            }

            let dataGridHTML = '';
            if (isClosed) {
                dataGridHTML = `
                    <div class="card-data-grid">
                        <div class="data-row">
                            <div class="data-cell"><strong>${prop.irr || 'TBD'}</strong><span>Internal Rate of Return</span></div>
                            <div class="data-cell"><strong>${prop.annualizedReturn || 'TBD'}</strong><span>Annualized Return</span></div>
                            <div class="data-cell"><strong>${prop.preferredReturn || 'TBD'}</strong><span>Preferred Return</span></div>
                        </div>
                    </div>
                `;
            } else {
                dataGridHTML = `
                    <div class="card-data-grid">
                        <div class="data-row">
                            <div class="data-cell"><strong>${prop.minInvestment || 'TBD'}</strong><span>Minimum Investment</span></div>
                            <div class="data-cell"><strong>${prop.offeringSize || 'TBD'}</strong><span>Offering size</span></div>
                            <div class="data-cell"><strong>${prop.secType || 'TBD'}</strong><span>SEC Type</span></div>
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
                        ${sitePlanHTML}
                    </div>
                    ${dataGridHTML}
                </div>
            `;

            if (isClosed && closedContainer) closedContainer.innerHTML += cardHTML;
            if (isComingSoon && comingSoonContainer) comingSoonContainer.innerHTML += cardHTML;
            if (isActive && activeContainer) activeContainer.innerHTML += cardHTML;
        });

        toggleSectionVisibility(activeContainer, visibleActiveCount);
        toggleSectionVisibility(comingSoonContainer, visibleSoonCount);
        toggleSectionVisibility(closedContainer, visibleClosedCount);
    };

    const toggleSectionVisibility = (container, count) => {
        if (!container) return;
        const header = container.previousElementSibling;
        if (count === 0) {
            container.classList.add('hidden-section');
            if (header && header.classList.contains('portfolio-category-header')) {
                header.classList.add('hidden-section');
            }
        } else {
            container.classList.remove('hidden-section');
            if (header && header.classList.contains('portfolio-category-header')) {
                header.classList.remove('hidden-section');
            }
        }
    };

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const group = e.target.getAttribute('data-filter-group');
            const filterVal = e.target.getAttribute('data-filter');

            document.querySelectorAll(`.filter-btn[data-filter-group="${group}"]`).forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            if (group === 'status') {
                currentStatusFilter = filterVal;
            } else if (group === 'type') {
                currentTypeFilter = filterVal;
            }
            renderPortfolio();
        });
    });

    renderPortfolio();
});

function openModal(imageSrc, propertyName) {
    document.getElementById('modal-title').innerText = propertyName + " - Site Plan";
    document.getElementById('modal-image').src = imageSrc;
    document.getElementById('site-plan-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('site-plan-modal').style.display = 'none';
    document.getElementById('modal-image').src = '';
}