// Nested data for services and their subservices.
// Structure: { [mainSlug]: { title, image, description, subs: { [subSlug]: { ... } } } }
//
// SUBSERVICE FIELDS EXPLAINED:
// - title: Main title of the subservice (used in all sections)
// - subtitle: Short tagline for the service
// - image: Image URL for the service
// - heroTitle: Title displayed in the hero section (defaults to 'title' if not provided)
// - heroDescription: Short description in hero section with image background (SubServicesHero component)
// - sectionDescription: Detailed description in the main content section below hero (page.js middle section)
// - description: General description used in the white section of SubServicesHero (explains parent service)
// - features: Array of key features/highlights
//
// CONTENT HIERARCHY:
// 1. SubServicesHero (top) - Shows heroTitle + heroDescription (subservice specific)
// 2. SubServicesHero White Section - Shows mainData.title + mainData.description (parent service context)
// 3. Page Main Section - Shows subData.title + sectionDescription (detailed subservice info)
//
const SERVICES = {
  "bim-services": {
    title: "BIM Services",
    image: "https://i.postimg.cc/Y2yyNqYB/BIMSERVICES.jpg",
    description: "Comprehensive BIM services leveraging cutting-edge technology for enhanced project coordination, clash detection, and lifecycle management",
    subs: {
      "bim-consulting-services": {
        title: "BIM Consulting Services",
        subtitle: "Strategy, workflows and BIM execution planning",
        image: "https://i.postimg.cc/Y2yyNqYB/BIMSERVICES.jpg",
        heroTitle: "BIM Consulting Services",
        heroDescription: "Redefining precision through intelligent BIM. At Collective AEC, we turn design data into dynamics, buildable realities through innovations and collaborations.",
        sectionDescription: "At Collective AEC, we redefine precision through intelligent BIM solutions. From establishing seamless Common Data Environments to crafting customized BIM Execution Plans (BEP), our approach ensures every project begins with clarity and innovation. Our expert team transforms your BIM goals into built realities delivering accuracy, collaboration, and forward-thinking results through advanced BIM modelling, Revit drafting, and parametric design expertise.",
        description:
          "We help teams define a practical BIM strategy, document standards, and create BIM execution plans so projects run smoothly from early design through handover. Our approach focuses on reproducible workflows, clear responsibilities, and measurable deliverables to reduce confusion and delays.",
        features: ["BIM standards", "BIM execution plans", "Team training"],
      },
      "scan-to-bim": {
        title: "Scan to BIM",
        subtitle: "Reality capture converted into intelligent models",
        image: "https://i.postimg.cc/Y2yyNqYB/BIMSERVICES.jpg",
        heroTitle: "Scan to BIM",
        heroDescription: "Transform reality capture into precision. At Collective AEC, we convert laser scan data into intelligent, measurable BIM models for renovation and retrofit excellence.",
        sectionDescription: "We transform laser scan data into accurate, measurable BIM models ideal for renovation and retrofit projects. The deliverables include cleaned point clouds, geo-referenced models, and as-built BIM ready for coordination and verification.",
        description:
          "We transform laser scan data into accurate, measurable BIM models ideal for renovation and retrofit projects. The deliverables include cleaned point clouds, geo-referenced models, and as-built BIM ready for coordination and verification.",
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
        description:
          "Federated model coordination with iterative clash detection cycles and concise coordination reports to reduce on-site conflicts. We run coordinated reviews, assign clear actions, and track resolutions to keep the construction programme on schedule.",
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
        description:
          "Proactive clash management using automated tools and prioritised reporting to minimise rework and schedule delays. Our workflows provide actionable lists and follow-up tracking so teams can close issues efficiently.",
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
        description:
          "We link programme data to BIM to produce construction simulations, logistics plans and sequence visualisations. These 4D outputs help planners validate access, identify clashes over time, and optimise sequencing for safer, faster builds.",
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
        description:
          "Model-based quantity takeoffs that deliver reliable counts and measures for early estimates and procurement readiness. Outputs are provided in standard formats for cost planning and tendering to reduce manual measurement errors.",
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
    description: "Complete MEP design and coordination services ensuring seamless integration of building systems through advanced BIM technology",
    subs: {
      "mep-bim-services": {
        title: "MEP BIM Services",
        subtitle: "Modeling and system coordination",
        image: "https://i.postimg.cc/J4HmZFyX/MEPSERVICE.jpg",
        heroTitle: "MEP BIM Services",
        heroDescription: "Intelligent MEP systems through advanced BIM. At Collective AEC, we create detailed mechanical, electrical, and plumbing models that drive precision installation and seamless coordination.",
        sectionDescription: "Detailed MEP models developed for coordination, performance analysis and construction documentation. We model systems to fabrication level where required and ensure systems are tagged and scheduled for efficient installation. Our comprehensive approach includes coordinated routing, equipment placement, and system optimization to deliver constructible solutions that meet performance requirements while minimizing conflicts and installation challenges.",
        description:
          "Detailed MEP models developed for coordination, performance analysis and construction documentation. We model systems to fabrication level where required and ensure systems are tagged and scheduled for efficient installation.",
        features: ["Duct & pipe modeling", "MEP closets", "System tagging"],
      },
      "mep-bim-coordination": {
        title: "MEP BIM Coordination",
        subtitle: "Multi-disciplinary coordination and clash resolution",
        image: "https://i.postimg.cc/J4HmZFyX/MEPSERVICE.jpg",
        heroTitle: "MEP BIM Coordination",
        heroDescription: "Harmonizing complex building systems. At Collective AEC, we bridge MEP, structural, and architectural disciplines through rigorous coordination that eliminates conflicts and accelerates construction.",
        sectionDescription: "Cross-discipline clash detection and coordination that bridges MEP, structural and architectural teams. We run regulated coordination cycles and produce issue logs to drive decisions and reduce installation risks. Our systematic coordination methodology ensures mechanical, electrical, and plumbing systems integrate seamlessly with architectural and structural elements, preventing costly on-site modifications and maintaining project schedules.",
        description:
          "Cross-discipline clash detection and coordination that bridges MEP, structural and architectural teams. We run regulated coordination cycles and produce issue logs to drive decisions and reduce installation risks.",
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
        description:
          "Iterative clash analysis focused on mechanical and electrical systems to identify conflicts early. Reports include visual evidence, severity tagging, and recommended mitigations for rapid decision making.",
        features: ["Targeted clash runs", "Reporting", "Mitigation plans"],
      },
      "mep-shop-drawings": {
        title: "MEP Shop Drawings",
        subtitle: "Fabrication-ready drawings",
        image: "https://i.postimg.cc/J4HmZFyX/MEPSERVICE.jpg",
        heroTitle: "MEP Shop Drawings",
        heroDescription: "Fabrication-ready MEP documentation. At Collective AEC, we transform coordinated models into precise shop drawings that guide manufacturing and installation with clarity and accuracy.",
        sectionDescription: "Precise shop drawings and fabrication packages for MEP systems that support fabrication and site assembly. Deliverables include detailed annotations, dimensioning and schedules to reduce RFIs during installation. Our shop drawings provide contractors and fabricators with the exact information needed for efficient manufacturing and installation, including connection details, hanger locations, and installation sequences.",
        description:
          "Precise shop drawings and fabrication packages for MEP systems that support fabrication and site assembly. Deliverables include detailed annotations, dimensioning and schedules to reduce RFIs during installation.",
        features: ["Fabrication details", "Schedules", "Coordination"],
      },
      "mep-cad-drafting": {
        title: "MEP CAD Drafting",
        subtitle: "Traditional CAD documentation for MEP",
        image: "https://i.postimg.cc/J4HmZFyX/MEPSERVICE.jpg",
        heroTitle: "MEP CAD Drafting",
        heroDescription: "Traditional CAD precision for MEP systems. At Collective AEC, we deliver DWG-based documentation that maintains consistency with BIM workflows while meeting legacy requirements.",
        sectionDescription: "DWG-based CAD deliverables produced alongside BIM models for teams that require traditional drawing sets. We maintain consistency between CAD and model outputs to avoid discrepancies. Our CAD drafting services ensure proper layering, annotation standards, and documentation clarity for contractors, subcontractors, and teams working in traditional CAD environments while leveraging the benefits of coordinated BIM processes.",
        description:
          "DWG-based CAD deliverables produced alongside BIM models for teams that require traditional drawing sets. We maintain consistency between CAD and model outputs to avoid discrepancies.",
        features: ["DWG deliverables", "Layered drawings", "Annotations"],
      },
      "hvac-design": {
        title: "HVAC Design",
        subtitle: "Efficient heating, ventilation, and air conditioning design",
        image: "https://i.postimg.cc/J4HmZFyX/MEPSERVICE.jpg",
        heroTitle: "HVAC Design",
        heroDescription: "Optimized climate control solutions. At Collective AEC, we design HVAC systems that balance occupant comfort, energy efficiency, and installation practicality for superior building performance.",
        sectionDescription: "HVAC design services focused on occupant comfort, energy efficiency and constructability. We perform load calculations, select equipment, and develop ductwork and airflow solutions that integrate with the overall building systems. Our comprehensive HVAC design approach considers thermal comfort, indoor air quality, energy conservation, and maintainability while ensuring seamless coordination with architectural and structural elements throughout all project phases.",
        description:
          "HVAC design services focused on occupant comfort, energy efficiency and constructability. We perform load calculations, select equipment, and develop ductwork and airflow solutions that integrate with the overall building systems.",
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
    image: "https://i.postimg.cc/sfNsBz2Y/ARCHSERVICE.jpg",
    description: "Comprehensive architectural design services from concept to construction documentation, creating innovative spaces that balance aesthetics with functionality",
    subs: {
      "architectural-design-services": {
        title: "Architectural Design Services",
        subtitle: "Concept to construction documentation",
        image: "https://i.postimg.cc/sfNsBz2Y/ARCHSERVICE.jpg",
        heroTitle: "Architectural Design Services",
        heroDescription: "Transforming visions into built reality. At Collective AEC, we deliver end-to-end architectural design that merges aesthetics with functionality, from initial concepts through construction documentation.",
        sectionDescription: "End-to-end architectural design delivered with emphasis on aesthetics, functional planning, and regulatory compliance. We iterate concept through documentation with stakeholder reviews to keep projects aligned with client goals. Our holistic design approach balances creative vision with practical buildability, ensuring spaces that inspire while meeting performance requirements, budget constraints, and regulatory standards throughout all project phases.",
        description:
          "End-to-end architectural design delivered with emphasis on aesthetics, functional planning, and regulatory compliance. We iterate concept through documentation with stakeholder reviews to keep projects aligned with client goals.",
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
        description:
          "Architectural BIM deliverables supporting detailed documentation, schedules and interdisciplinary coordination. Models are prepared for presentations, documentation sets, and to integrate with structural and MEP workflows.",
        features: [
          "Architectural modeling",
          "Schedules",
          "Presentation deliverables",
        ],
      },
      "architectural-cad-drafting": {
        title: "Architectural CAD Drafting",
        subtitle: "2D CAD for architectural workflows",
        image: "https://i.postimg.cc/sfNsBz2Y/ARCHSERVICE.jpg",
        heroTitle: "Architectural CAD Drafting",
        heroDescription: "Precision 2D documentation for architectural projects. At Collective AEC, we produce clear, detailed CAD drawings with proper layering and annotation standards for contractors and consultants.",
        sectionDescription: "CAD-driven documentation for teams needing DWG deliverables, produced with clear layering and annotation standards for downstream use by contractors and consultants. Our architectural CAD drafting services maintain industry-standard conventions while ensuring accuracy and clarity in floor plans, elevations, sections, and details that support efficient construction and coordination across all project stakeholders.",
        description:
          "CAD-driven documentation for teams needing DWG deliverables, produced with clear layering and annotation standards for downstream use by contractors and consultants.",
        features: ["CAD plans", "Detailing", "Annotations"],
      },
      "construction-drawings": {
        title: "Construction Drawings",
        subtitle: "Detailed plans for construction",
        image: "https://i.postimg.cc/sfNsBz2Y/ARCHSERVICE.jpg",
        heroTitle: "Construction Drawings",
        heroDescription: "Construction-ready documentation excellence. At Collective AEC, we prepare comprehensive drawing sets with clear callouts and schedules that guide efficient on-site execution and minimize RFIs.",
        sectionDescription: "Construction drawings prepared for procurement, approvals and on-site teams with clear callouts, schedules and detailing to support efficient delivery and reduce queries during construction. Our construction documentation includes complete drawing sets with coordinated plans, elevations, sections, and details that provide contractors with all information needed for accurate bidding, permitting, and field construction activities.",
        description:
          "Construction drawings prepared for procurement, approvals and on-site teams with clear callouts, schedules and detailing to support efficient delivery and reduce queries during construction.",
        features: ["Full set drawings", "Schedules", "Detailing"],
      },
    },
  },
  structural: {
    title: "Structural Design",
    image: "https://i.postimg.cc/ryPMdTpR/STRUCTURESERVICE.jpg",
    description: "Specialized structural engineering services providing detailed steel and rebar solutions for safe, efficient construction projects",
    subs: {
      "structural-steel-detailing": {
        title: "Structural Steel Detailing",
        subtitle: "Shop-ready steel detailing",
        image: "https://i.postimg.cc/ryPMdTpR/STRUCTURESERVICE.jpg",
        heroTitle: "Structural Steel Detailing",
        heroDescription: "Fabrication-ready steel solutions. At Collective AEC, we deliver precise shop drawings with connection details and assembly sequences that streamline fabrication and accelerate site erection.",
        sectionDescription: "Shop-ready steel detailing including member fabrication details and connection design for efficient fabrication and erection. We provide assembly sequences and schedules to streamline site work. Our comprehensive steel detailing services include anchor bolt plans, erection drawings, and material lists that enable fabricators and contractors to execute structural steel installations with precision, efficiency, and safety throughout all construction phases.",
        description:
          "Shop-ready steel detailing including member fabrication details and connection design for efficient fabrication and erection. We provide assembly sequences and schedules to streamline site work.",
        features: ["Shop drawings", "Connection details", "Steel schedules"],
      },
      "rebar-detailing-services": {
        title: "Rebar Detailing Services",
        subtitle: "Reinforcement detailing for concrete structures",
        image: "https://i.postimg.cc/ryPMdTpR/STRUCTURESERVICE.jpg",
        heroTitle: "Rebar Detailing Services",
        heroDescription: "Precision reinforcement documentation. At Collective AEC, we create accurate rebar drawings and bar bending schedules that optimize concrete construction and eliminate placement errors.",
        sectionDescription: "Accurate rebar drawings and bar bending schedules to support concrete construction and procurement. Our outputs reduce errors in reinforcement placement and speed up onsite workflows. Our rebar detailing services include detailed placement drawings, lap and splice locations, and comprehensive schedules that ensure proper reinforcement installation, structural integrity, and efficient material procurement for concrete construction projects of all complexities.",
        description:
          "Accurate rebar drawings and bar bending schedules to support concrete construction and procurement. Our outputs reduce errors in reinforcement placement and speed up onsite workflows.",
        features: ["Bar bending schedules", "Detailing", "Coordination"],
      },
      "structural-cad-drafting": {
        title: "Structural CAD Drafting",
        subtitle: "CAD documentation for structural engineering",
        image: "https://i.postimg.cc/ryPMdTpR/STRUCTURESERVICE.jpg",
        heroTitle: "Structural CAD Drafting",
        heroDescription: "Detailed structural documentation. At Collective AEC, we produce DWG and CAD deliverables with precise notation and markups that support structural analysis and shop fabrication.",
        sectionDescription: "DWG and CAD documentation tailored for structural engineers and fabricators, with detailed notation and markups to support analysis and shop fabrication. Our structural CAD drafting services deliver clear foundation plans, framing layouts, and connection details that enable efficient structural design coordination, fabrication planning, and construction execution while maintaining industry-standard conventions and documentation clarity.",
        description:
          "DWG and CAD documentation tailored for structural engineers and fabricators, with detailed notation and markups to support analysis and shop fabrication.",
        features: ["CAD drawings", "Details", "Markups"],
      },
      "steel-shop-drawings": {
        title: "Steel Shop Drawings",
        subtitle: "Fabrication-ready steel documentation",
        image: "https://i.postimg.cc/ryPMdTpR/STRUCTURESERVICE.jpg",
        heroTitle: "Steel Shop Drawings",
        heroDescription: "Complete fabrication packages for steel construction. At Collective AEC, we provide detailed shop drawings with assembly information and part lists that accelerate manufacturing and site installation.",
        sectionDescription: "Fabrication-ready steel shop drawings with clear assembly information, part lists and dimensions to aid fabricators and contractors during manufacturing and site installation. Our steel shop drawing services include piece marks, connection details, weld specifications, and bolt schedules that provide fabricators with complete information for efficient production while ensuring quality control and seamless coordination with field erection activities.",
        description:
          "Fabrication-ready steel shop drawings with clear assembly information, part lists and dimensions to aid fabricators and contractors during manufacturing and site installation.",
        features: ["Fabrication details", "Assembly drawings", "Schedules"],
      },
      "structural-bim-services": {
        title: "Structural BIM Services",
        subtitle: "Modeling and analysis for structural systems",
        image: "https://i.postimg.cc/ryPMdTpR/STRUCTURESERVICE.jpg",
        heroTitle: "Structural BIM Services",
        heroDescription: "Intelligent structural modeling and coordination. At Collective AEC, we create analysis-ready BIM models that integrate seamlessly with design workflows and support multi-disciplinary coordination.",
        sectionDescription: "Structural BIM models prepared for analysis, detailing and multi-disciplinary coordination. Models are exchanged in formats compatible with analysis tools and construction workflows. Our structural BIM services encompass parametric modeling, load case preparation, and coordinated integration with architectural and MEP systems, ensuring accurate structural documentation and efficient coordination throughout design development and construction documentation phases.",
        description:
          "Structural BIM models prepared for analysis, detailing and multi-disciplinary coordination. Models are exchanged in formats compatible with analysis tools and construction workflows.",
        features: ["Analysis-ready models", "Detailing", "Coordination"],
      },
      "connection-design": {
        title: "Connection Design",
        subtitle: "Detailed connection engineering",
        image: "https://i.postimg.cc/ryPMdTpR/STRUCTURESERVICE.jpg",
        heroTitle: "Connection Design",
        heroDescription: "Engineered connection solutions for structural steel. At Collective AEC, we deliver detailed connection designs with calculations, drawings, and fabrication notes that ensure structural integrity and buildability.",
        sectionDescription: "Connection design services delivering engineered solutions for steel and composite structures, supported by calculations, drawings and fabrication notes. Our comprehensive connection design approach includes moment connections, braced frame connections, and simple shear connections with complete engineering documentation, load verification, and fabrication details that ensure safe, efficient, and code-compliant structural systems for projects of all scales and complexities.",
        description:
          "Connection design services delivering engineered solutions for steel and composite structures, supported by calculations, drawings and fabrication notes.",
        features: ["Connection calculations", "Drawings", "Details"],
      },
    },
  },
  "3d-visualization": {
    title: "3D Visualization",
    image: "https://i.postimg.cc/L6gRLWqq/3-DVISUALIZATION.jpg",
    image: "/3d-Visualiser.png",
    description: "Stunning 3D visualizations and renderings that bring your designs to life, helping clients visualize spaces before construction begins",
    subs: {
      "3d-modeling": {
        title: "3D Modeling",
        subtitle: "High-fidelity 3D models",
        image: "https://i.postimg.cc/L6gRLWqq/3-DVISUALIZATION.jpg",
        heroTitle: "3D Modeling",
        heroDescription: "High-fidelity 3D assets for immersive experiences. At Collective AEC, we create optimized models for photoreal renders, AR/VR, and visualization pipelines that bring designs to life.",
        sectionDescription: "High-quality 3D modeling services tailored for photoreal renders, AR/VR and visualization pipelines. Models are optimised for materials, lighting and scene composition to support compelling presentations. Our 3D modeling expertise spans architectural elements, furniture, fixtures, landscape features, and environmental context, delivering assets with proper UV mapping, material application, and geometric optimization for diverse visualization and simulation applications.",
        description:
          "High-quality 3D modeling services tailored for photoreal renders, AR/VR and visualization pipelines. Models are optimised for materials, lighting and scene composition to support compelling presentations.",
        features: ["Asset modeling", "Scene setup", "Optimisation"],
      },
      "cinematic-walkthroughs": {
        title: "Cinematic Walkthroughs",
        subtitle: "Narrative-driven visual tours",
        image: "https://i.postimg.cc/L6gRLWqq/3-DVISUALIZATION.jpg",
        heroTitle: "Cinematic Walkthroughs",
        heroDescription: "Immersive storytelling through motion. At Collective AEC, we craft cinematic walkthroughs with choreographed camera paths and post-production polish that captivate audiences and communicate design intent.",
        sectionDescription: "Cinematic walkthroughs that communicate spatial experience and design intent through camera choreography, timing and post-production polish. Ideal for client presentations and marketing. Our cinematic services combine architectural visualization with filmmaking techniques, including dynamic camera movements, atmospheric lighting, sound design, and color grading to create compelling narratives that showcase spaces, materials, and experiential qualities for marketing, stakeholder engagement, and design communication.",
        description:
          "Cinematic walkthroughs that communicate spatial experience and design intent through camera choreography, timing and post-production polish. Ideal for client presentations and marketing.",
        features: ["Camera paths", "Post-production", "Sound design"],
      },
      "ar-vr-services": {
        title: "AR/VR Services",
        subtitle: "Immersive visualization experiences",
        image: "https://i.postimg.cc/L6gRLWqq/3-DVISUALIZATION.jpg",
        heroTitle: "AR/VR Services",
        heroDescription: "Immersive reality for design exploration. At Collective AEC, we develop AR and VR experiences that enable interactive exploration, stakeholder engagement, and accelerated decision-making.",
        sectionDescription: "AR/VR development to create immersive experiences for stakeholder engagement, enabling interactive exploration of designs and faster decision cycles. Our augmented and virtual reality services include interactive virtual tours, on-site AR overlays, real-time design reviews, and customizable environments that allow clients and teams to experience spaces at full scale, test design options, and make informed decisions before construction begins.",
        description:
          "AR/VR development to create immersive experiences for stakeholder engagement, enabling interactive exploration of designs and faster decision cycles.",
        features: ["VR tours", "AR overlays", "Interactive scenes"],
      },
      "project-renders": {
        title: "Project Renders",
        subtitle: "Photorealistic exterior and interior renders",
        image: "https://i.postimg.cc/L6gRLWqq/3-DVISUALIZATION.jpg",
        heroTitle: "Project Renders",
        heroDescription: "Photorealistic visualization that inspires. At Collective AEC, we produce stunning exterior and interior renders with meticulous attention to lighting, materials, and composition for marketing and approvals.",
        sectionDescription: "Photoreal renders produced for marketing, client review and approvals with attention to materials, lighting and composition. Deliverables include stills and post-processed images ready for presentations. Our rendering services utilize advanced ray-tracing technology, realistic material libraries, and professional post-production to create images that accurately represent design intent while evoking emotional responses that support successful marketing, fundraising, and stakeholder approval processes.",
        description:
          "Photoreal renders produced for marketing, client review and approvals with attention to materials, lighting and composition. Deliverables include stills and post-processed images ready for presentations.",
        features: ["Lighting", "Materials", "Post-production"],
      },
      "floor-plan-renders": {
        title: "Floor Plan Renders",
        subtitle: "Quick visualizations of plans and layouts",
        image: "https://i.postimg.cc/L6gRLWqq/3-DVISUALIZATION.jpg",
        heroTitle: "Floor Plan Renders",
        heroDescription: "Clear layout visualization for quick decisions. At Collective AEC, we create rendered floor plans that communicate spatial arrangements and planning options for early-stage feedback and alignment.",
        sectionDescription: "Quick floor plan renders that communicate layout options and planning decisions, useful for early-stage feedback and stakeholder alignment. Our floor plan rendering services provide 2D and 2.5D visualizations with color-coded zones, furniture layouts, material indications, and circulation patterns that help clients, planners, and marketing teams understand spatial organization and make informed decisions during schematic design and space planning phases.",
        description:
          "Quick floor plan renders that communicate layout options and planning decisions, useful for early-stage feedback and stakeholder alignment.",
        features: ["Plan views", "Simple renders", "Quick turnaround"],
      },
    },
  },
};

export default SERVICES;
