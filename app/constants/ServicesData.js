// Nested data for services and their subservices.
// Structure: { [mainSlug]: { title, image, description, subs: { [subSlug]: { title, subtitle, image, description, features } } } }
const SERVICES = {
  "bim-services": {
    title: "BIM Services",
    image: "/K6 (3).webp",
    description: "Advanced Building Information Modeling solutions",
    subs: {
      "bim-consulting-services": {
        title: "BIM Consulting Services",
        subtitle: "Strategy, workflows and BIM execution planning",
        image: "https://i.postimg.cc/pLRdCNV7/BIMService.png",
        description:
          "We help teams define a practical BIM strategy, document standards, and create BIM execution plans so projects run smoothly from early design through handover. Our approach focuses on reproducible workflows, clear responsibilities, and measurable deliverables to reduce confusion and delays.",
        features: ["BIM standards", "BIM execution plans", "Team training"],
      },
      "scan-to-bim": {
        title: "Scan to BIM",
        subtitle: "Reality capture converted into intelligent models",
        image: "https://i.postimg.cc/pLRdCNV7/BIMService.png",
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
        image: "https://i.postimg.cc/pLRdCNV7/BIMService.png",
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
        image: "https://i.postimg.cc/pLRdCNV7/BIMService.png",
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
        image: "https://i.postimg.cc/pLRdCNV7/BIMService.png",
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
        image: "https://i.postimg.cc/pLRdCNV7/BIMService.png",
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
    image: "https://i.postimg.cc/sxmY2YTD/MEPService.png",
    description: "Integrated mechanical, electrical, and plumbing solutions",
    subs: {
      "mep-bim-services": {
        title: "MEP BIM Services",
        subtitle: "Modeling and system coordination",
        image: "https://i.postimg.cc/sxmY2YTD/MEPService.png",
        description:
          "Detailed MEP models developed for coordination, performance analysis and construction documentation. We model systems to fabrication level where required and ensure systems are tagged and scheduled for efficient installation.",
        features: ["Duct & pipe modeling", "MEP closets", "System tagging"],
      },
      "mep-bim-coordination": {
        title: "MEP BIM Coordination",
        subtitle: "Multi-disciplinary coordination and clash resolution",
        image: "https://i.postimg.cc/sxmY2YTD/MEPService.png",
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
        image: "https://i.postimg.cc/sxmY2YTD/MEPService.png",
        description:
          "Iterative clash analysis focused on mechanical and electrical systems to identify conflicts early. Reports include visual evidence, severity tagging, and recommended mitigations for rapid decision making.",
        features: ["Targeted clash runs", "Reporting", "Mitigation plans"],
      },
      "mep-shop-drawings": {
        title: "MEP Shop Drawings",
        subtitle: "Fabrication-ready drawings",
        image: "https://i.postimg.cc/sxmY2YTD/MEPService.png",
        description:
          "Precise shop drawings and fabrication packages for MEP systems that support fabrication and site assembly. Deliverables include detailed annotations, dimensioning and schedules to reduce RFIs during installation.",
        features: ["Fabrication details", "Schedules", "Coordination"],
      },
      "mep-cad-drafting": {
        title: "MEP CAD Drafting",
        subtitle: "Traditional CAD documentation for MEP",
        image: "https://i.postimg.cc/sxmY2YTD/MEPService.png",
        description:
          "DWG-based CAD deliverables produced alongside BIM models for teams that require traditional drawing sets. We maintain consistency between CAD and model outputs to avoid discrepancies.",
        features: ["DWG deliverables", "Layered drawings", "Annotations"],
      },
      "hvac-design": {
        title: "HVAC Design",
        subtitle: "Efficient heating, ventilation, and air conditioning design",
        image: "https://i.postimg.cc/sxmY2YTD/MEPService.png",
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
    image: "/Architecture Service.png",
    description: "Innovative and sustainable architectural solutions",
    subs: {
      "architectural-design-services": {
        title: "Architectural Design Services",
        subtitle: "Concept to construction documentation",
        image: "/Architecture Service.png",
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
        image: "/Architecture Service.png",
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
        image: "/Architecture Service.png",
        description:
          "CAD-driven documentation for teams needing DWG deliverables, produced with clear layering and annotation standards for downstream use by contractors and consultants.",
        features: ["CAD plans", "Detailing", "Annotations"],
      },
      "construction-drawings": {
        title: "Construction Drawings",
        subtitle: "Detailed plans for construction",
        image: "/Architecture Service.png",
        description:
          "Construction drawings prepared for procurement, approvals and on-site teams with clear callouts, schedules and detailing to support efficient delivery and reduce queries during construction.",
        features: ["Full set drawings", "Schedules", "Detailing"],
      },
    },
  },
  structural: {
    title: "Structural Design",
    image: "/Structure Service.png",
    description: "Robust structural engineering and detailing",
    subs: {
      "structural-steel-detailing": {
        title: "Structural Steel Detailing",
        subtitle: "Shop-ready steel detailing",
        image: "/Structure Service.png",
        description:
          "Shop-ready steel detailing including member fabrication details and connection design for efficient fabrication and erection. We provide assembly sequences and schedules to streamline site work.",
        features: ["Shop drawings", "Connection details", "Steel schedules"],
      },
      "rebar-detailing-services": {
        title: "Rebar Detailing Services",
        subtitle: "Reinforcement detailing for concrete structures",
        image: "/Structure Service.png",
        description:
          "Accurate rebar drawings and bar bending schedules to support concrete construction and procurement. Our outputs reduce errors in reinforcement placement and speed up onsite workflows.",
        features: ["Bar bending schedules", "Detailing", "Coordination"],
      },
      "structural-cad-drafting": {
        title: "Structural CAD Drafting",
        subtitle: "CAD documentation for structural engineering",
        image: "/Structure Service.png",
        description:
          "DWG and CAD documentation tailored for structural engineers and fabricators, with detailed notation and markups to support analysis and shop fabrication.",
        features: ["CAD drawings", "Details", "Markups"],
      },
      "steel-shop-drawings": {
        title: "Steel Shop Drawings",
        subtitle: "Fabrication-ready steel documentation",
        image: "/Structure Service.png",
        description:
          "Fabrication-ready steel shop drawings with clear assembly information, part lists and dimensions to aid fabricators and contractors during manufacturing and site installation.",
        features: ["Fabrication details", "Assembly drawings", "Schedules"],
      },
      "structural-bim-services": {
        title: "Structural BIM Services",
        subtitle: "Modeling and analysis for structural systems",
        image: "/Structure Service.png",
        description:
          "Structural BIM models prepared for analysis, detailing and multi-disciplinary coordination. Models are exchanged in formats compatible with analysis tools and construction workflows.",
        features: ["Analysis-ready models", "Detailing", "Coordination"],
      },
      "connection-design": {
        title: "Connection Design",
        subtitle: "Detailed connection engineering",
        image: "/Structure Service.png",
        description:
          "Connection design services delivering engineered solutions for steel and composite structures, supported by calculations, drawings and fabrication notes.",
        features: ["Connection calculations", "Drawings", "Details"],
      },
    },
  },
  "3d-visualization": {
    title: "3D Visualization",
    image: "https://i.postimg.cc/8CnPTjdQ/3d-Visualiser.png",
    image: "/3d-Visualiser.png",
    description: "Photorealistic renders and virtual experiences",
    subs: {
      "3d-modeling": {
        title: "3D Modeling",
        subtitle: "High-fidelity 3D models",
        image: "https://i.postimg.cc/8CnPTjdQ/3d-Visualiser.png",
        description:
          "High-quality 3D modeling services tailored for photoreal renders, AR/VR and visualization pipelines. Models are optimised for materials, lighting and scene composition to support compelling presentations.",
        features: ["Asset modeling", "Scene setup", "Optimisation"],
      },
      "cinematic-walkthroughs": {
        title: "Cinematic Walkthroughs",
        subtitle: "Narrative-driven visual tours",
        image: "https://i.postimg.cc/8CnPTjdQ/3d-Visualiser.png",
        description:
          "Cinematic walkthroughs that communicate spatial experience and design intent through camera choreography, timing and post-production polish. Ideal for client presentations and marketing.",
        features: ["Camera paths", "Post-production", "Sound design"],
      },
      "ar-vr-services": {
        title: "AR/VR Services",
        subtitle: "Immersive visualization experiences",
        image: "https://i.postimg.cc/8CnPTjdQ/3d-Visualiser.png",
        description:
          "AR/VR development to create immersive experiences for stakeholder engagement, enabling interactive exploration of designs and faster decision cycles.",
        features: ["VR tours", "AR overlays", "Interactive scenes"],
      },
      "project-renders": {
        title: "Project Renders",
        subtitle: "Photorealistic exterior and interior renders",
        image: "https://i.postimg.cc/8CnPTjdQ/3d-Visualiser.png",
        description:
          "Photoreal renders produced for marketing, client review and approvals with attention to materials, lighting and composition. Deliverables include stills and post-processed images ready for presentations.",
        features: ["Lighting", "Materials", "Post-production"],
      },
      "floor-plan-renders": {
        title: "Floor Plan Renders",
        subtitle: "Quick visualizations of plans and layouts",
        image: "https://i.postimg.cc/8CnPTjdQ/3d-Visualiser.png",
        description:
          "Quick floor plan renders that communicate layout options and planning decisions, useful for early-stage feedback and stakeholder alignment.",
        features: ["Plan views", "Simple renders", "Quick turnaround"],
      },
    },
  },
};

export default SERVICES;
