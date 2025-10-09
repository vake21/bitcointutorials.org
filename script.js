// Tag categories definition
const tagCategories = {
    "Signing Devices": ["ColdCard Q", "ColdCard MK(1-4)", "Jade", "Jade Plus", "Krux", "Trezor One", "Trezor T", "Trezor Safe(3/5)", "Ledger Flex", "KeepKey", "SeedSigner", "Passport Core", "Keystone", "Tapsigner", "Seedkeeper", "Satochip", "Specter DIY", "KeyFlint", "BitBox", "Bitkey", "Ledger Nano(S/X)", "Satodime", "Satscard", "OneKey", "Signing Devices (General)", "Opendime", "Frostsnap"],
    "Wallets": ["Sparrow", "Electrum", "BlueWallet", "Ginger", "Wasabi", "Phoenix", "Zeus", "Muun", "Nunchuk", "Liana", "Blockstream App", "Ashigaru", "Aqua", "Bitcoin Core Wallet", "Bitcoin Keeper", "JAM", "Envoy", "Fedi", "Minibits", "Mercury", "Nutstash", "Samourai", "Proton", "Specter Desktop", "Blitz", "Blixt", "Breez", "Cake", "Joltz", "Mutiny", "Theya", "Speed", "Yeti", "Zebedee", "Lily", "Wallet of Satoshi", "Cashu.me", "Spark", "eNuts"],
    "Nodes & Servers": ["Bitcoin Core", "Bitcoin Knots", "Umbrel", "Start9", "Bitcoin Core Node", "Citadel", "Fully Noded", "Raspiblitz", "RoninDojo", "Parmanode", "Electrum Rust Server (Electrs)", "Ubuntu Node Box", "MyNode", "Ashigaru Dojo", "Fulcrum", "Bitcoin Node Box"],
    "Mining": ["Avalon Nano", "NerdAxe", "Bitaxe", "Braiins Mini Miner", "DATUM", "Futurebit", "Braiins Pool"],
    "Lightning Network": ["Lightning", "Thunderhub", "Alby", "Lightning Network Daemon (LND)", "Lightning Node Connect", "LNbits", "Ride The Lightning", "Voltage", "Core Lightning", "Bolt Ring", "Boltz", "Pool", "Loop"],
    "Services & Exchanges": ["Bitcoin Well", "Hodl Hodl", "Kraken", "BTCPay Server", "Debifi", "Azteco", "Bisq", "Casa", "Unchained/Caravan", "Bittr", "Bitrefill", "Fountain", "Strike", "Spike to Spike", "LEDN", "Anchorwatch/Trident", "IBEXPay", "Robosats", "Peach", "Coinos", "Shakepay", "River", "Bull Bitcoin", "Bitaroo", "Mempool.space Accelerator"],
    "Tokens": ["Liquid", "USDT", "Testnet"],
    "Ecash": ["Fedimint", "Cashu"],
    "Privacy & Security": ["Coinjoin (Wabisabi)", "Non-KYC", "Verifying Downloads", "Seed Phrases (General)", "UTXO Management", "SeedQR", "Coinjoin (Whirlpool)", "Coinjoin (JoinMarket)", "Silent Payments", "Payjoin", "Encrypted Backups", "Child Seeds (BIP 85)", "Multisig", "Paynyms (BIP 47)", "Seed XOR", "Shamir's Secret Sharing (SLIP-39)"],
    "Advanced Features": ["Timelocks", "FROST", "Border Wallet", "Child Pays For Parent (CPFP)", "Replace By Fee (RBF)", "Gettxoutsetinfo (Audit Supply)", "Taproot Assets", "Partially Signed Bitcoin Transactions (PSBT)", "Statechains"]
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
let closedInfoBoxes = new Set(); // Store which info boxes have been closed

// Filter info for social media links
let filterInfoMap = new Map(); // Store social links by "name:type" key

// DOM elements
const videoGrid = document.getElementById('video-grid');
const sortBy = document.getElementById('sort-by');
const sortOrderBtn = document.getElementById('sort-order');
const searchInput = document.getElementById('search-input');
const searchSuggestions = document.getElementById('search-suggestions');
const clearSearchBtn = document.getElementById('clear-search');
const clearAllFiltersBtn = document.getElementById('clear-all-filters-btn');
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
const headerBanner = document.getElementById('header-banner');

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
    loadFilterInfo();
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
            console.error('Error loading CSV file:', error);
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

// Load filter info CSV
function loadFilterInfo() {
    fetch('social-icons-info.csv')
        .then(response => response.text())
        .then(csvContent => {
            parseFilterInfo(csvContent);
            updateActiveFiltersDisplay(); // Refresh display with new social links
        })
        .catch(error => {
            console.log('Social icons info not available:', error);
            // Site continues to work without social links
        });
}

// Parse filter info CSV
function parseFilterInfo(csvContent) {
    const lines = csvContent.trim().split('\n');
    if (lines.length < 2) return; // No data rows

    const headers = lines[0].split(',').map(h => h.trim());

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;

        const values = parseCSVLine(line);
        if (values.length < 2) continue;

        const name = values[0].replace(/"/g, '').trim();
        const type = values[1].replace(/"/g, '').trim();
        const website = values[2] ? values[2].replace(/"/g, '').trim() : '';
        const youtube = values[3] ? values[3].replace(/"/g, '').trim() : '';
        const github = values[4] ? values[4].replace(/"/g, '').trim() : '';
        const twitter = values[5] ? values[5].replace(/"/g, '').trim() : '';
        const nostr = values[6] ? values[6].replace(/"/g, '').trim() : '';

        const key = `${name}:${type}`;
        filterInfoMap.set(key, { website, youtube, github, twitter, nostr });
    }
    console.log(`Loaded info for ${filterInfoMap.size} filters`);
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
            // For tags: use category color background and add tag icon to the left
            const categoryClass = getCategoryClass(suggestion.text);
            const tagIcon = getTagIconWithFallback(suggestion.text);
            suggestionElement.classList.add('tag-suggestion', categoryClass);
            suggestionElement.innerHTML = `
                <span class="suggestion-icon-container">${tagIcon}</span>
                <span class="suggestion-text suggestion-tag">${suggestion.text}</span>
            `;
        } else {
            // For creators: use creator icon from "creator icons" folder
            const creatorIcon = getCreatorIcon(suggestion.text);
            suggestionElement.innerHTML = `
                <span class="suggestion-icon-container">${creatorIcon}</span>
                <span class="suggestion-text">${suggestion.text}</span>
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
    closedInfoBoxes.delete(filterKey); // Remove from closed info boxes

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

// Get filter sort order
function getFilterSortOrder(filterKey) {
    const filterText = filterKey.split(':')[0];
    const filterType = filterKey.split(':')[1];

    // Creator filters always come first
    if (filterType === 'creator') {
        return 0;
    }

    // Tag filters are sorted by category order
    if (filterType === 'tag') {
        const categoryOrder = getCategoryOrder(filterText);
        return categoryOrder + 1; // +1 to ensure they come after creators
    }

    // All other filters come last
    return 100;
}

// Check if a filter should have an info box
function filterHasInfoBox(filterText, filterType) {
    if (filterType === 'tag' && filterText === "Child Seeds (BIP 85)") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Coinjoin (JoinMarket)") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Coinjoin (Wabisabi)") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Coinjoin (Whirlpool)") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Encrypted Backups") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Multisig") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Non-KYC") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Payjoin") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Paynyms (BIP 47)") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Seed Phrases (General)") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Seed XOR") {
        return true;
    }
    if (filterType === 'tag' && filterText === "SeedQR") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Shamir's Secret Sharing (SLIP-39)") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Silent Payments") {
        return true;
    }
    if (filterType === 'tag' && filterText === "UTXO Management") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Verifying Downloads") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Border Wallet") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Child Pays For Parent (CPFP)") {
        return true;
    }
    if (filterType === 'tag' && filterText === "FROST") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Gettxoutsetinfo (Audit Supply)") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Partially Signed Bitcoin Transactions (PSBT)") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Replace By Fee (RBF)") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Statechains") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Taproot Assets") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Timelocks") {
        return true;
    }
    // Add more filters with info boxes here in the future
    return false;
}

// Generate social media icons HTML
function getSocialIconsHTML(filterKey) {
    const info = filterInfoMap.get(filterKey);
    if (!info) return '';

    let iconsHTML = '';

    if (info.website) {
        iconsHTML += `<span class="social-icon" data-url="${info.website}" title="Website">🌐</span>`;
    }
    if (info.youtube) {
        iconsHTML += `<img src="youtube.png" class="social-icon social-icon-img" data-url="${info.youtube}" alt="YouTube" title="YouTube">`;
    }
    if (info.github) {
        iconsHTML += `<img src="github.png" class="social-icon social-icon-img" data-url="${info.github}" alt="GitHub" title="GitHub">`;
    }
    if (info.twitter) {
        iconsHTML += `<img src="X.png" class="social-icon social-icon-img" data-url="${info.twitter}" alt="X/Twitter" title="X/Twitter">`;
    }
    if (info.nostr) {
        iconsHTML += `<img src="nostr.png" class="social-icon social-icon-img" data-url="${info.nostr}" alt="Nostr" title="Nostr">`;
    }

    return iconsHTML ? `<span class="social-icons-container">${iconsHTML}</span>` : '';
}

// Update active filters display
function updateActiveFiltersDisplay() {
    activeFiltersContainer.innerHTML = '';

    // Separate filters into three categories
    const filtersWithoutInfoBox = [];
    const filtersWithClosedInfoBox = [];
    const filtersWithActiveInfoBox = [];

    Array.from(activeFilters).forEach(filterKey => {
        const filterText = filterKey.split(':')[0];
        const filterType = filterKey.split(':')[1];

        if (filterHasInfoBox(filterText, filterType)) {
            if (closedInfoBoxes.has(filterKey)) {
                filtersWithClosedInfoBox.push(filterKey);
            } else {
                filtersWithActiveInfoBox.push(filterKey);
            }
        } else {
            filtersWithoutInfoBox.push(filterKey);
        }
    });

    // Sort each group separately
    const sortFunction = (a, b) => {
        const orderA = getFilterSortOrder(a);
        const orderB = getFilterSortOrder(b);

        if (orderA !== orderB) {
            return orderA - orderB;
        }

        // Within the same category, sort alphabetically by the filter text (not the full key)
        const textA = a.split(':')[0].toLowerCase();
        const textB = b.split(':')[0].toLowerCase();
        return textA.localeCompare(textB);
    };

    filtersWithoutInfoBox.sort(sortFunction);
    filtersWithClosedInfoBox.sort(sortFunction);
    filtersWithActiveInfoBox.sort(sortFunction);

    // Combine: filters without info boxes, then closed info boxes, then active info boxes
    const sortedFilters = [...filtersWithoutInfoBox, ...filtersWithClosedInfoBox, ...filtersWithActiveInfoBox];

    sortedFilters.forEach(filterKey => {
        const filterElement = document.createElement('div');
        filterElement.className = 'active-filter';

        // Extract filter text and type
        const filterText = filterKey.split(':')[0];
        const filterType = filterKey.split(':')[1];

        // Get social icons for this filter
        const socialIcons = getSocialIconsHTML(filterKey);

        // Use stored filter type to determine styling
        if (filterType === 'creator') {
            filterElement.classList.add('creator');

            // Add creator icon if available
            const creatorIcon = getCreatorIcon(filterText);

            const creatorContent = `${creatorIcon}${filterText}`;

            filterElement.innerHTML = `
                <span>${creatorContent}</span>
                ${socialIcons}
                <span class="filter-remove" data-filter="${filterKey}">×</span>
            `;
        } else if (filterType === 'tag') {
            // For tags, use category class
            const categoryClass = getCategoryClass(filterText);
            if (categoryClass) {
                filterElement.classList.add(categoryClass);
            }

            // Add tag icon with category emoji fallback
            const tagIcon = getTagIconWithFallback(filterText);

            const tagContent = `${tagIcon}${filterText}`;

            filterElement.innerHTML = `
                <span>${tagContent}</span>
                ${socialIcons}
                <span class="filter-remove" data-filter="${filterKey}">×</span>
            `;
        } else {
            // Default case
            filterElement.innerHTML = `
                <span>${filterText}</span>
                ${socialIcons}
                <span class="filter-remove" data-filter="${filterKey}">×</span>
            `;
        }

        // Check if this filter has an info box
        const hasInfoBox = filterHasInfoBox(filterText, filterType);
        const infoBoxClosed = closedInfoBoxes.has(filterKey);

        if (hasInfoBox && !infoBoxClosed) {
            // Create a wrapper container for filter + info box
            const wrapper = document.createElement('div');
            wrapper.className = 'filter-with-infobox-container';

            // Add the filter pill to the wrapper
            wrapper.appendChild(filterElement);

            // Add info box based on filter type
            if (filterText === "Child Seeds (BIP 85)" && filterType === 'tag') {
                const infoBox = document.createElement('div');
                infoBox.className = 'filter-info-box';
                infoBox.innerHTML = `
                    <span class="info-box-close" data-filter="${filterKey}">×</span>
                    BIP-85 allows you to create multiple independent wallet seeds (called "child seeds") from a single master seed, using a deterministic process. This means you can back up just one master seed and safely generate many new wallets — for yourself or others — without exposing the original seed.
                `;
                wrapper.appendChild(infoBox);
            } else if (filterText === "Coinjoin (JoinMarket)" && filterType === 'tag') {
                const infoBox = document.createElement('div');
                infoBox.className = 'filter-info-box';
                infoBox.innerHTML = `
                    <span class="info-box-close" data-filter="${filterKey}">×</span>
                    JoinMarket is a Bitcoin tool that lets users combine (or "coinjoin") their transactions with others to improve privacy and break the traceable link between inputs and outputs. It connects users who want privacy with those who offer liquidity, creating a decentralized marketplace for mixing coins without a central coordinator.
                `;
                wrapper.appendChild(infoBox);
            } else if (filterText === "Coinjoin (Wabisabi)" && filterType === 'tag') {
                const infoBox = document.createElement('div');
                infoBox.className = 'filter-info-box';
                infoBox.innerHTML = `
                    <span class="info-box-close" data-filter="${filterKey}">×</span>
                    WabiSabi is a coinjoin protocol used by Wasabi Wallet that allows users to mix different amounts of bitcoin together privately in a single transaction. It uses advanced cryptographic techniques to hide which inputs belong to which outputs, improving privacy while keeping fees low and efficiency high.
                `;
                wrapper.appendChild(infoBox);
            } else if (filterText === "Coinjoin (Whirlpool)" && filterType === 'tag') {
                const infoBox = document.createElement('div');
                infoBox.className = 'filter-info-box';
                infoBox.innerHTML = `
                    <span class="info-box-close" data-filter="${filterKey}">×</span>
                    Whirlpool is a coinjoin implementation by Samourai Wallet that lets users mix their bitcoin with others of the same denomination to break transaction history links. Once mixed, coins can continue cycling through additional mixes automatically, further increasing privacy over time.
                `;
                wrapper.appendChild(infoBox);
            } else if (filterText === "Encrypted Backups" && filterType === 'tag') {
                const infoBox = document.createElement('div');
                infoBox.className = 'filter-info-box';
                infoBox.innerHTML = `
                    <span class="info-box-close" data-filter="${filterKey}">×</span>
                    An encrypted backup for your seed protects your wallet's recovery phrase by locking it with a password or encryption key, so it can't be read if stolen or lost. This lets you safely store digital or cloud backups of your seed without exposing your bitcoin to theft.
                `;
                wrapper.appendChild(infoBox);
            } else if (filterText === "Multisig" && filterType === 'tag') {
                const infoBox = document.createElement('div');
                infoBox.className = 'filter-info-box';
                infoBox.innerHTML = `
                    <span class="info-box-close" data-filter="${filterKey}">×</span>
                    Multisig (short for "multi-signature") is a Bitcoin security setup that requires multiple private keys to approve a transaction. It's often used for shared wallets, inheritance plans, or extra protection—so no single person or compromised key can move the funds alone.
                `;
                wrapper.appendChild(infoBox);
            } else if (filterText === "Non-KYC" && filterType === 'tag') {
                const infoBox = document.createElement('div');
                infoBox.className = 'filter-info-box';
                infoBox.innerHTML = `
                    <span class="info-box-close" data-filter="${filterKey}">×</span>
                    Non-KYC means "no Know Your Customer," referring to Bitcoin services or exchanges that don't require users to share personal identification. These options allow for greater privacy and financial freedom, though often with lower limits or more manual processes.
                `;
                wrapper.appendChild(infoBox);
            } else if (filterText === "Payjoin" && filterType === 'tag') {
                const infoBox = document.createElement('div');
                infoBox.className = 'filter-info-box';
                infoBox.innerHTML = `
                    <span class="info-box-close" data-filter="${filterKey}">×</span>
                    Payjoin is a type of Bitcoin transaction where both the sender and receiver contribute inputs, making it harder for outside observers to trace who paid whom. It improves privacy without needing a centralized mixer or coordination with multiple strangers.
                `;
                wrapper.appendChild(infoBox);
            } else if (filterText === "Paynyms (BIP 47)" && filterType === 'tag') {
                const infoBox = document.createElement('div');
                infoBox.className = 'filter-info-box';
                infoBox.innerHTML = `
                    <span class="info-box-close" data-filter="${filterKey}">×</span>
                    PayNyms, based on BIP-47, let users share a single reusable payment code instead of a new address each time. This allows anyone to send you bitcoin privately—creating unique addresses behind the scenes—without revealing your transaction history or wallet details.
                `;
                wrapper.appendChild(infoBox);
            } else if (filterText === "Seed Phrases (General)" && filterType === 'tag') {
                const infoBox = document.createElement('div');
                infoBox.className = 'filter-info-box';
                infoBox.innerHTML = `
                    <span class="info-box-close" data-filter="${filterKey}">×</span>
                    A seed phrase is a list of 12 or 24 words that safely backs up your Bitcoin wallet. It can be used to recover your wallet and funds on any compatible device if your phone, computer, or hardware wallet is lost or damaged.
                `;
                wrapper.appendChild(infoBox);
            } else if (filterText === "Seed XOR" && filterType === 'tag') {
                const infoBox = document.createElement('div');
                infoBox.className = 'filter-info-box';
                infoBox.innerHTML = `
                    <span class="info-box-close" data-filter="${filterKey}">×</span>
                    Seed XOR is a backup method that splits your wallet's seed phrase into two or more parts using a simple mathematical process. Each part looks like a normal seed, but you need all of them together to recreate your original wallet—adding an extra layer of security against theft or loss.
                `;
                wrapper.appendChild(infoBox);
            } else if (filterText === "SeedQR" && filterType === 'tag') {
                const infoBox = document.createElement('div');
                infoBox.className = 'filter-info-box';
                infoBox.innerHTML = `
                    <span class="info-box-close" data-filter="${filterKey}">×</span>
                    SeedQR is a way to store your Bitcoin seed phrase as a QR code instead of written words, making it quick to back up or restore without typing. It keeps your seed easy to scan for recovery while still allowing offline, paper, or metal storage for security.
                `;
                wrapper.appendChild(infoBox);
            } else if (filterText === "Shamir's Secret Sharing (SLIP-39)" && filterType === 'tag') {
                const infoBox = document.createElement('div');
                infoBox.className = 'filter-info-box';
                infoBox.innerHTML = `
                    <span class="info-box-close" data-filter="${filterKey}">×</span>
                    Shamir's Secret Sharing, defined in SLIP-39, splits your wallet's seed into multiple unique shares that can be distributed among trusted people or locations. Only a chosen number of shares are needed to restore the wallet, providing both redundancy and protection if one piece is lost or stolen.
                `;
                wrapper.appendChild(infoBox);
            } else if (filterText === "Silent Payments" && filterType === 'tag') {
                const infoBox = document.createElement('div');
                infoBox.className = 'filter-info-box';
                infoBox.innerHTML = `
                    <span class="info-box-close" data-filter="${filterKey}">×</span>
                    Silent Payments let you share one static address that still creates unique, private addresses for every payment you receive. This improves privacy by preventing anyone from linking your incoming transactions together on the blockchain.
                `;
                wrapper.appendChild(infoBox);
            } else if (filterText === "UTXO Management" && filterType === 'tag') {
                const infoBox = document.createElement('div');
                infoBox.className = 'filter-info-box';
                infoBox.innerHTML = `
                    <span class="info-box-close" data-filter="${filterKey}">×</span>
                    UTXO management is the process of organizing and controlling the individual chunks of bitcoin ("unspent transaction outputs") in your wallet. Good UTXO management helps you maintain privacy, lower fees, and avoid linking your transactions together unnecessarily.
                `;
                wrapper.appendChild(infoBox);
            } else if (filterText === "Verifying Downloads" && filterType === 'tag') {
                const infoBox = document.createElement('div');
                infoBox.className = 'filter-info-box';
                infoBox.innerHTML = `
                    <span class="info-box-close" data-filter="${filterKey}">×</span>
                    Verifying downloads with PGP or similar tools ensures the file you received hasn't been tampered with by comparing it against the developer's signed verification file. This protects you from malicious or altered software, confirming it's the authentic version released by the creator.
                `;
                wrapper.appendChild(infoBox);
            } else if (filterText === "Border Wallet" && filterType === 'tag') {
                const infoBox = document.createElement('div');
                infoBox.className = 'filter-info-box';
                infoBox.innerHTML = `
                    <span class="info-box-close" data-filter="${filterKey}">×</span>
                    A Bitcoin Border Wallet is a type of wallet designed for securely memorizing or transporting your Bitcoin seed phrase across borders without carrying any physical copy. It uses simple, easy-to-remember words or patterns (often encoded using a cipher or grid) so that you can reconstruct your wallet later without leaving a trace on paper or devices.
                `;
                wrapper.appendChild(infoBox);
            } else if (filterText === "Child Pays For Parent (CPFP)" && filterType === 'tag') {
                const infoBox = document.createElement('div');
                infoBox.className = 'filter-info-box';
                infoBox.innerHTML = `
                    <span class="info-box-close" data-filter="${filterKey}">×</span>
                    Child Pays for Parent (CPFP) is a Bitcoin fee bumping technique where a new transaction ("child") with a higher fee is created to incentivize miners to also confirm an older, stuck transaction ("parent"). This works because miners will include both transactions together if the combined fees meet their desired rate.
                `;
                wrapper.appendChild(infoBox);
            } else if (filterText === "FROST" && filterType === 'tag') {
                const infoBox = document.createElement('div');
                infoBox.className = 'filter-info-box';
                infoBox.innerHTML = `
                    <span class="info-box-close" data-filter="${filterKey}">×</span>
                    FROST (Flexible Round-Optimized Schnorr Threshold Signatures) is a cryptographic protocol that allows a group of signers to collectively produce a single Schnorr signature without revealing which members participated. It improves privacy, efficiency, and security for multisig setups by reducing the number of communication rounds and keeping keys distributed.
                `;
                wrapper.appendChild(infoBox);
            } else if (filterText === "Gettxoutsetinfo (Audit Supply)" && filterType === 'tag') {
                const infoBox = document.createElement('div');
                infoBox.className = 'filter-info-box';
                infoBox.innerHTML = `
                    <span class="info-box-close" data-filter="${filterKey}">×</span>
                    gettxoutsetinfo is a Bitcoin Core RPC command that calculates the total supply of bitcoin at a given block height by analyzing the entire UTXO (unspent transaction output) set. It reports details such as the number of transactions and outputs, the total amount of bitcoin in existence at that point, and the serialized size and hash of the UTXO set.
                `;
                wrapper.appendChild(infoBox);
            } else if (filterText === "Partially Signed Bitcoin Transactions (PSBT)" && filterType === 'tag') {
                const infoBox = document.createElement('div');
                infoBox.className = 'filter-info-box';
                infoBox.innerHTML = `
                    <span class="info-box-close" data-filter="${filterKey}">×</span>
                    Partially Signed Bitcoin Transactions (PSBT) are a standardized format that allows multiple devices or participants to safely collaborate in creating and signing a Bitcoin transaction. This makes it easier to use hardware wallets, multisig setups, or offline devices together without ever exposing private keys.
                `;
                wrapper.appendChild(infoBox);
            } else if (filterText === "Replace By Fee (RBF)" && filterType === 'tag') {
                const infoBox = document.createElement('div');
                infoBox.className = 'filter-info-box';
                infoBox.innerHTML = `
                    <span class="info-box-close" data-filter="${filterKey}">×</span>
                    Replace-By-Fee (RBF) is a Bitcoin feature that lets you resend an unconfirmed transaction with a higher fee to speed up confirmation. It gives users flexibility to adjust fees after sending, ensuring their transaction doesn't get stuck in the mempool.
                `;
                wrapper.appendChild(infoBox);
            } else if (filterText === "Statechains" && filterType === 'tag') {
                const infoBox = document.createElement('div');
                infoBox.className = 'filter-info-box';
                infoBox.innerHTML = `
                    <span class="info-box-close" data-filter="${filterKey}">×</span>
                    Statechains are a Bitcoin layer-2 protocol that allow ownership of a UTXO to be transferred off-chain without broadcasting new transactions to the blockchain. They enable fast, low-fee transfers by passing control of the private key between users under the coordination of a statechain server, while maintaining Bitcoin's self-custody model.
                `;
                wrapper.appendChild(infoBox);
            } else if (filterText === "Taproot Assets" && filterType === 'tag') {
                const infoBox = document.createElement('div');
                infoBox.className = 'filter-info-box';
                infoBox.innerHTML = `
                    <span class="info-box-close" data-filter="${filterKey}">×</span>
                    Taproot Assets is a protocol that allows users to issue and transfer digital assets—like stablecoins or tokens—directly on the Bitcoin blockchain using Taproot's smart contract features. It can also operate over the Lightning Network, enabling instant, low-fee transactions of these assets while remaining nearly indistinguishable from regular Bitcoin payments.
                `;
                wrapper.appendChild(infoBox);
            } else if (filterText === "Timelocks" && filterType === 'tag') {
                const infoBox = document.createElement('div');
                infoBox.className = 'filter-info-box';
                infoBox.innerHTML = `
                    <span class="info-box-close" data-filter="${filterKey}">×</span>
                    Bitcoin timelocks are a feature that restricts when a transaction or output can be spent until a certain time or block height is reached. They enable advanced uses like payment delays, escrows, and smart contracts by enforcing spending conditions directly in the Bitcoin protocol.
                `;
                wrapper.appendChild(infoBox);
            }

            // Append the wrapper to the container
            activeFiltersContainer.appendChild(wrapper);
        } else {
            // No info box, just append the filter element directly
            activeFiltersContainer.appendChild(filterElement);
        }
    });

    // Add event listeners to remove buttons
    document.querySelectorAll('.filter-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            removeActiveFilter(e.target.dataset.filter);
        });
    });

    // Add event listeners to info box close buttons
    document.querySelectorAll('.info-box-close').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const filterKey = e.target.dataset.filter;
            closedInfoBoxes.add(filterKey);
            updateActiveFiltersDisplay();
        });
    });

    // Add event listeners to social icons
    document.querySelectorAll('.social-icon').forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent any parent click handlers
            const url = icon.getAttribute('data-url');
            if (url) {
                window.open(url, '_blank', 'noopener,noreferrer');
            }
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
    closedInfoBoxes.clear(); // Clear closed info boxes
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

                // Add tag icon with fallback
                const tagIcon = getTagIconWithFallback(tag);
                tagElement.innerHTML = `${tagIcon}${tag}`;
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

// Get category icon for a tag
function getCategoryIcon(tag) {
    const categoryIcons = {
        "Signing Devices": "🔐",
        "Wallets": "💳",
        "Nodes & Servers": "🖥️",
        "Mining": "⛏️",
        "Lightning Network": "⚡",
        "Privacy & Security": "🛡️",
        "Advanced Features": "🚀",
        "Services & Exchanges": "🏢",
        "Tokens": "💰",
        "Ecash": "💵"
    };

    for (const [category, tags] of Object.entries(tagCategories)) {
        if (tags.includes(tag)) {
            return categoryIcons[category] || "⚙️";
        }
    }
    return "⚙️"; // default fallback
}

// Generate creator image base filename from creator name
function getCreatorImageFilename(creatorName) {
    return creatorName
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
}

// Check if creator has an image and return the img tag or empty string
function getCreatorIcon(creatorName) {
    const filenameBase = getCreatorImageFilename(creatorName);
    // Look for images in the "creator icons" folder, try png, jpg, then jpeg
    return `<img src="creator icons/${filenameBase}.png" alt="${creatorName}" class="creator-icon" onerror="this.src='creator icons/${filenameBase}.jpg'; this.onerror=function(){this.src='creator icons/${filenameBase}.jpeg'; this.onerror=function(){this.style.display='none'};};">`;
}

// Generate tag image base filename from tag name
function getTagImageFilename(tagName) {
    return tagName
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
}

// Check if tag has an image and return the img tag or empty string
function getTagIcon(tagName) {
    const filenameBase = getTagImageFilename(tagName);
    // Look for images in the "tag icons" folder, try png, jpg, then jpeg
    return `<img src="tag icons/${filenameBase}.png" alt="${tagName}" class="tag-icon" onerror="this.src='tag icons/${filenameBase}.jpg'; this.onerror=function(){this.src='tag icons/${filenameBase}.jpeg'; this.onerror=function(){this.style.display='none'};};">`;
}

// Get tag icon with category emoji fallback
function getTagIconWithFallback(tagName) {
    const filenameBase = getTagImageFilename(tagName);
    const categoryEmoji = getCategoryIcon(tagName);
    // Try tag icon first (png, jpg, jpeg), fall back to category emoji if not found
    return `<img src="tag icons/${filenameBase}.png" alt="${tagName}" class="tag-icon" onerror="this.src='tag icons/${filenameBase}.jpg'; this.onerror=function(){this.src='tag icons/${filenameBase}.jpeg'; this.onerror=function(){this.style.display='none'; this.nextElementSibling.style.display='inline'};};">` +
           `<span class="category-emoji-fallback" style="display:none;">${categoryEmoji}</span>`;
}


// Get category order index for sorting
function getCategoryOrder(tag) {
    const categoryOrder = [
        "Signing Devices",
        "Wallets",
        "Nodes & Servers",
        "Mining",
        "Lightning Network",
        "Services & Exchanges",
        "Tokens",
        "Ecash",
        "Privacy & Security",
        "Advanced Features"
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

    // Validate video data
    if (!video.title || !video.creator || !video.date || !video.youtubeId) {
        console.warn('Invalid video data:', video);
        return card; // Return empty card
    }

    let formattedDate;
    try {
        formattedDate = new Date(video.date + 'T00:00:00').toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    } catch (error) {
        console.warn('Invalid date format:', video.date);
        formattedDate = video.date; // fallback to original
    }

    const sortedTags = video.tags ? sortTags([...video.tags]) : [];
    const tagsHTML = sortedTags.map(tag => {
        const categoryClass = getCategoryClass(tag);
        return `<span class="tag clickable-tag ${categoryClass}" data-tag="${tag}">${tag}</span>`;
    }).join('');

    const creatorIcon = getCreatorIcon(video.creator);

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
            <div class="video-creator">${creatorIcon}<span class="clickable-creator" data-creator="${video.creator}">${video.creator}</span></div>
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
        const line = lines[i].trim();
        if (!line) continue; // Skip empty lines

        const values = parseCSVLine(line);

        // More flexible parsing - require at least title, creator, date, youtubeId
        if (values.length >= 4 && values[0] && values[1] && values[2] && values[3]) {
            const video = {
                id: videoData.length + videos.length + 1,
                title: values[0].replace(/"/g, '').trim(),
                creator: values[1].replace(/"/g, '').trim(),
                date: values[2].replace(/"/g, '').trim(),
                youtubeId: values[3].replace(/"/g, '').trim(),
                tags: values[4] ? values[4].replace(/"/g, '').split(',').map(tag => tag.trim()).filter(tag => tag) : []
            };
            videos.push(video);
        } else {
            console.warn(`Skipping invalid CSV line ${i + 1}:`, line);
        }
    }
    console.log(`Parsed ${videos.length} videos from CSV`);
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

    // Clear all filters button
    clearAllFiltersBtn.addEventListener('click', clearAllFilters);

    // Header banner click - clear all filters and refresh
    headerBanner.addEventListener('click', clearAllFilters);

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

// CSV Export functionality
function exportToCSV() {
    const headers = ['title', 'creator', 'date', 'youtubeId', 'tags'];
    let csvContent = headers.join(',') + '\n';

    videoData.forEach(video => {
        const row = [
            `"${video.title}"`,
            `"${video.creator}"`,
            video.date,
            video.youtubeId,
            `"${video.tags.join(',')}"`
        ];
        csvContent += row.join(',') + '\n';
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'bitcoin_tutorials_export.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// CSV Import functionality
function importFromCSV(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const csvContent = e.target.result;
            const newVideos = parseCSV(csvContent);

            if (newVideos.length > 0) {
                // Add new videos to existing data
                videoData.push(...newVideos);
                currentVideos = [...videoData];

                // Reinitialize the application with new data
                initializeSearchData();
                populateTagSidebar();
                renderVideos(currentVideos);

                alert(`Successfully imported ${newVideos.length} videos!`);
            } else {
                alert('No valid videos found in the CSV file.');
            }
        } catch (error) {
            console.error('Error importing CSV:', error);
            alert('Error importing CSV file. Please check the format.');
        }
    };
    reader.readAsText(file);
}

// Handle file input change
function handleFileImport(event) {
    const file = event.target.files[0];
    if (file && file.type === 'text/csv') {
        importFromCSV(file);
    } else {
        alert('Please select a valid CSV file.');
    }
    // Reset the input value to allow importing the same file again
    event.target.value = '';
}

// Handle filter info import
function handleFilterInfoImport(event) {
    const file = event.target.files[0];
    if (file && file.type === 'text/csv') {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const csvContent = e.target.result;
                parseFilterInfo(csvContent);
                updateActiveFiltersDisplay(); // Refresh display with new social links
                alert(`Successfully imported filter info for ${filterInfoMap.size} items!`);
            } catch (error) {
                console.error('Error importing filter info:', error);
                alert('Error importing filter info. Please check the format.');
            }
        };
        reader.readAsText(file);
    } else {
        alert('Please select a valid CSV file.');
    }
    // Reset the input value to allow importing the same file again
    event.target.value = '';
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
