// Tag categories definition
const tagCategories = {
    "Signing Devices": ["ColdCard Q", "ColdCard MK(1-4)", "Jade", "Jade Plus", "Krux", "Trezor One", "Trezor T", "Trezor Safe", "Ledger Flex", "KeepKey", "SeedSigner", "Passport Core", "Keystone", "Tapsigner", "Seedkeeper", "Satochip", "Specter DIY", "KeyFlint", "BitBox", "Bitkey", "Ledger Nano(S/X)", "Satodime", "Satscard", "OneKey", "Signing Devices (General)", "Opendime", "Frostsnap"],
    "Wallets": ["Sparrow", "Electrum", "BlueWallet", "Ginger", "Wasabi", "Phoenix", "Zeus", "Muun", "Nunchuk", "Liana", "Blockstream App", "Ashigaru", "Aqua", "Bitcoin Core Wallet", "Bitcoin Keeper", "JAM", "Envoy", "Fedi", "Minibits", "Mercury", "Nutstash", "Samourai", "Proton", "Specter Desktop", "Blitz", "Blixt", "Breez", "Cake", "Joltz", "Mutiny", "Theya", "Speed", "Yeti", "Zebedee", "Lily", "Wallet of Satoshi", "Cashu.me", "Spark", "eNuts", "Bull Bitcoin Wallet", "Cove"],
    "Nodes & Servers": ["Bitcoin Core", "Bitcoin Knots", "Umbrel", "Start9", "Bitcoin Core Node", "Citadel", "Fully Noded", "Raspiblitz", "RoninDojo", "Parmanode", "Electrum Rust Server (Electrs)", "Ubuntu Node Box", "MyNode", "Ashigaru Dojo", "Fulcrum", "Bitcoin Node Box"],
    "Mining": ["Avalon Nano", "NerdAxe", "Bitaxe", "Braiins Mini Miner", "Braiins Deck", "Ocean Pool/DATUM", "Futurebit", "Braiins Pool", "Heatbit"],
    "Lightning Network": ["Lightning", "Thunderhub", "Alby", "Lightning Network Daemon (LND)", "Lightning Node Connect", "LNbits", "Ride The Lightning", "Voltage", "Core Lightning", "Bolt Ring", "Boltz", "Pool", "Loop"],
    "Services & Exchanges": ["Bitcoin Well", "Hodl Hodl", "Kraken", "BTCPay Server", "Debifi", "Azteco", "Bisq", "Casa", "Unchained/Caravan", "Bittr", "Bitrefill", "Fountain", "Strike", "Spike to Spike", "Ledn", "Anchorwatch/Trident", "IBEXPay", "Robosats", "Peach", "Coinos", "Shakepay", "River", "Bull Bitcoin", "Bitaroo", "Mempool.space"],
    "Tokens": ["Liquid", "USDT", "Testnet"],
    "Ecash": ["Fedimint", "Cashu"],
    "Security": ["Verifying Downloads", "Seed Phrases (General)", "UTXO Management", "SeedQR", "Encrypted Backups", "Child Seeds (BIP 85)", "Multisig", "Seed XOR", "Shamir's Secret Sharing (SLIP-39)", "Derivation Paths"],
    "Privacy": ["Coinjoin (JoinMarket)", "Coinjoin (Wabisabi)", "Coinjoin (Whirlpool)", "Non-KYC", "Payjoin", "Paynyms (BIP 47)", "Silent Payments"],
    "Advanced Features": ["Timelocks", "FROST", "Border Wallet", "Child Pays For Parent (CPFP)", "Replace By Fee (RBF)", "Gettxoutsetinfo (Audit Supply)", "Taproot Assets", "Partially Signed Bitcoin Transactions (PSBT)", "Statechains"]
};

// Available tag icons - update this list when adding new icon files
// To regenerate: ls "tag icons" | sed 's/.png$//' | sort
const availableTagIcons = new Set([
    "alby", "anchorwatchtrident", "aqua", "ashigaru", "ashigaru-dojo", "avalon-nano", "azteco",
    "bisq", "bitaroo", "bitaxe", "bitbox", "bitcoin-core", "bitcoin-core-wallet", "bitcoin-keeper",
    "bitcoin-knots", "bitcoin-node-box", "bitcoin-well", "bitkey", "bitrefill", "bittr", "blitz",
    "blixt", "blockstream-app", "bluewallet", "bolt-ring", "boltz", "braiins-deck", "braiins-mini-miner", "braiins-pool",
    "breez", "btcpay-server", "bull-bitcoin", "bull-bitcoin-wallet", "cake", "casa", "cashu", "cashume", "citadel", "coinos",
    "coldcard-mk1-4", "coldcard-q", "core-lightning", "cove", "ocean-pooldatum", "debifi", "electrum",
    "electrum-rust-server-electrs", "enuts", "envoy", "fedi", "fedimint", "fountain", "frostsnap",
    "fulcrum", "fully-noded", "futurebit", "ginger", "heatbit", "hodl-hodl", "ibexpay", "jade", "jade-plus",
    "jam", "joltz", "keepkey", "keystone", "kraken", "krux", "ledger-flex", "ledger-nanosx", "ledn",
    "liana", "lightning-network-daemon-lnd", "lightning-node-connect", "lily", "liquid", "lnbits",
    "loop", "mempoolspace", "mercury", "minibits", "mutiny", "muun", "mynode", "nerdaxe",
    "nunchuk", "nutstash", "onekey", "opendime", "parmanode", "passport-core", "peach", "phoenix",
    "pool", "proton", "raspiblitz", "ride-the-lightning", "river", "robosats", "ronindojo", "satochip",
    "satodime", "satscard", "seedkeeper", "seedsigner", "shakepay", "spark", "sparrow", "specter-desktop",
    "specter-diy", "speed", "spike-to-spike", "start9", "strike", "tapsigner", "testnet", "theya",
    "thunderhub", "trezor-one", "trezor-safe", "trezor-t", "ubuntu-node-box", "umbrel",
    "unchainedcaravan", "usdt", "voltage", "wallet-of-satoshi", "wasabi", "yeti", "zebedee", "zeus"
]);

// Available creator icons - update this list when adding new icon files
// To regenerate: ls "creator icons" | sed 's/.png$//' | sort
const availableCreatorIcons = new Set([
    "402-payment-required", "88-sats-radio", "adam-obrien", "adam-soltys", "ai-invests", "altair-technology",
    "anchorwatch", "andrew-with-laser-eyes", "area-bitcoin-english", "arman-the-parman", "avalon-support",
    "avoidbit", "bb-2k16", "bitbagger", "bitbox", "bitcoin-brandon", "bitcoin-classroom", "bitcoin-daytrader",
    "bitcoin-education", "bitcoin-learning", "bitcoin-magazine", "bitcoin-not-crypto", "bitcoin-quickies",
    "bitcoin-takeover", "bitcoin-unlocked", "bitcoiner-malaysia", "bithyve", "bitsoloplayer-official",
    "blkbox-trading", "blockchain-academics", "blockdyor", "blockstream", "btc-sessions", "btcpay-server",
    "bull-bitcoin", "cake-wallet", "canadian-bitcoiners", "chris-bagnell", "coinkite", "corner-culture",
    "crrdlx", "crypto-blick", "crypto-bull", "crypto-friday", "crypto-guide", "crypto-moose", "cryptojar",
    "curiousinventor", "dairebtc", "darren-honeysett", "davani", "elestio", "explore-crypto", "forresthodl", "foundation",
    "frostsnap", "getbittr", "ginger-wallet", "guy-swann", "hardcore-bitcoiner", "ian-major", "imineblocks",
    "jbinzala", "joe-nakamoto", "jonathan-levi", "justh0dl", "kahoobb", "keepkey", "kevin-mulcrone", "kf-chan", "l33t-guy",
    "laine", "ledn", "liana-wallet", "lightning-labs", "lnbits", "lukes-tech", "ministry-of-nodes",
    "money-reimagined", "moneyzg", "mynode", "natalie-brunell", "nico-moran", "ocean", "paul-lamb", "peach",
    "piecover-btc", "pioneering-freedom", "plan-b-network", "rabid-mining", "red-panda-mining", "rhett-reisman",
    "robotechy", "ronindojo", "ryan-matta", "ryan-scribner", "saniexp", "satashi21", "satoshi-radio-global",
    "seedsigner", "southern-bitcoiner", "sovereign-money", "sterling", "specter", "tanleybench", "tech-express", "tftc",
    "the-bitcoin-hardware-store", "the-cryptodad", "the-hobbyist-miner", "the-social-guide", "the-space",
    "thebtccourse", "theya", "tj-free", "trezor", "unchained", "understanding-bitcoin", "vasker-media",
    "voltage", "vortex-bitcoin", "voskcoin", "wandering-maverick", "wantclue", "wasabi-wallet",
    "wicked-smart-bitcoin", "wizardsardine", "yeti-bitcoin-wallet"
]);

// Your video database - add your own tutorials here
const videoData = [];
let currentVideos = [...videoData];
let sortAscending = false;


// Search functionality variables
let activeFilters = new Set();
let filterTypes = new Map(); // Store the type of each filter
let allTags = [];
let allCreators = [];
let openInfoBoxes = new Set(); // Store which info boxes are currently open

// Filter info for social media links
let filterInfoMap = new Map(); // Store social links by "name:type" key

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
const headerBanner = document.getElementById('header-banner');
const showFavoritesBtn = document.getElementById('show-favorites-btn');

// Favorites functionality
let favorites = [];
let showingFavoritesOnly = false;
const FAVORITES_STORAGE_KEY = 'bitcoinTutorialsFavorites';

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

// Favorites functions
function loadFavorites() {
    try {
        const stored = localStorage.getItem(FAVORITES_STORAGE_KEY);
        favorites = stored ? JSON.parse(stored) : [];
        console.log(`Loaded ${favorites.length} favorites from localStorage`);
    } catch (error) {
        console.error('Error loading favorites:', error);
        favorites = [];
    }
}

function saveFavorites() {
    try {
        localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
        console.log(`Saved ${favorites.length} favorites to localStorage`);
    } catch (error) {
        console.error('Error saving favorites:', error);
    }
}

function isFavorited(youtubeId) {
    return favorites.includes(youtubeId);
}

function toggleFavorite(youtubeId) {
    const index = favorites.indexOf(youtubeId);
    if (index === -1) {
        // Add to favorites
        favorites.push(youtubeId);
    } else {
        // Remove from favorites
        favorites.splice(index, 1);
    }
    saveFavorites();
    updateFavoritesButton();

    // Update the favorite button on the card
    const favoriteBtn = document.querySelector(`.favorite-button[data-youtube-id="${youtubeId}"]`);
    if (favoriteBtn) {
        favoriteBtn.classList.toggle('active', isFavorited(youtubeId));
    }

    // If showing favorites only, re-filter to remove unfavorited videos
    if (showingFavoritesOnly) {
        updateActiveFiltersDisplay();
        applyActiveFilters();
    }
}

function toggleFavoritesView() {
    showingFavoritesOnly = !showingFavoritesOnly;
    updateFavoritesButton();
    updateActiveFiltersDisplay();

    // Use the unified filter system which now respects favorites
    applyActiveFilters();
}

function updateFavoritesButton() {
    if (!showFavoritesBtn) return;

    if (showingFavoritesOnly) {
        showFavoritesBtn.textContent = '🔖 Show All';
        showFavoritesBtn.classList.add('active');
    } else {
        showFavoritesBtn.textContent = `🔖 Show Favorites (${favorites.length})`;
        showFavoritesBtn.classList.remove('active');
    }
}

function clearAllFavorites() {
    if (favorites.length === 0) {
        alert('You have no favorites to clear.');
        return;
    }

    const confirmed = confirm(`Are you sure you want to clear all ${favorites.length} favorites? This cannot be undone.`);
    if (!confirmed) return;

    // Clear favorites array
    favorites = [];
    saveFavorites();

    // If currently showing favorites only, switch back to all videos
    if (showingFavoritesOnly) {
        showingFavoritesOnly = false;
    }

    // Update UI
    updateFavoritesButton();
    updateActiveFiltersDisplay(); // Update filter pills to remove favorites pill
    applyActiveFilters(); // Use unified filter system

    // Update all favorite buttons on cards
    document.querySelectorAll('.favorite-button.active').forEach(btn => {
        btn.classList.remove('active');
    });
}

// Initialize the application
function init() {
    loadFavorites(); // Load favorites from localStorage
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
            // Always sort by date descending (newest first) on initial load
            currentVideos = sortVideos([...videoData], 'date', false);

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
        const platforms = values[7] ? values[7].replace(/"/g, '').trim() : '';

        const key = `${name}:${type}`;
        filterInfoMap.set(key, { website, youtube, github, twitter, nostr, platforms });
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
            // For creators: use YouTube icon to distinguish from tags
            suggestionElement.innerHTML = `
                <span class="suggestion-icon-container"><img src="youtube.png" class="creator-icon" alt="YouTube"></span>
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
    openInfoBoxes.delete(filterKey); // Remove from open info boxes

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

// Check if a filter has social icons
function filterHasSocialIcons(filterKey) {
    const info = filterInfoMap.get(filterKey);
    if (!info) return false;

    // Return true if any social icon exists
    return !!(info.website || info.youtube || info.github || info.twitter || info.nostr);
}

// Check if a filter should have an info box
function filterHasInfoBox(filterText, filterType) {
    // Create the filter key
    const filterKey = `${filterText}:${filterType}`;

    // Tags with social icons should have info boxes
    if (filterType === 'tag' && filterHasSocialIcons(filterKey)) {
        return true;
    }

    // Tags with educational text should have info boxes
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
    if (filterType === 'tag' && filterText === "Nunchuk") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Derivation Paths") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Signing Devices (General)") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Aqua") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Ashigaru") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Lightning") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Boltz") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Liquid") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Testnet") {
        return true;
    }
    if (filterType === 'tag' && filterText === "USDT") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Cashu") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Fedimint") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Bitcoin Core Wallet") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Bitcoin Keeper") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Blitz") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Blixt") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Blockstream App") {
        return true;
    }
    if (filterType === 'tag' && filterText === "BlueWallet") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Breez") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Cake") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Cashu.me") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Electrum") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Envoy") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Fedi") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Ginger") {
        return true;
    }
    if (filterType === 'tag' && filterText === "JAM") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Joltz") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Liana") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Lily") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Mercury") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Minibits") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Mutiny") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Muun") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Nunchuk") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Nutstash") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Phoenix") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Proton") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Spark") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Sparrow") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Specter Desktop") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Speed") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Theya") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Wasabi") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Yeti") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Zebedee") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Zeus") {
        return true;
    }
    if (filterType === 'tag' && filterText === "eNuts") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Bull Bitcoin Wallet") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Bitcoin Core") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Bitcoin Knots") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Ashigaru Dojo") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Bitcoin Node Box") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Citadel") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Electrum Rust Server (Electrs)") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Fulcrum") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Fully Noded") {
        return true;
    }
    if (filterType === 'tag' && filterText === "MyNode") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Parmanode") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Raspiblitz") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Start9") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Ubuntu Node Box") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Umbrel") {
        return true;
    }
    if (filterType === 'tag' && filterText === "RoninDojo") {
        return true;
    }
    // Signing Devices
    if (filterType === 'tag' && filterText === "ColdCard Q") {
        return true;
    }
    if (filterType === 'tag' && filterText === "ColdCard MK(1-4)") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Jade") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Jade Plus") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Krux") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Trezor One") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Trezor T") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Trezor Safe") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Ledger Flex") {
        return true;
    }
    if (filterType === 'tag' && filterText === "KeepKey") {
        return true;
    }
    if (filterType === 'tag' && filterText === "SeedSigner") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Passport Core") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Keystone") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Tapsigner") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Seedkeeper") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Satochip") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Specter DIY") {
        return true;
    }
    if (filterType === 'tag' && filterText === "KeyFlint") {
        return true;
    }
    if (filterType === 'tag' && filterText === "BitBox") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Bitkey") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Ledger Nano(S/X)") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Satodime") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Satscard") {
        return true;
    }
    if (filterType === 'tag' && filterText === "OneKey") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Opendime") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Frostsnap") {
        return true;
    }
    // Mining
    if (filterType === 'tag' && filterText === "Avalon Nano") {
        return true;
    }
    if (filterType === 'tag' && filterText === "NerdAxe") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Bitaxe") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Braiins Mini Miner") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Braiins Deck") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Ocean Pool/DATUM") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Futurebit") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Braiins Pool") {
        return true;
    }
    // Lightning Network
    if (filterType === 'tag' && filterText === "Thunderhub") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Alby") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Lightning Network Daemon (LND)") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Lightning Node Connect") {
        return true;
    }
    if (filterType === 'tag' && filterText === "LNbits") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Ride The Lightning") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Voltage") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Core Lightning") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Bolt Ring") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Pool") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Loop") {
        return true;
    }
    // Services & Exchanges
    if (filterType === 'tag' && filterText === "Bitcoin Well") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Hodl Hodl") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Kraken") {
        return true;
    }
    if (filterType === 'tag' && filterText === "BTCPay Server") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Debifi") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Azteco") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Bisq") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Casa") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Unchained/Caravan") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Bittr") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Bitrefill") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Fountain") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Strike") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Spike to Spike") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Ledn") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Anchorwatch/Trident") {
        return true;
    }
    if (filterType === 'tag' && filterText === "IBEXPay") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Robosats") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Peach") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Coinos") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Shakepay") {
        return true;
    }
    if (filterType === 'tag' && filterText === "River") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Bull Bitcoin") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Bitaroo") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Mempool.space") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Heatbit") {
        return true;
    }
    if (filterType === 'tag' && filterText === "Cove") {
        return true;
    }
    // Add more filters with info boxes here in the future
    return false;
}

// Get info box content for a specific filter
function getInfoBoxContent(filterText, filterType) {
    const infoBoxTexts = {
        "Child Seeds (BIP 85)": "BIP 85 (Deterministic Entropy from BIP32 Keychains) introduces a method for generating child seeds—independent wallets or accounts—directly from a single master seed. Instead of creating and backing up many different recovery phrases, a user can securely derive new ones on demand using their existing hardware wallet or seed phrase. Each derived seed behaves like a completely separate wallet, but can always be deterministically recreated from the original root. Bitcoiners use BIP 85 to simplify backups, manage multiple wallets (for example, a spending wallet, Lightning wallet, or testnet wallet), and maintain strong security isolation without juggling many separate recovery phrases. It offers predictable, reproducible entropy for generating new mnemonic seeds or keys while keeping everything anchored to one securely stored root.",
        "Coinjoin (JoinMarket)": "JoinMarket is a decentralized CoinJoin protocol that allows Bitcoin users to mix their coins with others to improve privacy and break the on-chain link between their inputs and outputs. Unlike centralized mixers, JoinMarket uses a market-based model where \"takers\" pay \"makers\" to participate in collaborative transactions, incentivizing liquidity for privacy. Bitcoiners use JoinMarket to obscure the history of their coins, protect financial privacy, and avoid address clustering by chain analysis tools—all without relying on a trusted third party. Key features include non-custodial mixing, a peer-to-peer order book for liquidity, wallet integration for ease of use, and compatibility with both single-signature and multisig setups, making it one of the most practical and robust tools for on-chain Bitcoin privacy.",
        "Coinjoin (Wabisabi)": "The WabiSabi CoinJoin protocol, developed for the Wasabi Wallet, is a modern Bitcoin privacy system that enables flexible, efficient, and high-liquidity mixing of coins. It improves on earlier CoinJoin designs by using anonymous credentials and zero-knowledge proofs to let users contribute variable input and output amounts in the same round, rather than being limited to equal denominations. Coordination is handled by a central server that organizes rounds but never takes custody of funds or learns which inputs correspond to which outputs, thanks to cryptographic blinding. Bitcoiners use WabiSabi to enhance their on-chain privacy, prevent address clustering, and make transaction histories much harder to trace—all while keeping full control of their coins. Key features include blinded signatures, denomination flexibility, Tor integration for network privacy, and a non-custodial trust model.",
        "Coinjoin (Whirlpool)": "Whirlpool is a non-custodial CoinJoin implementation developed by Samourai Wallet that enables Bitcoin users to mix their coins in equal denominations to break on-chain links and strengthen privacy. It uses a central coordinator to organize CoinJoin rounds without ever taking custody of funds or learning which inputs correspond to which outputs, ensuring strong cryptographic anonymity. Bitcoiners use Whirlpool to de-link transaction histories, obscure spending patterns, and enhance financial privacy while maintaining full control of their coins. Key features include equal-output mixing for large anonymity sets, free post-mix remixes that increase privacy over time, Tor network integration, and seamless compatibility with Ashigaru Wallet for coordinated use.",
        "Encrypted Backups": "An encrypted backup for your seed protects your wallet's recovery phrase by locking it with a password or encryption key, so it can't be read if stolen or lost. This lets you safely store digital or cloud backups of your seed without exposing your bitcoin to theft.",
        "Multisig": "Multisig (short for \"multi-signature\") is a Bitcoin security setup that requires multiple private keys to approve a transaction. It's often used for shared wallets, inheritance plans, or extra protection—so no single person or compromised key can move the funds alone.",
        "Non-KYC": "Non-KYC means \"no Know Your Customer,\" referring to Bitcoin services or exchanges that don't require users to share personal identification. These options allow for greater privacy and financial freedom, though often with lower limits or more manual processes.",
        "Payjoin": "Payjoin is a type of Bitcoin transaction where both the sender and receiver contribute inputs, making it harder for outside observers to trace who paid whom. It improves privacy without needing a centralized mixer or coordination with multiple strangers.",
        "Paynyms (BIP 47)": "PayNyms, based on BIP-47, let users share a single reusable payment code instead of a new address each time. This allows anyone to send you bitcoin privately—creating unique addresses behind the scenes—without revealing your transaction history or wallet details.",
        "Seed Phrases (General)": "A seed phrase is a list of 12 or 24 words that safely backs up your Bitcoin wallet. It can be used to recover your wallet and funds on any compatible device if your phone, computer, or hardware wallet is lost or damaged.",
        "Seed XOR": "Seed XOR is a backup method that splits your wallet's seed phrase into two or more parts using a simple mathematical process. Each part looks like a normal seed, but you need all of them together to recreate your original wallet—adding an extra layer of security against theft or loss.",
        "SeedQR": "SeedQR is a way to store your Bitcoin seed phrase as a QR code instead of written words, making it quick to back up or restore without typing. It keeps your seed easy to scan for recovery while still allowing offline, paper, or metal storage for security.",
        "Shamir's Secret Sharing (SLIP-39)": "Shamir's Secret Sharing, defined in SLIP-39, splits your wallet's seed into multiple unique shares that can be distributed among trusted people or locations. Only a chosen number of shares are needed to restore the wallet, providing both redundancy and protection if one piece is lost or stolen.",
        "Silent Payments": "Silent Payments let you share one static address that still creates unique, private addresses for every payment you receive. This improves privacy by preventing anyone from linking your incoming transactions together on the blockchain.",
        "UTXO Management": "UTXO management is the process of organizing and controlling the individual chunks of bitcoin (\"unspent transaction outputs\") in your wallet. Good UTXO management helps you maintain privacy, lower fees, and avoid linking your transactions together unnecessarily.",
        "Verifying Downloads": "Verifying downloads with PGP or similar tools ensures the file you received hasn't been tampered with by comparing it against the developer's signed verification file. This protects you from malicious or altered software, confirming it's the authentic version released by the creator.",
        "Border Wallet": "A Bitcoin Border Wallet is a type of wallet designed for securely memorizing or transporting your Bitcoin seed phrase across borders without carrying any physical copy. It uses simple, easy-to-remember words or patterns (often encoded using a cipher or grid) so that you can reconstruct your wallet later without leaving a trace on paper or devices.",
        "Child Pays For Parent (CPFP)": "Child Pays for Parent (CPFP) is a Bitcoin fee bumping technique where a new transaction (\"child\") with a higher fee is created to incentivize miners to also confirm an older, stuck transaction (\"parent\"). This works because miners will include both transactions together if the combined fees meet their desired rate.",
        "FROST": "FROST (Flexible Round-Optimized Schnorr Threshold Signatures) is a cryptographic protocol that allows a group of signers to collectively produce a single Schnorr signature without revealing which members participated. It improves privacy, efficiency, and security for multisig setups by reducing the number of communication rounds and keeping keys distributed.",
        "Gettxoutsetinfo (Audit Supply)": "gettxoutsetinfo is a Bitcoin Core RPC command that calculates the total supply of bitcoin at a given block height by analyzing the entire UTXO (unspent transaction output) set. It reports details such as the number of transactions and outputs, the total amount of bitcoin in existence at that point, and the serialized size and hash of the UTXO set.",
        "Partially Signed Bitcoin Transactions (PSBT)": "Partially Signed Bitcoin Transactions (PSBT) are a standardized format that allows multiple devices or participants to safely collaborate in creating and signing a Bitcoin transaction. This makes it easier to use hardware wallets, multisig setups, or offline devices together without ever exposing private keys.",
        "Replace By Fee (RBF)": "Replace-By-Fee (RBF) is a Bitcoin feature that lets you resend an unconfirmed transaction with a higher fee to speed up confirmation. It gives users flexibility to adjust fees after sending, ensuring their transaction doesn't get stuck in the mempool.",
        "Statechains": "Statechains are a Bitcoin layer-2 protocol that allow ownership of a UTXO to be transferred off-chain without broadcasting new transactions to the blockchain. They enable fast, low-fee transfers by passing control of the private key between users under the coordination of a statechain server, while maintaining Bitcoin's self-custody model.",
        "Taproot Assets": "Taproot Assets is a protocol that allows users to issue and transfer digital assets—like stablecoins or tokens—directly on the Bitcoin blockchain using Taproot's smart contract features. It can also operate over the Lightning Network, enabling instant, low-fee transactions of these assets while remaining nearly indistinguishable from regular Bitcoin payments.",
        "Timelocks": "Bitcoin timelocks are a feature that restricts when a transaction or output can be spent until a certain time or block height is reached. They enable advanced uses like payment delays, escrows, and smart contracts by enforcing spending conditions directly in the Bitcoin protocol.",
        "Nunchuk": "Nunchuk is a powerful Bitcoin wallet designed around collaborative multisig security, offering a balance of advanced protection and ease of use. It stands out for its team-based key management, allowing families, businesses, or inheritance planners to coordinate shared custody without trusting a single device or person. Users can mix hardware, mobile, and offline keys, create custom spending policies, and even use encrypted in-app chat to coordinate cosigning securely. Nunchuk also offers features like inheritance planning, policy templates, and emergency recovery options, making it one of the most complete multisig solutions available. By combining privacy, flexibility, and strong cryptographic control, Nunchuk turns complex multisig setups into a smooth, user-friendly experience.",
        "Derivation Paths": "Derivation paths are standardized instructions used by Bitcoin wallets to deterministically generate large numbers of private keys and addresses from a single master seed. They define how a wallet derives specific keys\u2014for example, separating accounts, address types (Legacy, SegWit, Taproot), or purposes\u2014so the same seed always recreates the same wallet structure. Bitcoiners use derivation paths to ensure reliable wallet recovery, compatibility across different wallets, and clean organization of funds without managing multiple seeds. Their unique features include hierarchical structure, standardization through BIPs like BIP-44, BIP-49, BIP-84, and BIP-86, support for multiple accounts and address formats, and the ability to fully restore a wallet\u2019s addresses and balances using just the seed phrase and the correct path.",
        "Heatbit": "Heatbit is a home space heater that doubles as a Bitcoin miner, turning the heat generated from mining into usable warmth for your room. Instead of wasting the energy that traditional mining rigs produce, Heatbit captures that heat and uses it to warm your home, while automatically mining Bitcoin in the background. You simply plug it in, connect it to Wi-Fi, and control it through an app\u2014no technical mining setup required. It looks like a modern heater, runs quietly, and is designed for people who want to support the Bitcoin network and potentially earn small amounts of bitcoin while heating their space.",
        "Cove": "Cove Bitcoin Wallet is a mobile Bitcoin wallet designed to make advanced self-custody features simple and accessible, especially for users running their own node. Built with a clean, modern interface, Cove focuses on privacy and control by letting users connect directly to their own Bitcoin node instead of relying on third-party servers. What makes it unique is its emphasis on powerful wallet configurations\u2014such as multisig setups and hardware wallet integration\u2014while still keeping the experience intuitive for everyday use. For bitcoiners who value sovereignty, privacy, and the ability to verify their own transactions, Cove offers a practical balance between ease of use and serious self-custody tools, making it a strong option for those ready to move beyond basic, custodial apps."
    };

    return infoBoxTexts[filterText] || '';
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

// Generate platform icons HTML for tags
function getPlatformIconsHTML(filterKey) {
    const info = filterInfoMap.get(filterKey);
    if (!info || !info.platforms) return '';

    // Parse comma-separated platform values
    const platformList = info.platforms.split(',').map(p => p.trim().toLowerCase()).filter(p => p);
    if (platformList.length === 0) return '';

    // Define the display order
    const platformOrder = ['mac', 'windows', 'linux', 'iphone', 'android'];

    // Sort platforms according to the specified order
    const sortedPlatforms = platformList.sort((a, b) => {
        return platformOrder.indexOf(a) - platformOrder.indexOf(b);
    });

    let iconsHTML = '';
    sortedPlatforms.forEach(platform => {
        const iconFile = `${platform}.png`;
        // Map platform names to proper display names
        const platformNames = {
            'mac': 'Mac',
            'windows': 'Windows',
            'linux': 'Linux',
            'iphone': 'iPhone',
            'android': 'Android'
        };
        const title = platformNames[platform] || platform.charAt(0).toUpperCase() + platform.slice(1);
        iconsHTML += `<img src="${iconFile}" class="social-icon social-icon-img platform-icon" alt="${title}" title="${title}">`;
    });

    return iconsHTML ? `<span class="platform-icons-label">Platforms:</span><span class="platform-icons-container">${iconsHTML}</span>` : '';
}

// Build complete info box content with tag name, social icons, and educational text
function buildInfoBoxContent(filterText, filterType, filterKey) {
    let content = '';

    // Get tag icon
    const tagIcon = getTagIconWithFallback(filterText);

    // Check if there are social icons
    const hasSocialIcons = filterHasSocialIcons(filterKey);
    const socialIconsHTML = hasSocialIcons ? getSocialIconsHTML(filterKey) : '';

    // Get platform icons (only for tags)
    const platformIconsHTML = (filterType === 'tag') ? getPlatformIconsHTML(filterKey) : '';

    // Header with tag name, icon, social icons, and platform icons on the same line
    content += `<div class="info-box-header">${tagIcon}${filterText}${socialIconsHTML}${platformIconsHTML}</div>`;

    // Custom text for specific tags/filters
    let customText = '';

    if (filterText === 'BitBox') {
        customText = `The BitBox is a compact, Swiss-made Bitcoin hardware wallet designed for both security and simplicity. It securely stores your private keys offline, protecting your funds from online threats, while its minimalist design and intuitive companion app make it beginner-friendly. Unique features include microSD backup for quick recovery, touch-button confirmation directly on the device, and open-source firmware, allowing anyone to verify its security. The BitBox also supports multisig setups, passphrase protection, and Tor connectivity, giving users strong privacy and flexibility options while maintaining an easy, plug-and-play experience.`;
    } else if (filterText === 'Bitkey') {
        customText = `Bitkey is a Bitcoin wallet developed by Block (the company behind Cash App and Square) that focuses on security, simplicity, and accessibility for everyday users. It's a multi-device self-custody system, combining a mobile app, a hardware device, and secure cloud backup—so you stay in control of your Bitcoin without needing to manage a complex seed phrase. Bitkey uses 2-of-3 multisig security, meaning two devices (for example, your phone and hardware key) are required to move funds, offering strong protection against theft or loss. It also allows recovery through your phone and cloud account if one device is lost, and is fully open source, ensuring transparency and trust in its design.`;
    } else if (filterText === 'ColdCard MK(1-4)') {
        customText = `The Coldcard line (MK1–MK4) is a series of Bitcoin-only signing devices built by Coinkite, known for prioritizing maximum security and transparency. Unlike typical hardware wallets, Coldcards are designed to operate completely air-gapped, meaning you can sign transactions using a microSD card without ever connecting the device to a computer. They feature a numeric keypad, encrypted backups, secure element chip, and open-source firmware, allowing full auditability of how your Bitcoin is protected. The newer MK4 model adds dual secure elements, USB-C support, and faster processing, while keeping compatibility with popular wallets like Sparrow and Specter. Coldcard's emphasis on verifiable security, durability, and advanced privacy tools makes it a top choice for users who value self-custody and want to minimize trust in external systems.`;
    } else if (filterText === 'ColdCard Q') {
        customText = `The Coldcard Q is Coinkite's next-generation Bitcoin-only signing device, combining the high security of earlier Coldcard models with a more user-friendly design. It features a built-in QWERTY keyboard, a large color screen, and AA battery support, allowing fully air-gapped operation without any cables or external power. Like previous models, it supports microSD-based transaction signing, secure elements, and encrypted backups, but adds enhanced usability for those managing multiple wallets or multisig setups. With open-source firmware, QR code support for easy transaction flow, and no internet connectivity, the Coldcard Q offers professional-grade Bitcoin security in a more intuitive, portable, and self-contained device.`;
    } else if (filterText === 'Frostsnap') {
        customText = `The Frostsnap line of signing devices is an innovative, privacy-focused approach to Bitcoin self-custody that combines air-gapped security with frictionless usability. Built around the FROST multisignature protocol, Frostsnap enables multiple devices to cooperatively sign transactions without ever exposing private keys, making it both secure and flexible for individuals or groups. Each device is designed to communicate via simple optical or wireless signals, removing the need for cables or USB connections. With open-source firmware, low-cost hardware, and a focus on modularity and scalability, Frostsnap brings advanced cryptographic security—once reserved for institutions—into a compact, user-friendly form that's ideal for both personal and collaborative Bitcoin custody.`;
    } else if (filterText === 'Jade') {
        customText = `The Jade line of signing devices, developed by Blockstream, offers an affordable and open-source way to securely store and use your Bitcoin. Designed with self-custody and transparency in mind, Jade supports both air-gapped (QR-based) and USB/Bluetooth connections, allowing flexibility for different setups. It works seamlessly with Blockstream Green and other popular wallets, supporting multisig, Liquid assets, and PIN-protected hardware encryption. Unique among many wallets, Jade's firmware and hardware are fully open source, meaning the community can audit every part of its security design. With its compact form factor, rechargeable battery, and emphasis on privacy and verifiable security, Jade is a trusted entry point into secure Bitcoin ownership.`;
    } else if (filterText === 'Jade Plus') {
        customText = `The Jade Plus is Blockstream's enhanced version of its popular open-source signing device, offering upgraded security and usability while maintaining its affordability. It features a high-resolution color display, a faster processor, and USB-C connectivity, making transaction verification clearer and navigation smoother. Like the original Jade, it supports air-gapped operation via QR codes, Bluetooth and USB connections, and multisig compatibility through Blockstream Green and other major wallets. The Jade Plus also includes a secure element chip for added key protection while preserving the device's fully open-source firmware and hardware, allowing public auditability. Designed for both beginners and advanced users, it blends transparency, portability, and strong security into a sleek, next-generation Bitcoin signing experience.`;
    } else if (filterText === 'KeepKey') {
        customText = `The KeepKey line of signing devices is a sleek and user-friendly hardware wallet designed to make Bitcoin and cryptocurrency self-custody simple and secure. It features a large OLED display that clearly shows transaction details for on-device verification, along with a durable aluminum body that gives it a premium feel. KeepKey integrates seamlessly with ShapeShift for built-in crypto swaps and supports multiple assets, making it appealing to users who hold both Bitcoin and altcoins. Private keys are stored completely offline, protected by a PIN code and recovery seed, and can be easily backed up for recovery. With its emphasis on visual clarity, simplicity, and solid security, KeepKey offers a straightforward entry point for those new to hardware wallets.`;
    } else if (filterText === 'KeyFlint') {
        customText = `The KeepFlint DIY signing device is a build-it-yourself Bitcoin hardware wallet, designed for users who value full control, transparency, and education in their self-custody setup. It allows you to assemble the device from readily available parts, ensuring there are no hidden components or supply-chain risks. Like the standard KeepFlint, it operates completely air-gapped, using QR codes or microSD cards to sign transactions without ever connecting to the internet. Its open-source firmware lets users inspect, modify, and verify every part of its code, while still offering advanced features like multisig support, passphrase protection, and secure key storage. Ideal for privacy-conscious Bitcoiners and hobbyists, the KeepFlint DIY combines hands-on learning with high-grade security, giving users complete confidence in how their Bitcoin is protected.`;
    } else if (filterText === 'Keystone') {
        customText = `The Keystone signing device (formerly Cobo Vault) is a fully air-gapped, multi-coin hardware wallet that combines strong security with modern usability. It features a large color touchscreen, QR code-based transaction signing, and no USB or Bluetooth connections, keeping your private keys completely offline. Its open-source firmware, secure element chip, and removable battery design add layers of protection and verifiability, while support for PSBT (Partially Signed Bitcoin Transactions) ensures compatibility with popular wallets like Sparrow, BlueWallet, and Electrum. Keystone also supports multisig, Shamir backups, and Biometric unlocking, offering both convenience and institutional-grade security. With its smartphone-like interface and transparent design philosophy, Keystone bridges the gap between ease of use and uncompromising Bitcoin self-custody.`;
    } else if (filterText === 'Krux') {
        customText = `The Krux DIY signing device is an entirely open-source, build-it-yourself Bitcoin wallet designed for users who want complete transparency and control over their self-custody setup. Built to run on inexpensive, off-the-shelf hardware like the M5StickV or similar devices, Krux operates fully air-gapped, using QR codes to sign transactions without any need for USB or network connections. It supports BIP39 seed phrases, passphrases, and PSBT workflows, making it compatible with popular wallets such as Sparrow and Specter. Because both its hardware and firmware are open and auditable, users can verify every step of the security model and even customize it for their needs. Lightweight, portable, and educational, Krux empowers Bitcoiners to own every part of their signing device—from assembly to code.`;
    } else if (filterText === 'Ledger Flex') {
        customText = `The Ledger Flex is a next-generation Bitcoin and crypto signing device that emphasizes portability, security, and sustainability through its flexible e-ink display and solar-powered design. Created by Ledger as an evolution of traditional hardware wallets, it offers air-gapped operation with QR code scanning and Bluetooth connectivity, removing the need for physical cables. The e-ink screen provides excellent visibility and ultra-low power consumption, while the solar charging ensures it's always ready to use without relying on batteries or USB ports. Like other Ledger devices, the Flex uses a secure element chip and integrates with the Ledger Live app for seamless wallet management. Combining modern usability, eco-friendly innovation, and Ledger's established security standards, the Ledger Flex brings a fresh, mobile-first approach to safe Bitcoin self-custody.`;
    } else if (filterText === 'Ledger Nano(S/X)') {
        customText = `The Ledger Nano S and Ledger Nano X are popular hardware wallets that provide secure storage for Bitcoin and hundreds of other cryptocurrencies by keeping your private keys completely offline. The Nano S offers a simple, USB-based design ideal for desktop users who value affordability and reliability, while the Nano X adds Bluetooth connectivity, a larger screen, and mobile compatibility for on-the-go use. Both devices use a certified secure element chip to protect your keys from hacks and are managed through the Ledger Live app, which lets you send, receive, and manage assets easily. With PIN protection, recovery seed backup, and firmware verified by independent security labs, the Ledger Nano line combines convenience with industry-leading security—making it one of the most trusted options for both new and experienced Bitcoin holders.`;
    } else if (filterText === 'OneKey') {
        customText = `The OneKey line of signing devices offers a sleek, user-friendly, and open-source solution for securely storing Bitcoin and other cryptocurrencies. Designed with both beginners and advanced users in mind, OneKey supports USB, Bluetooth, and QR-based connections, allowing for flexible and air-gapped operation depending on your setup. It integrates smoothly with the OneKey desktop and mobile apps, supporting features like multisig, passphrase protection, and secure backups. Built with a secure element chip and auditable firmware, OneKey balances strong security with transparency and usability. Whether using the OneKey Classic, Mini, or Touch model with its color touchscreen, users benefit from an elegant design, wide compatibility, and a commitment to open, verifiable Bitcoin custody.`;
    } else if (filterText === 'Opendime') {
        customText = `The Opendime is a tiny, USB stick–sized Bitcoin hardware device created by Coinkite that functions as a physical bearer instrument for Bitcoin—much like a digital cash note. Unlike traditional wallets, it allows you to load Bitcoin onto it and hand it to someone else without either party needing to trust the other or reveal private keys. The private key is generated and stored securely inside the device, remaining hidden until you deliberately "unseal" it by breaking a physical tab, which permanently exposes the key for spending. This makes Opendime ideal for offline payments, gifting, or cold storage, where transferability and simplicity are key. With its plug-and-play design, no setup software, and Bitcoin-only focus, Opendime offers a unique, tangible way to hold and transfer Bitcoin securely and privately.`;
    } else if (filterText === 'Passport Core') {
        customText = `The Foundation Devices Passport Core is a Bitcoin-only signing device that combines strong security, open-source transparency, and a sleek, smartphone-like design to make self-custody both safe and intuitive. It operates fully air-gapped, using QR codes to sign transactions without ever connecting via USB or Bluetooth, keeping your private keys completely offline. The Passport Core features a color screen, removable battery, and physical keypad, allowing for clear transaction verification and easy navigation. Its open-source firmware and hardware are fully auditable, and it integrates seamlessly with popular wallets like Sparrow, BlueWallet, and Specter. Built in the U.S. with a focus on sovereignty, privacy, and user experience, the Passport Core offers a premium, verifiable, and beginner-friendly way to securely hold your Bitcoin.`;
    } else if (filterText === 'Satochip') {
        customText = `The Satochip line of devices is a smartcard-based Bitcoin signing solution that offers a lightweight, affordable, and open-source approach to secure self-custody. Short for Secure Anonymous Trustless and Open Chip, Satochip stores your private keys safely inside a tamper-resistant smartcard, which connects through a USB or NFC reader for transaction signing. It supports Bitcoin and other cryptocurrencies, multisig setups, and works seamlessly with wallets like Electrum, Sparrow, and MetaMask. Because the hardware and software are fully open source, users can independently verify its security and even build their own compatible card readers. Compact and durable, Satochip provides a credit card–sized alternative to traditional hardware wallets—ideal for those who want simplicity, transparency, and portability without sacrificing security.`;
    } else if (filterText === 'Satodime') {
        customText = `The Satodime is a physical Bitcoin wallet card designed for secure, offline storage and easy transfer of ownership, functioning like a digital bearer asset. Developed by the Satochip team, it securely generates and stores private keys inside a tamper-resistant smartcard, keeping them hidden even from the card's owner until they choose to "reveal" the wallet to spend the funds. Each Satodime card can hold multiple deposit addresses, supports Bitcoin and select other assets, and can be handed over physically as a gift, cold-storage option, or payment method. With open-source software, NFC compatibility, and a credit card–sized form factor, Satodime offers a unique, portable, and verifiable way to hold and exchange Bitcoin securely—no internet or complicated setup required.`;
    } else if (filterText === 'Satscard') {
        customText = `The Satscard, created by Coinkite, is a credit card–sized Bitcoin bearer wallet that lets you load, store, and transfer Bitcoin by simply handing the card to someone else—just like cash. It uses NFC technology to interact with your phone, allowing you to check balances or make deposits and withdrawals through compatible apps without ever exposing your private keys. Each Satscard contains multiple independent Bitcoin slots, so you can reuse it for several transactions or gifts. Built with Coinkite's proven secure hardware and Bitcoin-only focus, the Satscard combines physical simplicity, strong cryptographic security, and offline usability. Whether used for gifting, cold storage, or everyday transfers, it offers a tangible, trust-minimized way to hold and exchange Bitcoin privately and conveniently.`;
    } else if (filterText === 'SeedSigner') {
        customText = `The SeedSigner is a DIY, open-source Bitcoin signing device designed to maximize privacy, transparency, and user control. Built from inexpensive, off-the-shelf components like a Raspberry Pi Zero and a camera module, it allows anyone to assemble their own hardware wallet without relying on proprietary parts or trusted manufacturers. SeedSigner operates fully air-gapped, using QR codes to transfer data between the device and a wallet interface—so it never connects to the internet or stores private keys permanently. Instead, it can generate and display a seed phrase for temporary use, or sign transactions using a seed entered manually or via a backup image. Supporting multisig setups and PSBT workflows, SeedSigner offers a low-cost, verifiable, and privacy-respecting way to manage Bitcoin securely while giving users complete control over every aspect of their device.`;
    } else if (filterText === 'Seedkeeper') {
        customText = `The Seedkeeper by Satochip is a smartcard-based backup device designed to securely store your Bitcoin seed phrase or private keys in a tamper-resistant, encrypted format. Unlike traditional metal backups, it uses cryptographic encryption within a secure chip, allowing you to safely back up, restore, and manage your recovery data through the open-source Satochip interface. The device supports BIP39 seed phrases and ensures that your sensitive information never leaves the chip unencrypted, protecting against both digital theft and physical compromise. Compact and durable like a credit card, the Seedkeeper integrates seamlessly with Satochip wallets and other compatible tools, providing a modern, portable, and privacy-preserving way to safeguard your Bitcoin backups without exposing your keys to the internet or external devices.`;
    } else if (filterText === 'Signing Devices (General)') {
        customText = `A Bitcoin signing device (also known as a hardware wallet) is a small, secure tool designed to keep your Bitcoin safe by protecting your private keys—the secret codes that control your coins. When you send Bitcoin, your transaction must be "signed" using these keys to prove ownership, and the signing device does this offline, so your keys never touch the internet where hackers could steal them. You typically connect the device to a wallet app on your computer or phone, review the transaction details on the device's screen, and then confirm it with a button or touch input. Many signing devices are air-gapped, meaning they use QR codes or microSD cards instead of cables, further isolating your keys from online threats. They can also work with multisig setups, passphrases, and secure backups for extra protection. In short, a Bitcoin signing device is like a digital vault—you use it to securely approve transactions while keeping your Bitcoin keys safely offline and under your control.`;
    } else if (filterText === 'Specter DIY') {
        customText = `The Specter DIY is a build-it-yourself Bitcoin signing device created by the team behind Specter Solutions, offering maximum transparency, flexibility, and verifiable security. It's an open-source project that can be assembled from readily available components like a Raspberry Pi and a touchscreen, allowing users to verify every aspect of the hardware and firmware. The device operates completely air-gapped, using QR codes or microSD cards to sign transactions, ensuring that private keys never touch an internet-connected device. It supports BIP39 seeds, multisig wallets, and PSBT workflows, integrating seamlessly with the Specter Desktop wallet and other popular Bitcoin tools. Designed for privacy-conscious Bitcoiners and DIY enthusiasts, the Specter DIY provides a hands-on, transparent, and highly secure way to control your Bitcoin without relying on closed-source hardware or manufacturers.`;
    } else if (filterText === 'Tapsigner') {
        customText = `The Tapsigner by Coinkite is a Bitcoin signing card that brings secure, mobile-friendly self-custody to your pocket. Shaped like a credit card, it uses NFC (Near Field Communication) to connect wirelessly with your smartphone, allowing you to sign Bitcoin transactions simply by tapping the card to your device. Inside, it contains a secure element chip that safely stores your private key and signs transactions without ever exposing it. Designed for use with apps like Nunchuk and Sparrow, the Tapsigner supports PSBT workflows, multisig setups, and encrypted backups, offering flexibility for both new and advanced users. Combining Coinkite's Bitcoin-only focus, open-source firmware, and portable form factor, the Tapsigner delivers a fast, secure, and convenient way to manage Bitcoin—no cables or complicated setup required.`;
    } else if (filterText === 'Trezor One') {
        customText = `The Trezor One is one of the most trusted and widely used Bitcoin and cryptocurrency signing devices, designed to make self-custody simple, secure, and transparent. As the world's first hardware wallet, it introduced the idea of keeping private keys offline while still allowing easy access to manage your funds through the Trezor Suite app. The device features two physical buttons and a clear OLED screen for securely verifying transactions, ensuring you always know exactly what you're signing. With open-source firmware and hardware, PIN protection, and recovery seed backups, users can verify and trust how their keys are handled. Compact, affordable, and compatible with a wide range of wallets, the Trezor One remains a reliable entry point for anyone starting their journey into safe Bitcoin ownership.`;
    } else if (filterText === 'Trezor T') {
        customText = `The Trezor Model T is a premium Bitcoin and cryptocurrency signing device that combines advanced security with an intuitive, modern interface. It features a full-color touchscreen, allowing users to securely enter PINs, passphrases, and confirm transactions directly on the device—keeping sensitive information completely isolated from potentially compromised computers or phones. The Model T supports Bitcoin and a wide range of other cryptocurrencies, integrates seamlessly with Trezor Suite and popular third-party wallets, and offers microSD encryption, Shamir backups, and open-source firmware and hardware for full transparency. Designed and manufactured in Europe by SatoshiLabs, the Trezor T provides top-tier security and ease of use, making it a trusted choice for users who want both power and peace of mind in managing their Bitcoin securely.`;
    } else if (filterText === 'Trezor Safe') {
        customText = `The Trezor Safe 3, Trezor Safe 5, and Trezor Safe 7 form a clearly tiered lineup of Bitcoin and cryptocurrency signing devices from Trezor, sharing core security features but differing in interface, transparency, and power. The Safe 3 is the most minimal model, using physical buttons and a compact design for users who want straightforward, durable security at a lower cost. The Safe 5 builds on this by adding a full-color touchscreen, allowing PINs, passphrases, and transaction confirmations to be entered directly on the device for improved privacy and ease of use. The Safe 7 is the flagship model and stands apart by using an open-source secure element, meaning even the security chip itself is publicly auditable—an industry-rare feature aimed at users who prioritize maximum transparency and minimal trust in proprietary hardware. The Safe 7 also includes a larger, higher-resolution touchscreen and faster performance, making it best suited for advanced users or larger holdings. All three models integrate with Trezor Suite, support Bitcoin and many other assets, and offer features like PINs, passphrases, and Shamir backups, giving users a clear choice between simplicity, usability, and fully verifiable security.`;
    } else if (filterText === 'Aqua') {
        customText = `Aqua Wallet, developed by Blockstream, is a simple and beginner-friendly Bitcoin and Liquid Network wallet designed for mobile users who want both convenience and advanced privacy options. It lets you hold Bitcoin as well as Liquid assets like L-BTC and stablecoins such as USDt on the same app, offering faster and cheaper transactions on the Liquid sidechain. Aqua emphasizes self-custody, meaning you control your own keys, and it provides strong privacy features like confidential transactions that hide amounts and asset types. It also includes Lightning Network support for instant, low-fee payments. For Bitcoiners who want a secure, easy-to-use mobile wallet that bridges on-chain, Lightning, and Liquid use cases, Aqua offers a clean and modern gateway into the broader Bitcoin ecosystem.`;
    } else if (filterText === 'Ashigaru') {
        customText = `Ashigaru Wallet is a privacy-focused, open-source Bitcoin wallet that continues the mission of Samourai Wallet with an emphasis on user sovereignty and minimal reliance on third-party infrastructure. It supports advanced privacy tools like Whirlpool CoinJoin to break transaction links, PayNym (BIP47) reusable payment codes to prevent address reuse, and routes all network traffic over Tor by default. The wallet gives users full control through detailed coin management features, including labeling, freezing, and selecting specific UTXOs, while maintaining full self-custody of keys. Because it's designed to connect directly to your own node (via Dojo or Fulcrum), Ashigaru is ideal for Bitcoiners who value strong privacy, censorship resistance, and full control over their funds—making it one of the most powerful tools for those who want to use Bitcoin privately and on their own terms.`;
    } else if (filterText === 'Bitcoin Core Wallet') {
        customText = `Bitcoin Core Wallet is the original, fully validating Bitcoin wallet developed by the same open-source project that maintains the Bitcoin network itself. It runs a full node, meaning it independently verifies every transaction and block, offering the highest level of trustlessness and security possible. Users hold their own private keys and interact directly with the Bitcoin blockchain—no third parties involved. Bitcoin Core supports native SegWit (bech32) addresses for lower fees, advanced coin control for privacy and UTXO management, and PSBT (Partially Signed Bitcoin Transactions) for secure signing workflows. While it requires downloading and maintaining the full blockchain, making it more resource-intensive than lightweight wallets, Bitcoin Core is the best choice for Bitcoiners who prioritize sovereignty, verifiability, and participating directly in the decentralized network that defines Bitcoin itself.`;
    } else if (filterText === 'Bitcoin Keeper') {
        customText = `Bitcoin Keeper is a powerful mobile wallet designed for Bitcoiners who want to easily set up and manage multisig wallets for stronger security and inheritance planning. It integrates seamlessly with popular hardware wallets like Coldcard, Trezor, Ledger, and Keystone, allowing users to distribute their keys across multiple devices or people for protection against single points of failure. Keeper also supports collaborative custody through partnerships with professional key-holding services, offering optional recovery and assisted security for those who prefer it. Unique features include policy-based spending controls, inheritance tools, and integration with hardware signers using QR codes or NFC. Bitcoin Keeper gives you full control of your Bitcoin while providing flexible options—from complete self-custody to shared or assisted custody—making it ideal for individuals and families who want advanced security without sacrificing ease of use.`;
    } else if (filterText === 'Blitz') {
        customText = `Blitz Wallet is a self-custodial Bitcoin wallet designed to make using Bitcoin as simple as sending a message, while still giving you full control over your funds. It features a built-in contacts system so you can send Bitcoin just by picking a friend, plus a storefront where you can spend directly on gift cards, services or enable merchants to accept Bitcoin payments. Unique among wallets, Blitz supports multiple Bitcoin layers seamlessly — on-chain, Lightning Network, Liquid Network and its own "Spark" layer — and it uses human-readable addresses like username@blitzwalletapp.com instead of complicated invoices. Because it's non-custodial (you control the seed phrase) and focuses on simplifying payments, a Bitcoiner should consider it if they want a user-friendly "pay & spend" experience without giving up sovereignty. That said, it's currently in beta and so it's wise to only put in funds you're comfortable with risk while it matures and you do your own backups and security checks.`;
    } else if (filterText === 'Blixt') {
        customText = `Blixt Wallet is a non-custodial, open-source Lightning Network wallet for Android and iOS that gives users full control over their Bitcoin while offering a smooth mobile experience for everyday payments. It runs a Lightning node directly on your phone, using Neutrino technology to verify transactions without relying on a centralized server, and allows instant payments without custodial intermediaries. Blixt supports both on-chain and Lightning transactions, provides channel management tools, keysend payments, LNURL, and Bolt12 offers, making it one of the most feature-complete mobile Lightning wallets available. Its open-source design and built-in node make it perfect for Bitcoiners who want to use Lightning privately and sovereignly, without trusting third parties—ideal for those seeking true self-custody and hands-on control of their Lightning experience.`;
    } else if (filterText === 'Blockstream App') {
        customText = `The Blockstream App (formerly Blockstream Green) is a self-custodial Bitcoin wallet that integrates on-chain Bitcoin and the Liquid Network for fast, confidential transactions and assets like L-BTC and USDt. Built by Blockstream, it supports hardware wallets such as Blockstream Jade, allows connection to your own node, and routes traffic over Tor for enhanced privacy. Users can buy Bitcoin directly in-app, set up multisig wallets, and manage both mobile and desktop accounts with the same secure seed. Open-source and beginner-friendly yet powerful for advanced users, the Blockstream App is ideal for Bitcoiners who want full control of their funds with access to both Bitcoin's base layer and the Liquid sidechain in one streamlined interface.`;
    } else if (filterText === 'BlueWallet') {
        customText = `BlueWallet is a popular, open-source Bitcoin and Lightning wallet designed for simplicity and self-custody on both mobile and desktop. It supports on-chain Bitcoin wallets as well as Lightning Network wallets using LNDHub, which lets you connect to your own Lightning node or use a trusted third-party server for convenience. BlueWallet is known for its clean interface, multi-wallet support, and advanced tools like PSBT (Partially Signed Bitcoin Transactions), watch-only wallets, and export compatibility with hardware wallets such as Coldcard. It also offers privacy enhancements like Tor integration and the ability to import or connect external wallets easily. A Bitcoiner should choose BlueWallet if they want a flexible, beginner-friendly wallet that balances simplicity with powerful features, giving them full control over their Bitcoin while also offering a smooth entry into Lightning payments.`;
    } else if (filterText === 'Breez') {
        customText = `Breez Wallet is a non-custodial Lightning Network wallet and payments platform that makes using Bitcoin for everyday spending seamless and instant. It automatically opens and manages Lightning channels for you, removing technical barriers while still keeping you in full control of your funds. Breez features a built-in Point of Sale (POS) mode for merchants, podcast streaming with sats, Lightning address support, and integrations with services like LNURL, Bolt12 offers, and Bitcoin payments over NFC. It also includes a self-custodial Lightning node running on your device with on-demand channel liquidity through the Breez service, blending ease of use with sovereignty. A Bitcoiner should choose Breez if they want a smooth, user-friendly way to actually spend and receive Bitcoin over Lightning—perfect for daily payments, content creators, and anyone looking to experience Bitcoin as peer-to-peer digital cash.`;
    } else if (filterText === 'Cake') {
        customText = `Cake Wallet is a non-custodial Bitcoin wallet that combines simplicity with strong self-custody and privacy features, including support for Silent Payments, a cutting-edge address system that allows users to receive Bitcoin privately without revealing a static address. It supports SegWit (bech32) addresses, custom fee control, and gives users full access to their private keys and backup seed phrase. The wallet also includes built-in exchange integrations for swapping Bitcoin with other assets while maintaining custody, along with Tor support, biometric security, and encrypted backups for added protection. Fully open-source and available on both iOS and Android, Cake Wallet is a great choice for Bitcoiners who want a user-friendly mobile wallet that blends privacy innovation with full control over their funds.`;
    } else if (filterText === 'Cashu.me') {
        customText = `Cashu.me is a lightweight, privacy-focused Bitcoin wallet that implements the Cashu protocol, allowing users to send and receive ecash tokens backed by Bitcoin. Built on top of the Lightning Network, it offers near-instant payments with strong privacy—transactions are blinded, meaning the mint or server that issues tokens cannot link senders and receivers. Unlike typical Lightning wallets, Cashu doesn't require channels or liquidity management, making it fast and easy to use even for beginners. It's non-custodial by design, allowing users to back up and restore their ecash tokens, and can connect to different mints for redundancy or experimentation. A Bitcoiner might choose Cashu.me to enjoy fast, anonymous Bitcoin payments with minimal setup, ideal for small payments, tipping, or learning how Bitcoin-backed ecash systems can enhance privacy and scalability in everyday use.`;
    } else if (filterText === 'Electrum') {
        customText = `Electrum is one of the oldest and most trusted Bitcoin wallets, known for its speed, flexibility, and strong focus on security and self-custody. It connects directly to the Bitcoin network using lightweight servers, letting you verify your own transactions without downloading the full blockchain. Electrum supports SegWit, multisig wallets, and hardware wallet integration (including Coldcard, Trezor, and Ledger), as well as PSBTs for secure offline signing. Advanced users can take advantage of coin control, custom fee settings, watch-only wallets, and Lightning Network support for faster payments. Because it's open-source and battle-tested, Electrum is ideal for Bitcoiners who value reliability, control, and privacy—whether managing long-term savings, multisig vaults, or frequent transactions.`;
    } else if (filterText === 'Envoy') {
        customText = `Envoy is the companion mobile app for the Foundation Passport signing device, designed to make secure Bitcoin self-custody simple and approachable. It allows users to easily set up, manage, and update their Passport hardware wallet, while also functioning as a standalone watch-only wallet for tracking balances and transactions. Envoy features secure Bluetooth communication with Passport, supports PSBTs for air-gapped transaction signing, and integrates with Bitcoin Core, Sparrow, and other wallet software for advanced use. It's fully open-source, privacy-focused (with Tor support and no account sign-ups), and provides automatic firmware updates for Passport through a streamlined interface. A Bitcoiner should choose Envoy for its clean, beginner-friendly experience that bridges high-end security with ease of use—perfect for managing Bitcoin cold storage with confidence and minimal friction.`;
    } else if (filterText === 'Fedi') {
        customText = `Fedi Wallet is a community-focused Bitcoin wallet built on the Fedimint protocol, which allows groups of people to share custody of Bitcoin through federated Chaumian ecash mints. This design gives users strong privacy—transactions are blinded, meaning even the federation cannot see who is sending or receiving—and improved resilience, since funds are collectively managed rather than held by a single custodian. Fedi makes it simple for communities, families, or organizations to create their own local "mini-banks," where trusted guardians manage the mint while users still hold redeemable Bitcoin-backed ecash tokens. It also integrates the Lightning Network for instant payments and supports recovery tools and encrypted backups to protect users in case a device is lost. Bitcoiners should choose Fedi if they want to use Bitcoin in a private, community-driven way that balances convenience, privacy, and self-sovereignty without relying on traditional centralized services.`;
    } else if (filterText === 'Ginger') {
        customText = `Ginger Wallet is a desktop-only, open-source Bitcoin wallet that places privacy and self-custody front and centre: every user controls their own keys, all network traffic is automatically routed through Tor, and it supports built-in, trustless CoinJoin via the WabiSabi protocol to obfuscate transaction history. Unique features include a dedicated coin-join coordinator with pre-configured settings (so you don't have to mess with setup), hardware wallet compatibility through HWI, and a pure Bitcoin-only focus (no altcoins). A bitcoiner should choose Ginger Wallet if they prioritise maximal privacy—especially in desktop usage—for activities like mixing, managing UTXOs and avoiding address reuse. Key helpful info: because of its coinjoin features and resource requirements, it's not available for mobile (iOS/Android) and is meant to run on a desktop PC.`;
    } else if (filterText === 'JAM') {
        customText = `JAM Wallet is a non-custodial, open-source Bitcoin wallet that provides a modern, user-friendly interface for JoinMarket, a decentralized CoinJoin protocol that enhances Bitcoin transaction privacy. It allows users to either pay a small fee to mix their coins or earn fees by providing liquidity to others, all while maintaining full control over their keys. JAM connects through Tor by default, integrates with Bitcoin Core for full node verification, and automates the traditionally complex JoinMarket setup into a simple desktop experience. A Bitcoiner should choose JAM if they want to improve their privacy using peer-to-peer CoinJoin while staying completely sovereign and avoiding centralized coordinators.`;
    } else if (filterText === 'Joltz') {
        customText = `Joltz Wallet is the first non-custodial wallet built to support both Bitcoin and the Taproot Assets protocol, enabling asset issuance directly on Bitcoin and Lightning. It allows you to hold, send, receive, and swap native Bitcoin and Taproot-Assets such as stablecoins within a single wallet interface. Unique features include integration of the Taproot Assets protocol (bringing multi-asset support to Bitcoin's layer and Lightning ecosystem) and an accompanying SDK that enables developers and businesses to embed Bitcoin & asset functionality into apps. A Bitcoiner should consider using Joltz because it extends Bitcoin's utility beyond just "digital gold" to include fast, low-fee asset payments and tokenised value—all while maintaining self-custody of keys. Helpful to know: it's relatively new, so you'll want to verify the wallet version, review the Taproot Assets support and liquidity, and continue to rely on sound security practices (private key backups, self-custody) as you explore its multi-asset capabilities.`;
    } else if (filterText === 'Liana') {
        customText = `Liana Wallet is a unique, non-custodial Bitcoin wallet designed around time-locked recovery and inheritance, giving users a secure way to regain access to funds if a key is lost or a signer becomes unavailable. It uses Bitcoin's native timelock features to let users set up wallets with multiple spending conditions—for example, funds can be spent immediately by one key, or by a backup key after a set delay. Liana supports hardware wallet integration with devices like Coldcard and Trezor, PSBT workflows, and runs with Bitcoin Core or Electrum servers for full verification. Developed by Wizardsardine (the team behind Revault), it's open-source and tailored for individuals, families, and organizations focused on long-term, secure Bitcoin storage. A Bitcoiner should choose Liana if they want advanced self-custody with built-in recovery and inheritance planning, ensuring their Bitcoin remains accessible without ever relying on a third party.`;
    } else if (filterText === 'Lily') {
        customText = `Lily Wallet is a user-friendly, open-source Bitcoin wallet built for multisig self-custody, making it easy to create and manage secure vaults using multiple hardware wallets. It integrates seamlessly with devices like Coldcard, Trezor, Ledger, and Passport, allowing users to distribute their keys for stronger protection against loss or theft. Lily supports Partially Signed Bitcoin Transactions (PSBTs), watch-only wallets, and custom spending policies, so users can design setups that balance convenience and security—ideal for personal savings or family vaults. It connects directly to Bitcoin Core for full-node verification, ensuring all transactions are independently verified. A Bitcoiner should choose Lily if they want a clean, beginner-friendly way to use multisig without complexity, giving them institutional-grade security while maintaining full control over their Bitcoin.`;
    } else if (filterText === 'Mercury') {
        customText = `Mercury Wallet is a privacy-focused, non-custodial Bitcoin wallet that uses Statechains to let users transfer ownership of Bitcoin without on-chain transactions, saving fees and improving privacy. Built by CommerceBlock, it allows users to send and receive "statecoins," which represent Bitcoin locked in a 2-of-2 multisig that can be securely transferred off-chain between users. Mercury integrates CoinSwap functionality to further break on-chain links, Tor support for network privacy, and timelocks to ensure funds remain recoverable if a transfer fails. Because ownership changes happen off-chain, it offers near-instant, cheap, and private transfers compared to regular Bitcoin transactions. A Bitcoiner should choose Mercury if they want cutting-edge privacy and scalability tools while keeping full self-custody—ideal for those who value sovereignty and wish to explore advanced off-chain Bitcoin technologies beyond the Lightning Network.`;
    } else if (filterText === 'Minibits') {
        customText = `Minibits Wallet is a non-custodial ecash wallet built on the Cashu protocol, allowing users to send and receive Bitcoin-backed ecash tokens instantly and privately. Designed for simplicity and speed, Minibits lets users connect to different Cashu mints, swap tokens between them, and back up or restore their ecash balances—all without exposing personal information or on-chain activity. Transactions are blinded, meaning the mint cannot trace who sent or received funds, providing strong privacy similar to digital cash. The wallet also integrates with the Lightning Network, enabling fast Bitcoin deposits and withdrawals to and from ecash form. A Bitcoiner should choose Minibits if they want a lightweight, highly private wallet for small payments, tipping, or experimentation with Bitcoin ecash, combining privacy and usability in a fast, mobile-first design.`;
    } else if (filterText === 'Mutiny') {
        customText = `Mutiny Wallet is a self-custodial, web-based Bitcoin and Lightning wallet designed to give users full sovereignty and privacy without requiring app downloads or custodial services. It runs entirely in the browser using WebLN and Lightning node functionality built directly into the wallet, allowing instant Lightning payments and on-chain transactions from the same interface. Mutiny features Tor integration for enhanced privacy, Nostr connectivity for social and payment interactions, and Lightning Address support for easy receiving. It's open-source, non-custodial, and can run even on mobile browsers, making Bitcoin access available anywhere with an internet connection. A Bitcoiner should choose Mutiny if they want a cutting-edge, privacy-first wallet that merges Bitcoin, Lightning, and Nostr into one seamless, browser-based experience—ideal for those who value freedom from app stores, custodians, and intermediaries.`;
    } else if (filterText === 'Muun') {
        customText = `Muun Wallet is a non-custodial Bitcoin and Lightning wallet designed for simplicity, safety, and seamless payment experience across both layers. It automatically handles on-chain and Lightning payments from a single balance, so users don't need to manage channels or separate wallets. Muun uses a 2-of-2 multisig setup with keys split between your device and encrypted backup, giving strong protection against loss while keeping you in control of your funds. It supports Submarine Swaps to bridge on-chain and Lightning payments, and emergency recovery through a standard Bitcoin seed and recovery code—no third-party accounts required. Muun is open-source, beginner-friendly, and available on both iOS and Android, making it an ideal choice for Bitcoiners who want an easy, secure, and modern wallet that "just works" for both on-chain and Lightning transactions.`;
    } else if (filterText === 'Nunchuk') {
        customText = `Nunchuk Wallet is a powerful, multisig-focused Bitcoin wallet that combines professional-grade security with an intuitive, modern interface. It lets users easily create and manage multisignature vaults using multiple hardware wallets—such as Coldcard, Trezor, Ledger, Passport, or Keystone—and supports PSBT workflows, Taproot multisig, and hardware-assisted signing via QR or NFC. Nunchuk offers both self-custody and collaborative custody options, including shared setups with trusted co-signers or recovery services, making it ideal for families, businesses, and inheritance planning. Advanced features include policy-based spending controls, encrypted communication between signers, and integration with mobile and desktop apps for flexible use. A Bitcoiner should choose Nunchuk if they want a secure, user-friendly way to manage multisig setups with strong privacy, recovery options, and institutional-grade coordination—all while retaining full control of their Bitcoin.`;
    } else if (filterText === 'Nutstash') {
        customText = `Nutstash is a browser-based, non-custodial ecash wallet built on the Cashu protocol, enabling users to hold, send and receive Bitcoin-backed tokens (called "nuts") quickly and privately. It supports multiple Cashu mints (so you can choose where your tokens originate), offers peer-to-peer transfer options—such as offline/air-gapped QR codes—and even integrates with the Nostr protocol for sending and receiving tokens via private messages. For Bitcoiners seeking lightweight, instant digital cash functionality with strong privacy–and free of traditional on-chain wait times or fees–Nutstash is compelling. That said, because tokens are bearer assets stored locally (in browser storage) and the system relies on third-party mints, users should treat it as experimental: backup tokens, trust your mint wisely, and only use amounts you're comfortable risking.`;
    } else if (filterText === 'Phoenix') {
        customText = `Phoenix Wallet, developed by ACINQ, is a non-custodial Lightning wallet that makes using Bitcoin over Lightning as simple as sending a text message. It runs a Lightning node directly on your phone, automatically handling channel creation, liquidity, and backups so users don't need to understand the technical details of Lightning. Phoenix supports on-chain and Lightning payments from a single balance, uses Splicing to merge or adjust channels without downtime, and offers Lightning Address and BOLT12 offer support for seamless payments. All transactions are encrypted and routed through Tor, preserving privacy while keeping users in full control of their keys. A Bitcoiner should choose Phoenix if they want instant, low-fee payments and the power of running their own Lightning node in a wallet that feels as easy to use as a custodial app but retains complete self-sovereignty.`;
    } else if (filterText === 'Proton') {
        customText = `Proton Wallet is a self-custodial Bitcoin wallet developed by Proton AG in Switzerland which puts full control of your BTC in your hands while offering security and ease-of-use. Unique features include "Bitcoin via Email", which lets you send BTC using an email address instead of a long cryptographic address, and end-to-end encryption so that only you hold the keys to your funds. The wallet supports multiple on-chain BTC accounts, import of external seeds, and integrates with fiat on-ramps allowing you to buy Bitcoin from dozens of countries directly in the app. It also benefits from Proton's strong privacy heritage—Swiss legal protection, open-source code, and a minimal-trust architecture. A bitcoiner should choose Proton Wallet if they want a straightforward, secure entry-point to self-custody Bitcoin with built-in usability for newcomers, while still retaining full control of their funds. Helpful to know: it currently focuses on on-chain BTC (not Lightning by default) and advanced coin-control features are limited compared to wallets geared at power users.`;
    } else if (filterText === 'Spark') {
        customText = `Spark Wallet is a non-custodial web-based interface for Core Lightning (c-lightning) that lets users manage their own Lightning node through a clean, browser-accessible dashboard. Developed by Nadav Ivgi (shesek), it connects directly to a running Core Lightning node and offers full control over Lightning channels, payments, and invoices, while keeping all keys and funds on the node itself. Spark can be accessed remotely or locally, supports Tor hidden services, and includes Spark Server for secure authentication and connection management. It also integrates with Spark Connect and LNURL for flexible payment flows, allowing you to interact with your Lightning node from any device without exposing private data. A Bitcoiner should choose Spark Wallet if they want a convenient, privacy-preserving way to control their own Lightning node through a modern web interface—ideal for advanced users who value sovereignty, flexibility, and a self-hosted approach to Lightning payments.`;
    } else if (filterText === 'Sparrow') {
        customText = `Sparrow Wallet is a powerful, desktop-based Bitcoin wallet for advanced users who value privacy, transparency, and full control over their funds. It supports single-sig and multisig setups, integrates seamlessly with popular hardware wallets like Coldcard, Trezor, Ledger, Passport, and SeedSigner, and uses PSBT (Partially Signed Bitcoin Transactions) for secure offline signing. Sparrow offers coin control, labeling, address clustering analysis, and Tor integration for enhanced privacy, while also allowing users to connect to their own Bitcoin Core, Electrum, or public servers for full verification and flexibility. Open-source and feature-rich, Sparrow is ideal for Bitcoiners who want a professional-grade wallet with deep transaction insight, strong privacy options, and seamless integration with their preferred hardware and node setup.`;
    } else if (filterText === 'Specter Desktop') {
        customText = `Specter Desktop is a desktop-based, non-custodial Bitcoin wallet designed to make multisig and hardware wallet management simple, transparent, and secure. It integrates directly with Bitcoin Core, ensuring full node verification for every transaction, and supports a wide range of hardware wallets—including Coldcard, Trezor, Ledger, BitBox, Passport, and SeedSigner—as well as air-gapped devices via QR codes or USB. Specter allows users to create single-sig or multisig setups, manage watch-only wallets, and use Partially Signed Bitcoin Transactions (PSBTs) for secure offline signing. Its open-source design and clear transaction visualization make it ideal for both individuals and organizations who want to manage cold storage, multisig vaults, or long-term holdings with maximum sovereignty. A Bitcoiner should choose Specter Desktop if they want a user-friendly yet professional interface for combining Bitcoin Core's security with hardware-assisted, fully verifiable self-custody.`;
    } else if (filterText === 'Speed') {
        customText = `Speed Wallet is a mobile-and-web wallet app that supports both on-chain and Lightning-network transactions of Bitcoin—alongside stablecoins like USDT-L and USDC—making it a "one-stop" payment solution for digital assets. It offers features such as a unique Lightning address for easy receipt of payments, built-in gift-card shopping via integrations such as Bitrefill, tiered rewards ("Speed Rewards") redeemable in sats when you make transactions, and cross-platform availability (Android, iOS, browser extension). The app emphasizes ease of use and accessibility, so a Bitcoiner might choose it if they want fast, low-fee payments, multi-asset support, and a consumer-friendly UX rather than a bare-bones self-custody wallet. However, it is custodial in nature (you don't directly hold the private keys) and thus offers less sovereignty than fully self-custodial wallets—which is important to keep in mind if you prioritise full control over your Bitcoin.`;
    } else if (filterText === 'Theya') {
        customText = `Theya Wallet is a modern, self-custody Bitcoin wallet designed for both individuals and businesses that want strong security without sacrificing usability. It offers multi-signature vaults (for example 2-of-3 setups) where you distribute keys between your hardware wallet, a trusted co-signer, and Theya's service—giving you protection from single points of failure. It integrates with popular hardware wallets such as Ledger, Trezor, Coldcard and Foundation Passport. Theya also supports streamlined features like direct-to-wallet Bitcoin purchases in the U.S., so you can buy BTC and have it land straight into your self-custody vault rather than a custodial exchange first. For a Bitcoiner, Theya makes self-custody accessible: you still hold the keys and control the funds, but gain the convenience of a polished app, role-based access (for families or teams), and modern security practices (passkeys, hardware support, backup key rotation). On the "other helpful information" side: Theya currently focuses on vault/multisig setups rather than just simple single-key wallets; some features require a subscription or are aimed at business use; and as with any self-custody solution you should still maintain your own backups, store hardware devices securely, and understand the vault policy you choose.`;
    } else if (filterText === 'Wallet of Satoshi') {
        customText = `Wallet of Satoshi is a simple, beginner-friendly Bitcoin wallet designed to make using the Lightning Network feel as easy as a regular payment app. Users can download it and start sending or receiving Lightning payments instantly, with the app handling invoices, channels, and liquidity automatically in the background. In addition to its long-standing custodial mode, Wallet of Satoshi now also offers a self-custodial option for users who want more control over their bitcoin, while still keeping the experience straightforward. For this self-custodial mode, the wallet includes encrypted backups to help users safely recover their funds if they lose their device. This combination of ease of use, fast Lightning payments, and flexible custody options makes Wallet of Satoshi appealing both to newcomers and to users who want a simple path toward self-custody.`;
    } else if (filterText === 'Wasabi') {
        customText = `Wasabi Wallet is a privacy-focused, open-source Bitcoin wallet that uses the WabiSabi protocol—an advanced form of CoinJoin that enables smaller, more efficient, and more private collaborative transactions by allowing unequal input and output amounts. Fully non-custodial and connected through Tor by default, it ensures users retain control of their keys while hiding both transaction and network data. Wasabi supports SegWit (bech32) addresses, detailed coin control, labeling, and integrates with hardware wallets for secure signing. It also includes PayJoin (P2EP) support and recently added Silent Payments, allowing users to receive Bitcoin privately without exposing static addresses. A Bitcoiner should choose Wasabi if they value cutting-edge privacy tools built directly into a polished, easy-to-use desktop wallet—ideal for anyone who wants strong on-chain privacy while maintaining full self-custody and transparency through open-source code.`;
    } else if (filterText === 'Yeti') {
        customText = `Yeti Cold is a Bitcoin wallet and setup guide designed to make creating and managing air-gapped, multisig cold storage simple and secure for everyday users. It walks you through a step-by-step process to build a 3-of-7 multisignature vault using Bitcoin Core and offline computers—meaning your private keys never touch the internet. Yeti Cold automates the complex setup traditionally required for advanced cold storage, helping users generate keys, create backups, and construct transactions entirely offline for maximum security. It's fully open-source, uses only Bitcoin Core (no third-party servers), and ensures complete self-custody with verifiable software. A Bitcoiner should choose Yeti Cold if they want a highly secure, long-term storage solution that removes trust in third parties, protects against both theft and loss, and provides a structured, transparent way to hold significant Bitcoin safely for the long run.`;
    } else if (filterText === 'Zebedee') {
        customText = `Zebedee Wallet is a Lightning-enabled Bitcoin wallet built for gamers and digital creators, allowing instant Bitcoin payments within games, apps, and online communities. It integrates directly with popular titles and platforms—such as CS:GO, Minecraft, and Discord—letting players earn, spend, and tip sats (small Bitcoin units) seamlessly as part of gameplay or social interactions. Zebedee supports Lightning Addresses, LNURL payments, and ZBD gamertags for easy peer-to-peer transfers without complex invoices. It also offers developer APIs and SDKs, enabling integration of Bitcoin micropayments into third-party games and applications. A Bitcoiner might choose Zebedee for its fun, social approach to Bitcoin adoption—making it easy to experience the Lightning Network in real-world use cases like gaming and online communities—though it's custodial, meaning users trade some sovereignty for convenience and speed.`;
    } else if (filterText === 'Zeus') {
        customText = `Zeus Wallet is a non-custodial Bitcoin and Lightning wallet that connects directly to your own Lightning node, giving you full control over your funds while offering a sleek, mobile interface. It supports connections to LND, Core Lightning, and Eclair nodes, as well as LNDHub for custodial or hybrid setups, and can also operate in self-contained mode using its integrated Lightning node via LND or Zeus Node Manager. Zeus includes advanced features like Lightning Address support, Nostr Wallet Connect, Tor and clearnet connections, and on-chain + Lightning balance management from a single app. It's ideal for node runners and privacy-conscious users who want to manage and spend their sats directly from their own infrastructure. A Bitcoiner should choose Zeus if they want a powerful, open-source wallet that combines professional-grade Lightning management with full sovereignty, flexibility, and mobile convenience.`;
    } else if (filterText === 'eNuts') {
        customText = `eNuts is a mobile Bitcoin wallet built around the Cashu e-cash protocol, allowing users to hold, send and receive Bitcoin-backed tokens ("nuts") with strong privacy and Lightning Network support. It supports connecting to multiple Cashu mints, enables instant transfers using Lightning, and integrates with Nostr for peer-to-peer token sharing and messaging. A Bitcoiner should consider eNuts if they want a lightweight, mobile-first wallet experience that emphasises privacy, low fees and quick transfers beyond traditional on-chain methods. That said, the project is currently unmaintained and marked for archive, so users should proceed cautiously, treat it as experimental, and ensure they understand risks around mint-reliance and software support.`;
    } else if (filterText === 'Bull Bitcoin Wallet') {
        customText = `The Bull Bitcoin Wallet is a self-custody, privacy-first Bitcoin wallet that stands out by supporting multiple ways to use bitcoin while keeping users in full control of their funds. Developed by Bull Bitcoin, it supports on-chain Bitcoin, the Lightning Network for fast and low-fee payments, and the Liquid Network for confidential transactions and easier transfers between services. The wallet also works with popular hardware wallets, allowing users to keep their private keys offline while still using the app as a convenient interface. In addition, it supports Payjoin, a privacy-enhancing payment method that helps break common transaction tracking patterns. Combined with its clean design and Bitcoin-only focus, these features make the Bull Bitcoin Wallet a strong choice for users who want flexibility, better privacy, and true self-sovereignty without unnecessary complexity.`;
    } else if (filterText === 'Bitcoin Core') {
        customText = `Bitcoin Core is the original and reference implementation of the Bitcoin software, maintained by an open-source community of developers worldwide. It includes the full Bitcoin node, wallet, and command-line tools needed to verify the entire blockchain, broadcast transactions, and enforce the consensus rules that keep the network decentralized. By running Bitcoin Core, users fully validate their own transactions without trusting any third party, helping secure the network while gaining maximum privacy and sovereignty. It supports advanced features such as hardware wallet integration, multi-signature setups, and custom fee control. Bitcoiners choose Bitcoin Core for its unmatched security, transparency, and alignment with Bitcoin's founding principles of decentralization and individual verification — "don't trust, verify."`;
    } else if (filterText === 'Bitcoin Knots') {
        customText = `Bitcoin Knots is a Bitcoin full node and wallet software that is built from the same codebase as Bitcoin Core but maintained separately by Luke Dashjr, with a focus on offering more configurability and transparency. It differs from Bitcoin Core mainly by including optional features, stricter default policies, and extra tools that are not part of the main Core release. For example, Knots may enable certain advanced privacy settings, provide more detailed network and fee controls, or expose internal data useful for developers and node operators. While it follows the same consensus rules as Bitcoin Core, it gives users more choices over how their node behaves. Bitcoiners may choose Bitcoin Knots if they want a node that stays compatible with the Bitcoin network while offering a greater degree of customization and insight into its operations.`;
    } else if (filterText === 'Ashigaru Dojo') {
        customText = `Ashigaru Dojo is a self-hosted backend server for Bitcoin applications—designed to be operated by an individual bitcoin-user rather than relying on a shared third-party server. It works as the server component of the Ashigaru Wallet ecosystem (and compatible wallets) by connecting your wallet to your own full-node infrastructure (via Bitcoin Core, indexers and an Electrum/Fulcrum server) and exposing an API so the wallet operates privately and self-sovereignly. Because you run it yourself, Dojo enables you to avoid trusting someone else with your wallet data or transaction graph, preserves privacy by integrating with Tor hidden services, and aligns with the self-custody ethos of the Bitcoin community. Bitcoiners would want to use Ashigaru Dojo because it gives them full control over the backend infrastructure of their wallet, enhances privacy and network sovereignty, and supports advanced wallet features (like reusable payment codes, custom coin-control, and enhanced anonymity tools) without relying on centralized infrastructure.`;
    } else if (filterText === 'Bitcoin Node Box') {
        customText = `The Bitcoin Node Box from Ministry of Nodes is a plug-and-play device that lets users easily run their own full Bitcoin node at home without technical setup. It comes pre-installed with Bitcoin Core and other key software—such as Electrum Server, Mempool.space, and optional privacy tools—so users can verify their own transactions, broadcast them directly to the network, and avoid relying on third-party servers or explorers. Designed with self-sovereignty and education in mind, the Node Box gives bitcoiners a simple way to participate directly in Bitcoin's peer-to-peer network, improve their privacy, and help strengthen decentralization. Bitcoiners would want to use it because it offers a ready-to-use, transparent, and locally managed solution for verifying the Bitcoin blockchain and interacting with their wallets in a fully trust-minimized way.`;
    } else if (filterText === 'Citadel') {
        customText = `Citadel is a self-hosted Bitcoin and Lightning node platform designed to make running your own Bitcoin infrastructure simple and user-friendly. It provides an easy web interface to manage Bitcoin Core, Lightning Network Daemon (LND or Core Lightning), and popular apps like Mempool.space, BTCPay Server, and ThunderHub—all within a privacy-focused environment that runs entirely on your own hardware. Citadel helps bitcoiners take full control of their funds and data by eliminating dependence on centralized services while still offering the convenience of modern wallet and payment tools. Bitcoiners would want to use Citadel because it combines the security and sovereignty of self-hosting with a clean, beginner-friendly setup—letting them verify their own transactions, route Lightning payments, and explore Bitcoin privately and independently.`;
    } else if (filterText === 'Electrum Rust Server (Electrs)') {
        customText = `Electrum Rust Server (Electrs) is a lightweight, efficient backend server written in Rust that connects Bitcoin wallets—such as Electrum, Sparrow, or Zeus—to a user's own Bitcoin Core node. Its role is to index the blockchain and provide fast, private access to wallet data, such as balances and transaction history, without relying on public Electrum servers that can leak sensitive information. Electrs is optimized for low resource usage and high performance, making it ideal for running on personal hardware like a Raspberry Pi or dedicated node device. Bitcoiners use Electrs to preserve their privacy, verify all wallet data against their own full node, and maintain complete sovereignty over their Bitcoin activity, ensuring that no third party ever sees their addresses or transaction patterns.`;
    } else if (filterText === 'Fulcrum') {
        customText = `Fulcrum is a high-performance Bitcoin indexing server that connects wallets like Electrum, Sparrow, and Zeus to a user's own Bitcoin Core node, similar to Electrs but optimized for speed and scalability. Written in C++ by Calin Culianu (the developer of ElectrumX), Fulcrum is designed to handle large volumes of queries quickly and efficiently, making it ideal for advanced users, developers, or node operators who want responsive wallet performance and low latency. It supports features like efficient address lookups, compact filters, and full Electrum protocol compatibility while maintaining complete privacy by keeping all wallet queries local. Bitcoiners would want to use Fulcrum because it combines the privacy and self-sovereignty of running their own backend with faster indexing and smoother operation for multiple wallets or heavy network use.`;
    } else if (filterText === 'Fully Noded') {
        customText = `Fully Noded is an open-source iOS app that connects directly to your own Bitcoin Core node, allowing you to use Bitcoin in a fully self-sovereign way without relying on any third-party servers. It serves as a mobile interface for your node, enabling you to create, sign, and broadcast transactions, manage wallets using descriptors or PSBTs (Partially Signed Bitcoin Transactions), and monitor your Bitcoin Core data remotely. The app supports advanced features like multisig setups, hardware wallet integration, and privacy-preserving connections over Tor. Bitcoiners would want to use Fully Noded because it gives them the freedom to control and spend their bitcoin directly from their own node infrastructure, ensuring maximum privacy, trust minimization, and independence while maintaining the convenience of a clean, mobile interface.`;
    } else if (filterText === 'MyNode') {
        customText = `MyNode is a plug-and-play platform that lets users easily run their own Bitcoin and Lightning node, combining all the essential tools for self-sovereignty into one simple interface. It includes Bitcoin Core, LND, Electrum Server, Mempool.space, BTCPay Server, Ride the Lightning, and many other apps—all accessible through a web dashboard that runs on personal hardware like a Raspberry Pi or dedicated node box. MyNode's role is to make it easy for bitcoiners to verify their own transactions, use Lightning payments, and host Bitcoin services without trusting third parties. Bitcoiners would want to use MyNode because it provides a convenient, all-in-one way to take full control of their funds, improve their privacy, and directly participate in the Bitcoin network while maintaining complete transparency and security over their own data.`;
    } else if (filterText === 'Parmanode') {
        customText = `Parmanode is a free, open-source program that helps users easily install and manage their own Bitcoin and Lightning node software on a personal computer or dedicated device, without needing advanced technical skills. Created by the educator known as Parman, it automates the setup of Bitcoin Core, Electrum Server, Mempool.space, Whirlpool, JoinMarket, and other Bitcoin privacy tools, giving users full control over their own infrastructure. Its role is to simplify the process of running sovereign Bitcoin services locally—no third-party servers, no cloud dependencies, and no hidden code. Bitcoiners would want to use Parmanode because it makes it straightforward to achieve complete self-custody, privacy, and network participation, all while following Bitcoin's "don't trust, verify" philosophy in a transparent and user-friendly way.`;
    } else if (filterText === 'Raspiblitz') {
        customText = `RaspiBlitz is a do-it-yourself Bitcoin and Lightning node built to run on affordable hardware like a Raspberry Pi, allowing users to operate their own full node and payment channels directly from home. It provides a complete, open-source software stack—including Bitcoin Core, LND, Electrum Server, Mempool.space, and various privacy tools—managed through a simple touchscreen interface or web dashboard. Its role is to make self-hosting Bitcoin infrastructure accessible and transparent while teaching users how the system works. Bitcoiners would want to use RaspiBlitz because it offers hands-on control over their funds, enhances privacy by eliminating third-party servers, and helps strengthen the Bitcoin and Lightning networks through true decentralization and personal node operation.`;
    } else if (filterText === 'Start9') {
        customText = `Start9 is a self-hosted server platform that lets users run Bitcoin and Lightning nodes—along with other privacy and communication apps—on their own hardware, without relying on any centralized service providers. Built around the StartOS operating system, it offers a simple graphical interface for installing and managing services like Bitcoin Core, LND, Electrs, Mempool.space, and BTCPay Server, as well as encrypted backups and Tor-based connections for full privacy. Its role is to make digital sovereignty practical by giving individuals the tools to control their money, data, and communications all in one place. Bitcoiners would want to use Start9 because it provides a plug-and-play path to running their own node, transacting privately, and hosting essential Bitcoin infrastructure at home, all while maintaining total ownership and security over their digital life.`;
    } else if (filterText === 'Ubuntu Node Box') {
        customText = `The Ubuntu Node Box from Ministry of Nodes is a pre-configured, plug-and-play computer designed to run a full Bitcoin node using the Ubuntu operating system. It comes set up with Bitcoin Core, Electrum Server, Mempool.space, and other essential Bitcoin tools, giving users everything they need to verify their own transactions, broadcast them directly to the network, and interact privately with their wallets. Its role is to make running a self-sovereign Bitcoin node accessible and reliable, without the user needing to handle technical installations or configurations. Bitcoiners would want to use the Ubuntu Node Box because it offers a straightforward, professionally prepared, and open-source environment for full network participation—allowing them to secure their privacy, support Bitcoin's decentralization, and practice true "don't trust, verify" ownership of their bitcoin.`;
    } else if (filterText === 'Umbrel') {
        customText = `Umbrel is a user-friendly, self-hosted platform that allows anyone to run their own Bitcoin and Lightning node, along with a wide range of personal apps, on hardware like a Raspberry Pi or dedicated home server. It features an intuitive app store where users can install Bitcoin Core, LND, Mempool.space, BTCPay Server, and other privacy or productivity tools with a single click. Umbrel's role is to make self-sovereignty accessible by combining the power of a full Bitcoin node with a simple, modern interface that requires no command-line experience. Bitcoiners would want to use Umbrel because it lets them verify their own transactions, use Lightning privately, and host Bitcoin services independently—giving them full control over their money, data, and digital life in an easy, visually appealing way.`;
    } else if (filterText === 'RoninDojo') {
        customText = `RoninDojo is a full Bitcoin node platform built specifically to support Samourai Wallet and its privacy tools, giving users complete control over their own backend infrastructure. It integrates tightly with Samourai features like Whirlpool coinjoin, Payjoin, and Ricochet, allowing all transactions and mixes to be processed through the user's own node rather than third-party servers. Available as both software and pre-built plug-and-play hardware, RoninDojo includes a web dashboard for monitoring transactions, managing Tor connections, and controlling privacy tools with ease. Its role is to make advanced Bitcoin privacy and sovereignty accessible to everyday users. Bitcoiners would want to use RoninDojo because it enables them to take full ownership of their wallet data, improve transaction privacy, and strengthen Bitcoin's censorship resistance while aligning with the ethos of self-custody and "don't trust, verify."`;
    } else if (filterText === 'Avalon Nano') {
        customText = `The Avalon Nano 3S is a small home Bitcoin miner from Canaan designed for easy, hands-on mining without the bulk, noise, or setup of industrial rigs. It's a desk-friendly box roughly 20.5 × 11.5 × 5.8 cm, rated around 6 TH/s at up to 140 W, and typically runs at ~33–40 dB, so it's quiet enough for living spaces while giving off a gentle amount of heat. You plug it in, connect it (Wi-Fi or Ethernet on many bundles), point it to a mining pool, and you're watching real proof-of-work happen in minutes—great for learning how hashrate, shares, and payouts work. It's not meant to be profitable; its role is educational and experiential for newcomers, hobbyists, and teachers who want a tangible way to participate in network security, demo mining mechanics, or add a tiny bit of hashrate at home without hassle.`;
    } else if (filterText === 'Bitaxe') {
        customText = `The Bitaxe miner is an open-source, standalone Bitcoin mining device built to make ASIC mining accessible, transparent, and affordable for individuals and hobbyists. Powered by a single efficient ASIC chip (such as the BM1397 or BM1366), it connects directly to Wi-Fi and runs independently—no computer or controller needed. Its firmware and hardware are fully open-source, allowing users to study, modify, and build their own units, unlike proprietary commercial miners. While it won't generate profits compared to industrial rigs, the Bitaxe's role is educational and experimental: it lets Bitcoiners learn how mining hardware works, run a small node of hash power at home, and support decentralization in a hands-on way. Enthusiasts value it for its openness, quiet operation, and as a way to connect more personally with Bitcoin's proof-of-work process.`;
    } else if (filterText === 'NerdAxe') {
        customText = `The Nerdaxe miner is a community-built, open-source Bitcoin miner inspired by the Bitaxe project, designed to make home mining simple, transparent, and educational. It uses a single ASIC chip (like the BM1397 or BM1366) to provide real proof-of-work hash power while remaining compact, quiet, and energy-efficient. The device runs open-source firmware that connects directly to a mining pool over Wi-Fi, without needing a separate computer or controller. Its role is to give individuals a hands-on way to learn how ASIC mining works, experiment with hardware and firmware, and contribute to Bitcoin's decentralization in a small but meaningful way. Bitcoiners appreciate the Nerdaxe for its affordability, hackable design, and the spirit of open participation it brings back to mining.`;
    } else if (filterText === 'Braiins Mini Miner') {
        customText = `The Braiins Mini Miner is a compact, plug-and-play Bitcoin miner created by Braiins, the team behind Slush Pool and the Braiins OS open-source firmware. Designed for education and experimentation rather than profit, it uses a small, efficient ASIC chip and connects via USB-C or Wi-Fi to begin mining within minutes, consuming minimal power and producing little noise or heat. Its open-source software lets users explore how mining firmware, pools, and hashrate management work in practice. The Mini Miner's role is to make Bitcoin mining hands-on and accessible to anyone — ideal for newcomers, hobbyists, and developers who want to learn about proof-of-work, test Braiins OS features, or simply run a small piece of mining infrastructure at home in support of Bitcoin's decentralized network.`;
    } else if (filterText === 'Braiins Deck') {
        customText = `The Braiins Deck is a simple, self-hosted control panel that lets Bitcoin miners easily manage and monitor their mining hardware from one clean dashboard. Built by Braiins, it focuses on transparency, reliability, and user control, making it appealing to both home miners and professionals. With Braiins Deck, users can view miner performance, adjust basic settings, manage firmware, and monitor uptime and efficiency without relying on third-party cloud services. Its open-source philosophy and privacy-respecting design mean you stay in full control of your mining operation, while the clear layout and straightforward tools make it approachable even for users who don't want to dive into highly technical details.`;
    } else if (filterText === 'Futurebit') {
        customText = `The Futurebit Apollo miner is a compact, all-in-one Bitcoin mining device designed for home users who want to mine and run a Bitcoin node easily and quietly. Unlike industrial ASICs, it combines a built-in controller, full Bitcoin node software, and efficient hashboards in a sleek desktop unit that connects directly to your network—no extra hardware required. Producing modest hashrate with relatively low noise and power draw, its role is to make solo or pool mining accessible to everyday users while helping decentralize the network. Bitcoiners are drawn to the Futurebit miner for its plug-and-play simplicity, integrated full node support, and the ability to participate in proof-of-work and network validation from home without the heat, noise, or complexity of datacenter-grade rigs.`;
    } else if (filterText === 'Braiins Pool') {
        customText = `Braiins Pool, formerly known as Slush Pool, is the world's first Bitcoin mining pool and remains one of the most trusted and transparent platforms for miners today. It allows individual miners to combine their hash power and earn steadier, more predictable payouts, reducing the variance that comes with solo mining. Operated by the creators of Braiins OS, it offers advanced monitoring tools, open-source firmware integration, detailed performance analytics, and customizable payout options. Bitcoiners choose Braiins Pool for its long-standing reputation, technical transparency, and commitment to decentralization and open-source principles—values that align closely with Bitcoin's ethos.`;
    } else if (filterText === 'Ocean Pool/DATUM') {
        customText = `Ocean Pool is a Bitcoin mining pool focused on decentralization and censorship resistance. Instead of the pool operator choosing which transactions go into each block, Ocean lets individual miners build their own block templates. This means miners—not the pool—decide what gets included, helping reduce the risk of transaction censorship. Ocean also pays miners directly from the coinbase transaction, increasing transparency and reducing custodial risk. DATUM (Decentralized Alternative Templates for Universal Mining) is the open-source protocol that makes this possible. It allows miners to construct and submit their own block templates while still collaborating in a pool, combining the efficiency of pooled mining with the independence of solo mining.`;
    } else if (filterText === 'Anchorwatch/Trident') {
        customText = `AnchorWatch is a Bitcoin insurance and custody company that offers regulated, insured multi-signature storage through its flagship wallet, Trident. Trident combines the security of self-custody with institutional-grade protection by using a 3-of-5 multisig setup, where keys are distributed between the user, AnchorWatch, and trusted third parties—reducing single points of failure while maintaining user control. Unlike traditional custodians, AnchorWatch provides insured self-custody, meaning Bitcoin holders can protect their holdings against key loss or theft without giving up ownership. Bitcoiners may choose Trident for its combination of technical security, regulatory compliance, and insurance coverage—ideal for individuals, businesses, or family offices who want self-custody assurance with professional backup and peace of mind.`;
    } else if (filterText === 'Azteco') {
        customText = `Azteco is a service that makes buying and using Bitcoin as easy as purchasing a gift card or mobile top-up. Users can buy Azteco vouchers with cash or card from retail shops or online vendors, then redeem them instantly to receive Bitcoin in any wallet of their choice—without needing to register an account or go through complex exchanges. This makes Azteco especially useful for newcomers, unbanked users, or those wanting a private, low-barrier way to acquire Bitcoin. It supports small, everyday purchases, helping Bitcoin function more like digital cash. Bitcoiners may choose Azteco for its simplicity, accessibility, and privacy, as well as its ability to help onboard new users to Bitcoin in a familiar, cash-based way.`;
    } else if (filterText === 'BTCPay Server') {
        customText = `BTCPay Server is a free, open-source Bitcoin payment processor that lets anyone accept Bitcoin payments directly, without relying on third-party intermediaries like PayPal or centralized exchanges. It gives merchants full control over their funds and payment data, supporting both on-chain and Lightning Network payments, and integrates easily with e-commerce platforms like WooCommerce and Shopify. Because it's self-hosted, users can run it on their own server or node, ensuring privacy, censorship resistance, and no payment fees beyond standard Bitcoin transaction costs. Bitcoiners may choose BTCPay Server for its sovereignty-focused design, open-source ethos, and flexibility—making it ideal for businesses, nonprofits, and creators who want to accept Bitcoin in a trust-minimized, self-sovereign way.`;
    } else if (filterText === 'Bisq') {
        customText = `Bisq is a decentralized, open-source Bitcoin exchange that allows users to buy and sell Bitcoin for national currencies without relying on a central authority or KYC verification. It operates as a peer-to-peer network where trades are coordinated directly between users using multisignature escrow and security deposits to ensure honesty and fairness. Bisq runs entirely on users' computers, not through a website, and uses Tor for privacy, helping protect users' identities and financial data. Bitcoiners may choose Bisq because it offers one of the most private and censorship-resistant ways to obtain or sell Bitcoin, aligning with the principles of financial sovereignty and freedom from surveillance or centralized control.`;
    } else if (filterText === 'Bitaroo') {
        customText = `Bitaroo is an Australian Bitcoin-only exchange and brokerage platform focused on providing fast, reliable, and transparent Bitcoin trading for both beginners and advanced users. It offers features such as Lightning Network deposits and withdrawals, auto DCA (dollar-cost averaging), advanced trading tools, and secure custody options, while maintaining a Bitcoin-only philosophy that eliminates distractions from altcoins. Bitaroo is fully registered and compliant with Australian regulations, making it a trusted choice for local users seeking a secure and legally compliant way to buy, sell, and manage Bitcoin. Bitcoiners may choose Bitaroo for its focus on simplicity, security, and Bitcoin purity, as well as its support for Lightning and automation tools that make stacking sats easier.`;
    } else if (filterText === 'Bitcoin Well') {
        customText = `Bitcoin Well is a Canadian Bitcoin company that provides non-custodial Bitcoin buying, selling, and payment services, allowing users to receive Bitcoin directly to their own wallets—never held by the company. It operates a network of Bitcoin ATMs, online purchasing options, and instant self-custody services, helping people acquire Bitcoin safely without trusting a centralized exchange. Bitcoin Well also offers business and educational tools for organizations and newcomers learning about Bitcoin. Bitcoiners may choose Bitcoin Well for its focus on self-custody, transparency, and convenience, making it ideal for those who want to buy Bitcoin easily while maintaining full control of their coins from the start.`;
    } else if (filterText === 'Bitrefill') {
        customText = `Bitrefill is a global service that lets users spend Bitcoin and other cryptocurrencies on everyday goods and services by purchasing gift cards, mobile refills, and prepaid vouchers from thousands of popular brands. It supports Lightning Network payments, offering instant, low-fee transactions and even allows users to build a Bitcoin "lifestyle" without converting to fiat. Bitrefill also offers refillable balances (Thor accounts) and tools for businesses to accept Bitcoin payments. Bitcoiners may choose Bitrefill for its practical utility, speed, and privacy, making it one of the easiest ways to live on Bitcoin—whether for topping up a phone, buying groceries, or gifting friends—without ever leaving the Bitcoin ecosystem.`;
    } else if (filterText === 'Bittr') {
        customText = `Bittr is a simple, Bitcoin-only savings service based in Europe that lets users automatically buy Bitcoin directly to their own wallet through regular bank transfers, without needing to register on an exchange. Designed for ease of use and privacy, Bittr requires no KYC accounts or custodial storage—users just send euros from their bank and receive Bitcoin straight to their self-custody address. It's especially popular among those who want a hands-off, non-custodial way to DCA (dollar-cost average) into Bitcoin. Bitcoiners may choose Bittr for its simplicity, privacy, and self-custody focus, making it ideal for long-term savers who want to accumulate Bitcoin directly and securely over time.`;
    } else if (filterText === 'Bull Bitcoin') {
        customText = `Bull Bitcoin is a Bitcoin-only exchange and payment platform based in Canada that emphasizes self-custody, privacy, and sovereignty. It allows users to buy Bitcoin directly to their own wallets—never holding customer funds—and also offers services to pay bills, send bank transfers, and convert Bitcoin to fiat without giving up control of their coins. Bull Bitcoin is built with a strong cypherpunk ethos, offering advanced privacy tools, Lightning Network support, and integration with non-custodial wallets like Sparrow and Wasabi. Bitcoiners may choose Bull Bitcoin for its commitment to Bitcoin principles, no-custody model, and practical real-world utility, making it one of the most trusted platforms for Canadians who want to use Bitcoin as money while keeping full control of their keys.`;
    } else if (filterText === 'Casa') {
        customText = `Casa is a Bitcoin security company that provides collaborative multisig wallets designed to make self-custody both simple and highly secure. Its wallets use multi-signature setups (like 2-of-3 or 3-of-5) where keys are split between the user and Casa, protecting against theft, loss, or device failure while keeping the user in ultimate control of their Bitcoin. Casa offers features like key health checks, emergency recovery support, inheritance planning, and hardware wallet integration, all through an easy-to-use mobile app. Bitcoiners may choose Casa for its balance of personal control and professional backup, making it ideal for those who want to manage their own Bitcoin securely—without the complexity of running their own multisig setup from scratch.`;
    } else if (filterText === 'Coinos') {
        customText = `Coinos is a free, open-source Bitcoin and Lightning wallet and payment platform designed to make peer-to-peer Bitcoin payments fast and simple, especially for local communities, small businesses, and events. It offers non-custodial web and mobile wallets, built-in Lightning Network support, and the ability to create instant payment links, invoices, and point-of-sale pages without needing technical setup. Users can run their own instance or use Coinos's hosted service to start accepting Bitcoin immediately. Bitcoiners may choose Coinos for its ease of use, Lightning integration, and community-friendly design, making it a great option for those who want to accept or send Bitcoin payments quickly and directly—without middlemen or complicated infrastructure.`;
    } else if (filterText === 'Debifi') {
        customText = `Debifi is a Bitcoin-backed lending platform that lets users borrow fiat or stablecoins using their Bitcoin as collateral, without needing to sell their BTC holdings. Built around self-custody and transparency, Debifi allows users to keep control of their collateral through a multi-signature escrow setup, rather than sending coins to a centralized custodian. This structure reduces counterparty risk while providing liquidity when needed. Bitcoiners may choose Debifi for its non-custodial lending model, privacy-friendly design, and ability to access cash without triggering taxable sales, making it appealing for those who want to unlock value from their Bitcoin without compromising security or sovereignty.`;
    } else if (filterText === 'Fountain') {
        customText = `Fountain is a Bitcoin-powered podcast app that lets listeners and creators earn and send sats (small amounts of Bitcoin) through the Lightning Network while enjoying their favorite shows. It introduces the concept of "value-for-value" streaming, where listeners can tip or automatically stream Bitcoin to podcasters for each minute they listen, and even earn sats themselves for listening, commenting, or sharing. Fountain also offers social features, playlists, and podcast discovery tools, blending audio content with a Bitcoin-based rewards system. Bitcoiners may choose Fountain for its seamless integration of Bitcoin into everyday media, supporting creators directly while participating in a circular Bitcoin economy built around attention and engagement.`;
    } else if (filterText === 'Hodl Hodl') {
        customText = `Hodl Hodl is a peer-to-peer Bitcoin exchange and lending platform that enables users to buy, sell, and lend Bitcoin directly without giving up custody or completing KYC verification. It uses multisignature escrow contracts to secure trades and loans—ensuring that no central party ever controls user funds—and supports both on-chain and Lightning transactions. Hodl Hodl also offers a Bitcoin-backed lending service, allowing users to borrow or lend using BTC as collateral in a transparent, non-custodial way. Bitcoiners may choose Hodl Hodl for its privacy, security, and sovereignty-focused design, making it one of the best options for those who want to trade or borrow against Bitcoin safely, globally, and without intermediaries.`;
    } else if (filterText === 'IBEXPay') {
        customText = `IBEX Pay is a Bitcoin and Lightning payment platform that allows businesses to accept instant Bitcoin payments online or in person, with tools designed for easy integration and real-world use. It offers Lightning Network-enabled checkout pages, point-of-sale systems, and e-commerce plugins that settle payments quickly and with minimal fees. Merchants can choose to hold Bitcoin or auto-convert to local currency, making it practical for both Bitcoin-native and traditional businesses. IBEX Pay also provides API integrations for developers and supports enterprise-level payment infrastructure. Bitcoiners and businesses may choose IBEX Pay for its speed, low costs, and flexibility, enabling them to accept Bitcoin payments seamlessly while participating in the growing Lightning economy.`;
    } else if (filterText === 'Kraken') {
        customText = `Kraken is one of the longest-running and most trusted cryptocurrency exchanges, offering secure Bitcoin trading, staking, and custody services for individuals and institutions worldwide. Known for its strong security record, regulatory compliance, and transparency, Kraken provides access to both spot and futures markets, advanced trading tools, and Lightning Network support for fast Bitcoin deposits and withdrawals. It also offers proof-of-reserves audits, giving users verifiable confidence that their funds are fully backed. Bitcoiners may choose Kraken for its reliability, liquidity, and professional-grade platform, making it a popular choice for those who want a regulated, secure, and feature-rich exchange while still focusing on Bitcoin as their primary asset.`;
    } else if (filterText === 'Ledn') {
        customText = `Ledn is a Bitcoin and digital asset lending platform that allows users to earn interest on their Bitcoin or USDC, and access loans backed by Bitcoin—all while maintaining transparency through regular proof-of-reserves attestations. Its Bitcoin-backed loans let users borrow cash without selling their BTC, helping them unlock liquidity while avoiding taxable events. Ledn also offers savings accounts with competitive yields, B2X loans to double Bitcoin exposure, and a focus on regulatory compliance and security. Bitcoiners may choose Ledn for its trustworthy, transparent approach to Bitcoin-collateralized lending and savings, making it appealing to those who want to put their Bitcoin to work while retaining ownership and peace of mind.`;
    } else if (filterText === 'Mempool.space') {
        customText = `Mempool.space is a powerful, open-source Bitcoin block explorer that lets users view transactions, blocks, and fee activity in real time with a clean, highly visual interface. What makes it especially good is its live mempool view, which shows pending transactions by fee rate in an easy-to-understand chart, helping users estimate the right fee before sending bitcoin. It also provides detailed transaction breakdowns, block statistics, mining pool data, and advanced fee analysis tools that are useful for both beginners and power users. A major advantage for privacy-focused bitcoiners is that Mempool.space can be self-hosted on your own hardware\u2014such as a Start9 server or an Umbrel node\u2014so you can explore the blockchain without leaking your data to public servers. In addition, they offer a transaction accelerator service that allows users to submit stuck transactions for potential inclusion by participating mining pools, making it a practical tool when network congestion is high.`;
    } else if (filterText === 'Peach') {
        customText = `Peach Bitcoin is a peer-to-peer Bitcoin exchange app that enables users to buy and sell Bitcoin privately and directly with one another, without KYC or intermediaries. Designed with privacy and usability in mind, Peach uses encrypted, escrow-based trades and supports multiple payment methods, allowing users to transact safely while keeping control of their funds. The app is mobile-friendly, easy to use, and helps connect buyers and sellers globally through a decentralized matching system. Bitcoiners may choose Peach for its focus on self-custody, privacy, and censorship resistance, making it a great choice for those who want to acquire or sell Bitcoin securely without revealing personal information or relying on centralized exchanges.`;
    } else if (filterText === 'River') {
        customText = `River Financial is a Bitcoin-only financial services company and exchange that focuses on making Bitcoin investing secure, transparent, and easy to use, especially for U.S. customers. It offers instant Bitcoin buys and sells, recurring purchases (DCA), Lightning Network support, and institutional-grade custody with multi-signature cold storage. River also provides detailed portfolio tracking, tax reporting tools, and Bitcoin custody for individuals and businesses, all wrapped in a clean, intuitive interface. Importantly, River conducts regular Proof of Reserves attestations, allowing users to verify that all customer Bitcoin holdings are fully backed and held on-chain. Bitcoiners may choose River for its Bitcoin-only focus, regulatory transparency, and verifiable security, making it one of the most trusted platforms for those who want to buy, hold, or manage Bitcoin responsibly.`;
    } else if (filterText === 'Robosats') {
        customText = `RoboSats is a privacy-focused, peer-to-peer Bitcoin exchange that enables users to buy and sell Bitcoin over the Lightning Network without KYC, accounts, or identity verification. It runs entirely in the browser over Tor, using escrowed Lightning payments and unique robot avatars to coordinate trades safely and anonymously. RoboSats stands out for its minimalistic design, strong privacy guarantees, and instant settlement via Lightning, making it one of the fastest and most censorship-resistant ways to acquire Bitcoin. Bitcoiners may choose RoboSats for its focus on privacy, self-custody, and decentralization, ideal for those who value sovereignty and want a secure, no-registration alternative to centralized exchanges.`;
    } else if (filterText === 'Shakepay') {
        customText = `Shakepay is a Canadian Bitcoin and Lightning app that allows users to buy, sell, and spend Bitcoin easily while earning rewards in sats. It offers instant fiat-to-Bitcoin conversions, free deposits and withdrawals, and a Shakepay Card that gives Bitcoin cashback on everyday purchases. The app also includes fun social features like "Shakepaid," where users can earn small daily Bitcoin rewards for engagement, and it's designed with a clean, beginner-friendly interface. Fully regulated and compliant in Canada, Shakepay is ideal for those looking to start using Bitcoin effortlessly while earning and spending it in daily life. Bitcoiners may choose Shakepay for its simplicity, speed, and rewards, making it one of the most popular on-ramps into Bitcoin in Canada.`;
    } else if (filterText === 'Strike') {
        customText = `Strike is a Bitcoin and Lightning payments app and exchange that enables users to buy, sell, send, and receive Bitcoin instantly and with minimal fees using the Lightning Network. Built by Zap founder Jack Mallers, Strike lets users pay anyone globally using Bitcoin's network—even if the recipient prefers to receive local currency—making it a bridge between Bitcoin and traditional payment systems. It supports automatic Bitcoin purchases (DCA), Lightning payments, and direct bank integrations in supported regions, allowing for fast and seamless money movement. Bitcoiners may choose Strike for its speed, low costs, and Lightning-powered payments, as well as its mission to make Bitcoin usable as everyday money across borders, without the complexity of traditional exchanges.`;
    } else if (filterText === 'Unchained/Caravan') {
        customText = `Unchained is a Bitcoin financial services company that specializes in collaborative multisig vaults, helping users hold Bitcoin securely while maintaining control of their keys. In Unchained's 2-of-3 multisignature setup, the user holds two keys and Unchained holds one, allowing users to stay in control while gaining access to professional backup, recovery assistance, and optional financial services like Bitcoin-backed loans and inheritance planning. Its open-source wallet tool, Caravan, lets anyone create and manage multisig wallets independently—without needing Unchained's services—ensuring full transparency and portability. Bitcoiners may choose Unchained and Caravan for their focus on self-custody, collaborative security, and transparency, making them ideal for those who want the benefits of multisig protection without sacrificing sovereignty.`;
    } else if (filterText === 'Spike to Spike') {
        customText = `Spike to Spike is a peer-to-peer (P2P) Bitcoin exchange platform that allows users to buy and sell Bitcoin directly with one another using various payment methods, without relying on a centralized intermediary. It's designed to make P2P Bitcoin trading fast, simple, and secure, using escrow protection to hold Bitcoin safely until both parties confirm the trade. The platform focuses on privacy, accessibility, and global reach, helping users acquire or sell Bitcoin while maintaining control of their funds throughout the process. Bitcoiners may choose Spike to Spike for its non-custodial design, ease of use, and commitment to peer-to-peer principles, offering a convenient and censorship-resistant alternative to traditional exchanges.`;
    } else if (filterText === 'Alby') {
        customText = `Alby is a Bitcoin and Lightning platform that makes it easy to use Lightning payments directly in your web browser and across apps. It provides the Alby Browser Extension, which functions like a Lightning wallet and identity layer—letting users send and receive sats, log in with their Lightning identity (LNURL-auth), and tip or pay creators on sites like Nostr clients, podcasts, or blogs. Alby also offers a Lightning account and API for developers, making it simple to integrate Lightning payments into websites or applications without running their own node. Bitcoiners use Alby because it bridges the web and Lightning Network seamlessly—enabling instant micropayments, private logins, and value-for-value interactions online—all using Bitcoin's open payment standard.`;
    } else if (filterText === 'Bolt Ring') {
        customText = `Bolt Ring is a Bitcoin Lightning-powered payment ring—a physical wearable device that lets users make instant Lightning payments with a simple tap. Designed for convenience and everyday use, the ring connects to a mobile wallet (like Wallet of Satoshi or Alby) and uses NFC (Near Field Communication) technology to transmit payment data when tapped against a Lightning-enabled terminal or smartphone. Bitcoiners use the Bolt Ring because it enables contactless, custodial or self-custodial Bitcoin payments in the real world—combining the ease of Apple Pay with the freedom of Bitcoin. Its main features include instant tap-to-pay transactions, secure key storage, a stylish and durable design, and integration with major Lightning wallets, making it one of the most user-friendly ways to spend sats anywhere Lightning is accepted.`;
    } else if (filterText === 'Core Lightning') {
        customText = `Core Lightning (CLN), developed by Blockstream, is one of the main open-source implementations of the Bitcoin Lightning Network—built for speed, modularity, and reliability. It allows users and businesses to run their own Lightning nodes to send, receive, and route instant Bitcoin payments with low fees. Bitcoiners choose Core Lightning because it's lightweight, highly customizable, and scriptable, making it ideal for developers and advanced node operators who want fine-grained control over their setup. Key features include plugin support (for extending functionality), multi-part payments, dual funding, anchor outputs, and peer-to-peer gossip enhancements, all designed to make Lightning channels more efficient and private. Its modular design and robust command-line tools make it a favorite for those building or operating professional-grade Lightning infrastructure.`;
    } else if (filterText === 'LNbits') {
        customText = `LNbits is an open-source platform that sits on top of the Bitcoin Lightning Network, allowing users to create multiple wallets and custom Lightning applications from a single interface. It's designed for both individuals and developers—Bitcoiners use it to manage funds, create shared accounts, or build payment tools without needing deep technical knowledge. LNbits supports plugins and extensions that add powerful features like point-of-sale systems, tip jars, voucher creation, LNURL support, paywalls, and even token or event ticket systems. It can connect to any existing Lightning node (like LND, Core Lightning, or Voltage) or run in a custodial setup, making it extremely flexible. Bitcoiners value LNbits for its modular design, easy experimentation, and open-source ethos, which together make it one of the most versatile platforms for building and using Lightning-powered apps.`;
    } else if (filterText === 'Lightning') {
        customText = `The Lightning Network is a layer-2 payment system built on top of Bitcoin that enables instant, low-cost transactions by settling them off-chain while still being secured by the Bitcoin blockchain. Its main use case is to make Bitcoin practical for everyday payments, micropayments, and high-volume commerce without waiting for on-chain confirmations or paying high fees. Bitcoiners use the Lightning Network because it allows them to send and receive sats instantly, keep fees a fraction of a cent, and maintain self-custody while scaling Bitcoin for global use. Key features include bi-directional payment channels, multi-hop routing, privacy through onion routing, LNURL integrations for easy payments, and interoperability across wallets and apps, all helping Bitcoin function smoothly as both a savings and spending tool.`;
    } else if (filterText === 'Lightning Network Daemon (LND)') {
        customText = `The Lightning Network Daemon (LND), developed by Lightning Labs, is one of the most widely used implementations of the Bitcoin Lightning Network, designed to make running a Lightning node accessible and powerful. It enables users and businesses to open payment channels, route transactions, and integrate Lightning payments into their apps or services. Bitcoiners use LND because it offers a strong balance of usability, reliability, and developer support, making it ideal for both personal and enterprise use. Key features include automatic channel management, multi-path payments, Watchtower support for security, Lightning Loop for liquidity management, and comprehensive APIs that make it easy to build wallets, payment processors, or other Lightning-based applications. Its robust ecosystem and compatibility with many wallets and platforms make LND a core pillar of the modern Lightning Network.`;
    } else if (filterText === 'Lightning Node Connect') {
        customText = `Lightning Node Connect (LNC), developed by Lightning Labs, is a tool that makes it simple and secure to remotely connect to and manage your LND (Lightning Network Daemon) node from anywhere without needing to open ports or expose your network. It uses end-to-end encrypted pairing links, allowing wallets and apps—like Lightning Terminal (LiT) or mobile wallets—to safely interact with your node over the internet. Bitcoiners use Lightning Node Connect because it eliminates complex network setup, making it much easier to run and access a self-hosted Lightning node securely. Key features include simple QR or link-based setup, secure remote management, integration with Lightning Terminal and Pool, and privacy-preserving architecture that ensures node keys and data never leave your control. It's an essential tool for users who want the power of self-custody and remote access without the technical hassle.`;
    } else if (filterText === 'Loop') {
        customText = `Lightning Loop, developed by Lightning Labs, is a liquidity management service for the Lightning Network that lets users move funds between their Lightning channels and on-chain Bitcoin addresses without closing channels. Its main use case is to "loop out" funds from a channel to on-chain Bitcoin (freeing up inbound capacity) or "loop in" funds from on-chain Bitcoin into a channel (increasing outbound capacity). Bitcoiners use Lightning Loop to keep their node's channels balanced, allowing smoother payments and reducing the need to manually rebalance or close channels. Key features include non-custodial swaps, seamless integration with LND and Lightning Terminal, automation for liquidity balancing, and on-chain settlement that maintains full self-custody throughout the process. This makes Lightning Loop a practical tool for keeping Lightning nodes efficient, liquid, and ready for continuous use.`;
    } else if (filterText === 'Pool') {
        customText = `Lightning Pool, created by Lightning Labs, is a non-custodial marketplace for Lightning Network liquidity, where users can buy or sell access to payment channels. Its main use case is to help node operators and businesses quickly obtain inbound or outbound liquidity without relying on manual coordination or trusted third parties. Bitcoiners use Lightning Pool to earn yield by leasing their liquidity to others or to bootstrap new nodes and services with ready-made channels. Key features include on-chain, trust-minimized auctions, integration with LND and Lightning Terminal, automatic channel management, and transparent pricing for liquidity rates, all secured by Bitcoin's blockchain. This marketplace helps strengthen the overall Lightning Network by efficiently matching liquidity supply and demand among its participants.`;
    } else if (filterText === 'Ride The Lightning') {
        customText = `Ride The Lightning (RTL) is a web-based interface for managing Bitcoin and Lightning Network nodes, making it easy to monitor and control channels without using command-line tools. It supports major implementations like LND, Core Lightning, and Eclair, giving users a visual dashboard to open, close, and rebalance channels, send and receive payments, and view detailed node statistics. Bitcoiners use RTL because it provides a simple, user-friendly way to manage complex Lightning operations, ideal for both hobbyists and node operators who want full control over their liquidity and routing. Key features include real-time channel and payment monitoring, fee management, on-chain transaction tools, backup options, and multi-user access, all running locally for security. It's a popular choice for those who want transparency and convenience when managing their self-hosted Lightning infrastructure.`;
    } else if (filterText === 'Thunderhub') {
        customText = `Thunderhub is a web-based dashboard for managing a Bitcoin Lightning node, designed to make node operation intuitive, powerful, and visually engaging. It connects directly to your LND (Lightning Network Daemon) and provides a clean, modern interface for sending and receiving payments, opening or closing channels, and tracking liquidity—all without using the command line. Bitcoiners use Thunderhub because it offers a secure, self-hosted way to monitor and control their Lightning activity from any device. Key features include real-time channel and balance management, fee adjustments, on-chain and off-chain payment tracking, account overviews, and integration with Lightning Loop and Pool. Its focus on ease of use, strong privacy, and beautiful design makes Thunderhub a favorite among self-custodial Lightning node operators.`;
    } else if (filterText === 'Voltage') {
        customText = `Voltage is a cloud platform for running Bitcoin and Lightning Network infrastructure, offering scalable, non-custodial node hosting and developer tools. It allows individuals and businesses to deploy and manage their own Bitcoin or Lightning nodes—like LND, Core Lightning, or BTCPay Server—without needing to maintain hardware or complex setups. Bitcoiners and companies use Voltage because it provides enterprise-grade reliability with full control of private keys, combining convenience with self-sovereignty. Key features include instant node deployment, integration with Lightning services like Loop and Pool, secure backups, API access for app developers, and real-time monitoring dashboards. By removing the technical barriers to running Lightning infrastructure, Voltage makes it easy for users to build wallets, payment platforms, and services on Bitcoin's Lightning Network.`;
    } else if (filterText === 'Boltz') {
        customText = `Boltz is a non-custodial Bitcoin and Lightning swap platform that lets users move funds between the Bitcoin blockchain and the Lightning Network without trusting a third party. Its main use case is to "onboard" or "offboard" sats—for example, turning on-chain Bitcoin into Lightning liquidity or withdrawing Lightning funds back to the main chain—using atomic swaps that guarantee security and privacy. Bitcoiners use Boltz because it provides instant, trustless liquidity management while maintaining self-custody and minimizing fees. Key features include submarine swaps (on-chain to Lightning), reverse swaps (Lightning to on-chain), Taproot and SegWit support, automated liquidity tools, and integration with wallets and node managers like Zeus, Ride The Lightning, and Thunderhub. Boltz is a vital bridge between Bitcoin's base layer and Lightning, enabling smooth, private, and decentralized fund transfers.`;
    } else if (filterText === 'Liquid') {
        customText = `The Liquid Network is a Bitcoin sidechain developed by Blockstream that enables faster, more private, and more flexible transactions between exchanges, traders, and institutions. Built on Bitcoin's codebase, it uses L-BTC, a 1:1 bitcoin-backed token, allowing users to move funds between the main chain and Liquid while maintaining Bitcoin's overall supply. Bitcoiners use Liquid to settle trades quickly, move large amounts of bitcoin privately, and issue digital assets like stablecoins or security tokens, all without relying on traditional banking rails. Key features include confidential transactions (which hide amounts and asset types), two-minute block times, multisig federation security, and the ability to create and trade assets on top of Bitcoin's foundation—making it a popular choice for exchanges, OTC desks, and advanced Bitcoin users who need both speed and privacy.`;
    } else if (filterText === 'Testnet') {
        customText = `The Bitcoin Testnet is a public testing version of the Bitcoin network designed for developers and users to safely experiment without using real bitcoin. It functions just like the main Bitcoin blockchain but uses testnet coins (tBTC) that have no monetary value and can be freely obtained from online faucets. Bitcoiners use Testnet to test wallets, nodes, transactions, or scripts before deploying them on mainnet, reducing the risk of losing real funds. It offers all the same features as Bitcoin—proof-of-work mining, addresses, mempool, blocks, and consensus rules—but operates independently, allowing anyone to learn, build, and troubleshoot in a real-world environment that mimics Bitcoin without financial consequences.`;
    } else if (filterText === 'USDT') {
        customText = `USDT (Tether) is a widely used stablecoin designed to maintain a 1:1 value with the U.S. dollar, allowing users to move and store digital dollars across different blockchains, including Bitcoin via the Liquid Network (as Liquid USDT). Its main use case is to provide price stability within the volatile crypto markets—making it easy to trade, hedge, or hold value without converting back to traditional bank accounts. Bitcoiners often use USDT to move funds quickly, settle trades, or access liquidity on exchanges and sidechains while staying within the Bitcoin ecosystem. Key features include fast settlement, low fees, global accessibility, and compatibility across multiple blockchains, making it a practical bridge between fiat and Bitcoin-denominated systems.`;
    } else if (filterText === 'Cashu') {
        customText = `The Cashu protocol is a free and open-source implementation of Chaumian eCash, a privacy-preserving digital cash system that allows users to hold and send bitcoin off-chain without revealing their identity or transaction history. It works by having users deposit bitcoin (often over the Lightning Network) into a mint, which issues cryptographically blinded tokens representing that value; these tokens can later be redeemed or transferred anonymously. Bitcoiners use Cashu for fast, private, low-fee payments that don't expose their wallet addresses or balances, making it useful for everyday spending, censorship resistance, and reducing blockchain footprint. Key features include blind signatures for strong privacy, Lightning Network integration for scalability, and simple wallet interoperability, enabling anyone to run or use a mint while keeping their financial activity unlinkable.`;
    } else if (filterText === 'Fedimint') {
        customText = `The Fedimint protocol is a federated Chaumian eCash system that allows communities or trusted groups to collectively custody bitcoin while giving users private, off-chain access to their funds through blinded tokens. Instead of a single mint operator like in Cashu, Fedimint distributes control across multiple federation members who jointly manage deposits and withdrawals, reducing single points of failure and increasing resilience. Bitcoiners use Fedimint to create community-based "mini-banks" that preserve privacy, enable local custody, and provide fast, low-fee bitcoin transactions without relying on large custodians or exchanges. Key features include multi-party federation security, blind signatures for user privacy, Lightning Network integration for instant payments, and modular extensibility, allowing future features like stablecoin support or custom community rules—all while keeping users' transaction history unlinkable.`;
    } else if (filterText === 'Child Seeds (BIP 85)') {
        customText = `BIP 85 (Deterministic Entropy from BIP32 Keychains) introduces a method for generating child seeds—independent wallets or accounts—directly from a single master seed. Instead of creating and backing up many different recovery phrases, a user can securely derive new ones on demand using their existing hardware wallet or seed phrase. Each derived seed behaves like a completely separate wallet, but can always be deterministically recreated from the original root. Bitcoiners use BIP 85 to simplify backups, manage multiple wallets (for example, a spending wallet, Lightning wallet, or testnet wallet), and maintain strong security isolation without juggling many separate recovery phrases. It offers predictable, reproducible entropy for generating new mnemonic seeds or keys while keeping everything anchored to one securely stored root.`;
    } else if (filterText === 'Coinjoin (JoinMarket)') {
        customText = `JoinMarket is a decentralized CoinJoin protocol that allows Bitcoin users to mix their coins with others to improve privacy and break the on-chain link between their inputs and outputs. Unlike centralized mixers, JoinMarket uses a market-based model where "takers" pay "makers" to participate in collaborative transactions, incentivizing liquidity for privacy. Bitcoiners use JoinMarket to obscure the history of their coins, protect financial privacy, and avoid address clustering by chain analysis tools—all without relying on a trusted third party. Key features include non-custodial mixing, a peer-to-peer order book for liquidity, wallet integration for ease of use, and compatibility with both single-signature and multisig setups, making it one of the most practical and robust tools for on-chain Bitcoin privacy.`;
    } else if (filterText === 'Coinjoin (Wabisabi)') {
        customText = `The WabiSabi CoinJoin protocol, developed for the Wasabi Wallet, is a modern Bitcoin privacy system that enables flexible, efficient, and high-liquidity mixing of coins. It improves on earlier CoinJoin designs by using anonymous credentials and zero-knowledge proofs to let users contribute variable input and output amounts in the same round, rather than being limited to equal denominations. Coordination is handled by a central server that organizes rounds but never takes custody of funds or learns which inputs correspond to which outputs, thanks to cryptographic blinding. Bitcoiners use WabiSabi to enhance their on-chain privacy, prevent address clustering, and make transaction histories much harder to trace—all while keeping full control of their coins. Key features include blinded signatures, denomination flexibility, Tor integration for network privacy, and a non-custodial trust model.`;
    } else if (filterText === 'Coinjoin (Whirlpool)') {
        customText = `Whirlpool is a non-custodial CoinJoin implementation developed by Samourai Wallet that enables Bitcoin users to mix their coins in equal denominations to break on-chain links and strengthen privacy. It uses a central coordinator to organize CoinJoin rounds without ever taking custody of funds or learning which inputs correspond to which outputs, ensuring strong cryptographic anonymity. Bitcoiners use Whirlpool to de-link transaction histories, obscure spending patterns, and enhance financial privacy while maintaining full control of their coins. Key features include equal-output mixing for large anonymity sets, free post-mix remixes that increase privacy over time, Tor network integration, and seamless compatibility with Ashigaru Wallet for coordinated use.`;
    } else if (filterText === 'Encrypted Backups') {
        customText = `Encrypted backups for Bitcoin wallets are a security feature that allows users to safely store a copy of their wallet data—such as private keys, metadata, and transaction history—in encrypted form, typically on cloud storage or external devices. The goal is to protect against loss or device failure without exposing sensitive information to third parties. Bitcoiners use encrypted backups to ensure they can recover their wallets if a phone or computer is lost, stolen, or damaged, while keeping their funds secure from unauthorized access. Key features include strong encryption algorithms (often AES or similar), password-protected recovery, automatic or manual backup options, and cloud or local storage flexibility, giving users both convenience and robust data security without compromising control over their private keys.`;
    } else if (filterText === 'Multisig') {
        customText = `Multisig (multi-signature) Bitcoin wallets are wallets that require signatures from multiple private keys to authorize a transaction, such as 2-of-3 or 3-of-5 setups. This design greatly enhances security by removing any single point of failure—no single compromised key can move funds on its own. Bitcoiners use multisig wallets for secure self-custody, shared control, or collaborative custody, such as between business partners, family members, or with a trusted service. Key features include customizable signature thresholds, hardware wallet compatibility, distributed key storage, and redundant recovery options, making multisig ideal for long-term storage, inheritance planning, or institutional Bitcoin security. It offers a balance between convenience, resilience, and protection against theft, loss, or coercion.`;
    } else if (filterText === 'Non-KYC') {
        customText = `Non-KYC Bitcoin refers to acquiring or using bitcoin without undergoing Know Your Customer (KYC) identity verification, meaning no personal information such as names, IDs, or bank details are tied to the transaction. Bitcoiners use non-KYC methods—like peer-to-peer exchanges, ATMs that don't require ID, or earning bitcoin directly—to preserve financial privacy, reduce exposure to data breaches, and maintain sovereign control over their funds. The main use case is to hold and transact bitcoin in a way that is resistant to surveillance, censorship, or seizure. Key features of non-KYC Bitcoin include privacy, censorship resistance, reduced data collection, and true self-custody, aligning closely with Bitcoin's original purpose as a decentralized, permissionless form of money.`;
    } else if (filterText === 'Payjoin') {
        customText = `PayJoin (also known as Pay-to-EndPoint or P2EP) is a Bitcoin transaction protocol that enhances privacy by allowing both the sender and the receiver to contribute inputs to a single transaction. This breaks common transaction analysis patterns, making it difficult for chain surveillance tools to distinguish who paid whom or how much was sent. Bitcoiners use PayJoin to improve on-chain privacy without relying on external mixers, while still completing normal payments. Key features include full compatibility with standard Bitcoin transactions, no change in user experience for recipients, and enhanced privacy through input mixing that disguises the transaction's true structure. It offers a simple, wallet-compatible way to make everyday Bitcoin payments more private and resistant to address clustering analysis.`;
    } else if (filterText === 'Paynyms (BIP 47)') {
        customText = `BIP 47, known as PayNyms, is a Bitcoin privacy protocol that allows users to share a reusable payment code instead of a static Bitcoin address, enabling private, repeated payments without exposing their address history. Each payment between two PayNyms automatically generates a unique, one-time-use address derived from the shared codes, breaking the on-chain link between payments while maintaining a consistent public identity. Bitcoiners use PayNyms to simplify receiving payments privately, especially for donations or ongoing relationships, without needing to reveal new addresses each time. Key features include reusable payment codes, automatic unique address generation, compatibility with standard wallets, and improved privacy without coordination, making it a powerful tool for maintaining anonymity while still being easy to recognize and contact on the Bitcoin network.`;
    } else if (filterText === 'Seed Phrases (General)') {
        customText = `A Bitcoin seed phrase, often 12 or 24 words long, is a human-readable backup that encodes the cryptographic keys to a Bitcoin wallet. It serves as the master key from which all private keys and addresses in the wallet can be regenerated, making it the single most important piece of information for wallet recovery. Bitcoiners use seed phrases to securely back up and restore their funds if a wallet or device is lost, stolen, or damaged. The main use case is self-custody—ensuring that only the holder of the seed has control over the Bitcoin. Seed phrases offer simplicity, portability, and independence from any company or hardware, empowering users to safely store their wealth without relying on third parties.`;
    } else if (filterText === 'Seed XOR') {
        customText = `Seed XOR is a Bitcoin backup technique developed by Coinkite (used with devices like the Coldcard) that lets users split a single wallet's seed phrase into two or more parts, each of which looks like a normal seed. When combined using the XOR process, these parts recreate the original seed. Bitcoiners use Seed XOR to add an extra layer of security to their backups—so that no single piece reveals access to their funds if lost or stolen. The main use case is secure seed redundancy and distribution, allowing one part to be stored in one location and another elsewhere. Key features include simple paper-based backups, no need for special software to recombine, and resistance to single-point compromise, giving users a practical way to strengthen the physical security of their Bitcoin seed phrases.`;
    } else if (filterText === 'SeedQR') {
        customText = `SeedQR is a method of encoding a Bitcoin wallet's seed phrase as a QR code, allowing users to easily back up, restore, or transfer their wallet information using cameras or scanners instead of manually typing words. It's often used with hardware wallets and air-gapped setups to improve usability while maintaining strong security. Bitcoiners use SeedQR to reduce human error during wallet recovery, speed up wallet setup, and enable secure, offline backups that can be easily restored without internet exposure. Key features include BIP39 compatibility, air-gapped scanning support, quick recovery without typing, and optional encryption for added safety, making it a convenient yet secure way to handle seed backups and wallet recovery in self-custody setups.`;
    } else if (filterText === "Shamir's Secret Sharing (SLIP-39)") {
        customText = `Shamir's Secret Sharing, standardized in Bitcoin as SLIP-39, is a cryptographic method for splitting a wallet's master seed into multiple unique parts, or "shares," where only a chosen number of them are needed to recover the original seed. For example, a user might create five shares and require any three to restore the wallet. Bitcoiners use SLIP-39 to protect against seed loss or theft by distributing shares across different locations or trusted individuals, so that no single person or event can compromise their funds. Key features include customizable recovery thresholds, human-readable word lists similar to BIP39, hardware wallet compatibility (notably with Trezor), and strong resilience against single-point failures, making it ideal for securing long-term or high-value Bitcoin storage.`;
    } else if (filterText === 'Silent Payments') {
        customText = `Silent Payments is a Bitcoin privacy protocol that allows users to receive funds through a single, static address without revealing any on-chain link between payments. When someone sends to a Silent Payment address, they generate a unique one-time destination using cryptography, so every payment appears unrelated on the blockchain, even though all go to the same receiver. Bitcoiners use Silent Payments to simplify private receiving—eliminating the need to generate new addresses for every transaction—while keeping their financial history hidden from observers. Key features include receiver privacy, non-interactive design (no coordination needed between sender and receiver), compatibility with standard Bitcoin wallets, and scalability for recurring or donation use cases, offering a powerful improvement in on-chain privacy without altering Bitcoin's core rules.`;
    } else if (filterText === 'UTXO Management') {
        customText = `UTXO management refers to how Bitcoin users handle their unspent transaction outputs (UTXOs) — the individual chunks of bitcoin that make up their total balance. Each UTXO has its own transaction history, size, and privacy implications, so managing them carefully helps users optimize fees, improve privacy, and maintain cleaner wallet organization. Bitcoiners pay attention to UTXO management because combining or reusing coins can reveal spending patterns or increase fees, while consolidating at the right time (such as when fees are low) can make future transactions cheaper and simpler. Good UTXO management involves avoiding address reuse, separating mixed and unmixed coins, and strategically consolidating outputs, ensuring both cost efficiency and stronger on-chain privacy.`;
    } else if (filterText === 'Verifying Downloads') {
        customText = `Verifying downloads using PGP signatures is a security practice where Bitcoiners check that wallet software, firmware, or other Bitcoin-related files are authentic and unaltered before installing them. Developers publish a digital signature created with their private PGP key, and users verify it with the corresponding public key to ensure the file truly came from the intended source and hasn't been tampered with by attackers. Bitcoiners engage in this practice to protect against malware, supply-chain attacks, and fake software downloads, especially since wallet software directly handles private keys. This process ensures authenticity, integrity, and trust, giving users confidence that the code they install matches the developer's verified release and hasn't been modified to steal funds or compromise security.`;
    } else if (filterText === 'Border Wallet') {
        customText = `Border Wallet is a Bitcoin tool that helps users securely back up and recreate their seed phrases without writing them down in plain text. It uses a grid-based pattern system that combines a user's memorized pattern with a randomly generated word list to reconstruct a Bitcoin seed, allowing for "plausible deniability" and resistance to physical searches or theft. Bitcoiners use Border Wallet to reduce the risks of paper backups being lost, stolen, or discovered, while still ensuring their funds can be fully recovered. Its unique features include pattern-based seed reconstruction, custom entropy generation, offline functionality, and an open-source design that lets users independently verify and use it without relying on any centralized service.`;
    } else if (filterText === 'Child Pays For Parent (CPFP)') {
        customText = `Child Pays for Parent (CPFP) is a Bitcoin transaction technique used to speed up confirmation of a stuck or low-fee transaction. It works by creating a new "child" transaction that spends the unconfirmed output of the original "parent" transaction and includes a higher fee, incentivizing miners to confirm both together to collect the combined fees. Bitcoiners use CPFP when they've sent or received a transaction that's taking too long to confirm and they can't directly raise the original fee. Its unique advantage is that any party—including the recipient—can use it to boost confirmation without the sender's cooperation, making it a flexible and reliable fee bumping method that helps ensure timely inclusion in a block.`;
    } else if (filterText === 'FROST') {
        customText = `FROST (Flexible Round-Optimized Schnorr Threshold signatures) is a modern cryptographic protocol that allows a group of participants to jointly create a single Bitcoin signature without revealing or reconstructing the full private key. It's used for threshold signing, where any subset (for example, 2 of 3) of authorized signers can approve a transaction while keeping their individual key shares private. Bitcoiners use FROST for multisig setups, custody solutions, and collaborative wallets because it improves both privacy and efficiency—producing one compact Schnorr signature instead of multiple ones on-chain. Its unique features include reduced communication rounds, strong protection against key leakage, compatibility with Taproot and MuSig2, and scalability for large or distributed signing groups, all while maintaining full cryptographic security.`;
    } else if (filterText === 'Gettxoutsetinfo (Audit Supply)') {
        customText = `gettxoutsetinfo is a Bitcoin Core RPC command that provides detailed information about the current state of the UTXO (unspent transaction output) set, which represents all spendable coins in existence. It's used by Bitcoiners, developers, and node operators to verify the total supply of bitcoin, check the number of unspent outputs, and monitor node integrity or database consistency. This command helps ensure transparency and accountability in the system by allowing anyone running a full node to independently confirm the amount of bitcoin in circulation. Its unique features include the ability to return a cryptographic hash of the entire UTXO set, report disk usage and total balances, and offer snapshot statistics that can be compared across nodes for consensus verification and auditing purposes.`;
    } else if (filterText === 'Partially Signed Bitcoin Transactions (PSBT)') {
        customText = `Partially Signed Bitcoin Transactions (PSBT) is a standardized Bitcoin format that allows multiple parties, devices, or software to collaborate in creating and signing a transaction without exposing private keys. It's commonly used for multisig wallets, hardware wallets, and air-gapped setups, where different participants or devices handle specific steps like constructing, reviewing, and signing the transaction before finalizing it. Bitcoiners use PSBT to improve security, interoperability, and flexibility—making it possible to safely move unsigned or partially signed transactions between wallets and systems. Its unique features include base64-encoded portability, support for multiple signers and inputs, clear separation of signing and broadcasting steps, and broad compatibility across Bitcoin wallets and hardware devices following the BIP 174 standard.`;
    } else if (filterText === 'Replace By Fee (RBF)') {
        customText = `Replace-By-Fee (RBF) is a Bitcoin feature that allows a sender to resubmit an unconfirmed transaction with a higher fee to speed up its confirmation. It's used when a transaction is stuck in the mempool because the original fee was too low to attract miners. Bitcoiners use RBF to maintain flexibility and control over confirmation times, especially during periods of high network congestion. Its unique features include the ability to replace unconfirmed transactions, adjust fees dynamically after sending, and ensure miners prioritize the new version based on its higher fee rate. RBF can be applied selectively—only if the original transaction opted in—which helps balance user control with predictability for recipients.`;
    } else if (filterText === 'Statechains') {
        customText = `Statechains are a Bitcoin layer-two protocol that allow users to transfer ownership of an entire UTXO off-chain without broadcasting new on-chain transactions each time. Instead of moving coins on the blockchain, the ownership of a locked output is handed over using cryptographic transfer of control, verified by a coordinating server called the Statechain entity. Bitcoiners use statechains to achieve instant, low-fee transfers and scalability while keeping full self-custody over their funds. Their unique features include off-chain ownership transfers, non-custodial design through key-sharing schemes, compatibility with the Lightning Network (for converting statecoins into Lightning channels), and the ability to batch or delay on-chain settlements, making them an efficient bridge between Bitcoin's security and faster, more private off-chain transactions.`;
    } else if (filterText === 'Taproot Assets') {
        customText = `Taproot Assets is a protocol that enables the issuance and transfer of tokenized assets on Bitcoin, such as stablecoins or digital collectibles, by embedding them within Taproot outputs in a highly efficient and private way. It's designed to let users create and transact these assets without bloating the blockchain, using off-chain transfers anchored to Bitcoin's existing infrastructure. Bitcoiners use Taproot Assets to leverage Bitcoin's security, decentralization, and liquidity while enabling new use cases like stablecoin payments or tokenized representations of real-world assets. Its unique features include single-sig Taproot compatibility, scalable off-chain updates, Lightning Network integration for instant asset transfers, and on-chain privacy, since asset-related data is indistinguishable from normal Bitcoin transactions.`;
    } else if (filterText === 'Timelocks') {
        customText = `Miniscript timelocks are a structured way to include time-based spending conditions in Bitcoin transactions using the Miniscript language, which simplifies the creation and analysis of complex scripts. They allow coins to be spendable only after a certain time or block height—for example, to enforce a delay before withdrawal or enable an automatic fallback to another key after a set period. Bitcoiners use Miniscript timelocks in vaults, inheritance plans, and multisig setups to add predictable, auditable security conditions without writing raw script code. Their unique features include human-readable syntax, automatic policy verification, compatibility with hardware wallets and descriptors, and the ability to combine timelocks with other rules (like multisig or recovery paths) in a transparent, composable, and secure way.`;
    } else if (filterText === 'Derivation Paths') {
        customText = `Derivation paths are standardized instructions used by Bitcoin wallets to deterministically generate large numbers of private keys and addresses from a single master seed. They define how a wallet derives specific keys\u2014for example, separating accounts, address types (Legacy, SegWit, Taproot), or purposes\u2014so the same seed always recreates the same wallet structure. Bitcoiners use derivation paths to ensure reliable wallet recovery, compatibility across different wallets, and clean organization of funds without managing multiple seeds. Their unique features include hierarchical structure, standardization through BIPs like BIP-44, BIP-49, BIP-84, and BIP-86, support for multiple accounts and address formats, and the ability to fully restore a wallet\u2019s addresses and balances using just the seed phrase and the correct path.`;
    } else if (filterText === 'Heatbit') {
        customText = `Heatbit is a home space heater that doubles as a Bitcoin miner, turning the heat generated from mining into usable warmth for your room. Instead of wasting the energy that traditional mining rigs produce, Heatbit captures that heat and uses it to warm your home, while automatically mining Bitcoin in the background. You simply plug it in, connect it to Wi-Fi, and control it through an app\u2014no technical mining setup required. It looks like a modern heater, runs quietly, and is designed for people who want to support the Bitcoin network and potentially earn small amounts of bitcoin while heating their space.`;
    } else if (filterText === 'Cove') {
        customText = `Cove Bitcoin Wallet is a mobile Bitcoin wallet designed to make advanced self-custody features simple and accessible, especially for users running their own node. Built with a clean, modern interface, Cove focuses on privacy and control by letting users connect directly to their own Bitcoin node instead of relying on third-party servers. What makes it unique is its emphasis on powerful wallet configurations\u2014such as multisig setups and hardware wallet integration\u2014while still keeping the experience intuitive for everyday use. For bitcoiners who value sovereignty, privacy, and the ability to verify their own transactions, Cove offers a practical balance between ease of use and serious self-custody tools, making it a strong option for those ready to move beyond basic, custodial apps.`;
    }

    // Add more custom text for other tags here as needed

    if (customText) {
        content += `<div class="info-box-description">${customText}</div>`;
    }

    return content;
}

// Update active filters display
function updateActiveFiltersDisplay() {
    activeFiltersContainer.innerHTML = '';

    // Add favorites filter pill if showing favorites only
    if (showingFavoritesOnly) {
        const favoritesFilter = document.createElement('div');
        favoritesFilter.className = 'active-filter active-filter-favorites';
        favoritesFilter.style.backgroundColor = '#f7931a';
        favoritesFilter.style.color = 'black';
        const favCount = favorites.length;
        favoritesFilter.innerHTML = `
            <span>🔖 Favorites (${favCount})</span>
            <span class="filter-remove favorites-remove">×</span>
        `;
        activeFiltersContainer.appendChild(favoritesFilter);

        // Add event listener to the favorites remove button
        const favRemoveBtn = favoritesFilter.querySelector('.favorites-remove');
        favRemoveBtn.addEventListener('click', () => {
            showingFavoritesOnly = false;
            updateFavoritesButton();
            updateActiveFiltersDisplay();
            applyActiveFilters();
        });
    }

    // Sort all filters
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

    const sortedFilters = Array.from(activeFilters).sort(sortFunction);

    // FIRST PASS: Render all filter pills
    sortedFilters.forEach(filterKey => {
        const filterElement = document.createElement('div');
        filterElement.className = 'active-filter';

        // Extract filter text and type
        const filterText = filterKey.split(':')[0];
        const filterType = filterKey.split(':')[1];

        // Get social icons for this filter
        const socialIcons = getSocialIconsHTML(filterKey);

        // Check if this filter has an info box
        const hasInfoBox = filterHasInfoBox(filterText, filterType);

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

            // Build the filter pill HTML with optional info icon (no social icons for tags)
            const infoIconHTML = hasInfoBox ? '<span class="info-icon" data-filter="' + filterKey + '">ℹ️</span>' : '';

            filterElement.innerHTML = `
                <span>${tagContent}</span>
                ${infoIconHTML}
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

        // Append the filter pill directly to the container
        activeFiltersContainer.appendChild(filterElement);
    });

    // Show "Clear All Filters" button inline with filter pills (before info boxes)
    if (activeFilters.size > 0 || showingFavoritesOnly) {
        const clearBtn = document.createElement('button');
        clearBtn.className = 'clear-all-filters-btn';
        clearBtn.id = 'clear-all-filters-btn';
        clearBtn.textContent = 'Clear All Filters';
        clearBtn.addEventListener('click', clearAllFilters);
        activeFiltersContainer.appendChild(clearBtn);
    }

    // SECOND PASS: Render info boxes for open filters (in same order)
    sortedFilters.forEach(filterKey => {
        // Extract filter text and type
        const filterText = filterKey.split(':')[0];
        const filterType = filterKey.split(':')[1];

        // Check if this filter has an info box and if it's open
        const hasInfoBox = filterHasInfoBox(filterText, filterType);

        if (hasInfoBox && openInfoBoxes.has(filterKey)) {
            const infoBoxContent = buildInfoBoxContent(filterText, filterType, filterKey);
            const infoBox = document.createElement('div');
            infoBox.className = 'filter-info-box';
            infoBox.innerHTML = `
                <span class="info-box-close" data-filter="${filterKey}">×</span>
                ${infoBoxContent}
            `;
            activeFiltersContainer.appendChild(infoBox);
        }
    });

    // Add event listeners to remove buttons
    document.querySelectorAll('.filter-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            removeActiveFilter(e.target.dataset.filter);
        });
    });

    // Add event listeners to info icon buttons (toggle info box open/closed)
    document.querySelectorAll('.info-icon').forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.stopPropagation();
            const filterKey = e.target.dataset.filter;
            if (openInfoBoxes.has(filterKey)) {
                openInfoBoxes.delete(filterKey);
            } else {
                openInfoBoxes.add(filterKey);
            }
            updateActiveFiltersDisplay();
        });
    });

    // Add event listeners to info box close buttons
    document.querySelectorAll('.info-box-close').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const filterKey = e.target.dataset.filter;
            openInfoBoxes.delete(filterKey);
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

    // Apply favorites filter if showing favorites only
    if (showingFavoritesOnly) {
        currentVideos = currentVideos.filter(video => isFavorited(video.youtubeId));
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
    openInfoBoxes.clear(); // Clear open info boxes
    searchInput.value = '';

    // Clear sidebar tag selections
    document.querySelectorAll('.sidebar-tag.active').forEach(el => el.classList.remove('active'));

    // Turn off favorites-only mode
    if (showingFavoritesOnly) {
        showingFavoritesOnly = false;
        updateFavoritesButton();
    }

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

// Parse date string from CSV - handles both YYYY-MM-DD and M/D/YY formats
function parseDateString(dateStr) {
    if (!dateStr) return null;

    // Try ISO format first (YYYY-MM-DD)
    if (dateStr.match(/^\d{4}-\d{1,2}-\d{1,2}$/)) {
        return new Date(dateStr + 'T00:00:00');
    }

    // Try M/D/YY or MM/DD/YY format
    const parts = dateStr.split('/');
    if (parts.length === 3) {
        let month = parseInt(parts[0], 10);
        let day = parseInt(parts[1], 10);
        let year = parseInt(parts[2], 10);

        // Convert 2-digit year to 4-digit year
        // Assume years 00-49 are 2000-2049, 50-99 are 1950-1999
        if (year < 100) {
            year += (year < 50) ? 2000 : 1900;
        }

        // JavaScript months are 0-indexed
        return new Date(year, month - 1, day);
    }

    // Fallback to standard Date parsing
    return new Date(dateStr);
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
        "Security": "🛡️",
        "Privacy": "🥷",
        "Advanced Features": "🚀",
        "Services & Exchanges": "🏢",
        "Tokens": "🪙",
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

    // Check if icon exists before trying to load it (eliminates 404 requests)
    if (availableCreatorIcons.has(filenameBase)) {
        return `<img src="creator icons/${filenameBase}.png" alt="${creatorName}" class="creator-icon" onerror="this.style.display='none';">`;
    } else {
        // No icon exists - return empty string
        return '';
    }
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

    // Check if icon exists before trying to load it (eliminates 404 requests)
    if (availableTagIcons.has(filenameBase)) {
        return `<img src="tag icons/${filenameBase}.png" alt="${tagName}" class="tag-icon" onerror="this.style.display='none';">`;
    } else {
        // No icon exists - return empty string
        return '';
    }
}

// Get tag icon with category emoji fallback
function getTagIconWithFallback(tagName) {
    const filenameBase = getTagImageFilename(tagName);
    const categoryEmoji = getCategoryIcon(tagName);

    // Check if icon exists before trying to load it (eliminates 404 requests)
    if (availableTagIcons.has(filenameBase)) {
        // Icon exists - load it with hidden emoji fallback
        return `<img src="tag icons/${filenameBase}.png" alt="${tagName}" class="tag-icon" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline';">` +
               `<span class="category-emoji-fallback" style="display:none;">${categoryEmoji}</span>`;
    } else {
        // No icon exists - show emoji directly (no img tag, no 404 request)
        return `<span class="category-emoji-fallback">${categoryEmoji}</span>`;
    }
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
        "Security",
        "Privacy",
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
        const dateObj = parseDateString(video.date);
        if (dateObj && !isNaN(dateObj.getTime())) {
            formattedDate = dateObj.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        } else {
            formattedDate = video.date; // fallback to original
        }
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
    const isFavorite = isFavorited(video.youtubeId);

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
            <button class="favorite-button ${isFavorite ? 'active' : ''}" data-youtube-id="${video.youtubeId}" title="${isFavorite ? 'Remove from favorites' : 'Add to favorites'}">🔖</button>
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

    // Add click listener to favorite button
    const favoriteButton = card.querySelector('.favorite-button');
    favoriteButton.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation(); // Prevent triggering video modal
        toggleFavorite(video.youtubeId);
    });

    return card;
}

// Sort videos
function sortVideos(videos, sortBy, ascending = true) {
    return videos.sort((a, b) => {
        let valueA, valueB;
        
        switch(sortBy) {
            case 'date':
                valueA = parseDateString(a.date);
                valueB = parseDateString(b.date);
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
                youtubeId: values[3].replace(/"/g, '').trim().replace(/^ID:/, ''),
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
    console.log('Setting up event listeners...');

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

    // Show Favorites button
    if (showFavoritesBtn) {
        showFavoritesBtn.addEventListener('click', toggleFavoritesView);
        updateFavoritesButton(); // Initialize button text
    }

    // Clear All Favorites button
    const clearFavoritesBtn = document.getElementById('clear-favorites-btn');
    if (clearFavoritesBtn) {
        clearFavoritesBtn.addEventListener('click', clearAllFavorites);
    }

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
                // Sort videos according to current sort settings
                currentVideos = sortVideos([...videoData], sortBy.value, sortAscending);

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
    if (file && (file.type === 'text/csv' || file.type === 'application/vnd.ms-excel' || file.name.endsWith('.csv'))) {
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
    if (file && (file.type === 'text/csv' || file.type === 'application/vnd.ms-excel' || file.name.endsWith('.csv'))) {
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
