// Daily SharePoint News against the engine's shared product checks, plus what
// is particular to SharePoint: one flat folder, so products come from file names.
const path = require('node:path');
const { defineProductConformance } = require('@merill/dailynews-engine/product-conformance');

defineProductConformance({
  root: path.join(__dirname, '..'),
  // Names this product must not carry, from files copied out of its siblings.
  // Teams, Purview, Entra and Intune all appear in SharePoint's own docs, so
  // only names with no business here are listed.
  foreignNames: /\b(defender|memdocs|autopilot|windows server|purview-docs|daily purview|daily defender)\b/i,
  mirrorState: 'sharepoint-docs/.learn-mirror/state.json',
  // Pages Learn publishes under a slug other than their file name. Learn
  // redirects the file-name URL, so these links still land.
  mirrorExceptions: {
    'SharePoint/SharePointOnline/homesites/sharepoint-app-in-teams-plan.md': 'sharepoint/home-site-plan',
    'SharePoint/SharePointOnline/intelligent-intranet-overview.md': 'sharepoint/intelligent-internet-overview',
    'SharePoint/SharePointOnline/version-overview.md': 'sharepoint/terms-of-service-version-history'
  },
  trackedSamples: ['SharePoint/SharePointOnline/external-sharing-overview.md', 'SharePoint/SharePointOnline/homesites/news-reader.md'],
  routeCases: {
    'SharePoint/SharePointOnline/external-sharing-overview.md': 'sharepoint/external-sharing-overview',
    'SharePoint/SharePointOnline/homesites/news-reader.md': 'sharepoint/homesites/news-reader',
    'SharePoint/SharePointOnline/Prepare-IE11.md': 'sharepoint/Prepare-IE11'
  },
  productCases: {
    'sharepoint/sharepointonline/redirect-known-folders.md': 'onedrive',
    'sharepoint/sharepointonline/sync-health.md': 'onedrive',
    'sharepoint/sharepointonline/turn-external-sharing-on-or-off.md': 'sharing',
    'sharepoint/sharepointonline/data-access-governance-reports.md': 'advanced-management',
    'sharepoint/sharepointonline/restricted-access-control.md': 'advanced-management',
    'sharepoint/sharepointonline/get-started-sharepoint-agents.md': 'agents',
    'sharepoint/sharepointonline/manage-search-schema.md': 'search',
    'sharepoint/sharepointonline/document-library-version-history-limits.md': 'content-management',
    'sharepoint/sharepointonline/homesites/news-reader.md': 'sites',
    'sharepoint/sharepointonline/create-hub-site.md': 'sites',
    'sharepoint/sharepointonline/introduction.md': 'sharepoint'
  }
});
