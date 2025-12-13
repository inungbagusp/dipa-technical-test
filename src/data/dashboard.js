export const dashboardNavItems1 = [
    { label: "Dashboard", icon: "/image/dashboard/icon-dashboard-2.svg" },
    { label: "My Assets", icon: "/image/dashboard/icon-my-assets.svg" },
    { label: "Trade", icon: "/image/dashboard/icon-trade.svg" },
    { label: "Staking", icon: "/image/dashboard/icon-staking.svg" },
    { label: "Market", icon: "/image/dashboard/icon-market.svg" },
];

export const dashboardNavItems2 = [
    { label: "News & Trends", icon: "/image/dashboard/icon-newspaper.svg" },
    { label: "Watchlist", icon: "/image/dashboard/icon-watchlist.svg" },
    { label: "Analytics", icon: "/image/dashboard/icon-analytics.svg" },
];

export const dashboardFooter = [
    { label: "Help Center", icon: "/image/dashboard/icon-help.svg" },
    { label: "Referral", icon: "/image/dashboard/icon-referral.svg" },
];

export const dashboardWatchlist = [
    { symbol: "Bitcoin", price: "$63,250.00", change: "2.14%" , icon: "/image/dashboard/icon-bitcoin-3d.svg", status: "up"},
    { symbol: "Ethereum", price: "$3,180.40", change: "0.72%" , icon: "/image/dashboard/icon-ethereum-3d.svg", status: "down"},
    { symbol: "Solana", price: "$145.75", change: "1.08%" , icon: "/image/dashboard/icon-solana-3d.svg", status: "up"},
];

export const dataSetChart = {
    All: [
        { name: "Jan", value: 210 },
        { name: "Feb", value: 260 },
        { name: "Mar", value: 180 },
        { name: "Apr", value: 230 },
        { name: "May", value: 280 },
        { name: "Jun", value: 250 },
    ],
    "1W": [
        { name: "Mon", value: 240 },
        { name: "Tue", value: 250 },
        { name: "Wed", value: 230 },
        { name: "Thu", value: 260 },
        { name: "Fri", value: 255 },
        { name: "Sat", value: 270 },
        { name: "Sun", value: 250 },
    ],
    "1M": [
        { name: "Week 1", value: 230 },
        { name: "Week 2", value: 250 },
        { name: "Week 3", value: 220 },
        { name: "Week 4", value: 260 },
    ],
    "3M": [
        { name: "Apr", value: 230 },
        { name: "May", value: 280 },
        { name: "Jun", value: 250 },
    ],
    "6M": [
        { name: "Jan", value: 210 },
        { name: "Feb", value: 260 },
        { name: "Mar", value: 180 },
        { name: "Apr", value: 230 },
        { name: "May", value: 280 },
        { name: "Jun", value: 250 },
    ],
    "1Y": [
        { name: "2024", value: 189 },
        { name: "2025", value: 260 },
    ],
};

export const candleData = [
    { name: "Jan", open: 100, close: 120, high: 130, low: 95 },
    { name: "Feb", open: 120, close: 110, high: 140, low: 105 },
    { name: "Mar", open: 110, close: 150, high: 160, low: 108 },
    { name: "Apr", open: 150, close: 140, high: 170, low: 138 },
    { name: "May", open: 140, close: 180, high: 190, low: 135 },
    { name: "Jun", open: 180, close: 175, high: 200, low: 170 },
];

export const quickAccessTabs = [
    { key: "swap", label: "Swap", icon: "/image/dashboard/icon-swap.svg" },
    { key: "deposit", label: "Deposit", icon: "/image/dashboard/icon-deposit.svg" },
    { key: "withdraw", label: "Withdraw", icon: "/image/dashboard/icon-wd.svg" },
    { key: "transfer", label: "Transfer", icon: "/image/dashboard/icon-tf.svg" },
];

export const portfolioBreakdown = [
    { name: "BTC", value: 45, color: "#2CC184" },
    { name: "ETH", value: 30, color: "#00C4BD" },
    { name: "ADA", value: 15, color: "#118482" },
    { name: "Others", value: 10, color: "#374343" }
];

export const yourAssets = [
    {
        name: "Bitcoin",
        value: "0.05 BTC",
        price: "$63.000",
        change: "3.25%",
        icon: "/image/dashboard/icon-bitcoin-3d.svg",
        status: "up"
    },
    {
        name: "Ethereum",
        value: "1.20 ETH",
        price: "$2,450",
        change: "1.12%",
        icon: "/image/dashboard/icon-ethereum-3d.svg",
        status: "up"
    },
    {
        name: "USD Coin",
        value: "3.200 ADA",
        price: "$0.42",
        change: "1.54%",
        icon: "/image/dashboard/icon-usdc-3d.svg",
        status: "down"
    },
];