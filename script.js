// Tag categories definition
const tagCategories = {
    "Signing Devices": ["ColdCard Q", "ColdCard MK(1-4)", "Jade", "Jade Plus", "Krux", "Trezor One", "Trezor T", "Trezor Safe(3/5)", "Ledger Flex", "KeepKey", "SeedSigner", "Passport Core", "Keystone", "Tapsigner", "Seedkeeper", "Satochip", "Specter DIY", "Specter Shield", "KeyFlint", "BitBox", "Bitkey", "Ledger Nano(S/X)", "Satodime", "Satscard", "OneKey", "Signing Devices (General)", "Opendime", "Frostsnap"],
    "Wallets": ["Sparrow", "Electrum", "BlueWallet", "Ginger", "Wasabi", "Phoenix", "Zeus", "Muun", "Nunchuk", "Liana", "Blockstream BTC Wallet", "Ashigaru", "Aqua", "Bitcoin Core Wallet", "Bitcoin Keeper", "JAM", "Envoy", "Fedi", "Minibits", "Mercury", "Nutstash", "Samourai", "Proton", "Specter Desktop", "Blitz", "Blixt", "Breez", "Cake", "Joltz", "Mutiny", "Theya", "Speed", "Yeti", "Zebedee", "Lily", "Wallet of Satoshi", "Cashu.me", "Simple Bitcoin Wallet", "Spark", "eNuts"],
    "Nodes & Servers": ["Bitcoin Core", "Bitcoin Knots", "Umbrel", "Start9", "Bitcoin Core Node", "Citadel", "Fully Noded", "Raspiblitz", "RoninDojo", "Parmanode", "Electrum Rust Server (Electrs)", "Ubuntu Node Box", "MyNode", "Ashigaru Dojo", "Fulcrum", "Bitcoin Node Box"],
    "Mining": ["Avalon Nano", "NerdAxe", "Bitaxe", "Braiins Mini Miner", "DATUM", "Futurebit", "Braiins Pool"],
    "Lightning Network": ["Lightning", "Thunderhub", "Alby", "Lightning Network Daemon (LND)", "Lightning Node Connect", "LNbits", "Ride The Lightning", "Voltage", "Core Lightning", "Bolt Ring", "Boltz", "Pool", "Loop"],
    "Privacy & Security": ["Coinjoin (Wabisabi)", "Non-KYC", "Verifying Downloads", "Seed Phrases (General)", "UTXO Management", "SeedQR", "Coinjoin (Whirlpool)", "Coinjoin (JoinMarket)", "Silent Payments", "Payjoin", "Statechains", "Encrypted Backups"],
    "Advanced Features": ["Multisig", "Child Seeds (BIP 85)", "Paynyms (BIP 47)", "Timelocks", "FROST", "Border Wallet", "Child Pays For Parent (CPFP)", "Replace By Fee (RBF)", "Shamir's Secret Sharing (SLIP-39)", "Seed XOR", "Gettxoutsetinfo (Audit Supply)", "Taproot Assets", "PSBT", "Mempool Accelerator"],
    "Services & Exchanges": ["Bitcoin Well", "Hodl Hodl", "Kraken", "BTCPay Server", "Debifi", "Azteco", "Bisq", "Casa", "Unchained/Caravan", "Bittr", "Bitrefill", "Fountain", "Strike", "Spike to Spike", "LEDN", "Anchorwatch/Trident", "IBEXPay", "Robosats", "Peach", "Coinos", "Shakepay", "River", "Bull Bitcoin", "Bitaroo"],
    "Tokens": ["Liquid", "USDT", "Testnet"],
    "Ecash": ["Fedimints", "Cashu"]
};

// Your video database - add your own tutorials here
const videoData = [];
let currentVideos = [...videoData];
let sortAscending = false;

// Search functionality variables
let activeFilters = new Set();
let filterTypes = new Map(); // Store the type of each filter
let allTags = [];
let allCreators = [];

// DOM elements
const videoGrid = document.getElementById('video-grid');
const sortBy = document.getElementById('sort-by');
const sortOrderBtn = document.getElementById('sort-order');
const searchInput = document.getElementById('search-input');
const searchSuggestions = document.getElementById('search-suggestions');
const clearSearchBtn = document.getElementById('clear-search');
const activeFiltersContainer = document.getElementById('active-filters');
const tagCategoriesContainer = document.getElementById('tag-categories');
const videoCountNumber = document.getElementById('video-count-number');
const priceValue = document.getElementById('price-value');
const blockHeight = document.getElementById('block-height');
const videoModal = document.getElementById('video-modal');
const videoIframe = document.getElementById('video-iframe');
const videoModalTitle = document.getElementById('video-modal-title');
const videoModalCreator = document.getElementById('video-modal-creator');
const videoModalClose = document.querySelector('.video-modal-close');

// Bitcoin API functions
async function fetchBitcoinPrice() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        const data = await response.json();
        const price = Math.round(data.bitcoin.usd);
        priceValue.textContent = price.toLocaleString();
    } catch (error) {
        console.error('Error fetching Bitcoin price:', error);
        // Try backup API
        try {
            const backupResponse = await fetch('https://api.coinbase.com/v2/exchange-rates?currency=BTC');
            const backupData = await backupResponse.json();
            const backupPrice = Math.round(parseFloat(backupData.data.rates.USD));
            priceValue.textContent = backupPrice.toLocaleString();
        } catch (backupError) {
            console.error('Backup API also failed:', backupError);
            priceValue.textContent = 'Error';
        }
    }
}

async function fetchBlockHeight() {
    try {
        const response = await fetch('https://blockstream.info/api/blocks/tip/height');
        const height = await response.text();
        blockHeight.textContent = parseInt(height).toLocaleString();
    } catch (error) {
        console.error('Error fetching block height:', error);
        blockHeight.textContent = 'Error';
    }
}

// Video modal functions
function openVideoModal(video) {
    videoModalTitle.textContent = video.title;
    videoModalCreator.textContent = `by ${video.creator}`;
    videoIframe.src = `https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0&modestbranding=1&showinfo=0`;
    videoModal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeVideoModal() {
    videoModal.style.display = 'none';
    videoIframe.src = ''; // Stop video playback
    document.body.style.overflow = 'auto'; // Restore background scrolling
}

// Initialize Bitcoin data
function initBitcoinData() {
    fetchBitcoinPrice();
    fetchBlockHeight();

    // Update every 5 minutes
    setInterval(() => {
        fetchBitcoinPrice();
        fetchBlockHeight();
    }, 5 * 60 * 1000);
}

// Initialize the application
function init() {
    loadDefaultCSV();
    initBitcoinData();
}

// Load default CSV file on startup
function loadDefaultCSV() {
    fetch('video_template.csv')
        .then(response => response.text())
        .then(csvContent => {
            const newVideos = parseCSV(csvContent);
            videoData.push(...newVideos);
            currentVideos = [...videoData];
            initializeSearchData();
            populateTagSidebar();
            renderVideos(currentVideos);
            setupEventListeners();
        })
        .catch(error => {
            console.error('Error loading default CSV:', error);
            // Continue with empty data if CSV fails to load
            initializeSearchData();
            populateTagSidebar();
            renderVideos(currentVideos);
            setupEventListeners();
        });
}

// Initialize search data arrays
function initializeSearchData() {
    allTags = [...new Set(videoData.flatMap(video => video.tags))].sort();
    allCreators = [...new Set(videoData.map(video => video.creator))].sort();
}

// Search functionality
function performSearch(query) {
    if (!query.trim()) {
        currentVideos = [...videoData];
        renderVideos(currentVideos);
        return;
    }

    const searchTerm = query.toLowerCase().trim();
    const filteredVideos = videoData.filter(video => {
        const titleMatch = video.title.toLowerCase().includes(searchTerm);
        const creatorMatch = video.creator.toLowerCase().includes(searchTerm);
        const tagMatch = video.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        return titleMatch || creatorMatch || tagMatch;
    });

    currentVideos = sortVideos(filteredVideos, sortBy.value, sortAscending);
    renderVideos(currentVideos);
}

// Generate search suggestions
function generateSuggestions(query) {
    if (!query.trim()) {
        hideSuggestions();
        return;
    }

    const searchTerm = query.toLowerCase().trim();
    const suggestions = [];

    // Add matching creators
    allCreators.forEach(creator => {
        if (creator.toLowerCase().includes(searchTerm)) {
            suggestions.push({ text: creator, type: 'creator' });
        }
    });

    // Add matching tags
    allTags.forEach(tag => {
        if (tag.toLowerCase().includes(searchTerm)) {
            suggestions.push({ text: tag, type: 'tag' });
        }
    });

    // Limit to 8 suggestions
    const limitedSuggestions = suggestions.slice(0, 8);
    displaySuggestions(limitedSuggestions);
}

// Display search suggestions
function displaySuggestions(suggestions) {
    if (suggestions.length === 0) {
        hideSuggestions();
        return;
    }

    searchSuggestions.innerHTML = '';
    suggestions.forEach(suggestion => {
        const suggestionElement = document.createElement('div');
        suggestionElement.className = 'suggestion-item';

        if (suggestion.type === 'tag') {
            // For tags: use category color background, no type label
            const categoryClass = getCategoryClass(suggestion.text);
            suggestionElement.innerHTML = `
                <span class="suggestion-text suggestion-tag ${categoryClass}">${suggestion.text}</span>
            `;
        } else {
            // For creators: keep the existing style with type label
            suggestionElement.innerHTML = `
                <span class="suggestion-text">${suggestion.text}</span>
                <span class="suggestion-type ${suggestion.type}">${suggestion.type}</span>
            `;
        }

        suggestionElement.addEventListener('click', () => {
            addActiveFilter(suggestion.text, suggestion.type);

            // Update sidebar tag visual state if it's a tag filter
            if (suggestion.type === 'tag') {
                const sidebarTag = document.querySelector(`.sidebar-tag[data-tag="${suggestion.text}"]`);
                if (sidebarTag) {
                    sidebarTag.classList.add('active');
                }
            }

            searchInput.value = ''; // Clear search input
            hideSuggestions();
            toggleClearButton();
            applyActiveFilters();
        });

        searchSuggestions.appendChild(suggestionElement);
    });

    searchSuggestions.style.display = 'block';
}

// Hide search suggestions
function hideSuggestions() {
    searchSuggestions.style.display = 'none';
}

// Add active filter
function addActiveFilter(filterText, filterType) {
    // Create unique identifier for creator vs tag with same name
    const filterKey = `${filterText}:${filterType}`;

    if (!activeFilters.has(filterKey)) {
        activeFilters.add(filterKey);
        filterTypes.set(filterKey, filterType); // Store the type
        updateActiveFiltersDisplay();
    }
}

// Remove active filter
function removeActiveFilter(filterKey) {
    activeFilters.delete(filterKey);
    filterTypes.delete(filterKey); // Remove the type

    // Extract the original filter text for sidebar update
    const filterText = filterKey.split(':')[0];
    const filterType = filterKey.split(':')[1];

    // Update sidebar tag visual state only if it's a tag filter
    if (filterType === 'tag') {
        // Check if there are still other tag filters with the same name
        const hasOtherTagFilters = Array.from(activeFilters).some(key =>
            key.startsWith(`${filterText}:tag`) && key !== filterKey
        );

        if (!hasOtherTagFilters) {
            const sidebarTag = document.querySelector(`.sidebar-tag[data-tag="${filterText}"]`);
            if (sidebarTag) {
                sidebarTag.classList.remove('active');
            }
        }
    }

    updateActiveFiltersDisplay();
    applyActiveFilters();
}

// Update active filters display
function updateActiveFiltersDisplay() {
    activeFiltersContainer.innerHTML = '';
    activeFilters.forEach(filterKey => {
        const filterElement = document.createElement('div');
        filterElement.className = 'active-filter';

        // Extract filter text and type
        const filterText = filterKey.split(':')[0];
        const filterType = filterKey.split(':')[1];

        // Use stored filter type to determine styling
        if (filterType === 'creator') {
            filterElement.classList.add('creator');
        } else if (filterType === 'tag') {
            // For tags, use category class
            const categoryClass = getCategoryClass(filterText);
            if (categoryClass) {
                filterElement.classList.add(categoryClass);
            }
        }

        // Use just the filter text without type indicator - color distinguishes them
        const displayText = filterText;

        filterElement.innerHTML = `
            <span>${displayText}</span>
            <span class="filter-remove" data-filter="${filterKey}">×</span>
        `;
        activeFiltersContainer.appendChild(filterElement);
    });

    // Add event listeners to remove buttons
    document.querySelectorAll('.filter-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            removeActiveFilter(e.target.dataset.filter);
        });
    });

    // Disable/enable dropdown filters based on search activity
    updateDropdownFiltersState();
}

// Apply active filters
function applyActiveFilters() {
    if (activeFilters.size === 0) {
        currentVideos = [...videoData];
    } else {
        const filterArray = Array.from(activeFilters);

        // Extract filter texts by type
        const tagFilters = filterArray
            .filter(filterKey => filterTypes.get(filterKey) === 'tag')
            .map(filterKey => filterKey.split(':')[0]);
        const creatorFilters = filterArray
            .filter(filterKey => filterTypes.get(filterKey) === 'creator')
            .map(filterKey => filterKey.split(':')[0]);
        const searchFilters = filterArray
            .filter(filterKey => filterTypes.get(filterKey) === 'search' || !filterTypes.has(filterKey))
            .map(filterKey => filterKey.split(':')[0]);

        currentVideos = videoData.filter(video => {
            // For tag filters: video must have ALL selected tags
            const tagMatch = tagFilters.length === 0 || tagFilters.every(tagFilter =>
                video.tags.some(tag => tag.toLowerCase() === tagFilter.toLowerCase())
            );

            // For creator filters: video must match ANY selected creator
            const creatorMatch = creatorFilters.length === 0 || creatorFilters.some(creatorFilter =>
                video.creator.toLowerCase() === creatorFilter.toLowerCase()
            );

            // For search filters: video must match ANY search term
            const searchMatch = searchFilters.length === 0 || searchFilters.some(searchFilter => {
                const filterLower = searchFilter.toLowerCase();
                return video.title.toLowerCase().includes(filterLower) ||
                       video.creator.toLowerCase().includes(filterLower) ||
                       video.tags.some(tag => tag.toLowerCase().includes(filterLower));
            });

            return tagMatch && creatorMatch && searchMatch;
        });
    }

    currentVideos = sortVideos(currentVideos, sortBy.value, sortAscending);
    renderVideos(currentVideos);
}

// Handle sidebar tag clicks
function handleSidebarTagClick(tag, tagElement) {
    const tagFilterKey = `${tag}:tag`;

    // Toggle active state
    if (tagElement.classList.contains('active')) {
        tagElement.classList.remove('active');
        removeActiveFilter(tagFilterKey);
    } else {
        tagElement.classList.add('active');
        addActiveFilter(tag, 'tag');
        applyActiveFilters();
    }

    // Scroll to top of page
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Update dropdown filters state (disable when search is active)
function updateDropdownFiltersState() {
    // No dropdown filters to disable anymore
}

// Clear all filters
function clearAllFilters() {
    activeFilters.clear();
    filterTypes.clear(); // Clear filter types
    searchInput.value = '';

    // Clear sidebar tag selections
    document.querySelectorAll('.sidebar-tag.active').forEach(el => el.classList.remove('active'));

    updateActiveFiltersDisplay();
    currentVideos = [...videoData];
    applyFiltersAndSort();
    hideSuggestions();
    toggleClearButton();
}

// Toggle clear search button visibility
function toggleClearButton() {
    clearSearchBtn.style.display = searchInput.value.trim() ? 'flex' : 'none';
}


// Toggle category collapse/expand
function toggleCategory(categoryTitle, tagsContainer) {
    const isCollapsed = categoryTitle.classList.contains('collapsed');

    if (isCollapsed) {
        // Expand
        categoryTitle.classList.remove('collapsed');
        tagsContainer.classList.remove('collapsed');
    } else {
        // Collapse
        categoryTitle.classList.add('collapsed');
        tagsContainer.classList.add('collapsed');
    }
}

// Populate tag sidebar
function populateTagSidebar() {
    tagCategoriesContainer.innerHTML = '';

    // Get all tags used in the data
    const allTagsInData = [...new Set(videoData.flatMap(video => video.tags))];

    // Create categories with their tags
    Object.keys(tagCategories).forEach(categoryName => {
        const categoryTags = tagCategories[categoryName].filter(tag => allTagsInData.includes(tag));

        if (categoryTags.length > 0) {
            const categoryElement = document.createElement('div');
            categoryElement.className = 'tag-category';

            const categoryTitle = document.createElement('div');
            categoryTitle.className = `category-title category-${categoryName.toLowerCase().replace(/[^a-z0-9]/g, '-')} collapsed`;
            categoryTitle.textContent = categoryName;

            // Add click handler to toggle category
            categoryTitle.addEventListener('click', () => {
                toggleCategory(categoryTitle, tagsContainer);
            });

            const tagsContainer = document.createElement('div');
            tagsContainer.className = 'category-tags collapsed';

            categoryTags.sort().forEach(tag => {
                const tagElement = document.createElement('div');
                tagElement.className = `sidebar-tag ${getCategoryClass(tag)}`;
                tagElement.textContent = tag;
                tagElement.dataset.tag = tag;

                tagElement.addEventListener('click', () => {
                    handleSidebarTagClick(tag, tagElement);
                });

                tagsContainer.appendChild(tagElement);
            });

            categoryElement.appendChild(categoryTitle);
            categoryElement.appendChild(tagsContainer);
            tagCategoriesContainer.appendChild(categoryElement);
        }
    });
}

// Update video count display
function updateVideoCount(count) {
    videoCountNumber.textContent = count;
}

// Render videos to the grid
function renderVideos(videos) {
    videoGrid.innerHTML = '';

    videos.forEach(video => {
        const videoCard = createVideoCard(video);
        videoGrid.appendChild(videoCard);
    });

    // Update the video count display
    updateVideoCount(videos.length);
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
        "Wallets",
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
        openVideoModal(video);
    });

    // Add click listener to video title
    const videoTitle = card.querySelector('.video-title');
    videoTitle.addEventListener('click', () => {
        openVideoModal(video);
    });

    // Add click listeners to clickable tags
    const tagElements = card.querySelectorAll('.clickable-tag');
    tagElements.forEach(tagElement => {
        tagElement.addEventListener('click', (e) => {
            e.preventDefault();
            const tagName = tagElement.getAttribute('data-tag');

            // Update sidebar tag visual state
            const sidebarTag = document.querySelector(`.sidebar-tag[data-tag="${tagName}"]`);
            if (sidebarTag) {
                sidebarTag.classList.add('active');
            }

            addActiveFilter(tagName, 'tag');
            applyActiveFilters();

            // Scroll to top of page
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
    
    // Add click listener to clickable creator
    const creatorElement = card.querySelector('.clickable-creator');
    creatorElement.addEventListener('click', (e) => {
        e.preventDefault();
        const creatorName = creatorElement.getAttribute('data-creator');
        addActiveFilter(creatorName, 'creator');
        applyActiveFilters();

        // Scroll to top of page
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
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

// Apply current filters and sorting (legacy dropdown support)
function applyFiltersAndSort() {
    let filteredVideos = [...videoData];

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
    // Sort controls - use the new filter system
    sortBy.addEventListener('change', () => {
        applyActiveFilters(); // Use the new filter system instead
    });

    sortOrderBtn.addEventListener('click', () => {
        sortAscending = !sortAscending;
        sortOrderBtn.textContent = sortAscending ? '↑ Asc' : '↓ Desc';
        applyActiveFilters(); // Use the new filter system instead
    });
    
    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value;
        toggleClearButton();
        generateSuggestions(query);
        updateDropdownFiltersState();

        // Real-time search with debouncing
        clearTimeout(searchInput.searchTimeout);
        searchInput.searchTimeout = setTimeout(() => {
            if (activeFilters.size === 0) {
                performSearch(query);
            }
        }, 300);
    });

    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const query = searchInput.value.trim();
            if (query) {
                addActiveFilter(query, 'search');
                searchInput.value = ''; // Clear search input
                toggleClearButton();
                applyActiveFilters();
            }
            hideSuggestions();
        } else if (e.key === 'Escape') {
            hideSuggestions();
            searchInput.blur();
        }
    });

    // Clear search button
    clearSearchBtn.addEventListener('click', clearAllFilters);


    // Video modal event listeners
    videoModalClose.addEventListener('click', closeVideoModal);

    // Close modal when clicking outside
    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            closeVideoModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal.style.display === 'block') {
            closeVideoModal();
        }
    });

    // Hide suggestions when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchSuggestions.contains(e.target)) {
            hideSuggestions();
        }
    });

    // Initialize dropdown filter state
    updateDropdownFiltersState();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
