# SCRAM CA — NorCal Region Hub

A simple, single-page site for staff: offices, contacts, scheduling links, SOPs, forms, coverage, training, and FAQs. All content lives in `config.js`.

## Quick start
1. Deploy the folder (GitHub Pages, Netlify, or Vercel).
2. Edit **`config.js`** to update offices, contacts, links, forms, and calendar embed.
3. Share the site URL with staff.

## Sections
- **Home:** announcement + quick links
- **Offices:** address, hours, notes
- **Contacts:** PMs, regional, office inbox
- **Scheduling:** per-office appointment links (Calendly or otherwise)
- **SOPs & Forms:** link out to PDFs / Google Forms
- **Coverage:** simple weekly overview + region calendar embed
- **Training:** internal learning links
- **FAQs:** common answers

## Customize
- Replace placeholder Calendly URLs.
- Drop your Google Calendar embed URL into `config.js`.
- Add/remove offices, contacts, SOPs, and forms by editing arrays.
- Colors and layout live in `styles.css`.

## Notes
- No backend, works anywhere.
- Mobile friendly.
- Search filters any card/list content live on the page.
