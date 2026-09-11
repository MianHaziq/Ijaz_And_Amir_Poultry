/* Single source of truth for everything the client supplied on their
   letterhead, business card and government registration certificate.
   Nothing here is invented — update this file and the whole site follows. */

export const site = {
  name: "Ijaz & Amir Poultry Farm",
  shortName: "Ijaz & Amir",
  tagline: "Healthy Birds • Better Tomorrow",
  script: "Poultry Today for a Healthier Tomorrow",
  motto: "Modern Farming, Stronger Pakistan",
  pillarsLine: ["Trust", "Quality", "Progress"],

  proprietor: "Ch. Abdul Ijaz",

  phones: [
    { display: "0342-6048881", tel: "+923426048881", wa: "923426048881" },
    { display: "0324-4364786", tel: "+923244364786", wa: "923244364786" },
  ],

  email: "ijazahmad1987555@gmail.com",

  address: {
    line1: "Village Burnali, P/O Burnali",
    line2: "Tehsil Kharian, District Gujrat",
    region: "Punjab, Pakistan",
    full: "Village Burnali, P/O Burnali, Teh. Kharian, Distt. Gujrat, Punjab, Pakistan",
  },

  /* From the Government of the Punjab, Livestock & Dairy Development
     Department certificate of registration (Schedule-VI, Rule 3). */
  registration: {
    number: "18/DLGRW/PF/GT/20",
    authority: "Livestock & Dairy Development Department, Government of the Punjab",
    issuedBy: "Directorate of Livestock, Gujrat Division",
    act: "Punjab Poultry Production Act, 2016",
    category: "Broiler",
    validUntil: "31 December 2026",
  },

  /* Hash entries are sections of the home page; a leading "/" marks a
     real route. The header resolves them per page - see Header.tsx. */
  nav: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "/about" },
    { label: "Our Farm", href: "#farm" },
    { label: "Our Practices", href: "#practices" },
    { label: "Sustainability", href: "#sustainability" },
    { label: "Contact Us", href: "#contact" },
  ],
} as const;

export const mapsQuery = encodeURIComponent("Burnali, Kharian, Gujrat, Punjab, Pakistan");
