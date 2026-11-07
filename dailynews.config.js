// Product configuration for Daily.SharePoint.Admin.News.
//
// CommonJS rather than JSON because the classification rules are RegExps.
// Everything the engine needs that is specific to SharePoint lives here; the
// code in @merill/dailynews-engine is product-neutral and reads from this file.
//
// The source is merill/sharepoint-docs-mirror. The SharePoint and OneDrive admin
// documentation publishes from MicrosoftDocs/OfficeDocs-SharePoint-pr, which is
// not public; learn-mirror rebuilds it from Microsoft Learn four times a day,
// one commit per crawl that found a change, at the path of the source file
// Learn built each page from.
//
// Nearly every article sits flat in SharePoint/SharePointOnline (only home
// sites have a folder of their own), so products are classified from the file
// name rather than the directory.

const ICONS = 'https://github.com/DanielBradley1/msicons';
const FILE = '^sharepoint\\/sharepointonline\\/';
const named = pattern => new RegExp(`${FILE}${pattern}`);

module.exports = {
  site: {
    name: 'Daily SharePoint News',
    host: 'daily.sharepoint.admin.news',
    url: 'https://daily.sharepoint.admin.news',
    description: 'A readable record of what changed across SharePoint Online and OneDrive admin documentation.',
    productName: 'SharePoint Online and OneDrive',
    audience: 'SharePoint and OneDrive administrators'
  },

  // v1 is the site alone: no subscriber email, no Kit workflow.
  email: { enabled: false },

  brand: {
    wordmark: 'Daily SharePoint News',
    ogAlt: 'Daily SharePoint News: SharePoint and OneDrive change intelligence',
    themeStorageKey: 'sharepoint-news-theme',
    tokenStorageKey: 'sharepoint-news-github-token',
    emailEyebrow: 'Daily SharePoint News',
    logo: 'sharepoint-news-logo.png',
    aboutIcon: '/assets/products/sharepoint.svg',
    uiAssets: ['sharepoint-news-logo.png'],
    extraCss: ''
  },

  // Written into persisted state and published records. Never change these
  // once the site is live: see the engine README.
  identity: {
    docEventPrefix: 'sharepoint-docs',
    batchEventPrefix: 'sharepoint-news',
    kitMarkerPrefix: 'daily-sharepoint-news'
  },

  build: { docsCloneDir: 'sharepoint-docs', detailDays: 30 },

  discord: { botName: 'SharePoint Scout' },

  ai: {
    schemaPrefix: 'sharepoint',
    subject: 'SharePoint',
    forbiddenOpeners: ['SharePoint documentation', 'The SharePoint docs', 'SharePoint Online documentation', 'OneDrive documentation'],
    impactBoost: /external sharing|sharing link|sync|known folder|advanced management|data access governance|restricted|retention|version|copilot|agent|search/
  },

  docs: {
    source: { owner: 'merill', repo: 'sharepoint-docs-mirror', branch: 'main' },
    // Learn's rendered titles end in this; it is not part of the page's name.
    titleSuffix: / \| Microsoft Learn$/,
    learnRootUrl: 'https://learn.microsoft.com/en-us/sharepoint/',

    // Any article under SharePoint/SharePointOnline, except the fragment
    // directories, which are included into other pages and have no URL of
    // their own.
    trackedPaths: /^(SharePoint\/SharePointOnline)\/(?!(?:.*\/)?(?:includes?|media|breadcrumb)\/).+\.md$/,

    // Every page publishes under sharepoint/ at its path below SharePointOnline.
    // Learn lowercases the path but ignores case, so mixed-case names resolve.
    learnRoutes: [
      { match: /^SharePoint\/SharePointOnline\/(.*)\.md$/, path: 'sharepoint/$1' }
    ],

    areas: {
      stripPrefix: /^SharePoint\/SharePointOnline\//,
      rules: [
        { match: /^homesites\//, name: 'Home sites and the SharePoint app in Teams' }
      ],
      fallback: 'SharePoint Online'
    }
  },

  analytics: { piqoSite: '' },

  messageCenter: { servicePattern: /\bSharePoint\b|\bOneDrive\b/i },

  links: {
    related: [],
    footer: [],
    stayCurrent: [
      { url: 'https://learn.microsoft.com/en-us/sharepoint/what-s-new-in-sharing-in-targeted-release', label: "What's new in sharing" },
      { url: 'https://learn.microsoft.com/en-us/sharepoint/sync-release-notes', label: 'OneDrive sync app release notes' }
    ],
    followProject: [
      { url: 'https://merill.net', label: 'merill.net' },
      { url: 'https://github.com/merill', label: 'GitHub' }
    ]
  },

  taxonomy: {
    products: [
      { slug: 'sharepoint', name: 'SharePoint Online', short: 'SharePoint', learn: 'https://learn.microsoft.com/en-us/sharepoint/introduction', icon: { sourceName: 'SharePoint', sourcePath: 'sharepoint/microsoft-office-sharepoint-2025.svg', match: 'exact' } },
      { slug: 'onedrive', name: 'OneDrive', short: 'OneDrive', learn: 'https://learn.microsoft.com/en-us/sharepoint/onedrive-overview', icon: { sourceName: 'OneDrive', sourcePath: 'apps/OneDrive.svg', match: 'exact' } },
      { slug: 'sharing', name: 'Sharing, permissions and access', short: 'Sharing and permissions', learn: 'https://learn.microsoft.com/en-us/sharepoint/external-sharing-overview', icon: { sourceName: 'Share', sourcePath: 'Microsoft/dark-blue-Share.svg', match: 'closest' } },
      { slug: 'advanced-management', name: 'SharePoint Advanced Management', short: 'Advanced Management', learn: 'https://learn.microsoft.com/en-us/sharepoint/advanced-management', icon: { sourceName: 'Compliance', sourcePath: 'management-governance/00011-icon-service-Compliance.svg', match: 'closest' } },
      { slug: 'sites', name: 'Sites, hubs and intranet', short: 'Sites and intranet', learn: 'https://learn.microsoft.com/en-us/sharepoint/intranet-get-started', icon: { sourceName: 'Building Multiple', sourcePath: 'Microsoft/dark-blue-Building Multiple.svg', match: 'closest' } },
      { slug: 'search', name: 'SharePoint search', short: 'Search', learn: 'https://learn.microsoft.com/en-us/sharepoint/overview-of-search', icon: { sourceName: 'Search', sourcePath: 'general/10834-icon-service-Search.svg', match: 'closest' } },
      { slug: 'content-management', name: 'Content, versions and storage', short: 'Content and versions', learn: 'https://learn.microsoft.com/en-us/sharepoint/document-library-version-history-limits', icon: { sourceName: 'Files', sourcePath: 'general/10801-icon-service-Files.svg', match: 'closest' } },
      { slug: 'agents', name: 'SharePoint agents and Copilot', short: 'Agents and Copilot', learn: 'https://learn.microsoft.com/en-us/sharepoint/get-started-sharepoint-agents', icon: { sourceName: 'Bot Services', sourcePath: 'ai-machine-learning/10165-icon-service-Bot-Services.svg', match: 'closest' } }
    ],
    defaultProduct: 'sharepoint',

    topics: [
      { slug: 'governance', name: 'Permissions and governance', icon: { sourceName: 'Policy', sourcePath: 'management-governance/10316-icon-service-Policy.svg', match: 'closest' } },
      { slug: 'ai', name: 'AI and Copilot', icon: { sourceName: 'Azure OpenAI', sourcePath: 'ai-machine-learning/03438-icon-service-Azure-OpenAI.svg', match: 'closest' } },
      { slug: 'reporting', name: 'Reports and usage', icon: { sourceName: 'Dashboard', sourcePath: 'general/10015-icon-service-Dashboard.svg', match: 'closest' } },
      { slug: 'architecture', name: 'Planning and deployment', icon: { sourceName: 'Blueprints', sourcePath: 'management-governance/00006-icon-service-Blueprints.svg', match: 'closest' } },
      { slug: 'licensing', name: 'Licensing and billing', icon: { sourceName: 'Cost Management and Billing', sourcePath: 'general/00004-icon-service-Cost-Management-and-Billing.svg', match: 'closest' } },
      { slug: 'troubleshooting', name: 'Troubleshooting', icon: { sourceName: 'Troubleshoot', sourcePath: 'general/10341-icon-service-Troubleshoot.svg', match: 'exact' } },
      { slug: 'developer', name: 'Developer and PowerShell', icon: { sourceName: 'Code', sourcePath: 'general/10787-icon-service-Code.svg', match: 'closest' } },
      { slug: 'fundamentals', name: 'Fundamentals', icon: { sourceName: 'Guide', sourcePath: 'general/10810-icon-service-Guide.svg', match: 'closest' } },
      { slug: 'general', name: 'General', icon: { sourceName: 'Information', sourcePath: 'general/10005-icon-service-Information.svg', match: 'closest' } }
    ],
    defaultTopic: 'general',

    iconSource: { repository: ICONS, revision: '3d57443ed4445be9465ee2fee6a6ce6fd02cf90c' },

    stopwords: 'microsoft sharepoint onedrive online documentation docs update updated updates change changes new for with from into about that this your their has have will are and the how use using overview configure configuration guide learn support service services preview site sites',

    searchAliases: {
      spo: 'sharepoint online',
      odb: 'onedrive for business',
      sam: 'sharepoint advanced management',
      dag: 'data access governance',
      kfm: 'known folder move',
      eeeu: 'everyone except external users',
      rcd: 'restricted content discovery',
      rss: 'restricted sharepoint search',
      b2b: 'business to business guest'
    }
  },

  // First match wins, over "<path> <title> <body>" lowercased, so a pattern
  // built with named() reads the file name. Advanced Management comes before
  // sharing and agents: several of its features are about both.
  classify: {
    products: [
      { slug: 'advanced-management', match: named('(\\S*advanced-management|data-access-governance|powershell-for-data-access-governance|restricted-access-control|restricted-content-discovery|site-access-review|inactive-site-policy|site-ownership-policy|site-lifecycle|change-history-report|request-site-attestations|restricted-site-creation|site-policy-comparison|recent-actions-panel|content-management-assessment|block-download-from-sites|app-enforced-restrictions|onedrive-site-access-restriction|manage-permission-scope)') },
      { slug: 'agents', match: named('(\\S*copilot|\\S*agent|ai-insights|create-sites-with-ai|sharepoint-knowledge-base|connect-organizational-asset-libraries-to-copilot|word-email-summaries|onedrive-document-translation)') },
      { slug: 'onedrive', match: named('(\\S*onedrive|\\S*sync|files-on-demand|redirect-known-folders|restrict-known-folder|deploy-on-windows|deploy-and-configure-on-macos|per-machine-installation|install-previous-sync|exclude-or-uninstall|transition-from-previous-sync|use-silent-account|use-group-policy|prevent-installation|plan-file-sync|enable-auto-acceleration|pre-provision-accounts|change-user-storage|configure-sync-intune|deploy-intune|allow-syncing)') },
      { slug: 'search', match: named('(\\S*search|\\S*crawl|\\S*query|manage-result|use-result|remove-search|managed-propert|crawled-and-managed|refinement-web-part|\\S*authoritative|about-display-templates|make-site-content-searchable|make-sure-content-can-be-found|show-relevant|make-search-results)') },
      { slug: 'sharing', match: named('(\\S*sharing|\\S*external|\\S*b2b|shareable-links|restricted-domains|change-default-sharing-link|control-access|enable-conditional-access|authentication|limit-access|sign-out-inactive|block-file-types|faqs-odspintegration|sensitive-by-default|safeguarding-your-data|\\S*permission|default-sharepoint-groups|manage-security-groups)') },
      { slug: 'content-management', match: named('(\\S*version|\\S*trim|\\S*what-if|\\S*content-type|\\S*term|managed-metadata|lists-|control-lists|\\S*library|file-type|enable-file-requests|retention|set-retention|sharepoint-data-deletion|\\S*storage|restore-deleted|manage-lock-status|intro-to-info-mgmt|document-library|add-columns|remove-columns|change-default-list)') },
      { slug: 'sites', match: named('(homesites\\/|\\S*hub|\\S*sss|\\S*intranet|\\S*home-site|create-communication-site|create-site-collection|delete-site-collection|guided-walkthrough|\\S*brand|site-theme|\\S*navigation|\\S*template|organization-news|organization-assets|modern-root-site|information-architecture|create-a-giving-site|create-training-site|portal-health|make-pages-load-faster|let-users-create-modern|sharepoint_page|manage-site|change-site-address|customize-admin-center-site-list|set-up-site-design|add-sample-site|provision-neo-hub|change-links-list|modern-experience|modernize|publishing-sites|disable-auto-modernization|classic-user-created|teams-connected-sites|notifications|view-popularity)') }
    ],
    topics: [
      { slug: 'troubleshooting', scope: 'title', match: /\b(troubleshoot|known issue|error|faq|frequently asked)\w*/ },
      { slug: 'ai', scope: 'title', match: /\b(copilot|ai|agent|agents|generative)\b/ },
      { slug: 'developer', scope: 'title', match: /\b(api|powershell|graph|sdk|cmdlet|rest|developer|app catalog|spfx)\b/ },
      { slug: 'licensing', scope: 'title', match: /\b(licens|billing|pay-as-you-go|pricing|terms of service)\w*/ },
      { slug: 'architecture', scope: 'title', match: /\b(deploy|plan|migrat|get started|set up|prerequisit|architecture|roll out|rollout)\w*/ },
      { slug: 'reporting', scope: 'title', match: /\b(report|usage|analytics|insights|monitor|health)\w*/ },
      { slug: 'governance', scope: 'title', match: /\b(permission|access|governance|polic|restrict|sharing|security|compliance)\w*/ },
      { slug: 'fundamentals', scope: 'title', match: /\b(overview|what is|learn about|introduction|concepts?)\b/ }
    ]
  },

  copy: {
    rssFeedLabel: 'Subscribe to the Daily SharePoint News RSS feed',
    messageCenterHeading: 'SharePoint and OneDrive in Message Center',
    landing: {
      heading: 'Today in SharePoint and OneDrive',
      blurb: 'Every tracked change across SharePoint Online and OneDrive admin documentation, in plain English.'
    },
    directory: {
      productsLede: 'Every part of SharePoint and OneDrive tracked here, with what changed in each.',
      topicsLede: 'Cross-cutting themes, from permissions and governance to AI and deployment.'
    },
    search: {
      inputLabel: 'Search SharePoint changes',
      placeholder: 'Search SharePoint and OneDrive documentation changes'
    },
    compare: {
      pageTitle: 'Compare SharePoint documentation revisions',
      lede: 'Paste a Microsoft Learn URL to see exactly what changed between two revisions.',
      placeholderUrl: 'https://learn.microsoft.com/en-us/sharepoint/external-sharing-overview',
      mapping: 'SharePoint and OneDrive admin pages map to merill/sharepoint-docs-mirror, rebuilt from Microsoft Learn.'
    },
    dailyEmail: {
      eyebrow: 'Daily SharePoint News',
      intro: 'A short daily summary of what changed across SharePoint Online and OneDrive admin documentation.'
    },
    detail: {
      adminHeading: 'What SharePoint admins need to know',
      adminImpactLabel: 'For SharePoint and OneDrive administrators',
      summaryLabel: 'Change summary',
      summaryDisclosure: 'Summaries are generated from the documentation change itself.'
    },
    footer: {
      featureBlurb: 'Maester Cloud continuously tests your Microsoft 365 security configuration, SharePoint and OneDrive included.',
      tagline: 'Daily.SharePoint.Admin.News: an independent record of SharePoint and OneDrive documentation changes.'
    },
    about: {
      heading: 'About Daily.SharePoint.Admin.News',
      lede: 'A readable daily record of what Microsoft changed across the SharePoint Online and OneDrive admin documentation.',
      whyItExists: [
        'SharePoint and OneDrive hold most of an organisation\'s files, and the admin documentation for sharing, sync, governance and search changes constantly. Most changes are never announced anywhere.',
        'The documentation source is not public, so there is no commit history to read. This site rebuilds one from Microsoft Learn and writes down what changed.'
      ],
      howItWorks: [
        'Four times a day merill/sharepoint-docs-mirror fetches every SharePoint and OneDrive admin page on Microsoft Learn and commits the ones that changed.',
        'Every six hours this site reads that history. Each change is summarised, classified by area and theme, and published with a link to the exact revision that produced it.',
        'Nothing here is official. It is a reading of the public documentation.'
      ],
      emailEyebrow: 'Daily SharePoint News',
      emailBody: 'A short daily summary of what changed across SharePoint Online and OneDrive admin documentation.',
      extraSections: [],
      community: [
        'Built by Merill Fernando as part of the Admin.News network of daily and weekly Microsoft admin editions.'
      ],
      quote: 'The documentation changes every day. Somebody should be reading it.',
      bio: 'Merill Fernando builds tools for Microsoft identity, security and collaboration administrators.'
    }
  }
};
