// All editable content lives here. Replace placeholders as needed.
const HUB = {
  contactEmail: "sanmateooffice@scramca.com",
  announcement: {
    enabled: true,
    text: "Welcome to the NorCal Region Hub. Bookmark this page. If a link looks wrong, ping Operations.",
  },
  quickLinks: [
    { label: "Make a Payment (RWC)", url: "https://calendly.com/placeholder/make-a-payment" },
    { label: "Installations", url: "https://calendly.com/placeholder/installation" },
    { label: "Weekly Downloads", url: "https://calendly.com/placeholder/weekly-download" },
    { label: "Maintenance / Swap", url: "https://calendly.com/placeholder/maintenance" }
  ],
  offices: [
    {
      id: "RWC",
      name: "Redwood City",
      county: "San Mateo",
      address: "708 Winslow St, Redwood City, CA",
      email: "sanmateooffice@scramca.com",
      hours: "Mon–Fri, 9:00–5:00 (by appointment)",
      notes: "Primary hub for San Mateo County.",
      calendly: {
        installation: "https://calendly.com/placeholder/installation",
        maintenance: "https://calendly.com/placeholder/maintenance",
        weekly_download: "https://calendly.com/placeholder/weekly-download",
        payment: "https://calendly.com/placeholder/make-a-payment"
      }
    },
    {
      id: "MTY",
      name: "Monterey",
      county: "Monterey",
      address: "Address TBD, Monterey, CA",
      email: "monterey@scramca.com",
      hours: "Mon–Fri, 9:00–5:00 (by appointment)",
      notes: "High client volume; see coverage schedule for field days.",
      calendly: {}
    },
    {
      id: "SAC",
      name: "Sacramento",
      county: "Sacramento",
      address: "Address TBD, Sacramento, CA",
      email: "sacramento@scramca.com",
      hours: "Mon–Fri, 9:00–5:00 (by appointment)",
      notes: "",
      calendly: {}
    },
    {
      id: "SOL",
      name: "Solano",
      county: "Solano",
      address: "Address TBD, Solano County, CA",
      email: "solano@scramca.com",
      hours: "Mon–Fri, 9:00–5:00 (by appointment)",
      notes: "Collections pilots may run here.",
      calendly: {}
    },
    {
      id: "BUT",
      name: "Butte",
      county: "Butte",
      address: "Address TBD, Butte County, CA",
      email: "butte@scramca.com",
      hours: "Mon–Fri, 9:00–5:00 (by appointment)",
      notes: "",
      calendly: {}
    }
  ],
  contacts: [
    { role: "Regional Program Manager", name: "Aaron Rhodes", phone: "", email: "arhodes@scramsystems.com" },
    { role: "Program Manager", name: "Mari Hernandez", phone: "", email: "" },
    { role: "Program Manager", name: "Kyla Tomlin", phone: "", email: "" },
    { role: "Admin / Office", name: "San Mateo Office", phone: "", email: "sanmateooffice@scramca.com" }
  ],
  sops: [
    { title: "Client Intake & Installation", url: "#", desc: "Step-by-step for new client intake and device installation." },
    { title: "Weekly Download Procedure", url: "#", desc: "How to handle weekly downloads, exceptions, and escalations." },
    { title: "Maintenance & Swap", url: "#", desc: "Troubleshooting, replacements, and documentation." },
    { title: "Court Appearance Support", url: "#", desc: "Preparation, materials, and follow-up communication." }
  ],
  forms: [
    { title: "Incident Report", url: "#", desc: "Complete for equipment issues or client incidents." },
    { title: "Client Update", url: "#", desc: "Status updates to send to probation partners." },
    { title: "Supply Request", url: "#", desc: "Order straps, chargers, beacons, etc." }
  ],
  coverage: [
    { day: "Mon", office: "RWC", staff: "Mari / Aaron", notes: "Court AM, installs PM" },
    { day: "Tue", office: "MTY", staff: "Tatiana (field)", notes: "" },
    { day: "Wed", office: "SAC", staff: "Kyla (office)", notes: "" },
    { day: "Thu", office: "SOL", staff: "Ajee & Eden", notes: "Collections push" },
    { day: "Fri", office: "RWC", staff: "Aaron", notes: "Downloads" }
  ],
  calendarEmbed: "https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%230c0e14&ctz=America%2FLos_Angeles",
  training: [
    { title: "APM Level 1", url: "#", desc: "Foundations: operations, client flow, reporting.", owner: "Regional" },
    { title: "Collections Pilot", url: "#", desc: "Targeting inactive lists. KPIs and scripts.", owner: "Solano" }
  ],
  faqs: [
    { q: "Where do I schedule a client?", a: "Use the Scheduling tab and pick the office’s Calendly link that matches the appointment type." },
    { q: "Who do I call for equipment problems?", a: "See Contacts → Program Manager for your office, or file an Incident form if non-urgent." },
    { q: "Where are the SOPs?", a: "SOPs tab. If a PDF is missing, ping Operations." }
  ]
};
