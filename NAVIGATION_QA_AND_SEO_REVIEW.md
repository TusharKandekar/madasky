# Madasky Navigation QA and SEO Migration Review

This package updates desktop navigation, the hamburger menu, footer links, supporting-page navigation and the manufacturing internal-linking pattern. It follows the Word handoff's Page 44 action map and related footer/linking instructions.

## Active navigation

- Services: Turnkey Factory Projects, Operations Excellence, AI-Enabled Manufacturing Intelligence, Workforce Readiness & Key Talent Support; AI group also links Fabric & Raw Material Optimization, Production Planning & Scheduling, Digital Factory & MES.
- Industries: Home Textiles, Apparel, Textiles, Technical Textiles.
- Insights: Insights, Case Studies and Factory Diagnostic, with existing Events/Gallery/Videos retained as resources.
- Footer: Solutions, Intelligence Solutions, Industries, Resources, Company, with Case Studies linking to `/case-studies`.
- Mobile: the same current manufacturing focus. Legacy consulting categories are removed from the active hamburger navigation, but their URLs remain available for existing SEO traffic.

## Old URL decisions awaiting SEO evidence

**Do not delete, redirect or noindex these URLs without reviewing Search Console, traffic, backlinks and existing indexed content.** The Word handoff explicitly requests that review before SEO migration.

| Existing page | Proposed destination / new role | Decision |
| --- | --- | --- |
| `/factory-technical-design-consulting` | `/turnkey-factory-projects` | Old URL retained; primary links now use new URL; 301 pending SEO review. |
| `/digital-transformation` | `/ai-manufacturing-intelligence` | Old URL retained; primary links now use new URL; rewrite or 301 pending SEO review. |
| `/people-and-organisational-performance-consulting` | `/workforce-readiness-talent-support` | Old URL retained; primary links now use new URL; migration pending SEO review. |
| `/plant-layout-consulting` | Supporting Turnkey Factory Projects page | Retained and linked. Content refresh can be reviewed independently. |
| `/process-and-material-flow-consulting` | Supporting Turnkey/Operations page | Retained and linked. Content refresh can be reviewed independently. |
| `/automation-in-manufacturing-consulting` | Supporting AI/Turnkey article/service | Retained; no longer in active primary navigation. |
| `/warehousing-solutions-consulting` | Supporting material flow topic | Retained; removed from active primary navigation. |
| `/supply-chain-management-consulting` | Optional archive/support | Retained; removed from active primary navigation. |
| `/business-strategy-consulting` | Legacy content | Retained; removed from active primary navigation. |
| `/growth-marketing-consulting` | Legacy content | Retained; removed from active primary navigation. |
| `/financial-strategy-consulting` | Legacy content | Retained; removed from active primary navigation. |
| `/msme-growx-consulting` | Separate/legacy offering | Retained; removed from active primary navigation. |
| `/sustainability-consulting` | Supporting factory topic | Retained; removed from active primary navigation. |

## Content publishing still needs editorial approval

- The new `/case-studies` page indexes the one already published, linked case study. Two homepage preview cards have no verified standalone URLs and intentionally remain unlinked; publish those only after the client approves case content and figures.
- The Insights index prioritizes manufacturing content but does not delete older CMS articles. Review articles in the CMS for relevance and update/demote legacy broad-consulting topics.
- Individual Insights now include context-aware related service and industry links. Verify their relevance when publishing new material.
- The homepage uses factory/manufacturing terminology; old generic Quick Sprint *data* was replaced. The legacy commented presentation blocks have not been re-enabled.

## Manual localhost recheck

1. Desktop: open Services, Industries, Insights; click every heading and child link.
2. Hamburger: open Services/Industries/Insights, verify all labels and destinations, including on a phone-width viewport.
3. Check `/turnkey-factory-projects`, `/operations-excellence-consulting`, `/ai-manufacturing-intelligence`, `/workforce-readiness-talent-support`.
4. Check `/fabric-raw-material-optimization`, `/production-planning-scheduling`, `/digital-factory-mes`.
5. Check all four `/industries/...` pages and `/case-studies`.
6. Check the secondary navigation on `/plant-layout-consulting`, `/process-and-material-flow-consulting`, `/technical-consulting`, and `/manpower-planning-consulting`.
7. In Insights, open a blog and check its service, industry and Factory Diagnostic links. Verify its CMS-generated content.
8. Review the published case-study link and confirm the live content and measured results with the client.
9. Run Search Console and backlink checks before any old URL redirect/noindex decision.
