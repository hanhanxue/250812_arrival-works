module.exports = [
"[project]/apps/www/src/lib/constants.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Global constants for the application
// Site Information
__turbopack_context__.s([
    "API_BASE_URL",
    ()=>API_BASE_URL,
    "APP_CONFIG",
    ()=>APP_CONFIG,
    "CONTACT_EMAIL",
    ()=>CONTACT_EMAIL,
    "IS_DEVELOPMENT",
    ()=>IS_DEVELOPMENT,
    "IS_PRODUCTION",
    ()=>IS_PRODUCTION,
    "NAVIGATION",
    ()=>NAVIGATION,
    "SITE_DESCRIPTION",
    ()=>SITE_DESCRIPTION,
    "SITE_NAME",
    ()=>SITE_NAME,
    "SITE_URL",
    ()=>SITE_URL,
    "SOCIAL_LINKS",
    ()=>SOCIAL_LINKS,
    "THEME",
    ()=>THEME
]);
const SITE_NAME = "Arrival";
const SITE_DESCRIPTION = "Creative office for advanced industry";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const CONTACT_EMAIL = "mail@arrivalworks.com";
const SOCIAL_LINKS = {
    //   twitter: "https://twitter.com/arrivalworks",
    linkedin: "https://linkedin.com/company/arrivalworks",
    instagram: "https://instagram.com/arrival.works",
    tiktok: "https://tiktok.com/@arrival.works",
    youtube: "https://youtube.com/@arrivalworks"
};
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";
const APP_CONFIG = {
    maxFileSize: 10 * 1024 * 1024,
    supportedImageTypes: [
        "image/jpeg",
        "image/png",
        "image/webp"
    ],
    itemsPerPage: 12
};
const THEME = {
    primaryColor: "#000000",
    secondaryColor: "#ffffff",
    accentColor: "#0070f3"
};
const NAVIGATION = {
    main: [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "About",
            href: "/about"
        },
        {
            name: "Services",
            href: "/services"
        },
        {
            name: "Contact",
            href: "/contact"
        }
    ],
    footer: [
        {
            name: "Privacy Policy",
            href: "/privacy"
        },
        {
            name: "Terms of Service",
            href: "/terms"
        },
        {
            name: "Cookie Policy",
            href: "/cookies"
        }
    ]
};
const IS_PRODUCTION = ("TURBOPACK compile-time value", "development") === "production";
const IS_DEVELOPMENT = ("TURBOPACK compile-time value", "development") === "development";
}),
"[project]/apps/www/src/components/Footer.module.scss [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "footer": "Footer-module-scss-module__JVHsGa__footer",
});
}),
"[project]/apps/www/src/components/Footer.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/apps/www/src/components/Footer.tsx'\n\nUnterminated regexp literal");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/apps/www/src/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/www/src/lib/constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/script.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$plausible$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-plausible/dist/index.esm.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/www/src/components/Footer.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
const metadata = {
    title: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_NAME"],
    description: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_DESCRIPTION"]
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("head", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        id: "disable-plausible",
                        strategy: "beforeInteractive",
                        children: `
            if (window.location.hostname.endsWith("vercel.app")) {
              localStorage.plausible_ignore = true;
            }
          `
                    }, void 0, false, {
                        fileName: "[project]/apps/www/src/app/layout.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$plausible$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        domain: "arrival.works",
                        customDomain: "https://plausible.gitpushoriginmain.com",
                        selfHosted: true
                    }, void 0, false, {
                        fileName: "[project]/apps/www/src/app/layout.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/src/app/layout.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                "data-theme": "light",
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$www$2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/apps/www/src/app/layout.tsx",
                        lineNumber: 42,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/www/src/app/layout.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/www/src/app/layout.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/client/script.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/node_modules/next/dist/client/script.js <module evaluation>"));
}),
"[project]/node_modules/next/dist/client/script.js [app-rsc] (client reference proxy)", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/node_modules/next/dist/client/script.js"));
}),
"[project]/node_modules/next/dist/client/script.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/script.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/script.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/node_modules/next/script.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/script.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/next-plausible/dist/index.esm.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PlausibleProvider,
    "usePlausible",
    ()=>usePlausible,
    "withPlausibleProxy",
    ()=>withPlausibleProxy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/script.js [app-rsc] (ecmascript)");
;
;
function usePlausible() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(function(eventName, ...rest) {
        var _a, _b;
        return (_b = (_a = window).plausible) === null || _b === void 0 ? void 0 : _b.call(_a, eventName, rest[0]);
    }, []);
}
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function getCombinations(elements) {
    const combinations = [];
    for(let i = 0; i < elements.length; i++){
        combinations.push([
            elements[i]
        ]);
        if (i < elements.length - 1) {
            getCombinations(elements.slice(i + 1)).forEach((combination)=>{
                combinations.push([
                    elements[i],
                    ...combination
                ]);
            });
        }
    }
    return combinations;
}
const allModifiers = [
    'exclusions',
    'local',
    'manual',
    'outbound-links',
    'file-downloads',
    'tagged-events',
    'pageview-props',
    'revenue',
    'hash'
];
const getScriptPath = (options, ...modifiers)=>{
    var _a, _b;
    let basePath = (_a = options.basePath) !== null && _a !== void 0 ? _a : '';
    if (options.subdirectory) {
        basePath += `/${options.subdirectory}`;
    }
    return `${basePath}/js/${[
        (_b = options.scriptName) !== null && _b !== void 0 ? _b : 'script',
        ...modifiers.sort().filter((modifier)=>modifier !== null)
    ].join('.')}.js`;
};
const plausibleDomain = 'https://plausible.io';
const getRemoteScriptName = (selfHosted)=>selfHosted ? 'plausible' : 'script';
const getDomain = (options)=>{
    var _a;
    return (_a = options.customDomain) !== null && _a !== void 0 ? _a : plausibleDomain;
};
const getApiEndpoint = (options)=>{
    var _a, _b;
    return `${(_a = options.basePath) !== null && _a !== void 0 ? _a : ''}/${(_b = options.subdirectory) !== null && _b !== void 0 ? _b : 'proxy'}/api/event${options.trailingSlash ? '/' : ''}`;
};
function withPlausibleProxy(options = {}) {
    return (nextConfig)=>{
        const nextPlausiblePublicProxyOptions = Object.assign(Object.assign({}, options), {
            trailingSlash: !!nextConfig.trailingSlash,
            basePath: nextConfig.basePath
        });
        const nextPlausibleEnv = {
            next_plausible_proxy: 'true',
            next_plausible_trailingSlash: nextPlausiblePublicProxyOptions.trailingSlash ? 'true' : undefined,
            next_plausible_basePath: nextPlausiblePublicProxyOptions.basePath,
            next_plausible_customDomain: nextPlausiblePublicProxyOptions.customDomain,
            next_plausible_scriptName: nextPlausiblePublicProxyOptions.scriptName,
            next_plausible_subdirectory: nextPlausiblePublicProxyOptions.subdirectory
        };
        return Object.assign(Object.assign({}, nextConfig), {
            env: Object.assign(Object.assign({}, nextConfig.env), Object.fromEntries(Object.entries(nextPlausibleEnv).filter(([_, value])=>value !== undefined))),
            rewrites: ()=>__awaiter(this, void 0, void 0, function*() {
                    var _a;
                    const domain = getDomain(options);
                    const getRemoteScript = (...modifiers)=>{
                        var _a;
                        return ((_a = process.env.NEXT_PLAUSIBLE_TEST_DOMAIN) !== null && _a !== void 0 ? _a : domain) + getScriptPath({
                            scriptName: getRemoteScriptName(domain !== plausibleDomain)
                        }, ...modifiers);
                    };
                    const plausibleRewrites = [
                        {
                            source: getScriptPath(options),
                            destination: getRemoteScript()
                        },
                        ...getCombinations(allModifiers).map((modifiers)=>({
                                source: getScriptPath(options, ...modifiers),
                                destination: getRemoteScript(...modifiers)
                            })),
                        {
                            source: getApiEndpoint(Object.assign(Object.assign({}, nextPlausiblePublicProxyOptions), {
                                basePath: ''
                            })),
                            destination: `${domain}/api/event`
                        }
                    ];
                    if (process.env.NEXT_PLAUSIBLE_DEBUG) {
                        console.log('plausibleRewrites = ', plausibleRewrites);
                    }
                    const rewrites = yield (_a = nextConfig.rewrites) === null || _a === void 0 ? void 0 : _a.call(nextConfig);
                    if (!rewrites) {
                        return plausibleRewrites;
                    } else if (Array.isArray(rewrites)) {
                        return rewrites.concat(plausibleRewrites);
                    } else if (rewrites.afterFiles) {
                        rewrites.afterFiles = rewrites.afterFiles.concat(plausibleRewrites);
                        return rewrites;
                    } else {
                        rewrites.afterFiles = plausibleRewrites;
                        return rewrites;
                    }
                })
        });
    };
}
function PlausibleProvider(props) {
    var _a;
    const { enabled = ("TURBOPACK compile-time value", "development") === 'production' && (!process.env.NEXT_PUBLIC_VERCEL_ENV || process.env.NEXT_PUBLIC_VERCEL_ENV === 'production') } = props;
    const proxyOptions = ("TURBOPACK compile-time truthy", 1) ? {
        trailingSlash: process.env.next_plausible_trailingSlash === 'true',
        basePath: process.env.next_plausible_basePath,
        customDomain: ("TURBOPACK compile-time value", "https://plausible.gitpushoriginmain.com"),
        scriptName: process.env.next_plausible_scriptName,
        subdirectory: process.env.next_plausible_subdirectory
    } : "TURBOPACK unreachable";
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Fragment, null, enabled && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], Object.assign({
        async: true,
        defer: true,
        "data-api": ("TURBOPACK compile-time truthy", 1) ? getApiEndpoint(proxyOptions) : "TURBOPACK unreachable",
        "data-domain": props.domain,
        "data-exclude": props.exclude,
        src: (("TURBOPACK compile-time truthy", 1) ? '' : "TURBOPACK unreachable") + getScriptPath(Object.assign(Object.assign({}, proxyOptions), {
            scriptName: ("TURBOPACK compile-time truthy", 1) ? proxyOptions.scriptName : "TURBOPACK unreachable"
        }), props.trackLocalhost ? 'local' : null, props.manualPageviews ? 'manual' : null, props.pageviewProps ? 'pageview-props' : null, props.trackOutboundLinks ? 'outbound-links' : null, props.exclude ? 'exclusions' : null, props.revenue ? 'revenue' : null, props.trackFileDownloads ? 'file-downloads' : null, props.taggedEvents ? 'tagged-events' : null, props.hash ? 'hash' : null),
        integrity: props.integrity,
        crossOrigin: props.integrity ? 'anonymous' : undefined
    }, typeof props.pageviewProps === 'object' ? Object.fromEntries(Object.entries(props.pageviewProps).map(([k, v])=>[
            `event-${k}`,
            v
        ])) : undefined, props.scriptProps)), enabled && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        id: "next-plausible-init",
        dangerouslySetInnerHTML: {
            __html: `window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`
        },
        nonce: (_a = props.scriptProps) === null || _a === void 0 ? void 0 : _a.nonce
    }), props.children);
}
;
 //# sourceMappingURL=index.esm.js.map
}),
];

//# sourceMappingURL=_3cd293c6._.js.map