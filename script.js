// Tag categories definition
const tagCategories = {
    "Signing Devices": ["ColdCard Q", "ColdCard MK(1-4)", "Jade", "Jade Plus", "Krux", "Trezor One", "Trezor T", "Trezor Safe(3/5)", "Ledger Flex", "KeepKey", "SeedSigner", "Passport Core", "Keystone", "Tapsigner", "Seedkeeper", "Satochip", "Specter DIY", "Specter Shield", "KeyFlint", "BitBox", "Bitkey", "Ledger Nano(S/X)", "Satodime", "Satscard", "OneKey", "Signing Devices (General)", "Opendime", "Frostsnap"],
    "Software Wallets": ["Sparrow", "Electrum", "BlueWallet", "Ginger", "Wasabi", "Phoenix", "Zeus", "Muun", "Nunchuk", "Liana", "Blockstream BTC Wallet", "Ashigaru", "Aqua", "Bitcoin Core Wallet", "Bitcoin Keeper", "JAM", "Envoy", "Fedi", "Minibits", "Mercury", "Nutstash", "Samourai", "Proton", "Specter Desktop", "Blitz", "Blixt", "Breez", "Cake", "Joltz", "Mutiny", "Theya", "Speed", "Yeti", "Zebedee", "Lily", "Wallet of Satoshi", "Cashu.me", "Simple Bitcoin Wallet"],
    "Bitcoin Nodes": ["Bitcoin Core", "Bitcoin Knots", "Umbrel", "Start9", "Bitcoin Core Node", "Citadel", "Fully Noded", "Raspiblitz", "RoninDojo", "Parmanode", "Electrum Rust Server (Electrs)", "Ubuntu Node Box", "MyNode", "Ashigaru Dojo", "Fulcrum", "Bitcoin Node Box"],
    "Mining": ["Avalon Nano", "NerdAxe", "Bitaxe", "Braiins Mini Miner", "DATUM", "Futurebit"],
    "Lightning Network": ["Lightning", "Thunderhub", "Alby", "Lightning Network Daemon (LND)", "Lightning Node Connect", "LNbits", "Ride The Lightning", "Voltage", "Core Lightning", "Bolt Ring", "Boltz", "Pool", "Loop"],
    "Privacy/Security": ["Coinjoin (Wabisabi)", "Non-KYC", "Verifying Downloads", "Seed Phrases (General)", "UTXO Management", "SeedQR", "Coinjoin (Whirlpool)", "Coinjoin (JoinMarket)", "Silent Payments", "Payjoin", "Statechains", "Encrypted Backups"],
    "Advanced Features": ["Multisig", "Child Seeds (BIP 85)", "Paynyms (BIP 47)", "Timelocks", "FROST", "Border Wallet", "Child Pays For Parent (CPFP)", "Replace By Fee (RBF)", "Shamir's Secret Sharing", "Seed XOR", "Gettxoutsetinfo (Audit Supply)", "Taproot Assets", "PSBT"],
    "Services/Exchanges": ["Bitcoin Well", "Hodl Hodl", "Kraken", "BTCPay Server", "Debifi", "Azteco", "Bisq", "Casa", "Unchained/Caravan", "Bittr", "Bitrefill", "Fountain", "Strike", "Spike to Spike", "LEDN", "Anchorwatch/Trident", "IBEXPay", "Robosats", "Peach", "Coinos", "Shakepay", "River", "Bull Bitcoin"],
    "Tokens": ["Liquid", "USDT", "Testnet"],
    "Ecash": ["Fedimints", "Cashu"]
};

// Your video database - add your own tutorials here
const videoData = [];

let currentVideos = [...videoData];
let sortAscending = false;

// DOM elements
const videoGrid = document.getElementById('video-grid');
const sortBy = document.getElementById('sort-by');
const sortOrderBtn = document.getElementById('sort-order');
const creatorFilter = document.getElementById('creator-filter');
const tagFilter = document.getElementById('tag-filter');

// Initialize the application
function init() {
    loadDefaultCSV();
}

// Load default CSV file on startup
function loadDefaultCSV() {
    fetch('video_template.csv')
        .then(response => response.text())
        .then(csvContent => {
            const newVideos = parseCSV(csvContent);
            videoData.push(...newVideos);
            currentVideos = [...videoData];
            populateFilters();
            renderVideos(currentVideos);
            setupEventListeners();
        })
        .catch(error => {
            console.error('Error loading default CSV:', error);
            // Continue with empty data if CSV fails to load
            populateFilters();
            renderVideos(currentVideos);
            setupEventListeners();
        });
}

// Populate filter dropdowns
function populateFilters() {
    // Clear existing options except "All" options
    creatorFilter.innerHTML = '<option value="">All Creators</option>';
    tagFilter.innerHTML = '<option value="">All Tags</option>';
    
    // Get unique creators
    const creators = [...new Set(videoData.map(video => video.creator))].sort();
    creators.forEach(creator => {
        const option = document.createElement('option');
        option.value = creator;
        option.textContent = creator;
        creatorFilter.appendChild(option);
    });

    // Organize tags by categories
    const allTags = [...new Set(videoData.flatMap(video => video.tags))];
    
    // Create categorized options
    Object.keys(tagCategories).forEach(categoryName => {
        const categoryTags = tagCategories[categoryName].filter(tag => allTags.includes(tag));
        
        if (categoryTags.length > 0) {
            // Add category header as disabled option
            const categoryHeader = document.createElement('option');
            categoryHeader.textContent = `── ${categoryName.toUpperCase()} ──`;
            categoryHeader.disabled = true;
            categoryHeader.className = `category-header category-${categoryName.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
            tagFilter.appendChild(categoryHeader);
            
            // Add tags within this category
            categoryTags.sort().forEach(tag => {
                const option = document.createElement('option');
                option.value = tag;
                option.textContent = `  ${tag}`;
                option.className = 'category-item';
                tagFilter.appendChild(option);
            });
        }
    });
    
    // Note: "Other" category has been removed - uncategorized tags will not be displayed
}

// Render videos to the grid
function renderVideos(videos) {
    videoGrid.innerHTML = '';
    
    videos.forEach(video => {
        const videoCard = createVideoCard(video);
        videoGrid.appendChild(videoCard);
    });
}

// Get category class name for a tag
function getCategoryClass(tag) {
    for (const [category, tags] of Object.entries(tagCategories)) {
        if (tags.includes(tag)) {
            return 'tag-' + category.toLowerCase().replace(/[^a-z0-9]/g, '-');
        }
    }
    return 'tag-advanced-features'; // default fallback
}

// Get category order index for sorting
function getCategoryOrder(tag) {
    const categoryOrder = [
        "Signing Devices",
        "Software Wallets", 
        "Bitcoin Nodes",
        "Mining",
        "Lightning Network",
        "Privacy/Security",
        "Advanced Features",
        "Services/Exchanges",
        "Tokens",
        "Ecash"
    ];
    
    for (const [category, tags] of Object.entries(tagCategories)) {
        if (tags.includes(tag)) {
            return categoryOrder.indexOf(category);
        }
    }
    return categoryOrder.indexOf("Advanced Features"); // default fallback
}

// Sort tags by category order, then alphabetically within category
function sortTags(tags) {
    return tags.sort((a, b) => {
        const orderA = getCategoryOrder(a);
        const orderB = getCategoryOrder(b);
        
        // First sort by category order
        if (orderA !== orderB) {
            return orderA - orderB;
        }
        
        // Then sort alphabetically within the same category
        return a.localeCompare(b);
    });
}

// Create individual video card
function createVideoCard(video) {
    const card = document.createElement('div');
    card.className = 'video-card';
    
    const formattedDate = new Date(video.date + 'T00:00:00').toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    const sortedTags = sortTags([...video.tags]);
    const tagsHTML = sortedTags.map(tag => {
        const categoryClass = getCategoryClass(tag);
        return `<span class="tag clickable-tag ${categoryClass}" data-tag="${tag}">${tag}</span>`;
    }).join('');
    
    card.innerHTML = `
        <div class="video-thumbnail" data-youtube-id="${video.youtubeId}">
            <img src="https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg" 
                 alt="${video.title}"
                 class="thumbnail-image"
                 onerror="this.onerror=null; this.src='https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg'; this.onerror=function(){this.src='https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg';}">
            <div class="play-button">▶</div>
        </div>
        <div class="video-info">
            <div class="video-title">${video.title}</div>
            <div class="video-creator">by <span class="clickable-creator" data-creator="${video.creator}">${video.creator}</span></div>
            <div class="video-date">${formattedDate}</div>
            <div class="video-tags">${tagsHTML}</div>
        </div>
    `;
    
    // Add click listener to video thumbnail
    const thumbnail = card.querySelector('.video-thumbnail');
    thumbnail.addEventListener('click', () => {
        const youtubeId = thumbnail.getAttribute('data-youtube-id');
        window.open(`https://www.youtube.com/watch?v=${youtubeId}`, '_blank');
    });
    
    // Add click listeners to clickable tags
    const tagElements = card.querySelectorAll('.clickable-tag');
    tagElements.forEach(tagElement => {
        tagElement.addEventListener('click', (e) => {
            e.preventDefault();
            const tagName = tagElement.getAttribute('data-tag');
            tagFilter.value = tagName;
            applyFiltersAndSort();
        });
    });
    
    // Add click listener to clickable creator
    const creatorElement = card.querySelector('.clickable-creator');
    creatorElement.addEventListener('click', (e) => {
        e.preventDefault();
        const creatorName = creatorElement.getAttribute('data-creator');
        creatorFilter.value = creatorName;
        applyFiltersAndSort();
    });
    
    return card;
}

// Sort videos
function sortVideos(videos, sortBy, ascending = true) {
    return videos.sort((a, b) => {
        let valueA, valueB;
        
        switch(sortBy) {
            case 'date':
                valueA = new Date(a.date);
                valueB = new Date(b.date);
                break;
            case 'creator':
                valueA = a.creator.toLowerCase();
                valueB = b.creator.toLowerCase();
                break;
            case 'title':
                valueA = a.title.toLowerCase();
                valueB = b.title.toLowerCase();
                break;
            default:
                return 0;
        }
        
        if (valueA < valueB) return ascending ? -1 : 1;
        if (valueA > valueB) return ascending ? 1 : -1;
        return 0;
    });
}

// Filter videos
function filterVideos(videos, creatorFilter, tagFilter) {
    return videos.filter(video => {
        const creatorMatch = !creatorFilter || video.creator === creatorFilter;
        const tagMatch = !tagFilter || video.tags.includes(tagFilter);
        return creatorMatch && tagMatch;
    });
}

// Apply current filters and sorting
function applyFiltersAndSort() {
    let filteredVideos = filterVideos(
        videoData,
        creatorFilter.value,
        tagFilter.value
    );
    
    filteredVideos = sortVideos(filteredVideos, sortBy.value, sortAscending);
    currentVideos = filteredVideos;
    renderVideos(currentVideos);
}

// Parse CSV content
function parseCSV(csvContent) {
    const lines = csvContent.trim().split('\n');
    const headers = lines[0].split(',').map(header => header.replace(/"/g, '').trim());
    
    const videos = [];
    for (let i = 1; i < lines.length; i++) {
        const values = parseCSVLine(lines[i]);
        if (values.length === headers.length) {
            const video = {
                id: videoData.length + videos.length + 1,
                title: values[0],
                creator: values[1],
                date: values[2],
                youtubeId: values[3],
                tags: values[4] ? values[4].split(',').map(tag => tag.trim()) : []
            };
            videos.push(video);
        }
    }
    return videos;
}

// Parse a single CSV line handling quoted values
function parseCSVLine(line) {
    const result = [];
    let current = '';
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        
        if (char === '"') {
            inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
            result.push(current.trim());
            current = '';
        } else {
            current += char;
        }
    }
    result.push(current.trim());
    return result;
}



// Setup event listeners
function setupEventListeners() {
    sortBy.addEventListener('change', applyFiltersAndSort);
    creatorFilter.addEventListener('change', applyFiltersAndSort);
    tagFilter.addEventListener('change', applyFiltersAndSort);
    
    sortOrderBtn.addEventListener('click', () => {
        sortAscending = !sortAscending;
        sortOrderBtn.textContent = sortAscending ? '↑ Asc' : '↓ Desc';
        applyFiltersAndSort();
    });
    
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);