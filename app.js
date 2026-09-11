document.documentElement.classList.add("js");

// TEST STRIPE LINK - REPLACE WITH LIVE LINK BEFORE PUBLIC LAUNCH
const DONATION_URL = "https://buy.stripe.com/test_00w9AVdaD0dQ4gm6LJ8N200";

const siteConfig = {
  socials: {
    instagram: "https://www.instagram.com/the_mochifoundation/",
  },
  forms: {
    endpoint: "https://api.web3forms.com/submit",
    accessKey: "dabe011c-5a92-49c1-92d3-3c865ff41739",
    recipient: "themochifoundation.team@gmail.com",
    fromName: "The Mochi Foundation Website",
  },
};

const connections = [
  { name: "Hopelink", logo: "public/images/partners/hopelink.png", relationship: "", url: "", description: "", featured: true },
  { name: "The Freckles Foundation", logo: "public/images/partners/freckles-foundation.png", relationship: "", url: "", description: "", featured: true },
  { name: "MOD Pizza", logo: "public/images/partners/mod-pizza.png", relationship: "", url: "", description: "", featured: true },
  { name: "Chipotle", logo: "public/images/partners/chipotle.png", relationship: "", url: "", description: "", featured: true },
  { name: "Seattle Humane", logo: "public/images/partners/seattle-humane.png", relationship: "", url: "", description: "", featured: true },
  { name: "Seattle Animal Shelter", logo: "public/images/partners/seattle-animal-shelter.png", relationship: "", url: "", description: "", featured: true },
  { name: "Jubilee REACH", logo: "public/images/partners/jubilee-reach.png", relationship: "", url: "", description: "", featured: true },
  { name: "Eastlake High School", logo: "public/images/partners/eastlake-high-school.png", relationship: "", url: "", description: "", featured: true },
  { name: "All The Best Pet Care", logo: "public/images/partners/all-the-best-pet-care.png", relationship: "", url: "", description: "", featured: true },
];

const stats = [
  { id: "supplies", value: "500+", counter: { target: 500, suffix: "+" }, label: "Pet supplies", note: "Provided", detailTitle: "Supplies ready to share.", detail: "This total is part of Mochi’s broader community work. It is not a promise that one donation buys a fixed item.", image: "public/images/community/pet-supplies-cart.png", imageAlt: "A cart carrying donated pet food and supplies" },
  { id: "families", value: "400+", counter: { target: 400, suffix: "+" }, label: "Families", note: "Helped", detailTitle: "Support reaches real people.", detail: "Mochi’s work is centered on helping families access basic pet supplies when resources are available.", image: "public/images/community/team-at-all-the-best.png", imageAlt: "Mochi students with a pet-care partner and donated supplies" },
  { id: "raised", value: "$10K+", counter: { prefix: "$", target: 10000, suffix: "+", compact: true }, label: "Raised", note: "Community-wide total", detailTitle: "Community support adds up.", detail: "This figure reflects Mochi’s broader fundraising and community support work, not website donations alone.", image: "public/images/community/team-at-all-the-best.png", imageAlt: "Mochi students with a pet-care partner and donated supplies" },
  { id: "projects", value: "10+", counter: { target: 10, suffix: "+" }, label: "Community projects", note: "Drives · events · service", detailTitle: "Projects are built together.", detail: "Supply days, volunteer work, and community projects give students and neighbors practical ways to help.", image: "public/images/community/pet-supplies-room.png", imageAlt: "Pet food and supplies gathered for a community project" },
];

const programs = [
  { title: "Pet support", label: "Pet support", description: "Help connect pet owners with essential supplies and available community resources.", href: "#support", image: "public/images/community/pet-supplies-cart.png" },
  { title: "Community projects", label: "Community projects", description: "Organize donation drives, volunteer activities, fundraisers, and community events.", href: "#events", image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=82" },
  { title: "Youth leadership", label: "Youth leadership", description: "Give students opportunities to lead service projects and build Mochi chapters.", href: "chapters/index.html", image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=82" },
  { title: "Partnerships", label: "Partnerships", description: "Work with schools, businesses, pet organizations, and community groups.", href: "partners/index.html", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=82" },
];

const events = [
  { title: "Back-to-school pet supply drive", date: "September 14, 2026", type: "upcoming", category: "community", location: "Bellevue · Washington", description: "A community drop-off day for food, leashes, bowls, and other everyday pet supplies.", image: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?auto=format&fit=crop&w=1200&q=82" },
  { title: "Volunteer sorting day", date: "September 28, 2026", type: "upcoming", category: "volunteer", location: "Eastside · Washington", description: "Help sort and prepare donated supplies for local pet-support requests.", image: "https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?auto=format&fit=crop&w=900&q=82" },
  { title: "Spring community care day", date: "Completed · May 2026", type: "past", category: "community", location: "Community event", description: "A completed project page will share photos, partners, and verified results here.", image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=82" },
];

const supportCategories = [
  { id: "pet-food", number: "01", title: "Pet food", shortTitle: "Pet food", heading: "Food for everyday care.", description: "Helping families keep their pets fed when an extra bag of food can make a real difference.", examples: "Pet food, treats, or everyday meals.", image: "public/images/community/pet-supplies-cart.png", imageAlt: "Pet food and other donated supplies gathered on a cart" },
  { id: "collars-leashes", number: "02", title: "Collars & leashes", shortTitle: "Collars & leashes", heading: "Basic gear for everyday safety.", description: "Basic gear that helps dogs stay safe during walks and everyday life.", examples: "Collars, leashes, harnesses, or walking gear.", image: "public/images/community/pet-supplies-room.png", imageAlt: "Pet-care supplies including walking gear gathered for a Mochi project" },
  { id: "bowls-basics", number: "03", title: "Bowls & basic supplies", shortTitle: "Bowls & basics", heading: "The things a pet uses every day.", description: "Simple supplies that help make feeding, walking, and caring for a pet a little easier.", examples: "Bowls, carriers, bedding, or other basics.", image: "public/images/community/pet-supplies-room.png", imageAlt: "Donated pet supplies and a carrier gathered for a Mochi project" },
  { id: "hygiene-care", number: "04", title: "Hygiene & care", shortTitle: "Hygiene & care", heading: "Clean, comfortable, cared for.", description: "Everyday supplies that help pets stay clean, comfortable, and cared for.", examples: "Hygiene products, grooming supplies, or care items.", image: "public/images/community/team-at-all-the-best.png", imageAlt: "Mochi students and a pet-care partner with donated supplies" },
  { id: "transport-more", number: "05", title: "Transport & other needs", shortTitle: "Transport & more", heading: "Help with the next step.", description: "When possible, Mochi helps connect families with other practical pet-support needs.", examples: "Transport support, storage, or another practical need.", image: "public/images/community/community-car.png", imageAlt: "Mochi volunteers moving supplies near a vehicle" },
  { id: "community-projects", number: "06", title: "Community projects", shortTitle: "Community projects", heading: "More ways to show up.", description: "Community projects give students and neighbors ways to organize, volunteer, and support pets together.", examples: "Drive materials, volunteer projects, or outreach needs.", image: "public/images/community/team-at-all-the-best.png", imageAlt: "Mochi students and a pet-care partner working together" },
];

const donationLevels = [
  { amount: "$10", title: "Basic pet essentials", description: "Can help provide everyday items such as bowls, treats, hygiene supplies, or other small pet-care essentials." },
  { amount: "$25", title: "Food & daily care", description: "Can help cover pet food or a combination of everyday supplies for a family." },
  { amount: "$50", title: "A pet care bundle", description: "Can help provide a larger set of essentials such as food, bowls, a leash, hygiene products, and other basic supplies." },
  { amount: "$100", title: "Support a family", description: "Can help Mochi put together a more complete set of pet supplies for a family that needs support." },
];

const careKitItems = [
  { id: "food", label: "Food", detail: "Everyday meals and treats" },
  { id: "walking", label: "Leash / collar", detail: "Basic gear for safe walks" },
  { id: "bowls", label: "Bowls", detail: "Simple feeding essentials" },
  { id: "hygiene", label: "Hygiene supplies", detail: "Everyday care items" },
  { id: "comfort", label: "Toys / comfort", detail: "A little comfort for home" },
];

const currentNeedStatusOptions = ["ALL", "HIGH NEED", "NEEDED", "CURRENTLY COVERED"];
// These are editable starting examples. Update the status and note before publishing a live supply list.
const currentNeeds = [
  { number: "01", category: "Dog Food", status: "HIGH NEED", note: "Update this note with the current food request.", image: "public/images/community/needs/dog-food-original.png", imageAlt: "Original dog food package" },
  { number: "02", category: "Leashes & Collars", status: "NEEDED", note: "Update this note with current sizes or quantities.", image: "public/images/community/needs/collar-leash-mochi.png", imageAlt: "Blue dog collar and leash set with M.O.C.H.I. branding" },
  { number: "03", category: "Bowls", status: "NEEDED", note: "Update this note when the supply list changes.", image: "public/images/community/needs/bowl-mochi.png", imageAlt: "Red pet bowl with M.O.C.H.I. branding" },
  { number: "04", category: "Hygiene Supplies", status: "CURRENTLY COVERED", note: "Update this status as inventory changes.", image: "public/images/community/needs/hygiene-mochi.png", imageAlt: "Pet grooming and hygiene supplies with M.O.C.H.I. branding" },
  { number: "05", category: "Toys & Comfort", status: "NEEDED", note: "Add a specific item here when a current need is confirmed.", image: "public/images/community/needs/toy-mochi.png", imageAlt: "Red rubber dog toy with M.O.C.H.I. branding" },
  { number: "06", category: "Other Essentials", status: "NEEDED", note: "Add a specific item here when a current need is confirmed.", image: "public/images/community/needs/care-kit-mochi.png", imageAlt: "Dog and a collection of pet-care essentials with M.O.C.H.I. branding" },
];

const chapterQuizQuestions = [
  { question: "Do you have a few students or community members who want to help?", choices: ["Yes, we do", "Not yet"] },
  { question: "Could your group meet or communicate regularly?", choices: ["Yes, we can", "We’re still figuring that out"] },
  { question: "Do you have an idea for a pet-support project?", choices: ["Yes, we have an idea", "We need help choosing one"] },
  { question: "Would you be able to organize one small next step?", choices: ["Yes, we can start small", "We need a little guidance"] },
  { question: "Are you ready to talk with Mochi about what comes next?", choices: ["Yes, let’s talk", "Almost"] },
];

const projectStories = [
  {
    title: "Supply support, close to home.",
    image: "public/images/community/pet-supplies-cart.png",
    imageAlt: "Donated pet food and supplies gathered on a cart",
    organization: "",
    location: "",
    date: "",
    description: "Families may need a little extra help finding everyday pet supplies.",
    impact: "Supplies were ready to support pets and families. Add verified project details here.",
    projectUrl: "",
    steps: [
      ["THE NEED", "Families may need a little extra help finding everyday pet supplies."],
      ["WHAT WE DID", "Mochi volunteers helped sort and share practical pet-care items."],
      ["WHO CAME TOGETHER", "Students, community members, and local pet-support groups."],
      ["THE RESULT", "Supplies were ready to support pets and families. Add verified project details here."],
    ],
  },
  {
    title: "Gathering the pieces.",
    image: "public/images/community/team-at-all-the-best.png",
    imageAlt: "Mochi students with a pet-care partner and donated supplies",
    organization: "",
    location: "",
    date: "",
    description: "Pet care takes more than one item, and small essentials can add up.",
    impact: "A shared collection made it easier to prepare practical support.",
    projectUrl: "",
    steps: [
      ["THE NEED", "Pet care takes more than one item, and small essentials can add up."],
      ["WHAT WE DID", "The team gathered food, gear, and other supplies in one place."],
      ["WHO CAME TOGETHER", "Students and neighbors each brought time, supplies, or a helping hand."],
      ["THE RESULT", "A shared collection made it easier to prepare practical support."],
    ],
  },
  {
    title: "Showing up together.",
    image: "public/images/community/pet-supplies-room.png",
    imageAlt: "Pet food, carriers, leashes, and other supplies gathered for a project",
    organization: "",
    location: "",
    date: "",
    description: "Good supplies still need people to organize, move, and deliver them.",
    impact: "The work moved from a collection of items toward real community support.",
    projectUrl: "",
    steps: [
      ["THE NEED", "Good supplies still need people to organize, move, and deliver them."],
      ["WHAT WE DID", "Volunteers loaded and moved supplies as part of the project work."],
      ["WHO CAME TOGETHER", "Mochi students and community helpers worked side by side."],
      ["THE RESULT", "The work moved from a collection of items toward real community support."],
    ],
  },
];

const faqItems = [
  {
    label: "Request Help",
    question: "How does requesting pet support work?",
    answer: "Mochi works to connect pet owners with available supplies and community resources when possible. Use the request form to tell us what would help; submitting a request does not guarantee support.",
  },
  {
    label: "Donate",
    question: "What does a donation support?",
    answer: "Donations support Mochi’s broader community work, including pet supplies, community projects, and direct support when resources are available.",
  },
  {
    label: "Start a Chapter",
    question: "How can I start a Mochi chapter?",
    answer: "Start with a few students or community members, choose a small pet-support project, and use Mochi’s readiness guide to plan the next step.",
  },
  {
    label: "Volunteer",
    question: "How can I volunteer?",
    answer: "Volunteer by showing up for a project, supply drive, or event. Visit Events for current opportunities.",
  },
];

// Add only public organization/business locations here. Private family addresses never belong in this list.
// Leave category, relationship, description, image, and projectUrl blank until they are verified.
const impactLocations = [
  {
    name: "Eastlake High School",
    address: "400 228th Ave NE, Sammamish, WA 98074",
    city: "Sammamish",
    latitude: 47.613401,
    longitude: -122.030803,
    category: "",
    relationship: "",
    description: "",
    image: "",
    projectUrl: "",
  },
  {
    name: "All The Best Pet Care - Redmond",
    address: "17875 Redmond Way, Redmond, WA 98052",
    city: "Redmond",
    latitude: 47.666576,
    longitude: -122.102059,
    category: "",
    relationship: "",
    description: "",
    image: "",
    projectUrl: "",
  },
  {
    name: "Jubilee REACH",
    address: "14200 SE 13th Pl, Bellevue, WA 98007",
    city: "Bellevue",
    latitude: 47.580804,
    longitude: -122.143767,
    category: "",
    relationship: "",
    description: "",
    image: "",
    projectUrl: "",
  },
  {
    name: "Seattle Humane",
    address: "13212 SE Eastgate Way, Bellevue, WA 98005",
    city: "Bellevue",
    latitude: 47.581026,
    longitude: -122.164147,
    category: "",
    relationship: "",
    description: "",
    image: "",
    projectUrl: "",
  },
  {
    name: "Chipotle - Sammamish",
    address: "22704 SE 4th St, Sammamish, WA 98074",
    city: "Sammamish",
    latitude: 47.605826,
    longitude: -122.035960,
    category: "",
    relationship: "",
    description: "",
    image: "",
    projectUrl: "",
  },
  {
    name: "MOD Pizza - Sammamish",
    address: "22833 NE 8th St, Sammamish, WA 98074",
    city: "Sammamish",
    latitude: 47.616277,
    longitude: -122.033565,
    category: "",
    relationship: "",
    description: "",
    image: "",
    projectUrl: "",
  },
  {
    name: "Hopelink - Redmond",
    address: "8990 154th Ave NE, Redmond, WA 98052",
    city: "Redmond",
    latitude: 47.681820,
    longitude: -122.134490,
    category: "",
    relationship: "",
    description: "",
    image: "",
    projectUrl: "",
  },
  {
    name: "Seattle Animal Shelter",
    address: "2061 15th Ave W, Seattle, WA 98119",
    city: "Seattle",
    latitude: 47.638260,
    longitude: -122.376610,
    category: "",
    relationship: "",
    description: "",
    image: "",
    projectUrl: "",
  },
  {
    // City-level public location only; private foster and recipient addresses never belong on this map.
    name: "The Freckles Foundation & Animal Rescue",
    address: "Silver Spring, MD 20902",
    city: "Silver Spring, MD",
    latitude: 38.990665,
    longitude: -77.026088,
    category: "",
    relationship: "",
    description: "",
    image: "",
    projectUrl: "https://frecklesfoundation.org/",
  },
];

const communityPhotos = [
  { photo: "public/images/community/pet-supplies-cart.png", alt: "A cart carrying donated pet food and supplies", label: "Loading up", caption: "Hands-on community work." },
  { photo: "public/images/community/team-at-all-the-best.png", alt: "Mochi students with a pet-care partner and donated supplies", label: "Together", caption: "Care starts with a team." },
  { photo: "public/images/community/pet-supplies-room.png", alt: "Pet food and supplies gathered for a community project", label: "Preparing", caption: "Working through the next step." },
  { photo: "public/images/community/pet-supplies-cart.png", alt: "A cart carrying donated pet food and supplies", label: "Pet care", caption: "Sharing everyday support." },
  { photo: "public/images/community/team-at-all-the-best.png", alt: "Mochi students working with a pet-care partner", label: "Community help", caption: "Making room for care." },
  { photo: "public/images/community/pet-supplies-room.png", alt: "A collection of pet supplies ready for community support", label: "On the move", caption: "Students showing up to help." },
];

const initials = (name) => name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase();
const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[character]));
const connectionId = (name) => `org-${String(name).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
const relativePath = (path) => path.startsWith("../") || path.startsWith("http") ? path : path;

function pendingRelationship(connection) {
  return connection.relationship ? `<span class="carousel-relationship">${escapeHtml(connection.relationship)}</span>` : "";
}

function renderCarouselItems(items) {
  const assetRoot = document.body.dataset.assetRoot || "";
  return items.map((connection, index) => {
    const logoPath = connection.logo && !/^https?:\/\//.test(connection.logo) ? `${assetRoot}${connection.logo}` : connection.logo;
    const logo = logoPath ? `<img src="${escapeHtml(logoPath)}" alt="" loading="lazy" />` : `<span class="carousel-mark" aria-hidden="true">${initials(connection.name)}</span>`;
    const body = `<span class="carousel-logo-frame">${logo}</span><span class="carousel-item-copy"><span class="carousel-name">${escapeHtml(connection.name)}</span>${pendingRelationship(connection)}</span>`;
    const destination = connection.url || `partners/index.html#${connectionId(connection.name)}`;
    const externalAttributes = connection.url && /^https?:\/\//.test(connection.url) ? ` target="_blank" rel="noopener noreferrer"` : "";
    const content = `<a class="carousel-item" href="${escapeHtml(destination)}" data-carousel-index="${index}" role="listitem"${externalAttributes}>${body}</a>`;
    return content;
  }).join("");
}

function setupCarousel() {
  const viewport = document.getElementById("organization-carousel");
  const track = document.getElementById("carousel-track");
  if (!viewport || !track) return;
  const items = connections;
  track.innerHTML = `<div class="carousel-group">${renderCarouselItems(items)}</div><div class="carousel-group" aria-hidden="true">${renderCarouselItems(items)}</div>`;
  const groups = [...track.querySelectorAll(".carousel-group")];
  const carouselItems = [...groups[0].querySelectorAll(".carousel-item")];
  groups[1]?.querySelectorAll(".carousel-item").forEach((item) => { item.tabIndex = -1; });
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let loopWidth = 1;
  let offset = 0;
  let lastTime = 0;
  let paused = reducedMotion;
  let dragging = false;
  let pointerStart = 0;
  let dragStartOffset = 0;
  let pointerMoved = false;
  let suppressClick = false;
  const measure = () => {
    loopWidth = Math.max(1, groups[0]?.getBoundingClientRect().width || track.scrollWidth / 2);
    if (offset >= loopWidth) offset %= loopWidth;
    track.style.transform = `translate3d(${-offset}px, 0, 0)`;
  };
  const setPaused = (value) => {
    paused = reducedMotion || value;
  };
  const frame = (time) => {
    if (!lastTime) lastTime = time;
    const elapsed = Math.min(48, time - lastTime);
    if (!paused && !dragging) offset += elapsed * .055;
    if (loopWidth && offset >= loopWidth) offset %= loopWidth;
    track.style.transform = `translate3d(${-offset}px, 0, 0)`;
    lastTime = time;
    if (!reducedMotion) window.requestAnimationFrame(frame);
  };

  viewport.classList.toggle("is-static", reducedMotion);
  carouselItems.forEach((item) => item.addEventListener("click", (event) => {
    if (suppressClick) {
      event.preventDefault();
      event.stopPropagation();
      suppressClick = false;
    }
  }));
  viewport.addEventListener("pointerenter", () => setPaused(true));
  viewport.addEventListener("pointerleave", () => setPaused(false));
  viewport.addEventListener("focusin", () => setPaused(true));
  viewport.addEventListener("focusout", (event) => { if (!viewport.contains(event.relatedTarget)) setPaused(false); });
  viewport.addEventListener("pointerdown", (event) => {
    dragging = true;
    pointerMoved = false;
    suppressClick = false;
    pointerStart = event.clientX;
    dragStartOffset = offset;
    viewport.classList.add("is-dragging");
    viewport.setPointerCapture?.(event.pointerId);
  });
  viewport.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    if (Math.abs(event.clientX - pointerStart) > 8) pointerMoved = true;
    offset = dragStartOffset - (event.clientX - pointerStart);
    if (offset < 0) offset += loopWidth;
    if (offset >= loopWidth) offset %= loopWidth;
    track.style.transform = `translate3d(${-offset}px, 0, 0)`;
  });
  const finishPointer = () => {
    if (!dragging) return;
    suppressClick = pointerMoved;
    dragging = false;
    viewport.classList.remove("is-dragging");
    setPaused(false);
  };
  viewport.addEventListener("pointerup", finishPointer);
  viewport.addEventListener("pointercancel", () => { dragging = false; suppressClick = false; viewport.classList.remove("is-dragging"); });
  viewport.addEventListener("click", (event) => { if (!suppressClick) return; event.preventDefault(); event.stopPropagation(); suppressClick = false; }, true);
  window.addEventListener("resize", measure, { passive: true });
  measure();
  if (!reducedMotion) window.requestAnimationFrame(frame);
}

function connectionCard(connection, includeAnchor = false) {
  const relationship = connection.relationship ? `<span class="partner-relationship">${escapeHtml(connection.relationship)}</span>` : "";
  const description = connection.description ? `<p>${escapeHtml(connection.description)}</p>` : `<p class="partner-card-empty">Details will be added as each connection is documented.</p>`;
  const projectExternalAttributes = connection.url && /^https?:\/\//.test(connection.url) ? ` target="_blank" rel="noopener noreferrer"` : "";
  const projectLink = connection.url ? `<a class="partner-card-link" href="${escapeHtml(connection.url)}"${projectExternalAttributes}>View project or event <span>↗</span></a>` : `<span class="partner-card-link is-muted">Project or event link coming soon</span>`;
  return `<article class="partner-card"${includeAnchor ? ` id="${connectionId(connection.name)}"` : ""}><div class="partner-card-top"><div class="partner-mark" aria-hidden="true">${initials(connection.name)}</div><div><h3>${escapeHtml(connection.name)}</h3>${relationship}</div></div>${description}${projectLink}</article>`;
}

function renderTeam(target) {
  const team = [
    { name: "Ram", role: "Co-Founder", photo: "../public/images/team/ram.png", bio: "Ram is a student at Eastlake High School and a co-founder of the Mochi Foundation. He helps with community projects, partnerships, and growing Mochi's work. Outside of Mochi, he is interested in cars, business, and spending time with friends.", objectPosition: "center 22%" },
    { name: "Dakshay", role: "Co-Founder", photo: "../public/images/team/dakshay.png", bio: "Dakshay is a senior at Eastlake High School and a co-founder of the Mochi Foundation. He helps organize projects and supports the team as Mochi works with families and community organizations. Outside of Mochi, he is interested in music, community service, and spending time with friends.", objectPosition: "center 20%" },
    { name: "Aravind", role: "Co-Founder", photo: "../public/images/team/aravind.png", bio: "Aravind is a senior at Eastlake High School and a co-founder of the Mochi Foundation. He helps with projects, planning, and community outreach. Outside of Mochi, he is interested in physics, technology, and learning how things work.", objectPosition: "center 18%" },
    { name: "Vishnu", role: "Co-Founder", photo: "../public/images/team/vishnu.png", bio: "Vishnu is a senior at Eastlake High School and a co-founder of the Mochi Foundation. He helps support Mochi's projects and community efforts. Outside of Mochi, he is interested in trading, business, and learning about financial markets.", objectPosition: "center 17%" },
  ];
  target.innerHTML = team.map((member, index) => `<article class="team-card"><div class="team-photo-wrap"><img src="${member.photo}" alt="${escapeHtml(member.name)}, ${escapeHtml(member.role)}" style="object-position:${member.objectPosition}" loading="lazy" /></div><div class="team-card-copy"><h3>${escapeHtml(member.name)}</h3><span class="team-role">${escapeHtml(member.role)}</span><p class="team-bio" id="team-bio-${index}">${escapeHtml(member.bio)}</p><button class="team-toggle" type="button" aria-expanded="false" aria-controls="team-bio-${index}" aria-label="Show more about ${escapeHtml(member.name)}">See more <span aria-hidden="true">+</span></button></div></article>`).join("");
  target.querySelectorAll(".team-toggle").forEach((button) => button.addEventListener("click", () => { const card = button.closest(".team-card"); const isOpen = card.classList.toggle("is-expanded"); const memberName = card.querySelector("h3")?.textContent || "this team member"; button.setAttribute("aria-expanded", String(isOpen)); button.setAttribute("aria-label", `${isOpen ? "Show less" : "Show more"} about ${memberName}`); button.innerHTML = isOpen ? "See less <span aria-hidden=\"true\">−</span>" : "See more <span aria-hidden=\"true\">+</span>"; }));
}

function setupPrograms(programList) {
  programList.innerHTML = programs.map((program, index) => `<button class="program-tab${index === 0 ? " is-active" : ""}" type="button" role="tab" aria-selected="${index === 0}" data-program="${index}"><span class="tab-index">0${index + 1}</span><strong>${program.title}</strong><span class="tab-arrow">↗</span></button>`).join("");
  const updateProgram = (index) => { const program = programs[index]; document.querySelectorAll(".program-tab").forEach((tab, tabIndex) => { tab.classList.toggle("is-active", tabIndex === index); tab.setAttribute("aria-selected", tabIndex === index ? "true" : "false"); }); document.getElementById("program-detail-label").textContent = program.label; document.getElementById("program-detail-title").textContent = program.title === "Pet support" ? "Practical help, without the judgment." : program.title; document.getElementById("program-detail-description").textContent = program.description; document.getElementById("program-detail-link").href = program.href; document.getElementById("program-detail-image").style.backgroundImage = `url("${program.image}")`; };
  programList.addEventListener("click", (event) => { const tab = event.target.closest(".program-tab"); if (tab) updateProgram(Number(tab.dataset.program)); });
  updateProgram(0);
}

function setupEvents(eventsList) {
  const renderEvents = (filter = "all") => { eventsList.innerHTML = events.map((event) => `<article class="event-card" data-type="${event.type}" data-category="${event.category}" ${filter !== "all" && event.type !== filter && event.category !== filter ? "hidden" : ""}><div class="event-card-image" style="background-image:url('${event.image}')"></div><div class="event-card-meta"><span>${event.type === "past" ? "Recently completed" : "Upcoming"}</span><span>${event.date}</span></div><div><h3>${event.title}</h3><p>${event.description}</p><a class="event-card-link" href="#${event.type === "past" ? "impact" : "get-involved"}">${event.type === "past" ? "See the impact ↗" : "Volunteer interest ↗"}</a></div></article>`).join(""); };
  renderEvents();
  document.querySelectorAll(".filter-button").forEach((button) => button.addEventListener("click", () => { document.querySelectorAll(".filter-button").forEach((item) => item.classList.remove("is-active")); button.classList.add("is-active"); renderEvents(button.dataset.filter); }));
}

function setupSupportCategories() {
  const list = document.getElementById("support-category-list");
  const image = document.getElementById("support-goes-image");
  const imagePhoto = document.getElementById("support-goes-image-photo");
  const label = document.getElementById("support-goes-label");
  const title = document.getElementById("support-goes-title");
  const description = document.getElementById("support-goes-description");
  const examples = document.getElementById("support-goes-examples");
  const assetRoot = document.body.dataset.assetRoot || "";
  if (!list || !image || !imagePhoto || !label || !title || !description) return;
  list.innerHTML = supportCategories.map((category, index) => `<button class="support-category${index === 0 ? " is-active" : ""}" id="support-tab-${category.id}" type="button" role="tab" aria-selected="${index === 0}" aria-controls="support-goes-content" data-support-category="${index}"><span>${category.number}</span>${category.shortTitle}</button>`).join("");
  const preloadImages = () => supportCategories.forEach((category) => { const preload = new Image(); preload.src = `${assetRoot}${category.image}`; });
  const update = (index) => {
    const category = supportCategories[index];
    list.querySelectorAll(".support-category").forEach((item, itemIndex) => { item.classList.toggle("is-active", itemIndex === index); item.setAttribute("aria-selected", itemIndex === index ? "true" : "false"); });
    image.classList.add("is-switching");
    imagePhoto.src = `${assetRoot}${category.image}`;
    imagePhoto.alt = category.imageAlt;
    image.setAttribute("aria-labelledby", `support-tab-${category.id}`);
    label.textContent = category.title;
    title.textContent = category.heading;
    description.textContent = category.description;
    if (examples) examples.textContent = category.examples || "Examples will be added as needs are documented.";
    window.requestAnimationFrame(() => window.setTimeout(() => image.classList.remove("is-switching"), 220));
  };
  list.addEventListener("click", (event) => { const button = event.target.closest(".support-category"); if (button) update(Number(button.dataset.supportCategory)); });
  preloadImages();
  update(0);
}

function setupDonation() {
  const levelList = document.getElementById("donation-levels");
  const amountList = document.getElementById("donation-amounts");
  const customField = document.getElementById("custom-amount-field");
  const customInput = document.getElementById("custom-amount");
  const selectedAmount = document.getElementById("selected-amount");
  const status = document.getElementById("donation-status");
  if (!levelList || !amountList || !customField || !customInput || !selectedAmount || !status) return;
  let currentAmount = "25";
  levelList.innerHTML = donationLevels.map((level, index) => `<article class="donation-level${index === 1 ? " is-selected" : ""}" data-donation-level="${level.amount.slice(1)}"><div class="donation-level-top"><span class="donation-amount">${level.amount}</span><span class="donation-level-index">0${index + 1}</span></div><h3>${level.title}</h3><p>${level.description}</p><button class="donation-level-select" type="button" data-donation-select="${level.amount.slice(1)}">Choose ${level.amount}</button></article>`).join("");
  amountList.innerHTML = `${donationLevels.map((level) => `<button class="donation-amount-button${level.amount === "$25" ? " is-selected" : ""}" type="button" data-donation-amount="${level.amount.slice(1)}" aria-pressed="${level.amount === "$25"}">${level.amount}</button>`).join("")}<button class="donation-amount-button" type="button" data-donation-amount="other" aria-pressed="false">Other</button>`;
  const updateAmount = (value) => { currentAmount = value; const isOther = value === "other"; levelList.querySelectorAll(".donation-level").forEach((level) => level.classList.toggle("is-selected", level.dataset.donationLevel === value)); amountList.querySelectorAll(".donation-amount-button").forEach((button) => { const active = button.dataset.donationAmount === value; button.classList.toggle("is-selected", active); button.setAttribute("aria-pressed", String(active)); }); customField.hidden = !isOther; selectedAmount.textContent = isOther ? (customInput.value ? `$${customInput.value}` : "your amount") : `$${value}`; if (isOther) window.setTimeout(() => customInput.focus(), 0); };
  amountList.addEventListener("click", (event) => { const button = event.target.closest("[data-donation-amount]"); if (button) updateAmount(button.dataset.donationAmount); });
  levelList.addEventListener("click", (event) => { const button = event.target.closest("[data-donation-select]"); if (button) updateAmount(button.dataset.donationSelect); });
  customInput.addEventListener("input", () => { if (currentAmount === "other") selectedAmount.textContent = customInput.value ? `$${customInput.value}` : "your amount"; });
  updateAmount("25");
}

function applyDonationLinks() {
  document.querySelectorAll("a").forEach((link) => {
    const isDonationCta = link.matches("[data-donation-cta]") || /donat|fill a kit|help with the next step/i.test(link.textContent) || link.getAttribute("href")?.includes("donate/index.html");
    if (!isDonationCta) return;
    link.href = DONATION_URL;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
}

function setupCareKit() {
  const options = document.getElementById("care-kit-options");
  const bundle = document.getElementById("care-kit-bundle");
  const count = document.getElementById("care-kit-count");
  const helper = document.getElementById("care-kit-helper");
  if (!options || !bundle || !count || !helper) return;
  const selected = new Set();
  const render = () => {
    const items = careKitItems.filter((item) => selected.has(item.id));
    options.querySelectorAll("[data-care-kit]").forEach((button) => {
      const active = selected.has(button.dataset.careKit);
      button.classList.toggle("is-selected", active);
      button.setAttribute("aria-pressed", String(active));
    });
    count.textContent = `${items.length} of ${careKitItems.length} selected`;
    helper.textContent = items.length ? "Your kit is taking shape." : "Select supplies to build a kit.";
    bundle.innerHTML = items.length ? items.map((item, index) => `<span class="kit-bundle-item"><small>0${index + 1}</small><span>${escapeHtml(item.label)}</span></span>`).join("") : `<span class="kit-empty">Your kit will appear here.</span>`;
  };
  options.addEventListener("click", (event) => {
    const button = event.target.closest("[data-care-kit]");
    if (!button) return;
    const id = button.dataset.careKit;
    if (selected.has(id)) selected.delete(id); else selected.add(id);
    render();
  });
  render();
}

function setupCurrentNeeds() {
  const board = document.getElementById("current-needs-board");
  const filter = document.getElementById("current-needs-filter");
  if (!board || !filter) return;
  filter.innerHTML = currentNeedStatusOptions.map((status, index) => `<button class="needs-filter-button${index === 0 ? " is-active" : ""}" type="button" data-needs-filter="${escapeHtml(status)}" aria-pressed="${index === 0}">${escapeHtml(status)}</button>`).join("");
  const render = (selectedFilter = "ALL") => {
    const items = currentNeeds.filter((item) => selectedFilter === "ALL" || item.status === selectedFilter);
    filter.querySelectorAll("[data-needs-filter]").forEach((button) => {
      const active = button.dataset.needsFilter === selectedFilter;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    board.innerHTML = items.length ? items.map((item, index) => `<article class="need-card"><div class="need-card-top"><span class="need-number">${escapeHtml(item.number || String(index + 1).padStart(2, "0"))}</span><span class="need-status status-${item.status.toLowerCase().replace(/\s+/g, "-")}">${escapeHtml(item.status)}</span></div>${item.image ? `<div class="need-card-media"><img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.imageAlt || item.category)}" loading="lazy" decoding="async" /></div>` : ""}<h3>${escapeHtml(item.category)}</h3><p>${escapeHtml(item.note)}</p></article>`).join("") : `<p class="needs-empty">No needs are listed in this category right now.</p>`;
  };
  filter.addEventListener("click", (event) => {
    const button = event.target.closest("[data-needs-filter]");
    if (button) render(button.dataset.needsFilter);
  });
  render();
}

function setupImpactStats(target) {
  const detail = document.getElementById("impact-stat-detail");
  const detailImage = document.getElementById("impact-stat-image");
  const detailLabel = document.getElementById("impact-stat-label");
  const detailTitle = document.getElementById("impact-stat-title");
  const detailCopy = document.getElementById("impact-stat-copy");
  if (!target || !detail || !detailImage || !detailLabel || !detailTitle || !detailCopy) return;
  const assetRoot = document.body.dataset.assetRoot || "";
  target.innerHTML = stats.map((stat, index) => `<button class="stat-card" type="button" aria-controls="impact-stat-detail" data-stat-index="${index}"><span class="stat-number" data-counter-prefix="${escapeHtml(stat.counter?.prefix || "")}" data-counter-target="${stat.counter?.target || 0}" data-counter-suffix="${escapeHtml(stat.counter?.suffix || "")}" data-counter-compact="${Boolean(stat.counter?.compact)}">${escapeHtml(stat.value)}</span><div><p>${escapeHtml(stat.label)}</p><small>${escapeHtml(stat.note)}</small></div><span class="stat-action">View context <span>↗</span></span></button>`).join("");
  const update = (index) => {
    const stat = stats[index];
    target.querySelectorAll("[data-stat-index]").forEach((button) => button.classList.toggle("is-selected", Number(button.dataset.statIndex) === index));
    detailLabel.textContent = stat.label;
    detailTitle.textContent = stat.detailTitle;
    detailCopy.textContent = stat.detail;
    detailImage.src = `${assetRoot}${stat.image}`;
    detailImage.alt = stat.imageAlt;
  };
  target.addEventListener("click", (event) => {
    const button = event.target.closest("[data-stat-index]");
    if (button) update(Number(button.dataset.statIndex));
  });
  update(0);
  setupImpactCounterAnimation(target);
}

function setupImpactCounterAnimation(target) {
  const counters = [...target.querySelectorAll("[data-counter-target]")];
  if (!counters.length) return;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const formatter = new Intl.NumberFormat("en-US");
  const compactFormatter = new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 0 });
  const formatValue = (counter, value) => {
    const numberFormatter = counter.dataset.counterCompact === "true" ? compactFormatter : formatter;
    return `${counter.dataset.counterPrefix || ""}${numberFormatter.format(value)}${counter.dataset.counterSuffix || ""}`;
  };
  const finish = (counter) => {
    counter.textContent = formatValue(counter, Number(counter.dataset.counterTarget));
  };
  const animate = (counter, delay = 0) => {
    const end = Number(counter.dataset.counterTarget);
    const duration = 1150;
    const startAt = performance.now() + delay;
    const tick = (now) => {
      if (now < startAt) {
        window.requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min(1, (now - startAt) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = formatValue(counter, Math.round(end * eased));
      if (progress < 1) window.requestAnimationFrame(tick);
    };
    window.requestAnimationFrame(tick);
  };
  if (reducedMotion || !("IntersectionObserver" in window)) {
    counters.forEach(finish);
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    if (!entries.some((entry) => entry.isIntersecting)) return;
    counters.forEach((counter, index) => animate(counter, index * 90));
    observer.disconnect();
  }, { threshold: .28, rootMargin: "0px 0px -8% 0px" });
  observer.observe(target);
}

function setupChapterQuiz() {
  const quiz = document.getElementById("chapter-quiz");
  const questionNumber = document.getElementById("quiz-question-number");
  const progress = document.getElementById("quiz-progress");
  const questionTitle = document.getElementById("quiz-question-title");
  const choices = document.getElementById("quiz-choices");
  const next = document.getElementById("quiz-next");
  const back = document.getElementById("quiz-back");
  const error = document.getElementById("quiz-error");
  const result = document.getElementById("quiz-result");
  const resultTitle = document.getElementById("quiz-result-title");
  const resultCopy = document.getElementById("quiz-result-copy");
  const restart = document.getElementById("quiz-restart");
  if (!quiz || !questionNumber || !progress || !questionTitle || !choices || !next || !back || !error || !result || !resultTitle || !resultCopy || !restart) return;
  let step = 0;
  const answers = [];
  const render = () => {
    const item = chapterQuizQuestions[step];
    questionNumber.textContent = `0${step + 1}`;
    questionTitle.textContent = item.question;
    choices.innerHTML = item.choices.map((choice, index) => `<button class="quiz-choice" type="button" data-quiz-answer="${index}" aria-pressed="false">${escapeHtml(choice)}</button>`).join("");
    progress.innerHTML = chapterQuizQuestions.map((_, index) => `<span class="quiz-progress-dot${index === step ? " is-active" : index < step ? " is-complete" : ""}" aria-hidden="true"></span>`).join("");
    back.hidden = step === 0;
    next.textContent = step === chapterQuizQuestions.length - 1 ? "See my next step" : "Next question";
    error.hidden = true;
  };
  const showResult = () => {
    const yesAnswers = answers.filter((answer) => answer === 0).length;
    resultTitle.textContent = yesAnswers >= 4 ? "You’re ready to get started." : "You’re close. Here’s what to do next.";
    resultCopy.textContent = "This guide is not an application or an eligibility check. It is a simple way to think through your next step with Mochi.";
    quiz.querySelector(".quiz-question-panel")?.setAttribute("hidden", "");
    quiz.querySelector(".quiz-controls")?.setAttribute("hidden", "");
    result.hidden = false;
  };
  choices.addEventListener("click", (event) => {
    const button = event.target.closest("[data-quiz-answer]");
    if (!button) return;
    choices.querySelectorAll("[data-quiz-answer]").forEach((item) => { item.classList.remove("is-selected"); item.setAttribute("aria-pressed", "false"); });
    button.classList.add("is-selected");
    button.setAttribute("aria-pressed", "true");
    error.hidden = true;
  });
  next.addEventListener("click", () => {
    const selected = choices.querySelector(".is-selected");
    if (!selected) { error.hidden = false; return; }
    answers[step] = Number(selected.dataset.quizAnswer);
    if (step === chapterQuizQuestions.length - 1) showResult(); else { step += 1; render(); }
  });
  back.addEventListener("click", () => { if (step > 0) { step -= 1; render(); } });
  restart.addEventListener("click", () => { step = 0; answers.length = 0; result.hidden = true; quiz.querySelector(".quiz-question-panel")?.removeAttribute("hidden"); quiz.querySelector(".quiz-controls")?.removeAttribute("hidden"); render(); });
  render();
}

function setupProjectStories() {
  const list = document.getElementById("project-story-list");
  if (!list) return;
  const assetRoot = document.body.dataset.assetRoot || "";
  list.innerHTML = projectStories.map((story, index) => {
    const metadata = [["Organization", story.organization], ["Location", story.location], ["Date", story.date]].filter(([, value]) => value);
    const metadataMarkup = metadata.length ? metadata.map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join("") : `<div class="project-case-meta-empty"><dt>Project details</dt><dd>More verified details will be added here.</dd></div>`;
    const externalAttributes = story.projectUrl && /^https?:\/\//.test(story.projectUrl) ? ` target="_blank" rel="noopener noreferrer"` : "";
    const projectLink = story.projectUrl ? `<a class="text-link project-case-external" href="${escapeHtml(story.projectUrl)}"${externalAttributes}>View project <span>↗</span></a>` : "";
    return `<article class="project-case-card${index % 2 ? " project-case-card-reverse" : ""}" id="project-story-${index + 1}" data-reveal><figure class="project-case-photo"><img src="${assetRoot}${story.image}" alt="${escapeHtml(story.imageAlt)}" loading="lazy" /><figcaption>0${index + 1} · Mochi in action</figcaption></figure><div class="project-case-copy"><div class="project-case-topline"><span>Project story</span><span>0${index + 1}</span></div><h2>${escapeHtml(story.title)}</h2><p class="project-case-description">${escapeHtml(story.description)}</p><dl class="project-case-meta">${metadataMarkup}</dl><div class="project-case-impact"><span>Impact / result</span><p>${escapeHtml(story.impact)}</p></div><details class="project-case-details"><summary>View project <span>→</span></summary><div class="project-story-steps">${story.steps.map((step, stepIndex) => `<div class="project-step"><span>0${stepIndex + 1}</span><div><strong>${escapeHtml(step[0])}</strong><p>${escapeHtml(step[1])}</p></div></div>`).join("")}</div></details>${projectLink}</div></article>`;
  }).join("");
}

function setupFaq() {
  const list = document.getElementById("faq-list");
  if (!list) return;
  list.innerHTML = faqItems.map((item, index) => `<details class="faq-item"${index === 0 ? " open" : ""}><summary><span><small>${escapeHtml(item.label)}</small>${escapeHtml(item.question)}</span><b aria-hidden="true">+</b></summary><div class="faq-answer"><p>${escapeHtml(item.answer)}</p></div></details>`).join("");
  list.querySelectorAll("details").forEach((item) => item.addEventListener("toggle", () => {
    if (item.open) list.querySelectorAll("details[open]").forEach((other) => { if (other !== item) other.removeAttribute("open"); });
  }));
}

function setupImpactMap() {
  const canvas = document.getElementById("impact-map-canvas");
  const detailTitle = document.getElementById("map-detail-title");
  const detailAddress = document.getElementById("map-detail-address");
  const detailDescription = document.getElementById("map-detail-description");
  const detailMeta = document.getElementById("map-detail-meta");
  const detailCategory = document.getElementById("map-detail-category");
  const detailRelationship = document.getElementById("map-detail-relationship");
  const detailImage = document.getElementById("map-detail-image");
  const detailImageWrap = document.getElementById("map-detail-image-wrap");
  const detailLink = document.getElementById("map-detail-link");
  const emptyState = document.getElementById("map-empty-state");
  const filterBar = document.getElementById("map-filters");
  if (!canvas || !detailTitle || !detailAddress || !detailDescription || !detailMeta || !detailCategory || !detailRelationship || !detailImage || !detailImageWrap || !detailLink) return;

  const setDetail = (location) => {
    if (!location) {
      detailTitle.textContent = "A clearer picture of the work.";
      detailAddress.textContent = "Select a Mochi-blue pin to explore a public location.";
      detailDescription.textContent = "Mochi’s map is designed for public places only—never private family addresses.";
      detailMeta.textContent = "No verified locations published yet";
      detailCategory.textContent = "Category to be added";
      detailRelationship.textContent = "Relationship to be added";
      detailImageWrap.hidden = true;
      detailLink.hidden = true;
      return;
    }
    detailTitle.textContent = location.name;
    detailAddress.textContent = location.address;
    detailDescription.textContent = location.description || "Description to be added when this location’s Mochi connection is verified.";
    detailMeta.textContent = location.city || "Public location";
    detailCategory.textContent = location.category || "Category to be added";
    detailRelationship.textContent = location.relationship || "Relationship to be added";
    if (location.image) {
      const assetRoot = document.body.dataset.assetRoot || "";
      detailImage.src = `${assetRoot}${location.image}`;
      detailImage.alt = `${location.name} and Mochi community work`;
      detailImageWrap.hidden = false;
    } else detailImageWrap.hidden = true;
    if (location.projectUrl) {
      detailLink.href = location.projectUrl;
      detailLink.target = /^https?:\/\//.test(location.projectUrl) ? "_blank" : "_self";
      detailLink.rel = /^https?:\/\//.test(location.projectUrl) ? "noopener noreferrer" : "";
      detailLink.hidden = false;
    } else detailLink.hidden = true;
  };
  const renderFilters = () => {
    if (!filterBar) return;
    const categories = [...new Set(impactLocations.map((location) => location.category).filter(Boolean))];
    filterBar.innerHTML = [`<button class="map-filter is-active" type="button" data-map-filter="all" aria-pressed="true">All locations</button>`, ...categories.map((category) => `<button class="map-filter" type="button" data-map-filter="${escapeHtml(category)}" aria-pressed="false">${escapeHtml(category)}</button>`)].join("");
  };

  renderFilters();

  // The previous map was a CSS-only schematic. Use a real provider so the default
  // view is actual satellite imagery rather than a decorative background.
  if (!window.L) {
    if (emptyState) {
      emptyState.hidden = false;
      emptyState.innerHTML = "<span class=\"map-empty-dot\"></span><strong>Map imagery unavailable.</strong><small>Check your connection and reload to view the real satellite map.</small>";
    }
    setDetail(null);
    return;
  }

  canvas.classList.add("is-real-map");
  canvas.querySelectorAll(".map-grid-line, .map-label").forEach((element) => element.remove());

  const imageryLayer = L.tileLayer("https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
    maxZoom: 19,
    attribution: "Tiles © Esri",
  });
  const labelsLayer = L.tileLayer("https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}", {
    maxZoom: 19,
    attribution: "Labels © Esri",
  });
  const streetsLayer = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "© OpenStreetMap contributors",
  });
  const hybridLayer = L.layerGroup([imageryLayer, labelsLayer]);
  const map = L.map(canvas, {
    zoomControl: true,
    dragging: true,
    scrollWheelZoom: true,
    tap: true,
    layers: [hybridLayer],
  });
  L.control.layers({ Hybrid: hybridLayer, Satellite: imageryLayer, Map: streetsLayer }, null, { collapsed: true, position: "topright" }).addTo(map);

  const allLocations = impactLocations.filter((location) => Number.isFinite(location.latitude) && Number.isFinite(location.longitude));
  const allBounds = L.latLngBounds(allLocations.map((location) => [location.latitude, location.longitude]));
  const markerLayer = L.featureGroup().addTo(map);
  const mochiPinIcon = L.divIcon({
    className: "mochi-map-pin",
    html: "<span class=\"mochi-map-pin-dot\" aria-hidden=\"true\"></span>",
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });

  const selectMarker = (selectedMarker) => {
    markerLayer.eachLayer((marker) => marker.getElement()?.classList.toggle("is-selected", marker === selectedMarker));
  };
  const fitLocations = (locations) => {
    if (!locations.length) {
      map.fitBounds(allBounds, { padding: [30, 30], maxZoom: 12 });
    } else if (locations.length === 1) {
      map.setView([locations[0].latitude, locations[0].longitude], 15);
    } else {
      map.fitBounds(L.latLngBounds(locations.map((location) => [location.latitude, location.longitude])), { padding: [30, 30], maxZoom: 13 });
    }
  };
  const draw = (filter = "all") => {
    markerLayer.clearLayers();
    const matching = allLocations.filter((location) => filter === "all" || location.category === filter);
    let firstMarker = null;
    matching.forEach((location, index) => {
      const marker = L.marker([location.latitude, location.longitude], {
        icon: mochiPinIcon,
        keyboard: true,
        title: location.name,
        alt: `Show ${location.name}`,
      }).addTo(markerLayer);
      marker.bindTooltip(location.name, { direction: "top", offset: [0, -10], opacity: 0.96 });
      marker.on("click", () => {
        setDetail(location);
        selectMarker(marker);
      });
      if (index === 0) firstMarker = marker;
    });
    if (emptyState) emptyState.hidden = Boolean(matching.length);
    if (matching.length) {
      setDetail(matching[0]);
      selectMarker(firstMarker);
    } else {
      setDetail(null);
    }
    fitLocations(matching);
  };

  draw();
  window.setTimeout(() => map.invalidateSize({ pan: false }), 0);
  filterBar?.addEventListener("click", (event) => {
    const button = event.target.closest(".map-filter");
    if (!button) return;
    filterBar.querySelectorAll(".map-filter").forEach((item) => { item.classList.remove("is-active"); item.setAttribute("aria-pressed", "false"); });
    button.classList.add("is-active");
    button.setAttribute("aria-pressed", "true");
    draw(button.dataset.mapFilter);
  });
}

function applyInstagramLinks() {
  document.querySelectorAll("[data-instagram-link]").forEach((link) => { link.href = siteConfig.socials.instagram; link.target = "_blank"; link.rel = "noopener noreferrer"; });
}

function setupReveal() {
  const revealItems = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) { const revealObserver = new IntersectionObserver((entries, observer) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }); }, { threshold: .12 }); revealItems.forEach((item) => revealObserver.observe(item)); } else revealItems.forEach((item) => item.classList.add("is-visible"));
}

function setupNavigation() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  if (!menuToggle || !navMenu) return;
  const navLinks = navMenu.querySelector(".nav-links");
  const navItems = navLinks ? [...navLinks.querySelectorAll("a")] : [];
  const activeItem = navItems.find((link) => link.getAttribute("aria-current") === "page");
  const setIndicator = (item) => {
    if (!navLinks) return;
    if (!item) {
      navLinks.style.setProperty("--nav-indicator-opacity", "0");
      return;
    }
    const navRect = navLinks.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    navLinks.style.setProperty("--nav-indicator-left", `${itemRect.left - navRect.left}px`);
    navLinks.style.setProperty("--nav-indicator-top", `${itemRect.top - navRect.top}px`);
    navLinks.style.setProperty("--nav-indicator-width", `${itemRect.width}px`);
    navLinks.style.setProperty("--nav-indicator-height", `${itemRect.height}px`);
    navLinks.style.setProperty("--nav-indicator-opacity", "1");
  };
  const resetIndicator = () => setIndicator(activeItem);
  navItems.forEach((link) => {
    link.addEventListener("mouseenter", () => setIndicator(link));
    link.addEventListener("focus", () => setIndicator(link));
    link.addEventListener("mouseleave", resetIndicator);
  });
  navLinks?.addEventListener("mouseleave", resetIndicator);
  navLinks?.addEventListener("focusout", (event) => { if (!navLinks.contains(event.relatedTarget)) resetIndicator(); });
  window.addEventListener("resize", resetIndicator);
  resetIndicator();
  menuToggle.addEventListener("click", () => { const open = navMenu.classList.toggle("is-open"); menuToggle.setAttribute("aria-expanded", String(open)); resetIndicator(); });
  navMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => { navMenu.classList.remove("is-open"); menuToggle.setAttribute("aria-expanded", "false"); }));
}

function setupModals() {
  document.querySelectorAll("[data-open-modal]").forEach((button) => button.addEventListener("click", () => document.getElementById(button.dataset.openModal)?.showModal()));
  document.querySelectorAll("dialog").forEach((dialog) => {
    dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
    dialog.querySelector("[data-close-modal]")?.addEventListener("click", () => dialog.close());
    dialog.querySelector("form")?.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      const submit = form.querySelector("button[type=submit]");
      const success = form.querySelector(".form-success");
      const error = form.querySelector(".form-error");
      if (!submit || !success) return;
      const originalLabel = submit.innerHTML;
      const subject = form.dataset.form === "support" ? "New Mochi pet support request" : "New Mochi chapter inquiry";
      const payload = Object.fromEntries(new FormData(form).entries());
      payload.access_key = siteConfig.forms.accessKey;
      payload.subject = subject;
      payload.from_name = siteConfig.forms.fromName;
      submit.disabled = true;
      submit.innerHTML = "Sending…";
      if (error) error.hidden = true;
      if (window.location.protocol === "file:") {
        [
          ["access_key", siteConfig.forms.accessKey],
          ["subject", subject],
          ["from_name", siteConfig.forms.fromName],
        ].forEach(([name, value]) => {
          let field = form.querySelector(`input[name="${name}"]`);
          if (!field) {
            field = document.createElement("input");
            field.type = "hidden";
            field.name = name;
            form.appendChild(field);
          }
          field.value = value;
        });
        HTMLFormElement.prototype.submit.call(form);
        return;
      }
      try {
        const response = await fetch(siteConfig.forms.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload),
        });
        const result = await response.json().catch(() => null);
        if (!response.ok || !result || result.success !== true) throw new Error("Form delivery failed");
        form.querySelectorAll("input, select, textarea, button").forEach((field) => { field.disabled = true; });
        success.hidden = false;
        submit.hidden = true;
      } catch (submissionError) {
        submit.disabled = false;
        submit.innerHTML = originalLabel;
        if (error) {
          error.textContent = `We couldn’t send that just now. Please try again or email ${siteConfig.forms.recipient}.`;
          error.hidden = false;
        }
      }
    });
  });
}

function setupCinematicHero() {
  const hero = document.querySelector("[data-cinematic-hero]");
  const video = document.getElementById("cinematic-hero-video");
  if (!hero || !video) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const showPoster = () => {
    hero.classList.add("is-reduced-motion", "is-poster-mode");
    video.pause();
    video.removeAttribute("autoplay");
  };

  const startVideo = () => {
    if (prefersReducedMotion.matches) return;
    video.muted = true;
    video.setAttribute("autoplay", "");
    video.play().then(() => {
      hero.classList.remove("is-poster-mode", "has-video-error");
    }).catch(() => {
      hero.classList.add("is-poster-mode", "has-video-error");
    });
  };

  const handleMotionPreference = () => {
    if (prefersReducedMotion.matches) showPoster();
    else {
      hero.classList.remove("is-reduced-motion");
      startVideo();
    }
  };

  video.addEventListener("playing", () => hero.classList.remove("is-poster-mode", "has-video-error"));
  video.addEventListener("error", () => hero.classList.add("is-poster-mode", "has-video-error"));
  video.addEventListener("canplay", startVideo, { once: true });

  if (typeof prefersReducedMotion.addEventListener === "function") prefersReducedMotion.addEventListener("change", handleMotionPreference);
  else prefersReducedMotion.addListener(handleMotionPreference);
  handleMotionPreference();
}

document.addEventListener("DOMContentLoaded", () => {
  const featuredConnections = document.getElementById("featured-connections");
  if (featuredConnections) featuredConnections.innerHTML = connections.filter((connection) => connection.featured).slice(0, 3).map(connectionCard).join("");
  const partnerDirectory = document.getElementById("partners-directory");
  if (partnerDirectory) {
    partnerDirectory.innerHTML = connections.map((connection) => connectionCard(connection, true)).join("");
    const linkedConnection = document.getElementById(window.location.hash.slice(1));
    if (linkedConnection) window.setTimeout(() => linkedConnection.scrollIntoView({ block: "start" }), 0);
  }
  const teamGrid = document.getElementById("team-grid");
  if (teamGrid) renderTeam(teamGrid);
  const statsGrid = document.getElementById("stats-grid");
  if (statsGrid) setupImpactStats(statsGrid);
  const photoGrid = document.getElementById("about-photo-grid");
  if (photoGrid) { const assetRoot = document.body.dataset.assetRoot || ""; photoGrid.innerHTML = communityPhotos.map((photo) => `<figure class="about-photo-card"><img src="${assetRoot}${photo.photo}" alt="${photo.alt}" loading="lazy" /><figcaption><span>${photo.label}</span>${photo.caption}</figcaption><a class="photo-wall-item-link" href="#" data-instagram-link aria-label="See more Mochi community photos on Instagram"></a></figure>`).join(""); }
  const currentYear = document.getElementById("current-year");
  if (currentYear) currentYear.textContent = new Date().getFullYear();
  applyDonationLinks();
  setupCarousel();
  setupSupportCategories();
  setupDonation();
  setupCareKit();
  setupCurrentNeeds();
  setupChapterQuiz();
  setupProjectStories();
  setupFaq();
  setupImpactMap();
  const programList = document.getElementById("program-list");
  if (programList) setupPrograms(programList);
  const eventsList = document.getElementById("events-list");
  if (eventsList) setupEvents(eventsList);
  applyInstagramLinks();
  setupNavigation();
  setupModals();
  setupCinematicHero();
  setupReveal();
});
