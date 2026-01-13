module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/utils/constants.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// export const BASE_URL = 'http://159.198.77.150:8080/api/'
// export const BASE_URL_IMAGE = 'http://159.198.77.150:8080/'
// export const DASHBOARD_URL = "http://159.198.77.150:8081/dashboard/"
// export const CURRENT_URL = 'http://159.198.77.150/'
__turbopack_context__.s([
    "BASE_URL",
    ()=>BASE_URL,
    "BASE_URL_IMAGE",
    ()=>BASE_URL_IMAGE,
    "CURRENT_URL",
    ()=>CURRENT_URL,
    "DASHBOARD_URL",
    ()=>DASHBOARD_URL,
    "egyptCities",
    ()=>egyptCities
]);
const BASE_URL = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ("TURBOPACK compile-time value", "http://127.0.0.1:8000/api/");
const BASE_URL_IMAGE = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ("TURBOPACK compile-time value", "http://127.0.0.1:8000/");
const DASHBOARD_URL = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ("TURBOPACK compile-time value", "http://localhost:3001/dashboard/");
const CURRENT_URL = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ("TURBOPACK compile-time value", "http://127.0.0.1:8000/");
const egyptCities = [
    {
        name: "Cairo",
        region: "Nile Valley & Delta"
    },
    {
        name: "Giza",
        region: "Nile Valley & Delta"
    },
    {
        name: "Alexandria",
        region: "Nile Valley & Delta"
    },
    {
        name: "Luxor",
        region: "Nile Valley & Delta"
    },
    {
        name: "Aswan",
        region: "Nile Valley & Delta"
    },
    {
        name: "Asyut",
        region: "Nile Valley & Delta"
    },
    {
        name: "Minya",
        region: "Nile Valley & Delta"
    },
    {
        name: "Beni Suef",
        region: "Nile Valley & Delta"
    },
    {
        name: "Qena",
        region: "Nile Valley & Delta"
    },
    {
        name: "Sohag",
        region: "Nile Valley & Delta"
    },
    {
        name: "Port Said",
        region: "Suez Canal & Sinai"
    },
    {
        name: "Suez",
        region: "Suez Canal & Sinai"
    },
    {
        name: "Ismailia",
        region: "Suez Canal & Sinai"
    },
    {
        name: "El Arish",
        region: "Suez Canal & Sinai"
    },
    {
        name: "Sharm El-Sheikh",
        region: "Suez Canal & Sinai"
    },
    {
        name: "Dahab",
        region: "Suez Canal & Sinai"
    },
    {
        name: "Siwa Oasis",
        region: "Western Desert"
    },
    {
        name: "Bahariya Oasis",
        region: "Western Desert"
    },
    {
        name: "Farafra Oasis",
        region: "Western Desert"
    },
    {
        name: "Dakhla Oasis",
        region: "Western Desert"
    },
    {
        name: "Kharga Oasis",
        region: "Western Desert"
    },
    {
        name: "Hurghada",
        region: "Red Sea Coast"
    },
    {
        name: "Marsa Alam",
        region: "Red Sea Coast"
    },
    {
        name: "Safaga",
        region: "Red Sea Coast"
    },
    {
        name: "Tanta",
        region: "Delta Cities"
    },
    {
        name: "Mansoura",
        region: "Delta Cities"
    },
    {
        name: "Zagazig",
        region: "Delta Cities"
    },
    {
        name: "Damietta",
        region: "Delta Cities"
    },
    {
        name: "El-Mahalla El-Kubra",
        region: "Delta Cities"
    },
    {
        name: "New Administrative Capital",
        region: "New Urban Communities"
    },
    {
        name: "6th of October City",
        region: "New Urban Communities"
    },
    {
        name: "New Cairo",
        region: "New Urban Communities"
    },
    {
        name: "Sheikh Zayed City",
        region: "New Urban Communities"
    },
    {
        name: "Sadat City",
        region: "New Urban Communities"
    },
    {
        name: "10th of Ramadan City",
        region: "New Urban Communities"
    },
    {
        name: "Faiyum",
        region: "Other Notable Cities"
    },
    {
        name: "Kom Ombo",
        region: "Other Notable Cities"
    },
    {
        name: "Edfu",
        region: "Other Notable Cities"
    },
    {
        name: "Ras Ghareb",
        region: "Other Notable Cities"
    },
    {
        name: "St. Catherine",
        region: "Other Notable Cities"
    }
];
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/src/app/[locale]/context/homeContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HomeContext",
    ()=>HomeContext,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
let HomeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])();
const HomeContextProvider = (props)=>{
    const getHomeData = async ()=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BASE_URL"]}home`);
            return response;
        } catch (err) {
            throw err;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HomeContext.Provider, {
        value: {
            getHomeData
        },
        children: props.children
    }, void 0, false, {
        fileName: "[project]/src/app/[locale]/context/homeContext.js",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = HomeContextProvider;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[project]/src/component/usePusher.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePusher",
    ()=>usePusher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pusher$2d$js$2f$dist$2f$node$2f$pusher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pusher-js/dist/node/pusher.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
const usePusher = ()=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const pusher = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pusher$2d$js$2f$dist$2f$node$2f$pusher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]("63b495891d2c3cff9d36", {
            cluster: "eu"
        });
        const channel = pusher.subscribe("notify-channel");
        channel.bind("form-submitted", function(data) {
            console.log('📢 Received from Pusher:', data);
            switch(data?.type){
                case "notfy":
                    break;
                case "chat":
                    if (String(localStorage.getItem("customer_id")) === String(data?.message?.receiver_id)) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`💬 New Message: ${data?.message?.message}`);
                    }
                    break;
                case "add_order":
                    break;
                default:
                    // alert(JSON.stringify(data));
                    console.warn("   :", data);
            }
        });
        return ()=>{
            channel.unbind_all();
            channel.unsubscribe();
        };
    }, []);
};
}),
"[project]/src/app/[locale]/context/PusherProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PusherProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$usePusher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/component/usePusher.js [app-ssr] (ecmascript)");
// app/PusherProvider.js
"use client";
;
;
function PusherProvider({ children }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$usePusher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePusher"])(); // تفعيل Pusher
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}),
"[project]/src/component/ClientProviders/queryClient.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "queryClient",
    ()=>queryClient
]);
// src/lib/queryClient.js
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-ssr] (ecmascript)");
;
const queryClient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClient"]({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 30
        }
    }
});
}),
"[project]/src/component/ClientProviders/ClientProviders.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientProviders
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$ClientProviders$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/component/ClientProviders/queryClient.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function ClientProviders({ children, locale }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$ClientProviders$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryClient"],
        children: children
    }, void 0, false, {
        fileName: "[project]/src/component/ClientProviders/ClientProviders.js",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8dc90769._.js.map