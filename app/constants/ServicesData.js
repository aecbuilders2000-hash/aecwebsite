// Nested data for services and their subservices.
// Structure: { [mainSlug]: { title, image, description, subs: { [subSlug]: { ... } } } }
//
// SUBSERVICE FIELDS EXPLAINED:
// - title: Main title of the subservice (used in all sections)
// - subtitle: Short tagline for the service
// - image: Image URL for the service
// - heroTitle: Title displayed in the hero section (defaults to 'title' if not provided)
// - heroDescription: Short description in hero section with image background
// - sectionDescription: Detailed description in the main content section below hero
// - description: General description used in the white section of the hero (explains parent service)
// - features: Array of key features/highlights
// - keyOfferings: Array of objects detailing specific offerings
// - process: Array of objects detailing the workflow steps

const SERVICES = {
  bim: {
    title: "BIM Services",
    image: "https://i.postimg.cc/XY1ncRfz/BimBG.jpg",
    description: "Comprehensive BIM services leveraging cutting-edge technology for enhanced project coordination, clash detection, and lifecycle management.",
    subs: {
      "bim-consulting-services": {
        title: "BIM Consulting Services",
        subtitle: "Strategy, workflows and BIM execution planning",
        image: "https://i.postimg.cc/Y2yyNqYB/BIMSERVICES.jpg",
        heroTitle: "BIM Consulting Services",
        heroDescription: "Redefining precision through intelligent BIM. At Collective AEC, we turn design data into dynamic, buildable realities through innovations and collaborations.",
        sectionDescription: "At Collective AEC, we redefine precision through intelligent BIM solutions. From establishing seamless Common Data Environments to crafting customized BIM Execution Plans (BEP), our approach ensures every project begins with clarity and innovation. Our expert team transforms your BIM goals into built realities delivering accuracy, collaboration, and forward-thinking results through advanced BIM modelling, Revit drafting, and parametric design expertise.",
        description: "We help teams define a practical BIM strategy, document standards, and create BIM execution plans so projects run smoothly from early design through handover. Our approach focuses on reproducible workflows, clear responsibilities, and measurable deliverables to reduce confusion and delays.",
        keyOfferings: [
          { id: 'bim-consulting-services-ko-1', title: 'Design-Led Engineering', text: 'Buildable, beautiful solutions.' },
          { id: 'bim-consulting-services-ko-2', title: 'Digital Workflows', text: 'BIM-ready deliverables and cloud collaboration.' },
          { id: 'bim-consulting-services-ko-3', title: 'Performance', text: 'Energy-conscious design for resilient outcomes.' },
          { id: 'bim-consulting-services-ko-4', title: 'Coordination', text: 'Multi-discipline coordination and reviews.' },
          { id: 'bim-consulting-services-ko-5', title: 'Visualization', text: 'Photoreal visualizations and renders.' }
        ],
        process: [
          { id: 'bim-consulting-services-p-1', title: 'Understand', text: 'We begin by understanding the project goals, constraints and context.' },
          { id: 'bim-consulting-services-p-2', title: 'Analyse', text: 'We analyze site, codes, and functional requirements to shape the technical approach.' },
          { id: 'bim-consulting-services-p-3', title: 'Optimize', text: 'We optimize systems for performance, cost and constructability.' },
          { id: 'bim-consulting-services-p-4', title: 'Automate', text: 'We deliver automated workflows to streamline project delivery.' }
        ],
        features: ["BIM standards", "BIM execution plans", "Team training"],
      },
      "scan-to-bim": {
        title: "Scan to BIM",
        subtitle: "Reality capture converted into intelligent models",
        image: "https://i.postimg.cc/Y2yyNqYB/BIMSERVICES.jpg",
        heroTitle: "Scan to BIM",
        heroDescription: "Transform reality capture into precision. At Collective AEC, we convert laser scan data into intelligent, measurable BIM models for renovation and retrofit excellence.",
        sectionDescription: "We transform laser scan data into accurate, measurable BIM models ideal for renovation and retrofit projects. The deliverables include cleaned point clouds, geo-referenced models, and as-built BIM ready for coordination and verification.",
        description: "We transform laser scan data into accurate, measurable BIM models ideal for renovation and retrofit projects. The deliverables include cleaned point clouds, geo-referenced models, and as-built BIM ready for coordination and verification.",
        keyOfferings: [
          { id: 'scan-to-bim-services-ko-1', title: 'Reality Capture & Registration', text: 'High-resolution, georeferenced point clouds using terrestrial, mobile, or drone scanners.' },
          { id: 'scan-to-bim-services-ko-2', title: 'Point Cloud Processing & Cleanup', text: 'Noise filtering, alignment, segmentation, and classification to ensure accuracy and usability of data.' },
          { id: 'scan-to-bim-services-ko-3', title: 'As-Built BIM Modeling', text: 'Creation of native Revit models (Architectural, Structural, MEP) enriched with intelligent data for design and documentation.' },
          { id: 'scan-to-bim-services-ko-4', title: 'LOD / LOI Custom Modeling', text: 'Support from LOD 100 to LOD 500, tailored as per client requirements and project complexity.' },
          { id: 'scan-to-bim-services-ko-5', title: '2D Extraction & CAD Deliverables', text: 'Generation of precise 2D drawings—plans, sections, elevations—directly derived from BIM models.' },
          { id: 'scan-to-bim-services-ko-6', title: 'Clash Analysis & Coordination', text: 'Detection and resolution of conflicts between scanned geometry and new design elements for seamless coordination.' },
          { id: 'scan-to-bim-services-ko-7', title: 'Digital Twin & Facility Data Integration', text: 'Integration of asset metadata, COBie, or maintenance data to create intelligent digital twins for lifecycle management.' }
        ],
        process: [
          { id: 'scan-to-bim-services-p-1', title: 'Discover & Plan', text: 'We begin by aligning scope, objectives, scan zones, accuracy targets, and deliverable formats.' },
          { id: 'scan-to-bim-services-p-2', title: 'Scan & Capture', text: 'Field teams deploy LiDAR, terrestrial, or drone scanning systems to capture precise on-site data.' },
          { id: 'scan-to-bim-services-p-3', title: 'Register & Validate', text: 'Multiple scan stations are registered into a cohesive point cloud, verified for accuracy and completeness.' },
          { id: 'scan-to-bim-services-p-4', title: 'Classify & Segment', text: 'Scanned data is segmented into architectural, structural, and MEP elements for efficient modeling.' },
          { id: 'scan-to-bim-services-p-5', title: 'Model in BIM', text: 'Point cloud data is transformed into intelligent, parametric Revit models reflecting true as-built conditions.' },
          { id: 'scan-to-bim-services-p-6', title: 'Quality & Clash Checks', text: 'Rigorous QA ensures geometric precision and coordination between existing conditions and new design models.' },
          { id: 'scan-to-bim-services-p-7', title: 'Deliver & Support', text: 'Final deliverables are shared in Revit, IFC, and CAD formats with ongoing support for coordination and updates.' }
        ],
        features: [
          "Point cloud processing",
          "As-built modeling",
          "Dimensional verification",
        ],
      },
      "bim-coordination": {
        title: "BIM Coordination",
        subtitle: "Integrated model coordination and clash resolution",
        image: "https://i.postimg.cc/Y2yyNqYB/BIMSERVICES.jpg",
        heroTitle: "BIM Coordination",
        heroDescription: "Seamless multi-discipline coordination. At Collective AEC, we integrate architectural, structural, and MEP models into unified solutions, eliminating conflicts before they reach the field.",
        sectionDescription: "Federated model coordination with iterative clash detection cycles and concise coordination reports to reduce on-site conflicts. We run coordinated reviews, assign clear actions, and track resolutions to keep the construction programme on schedule. Our systematic approach ensures all disciplines work in harmony, minimizing rework and maximizing efficiency throughout the project lifecycle.",
        description: "Federated model coordination with iterative clash detection cycles and concise coordination reports to reduce on-site conflicts. We run coordinated reviews, assign clear actions, and track resolutions to keep the construction programme on schedule.",
        keyOfferings: [
          { id: 'bim-consulting-ko-1', title: 'BIM Advisory', text: 'Strategic guidance through the BIM lifecycle—from planning and strategy to execution, using best practices in creating common data environments and BIM Execution Plans.' },
          { id: 'bim-consulting-ko-2', title: 'BIM Training', text: 'Specialized programs covering 3D modeling, 4D scheduling, 5D cost estimation, and 7D facility management to boost your team’s skills using tools like Revit and Navisworks.' },
          { id: 'bim-consulting-ko-3', title: 'Strategic BIM Planning', text: 'Feasibility studies, proposals, and roadmap development to ensure your BIM strategy aligns with project goals and constraints.' },
          { id: 'bim-consulting-ko-4', title: 'BIM Automation', text: 'Automation of repetitive tasks, improved documentation, and optimized workflows to reduce errors and speed up delivery.' },
          { id: 'bim-consulting-ko-5', title: 'BIM Audit', text: 'Comprehensive evaluations of BIM workflows and models for standards compliance, constructability, and execution fidelity, delivering action-oriented insights.' },
          { id: 'bim-consulting-ko-6', title: 'BIM Implementation', text: 'Hands-on support setting up workflows, tools, templates, and integrating BIM into project delivery to ensure practical adoption.' },
          { id: 'bim-consulting-ko-7', title: 'BIM Execution Plan', text: 'Detailed roadmaps defining roles, responsibilities, deliverables, and workflows across the project lifecycle for clarity and accountability.' },
          { id: 'bim-consulting-ko-8', title: 'Constructability Reviews', text: 'Assessing models, drawings, and specifications to identify and resolve build-real operation and execution issues early.' },
          { id: 'bim-consulting-ko-9', title: 'BIM Management', text: 'Ongoing management of BIM standards, templates, model delivery, asset operation plans, training, and process governance.' }
        ],

        process: [
          { id: 'bim-consulting-p-1', title: 'Understand', text: 'Dive deep into your goals, existing workflows, standards, and current challenges to align on scope.' },
          { id: 'bim-consulting-p-2', title: 'Analyze', text: 'Review past projects and internal practices to identify gaps, risks, and improvement areas.' },
          { id: 'bim-consulting-p-3', title: 'Outline', text: 'Design a bespoke BIM roadmap with optimized workflows, template standards, documentation protocols, roles, and deliverables.' },
          { id: 'bim-consulting-p-4', title: 'Train', text: 'Provide training to your team on software, standards, and best practices to ensure consistent execution.' },
          { id: 'bim-consulting-p-5', title: 'Test', text: 'Pilot or trial BIM workflows and templates in controlled settings to validate approach and make refinements.' },
          { id: 'bim-consulting-p-6', title: 'Implement', text: 'Deploy the roadmap, tools, and processes in live projects, with ongoing support and monitoring to ensure adoption and performance.' }
        ],
        features: [
          "Clash detection",
          "Federated modeling",
          "Coordination meetings",
        ],
      },
      "bim-clash-detection": {
        title: "BIM Clash Detection",
        subtitle: "Automated clash reports and mitigation",
        image: "https://i.postimg.cc/Y2yyNqYB/BIMSERVICES.jpg",
        heroTitle: "BIM Clash Detection",
        heroDescription: "Proactive conflict resolution through advanced automation. At Collective AEC, we identify and resolve design clashes before construction, saving time, cost, and preventing on-site delays.",
        sectionDescription: "Proactive clash management using automated tools and prioritised reporting to minimise rework and schedule delays. Our workflows provide actionable lists and follow-up tracking so teams can close issues efficiently. We leverage industry-leading software to run comprehensive clash detection across all project phases, delivering detailed reports that enable swift resolution and coordinated decision-making.",
        description: "Proactive clash management using automated tools and prioritised reporting to minimise rework and schedule delays. Our workflows provide actionable lists and follow-up tracking so teams can close issues efficiently.",
        keyOfferings: [
          { id: 'bim-clash-detection-ko-1', title: 'Automated Runs', text: 'Scheduled clash detection and triage.' },
          { id: 'bim-clash-detection-ko-2', title: 'Prioritisation', text: 'Severity tagging and filtering.' },
          { id: 'bim-clash-detection-ko-3', title: 'Reporting', text: 'Clear issue lists and visuals.' },
          { id: 'bim-clash-detection-ko-4', title: 'Follow-up', text: 'Track closures and rechecks.' },
          { id: 'bim-clash-detection-ko-5', title: 'Audit', text: 'Maintain clash history and trends.' }
        ],
        process: [
          { id: 'bim-clash-detection-p-1', title: 'Schedule', text: 'Plan clash detection runs.' },
          { id: 'bim-clash-detection-p-2', title: 'Run', text: 'Execute automated clash checks.' },
          { id: 'bim-clash-detection-p-3', title: 'Report', text: 'Generate readable reports with visuals.' },
          { id: 'bim-clash-detection-p-4', title: 'Resolve', text: 'Assign issues and confirm closures.' }
        ],
        features: [
          "Automated clash runs",
          "Prioritised reporting",
          "Resolution tracking",
        ],
      },
      "4d-bim-services": {
        title: "4D BIM Services",
        subtitle: "Construction sequencing and simulation",
        image: "https://i.postimg.cc/Y2yyNqYB/BIMSERVICES.jpg",
        heroTitle: "4D BIM Services",
        heroDescription: "Visualizing construction through time. At Collective AEC, we link project schedules to BIM models, creating dynamic 4D simulations that optimize sequencing, logistics, and site safety.",
        sectionDescription: "We link programme data to BIM to produce construction simulations, logistics plans and sequence visualisations. These 4D outputs help planners validate access, identify clashes over time, and optimise sequencing for safer, faster builds. Our 4D BIM services enable project teams to anticipate challenges, coordinate trades effectively, and communicate construction strategies with unprecedented clarity and precision.",
        description: "We link programme data to BIM to produce construction simulations, logistics plans and sequence visualisations. These 4D outputs help planners validate access, identify clashes over time, and optimise sequencing for safer, faster builds.",
        keyOfferings: [
          { id: '4d-scheduling-ko-1', title: 'Integrated Scheduling', text: 'Seamless integration of project management tools like Primavera with BIM tools such as Autodesk Revit and Navisworks to create precise construction simulations and phasing videos.' },
          { id: '4d-scheduling-ko-2', title: 'Resource Optimization', text: 'Optimization of the entire supply chain and logistics, ensuring optimal resource allocation while mitigating risks.' },
          { id: '4d-scheduling-ko-3', title: 'Sequencing Models', text: 'Development of precise sequencing models and phasing charts to aid in tracking resources and communicating progress to site engineers and consultants.' },
          { id: '4d-scheduling-ko-4', title: 'Lean Construction Scheduling', text: 'Empowerment of general contractors and construction companies to adopt lean construction scheduling practices to stay profitable and reduce waste.' }
        ],
        process: [
          { id: '4d-scheduling-p-1', title: 'Integration', text: 'Integrate project management tools with BIM software to create a comprehensive construction simulation.' },
          { id: '4d-scheduling-p-2', title: 'Sequencing', text: 'Develop detailed sequencing models and phasing charts to visualize the construction process.' },
          { id: '4d-scheduling-p-3', title: 'Resource Allocation', text: 'Optimize resource allocation and logistics to ensure efficient project execution.' },
          { id: '4d-scheduling-p-4', title: 'Collaboration', text: 'Enhance collaboration among stakeholders through clear communication of progress and potential issues.' },
          { id: '4d-scheduling-p-5', title: 'Monitoring', text: 'Monitor the construction process to identify and resolve conflicts, ensuring timely project completion.' }
        ],
        features: [
          "Schedule linking",
          "4D visualisations",
          "Logistics modelling",
        ],
      },
      "quantity-takeoff": {
        title: "Quantity Takeoff",
        subtitle: "Accurate automated quantity extraction",
        image: "https://i.postimg.cc/Y2yyNqYB/BIMSERVICES.jpg",
        heroTitle: "Quantity Takeoff",
        heroDescription: "Precision measurement from intelligent models. At Collective AEC, we extract accurate quantities directly from BIM, delivering reliable data for cost estimation, procurement, and project planning.",
        sectionDescription: "Model-based quantity takeoffs that deliver reliable counts and measures for early estimates and procurement readiness. Outputs are provided in standard formats for cost planning and tendering to reduce manual measurement errors. Our automated extraction processes ensure consistency and accuracy while dramatically reducing the time required for quantity surveying and material scheduling.",
        description: "Model-based quantity takeoffs that deliver reliable counts and measures for early estimates and procurement readiness. Outputs are provided in standard formats for cost planning and tendering to reduce manual measurement errors.",
        keyOfferings: [
          { id: 'quantity-takeoff-ko-1', title: '5D BIM Integration', text: 'Seamless integration of cost data with 3D models using Revit and other 5D tools, enabling real-time cost estimation and adjustments.' },
          { id: 'quantity-takeoff-ko-2', title: 'Automated Quantity Extraction', text: 'Automatic extraction of material quantities from BIM models, reducing manual errors and saving time.' },
          { id: 'quantity-takeoff-ko-3', title: 'Detailed Cost Estimation', text: 'Comprehensive cost estimation based on accurate quantity takeoffs, facilitating informed decision-making.' },
          { id: 'quantity-takeoff-ko-4', title: 'Design Change Impact Analysis', text: 'Assessment of how design changes affect material quantities and costs, aiding in proactive project management.' },
          { id: 'quantity-takeoff-ko-5', title: 'Waste Reduction', text: 'Identification of potential material wastage through precise quantity takeoffs, promoting sustainability.' }
        ],
        process: [
          { id: 'quantity-takeoff-p-1', title: 'Model Integration', text: 'Integrate architectural, structural, and MEP models into a unified BIM environment.' },
          { id: 'quantity-takeoff-p-2', title: 'Quantity Extraction', text: 'Utilize BIM tools to extract accurate material quantities from the integrated models.' },
          { id: 'quantity-takeoff-p-3', title: 'Cost Estimation', text: 'Apply unit costs to the extracted quantities to generate detailed cost estimates.' },
          { id: 'quantity-takeoff-p-4', title: 'Design Analysis', text: 'Analyze the impact of design changes on material quantities and costs.' },
          { id: 'quantity-takeoff-p-5', title: 'Reporting', text: 'Generate comprehensive reports detailing quantities, costs, and potential wastage.' }
        ],
        features: [
          "Model-based quantities",
          "Format exports",
          "Cross-checking",
        ],
      },
    },
  },
  mep: {
    title: "MEP Design",
    image: "https://i.postimg.cc/J4HmZFyX/MEPSERVICE.jpg",
    description: "Complete MEP design and coordination services ensuring seamless integration of building systems through advanced BIM technology.",
    subs: {
      "mep-bim-services": {
        title: "MEP BIM Services",
        subtitle: "Modeling and system coordination",
        image: "https://i.postimg.cc/J4HmZFyX/MEPSERVICE.jpg",
        heroTitle: "MEP BIM Services",
        heroDescription: "Intelligent MEP systems through advanced BIM. At Collective AEC, we create detailed mechanical, electrical, and plumbing models that drive precision installation and seamless coordination.",
        sectionDescription: "Detailed MEP models developed for coordination, performance analysis and construction documentation. We model systems to fabrication level where required and ensure systems are tagged and scheduled for efficient installation. Our comprehensive approach includes coordinated routing, equipment placement, and system optimization to deliver constructible solutions that meet performance requirements while minimizing conflicts and installation challenges.",
        description: "Detailed MEP models developed for coordination, performance analysis and construction documentation. We model systems to fabrication level where required and ensure systems are tagged and scheduled for efficient installation.",
        keyOfferings: [
          { id: 'mep-bim-ko-1', title: 'MEP BIM Modeling', text: 'Creation of intelligent 3D models for mechanical, electrical, plumbing, and fire protection systems, serving as a single source of truth for the entire project.' },
          { id: 'mep-bim-ko-2', title: 'Scan to BIM for Renovations', text: 'Conversion of laser scans of existing buildings into accurate BIM models, ensuring seamless integration of new MEP systems with existing structures.' },
          { id: 'mep-bim-ko-3', title: 'Revit Family Creation', text: 'Development of custom Revit families for specific MEP components, ensuring models accurately reflect real-world products.' },
          { id: 'mep-bim-ko-4', title: 'MEP Shop Drawings', text: 'Production of detailed shop drawings for MEP systems, facilitating accurate fabrication and installation.' }
        ],
        process: [
          { id: 'mep-bim-p-1', title: 'Modeling', text: 'Develop intelligent 3D models for MEP systems using Revit, ensuring accuracy and coordination.' },
          { id: 'mep-bim-p-2', title: 'Coordination', text: 'Integrate MEP models with architectural and structural models to identify and resolve clashes.' },
          { id: 'mep-bim-p-3', title: 'Shop Drawing Creation', text: 'Generate detailed shop drawings from coordinated models for precise fabrication and installation.' },
          { id: 'mep-bim-p-4', title: 'Quality Assurance', text: 'Conduct thorough quality checks to ensure models and drawings meet project standards and specifications.' }
        ],
        features: ["Duct & pipe modeling", "MEP closets", "System tagging"],
      },
      "mep-bim-coordination": {
        title: "MEP BIM Coordination",
        subtitle: "Multi-disciplinary coordination and clash resolution",
        image: "https://i.postimg.cc/J4HmZFyX/MEPSERVICE.jpg",
        heroTitle: "MEP BIM Coordination",
        heroDescription: "Harmonizing complex building systems. At Collective AEC, we bridge MEP, structural, and architectural disciplines through rigorous coordination that eliminates conflicts and accelerates construction.",
        sectionDescription: "Cross-discipline clash detection and coordination that bridges MEP, structural and architectural teams. We run regulated coordination cycles and produce issue logs to drive decisions and reduce installation risks. Our systematic coordination methodology ensures mechanical, electrical, and plumbing systems integrate seamlessly with architectural and structural elements, preventing costly on-site modifications and maintaining project schedules.",
        description: "Cross-discipline clash detection and coordination that bridges MEP, structural and architectural teams. We run regulated coordination cycles and produce issue logs to drive decisions and reduce installation risks.",
        keyOfferings: [
          { id: 'mep-bim-coordination-ko-1', title: 'Clash Management', text: 'Manage and prioritise MEP clashes.' },
          { id: 'mep-bim-coordination-ko-2', title: 'Coordination Meetings', text: 'Facilitated cross-discipline reviews.' },
          { id: 'mep-bim-coordination-ko-3', title: 'Issue Tracking', text: 'Maintain actionable logs.' },
          { id: 'mep-bim-coordination-ko-4', title: 'Model Federation', text: 'Create unified datasets for review.' },
          { id: 'mep-bim-coordination-ko-5', title: 'Resolution', text: 'Drive issues to closure.' }
        ],
        process: [
          { id: 'mep-bim-coordination-p-1', title: 'Gather', text: 'Assemble models and requirements.' },
          { id: 'mep-bim-coordination-p-2', title: 'Detect', text: 'Run targeted clash tests.' },
          { id: 'mep-bim-coordination-p-3', title: 'Plan', text: 'Coordinate mitigations and owners.' },
          { id: 'mep-bim-coordination-p-4', title: 'Close', text: 'Confirm fixes and update models.' }
        ],
        features: [
          "Clash management",
          "Coordination meetings",
          "Issue tracking",
        ],
      },
      "clash-detection": {
        title: "Clash Detection",
        subtitle: "Focused clash analysis for MEP systems",
        image: "https://i.postimg.cc/J4HmZFyX/MEPSERVICE.jpg",
        heroTitle: "MEP Clash Detection",
        heroDescription: "Targeted conflict resolution for building systems. At Collective AEC, we perform focused clash analysis on MEP installations, identifying and resolving conflicts early to prevent costly field changes.",
        sectionDescription: "Iterative clash analysis focused on mechanical and electrical systems to identify conflicts early. Reports include visual evidence, severity tagging, and recommended mitigations for rapid decision making. Our specialized approach to MEP clash detection ensures ducting, piping, cable trays, and equipment placements are optimized before fabrication, reducing rework and maintaining installation efficiency throughout construction.",
        description: "Iterative clash analysis focused on mechanical and electrical systems to identify conflicts early. Reports include visual evidence, severity tagging, and recommended mitigations for rapid decision making.",
        keyOfferings: [
          { id: 'clash-detection-ko-1', title: 'Targeted Runs', text: 'Focused clash tests for MEP systems.' },
          { id: 'clash-detection-ko-2', title: 'Reporting', text: 'Readable reports and visuals.' },
          { id: 'clash-detection-ko-3', title: 'Mitigation Plans', text: 'Recommended fixes and owners.' },
          { id: 'clash-detection-ko-4', title: 'Verification', text: 'Re-run and confirm closures.' },
          { id: 'clash-detection-ko-5', title: 'Audit', text: 'Maintain history and trends.' }
        ],
        process: [
          { id: 'clash-detection-p-1', title: 'Plan', text: 'Define scope and targets.' },
          { id: 'clash-detection-p-2', title: 'Execute', text: 'Run detection and screen results.' },
          { id: 'clash-detection-p-3', title: 'Report', text: 'Create concise issue lists.' },
          { id: 'clash-detection-p-4', title: 'Verify', text: 'Confirm fixes and update models.' }
        ],
        features: ["Targeted clash runs", "Reporting", "Mitigation plans"],
      },
      "mep-shop-drawings": {
        title: "MEP Shop Drawings",
        subtitle: "Fabrication-ready drawings",
        image: "https://i.postimg.cc/J4HmZFyX/MEPSERVICE.jpg",
        heroTitle: "MEP Shop Drawings",
        heroDescription: "Fabrication-ready MEP documentation. At Collective AEC, we transform coordinated models into precise shop drawings that guide manufacturing and installation with clarity and accuracy.",
        sectionDescription: "Precise shop drawings and fabrication packages for MEP systems that support fabrication and site assembly. Deliverables include detailed annotations, dimensioning and schedules to reduce RFIs during installation. Our shop drawings provide contractors and fabricators with the exact information needed for efficient manufacturing and installation, including connection details, hanger locations, and installation sequences.",
        description: "Precise shop drawings and fabrication packages for MEP systems that support fabrication and site assembly. Deliverables include detailed annotations, dimensioning and schedules to reduce RFIs during installation.",
        keyOfferings: [
          { id: 'mep-shop-drawings-ko-1', title: 'Fabrication Details', text: 'Dimensioned shop drawings for manufacture.' },
          { id: 'mep-shop-drawings-ko-2', title: 'Hanger Layouts', text: 'Clear installation guides.' },
          { id: 'mep-shop-drawings-ko-3', title: 'Schedules', text: 'Part and fit schedules for fabrication.' },
          { id: 'mep-shop-drawings-ko-4', title: 'QC', text: 'Quality checks and fit verification.' },
          { id: 'mep-shop-drawings-ko-5', title: 'Assembly', text: 'Assembly sequences and notes.' }
        ],
        process: [
          { id: 'mep-shop-drawings-p-1', title: 'Extract', text: 'Pull shop-level geometry from models.' },
          { id: 'mep-shop-drawings-p-2', title: 'Detail', text: 'Annotate and dimension for fabrication.' },
          { id: 'mep-shop-drawings-p-3', title: 'Review', text: 'Check with fabricators and site teams.' },
          { id: 'mep-shop-drawings-p-4', title: 'Deliver', text: 'Handover fabrication packages.' }
        ],
        features: ["Fabrication details", "Schedules", "Coordination"],
      },
      "mep-cad-drafting": {
        title: "MEP CAD Drafting",
        subtitle: "Traditional CAD documentation for MEP",
        image: "https://i.postimg.cc/J4HmZFyX/MEPSERVICE.jpg",
        heroTitle: "MEP CAD Drafting",
        heroDescription: "Traditional CAD precision for MEP systems. At Collective AEC, we deliver DWG-based documentation that maintains consistency with BIM workflows while meeting legacy requirements.",
        sectionDescription: "DWG-based CAD deliverables produced alongside BIM models for teams that require traditional drawing sets. We maintain consistency between CAD and model outputs to avoid discrepancies. Our CAD drafting services ensure proper layering, annotation standards, and documentation clarity for contractors, subcontractors, and teams working in traditional CAD environments while leveraging the benefits of coordinated BIM processes.",
        description: "DWG-based CAD deliverables produced alongside BIM models for teams that require traditional drawing sets. We maintain consistency between CAD and model outputs to avoid discrepancies.",
        keyOfferings: [
          { id: 'mep-cad-drafting-ko-1', title: 'DWG Deliverables', text: 'Standard CAD deliverables conforming to client specs.' },
          { id: 'mep-cad-drafting-ko-2', title: 'Layering', text: 'Structured layer naming and standards.' },
          { id: 'mep-cad-drafting-ko-3', title: 'Annotation', text: 'Clear notes and callouts for site use.' },
          { id: 'mep-cad-drafting-ko-4', title: 'Compatibility', text: 'Align with BIM for consistency.' },
          { id: 'mep-cad-drafting-ko-5', title: 'Export', text: 'Provide DWG and PDF exports.' }
        ],
        process: [
          { id: 'mep-cad-drafting-p-1', title: 'Prepare', text: 'Set up CAD templates and layers.' },
          { id: 'mep-cad-drafting-p-2', title: 'Draft', text: 'Produce floor plans and details.' },
          { id: 'mep-cad-drafting-p-3', title: 'Annotate', text: 'Add notes, dimensions and tags.' },
          { id: 'mep-cad-drafting-p-4', title: 'Deliver', text: 'Export DWGs and PDFs for handover.' }
        ],
        features: ["DWG deliverables", "Layered drawings", "Annotations"],
      },
      "hvac-design": {
        title: "HVAC Design",
        subtitle: "Efficient heating, ventilation, and air conditioning design",
        image: "https://i.postimg.cc/J4HmZFyX/MEPSERVICE.jpg",
        heroTitle: "HVAC Design",
        heroDescription: "Optimized climate control solutions. At Collective AEC, we design HVAC systems that balance occupant comfort, energy efficiency, and installation practicality for superior building performance.",
        sectionDescription: "HVAC design services focused on occupant comfort, energy efficiency and constructability. We perform load calculations, select equipment, and develop ductwork and airflow solutions that integrate with the overall building systems. Our comprehensive HVAC design approach considers thermal comfort, indoor air quality, energy conservation, and maintainability while ensuring seamless coordination with architectural and structural elements throughout all project phases.",
        description: "HVAC design services focused on occupant comfort, energy efficiency and constructability. We perform load calculations, select equipment, and develop ductwork and airflow solutions that integrate with the overall building systems.",
        keyOfferings: [
          { id: 'hvac-design-ko-1', title: 'Load Calculations', text: 'Sizing and selection to meet performance.' },
          { id: 'hvac-design-ko-2', title: 'Ductwork Design', text: 'Optimised routing for efficiency.' },
          { id: 'hvac-design-ko-3', title: 'Equipment Selection', text: 'Specify compliant and efficient equipment.' },
          { id: 'hvac-design-ko-4', title: 'Controls', text: 'Basic control strategy and zoning.' },
          { id: 'hvac-design-ko-5', title: 'Commissioning', text: 'Handover checks and performance verification.' }
        ],
        process: [
          { id: 'hvac-design-p-1', title: 'Assess', text: 'Load calculations and constraints.' },
          { id: 'hvac-design-p-2', title: 'Design', text: 'Develop systems and routes.' },
          { id: 'hvac-design-p-3', title: 'Coordinate', text: 'Integrate with architectural and structural elements.' },
          { id: 'hvac-design-p-4', title: 'Handover', text: 'Provide commissioning and documentation.' }
        ],
        features: [
          "Load calculations",
          "Ductwork design",
          "Equipment selection",
        ],
      },
    },
  },
  architectural: {
    title: "Architectural Design",
    image: "https://i.postimg.cc/vZ2GLJ7w/Architecture-BG.jpg",
    description: "Comprehensive architectural design services from concept to construction documentation, creating innovative spaces that balance aesthetics with functionality.",
    subs: {
      "architectural-design-services": {
        title: "Architectural Design Services",
        subtitle: "Concept to construction documentation",
        image: "https://i.postimg.cc/sfNsBz2Y/ARCHSERVICE.jpg",
        heroTitle: "Architectural Design Services",
        heroDescription: "Transforming visions into built reality. At Collective AEC, we deliver end-to-end architectural design that merges aesthetics with functionality, from initial concepts through construction documentation.",
        sectionDescription: "End-to-end architectural design delivered with emphasis on aesthetics, functional planning, and regulatory compliance. We iterate concept through documentation with stakeholder reviews to keep projects aligned with client goals. Our holistic design approach balances creative vision with practical buildability, ensuring spaces that inspire while meeting performance requirements, budget constraints, and regulatory standards throughout all project phases.",
        description: "End-to-end architectural design delivered with emphasis on aesthetics, functional planning, and regulatory compliance. We iterate concept through documentation with stakeholder reviews to keep projects aligned with client goals.",
        keyOfferings: [
          { id: 'architectural-design-services-ko-1', title: 'Concept Design', text: 'Establish vision and spatial strategy.' },
          { id: 'architectural-design-services-ko-2', title: 'Documentation', text: 'Produce construction-ready drawings.' },
          { id: 'architectural-design-services-ko-3', title: 'Permit Support', text: 'Navigate approvals and permits.' },
          { id: 'architectural-design-services-ko-4', title: 'Stakeholder Reviews', text: 'Facilitate clear decision-making.' },
          { id: 'architectural-design-services-ko-5', title: 'Handover', text: 'Prepare final documentation and as-builts.' }
        ],
        process: [
          { id: 'architectural-design-services-p-1', title: 'Brief', text: 'Gather requirements and constraints.' },
          { id: 'architectural-design-services-p-2', title: 'Design', text: 'Concepts through developed design.' },
          { id: 'architectural-design-services-p-3', title: 'Document', text: 'Produce construction documentation.' },
          { id: 'architectural-design-services-p-4', title: 'Deliver', text: 'Handover and support during construction.' }
        ],
        features: [
          "Concept design",
          "Construction documentation",
          "Permit coordination",
        ],
      },
      "architectural-bim-services": {
        title: "Architectural BIM Services",
        subtitle: "Modeling and documentation for architecture",
        image: "https://i.postimg.cc/sfNsBz2Y/ARCHSERVICE.jpg",
        heroTitle: "Architectural BIM Services",
        heroDescription: "Intelligent architectural modeling excellence. At Collective AEC, we create detailed BIM models that drive coordination, documentation, and visualization for architectural projects of any scale.",
        sectionDescription: "Architectural BIM deliverables supporting detailed documentation, schedules and interdisciplinary coordination. Models are prepared for presentations, documentation sets, and to integrate with structural and MEP workflows. Our architectural BIM services encompass everything from conceptual massing through detailed construction documentation, ensuring accurate material schedules, room data, and coordinated integration with all building systems for seamless project delivery.",
        description: "Architectural BIM deliverables supporting detailed documentation, schedules and interdisciplinary coordination. Models are prepared for presentations, documentation sets, and to integrate with structural and MEP workflows.",
        keyOfferings: [
          { id: 'architectural-bim-services-ko-1', title: 'Architectural Modeling', text: 'Detailed, coordinated models.' },
          { id: 'architectural-bim-services-ko-2', title: 'Schedules', text: 'Generate room and element schedules.' },
          { id: 'architectural-bim-services-ko-3', title: 'Presentations', text: 'Render and presentation deliverables.' },
          { id: 'architectural-bim-services-ko-4', title: 'Documentation', text: 'BIM-ready documentation sets.' },
          { id: 'architectural-bim-services-ko-5', title: 'Integration', text: 'Coordinate with MEP and structure.' }
        ],
        process: [
          { id: 'architectural-bim-services-p-1', title: 'Model', text: 'Create architectural model assets.' },
          { id: 'architectural-bim-services-p-2', title: 'Coordinate', text: 'Ensure multi-discipline compatibility.' },
          { id: 'architectural-bim-services-p-3', title: 'Document', text: 'Prepare outputs for delivery.' },
          { id: 'architectural-bim-services-p-4', title: 'Handover', text: 'Deliver model and documentation.' }
        ],
        features: ["Architectural modeling", "Schedules", "Presentation deliverables"],
      },
      "architectural-cad-drafting": {
        title: "Architectural CAD Drafting",
        subtitle: "2D CAD for architectural workflows",
        image: "https://i.postimg.cc/sfNsBz2Y/ARCHSERVICE.jpg",
        heroTitle: "Architectural CAD Drafting",
        heroDescription: "Precision 2D documentation for architectural projects. At Collective AEC, we produce clear, detailed CAD drawings with proper layering and annotation standards for contractors and consultants.",
        sectionDescription: "CAD-driven documentation for teams needing DWG deliverables, produced with clear layering and annotation standards for downstream use by contractors and consultants. Our architectural CAD drafting services maintain industry-standard conventions while ensuring accuracy and clarity in floor plans, elevations, sections, and details that support efficient construction and coordination across all project stakeholders.",
        description: "CAD-driven documentation for teams needing DWG deliverables, produced with clear layering and annotation standards for downstream use by contractors and consultants.",
        keyOfferings: [
          { id: 'architectural-cad-drafting-ko-1', title: 'CAD Plans', text: 'Produce layer-structured floor plans and elevations.' },
          { id: 'architectural-cad-drafting-ko-2', title: 'Detailing', text: 'Provide construction details and sections.' },
          { id: 'architectural-cad-drafting-ko-3', title: 'Annotations', text: 'Clear callouts for site teams.' },
          { id: 'architectural-cad-drafting-ko-4', title: 'Output', text: 'DWG and PDF exports.' },
          { id: 'architectural-cad-drafting-ko-5', title: 'Standards', text: 'Layering and naming conventions.' }
        ],
        process: [
          { id: 'architectural-cad-drafting-p-1', title: 'Set up', text: 'Prepare templates and layers.' },
          { id: 'architectural-cad-drafting-p-2', title: 'Draft', text: 'Produce drawings to spec.' },
          { id: 'architectural-cad-drafting-p-3', title: 'Check', text: 'QA and dimension checks.' },
          { id: 'architectural-cad-drafting-p-4', title: 'Deliver', text: 'Export DWGs and PDFs.' }
        ],
        features: ["CAD plans", "Detailing", "Annotations"],
      },
      "construction-drawings": {
        title: "Construction Drawings",
        subtitle: "Detailed plans for construction",
        image: "https://i.postimg.cc/sfNsBz2Y/ARCHSERVICE.jpg",
        heroTitle: "Construction Drawings",
        heroDescription: "Construction-ready documentation excellence. At Collective AEC, we prepare comprehensive drawing sets with clear callouts and schedules that guide efficient on-site execution and minimize RFIs.",
        sectionDescription: "Construction drawings prepared for procurement, approvals and on-site teams with clear callouts, schedules and detailing to support efficient delivery and reduce queries during construction. Our construction documentation includes complete drawing sets with coordinated plans, elevations, sections, and details that provide contractors with all information needed for accurate bidding, permitting, and field construction activities.",
        description: "Construction drawings prepared for procurement, approvals and on-site teams with clear callouts, schedules and detailing to support efficient delivery and reduce queries during construction.",
        keyOfferings: [
          { id: 'construction-drawings-ko-1', title: 'Full Set Drawings', text: 'Complete coordinated drawing sets.' },
          { id: 'construction-drawings-ko-2', title: 'Schedules', text: 'Room and finish schedules.' },
          { id: 'construction-drawings-ko-3', title: 'Details', text: 'Construction details and sections.' },
          { id: 'construction-drawings-ko-4', title: 'Coordination', text: 'Coordinate with consultants.' },
          { id: 'construction-drawings-ko-5', title: 'Handover', text: 'Prepare as-built records.' }
        ],
        process: [
          { id: 'construction-drawings-p-1', title: 'Develop', text: 'Produce coordinated construction drawings.' },
          { id: 'construction-drawings-p-2', title: 'Review', text: 'Stakeholder reviews and approvals.' },
          { id: 'construction-drawings-p-3', title: 'Issue', text: 'Issue for construction and tender.' },
          { id: 'construction-drawings-p-4', title: 'Support', text: 'Site queries and clarifications.' }
        ],
        features: ["Full set drawings", "Schedules", "Detailing"],
      },
    },
  },
  structural: {
    title: "Structural Design",
    image: "https://i.postimg.cc/QdYjk2Q2/Structure-BG.jpg",
    description: "Specialized structural engineering services providing detailed steel and rebar solutions for safe, efficient construction projects.",
    subs: {
      "structural-steel-detailing": {
        title: "Structural Steel Detailing",
        subtitle: "Shop-ready steel detailing",
        image: "https://i.postimg.cc/ryPMdTpR/STRUCTURESERVICE.jpg",
        heroTitle: "Structural Steel Detailing",
        heroDescription: "Fabrication-ready steel solutions. At Collective AEC, we deliver precise shop drawings with connection details and assembly sequences that streamline fabrication and accelerate site erection.",
        sectionDescription: "Shop-ready steel detailing including member fabrication details and connection design for efficient fabrication and erection. We provide assembly sequences and schedules to streamline site work. Our comprehensive steel detailing services include anchor bolt plans, erection drawings, and material lists that enable fabricators and contractors to execute structural steel installations with precision, efficiency, and safety throughout all construction phases.",
        description: "Shop-ready steel detailing including member fabrication details and connection design for efficient fabrication and erection. We provide assembly sequences and schedules to streamline site work.",
        keyOfferings: [
          { id: 'structural-steel-detailing-ko-1', title: 'Shop Drawings', text: 'Detailed fabrication drawings.' },
          { id: 'structural-steel-detailing-ko-2', title: 'Connections', text: 'Design and document connections.' },
          { id: 'structural-steel-detailing-ko-3', title: 'Schedules', text: 'Part and material schedules.' },
          { id: 'structural-steel-detailing-ko-4', title: 'Assembly', text: 'Erection sequences and notes.' },
          { id: 'structural-steel-detailing-ko-5', title: 'Quality', text: 'QC and verification.' }
        ],
        process: [
          { id: 'structural-steel-detailing-p-1', title: 'Detail', text: 'Produce detailed fabrication drawings.' },
          { id: 'structural-steel-detailing-p-2', title: 'Review', text: 'Check with fabricators and clients.' },
          { id: 'structural-steel-detailing-p-3', title: 'Issue', text: 'Provide production packages.' },
          { id: 'structural-steel-detailing-p-4', title: 'Support', text: 'Site support during erection.' }
        ],
        features: ["Shop drawings", "Connection details", "Steel schedules"],
      },
      "rebar-detailing-services": {
        title: "Rebar Detailing Services",
        subtitle: "Reinforcement detailing for concrete structures",
        image: "https://i.postimg.cc/ryPMdTpR/STRUCTURESERVICE.jpg",
        heroTitle: "Rebar Detailing Services",
        heroDescription: "Precision reinforcement documentation. At Collective AEC, we create accurate rebar drawings and bar bending schedules that optimize concrete construction and eliminate placement errors.",
        sectionDescription: "Accurate rebar drawings and bar bending schedules to support concrete construction and procurement. Our outputs reduce errors in reinforcement placement and speed up onsite workflows. Our rebar detailing services include detailed placement drawings, lap and splice locations, and comprehensive schedules that ensure proper reinforcement installation, structural integrity, and efficient material procurement for concrete construction projects of all complexities.",
        description: "Accurate rebar drawings and bar bending schedules to support concrete construction and procurement. Our outputs reduce errors in reinforcement placement and speed up onsite workflows.",
        keyOfferings: [
          { id: 'rebar-detailing-services-ko-1', title: 'Bar Bending Schedules', text: 'Precise schedules and cutting lists.' },
          { id: 'rebar-detailing-services-ko-2', title: 'Placement Drawings', text: 'Clear placement and tagging.' },
          { id: 'rebar-detailing-services-ko-3', title: 'Coordination', text: 'Integrate with structural and architectural models.' },
          { id: 'rebar-detailing-services-ko-4', title: 'QC', text: 'Checks and verifications.' },
          { id: 'rebar-detailing-services-ko-5', title: 'Handover', text: 'As-built reinforcement records.' }
        ],
        process: [
          { id: 'rebar-detailing-services-p-1', title: 'Extract', text: 'Pull reinforcement geometry from models.' },
          { id: 'rebar-detailing-services-p-2', title: 'Detail', text: 'Create bar bending schedules and drawings.' },
          { id: 'rebar-detailing-services-p-3', title: 'Review', text: 'Coordinate with formwork and site teams.' },
          { id: 'rebar-detailing-services-p-4', title: 'Deliver', text: 'Provide schedules and drawings for site.' }
        ],
        features: ["Bar bending schedules", "Detailing", "Coordination"],
      },
      "structural-cad-drafting": {
        title: "Structural CAD Drafting",
        subtitle: "CAD documentation for structural engineering",
        image: "https://i.postimg.cc/ryPMdTpR/STRUCTURESERVICE.jpg",
        heroTitle: "Structural CAD Drafting",
        heroDescription: "Detailed structural documentation. At Collective AEC, we produce DWG and CAD deliverables with precise notation and markups that support structural analysis and shop fabrication.",
        sectionDescription: "DWG and CAD documentation tailored for structural engineers and fabricators, with detailed notation and markups to support analysis and shop fabrication. Our structural CAD drafting services deliver clear foundation plans, framing layouts, and connection details that enable efficient structural design coordination, fabrication planning, and construction execution while maintaining industry-standard conventions and documentation clarity.",
        description: "DWG and CAD documentation tailored for structural engineers and fabricators, with detailed notation and markups to support analysis and shop fabrication.",
        keyOfferings: [
          { id: 'structural-cad-drafting-ko-1', title: 'CAD Drawings', text: 'Production of DWG-based drawings.' },
          { id: 'structural-cad-drafting-ko-2', title: 'Annotations', text: 'Notes and callouts for fabrication.' },
          { id: 'structural-cad-drafting-ko-3', title: 'Layouts', text: 'Foundation and framing plans.' },
          { id: 'structural-cad-drafting-ko-4', title: 'Exports', text: 'DWG and PDF outputs.' },
          { id: 'structural-cad-drafting-ko-5', title: 'Standards', text: 'Maintain drawing conventions.' }
        ],
        process: [
          { id: 'structural-cad-drafting-p-1', title: 'Set up', text: 'Prepare templates and layers.' },
          { id: 'structural-cad-drafting-p-2', title: 'Draft', text: 'Produce structural drawings.' },
          { id: 'structural-cad-drafting-p-3', title: 'Check', text: 'Quality and dimension checks.' },
          { id: 'structural-cad-drafting-p-4', title: 'Deliver', text: 'Export and handover drawings.' }
        ],
        features: ["CAD drawings", "Details", "Markups"],
      },
      "steel-shop-drawings": {
        title: "Steel Shop Drawings",
        subtitle: "Fabrication-ready steel documentation",
        image: "https://i.postimg.cc/ryPMdTpR/STRUCTURESERVICE.jpg",
        heroTitle: "Steel Shop Drawings",
        heroDescription: "Complete fabrication packages for steel construction. At Collective AEC, we provide detailed shop drawings with assembly information and part lists that accelerate manufacturing and site installation.",
        sectionDescription: "Fabrication-ready steel shop drawings with clear assembly information, part lists and dimensions to aid fabricators and contractors during manufacturing and site installation. Our steel shop drawing services include piece marks, connection details, weld specifications, and bolt schedules that provide fabricators with complete information for efficient production while ensuring quality control and seamless coordination with field erection activities.",
        description: "Fabrication-ready steel shop drawings with clear assembly information, part lists and dimensions to aid fabricators and contractors during manufacturing and site installation.",
        keyOfferings: [
          { id: 'steel-shop-drawings-ko-1', title: 'Fabrication Packages', text: 'Complete packages for shop production.' },
          { id: 'steel-shop-drawings-ko-2', title: 'Assembly Drawings', text: 'Detailed assembly and part drawings.' },
          { id: 'steel-shop-drawings-ko-3', title: 'Part Lists', text: 'Bill of materials and schedules.' },
          { id: 'steel-shop-drawings-ko-4', title: 'Connection Specs', text: 'Weld and bolt details.' },
          { id: 'steel-shop-drawings-ko-5', title: 'Erection Notes', text: 'Site erection guidance.' }
        ],
        process: [
          { id: 'steel-shop-drawings-p-1', title: 'Compile', text: 'Gather model and fabrication inputs.' },
          { id: 'steel-shop-drawings-p-2', title: 'Detail', text: 'Produce shop drawings and lists.' },
          { id: 'steel-shop-drawings-p-3', title: 'Review', text: 'Fabricator checks and revisions.' },
          { id: 'steel-shop-drawings-p-4', title: 'Handover', text: 'Provide production files and notes.' }
        ],
        features: ["Fabrication details", "Assembly drawings", "Schedules"],
      },
      "structural-bim-services": {
        title: "Structural BIM Services",
        subtitle: "Modeling and analysis for structural systems",
        image: "https://i.postimg.cc/ryPMdTpR/STRUCTURESERVICE.jpg",
        heroTitle: "Structural BIM Services",
        heroDescription: "Intelligent structural modeling and coordination. At Collective AEC, we create analysis-ready BIM models that integrate seamlessly with design workflows and support multi-disciplinary coordination.",
        sectionDescription: "Structural BIM models prepared for analysis, detailing and multi-disciplinary coordination. Models are exchanged in formats compatible with analysis tools and construction workflows. Our structural BIM services encompass parametric modeling, load case preparation, and coordinated integration with architectural and MEP systems, ensuring accurate structural documentation and efficient coordination throughout design development and construction documentation phases.",
        description: "Structural BIM models prepared for analysis, detailing and multi-disciplinary coordination. Models are exchanged in formats compatible with analysis tools and construction workflows.",
        keyOfferings: [
          { id: 'structural-bim-services-ko-1', title: 'Analysis-ready Models', text: 'Prepare models for structural analysis.' },
          { id: 'structural-bim-services-ko-2', title: 'Detailing', text: 'Connection and reinforcement detailing.' },
          { id: 'structural-bim-services-ko-3', title: 'Coordination', text: 'Integrate with architectural and MEP models.' },
          { id: 'structural-bim-services-ko-4', title: 'Schedules', text: 'Provide material and element schedules.' },
          { id: 'structural-bim-services-ko-5', title: 'Handover', text: 'Deliver final models and documentation.' }
        ],
        process: [
          { id: 'structural-bim-services-p-1', title: 'Model', text: 'Produce structural model assets.' },
          { id: 'structural-bim-services-p-2', title: 'Analyse', text: 'Prepare analysis datasets and exports.' },
          { id: 'structural-bim-services-p-3', title: 'Detail', text: 'Add fabrication and reinforcement details.' },
          { id: 'structural-bim-services-p-4', title: 'Deliver', text: 'Provide models and documentation.' }
        ],
        features: ["Analysis-ready models", "Detailing", "Coordination"],
      },
      "connection-design": {
        title: "Connection Design",
        subtitle: "Detailed connection engineering",
        image: "https://i.postimg.cc/ryPMdTpR/STRUCTURESERVICE.jpg",
        heroTitle: "Connection Design",
        heroDescription: "Engineered connection solutions for structural steel. At Collective AEC, we deliver detailed connection designs with calculations, drawings, and fabrication notes that ensure structural integrity and buildability.",
        sectionDescription: "Connection design services delivering engineered solutions for steel and composite structures, supported by calculations, drawings and fabrication notes. Our comprehensive connection design approach includes moment connections, braced frame connections, and simple shear connections with complete engineering documentation, load verification, and fabrication details that ensure safe, efficient, and code-compliant structural systems for projects of all scales and complexities.",
        description: "Connection design services delivering engineered solutions for steel and composite structures, supported by calculations, drawings and fabrication notes.",
        keyOfferings: [
          { id: 'connection-design-ko-1', title: 'Calculations', text: 'Structural calculations and verification.' },
          { id: 'connection-design-ko-2', title: 'Drawings', text: 'Detailed connection drawings.' },
          { id: 'connection-design-ko-3', title: 'Fabrication Notes', text: 'Notes and tolerances for manufacture.' },
          { id: 'connection-design-ko-4', title: 'Testing', text: 'Specify testing and verification as needed.' },
          { id: 'connection-design-ko-5', title: 'Handover', text: 'Final documentation and notes.' }
        ],
        process: [
          { id: 'connection-design-p-1', title: 'Assess', text: 'Understand loads and interface conditions.' },
          { id: 'connection-design-p-2', title: 'Design', text: 'Create connection details and calculations.' },
          { id: 'connection-design-p-3', title: 'Review', text: 'Coordinate with structural and fabrication teams.' },
          { id: 'connection-design-p-4', title: 'Document', text: 'Issue drawings and calculations.' }
        ],
        features: ["Connection calculations", "Drawings", "Details"],
      },
    },
  },
  "3d-visualization": {
    title: "3D Visualization",
    image: "https://i.postimg.cc/htZKbkLs/3DBG.jpg",
    description: "Stunning 3D visualizations and renderings that bring your designs to life, helping clients visualize spaces before construction begins.",
    subs: {
      "3d-modeling": {
        title: "3D Modeling",
        subtitle: "High-fidelity 3D models",
        image: "https://i.postimg.cc/L6gRLWqq/3-DVISUALIZATION.jpg",
        heroTitle: "3D Modeling",
        heroDescription: "High-fidelity 3D assets for immersive experiences. At Collective AEC, we create optimized models for photoreal renders, AR/VR, and visualization pipelines that bring designs to life.",
        sectionDescription: "High-quality 3D modeling services tailored for photoreal renders, AR/VR and visualization pipelines. Models are optimised for materials, lighting and scene composition to support compelling presentations. Our 3D modeling expertise spans architectural elements, furniture, fixtures, landscape features, and environmental context, delivering assets with proper UV mapping, material application, and geometric optimization for diverse visualization and simulation applications.",
        description: "High-quality 3D modeling services tailored for photoreal renders, AR/VR and visualization pipelines. Models are optimised for materials, lighting and scene composition to support compelling presentations.",
        keyOfferings: [
          { id: '3d-modeling-ko-1', title: 'Asset Modeling', text: 'Create optimized 3D assets for scenes.' },
          { id: '3d-modeling-ko-2', title: 'Scene Setup', text: 'Compose scenes for renders and animations.' },
          { id: '3d-modeling-ko-3', title: 'Optimisation', text: 'Reduce polycounts and improve performance.' },
          { id: '3d-modeling-ko-4', title: 'UV/Materials', text: 'Proper UVs and material setups.' },
          { id: '3d-modeling-ko-5', title: 'Export', text: 'Provide formats for visualization pipelines.' }
        ],
        process: [
          { id: '3d-modeling-p-1', title: 'Concept', text: 'Define scope and asset list.' },
          { id: '3d-modeling-p-2', title: 'Model', text: 'Build optimized assets.' },
          { id: '3d-modeling-p-3', title: 'Review', text: 'Check for visual fidelity and performance.' },
          { id: '3d-modeling-p-4', title: 'Deliver', text: 'Provide assets and export packages.' }
        ],
        features: ["Asset modeling", "Scene setup", "Optimisation"],
      },
      "cinematic-walkthroughs": {
        title: "Cinematic Walkthroughs",
        subtitle: "Narrative-driven visual tours",
        image: "https://i.postimg.cc/L6gRLWqq/3-DVISUALIZATION.jpg",
        heroTitle: "Cinematic Walkthroughs",
        heroDescription: "Immersive storytelling through motion. At Collective AEC, we craft cinematic walkthroughs with choreographed camera paths and post-production polish that captivate audiences and communicate design intent.",
        sectionDescription: "Cinematic walkthroughs that communicate spatial experience and design intent through camera choreography, timing and post-production polish. Ideal for client presentations and marketing. Our cinematic services combine architectural visualization with filmmaking techniques, including dynamic camera movements, atmospheric lighting, sound design, and color grading to create compelling narratives that showcase spaces, materials, and experiential qualities for marketing, stakeholder engagement, and design communication.",
        description: "Cinematic walkthroughs that communicate spatial experience and design intent through camera choreography, timing and post-production polish. Ideal for client presentations and marketing.",
        keyOfferings: [
          { id: 'cinematic-walkthroughs-ko-1', title: 'Storyboarding', text: 'Define camera paths and story beats.' },
          { id: 'cinematic-walkthroughs-ko-2', title: 'Cinematography', text: 'Choreograph camera movement and timing.' },
          { id: 'cinematic-walkthroughs-ko-3', title: 'Post-production', text: 'Color grade and composite for polish.' },
          { id: 'cinematic-walkthroughs-ko-4', title: 'Sound Design', text: 'Add audio for immersion.' },
          { id: 'cinematic-walkthroughs-ko-5', title: 'Delivery', text: 'Provide final video formats.' }
        ],
        process: [
          { id: 'cinematic-walkthroughs-p-1', title: 'Plan', text: 'Storyboard and schedule shoots.' },
          { id: 'cinematic-walkthroughs-p-2', title: 'Capture', text: 'Render or capture camera paths.' },
          { id: 'cinematic-walkthroughs-p-3', title: 'Edit', text: 'Assemble timelines and effects.' },
          { id: 'cinematic-walkthroughs-p-4', title: 'Deliver', text: 'Export final assets for use.' }
        ],
        features: ["Camera paths", "Post-production", "Sound design"],
      },
      "ar-vr-services": {
        title: "AR/VR Services",
        subtitle: "Immersive visualization experiences",
        image: "https://i.postimg.cc/L6gRLWqq/3-DVISUALIZATION.jpg",
        heroTitle: "AR/VR Services",
        heroDescription: "Immersive reality for design exploration. At Collective AEC, we develop AR and VR experiences that enable interactive exploration, stakeholder engagement, and accelerated decision-making.",
        sectionDescription: "AR/VR development to create immersive experiences for stakeholder engagement, enabling interactive exploration of designs and faster decision cycles. Our augmented and virtual reality services include interactive virtual tours, on-site AR overlays, real-time design reviews, and customizable environments that allow clients and teams to experience spaces at full scale, test design options, and make informed decisions before construction begins.",
        description: "AR/VR development to create immersive experiences for stakeholder engagement, enabling interactive exploration of designs and faster decision cycles.",
        keyOfferings: [
          { id: 'ar-vr-services-ko-1', title: 'VR Tours', text: 'Immersive walkthroughs for stakeholder review.' },
          { id: 'ar-vr-services-ko-2', title: 'AR Overlays', text: 'On-site overlays for quick validation.' },
          { id: 'ar-vr-services-ko-3', title: 'Interactive Scenes', text: 'User-controlled exploration.' },
          { id: 'ar-vr-services-ko-4', title: 'Platform Export', text: 'Deliverables for common AR/VR platforms.' },
          { id: 'ar-vr-services-ko-5', title: 'Optimization', text: 'Performance tuning for devices.' }
        ],
        process: [
          { id: 'ar-vr-services-p-1', title: 'Plan', text: 'Define scope and platform.' },
          { id: 'ar-vr-services-p-2', title: 'Build', text: 'Develop assets and interactions.' },
          { id: 'ar-vr-services-p-3', title: 'Test', text: 'Performance and UX testing.' },
          { id: 'ar-vr-services-p-4', title: 'Deliver', text: 'Provide packages and instructions.' }
        ],
        features: ["VR tours", "AR overlays", "Interactive scenes"],
      },
      "project-renders": {
        title: "Project Renders",
        subtitle: "Photorealistic exterior and interior renders",
        image: "https://i.postimg.cc/L6gRLWqq/3-DVISUALIZATION.jpg",
        heroTitle: "Project Renders",
        heroDescription: "Photorealistic visualization that inspires. At Collective AEC, we produce stunning exterior and interior renders with meticulous attention to lighting, materials, and composition for marketing and approvals.",
        sectionDescription: "Photoreal renders produced for marketing, client review and approvals with attention to materials, lighting and composition. Deliverables include stills and post-processed images ready for presentations. Our rendering services utilize advanced ray-tracing technology, realistic material libraries, and professional post-production to create images that accurately represent design intent while evoking emotional responses that support successful marketing, fundraising, and stakeholder approval processes.",
        description: "Photoreal renders produced for marketing, client review and approvals with attention to materials, lighting and composition. Deliverables include stills and post-processed images ready for presentations.",
        keyOfferings: [
          { id: 'project-renders-ko-1', title: 'Lighting', text: 'Accurate lighting and atmospheric composition.' },
          { id: 'project-renders-ko-2', title: 'Materials', text: 'High-quality material definition and textures.' },
          { id: 'project-renders-ko-3', title: 'Post', text: 'Post-production and color grading.' },
          { id: 'project-renders-ko-4', title: 'Stills & Video', text: 'Deliver both stills and animated sequences.' },
          { id: 'project-renders-ko-5', title: 'Formats', text: 'Provide images in required formats.' }
        ],
        process: [
          { id: 'project-renders-p-1', title: 'Setup', text: 'Scene and lighting setup.' },
          { id: 'project-renders-p-2', title: 'Render', text: 'Produce high-quality renders.' },
          { id: 'project-renders-p-3', title: 'Post', text: 'Composite and grade for final polish.' },
          { id: 'project-renders-p-4', title: 'Deliver', text: 'Export in requested formats.' }
        ],
        features: ["Lighting", "Materials", "Post-production"],
      },
      "floor-plan-renders": {
        title: "Floor Plan Renders",
        subtitle: "Quick visualizations of plans and layouts",
        image: "https://i.postimg.cc/L6gRLWqq/3-DVISUALIZATION.jpg",
        heroTitle: "Floor Plan Renders",
        heroDescription: "Clear layout visualization for quick decisions. At Collective AEC, we create rendered floor plans that communicate spatial arrangements and planning options for early-stage feedback and alignment.",
        sectionDescription: "Quick floor plan renders that communicate layout options and planning decisions, useful for early-stage feedback and stakeholder alignment. Our floor plan rendering services provide 2D and 2.5D visualizations with color-coded zones, furniture layouts, material indications, and circulation patterns that help clients, planners, and marketing teams understand spatial organization and make informed decisions during schematic design and space planning phases.",
        description: "Quick floor plan renders that communicate layout options and planning decisions, useful for early-stage feedback and stakeholder alignment.",
        keyOfferings: [
          { id: 'floor-plan-renders-ko-1', title: 'Quick Turnaround', text: 'Fast visual feedback on plans.' },
          { id: 'floor-plan-renders-ko-2', title: 'Clear Communication', text: 'Simplify layouts for stakeholders.' },
          { id: 'floor-plan-renders-ko-3', title: 'Multiple Formats', text: 'Provide exports for presentations.' },
          { id: 'floor-plan-renders-ko-4', title: 'Color Coding', text: 'Zone-based visual cues.' },
          { id: 'floor-plan-renders-ko-5', title: 'Scalability', text: 'Adapt for different plan sizes.' }
        ],
        process: [
          { id: 'floor-plan-renders-p-1', title: 'Prepare', text: 'Set scale and layout.' },
          { id: 'floor-plan-renders-p-2', title: 'Render', text: 'Produce 2D/2.5D visuals.' },
          { id: 'floor-plan-renders-p-3', title: 'Review', text: 'Check clarity and annotations.' },
          { id: 'floor-plan-renders-p-4', title: 'Deliver', text: 'Provide images and exports.' }
        ],
        features: ["Plan views", "Simple renders", "Quick turnaround"],
      },
    },
  },
};

// Ensure every subservice has the full structure the UI expects.
// This programmatically injects placeholder `keyOfferings` and `process` arrays
// for any subservice that doesn't already provide them. This ensures the front-end
// components will not fail if this data is missing for a new service.
Object.keys(SERVICES).forEach((mainKey) => {
  const main = SERVICES[mainKey];
  if (!main || !main.subs) return;
  Object.keys(main.subs).forEach((subKey) => {
    const sub = main.subs[subKey];
    if (!sub) return;

    // Ensure hero/title fallbacks exist to prevent rendering errors
    sub.heroTitle = sub.heroTitle || sub.title || '';
    sub.heroDescription = sub.heroDescription || sub.subtitle || '';
    sub.sectionDescription = sub.sectionDescription || sub.description || '';

    // Inject placeholder keyOfferings if missing
    if (!Array.isArray(sub.keyOfferings)) {
      sub.keyOfferings = [
        { id: `${subKey}-ko-1`, title: 'Key Offering 1', text: 'Placeholder description for key offering 1.' },
        { id: `${subKey}-ko-2`, title: 'Key Offering 2', text: 'Placeholder description for key offering 2.' },
        { id: `${subKey}-ko-3`, title: 'Key Offering 3', text: 'Placeholder description for key offering 3.' },
        { id: `${subKey}-ko-4`, title: 'Key Offering 4', text: 'Placeholder description for key offering 4.' },
        { id: `${subKey}-ko-5`, title: 'Key Offering 5', text: 'Placeholder description for key offering 5.' },
      ];
    }

    // Inject placeholder process if missing
    if (!Array.isArray(sub.process)) {
      sub.process = [
        { id: `${subKey}-p-1`, title: 'Step 1', text: 'Placeholder description for step 1.' },
        { id: `${subKey}-p-2`, title: 'Step 2', text: 'Placeholder description for step 2.' },
        { id: `${subKey}-p-3`, title: 'Step 3', text: 'Placeholder description for step 3.' },
        { id: `${subKey}-p-4`, title: 'Step 4', text: 'Placeholder description for step 4.' },
      ];
    }

    // Ensure features is at least an empty array
    if (!Array.isArray(sub.features)) sub.features = [];
  });
});

export default SERVICES;