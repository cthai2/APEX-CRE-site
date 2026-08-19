document.addEventListener("DOMContentLoaded", () => {
    let properties = [
        {
            name: "Trinity Bay RV Park & Lodging",
            location: "1512 South Main, Anahuac, TX 77514",
            lat: 29.7730,
            lng: -94.6820,
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
            population: "2,284",
            popGrowth: "+3.2%",
            medianIncome: "$68,500",
            crimeRating: "A-",
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
            population: "3,100",
            popGrowth: "+5.1%",
            medianIncome: "$72,400",
            crimeRating: "B+",
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
            propertyType: "RV Park",
            population: "15,800",
            popGrowth: "+8.4%",
            medianIncome: "$84,000",
            crimeRating: "A"
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
            population: "3,250",
            popGrowth: "+2.1%",
            medianIncome: "$55,000",
            crimeRating: "B",
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
            population: "25,100",
            popGrowth: "+1.8%",
            medianIncome: "$48,900",
            crimeRating: "B-",
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
            population: "98,000",
            popGrowth: "+6.5%",
            medianIncome: "$76,200",
            crimeRating: "A-",
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
            population: "1,300",
            popGrowth: "+4.1%",
            medianIncome: "$59,000",
            crimeRating: "A",
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
            propertyType: "RV Park",
            population: "17,500",
            popGrowth: "+1.2%",
            medianIncome: "$52,000",
            crimeRating: "B+"
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

    window.portfolioProperties = properties;

    const mapElement = document.getElementById('portfolio-map');
    let map, markersLayer;
    
    if (mapElement && !document.getElementById('demo-popup')) {
        const mapContainer = mapElement.parentElement;
        mapContainer.style.display = 'block';

        const popupHTML = `
            <div id="demo-popup" class="demo-popup-side">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; border-bottom: 1px solid #eaeaea; padding-bottom: 8px;">
                    <h4 id="demo-title" style="margin: 0; color: #0d1b2a; font-size: 0.95rem; text-transform: uppercase; letter-spacing: 1px;">Market Demographics</h4>
                    <span class="close-demo" onclick="document.getElementById('demo-popup').style.display='none'; window.dispatchEvent(new Event('resize'));" style="cursor: pointer; font-size: 1.2rem; color: #888; line-height: 1;">&times;</span>
                </div>
                <div class="demo-grid">
                    <div class="demo-cell"><strong>Population</strong><span id="demo-pop"></span></div>
                    <div class="demo-cell"><strong>Pop Growth</strong><span id="demo-growth"></span></div>
                    <div class="demo-cell"><strong>Median Income</strong><span id="demo-income"></span></div>
                    <div class="demo-cell"><strong>Crime Rating</strong><span id="demo-crime"></span></div>
                </div>
            </div>
        `;
        mapContainer.insertAdjacentHTML('beforeend', popupHTML);
    }
    
    if (mapElement) {
        const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles &copy; Esri',
            maxZoom: 19
        });

        const streetLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
            maxZoom: 19
        });

        map = L.map('portfolio-map', {
            center: [31.9686, -96.9018],
            zoom: 6,
            maxZoom: 19,
            layers: [streetLayer]
        });

        const baseMaps = {
            "Street Map": streetLayer,
            "Satellite": satelliteLayer
        };
        L.control.layers(baseMaps).addTo(map);

        L.Control.ResetView = L.Control.extend({
            options: { position: 'topleft' },
            onAdd: function (map) {
                var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
                container.innerHTML = '<a href="#" title="Zoom Out to Full Extent" style="font-size: 18px; text-decoration: none; color: #333; display: flex; align-items: center; justify-content: center; width: 30px; height: 30px; background-color: #fff;">🌍</a>';
                
                L.DomEvent.disableClickPropagation(container);
                
                container.onclick = function(e){
                    e.preventDefault();
                    map.flyTo([31.9686, -96.9018], 6, {
                        animate: true,
                        duration: 1.5
                    });
                }
                return container;
            }
        });
        map.addControl(new L.Control.ResetView());

        markersLayer = L.layerGroup().addTo(map);
    }

    window.flyToProperty = function(index) {
        const prop = window.portfolioProperties[index];
        if (!prop) return;

        const popup = document.getElementById('demo-popup');
        if (popup) {
            document.getElementById('demo-title').innerText = prop.name;
            document.getElementById('demo-pop').innerText = prop.population || 'TBD';
            document.getElementById('demo-growth').innerText = prop.popGrowth || 'TBD';
            document.getElementById('demo-income').innerText = prop.medianIncome || 'TBD';
            document.getElementById('demo-crime').innerText = prop.crimeRating || 'TBD';
            
            popup.style.display = 'none';
            setTimeout(() => { 
                popup.style.display = 'block'; 
                if (map) {
                    map.invalidateSize();
                    map.flyTo([prop.lat, prop.lng], 19, {
                        animate: true,
                        duration: 1.5
                    });
                }
            }, 10);
            
            document.getElementById('portfolio-map').scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

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
        let totalVisibleUnits = 0;

        properties.forEach((prop, index) => {
            const matchesStatus = currentStatusFilter === 'all' || prop.status === currentStatusFilter;
            const matchesType = currentTypeFilter === 'all' || prop.propertyType === currentTypeFilter;

            if (!matchesStatus || !matchesType) return;

            const isClosed = prop.status === 'closed';
            const isComingSoon = prop.status === 'coming-soon';
            const isActive = prop.status === 'active';

            if (isActive) visibleActiveCount++;
            if (isClosed) visibleClosedCount++;
            if (isComingSoon) visibleSoonCount++;
            
            totalVisibleUnits += (prop.units || 0);
            
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

                // Standard clean circle marker for every property pin
                let mapFeature = L.circleMarker([prop.lat, prop.lng], {
                    radius: 8,
                    color: strokeColor,
                    weight: 3,
                    fillColor: fillColor,
                    fillOpacity: 1
                });
                
                mapFeature.bindPopup(`
                    <div style="text-align: center; padding: 5px;">
                        <h4 style="margin: 0 0 5px; color: #0d1b2a; font-family: sans-serif;">${prop.name}</h4>
                        <p style="margin: 0 0 10px; font-size: 12px; color: #666;">${prop.location}</p>
                    </div>
                `);

                mapFeature.on('dblclick', (e) => {
                    L.DomEvent.stopPropagation(e); 
                    window.flyToProperty(index);
                });

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

            let financialGridHTML = '';
            if (isClosed) {
                financialGridHTML = `
                    <div class="card-data-grid">
                        <div class="data-row">
                            <div class="data-cell"><strong>${prop.irr || 'TBD'}</strong><span>Internal Rate of Return</span></div>
                            <div class="data-cell"><strong>${prop.annualizedReturn || 'TBD'}</strong><span>Annualized Return</span></div>
                            <div class="data-cell"><strong>${prop.preferredReturn || 'TBD'}</strong><span>Preferred Return</span></div>
                        </div>
                    </div>
                `;
            } else {
                financialGridHTML = `
                    <div class="card-data-grid">
                        <div class="data-row">
                            <div class="data-cell"><strong>${prop.minInvestment || 'TBD'}</strong><span>Minimum Investment</span></div>
                            <div class="data-cell"><strong>${prop.offeringSize || 'TBD'}</strong><span>Offering size</span></div>
                            <div class="data-cell"><strong>${prop.secType || 'TBD'}</strong><span>SEC Type</span></div>
                        </div>
                        <div class="data-row">
                            <div class="data-cell"><strong>${prop.dealType || 'TBD'}</strong><span>Deal Type</span></div>
                            <div class="data-cell"><strong>${prop.investmentType || 'TBD'}</strong><span>Investment Type</span></div>
                            <div class="data-cell"><strong>${prop.propertyType || 'TBD'}</strong><span>Property Type</span></div>
                        </div>
                    </div>
                `;
            }

            const cardHTML = `
                <div class="${cardClass}" ondblclick="flyToProperty(${index})" style="cursor: pointer;" title="Double-click to view on map">
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
                    ${financialGridHTML}
                </div>
            `;

            if (isClosed && closedContainer) closedContainer.innerHTML += cardHTML;
            if (isComingSoon && comingSoonContainer) comingSoonContainer.innerHTML += cardHTML;
            if (isActive && activeContainer) activeContainer.innerHTML += cardHTML;
        });

        toggleSectionVisibility(activeContainer, visibleActiveCount);
        toggleSectionVisibility(comingSoonContainer, visibleSoonCount);
        toggleSectionVisibility(closedContainer, visibleClosedCount);

        const totalProjectsCount = visibleActiveCount + visibleClosedCount + visibleSoonCount;
        
        const projectCountEl = document.getElementById('project-count');
        if (projectCountEl) {
            projectCountEl.setAttribute('data-target', totalProjectsCount);
        }

        const unitCountEl = document.getElementById('unit-count');
        if (unitCountEl) {
            unitCountEl.setAttribute('data-target', totalVisibleUnits);
        }

        runCounters();
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

function runCounters() {
    const counters = document.querySelectorAll('.counter');
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

function openModal(imageSrc, propertyName) {
    document.getElementById('modal-title').innerText = propertyName + " - Site Plan";
    document.getElementById('modal-image').src = imageSrc;
    document.getElementById('site-plan-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('site-plan-modal').style.display = 'none';
    document.getElementById('modal-image').src = '';
}

// =========================================
// Dark Mode Toggle Logic
// =========================================
const darkModeToggle = document.getElementById('dark-mode-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (darkModeToggle) {
        darkModeToggle.innerText = '☀️ Light Mode';
        darkModeToggle.style.color = '#e0e0e0';
    }
}

if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            darkModeToggle.innerText = '☀️ Light Mode';
            darkModeToggle.style.color = '#e0e0e0';
        } else {
            localStorage.setItem('theme', 'light');
            darkModeToggle.innerText = '🌙 Dark Mode';
            darkModeToggle.style.color = '#333';
        }
    });
}