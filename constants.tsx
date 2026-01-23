
import { Program, TeamMember, TimelineEvent } from './types';

export const TEAM_MEMBERS: (TeamMember & { bio: string; image: string })[] = [
  { 
    name: "Amina N.", role: "Programs Director", country: "Rwanda",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?q=80&w=400&h=400&auto=format&fit=crop",
    bio: "Amina coordinates our regional strategy from Kigali, focusing on survivor-led advocacy and large-scale program deployment."
  },
  { 
    name: "John K.", role: "Field Coordinator", country: "Kenya",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&auto=format&fit=crop",
    bio: "John manages our East African supply chains and field security protocols, ensuring our teams reach remote zones safely."
  },
  { 
    name: "Grace M.", role: "MHPSS Lead", country: "Uganda",
    image: "https://images.unsplash.com/photo-1567532939604-b6c5b0ad2eba?q=80&w=400&h=400&auto=format&fit=crop",
    bio: "Grace leads our Mental Health and Psychosocial Support initiatives, specializing in trauma-informed collective healing."
  },
  { 
    name: "Pierre L.", role: "Logistics Manager", country: "DRC",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=400&auto=format&fit=crop",
    bio: "Pierre oversees complex logistics in Eastern DRC, managing the delivery of emergency nutrition and protection supplies."
  },
  { 
    name: "Marie T.", role: "Safe Spaces Coord.", country: "Central African Rep.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&h=400&auto=format&fit=crop",
    bio: "Marie directs our 8 safe spaces in CAR, providing refuge and support for survivors of gender-based violence."
  },
  { 
    name: "Emmanuel B.", role: "Finance Officer", country: "Republic of Congo",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&auto=format&fit=crop",
    bio: "Emmanuel ensures financial transparency and precise budget allocation across our Central African hubs."
  },
  { 
    name: "Chantal R.", role: "Health Program Lead", country: "Cameroon",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=400&auto=format&fit=crop",
    bio: "Chantal is a public health specialist dedicated to maternal and reproductive health in displacement camps."
  },
  { 
    name: "Samuel O.", role: "Monitoring Officer", country: "Tanzania",
    image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=400&h=400&auto=format&fit=crop",
    bio: "Samuel tracks our data-driven impact metrics, ensuring our programs remain effective and community-led."
  },
  { 
    name: "Fatou S.", role: "Communications", country: "Senegal",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&h=400&auto=format&fit=crop",
    bio: "Fatou amplifies survivor voices through regional storytelling and high-level international advocacy."
  },
  { 
    name: "Kwame A.", role: "M&E Specialist", country: "Ghana",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=400&h=400&auto=format&fit=crop",
    bio: "Kwame designs rigorous evaluation frameworks that keep APDFE accountable to the communities we serve."
  },
  { 
    name: "Aisha N.", role: "Education Coord.", country: "Nigeria",
    image: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?q=80&w=400&h=400&auto=format&fit=crop",
    bio: "Aisha develops foundational literacy and numeracy curricula tailored for out-of-school girls in conflict zones."
  },
  { 
    name: "Hassan D.", role: "Agriculture Specialist", country: "Mali",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=400&h=400&auto=format&fit=crop",
    bio: "Hassan leads our Climate-Smart Agriculture training, helping families build resilience against drought."
  },
  { 
    name: "Selam G.", role: "Advocacy Lead", country: "Ethiopia",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400&h=400&auto=format&fit=crop",
    bio: "Selam represents APDFE at regional legislative bodies, advising on protection policies for women and children."
  },
  { 
    name: "Abdi M.", role: "Programs Officer", country: "Somalia",
    image: "https://images.unsplash.com/photo-1506803682981-6e718a9dd3ee?q=80&w=400&h=400&auto=format&fit=crop",
    bio: "Abdi manages urban refugee integration programs and emergency relief distribution in vulnerable clusters."
  },
  { 
    name: "Ruth K.", role: "Protection Lead", country: "South Sudan",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=400&h=400&auto=format&fit=crop",
    bio: "Ruth specializes in child protection governance and the prevention of rights violations in conflict environments."
  },
  { 
    name: "Omar H.", role: "Operations Manager", country: "Sudan",
    image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=400&h=400&auto=format&fit=crop",
    bio: "Omar handles cross-border operational synchronization, ensuring resource mobility during rapid response phases."
  },
  { 
    name: "Lillian Z.", role: "HR & Training", country: "Zambia",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=400&h=400&auto=format&fit=crop",
    bio: "Lillian leads our internal capacity building and survivor leadership training programs."
  },
  { 
    name: "Temba S.", role: "Legal Advisor", country: "Zimbabwe",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=400&h=400&auto=format&fit=crop",
    bio: "Temba provides essential legal aid to survivors and ensures APDFE meets all regional regulatory standards."
  },
  { 
    name: "Marta P.", role: "Communities Lead", country: "Mozambique",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&auto=format&fit=crop",
    bio: "Marta coordinates grassroots peace circles and community reconciliation projects across our hubs."
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: "2019",
    title: "The Seed is Planted",
    description: "In a small community hall in Bangui, Central African Republic, two survivors made a promise: no woman, no child should walk the path they walked—alone, unseen, unheard. Adelithe MUGABO and Princia KORONADO officially registered APDFE with just $500, a borrowed office space, and an unshakeable belief that those who survive violence can lead the healing of others.",
    quote: "We started with 3 volunteers, 1 desk, and infinite determination. By the end of 2019, we had supported 450 women and children in Bangui's most marginalized neighborhoods."
  },
  {
    year: "2020",
    title: "Expansion Amid Crisis",
    description: "As armed violence escalated in Eastern DRC, we answered the call. Our first cross-border mission took us to North Kivu, where we opened Women's Safe Spaces in displacement camps. Despite COVID-19 lockdowns and active conflict, our team—many of them survivors themselves—delivered psychosocial support, emergency supplies, and GBV response services to 8,000+ women and children.",
    quote: "COVID couldn't stop us. Conflict couldn't stop us. When others evacuated, we stayed—because survivors don't abandon survivors."
  },
  {
    year: "2021",
    title: "From Relief to Resilience",
    description: "We launched our Economic Empowerment Initiative, training 1,200 women in tailoring, soap-making, and small business management. Survivors who once relied on aid started businesses, hired employees, and sent their children to school. We also trained 50 community health workers and protection officers.",
    quote: "Mama Grace went from receiving emergency food aid to owning the most successful tailoring shop in her village. She now employs 6 other women. That's the power of economic dignity."
  },
  {
    year: "2022",
    title: "A Regional Movement",
    description: "Our footprint expanded to Republic of Congo and Cameroon, serving refugees, IDPs, and host communities. We introduced mental health services, launched the Girls' Education Scholarship Program (supporting 800+ girls), and established mobile health clinics.",
    quote: "When we crossed into Cameroon, local women told us: 'We've been waiting for someone like you—someone who understands.' We didn't just bring programs—we brought sisterhood."
  },
  {
    year: "2023",
    title: "Innovation Meets Impact",
    description: "We launched Climate-Smart Agriculture training, helping 2,500 families build resilience against drought and food insecurity. Our Peace-Building Circles brought together women from opposing ethnic groups—former enemies became allies. We introduced digital literacy programs, solar energy projects, and youth entrepreneurship hubs.",
    quote: "In one peace circle, two women who lost family members in the same conflict sat together, cried together, and ultimately healed together. That's when we knew peace isn't just possible—it's inevitable when women lead it."
  },
  {
    year: "2024",
    title: "Amplifying Voices",
    description: "We co-founded the Central Africa Women's Protection Network, connecting 35+ grassroots organizations across the region. APDFE staff testified before regional parliaments, advising on GBV legislation and child protection policies. Over 68,000 beneficiaries. 120+ staff members.",
    quote: "When survivor-leaders speak, policymakers listen differently. We're not asking for a seat at the table—we're building our own tables and inviting allies to join us."
  },
  {
    year: "2025",
    title: "The Future is Now",
    description: "Our goal: reach 100,000 beneficiaries by year-end through expansion of renewable energy projects, trauma healing centers, and girls' scholarships. We're launching the Survivor Leadership Academy—training the next generation of humanitarian leaders.",
    quote: "We started in 2019 asking: 'Can survivors lead change?' Today, we're not asking anymore—we're proving it, every single day, in every community we serve."
  }
];

export const IMPACT_DATA = [
  { year: '2019', beneficiaries: 5000, communities: 12 },
  { year: '2020', beneficiaries: 12000, communities: 28 },
  { year: '2021', beneficiaries: 25000, communities: 45 },
  { year: '2022', beneficiaries: 40000, communities: 82 },
  { year: '2023', beneficiaries: 55000, communities: 115 },
  { year: '2024', beneficiaries: 68000, communities: 142 },
];

export const PROGRAMS_DATA: Program[] = [
  {
    id: "health",
    title: "Health Program",
    description: "In many of African countries, ongoing conflict, poverty, and lack of access to basic services have severely impacted the health and well-being of women and girls.",
    fullContent: `In many of African countries, ongoing conflict, poverty, and lack of access to basic services have severely impacted the health and well-being of women and girls. Malnutrition remains a silent emergency in Africa, especially among children under five and pregnant or lactating women. The trauma of endless wars, displacement, and gender-based violence has left deep psychological wounds across the population in many countries especially in Central African Republic (CAR) and Democratic Republic of Congo (DRC).

SEXUAL AND REPRODUCTIVE HEALTH AND RIGHTS (SRHR)
Many women and adolescent girls in both urban and rural areas face immense barriers to accessing comprehensive sexual and reproductive health services, including contraception, menstrual hygiene management, maternal care, and safe abortion. Teenage pregnancies and gender-based violence remain high, while stigma and harmful traditional beliefs continue to affect bodily autonomy and decision-making. APDFE's SRHR initiative aims to improve access to accurate information, essential health services, and community awareness on reproductive rights.

MALNUTRITION (WITH FOCUS ON CHILDREN UNDER 5 AND PREGNANT WOMEN)
Years of instability, displacement, and weak health systems have led to food insecurity, poor infant feeding practices, and limited access to prenatal care. Acute malnutrition is one of the leading causes of child mortality in the country. APDFE responds through targeted nutrition support programs that promote maternal and child health. We run mobile nutrition screening campaigns, support community-based therapeutic feeding, and provide nutrition education for mothers. We partner with local health centers to ensure timely referrals and follow-up care.

MENTAL HEALTH AND PSYCHO-SOCIAL SUPPORT (MHPSS)
Yet mental health services remain scarce almost to none, stigmatized, and often inaccessible, particularly for women, youth, and survivors of violence. APDFE integrates Mental Health and Psycho-social Support (MHPSS) across its programming to promote healing and resilience. We offer group therapy, one-on-one counseling, peer-led support groups, and recreational activities that help individuals rebuild confidence and community ties. Our trained psycho-social workers also identify and refer severe cases to specialized care.`,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    details: ["Awareness Campaigns", "Mobile Screening", "Group Therapy", "Trauma-Informed Care"]
  },
  {
    id: "economic",
    title: "Youth and Women Economic Empowerment",
    description: "In the four countries where APDFE operates, over 70% of the population lives in poverty and formal job opportunities are limited, empowering women and youth with economic skills is essential for breaking cycles of dependency and marginalization.",
    fullContent: `In the four countries where APDFE operates, over 70% of the population lives in poverty and formal job opportunities are limited, empowering women and youth with economic skills is essential for breaking cycles of dependency and marginalization. Displaced women, adolescent girls, and youth in post-conflict areas are especially excluded from income-generating opportunities.

Vocational Training and Entrepreneurship
APDFE's economic empowerment program equips women and youth with vocational training, entrepreneurship skills, and access to financial literacy and savings mechanisms. We offer hands-on training in tailoring, agriculture, small-scale trade, and handcrafts, while also forming cooperative groups to increase collective strength and access to local markets. Through mentorship, start-up kits, and community support networks, we help participants build sustainable livelihoods that enhance their economic independence and dignity.`,
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop",
    details: ["Vocational Training", "Entrepreneurship Skills", "Financial Literacy", "Cooperative Groups"]
  },
  {
    id: "protection",
    title: "Child Protection and Child Rights Governance",
    description: "Children in many African countries continue to face violations of their rights, including early marriage, child labor, recruitment into armed groups, and abuse in both homes and displacement camps.",
    fullContent: `Children in many African countries continue to face violations of their rights, including early marriage, child labor, recruitment into armed groups, and abuse in both homes and displacement camps. Weak legal frameworks, cultural practices, and low awareness exacerbate the vulnerability of children, especially girls.

Protection Mechanisms and Safe Spaces
APDFE works to protect children and uphold their rights through community-based child protection mechanisms, awareness-raising on Child Rights and Their Protection, and advocacy. We establish child-friendly spaces where children can learn, play, and express themselves safely. We also train community actors on child rights, identify at-risk children, and refer cases to appropriate services.

Governance and Advocacy
In addition, we advocate for stronger legal protections and involve children in governance processes to ensure their voices are heard and respected in the decisions that affect them.`,
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop",
    details: ["Community Mechanisms", "Awareness-Raising", "Child-Friendly Spaces", "Legal Advocacy"]
  },
  {
    id: "environment",
    title: "Environmental Protection",
    description: "Environmental degradation, deforestation, and poor waste management are rising threats across the world, particularly in urban and post-conflict areas where displaced populations strain limited natural resources.",
    fullContent: `Environmental degradation, deforestation, and poor waste management are rising threats across the world, particularly in urban and post-conflict areas where displaced populations strain limited natural resources. Climate change is further exacerbating food insecurity, water scarcity, and health issues.

Conservation and Eco-Initiatives
APDFE's environmental program raises awareness about climate change, promotes community-led conservation, and integrates green practices into all programming. We support women- and youth-led eco-initiatives, such as tree planting, sustainable farming, recycling projects, and clean energy use. Our aim is to promote environmental stewardship while creating green jobs and building community resilience to environmental shocks.`,
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?q=80&w=2070&auto=format&fit=crop",
    details: ["Climate Awareness", "Community Conservation", "Eco-Initiatives", "Green Jobs"]
  },
  {
    id: "education",
    title: "Education Program",
    description: "Education remains a significant challenge in all the four countries where APDFE operates which are Central African Republic, Democratic Republic of Congo (Eastern-DRC), Congo-Brazzaville and Cameroon.",
    fullContent: `Education remains a significant challenge in all the four countries where APDFE operates which are Central African Republic, Democratic Republic of Congo (Eastern-DRC), Congo-Brazzaville and Cameroon, where years of conflict and instability have led to the destruction of schools, displacement of teachers, and a breakdown in the formal education system. Vulnerable groups especially girls from displaced or impoverished backgrounds are often excluded from education due to poverty, early marriage, and insecurity.

Literacy, Numeracy, and Empowerment
APDFE's Education Program seeks to bridge this gap by offering literacy and numeracy programs specifically designed for out-of-school and marginalized women and girls. We provide foundational skills in reading, writing, and basic mathematics, complemented by life skills and leadership training that help learners gain confidence and agency in their communities. Our approach prioritizes the creation of safe, inclusive learning environments where women and girls can grow without fear.`,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
    details: ["Literacy and Numeracy", "Life Skills Training", "Scholastic Materials", "Advocacy Campaigns"]
  },
  {
    id: "peace",
    title: "Peace-Building and Governance",
    description: "Decades of armed conflict and political instability have undermined peace, trust in institutions, and social cohesion in many countries of Africa.",
    fullContent: `Decades of armed conflict and political instability have undermined peace, trust in institutions, and social cohesion in many countries of Africa. Women and youth are often excluded from peace processes, yet they play critical roles in building local resilience and fostering reconciliation.

Inclusive Peace and Governance
APDFE's peace-building and governance program promotes inclusive dialogue, local leadership, and civic engagement. We train women and youth in conflict resolution, non-violent communication, and leadership skills, while supporting local peace committees and participatory governance structures. Through advocacy and awareness campaigns, we promote transparency, accountability, and the inclusion of marginalized voices in peace-building efforts, believing that sustainable peace must be built from the ground up with the full participation of those most affected by conflict.`,
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop",
    details: ["Inclusive Dialogue", "Leadership Training", "Peace Committees", "Advocacy Campaigns"]
  }
];
