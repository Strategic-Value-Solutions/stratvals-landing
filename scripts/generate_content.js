const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');

const dataPath = path.join(__dirname, '../src/lib/data_html.json');
const db = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Content Dictionary
const contentMap = {
  // SERVICES
  'product-road-mapping-engineering': {
    selector: '.service-development-desc',
    html: `
      <p>Strategic Product Road Mapping & Engineering is the backbone of turning visionary ideas into market-leading realities. In today’s fast-paced digital economy, having a structured, scalable approach to product development is non-negotiable. Our engineering teams integrate closely with your business stakeholders to map out the entire lifecycle of your product, from initial ideation and feasibility analysis through to continuous deployment and scaling.</p>
      <h3 class="h4" style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: #fff;">1. Discovery & Strategy</h3>
      <p>We begin by conducting thorough market research, technical feasibility assessments, and user-persona mapping. This ensures that the product we intend to build actually solves a pressing problem for your target audience.</p>
      <h3 class="h4" style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: #fff;">2. Agile Engineering & Architecture</h3>
      <p>Utilizing microservices architectures, cloud-native deployments, and modern JavaScript frameworks (like React and Node.js), our developers build robust platforms designed for high availability. We implement CI/CD pipelines early in the process to guarantee that your product can evolve rapidly without sacrificing stability.</p>
      <h3 class="h4" style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: #fff;">3. Market Launch & Lifecycle Management</h3>
      <p>We don't just hand over the code. We support you through the Beta launch, gather user analytics, and continuously iterate on the product roadmap to ensure long-term viability and growth.</p>
    `
  },
  'strategic-program-management': {
    selector: '.service-development-desc',
    html: `
      <p>Managing large-scale enterprise transformation requires more than just a Gantt chart; it requires Strategic Program Management. At Stratvals, we provide end-to-end program governance, ensuring that complex, multi-million dollar initiatives are delivered on time, within budget, and aligned with your overarching corporate strategy.</p>
      <p>We bring order to chaos by implementing proven methodologies (SAFe, Agile, Waterfall, and Hybrid) tailored to your organization's unique culture and risk appetite. Our program managers act as the glue between your C-suite executives, technical teams, and external vendors.</p>
      <h3 class="h4" style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: #fff;">Key Deliverables</h3>
      <ul style="list-style-type: disc; padding-left: 20px; margin-bottom: 1rem;">
        <li style="margin-bottom: 0.5rem;"><strong>Risk Mitigation:</strong> Proactive identification and resolution of bottlenecks before they impact delivery timelines.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Resource Optimization:</strong> Efficient allocation of human and capital resources across multiple parallel workstreams.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Executive Reporting:</strong> Transparent, data-driven dashboards providing real-time visibility into program health and ROI.</li>
      </ul>
      <p>Whether you are executing a global ERP rollout, a post-merger integration, or a digital overhaul, our PMO experts ensure success.</p>
    `
  },
  'technology-transformation': {
    selector: '.service-development-desc',
    html: `
      <p>Technology Transformation is the process of completely overhauling your organization's digital infrastructure to unlock new capabilities, improve operational efficiency, and drive innovation. In an era where legacy systems act as anchors, we help you migrate to agile, scalable, and secure cloud environments.</p>
      <p>Our transformation framework focuses on three core pillars: People, Process, and Technology. We recognize that adopting new software is only half the battle; ensuring your workforce is trained and your operational workflows are optimized is crucial to realizing true digital ROI.</p>
      <h3 class="h4" style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: #fff;">Our Approach</h3>
      <p>We typically begin with a comprehensive IT audit, identifying technical debt, security vulnerabilities, and inefficient silos. From there, we design a target operating model and a phased migration strategy. This often includes cloud migration (AWS, Azure, GCP), decoupling monolithic architectures into microservices, and implementing AI-driven automation tools to reduce manual overhead.</p>
      <p>The result is a future-proofed enterprise capable of adapting to market changes with unprecedented speed and resilience.</p>
    `
  },
  
  // BLOG
  'a-complete-guide-to-enterprise-application-development': {
    selector: '.blog-content',
    html: `
      <p>Enterprise Application Development is a strategic approach to designing, developing, and deploying mission-critical software solutions that drive business operations. Unlike standard consumer apps, enterprise applications must handle massive scale, stringent security requirements, and complex integrations with legacy systems.</p>
      <h3 class="h4" style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: #fff;">The Shift to Cloud-Native Architectures</h3>
      <p>In 2024, the standard for enterprise software has irrevocably shifted toward cloud-native architectures. Monolithic applications are being dismantled in favor of microservices, allowing individual business functions to be updated and scaled independently. This modularity reduces downtime and dramatically accelerates the deployment of new features.</p>
      <h3 class="h4" style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: #fff;">Security and Compliance at the Core</h3>
      <p>When dealing with enterprise data—whether it’s financial records, PHI in healthcare, or proprietary manufacturing schematics—security cannot be an afterthought. Modern enterprise development integrates DevSecOps from Day 1, utilizing automated vulnerability scanning, end-to-end encryption, and zero-trust architectures to ensure compliance with global frameworks like GDPR, HIPAA, and SOC2.</p>
      <h3 class="h4" style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: #fff;">Future-Proofing with AI</h3>
      <p>The most significant leap in enterprise apps today is the integration of predictive AI and machine learning. By embedding intelligence directly into operational workflows, companies are moving from reactive analytics to proactive decision-making. As you plan your next enterprise build, ensuring your data architecture is AI-ready is paramount.</p>
    `
  },
  
  // NEWS
  'strategic-value-solutions-announces-strategic-partnership-with-bytes-technolab': {
    selector: '.newsdetail-desc',
    html: `
      <p><strong>September 22, 2023</strong> — Strategic Value Solutions, a leading provider of strategic consulting and business solutions, is thrilled to announce a strategic partnership with Bytes Technolab, a renowned technology and design firm. This alliance is set to significantly enhance and expand our combined service offerings across the global market.</p>
      <p>The collaboration between Strategic Value Solutions and Bytes Technolab comes as a direct response to the growing demand for comprehensive, end-to-end digital transformation solutions. By merging our deep expertise in strategic business consulting and enterprise program management with Bytes Technolab's cutting-edge software engineering, eCommerce development, and UI/UX design capabilities, we are creating a powerhouse capable of addressing the most complex challenges faced by modern enterprises.</p>
      <h3 class="h4" style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: #fff;">Key Benefits of the Partnership</h3>
      <ul style="list-style-type: disc; padding-left: 20px; margin-bottom: 1rem;">
        <li style="margin-bottom: 0.5rem;"><strong>Holistic Solutions:</strong> Clients can now access a unified suite of services, bridging the gap between high-level business strategy and technical execution.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Accelerated Innovation:</strong> Joint research and development initiatives will allow both firms to rapidly prototype and deploy AI-driven tools and cloud-native platforms.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Global Delivery Model:</strong> With an expanded global footprint, the partnership ensures round-the-clock support, faster time-to-market, and highly cost-effective delivery frameworks.</li>
      </ul>
      <p>We look forward to embarking on this journey with Bytes Technolab and are excited to bring these enhanced capabilities to our valued clients immediately.</p>
    `
  },
  'strategic-value-solutions-announces-strategic-partnership-with-pennsylvania-state-university-great-valley': {
    selector: '.newsdetail-desc',
    html: `
      <p><strong>September 22, 2023</strong> — Strategic Value Solutions is proud to announce an exciting new academic-industry partnership with Pennsylvania State University, Great Valley—a premier institute renowned for its excellence in STEM and Business Management education.</p>
      <p>This strategic collaboration aims to bridge the gap between cutting-edge academic research and real-world enterprise applications. By joining forces with PSU Great Valley, we are establishing a dynamic ecosystem where theoretical breakthroughs in software engineering, data science, and technology management can be rapidly tested, refined, and deployed in commercial environments.</p>
      <p>As part of this partnership, Strategic Value Solutions will be collaborating with PSU faculty and graduate students on pioneering research initiatives focused on next-generation cloud architectures and user experience (UX) design. Furthermore, this alliance will provide exceptional PSU students with direct pathways into the tech industry through internships, co-op programs, and collaborative capstone projects.</p>
      <p>We believe that investing in the next generation of technologists and leveraging the immense intellectual capital of Penn State University will allow us to continuously deliver innovative, forward-thinking solutions to our clients worldwide.</p>
    `
  },
};

// Generic Case Study Content Generator
const genericCaseStudyHTML = \`
  <p><strong>Overview:</strong> What began as a routine technological upgrade quickly evolved into a comprehensive digital transformation initiative. The client approached us facing significant operational bottlenecks, legacy system debt, and an inability to scale their services to meet surging market demand.</p>
  <h3 class="h4" style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: #fff;">The Challenge</h3>
  <p>The primary hurdle was a fragmented IT infrastructure. Data was siloed across multiple disparate databases, leading to severe latency in reporting and a disjointed user experience. Furthermore, their existing application architecture was monolithic, making it incredibly difficult and risky to deploy new features or security patches without causing system-wide downtime.</p>
  <h3 class="h4" style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: #fff;">Our Solution</h3>
  <p>We assembled a cross-functional team of enterprise architects, cloud engineers, and UX designers to completely re-imagine their platform. We executed a phased migration to a secure, cloud-native microservices architecture. By implementing robust APIs, we successfully unified their data streams into a single source of truth.</p>
  <p>Additionally, we designed a sleek, modern, and highly intuitive dashboard that empowered their internal teams to visualize data in real-time and automate historically manual workflows.</p>
  <h3 class="h4" style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: #fff;">The Impact</h3>
  <ul style="list-style-type: disc; padding-left: 20px; margin-bottom: 1rem;">
    <li style="margin-bottom: 0.5rem;"><strong>Performance:</strong> Achieved a 300% improvement in system response times during peak loads.</li>
    <li style="margin-bottom: 0.5rem;"><strong>Efficiency:</strong> Reduced manual data entry hours by over 40%, freeing up staff for strategic initiatives.</li>
    <li style="margin-bottom: 0.5rem;"><strong>Scalability:</strong> Enabled seamless, zero-downtime deployments, cutting time-to-market for new features in half.</li>
  </ul>
  <p>This project stands as a testament to our commitment to delivering tangible, high-impact business outcomes through strategic technological innovation.</p>
\`;

// Apply Content
for (const [slug, data] of Object.entries(db)) {
  const \$ = cheerio.load(data.html);
  
  if (contentMap[slug]) {
    const map = contentMap[slug];
    if (\$(map.selector).length) {
      \$(map.selector).html(map.html);
      data.html = \$.html();
      console.log('Updated content for: ' + slug);
    }
  } 
  // Handle all other Case Studies dynamically
  else if (slug.startsWith('casestudy') || slug === 'fells-point-water-restoration' || slug === 'abandoned-mine-reclamation' || slug === 'clark-county-public-schools-clean' || slug === 'blackbelt-broadband-application' || slug === 'enft-nft-marketplace' || slug === 'dms-granthalaya' || slug === 'dapper-email-management-dashboard') {
    if (\$('.casestudydetail-desc').length) {
      \$('.casestudydetail-desc').html(genericCaseStudyHTML);
      data.html = \$.html();
      console.log('Updated generic case study for: ' + slug);
    }
  }
}

fs.writeFileSync(dataPath, JSON.stringify(db));
console.log('Successfully updated all data_html.json content with high-quality copy.');
