# daily-sharepoint

[daily.sharepoint.admin.news](https://daily.sharepoint.admin.news): a readable
daily record of what changed across SharePoint Online and OneDrive admin
documentation.

This repository holds the product: its configuration, its assets, and its
generated site. The generator, the workflows' steps and the test suite live in
[merill/dailynews-engine](https://github.com/merill/dailynews-engine).

## What it tracks

[`merill/sharepoint-docs-mirror`](https://github.com/merill/sharepoint-docs-mirror):
every SharePoint and OneDrive admin page on Microsoft Learn, rebuilt as Markdown
by [learn-mirror](https://github.com/merill/learn-mirror) four times a day. The
pages publish from `MicrosoftDocs/OfficeDocs-SharePoint-pr`, which is not public,
so the mirror's history is the only change history there is. It begins on
4 November 2026; the first commit is the initial import, and the archive starts
the day after.

Every page publishes at `sharepoint/<path below SharePointOnline>`. The test
suite checks that route against every URL the crawl fetched. Three pages are
known to publish under a different slug (`homesites/sharepoint-app-in-teams-plan`,
`intelligent-intranet-overview`, `version-overview`); Learn redirects their
file-name URLs.

Almost every article sits flat in one folder, so areas (OneDrive, sharing and
permissions, Advanced Management, search, sites and intranet, content and
versions, agents) are classified from file names. Platform administration pages
(apps, profiles, migration, network) stay under SharePoint Online.

## v1 has no email

`email: { enabled: false }`. The site is the whole product for now.

## Working on it

```bash
npm run engine:link     # links ../dailynews-engine into node_modules
npm run docs:clone      # clones the mirror into sharepoint-docs/
npm test
TZ=UTC npm run build:site
npm run dev
```

`TZ=UTC` matters: without it every date bucket shifts.

## Deploying

Cloudflare Pages, connected to this repository: production branch `main`, no
build command, output directory `website`. Repository secrets: `OPENAI_API_KEY`
(summaries); optionally `DISCORD_WEBHOOK_URL` and `HEALTHCHECKS_PING_URL`.
