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
// - whyParagraph1: Introductory 'Why Choose Us' statement.
// - whyParagraph2: In-depth follow-up to whyParagraph1.
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
        whyParagraph1: "Selecting the right BIM consulting partner defines how efficiently your vision becomes reality.",
        whyParagraph2: "At Collective AEC, we merge design intelligence with advanced technology to deliver integrated BIM solutions that enhance precision, collaboration, and project performance from concept to completion.",
        sectionDescription: "At Collective AEC, we redefine precision through intelligent BIM solutions. From establishing seamless Common Data Environments to crafting customized BIM Execution Plans (BEP), our approach ensures every project begins with clarity and innovation. Our expert team transforms your BIM goals into built realities delivering accuracy, collaboration, and forward-thinking results through advanced BIM modelling, Revit drafting, and parametric design expertise.",
        description: "We help teams define a practical BIM strategy, document standards, and create BIM execution plans so projects run smoothly from early design through handover. Our approach focuses on reproducible workflows, clear responsibilities, and measurable deliverables to reduce confusion and delays.",
        keyOfferings: [
          { id: 'bim-consulting-services-ko-1', title: 'Design-Led Engineering', text: 'Our approach integrates engineering analysis and structural performance from the earliest design stages, ensuring that every architectural vision is not only aesthetically pleasing but also underpinned by a robust, buildable, and efficient structural and systems strategy. We leverage advanced simulation tools to test design concepts against real-world constraints, enabling proactive decision-making and preventing costly rework downstream.' },
          { id: 'bim-consulting-services-ko-2', title: 'Digital Workflow Integration', text: 'We establish cloud-based Common Data Environments (CDE) and standardized digital workflows tailored to your project\'s unique needs. This ensures seamless and real-time collaboration among all project teams, from architects and engineers to contractors and owners. Our CDE implementation facilitates robust version control, automated data exchanges, and the delivery of BIM-ready assets, reducing communication silos and improving overall project transparency.' },
          { id: 'bim-consulting-services-ko-3', title: 'Performance-Based Design', text: 'We leverage the rich data within the BIM model for comprehensive energy modeling, daylight analysis, and thermal performance simulation. This enables us to inform design decisions with quantitative data, leading to the creation of sustainable, resilient, and cost-effective building outcomes that not only meet but exceed energy code compliance requirements. Our analysis helps optimize building orientation, material selection, and system efficiency from the conceptual phase.' },
          { id: 'bim-consulting-services-ko-4', title: 'Multi-Discipline Coordination', text: 'Our federated model approach allows for rigorous multi-discipline coordination and iterative clash detection reviews across all project disciplines, including architectural, structural, and MEPF. By identifying and resolving conflicts and constructability issues in the virtual environment, we prevent costly on-site delays and rework. We generate clear, actionable reports that track each clash from identification to resolution, ensuring a seamless construction process.' },
          { id: 'bim-consulting-services-ko-5', title: 'Advanced Visualization', text: 'We produce high-fidelity, photorealistic visualizations, immersive virtual reality (VR) walkthroughs, and augmented reality (AR) experiences directly from the intelligent BIM model. These compelling visual assets facilitate clear stakeholder communication, provide an unparalleled tool for design validation, and serve as powerful marketing materials that help clients and investors fully experience the project before a single shovel hits the ground.' }
        ],
        process: [
          { id: 'bim-consulting-services-p-1', title: 'Understand', text: 'We begin with an in-depth discovery phase to fully understand your project goals, organizational capabilities, existing workflows, and specific constraints to tailor a bespoke BIM strategy.' },
          { id: 'bim-consulting-services-p-2', title: 'Analyse', text: 'Our team analyzes all project inputs, including site conditions, building codes, and functional requirements, to inform the technical approach and establish a clear BIM Execution Plan (BEP).' },
          { id: 'bim-consulting-services-p-3', title: 'Optimize', text: 'Leveraging parametric design and data analysis, we rigorously optimize building systems for performance, cost-effectiveness, and constructability, ensuring maximum value and efficiency.' },
          { id: 'bim-consulting-services-p-4', title: 'Automate', text: 'We develop and implement automated workflows and custom scripts to streamline repetitive tasks, enhance data consistency, and accelerate overall project delivery from design to handover.' }
        ],
        features: ["BIM standards", "BIM execution plans", "Team training"],
      },
      "scan-to-bim": {
        title: "Scan to BIM",
        subtitle: "Reality capture converted into intelligent models",
        image: "https://i.postimg.cc/Y2yyNqYB/BIMSERVICES.jpg",
        heroTitle: "Scan to BIM",
        heroDescription: "Transform reality capture into precision. At Collective AEC, we convert laser scan data into intelligent, measurable BIM models for renovation and retrofit excellence.",
        whyParagraph1: "Choosing the right partner for Scan-to-BIM is critical for accurately capturing existing conditions to ensure the success of renovation or retrofit projects.",
        whyParagraph2: "At Collective AEC, we bridge the gap between the physical and digital worlds. Our advanced reality capture techniques and meticulous modeling process transform complex point cloud data into intelligent, data-rich BIM models that serve as the definitive foundation for your design and coordination workflows.",
        sectionDescription: "We transform laser scan data into accurate, measurable BIM models ideal for renovation and retrofit projects. The deliverables include cleaned point clouds, geo-referenced models, and as-built BIM ready for coordination and verification.",
        description: "We transform laser scan data into accurate, measurable BIM models ideal for renovation and retrofit projects. The deliverables include cleaned point clouds, geo-referenced models, and as-built BIM ready for coordination and verification.",
        keyOfferings: [
          { id: 'scan-to-bim-services-ko-1', title: 'Reality Capture & Registration', text: 'We utilize high-resolution terrestrial, mobile, or drone-based LiDAR scanners to capture precise, georeferenced point clouds, ensuring comprehensive coverage of as-built conditions. Our field-certified teams deploy the latest technology to gather highly accurate data, which is then meticulously registered and aligned into a unified and clean point cloud dataset for seamless integration with downstream modeling applications.' },
          { id: 'scan-to-bim-services-ko-2', title: 'Point Cloud Processing', text: 'Our process includes advanced noise filtering, multi-scan alignment, and data segmentation to prepare the raw scan data for modeling. We meticulously classify the point cloud data by discipline (e.g., structural, architectural, MEP) to ensure maximum accuracy and usability for the subsequent modeling phase. This meticulous cleaning and organization of the data minimizes errors and speeds up the modeling workflow.' },
          { id: 'scan-to-bim-services-ko-3', title: 'As-Built BIM Modeling', text: 'We create native Revit models across Architectural, Structural, and MEP disciplines directly from the processed point cloud data. Our modelers enrich the geometric data with intelligent information, such as wall types, equipment schedules, and material properties, to facilitate detailed design, documentation, and analysis for all project stakeholders. This process transforms static scan data into a dynamic, data-rich digital asset.' },
          { id: 'scan-to-bim-services-ko-4', title: 'Custom LOD / LOI Modeling', text: 'Our team delivers models tailored to your specific project needs by adhering to a defined Level of Detail (LOD) and Level of Information (LOI). We support everything from conceptual LOD 100 massing to fabrication-level LOD 400 detail and asset-information-rich LOD 500, ensuring the final model contains the precise level of geometric accuracy and embedded data required for its intended use, whether it\'s for design, analysis, or facility management.' },
          { id: 'scan-to-bim-services-ko-5', title: '2D Drawing Extraction', text: 'From the verified, as-built BIM model, we generate precise and consistent 2D deliverables, including as-built floor plans, sections, and elevations. This automated extraction process ensures that all 2D documentation is perfectly aligned with the 3D model, eliminating discrepancies and providing a reliable foundation for documentation and permit sets. Our drawings are produced with clear annotations, dimensions, and callouts to support easy readability for on-site teams.' },
          { id: 'scan-to-bim-services-ko-6', title: 'Clash Analysis & Coordination', text: 'We perform detailed clash detection between the scanned as-built conditions and the proposed design elements. This proactive analysis enables us to identify and resolve spatial and inter-disciplinary conflicts before construction begins. By overlaying the new design within the existing structure\'s point cloud, we provide a powerful tool for visual verification and a seamless coordination process for renovation and retrofit projects.' },
          { id: 'scan-to-bim-services-ko-7', title: 'Digital Twin Foundation', text: 'We integrate essential asset metadata, COBie data, or maintenance information directly into the as-built model. By linking the digital model to real-world operational data, we create an intelligent digital twin that can be used for efficient lifecycle management, facility maintenance, energy monitoring, and long-term asset planning, providing a powerful resource for building owners and operators.' }
        ],
        process: [
          { id: 'scan-to-bim-services-p-1', title: 'Discover & Plan', text: 'We initiate every project with a collaborative workshop to align on the project scope, objectives, required scan zones, accuracy tolerances, and final deliverable formats to ensure we meet your exact needs.' },
          { id: 'scan-to-bim-services-p-2', title: 'Scan & Capture', text: 'Our certified field teams deploy state-of-the-art LiDAR systems, including terrestrial, mobile, or drone scanners, to capture highly precise and comprehensive data of the on-site conditions.' },
          { id: 'scan-to-bim-services-p-3', title: 'Register & Validate', text: 'Multiple scan stations are meticulously registered into a single, cohesive point cloud. This unified dataset is then rigorously verified against survey control points to confirm its global accuracy and completeness.' },
          { id: 'scan-to-bim-services-p-4', title: 'Model in BIM', text: 'Our skilled modelers transform the validated point cloud data into an intelligent, parametric Revit model. Each element is carefully crafted to reflect the true as-built conditions with the specified Level of Detail.' },
          { id: 'scan-to-bim-services-p-5', title: 'Quality & Clash Checks', text: 'We conduct a series of rigorous quality assurance checks to ensure geometric precision and data integrity. The model is also checked for clashes between existing conditions and any new design models for seamless coordination.' },
          { id: 'scan-to-bim-services-p-6', title: 'Deliver & Support', text: 'The final, validated deliverables are shared in native Revit, IFC, and CAD formats. We provide ongoing support to assist your team with coordination, design integration, and any necessary updates.' }
        ],
        features: ["Point cloud processing", "As-built modeling", "Dimensional verification"],
      },
      "bim-coordination": {
        title: "BIM Coordination",
        subtitle: "Integrated model coordination and clash resolution",
        image: "https://i.postimg.cc/Y2yyNqYB/BIMSERVICES.jpg",
        heroTitle: "BIM Coordination",
        heroDescription: "Seamless multi-discipline coordination. At Collective AEC, we integrate architectural, structural, and MEP models into unified solutions, eliminating conflicts before they reach the field.",
        whyParagraph1: "Effective BIM coordination is the cornerstone of a successful construction project, preventing costly rework and schedule overruns.",
        whyParagraph2: "At Collective AEC, we go beyond simple clash detection. We facilitate a proactive, collaborative coordination process, using federated models as a single source of truth to drive informed decision-making, resolve complex constructability issues, and ensure all disciplines are perfectly aligned.",
        sectionDescription: "Federated model coordination with iterative clash detection cycles and concise coordination reports to reduce on-site conflicts. We run coordinated reviews, assign clear actions, and track resolutions to keep the construction programme on schedule. Our systematic approach ensures all disciplines work in harmony, minimizing rework and maximizing efficiency throughout the project lifecycle.",
        description: "Federated model coordination with iterative clash detection cycles and concise coordination reports to reduce on-site conflicts. We run coordinated reviews, assign clear actions, and track resolutions to keep the construction programme on schedule.",
        keyOfferings: [
          { id: 'bim-coordination-ko-1', title: 'Federated Model Management', text: 'We create and manage a unified federated model by integrating architectural, structural, and MEPF disciplines into a single, cohesive environment. This central model acts as the single source of truth for the project, allowing all stakeholders to review the project holistically and visualize the spatial relationships between all building systems in a single comprehensive view.' },
          { id: 'bim-coordination-ko-2', title: 'Constructability Reviews', text: 'Our experts conduct in-depth constructability reviews using the federated model to identify potential issues related to accessibility, sequencing, maintenance, and site logistics before they arise. This proactive analysis helps optimize the design for easier and safer construction, reducing the risk of costly delays and on-site modifications.' },
          { id: 'bim-coordination-ko-3', title: 'Clash Detection & Resolution', text: 'We perform iterative clash detection cycles using industry-leading software like Navisworks. We intelligently categorize clashes by severity and trade, allowing the project team to focus on the most critical issues first. Our process includes running automated tests and facilitating resolution meetings to ensure timely and effective solutions are implemented in the design models.' },
          { id: 'bim-coordination-ko-4', title: 'Coordination Reporting', text: 'We generate clear, actionable coordination reports that visualize conflicts with 3D snapshots, assign responsibility to specific trades, and track the status of each issue through to its resolution. These reports provide full transparency and are a critical tool for maintaining accountability and keeping the project on schedule.' },
          { id: 'bim-coordination-ko-5', title: 'Digital Mockups & Reviews', text: 'We utilize the coordinated model to create digital mockups of complex or congested areas, such as plant rooms or complex facade systems. This allows for detailed virtual review and validation by all stakeholders, ensuring that complex installations are planned and executed correctly the first time and all parties are aligned on the final solution.' },
          { id: 'bim-coordination-ko-6', title: '4D Sequence Integration', text: 'By linking the coordinated federated model to the construction schedule, we help visualize the project timeline and optimize the overall construction sequence. This allows teams to identify time-based clashes, visualize site logistics, and refine the build order for maximum efficiency and a safer construction site.' }
        ],
        process: [
          { id: 'bim-coordination-p-1', title: 'Setup & Planning', text: 'We begin by establishing a clear BIM Execution Plan (BEP) for coordination, defining roles, responsibilities, model exchange protocols, and the rules for clash detection to ensure a structured process.' },
          { id: 'bim-coordination-p-2', title: 'Model Aggregation', text: 'We aggregate the latest models from all design disciplines into a central federated model. This model is meticulously checked for alignment, origin integrity, and completeness before coordination begins.' },
          { id: 'bim-coordination-p-3', title: 'Clash Analysis', text: 'Using advanced software like Navisworks, we run automated clash tests based on predefined rules. Clashes are then intelligently grouped, prioritized, and assigned to the relevant disciplines for review.' },
          { id: 'bim-coordination-p-4', title: 'Coordination Meetings', text: 'We lead structured coordination meetings where stakeholders review the identified clashes, collaborate on design solutions, and agree upon clear action items and deadlines for resolution.' },
          { id: 'bim-coordination-p-5', title: 'Track & Resolve', text: 'All issues are logged and tracked in a central platform. We monitor the progress of resolutions, ensuring that design models are updated accordingly and that resolved clashes are verified in the next cycle.' },
          { id: 'bim-coordination-p-6', title: 'Sign-off & Reporting', text: 'Once a project area is fully coordinated and clash-free, we facilitate a formal sign-off. We provide comprehensive reports detailing the coordination progress and final status for project records.' }
        ],
        features: ["Clash detection", "Federated modeling", "Coordination meetings"],
      },
      "bim-clash-detection": {
        title: "BIM Clash Detection",
        subtitle: "Automated clash reports and mitigation",
        image: "https://i.postimg.cc/Y2yyNqYB/BIMSERVICES.jpg",
        heroTitle: "BIM Clash Detection",
        heroDescription: "Proactive conflict resolution through advanced automation. At Collective AEC, we identify and resolve design clashes before construction, saving time, cost, and preventing on-site delays.",
        whyParagraph1: "Unidentified clashes are a primary cause of budget overruns and project delays during construction.",
        whyParagraph2: "At Collective AEC, our proactive clash detection service is more than just running software. We apply a systematic approach to identify, prioritize, and manage the resolution of conflicts, transforming the process from a reactive problem into a strategic tool for risk mitigation and quality assurance.",
        sectionDescription: "Proactive clash management using automated tools and prioritised reporting to minimise rework and schedule delays. Our workflows provide actionable lists and follow-up tracking so teams can close issues efficiently. We leverage industry-leading software to run comprehensive clash detection across all project phases, delivering detailed reports that enable swift resolution and coordinated decision-making.",
        description: "Proactive clash management using automated tools and prioritised reporting to minimise rework and schedule delays. Our workflows provide actionable lists and follow-up tracking so teams can close issues efficiently.",
        keyOfferings: [
          { id: 'bim-clash-detection-ko-1', title: 'Automated Clash Runs', text: 'We establish and execute scheduled, automated clash detection runs using defined rule-sets tailored to your project. This ensures consistent and regular identification of interferences as design models from different disciplines evolve, providing continuous quality assurance and early warnings for potential conflicts.' },
          { id: 'bim-clash-detection-ko-2', title: 'Intelligent Prioritisation', text: 'Clashes are not just listed; they are intelligently filtered, grouped, and tagged by severity (Hard, Soft, Clearance) and by their constructability impact. This systematic approach allows project teams to focus on resolving the most critical issues first, streamlining the workflow and ensuring efficient use of time and resources.' },
          { id: 'bim-clash-detection-ko-3', title: 'Actionable Reporting', text: 'We produce clear, concise clash reports with 3D visuals, precise location data, and element IDs. These reports are designed to be immediately actionable for the design and trade teams, providing them with all the necessary information to quickly understand the issue and propose a solution without lengthy searches or back-and-forth communication.' },
          { id: 'bim-clash-detection-ko-4', title: 'Resolution Tracking', text: 'Our process includes a robust tracking system to monitor the status of each clash from its identification to final resolution. We use a shared platform that provides a full audit trail, ensuring accountability for all assigned issues and preventing conflicts from being overlooked or re-emerging at a later stage of the project.' },
          { id: 'bim-clash-detection-ko-5', title: 'Clash Trend Auditing', text: 'We maintain a historical audit of clashes throughout the project lifecycle. This valuable data allows us to identify recurring issues or design trends that can inform process improvements for the current project and be used for future project planning, promoting continuous improvement in design and coordination workflows.' }
        ],
        process: [
          { id: 'bim-clash-detection-p-1', title: 'Schedule & Configure', text: 'We work with the project team to define a schedule for clash detection runs that aligns with design milestones. We configure custom clash tests and tolerance rules tailored to the project’s specific needs.' },
          { id: 'bim-clash-detection-p-2', title: 'Run & Analyze', text: 'Automated clash checks are executed on the latest federated model. Our specialists then analyze the raw results, removing false positives and grouping related issues to streamline the review process.' },
          { id: 'bim-clash-detection-p-3', title: 'Report & Distribute', text: 'We generate and distribute easy-to-understand clash reports to the relevant stakeholders. Each report clearly identifies the issue, its location, and the involved disciplines for efficient hand-off.' },
          { id: 'bim-clash-detection-p-4', title: 'Resolve & Verify', text: 'Teams use our reports to resolve the clashes in their native design software. We then verify the fixes in the subsequent clash run, formally closing the issue once it is confirmed to be resolved.' }
        ],
        features: ["Automated clash runs", "Prioritised reporting", "Resolution tracking"],
      },
      "4d-bim-services": {
        title: "4D BIM Services",
        subtitle: "Construction sequencing and simulation",
        image: "https://i.postimg.cc/Y2yyNqYB/BIMSERVICES.jpg",
        heroTitle: "4D BIM Services",
        heroDescription: "Visualizing construction through time. At Collective AEC, we link project schedules to BIM models, creating dynamic 4D simulations that optimize sequencing, logistics, and site safety.",
        whyParagraph1: "A traditional Gantt chart cannot effectively communicate the spatial and logistical complexities of a modern construction project.",
        whyParagraph2: "At Collective AEC, we transform the project schedule into a powerful visual communication tool. Our 4D BIM services link model elements to time-based data, creating immersive simulations that allow teams to validate construction sequences, optimize site logistics, and mitigate risks before breaking ground.",
        sectionDescription: "We link programme data to BIM to produce construction simulations, logistics plans and sequence visualisations. These 4D outputs help planners validate access, identify clashes over time, and optimise sequencing for safer, faster builds. Our 4D BIM services enable project teams to anticipate challenges, coordinate trades effectively, and communicate construction strategies with unprecedented clarity and precision.",
        description: "We link programme data to BIM to produce construction simulations, logistics plans and sequence visualisations. These 4D outputs help planners validate access, identify clashes over time, and optimise sequencing for safer, faster builds.",
        keyOfferings: [
          { id: '4d-scheduling-ko-1', title: 'Integrated Construction Scheduling', text: 'We seamlessly integrate project management schedules from tools like Primavera P6, Microsoft Project, or other planning software with the 3D BIM models. By linking schedule activities to specific model elements, we create precise and dynamic construction simulations and phasing animations that provide a clear visual representation of the project timeline and its progress.' },
          { id: '4d-scheduling-ko-2', title: 'Logistics and Site Optimization', text: 'Our 4D models visualize the entire construction site, including the placement of temporary facilities, material laydown areas, crane placements, and access routes over time. This dynamic visualization allows for the optimization of site logistics, helps identify potential congestion points, and enhances site safety planning by simulating the movement of equipment and personnel throughout the project.' },
          { id: '4d-scheduling-ko-3', title: 'Construction Sequence Validation', text: 'We develop detailed sequencing models that allow project teams to visually validate the planned construction flow and identify potential out-of-sequence work or resource conflicts. This process helps to refine the path of construction, ensuring a logical and efficient build order that minimizes delays and improves overall productivity on site.' },
          { id: '4d-scheduling-ko-4', title: 'Stakeholder Communication', text: 'Our 4D phasing videos serve as a powerful and intuitive communication tool. They enable all stakeholders, from clients and investors to subcontractors and site workers, to clearly understand the construction plan and project milestones, fostering a shared vision and improved collaboration across all project phases.' },
          { id: '4d-scheduling-ko-5', title: 'Look-Ahead Planning', text: 'We can generate short-term look-ahead schedules and simulations, providing site teams with a clear visual guide for upcoming work and resource requirements for the next few weeks or months. This helps to improve short-term planning and coordination, ensuring that all necessary materials and equipment are on site when they are needed and that work proceeds without interruption.' }
        ],
        process: [
          { id: '4d-scheduling-p-1', title: 'Data Integration', text: 'We begin by importing and integrating the 3D BIM models and the construction schedule (e.g., Primavera P6). We map the schedule activities to the corresponding model components to create the foundational linkage.' },
          { id: '4d-scheduling-p-2', title: '4D Simulation Development', text: 'We develop the 4D simulation by creating task sets and defining the appearance of elements for each construction stage (e.g., temporary, installed, demolished). This creates the visual representation of the build sequence.' },
          { id: '4d-scheduling-p-3', title: 'Sequence Review & Refinement', text: 'The initial 4D simulation is reviewed with the project management and site teams. This collaborative session helps identify logistical conflicts or sequencing inefficiencies, which are then refined in the schedule.' },
          { id: '4d-scheduling-p-4', title: 'Logistics Modeling', text: 'We enhance the simulation by adding models of site logistics, such as crane paths, delivery routes, and material storage zones, to provide a complete picture of site activity over time.' },
          { id: '4d-scheduling-p-5', title: 'Output & Reporting', text: 'We generate final deliverables, including high-resolution 4D simulation videos and detailed phasing diagrams. These outputs are used for project meetings, stakeholder presentations, and on-site planning sessions.' }
        ],
        features: ["Schedule linking", "4D visualisations", "Logistics modelling"],
      },
      "quantity-takeoff": {
        title: "Quantity Takeoff",
        subtitle: "Accurate automated quantity extraction",
        image: "https://i.postimg.cc/Y2yyNqYB/BIMSERVICES.jpg",
        heroTitle: "Quantity Takeoff",
        heroDescription: "Precision measurement from intelligent models. At Collective AEC, we extract accurate quantities directly from BIM, delivering reliable data for cost estimation, procurement, and project planning.",
        whyParagraph1: "Manual quantity takeoffs are time-consuming, prone to error, and struggle to keep pace with design changes.",
        whyParagraph2: "At Collective AEC, we leverage the 'I' in BIM to automate the quantity takeoff process. By extracting data directly from the intelligent model, we provide a fast, accurate, and dynamic bill of materials that supports precise cost estimation, efficient procurement, and informed decision-making throughout the project lifecycle.",
        sectionDescription: "Model-based quantity takeoffs that deliver reliable counts and measures for early estimates and procurement readiness. Outputs are provided in standard formats for cost planning and tendering to reduce manual measurement errors. Our automated extraction processes ensure consistency and accuracy while dramatically reducing the time required for quantity surveying and material scheduling.",
        description: "Model-based quantity takeoffs that deliver reliable counts and measures for early estimates and procurement readiness. Outputs are provided in standard formats for cost planning and tendering to reduce manual measurement errors.",
        keyOfferings: [
          { id: 'quantity-takeoff-ko-1', title: '5D BIM Integration', text: 'We seamlessly link cost data (the 5th dimension) to the 3D model elements using software like Revit and Navisworks. This integration enables real-time cost feedback as the design evolves, allowing project managers and owners to instantly understand the financial impact of design changes and make informed decisions throughout the entire project lifecycle.' },
          { id: 'quantity-takeoff-ko-2', title: 'Automated Quantity Extraction', text: 'Our process automatically extracts material quantities—such as volumes of concrete, lengths of pipe, surface areas of drywall, or counts of fixtures—directly from the intelligent BIM model. This automation minimizes the risk of manual errors and saves significant time, providing a reliable foundation for accurate cost estimation and procurement planning.' },
          { id: 'quantity-takeoff-ko-3', title: 'Detailed Cost Reporting', text: 'We generate comprehensive and customized cost estimation reports based on the accurate, model-derived quantity takeoffs. These reports can be tailored to meet the specific requirements of your project, including breakdown by CSI division or work package, and can be exported in various formats to seamlessly integrate with your existing cost management systems and databases.' },
          { id: 'quantity-takeoff-ko-4', title: 'Design Change Impact Analysis', text: 'Our model-based approach allows for the rapid assessment of how design changes, even small ones, affect material quantities and the overall project cost. This ability to instantly analyze the financial impact of design modifications facilitates proactive and informed project management decisions, helping to control budgets and prevent unexpected cost overruns.' },
          { id: 'quantity-takeoff-ko-5', title: 'Material Waste Reduction', text: 'By providing precise quantity data, our service helps optimize material procurement and ordering. This precision reduces over-ordering and identifies opportunities for pre-fabrication, which in turn promotes both financial savings and greater sustainability by minimizing material waste on the construction site.' },
          { id: 'quantity-takeoff-ko-6', title: 'Discipline-Specific Takeoffs', text: 'We provide detailed quantity takeoffs tailored to specific disciplines, including architectural finishes, structural steel tonnage, concrete yardage, and MEP component counts. These specialized reports are crucial for accurate bidding, procurement, and subcontracting, ensuring that each trade has the precise data required for their work.' }
        ],
        process: [
          { id: 'quantity-takeoff-p-1', title: 'Model Integration & Audit', text: 'We begin by integrating the architectural, structural, and MEP models into a unified BIM environment. We then perform a model audit to ensure elements are modeled correctly for accurate data extraction.' },
          { id: 'quantity-takeoff-p-2', title: 'Quantity Extraction & Scheduling', text: 'Using specialized BIM tools and custom scripts, we extract accurate material quantities from the integrated models. This data is organized into detailed schedules and lists based on project requirements.' },
          { id: 'quantity-takeoff-p-3', title: 'Cost Data Application', text: 'We apply unit costs to the extracted quantities to generate detailed cost estimates. This step can be integrated with the client’s existing cost databases for consistency and accuracy.' },
          { id: 'quantity-takeoff-p-4', title: 'Analysis & Reporting', text: 'We analyze the data to identify cost drivers and assess the financial impact of any design changes. We then generate comprehensive reports detailing quantities, costs, and potential areas for value engineering.' },
          { id: 'quantity-takeoff-p-5', title: 'Export & Handover', text: 'The final quantity and cost data is exported into standard formats like Excel or specialized cost estimation software. We provide a full handover to the project\'s cost management team for procurement and tendering.' },
        ],
        features: ["Model-based quantities", "Format exports", "Cross-checking"],
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
        whyParagraph1: "The complexity of modern MEP systems demands a level of precision and coordination that traditional 2D drafting simply cannot provide.",
        whyParagraph2: "At Collective AEC, we leverage BIM to create intelligent, data-rich 3D models of all MEP systems. This approach provides a single source of truth, enabling advanced coordination, accurate documentation, and streamlined fabrication, ultimately leading to higher quality installations and reduced on-site issues.",
        sectionDescription: "Detailed MEP models developed for coordination, performance analysis and construction documentation. We model systems to fabrication level where required and ensure systems are tagged and scheduled for efficient installation. Our comprehensive approach includes coordinated routing, equipment placement, and system optimization to deliver constructible solutions that meet performance requirements while minimizing conflicts and installation challenges.",
        description: "Detailed MEP models developed for coordination, performance analysis and construction documentation. We model systems to fabrication level where required and ensure systems are tagged and an d scheduled for efficient installation.",
        keyOfferings: [
          { id: 'mep-bim-ko-1', title: 'Intelligent MEP BIM Modeling', text: 'We create intelligent 3D models for mechanical, electrical, plumbing, and fire protection systems, embedding critical data such as equipment specifications, maintenance schedules, and manufacturer details. This information serves as a single source of truth for all project stakeholders throughout the entire building lifecycle, from design and construction to facility management.' },
          { id: 'mep-bim-ko-2', title: 'Scan to BIM for MEP Renovations', text: 'Our service accurately converts laser scans of existing buildings into precise, as-built MEP BIM models. This is particularly crucial for renovation and retrofit projects, as it ensures the seamless integration and accurate coordination of new systems with existing structures, preventing costly field changes and conflicts with hidden infrastructure.' },
          { id: 'mep-bim-ko-3', title: 'Custom Revit Family Creation', text: 'We develop custom, parametric Revit families for specific MEP components and equipment that are not available in standard libraries. This ensures that our models accurately reflect real-world products and their technical specifications, enabling precise quantity takeoffs, performance analysis, and detailed shop drawings for fabrication.' },
          { id: 'mep-bim-ko-4', title: 'Fabrication-Level MEP Modeling', text: 'We can advance the model to LOD 400, creating fabrication-ready models that include precise details for ducts, pipes, and conduits. This high level of detail enables streamlined off-site manufacturing and assembly (DfMA), reducing on-site labor costs, improving installation speed, and enhancing the overall quality and accuracy of the installed systems.' },
          { id: 'mep-bim-ko-5', title: 'MEP Shop & As-Built Drawings', text: 'From the coordinated model, we produce detailed shop drawings for MEP systems that provide clear and unambiguous instructions for fabrication and on-site installation. We also create final as-built drawings that reflect any changes made during construction, providing building owners with an accurate and up-to-date record for facility management and future maintenance.' }
        ],
        process: [
          { id: 'mep-bim-p-1', title: 'Requirements & Data Gathering', text: 'We begin by collecting all necessary project data, including design drawings, equipment submittals, and the BIM Execution Plan, to ensure our models align perfectly with project standards.' },
          { id: 'mep-bim-p-2', title: '3D MEP Modeling', text: 'Our team develops intelligent 3D models for all MEPF systems using Revit. We ensure that every component is modeled with the correct dimensions, location, and embedded data as per the required Level of Detail.' },
          { id: 'mep-bim-p-3', title: 'Inter-disciplinary Coordination', text: 'The MEP models are integrated with architectural and structural models in a federated environment. We then run rigorous clash detection and coordination cycles to identify and resolve all spatial conflicts.' },
          { id: 'mep-bim-p-4', title: 'Shop Drawing & Documentation Creation', text: 'Once the model is fully coordinated and clash-free, we generate detailed shop drawings, spool drawings, and other construction documents directly from the model, ensuring complete accuracy and consistency.' },
          { id: 'mep-bim-p-5', title: 'Quality Assurance & Delivery', text: 'A final, thorough quality check is conducted to ensure that all models and drawings meet the highest standards and project specifications. We then deliver the final package in the required formats for construction and handover.' }
        ],
        features: ["Duct & pipe modeling", "MEP closets", "System tagging"],
      },
      "mep-bim-coordination": {
        title: "MEP BIM Coordination",
        subtitle: "Multi-disciplinary coordination and clash resolution",
        image: "https://i.postimg.cc/J4HmZFyX/MEPSERVICE.jpg",
        heroTitle: "MEP BIM Coordination",
        heroDescription: "Harmonizing complex building systems. At Collective AEC, we bridge MEP, structural, and architectural disciplines through rigorous coordination that eliminates conflicts and accelerates construction.",
        whyParagraph1: "Incoordinated MEP systems are a primary source of on-site conflicts, leading to significant delays and budget increases.",
        whyParagraph2: "At Collective AEC, we facilitate a structured, proactive coordination process. By federating all discipline models, we create a virtual construction environment where our team can identify, analyze, and resolve clashes methodically, ensuring seamless integration of all building systems before construction ever begins.",
        sectionDescription: "Cross-discipline clash detection and coordination that bridges MEP, structural and architectural teams. We run regulated coordination cycles and produce issue logs to drive decisions and reduce installation risks. Our systematic coordination methodology ensures mechanical, electrical, and plumbing systems integrate seamlessly with architectural and structural elements, preventing costly on-site modifications and maintaining project schedules.",
        description: "Cross-discipline clash detection and coordination that bridges MEP, structural and architectural teams. We run regulated coordination cycles and produce issue logs to drive decisions and reduce installation risks.",
        keyOfferings: [
          { id: 'mep-bim-coordination-ko-1', title: 'Federated Model Management', text: 'We establish and maintain a central federated model by combining all discipline-specific BIM models into a unified and up-to-date dataset. This single model acts as the central hub for coordination, allowing all project teams to review the entire building system holistically and identify potential conflicts with architectural, structural, and other MEP trades.' },
          { id: 'mep-bim-coordination-ko-2', title: 'Clash Management & Prioritization', text: 'We manage and prioritize MEP-related clashes based on their severity and their impact on constructability, cost, and schedule. By filtering out minor conflicts and focusing on the most critical issues first, we ensure the project team allocates its efforts effectively, addressing complex duct runs, pipe routing, and equipment placements that could cause major on-site problems.' },
          { id: 'mep-bim-coordination-ko-3', title: 'Facilitated Coordination Meetings', text: 'Our BIM coordinators lead highly efficient, solution-oriented coordination meetings. We guide cross-discipline reviews of clash reports, visualize conflicts in 3D, and facilitate collaborative problem-solving among architects, structural engineers, and MEP designers to ensure all systems are seamlessly integrated before construction begins.' },
          { id: 'mep-bim-coordination-ko-4', title: 'Actionable Issue Tracking', text: 'We maintain clear, actionable logs of all identified issues using a centralized platform. Each item is assigned a responsible party and a deadline, ensuring full accountability and transparent tracking through to resolution. This system provides a full audit trail and helps prevent conflicts from being overlooked or re-emerging.' },
          { id: 'mep-bim-coordination-ko-5', title: 'Constructability & Access Reviews', text: 'Beyond direct clashes, we analyze the model for broader constructability and maintenance issues. We ensure there is adequate access for the installation and servicing of all MEP systems and that their placement complies with local codes, preventing costly design modifications that might be needed after systems are already installed.' }
        ],
        process: [
          { id: 'mep-bim-coordination-p-1', title: 'Gather & Federate', text: 'We begin by gathering the latest design models from all disciplines and federating them into a master coordination model. We verify that all models are correctly aligned and positioned to a common origin point.' },
          { id: 'mep-bim-coordination-p-2', title: 'Detect & Group Clashes', text: 'We run targeted, automated clash tests between MEP systems and with architectural and structural elements. The resulting clashes are then intelligently grouped and filtered to streamline the review process.' },
          { id: 'mep-bim-coordination-p-3', title: 'Report & Plan Resolution', text: 'We generate detailed clash reports and lead coordination meetings to review the findings. During these sessions, we help the team plan mitigation strategies and assign clear ownership for each resolution task.' },
          { id: 'mep-bim-coordination-p-4', title: 'Implement & Verify Closure', text: 'The respective teams implement the agreed-upon fixes in their design models. We then re-run the clash tests to verify that the issues have been successfully resolved and formally update the issue log to close them out.' }
        ],
        features: ["Clash management", "Coordination meetings", "Issue tracking"],
      },
      "clash-detection": {
        title: "Clash Detection",
        subtitle: "Focused clash analysis for MEP systems",
        image: "https://i.postimg.cc/J4HmZFyX/MEPSERVICE.jpg",
        heroTitle: "MEP Clash Detection",
        heroDescription: "Targeted conflict resolution for building systems. At Collective AEC, we perform focused clash analysis on MEP installations, identifying and resolving conflicts early to prevent costly field changes.",
        whyParagraph1: "Even the best designs can contain hidden conflicts within complex MEP systems, which can halt construction if discovered too late.",
        whyParagraph2: "At Collective AEC, we provide a specialized MEP clash detection service that goes deep into the systems. We use iterative analysis and detailed reporting to not only find conflicts but also to provide the clear, visual data needed for rapid, informed decision-making and mitigation.",
        sectionDescription: "Iterative clash analysis focused on mechanical and electrical systems to identify conflicts early. Reports include visual evidence, severity tagging, and recommended mitigations for rapid decision making. Our specialized approach to MEP clash detection ensures ducting, piping, cable trays, and equipment placements are optimized before fabrication, reducing rework and maintaining installation efficiency throughout construction.",
        description: "Iterative clash analysis focused on mechanical and electrical systems to identify conflicts early. Reports include visual evidence, severity tagging, and recommended mitigations for rapid decision making.",
        keyOfferings: [
          { id: 'clash-detection-ko-1', title: 'Targeted Inter-System Runs', text: 'We perform focused clash tests specifically within and between MEP systems (e.g., ductwork vs. plumbing, electrical vs. mechanical piping) to resolve internal system conflicts. This granular level of analysis ensures that even the most complex and congested mechanical rooms and service runs are free from interference before installation.' },
          { id: 'clash-detection-ko-2', title: 'Visual & Data-Rich Reporting', text: 'Our clash reports are highly visual and include 3D snapshots, element IDs, and precise grid locations. This provides engineering and fabrication teams with all the information they need to quickly locate and understand the issue, as well as the exact location and nature of the conflict, enabling rapid and informed decision-making for mitigation.' },
          { id: 'clash-detection-ko-3', title: 'Mitigation Planning Support', text: 'We don’t just find problems; we assist in finding solutions. Our team can help recommend potential re-routing, re-sizing, or re-sequencing options to help guide the mitigation plan for complex clashes, providing valuable constructability insights that go beyond simple identification and assist in collaborative problem-solving.' },
          { id: 'clash-detection-ko-4', title: 'Verification & Re-run Cycles', text: 'Once a fix is implemented and updated in the design model, we re-run the specific clash test to provide formal verification that the conflict has been successfully resolved. This process ensures a closed-loop quality assurance process, guaranteeing that the design is truly coordinated and that no issues are left unresolved.' },
          { id: 'clash-detection-ko-5', title: 'Historical Clash Auditing', text: 'We maintain a complete history of all identified clashes and their resolutions throughout the project. This data provides valuable insights into project trends and can be used for risk assessment, process improvement, and as a case study for future projects, promoting continuous learning and a more efficient workflow.' }
        ],
        process: [
          { id: 'clash-detection-p-1', title: 'Plan & Scope', text: 'We start by defining the scope of the clash detection process with your team. This includes identifying the specific MEP systems to be tested, setting clearance tolerances, and establishing the reporting frequency.' },
          { id: 'clash-detection-p-2', title: 'Execute & Analyze', text: 'We execute the defined clash detection tests on the latest models. Our specialists then carefully screen the results, removing false positives and analyzing the root cause of the identified conflicts.' },
          { id: 'clash-detection-p-3', title: 'Report & Communicate', text: 'We create concise, easy-to-understand issue lists and clash reports. These are distributed to the designated team members with clear documentation to support swift action and decision-making.' },
          { id: 'clash-detection-p-4', title: 'Verify & Close', text: 'After the design team has addressed the clashes, we receive updated models. We then perform a verification run to confirm the fixes have been implemented correctly and formally close out the issues.' }
        ],
        features: ["Targeted clash runs", "Reporting", "Mitigation plans"],
      },
      "mep-shop-drawings": {
        title: "MEP Shop Drawings",
        subtitle: "Fabrication-ready drawings",
        image: "https://i.postimg.cc/J4HmZFyX/MEPSERVICE.jpg",
        heroTitle: "MEP Shop Drawings",
        heroDescription: "Fabrication-ready MEP documentation. At Collective AEC, we transform coordinated models into precise shop drawings that guide manufacturing and installation with clarity and accuracy.",
        whyParagraph1: "Design-intent drawings lack the specific detail required for accurate MEP fabrication and on-site installation.",
        whyParagraph2: "At Collective AEC, we bridge the gap between design and construction by creating fabrication-ready shop drawings directly from the coordinated BIM model. Our detailed drawings include all necessary dimensions, annotations, and schedules to eliminate guesswork, reduce RFIs, and ensure systems are built and installed correctly the first time.",
        sectionDescription: "Precise shop drawings and fabrication packages for MEP systems that support fabrication and site assembly. Deliverables include detailed annotations, dimensioning and schedules to reduce RFIs during installation. Our shop drawings provide contractors and fabricators with the exact information needed for efficient manufacturing and installation, including connection details, hanger locations, and installation sequences.",
        description: "Precise shop drawings and fabrication packages for MEP systems that support fabrication and site assembly. Deliverables include detailed annotations, dimensioning and schedules to reduce RFIs during installation.",
        keyOfferings: [
          { id: 'mep-shop-drawings-ko-1', title: 'Detailed Fabrication Drawings', text: 'We produce fully dimensioned and annotated shop drawings for complex MEP components like ductwork, piping, and conduit racks, ready for direct use in manufacturing and pre-fabrication. Our drawings include specific cut lists, material specifications, and assembly instructions, ensuring that every piece is fabricated correctly to avoid on-site errors and rework.' },
          { id: 'mep-shop-drawings-ko-2', title: 'Hanger & Support Layouts', text: 'Our drawings include clear and detailed layouts for all hangers and supports, ensuring structural integrity and compliance with project specifications and local codes. This provides clear installation guides for site teams, confirming that all MEP systems are securely and correctly installed without conflicting with structural elements or other building trades.' },
          { id: 'mep-shop-drawings-ko-3', title: 'Spool & Assembly Drawings', text: 'For complex piping or modular systems, we create detailed spool and assembly drawings that break down systems into manageable, pre-fabricatable sections. These documents are designed to be used in an off-site workshop environment, enabling more efficient and controlled assembly, which in turn reduces on-site labor and accelerates the construction schedule.' },
          { id: 'mep-shop-drawings-ko-4', title: 'Bill of Materials & Schedules', text: 'Every shop drawing package is accompanied by precise part schedules and a comprehensive bill of materials (BOM), which are extracted directly from the intelligent model. This data supports accurate material procurement, minimizes waste, and helps project managers and fabricators with efficient inventory management and costing.' },
          { id: 'mep-shop-drawings-ko-5', title: 'Penetration & Sleeve Drawings', text: 'We generate specific drawings that detail the precise location, size, and elevation of all required wall and floor penetrations. This ensures accurate coordination with structural and architectural trades, preventing on-site conflicts and the need for costly and time-consuming modifications to structural elements like concrete slabs or load-bearing walls.' }
        ],
        process: [
          { id: 'mep-shop-drawings-p-1', title: 'Extract & Isolate', text: 'We begin by extracting the required MEP system geometry from the fully coordinated and signed-off BIM model. We isolate specific areas or systems to be detailed for the shop drawing package.' },
          { id: 'mep-shop-drawings-p-2', title: 'Detail & Annotate', text: 'Our drafters meticulously add all necessary fabrication details, including precise dimensions, annotations, section cuts, and equipment tags. We ensure all information complies with project standards and is clear for fabricators.' },
          { id: 'mep-shop-drawings-p-3', title: 'Internal & External Review', text: 'The draft shop drawings undergo a rigorous internal quality check. They are then submitted for review and approval by the project’s fabricators, engineers, and site teams to ensure full alignment before issuance.' },
          { id: 'mep-shop-drawings-p-4', title: 'Finalize & Deliver', text: 'After incorporating all review comments, we finalize the drawings and compile the complete fabrication package. The package, including drawings, schedules, and BOMs, is delivered in the required digital formats.' }
        ],
        features: ["Fabrication details", "Schedules", "Coordination"],
      },
      "mep-cad-drafting": {
        title: "MEP CAD Drafting",
        subtitle: "Traditional CAD documentation for MEP",
        image: "https://i.postimg.cc/J4HmZFyX/MEPSERVICE.jpg",
        heroTitle: "MEP CAD Drafting",
        heroDescription: "Traditional CAD precision for MEP systems. At Collective AEC, we deliver DWG-based documentation that maintains consistency with BIM workflows while meeting legacy requirements.",
        whyParagraph1: "While BIM is the future, many projects and teams still require traditional 2D CAD deliverables for contracts, permits, or field use.",
        whyParagraph2: "At Collective AEC, we seamlessly bridge this gap. We produce high-quality, DWG-based CAD deliverables directly from our coordinated BIM models. This ensures that your traditional drawing sets benefit from the accuracy of a BIM workflow, maintaining perfect consistency and avoiding discrepancies.",
        sectionDescription: "DWG-based CAD deliverables produced alongside BIM models for teams that require traditional drawing sets. We maintain consistency between CAD and model outputs to avoid discrepancies. Our CAD drafting services ensure proper layering, annotation standards, and documentation clarity for contractors, subcontractors, and teams working in traditional CAD environments while leveraging the benefits of coordinated BIM processes.",
        description: "DWG-based CAD deliverables produced alongside BIM models for teams that require traditional drawing sets. We maintain consistency between CAD and model outputs to avoid discrepancies.",
        keyOfferings: [
          { id: 'mep-cad-drafting-ko-1', title: 'BIM-Informed DWG Deliverables', text: 'We generate standard CAD deliverables that conform to your specific project or client specifications, with the added accuracy of being derived from a coordinated 3D model. This hybrid approach ensures that even traditional 2D drawings contain the precise geometry and coordination of a BIM project, reducing errors and ensuring consistency across all documentation.' },
          { id: 'mep-cad-drafting-ko-2', title: 'Standardized Layer Management', text: 'All our CAD drawings are produced with a structured and logical layer naming convention and standards (e.g., AIA, ISO). This makes them easy to navigate, manage, and use for all downstream teams and ensures that they integrate seamlessly into any existing CAD environment or drawing management system.' },
          { id: 'mep-cad-drafting-ko-3', title: 'Clear Annotation & Detailing', text: 'Our drafting includes clear and concise notes, dimensions, and callouts specifically tailored for on-site use. This attention to detail reduces ambiguity for contractors and installers, minimizes requests for information (RFIs), and helps ensure that the MEP systems are installed correctly according to the design intent.' },
          { id: 'mep-cad-drafting-ko-4', title: 'Seamless BIM Compatibility', text: 'We ensure that all 2D CAD outputs are perfectly aligned with the master BIM model. This maintains a single source of truth and prevents inconsistencies between 2D and 3D documentation, which is crucial for projects with mixed-technology workflows and for avoiding costly mistakes during construction.' },
          { id: 'mep-cad-drafting-ko-5', title: 'Multi-Format Export', text: 'We provide final deliverables in a range of formats to suit your needs, including native DWG for editing and high-quality PDF for easy distribution, printing, and archiving. Our flexible export capabilities ensure that you have the right file format for every stage of your project and every stakeholder.' }
        ],
        process: [
          { id: 'mep-cad-drafting-p-1', title: 'Prepare & Configure', text: 'We start by setting up CAD templates, title blocks, and layer standards according to your project requirements. This ensures consistency and compliance across the entire drawing set from the outset.' },
          { id: 'mep-cad-drafting-p-2', title: 'Draft from Model', text: 'Our team produces the required floor plans, sections, and details by extracting views directly from the coordinated BIM model. This ensures the geometric accuracy and alignment of all 2D drawings.' },
          { id: 'mep-cad-drafting-p-3', title: 'Annotate & Dimension', text: 'We meticulously add all necessary annotations, including notes, dimensions, equipment tags, and callouts. This crucial step transforms the base geometry into a readable and useful construction document.' },
          { id: 'mep-cad-drafting-p-4', title: 'Quality Check & Deliver', text: 'Every drawing undergoes a comprehensive quality assurance check for accuracy, completeness, and standards compliance. The final, approved DWG and PDF files are then packaged and delivered for handover.' }
        ],
        features: ["DWG deliverables", "Layered drawings", "Annotations"],
      },
      "hvac-design": {
        title: "HVAC Design",
        subtitle: "Efficient heating, ventilation, and air conditioning design",
        image: "https://i.postimg.cc/J4HmZFyX/MEPSERVICE.jpg",
        heroTitle: "HVAC Design",
        heroDescription: "Optimized climate control solutions. At Collective AEC, we design HVAC systems that balance occupant comfort, energy efficiency, and installation practicality for superior building performance.",
        whyParagraph1: "A well-designed HVAC system is essential for creating a comfortable, healthy, and energy-efficient building environment.",
        whyParagraph2: "At Collective AEC, our HVAC design services are rooted in a holistic approach. We combine rigorous engineering principles with advanced modeling tools to design systems that are not only high-performing and efficient but also fully constructible and seamlessly integrated with the overall building design.",
        sectionDescription: "HVAC design services focused on occupant comfort, energy efficiency and constructability. We perform load calculations, select equipment, and develop ductwork and airflow solutions that integrate with the overall building systems. Our comprehensive HVAC design approach considers thermal comfort, indoor air quality, energy conservation, and maintainability while ensuring seamless coordination with architectural and structural elements throughout all project phases.",
        description: "HVAC design services focused on occupant comfort, energy efficiency and constructability. We perform load calculations, select equipment, and develop ductwork and airflow solutions that integrate with the overall building systems.",
        keyOfferings: [
          { id: 'hvac-design-ko-1', title: 'Heating & Cooling Load Calculations', text: 'We perform detailed heating and cooling load calculations (e.g., using industry-standard software like HAP or Trace) to accurately size and select HVAC equipment. This rigorous process ensures optimal performance and efficiency for the building\'s specific needs without over-sizing, which saves on both initial equipment costs and long-term energy consumption.' },
          { id: 'hvac-design-ko-2', title: 'Optimized Ductwork & Piping Design', text: 'Our team designs and models optimized routing for all ductwork and piping systems. We focus on minimizing pressure drops, reducing friction, and maximizing airflow efficiency for balanced and effective climate control. Our designs are coordinated in a 3D environment to ensure seamless integration with the building structure and other MEP systems.' },
          { id: 'hvac-design-ko-3', title: 'Equipment Selection & Specification', text: 'We specify compliant, reliable, and energy-efficient HVAC equipment from reputable manufacturers based on the calculated loads and project requirements. Our specifications detail the necessary technical parameters, ensuring that the selected equipment meets all performance requirements and industry standards for safety, efficiency, and long-term durability.' },
          { id: 'hvac-design-ko-4', title: 'Control Strategy & Zoning', text: 'We develop a basic but effective control strategy and zoning plan that ensures the HVAC system can respond to varying loads and provide tailored comfort to different areas of the building. This includes defining thermostat locations, sensor types, and basic system logic to manage airflows and temperatures efficiently throughout the day.' },
          { id: 'hvac-design-ko-5', title: 'Construction & Commissioning Support', text: 'We provide support during the construction phase, responding to RFIs (Requests for Information) and reviewing equipment submittals to ensure they comply with the design intent. We also assist with handover checks and performance verification during commissioning to ensure the system operates as designed and meets all performance criteria for the client.' },
          { id: 'hvac-design-ko-6', title: 'Energy Modeling & Analysis', text: 'Leveraging our designs, we can perform comprehensive energy modeling to predict building energy consumption and compare different system options. This analysis helps ensure compliance with energy codes like ASHRAE 90.1 and provides a powerful tool for driving sustainable outcomes and long-term operational cost savings for the building owner.' }
        ],
        process: [
          { id: 'hvac-design-p-1', title: 'Assess & Calculate', text: 'We begin by assessing the building’s architectural plans and performance goals. We then perform detailed heating and cooling load calculations to understand the thermal requirements and constraints of the space.' },
          { id: 'hvac-design-p-2', title: 'System Design & Layout', text: 'Based on the calculations, our engineers develop the core HVAC systems and layout. This includes designing ductwork and piping routes, selecting primary equipment, and defining airflow solutions.' },
          { id: 'hvac-design-p-3', title: 'Model & Coordinate', text: 'We model the entire HVAC system in a 3D BIM environment. This model is then rigorously coordinated with architectural and structural elements to resolve clashes and ensure a fully integrated, constructible design.' },
          { id: 'hvac-design-p-4', title: 'Document & Handover', text: 'We produce a complete set of construction documents, including drawings, schedules, and specifications. We also provide support during the commissioning phase and prepare final documentation for handover.' }
        ],
        features: ["Load calculations", "Ductwork design", "Equipment selection"],
      },
    },
  },
  architectural: {
    title: "Architectural Design",
    image: "/ArchitectureBG.jpg",
    description: "Comprehensive architectural design services from concept to construction documentation, creating innovative spaces that balance aesthetics with functionality.",
    subs: {
      "architectural-design-services": {
        title: "Architectural Design Services",
        subtitle: "Concept to construction documentation",
        image: "https://i.postimg.cc/sfNsBz2Y/ARCHSERVICE.jpg",
        heroTitle: "Architectural Design Services",
        heroDescription: "Transforming visions into built reality. At Collective AEC, we deliver end-to-end architectural design that merges aesthetics with functionality, from initial concepts through construction documentation.",
        whyParagraph1: "Great architecture is born from a deep understanding of a client's vision, combined with the technical expertise to bring it to life.",
        whyParagraph2: "At Collective AEC, we guide our clients through a comprehensive design journey. Our end-to-end service balances creative exploration with rigorous functional planning and regulatory compliance, ensuring the final built reality is not only beautiful but also practical, sustainable, and aligned with your goals.",
        sectionDescription: "End-to-end architectural design delivered with emphasis on aesthetics, functional planning, and regulatory compliance. We iterate concept through documentation with stakeholder reviews to keep projects aligned with client goals. Our holistic design approach balances creative vision with practical buildability, ensuring spaces that inspire while meeting performance requirements, budget constraints, and regulatory standards throughout all project phases.",
        description: "End-to-end architectural design delivered with emphasis on aesthetics, functional planning, and regulatory compliance. We iterate concept through documentation with stakeholder reviews to keep projects aligned with client goals.",
        keyOfferings: [
          { id: 'architectural-design-services-ko-1', title: 'Conceptual & Schematic Design', text: 'We work closely with you to establish the project vision, exploring spatial strategies, massing studies, and initial concepts to define the core design direction. We use a combination of sketches, 3D models, and quick renders to test and refine ideas, ensuring the foundational design aligns perfectly with your aesthetic and functional aspirations before moving to the next phase.' },
          { id: 'architectural-design-services-ko-2', title: 'Design Development & Documentation', text: 'We refine the approved schematic concept into a detailed design, producing a comprehensive set of construction-ready drawings, specifications, and schedules. This documentation package clearly communicates the design intent, material selections, and technical requirements to the entire construction team, forming the basis for accurate bidding and efficient on-site execution.' },
          { id: 'architectural-design-services-ko-3', title: 'Permit & Regulatory Support', text: 'Our team has the expertise to navigate the complexities of local building codes, zoning ordinances, and the approvals process. We prepare and manage all necessary permit applications and documentation, ensuring a smooth path to construction by proactively addressing regulatory requirements and mitigating potential delays from authorities having jurisdiction.' },
          { id: 'architectural-design-services-ko-4', title: 'Stakeholder Engagement & Reviews', text: 'We facilitate structured design reviews and workshops at key project milestones. This collaborative process ensures clear communication, gathers valuable feedback from all stakeholders, and fosters decisive decision-making. By keeping everyone aligned, we minimize costly changes and maintain momentum throughout the project timeline.' },
          { id: 'architectural-design-services-ko-5', title: 'Construction Administration & Handover', text: 'We remain engaged during the construction phase to ensure design fidelity. Our role includes responding to Requests for Information (RFIs), reviewing submittals, and conducting site visits to ensure the project is built as designed. Upon completion, we prepare final documentation, including as-built records, for a seamless project handover to the owner or facility manager.' }
        ],
        process: [
          { id: 'architectural-design-services-p-1', title: 'Brief & Discovery', text: 'Our process begins with a thorough discovery phase where we gather all project requirements, constraints, and aspirations. This foundational understanding ensures our design is perfectly tailored to your needs.' },
          { id: 'architectural-design-services-p-2', title: 'Iterative Design', text: 'We move through the design stages—from broad concepts to developed design—in an iterative manner. Each stage involves stakeholder feedback loops to ensure the evolving design remains fully aligned with the project vision.' },
          { id: 'architectural-design-services-p-3', title: 'Detailed Documentation', text: 'Once the design is finalized, we produce a comprehensive set of construction documents. This includes detailed drawings, technical specifications, and schedules that form the contractual basis for construction.' },
          { id: 'architectural-design-services-p-4', title: 'Deliver & Support', text: 'We issue the final documentation for tender and construction, and we continue to provide support throughout the build phase. Our role includes responding to site queries and ensuring the design intent is realized.' }
        ],
        features: ["Concept design", "Construction documentation", "Permit coordination"],
      },
      "architectural-bim-services": {
        title: "Architectural BIM Services",
        subtitle: "Modeling and documentation for architecture",
        image: "https://i.postimg.cc/sfNsBz2Y/ARCHSERVICE.jpg",
        heroTitle: "Architectural BIM Services",
        heroDescription: "Intelligent architectural modeling excellence. At Collective AEC, we create detailed BIM models that drive coordination, documentation, and visualization for architectural projects of any scale.",
        whyParagraph1: "A successful architectural project in the digital age relies on an intelligent, data-rich model as its single source of truth.",
        whyParagraph2: "At Collective AEC, our architectural BIM services are designed to be the backbone of your project. We create detailed, accurate models that not only support the generation of comprehensive documentation but also serve as the central hub for interdisciplinary coordination, visualization, and data management.",
        sectionDescription: "Architectural BIM deliverables supporting detailed documentation, schedules and interdisciplinary coordination. Models are prepared for presentations, documentation sets, and to integrate with structural and MEP workflows. Our architectural BIM services encompass everything from conceptual massing through detailed construction documentation, ensuring accurate material schedules, room data, and coordinated integration with all building systems for seamless project delivery.",
        description: "Architectural BIM deliverables supporting detailed documentation, schedules and interdisciplinary coordination. Models are prepared for presentations, documentation sets, and to integrate with structural and MEP workflows.",
        keyOfferings: [
          { id: 'architectural-bim-services-ko-1', title: 'Parametric Architectural Modeling', text: 'We create detailed and coordinated architectural models from LOD 100 to LOD 400 using parametric modeling techniques. This ensures all building elements are parametrically defined for flexibility and data consistency. Changes made to one element automatically update related schedules and drawings, providing a dynamic and efficient design workflow.' },
          { id: 'architectural-bim-services-ko-2', title: 'Automated Schedules & Data', text: 'Our BIM models are data-rich, allowing for the automatic generation of accurate room data sheets, door and window schedules, and finish schedules. This information, which is linked directly to the model geometry, updates dynamically with design changes, eliminating the need for manual data entry and ensuring all documentation remains consistent and error-free throughout the project lifecycle.' },
          { id: 'architectural-bim-services-ko-3', title: 'Visualization & Presentation', text: 'We leverage the rich visual data within the BIM model to produce compelling presentation deliverables. This includes high-resolution renderings, animated fly-throughs, and immersive virtual reality experiences that allow clients to fully experience and understand the design, facilitating clear communication and confident decision-making.' },
          { id: 'architectural-bim-services-ko-4', title: 'BIM-Ready Documentation Sets', text: 'We generate complete and coordinated construction documentation sets directly from the intelligent BIM model. This ensures that all plans, sections, elevations, and details are consistent and accurate. Our process reduces the time spent on manual drawing updates and ensures that all documentation is synchronized with the latest design changes.' },
          { id: 'architectural-bim-services-ko-5', title: 'Seamless Systems Integration', text: 'Our architectural models are built with a focus on seamless integration with structural and MEP models. We ensure they serve as the perfect base for multi-disciplinary coordination, enabling effective clash detection and spatial analysis to resolve potential conflicts before they ever reach the construction site, which saves both time and money.' }
        ],
        process: [
          { id: 'architectural-bim-services-p-1', title: 'Model & Develop', text: 'We create and develop the core architectural model assets based on the design intent. This includes modeling all walls, floors, roofs, doors, windows, and other key architectural components with precision.' },
          { id: 'architectural-bim-services-p-2', title: 'Coordinate & Integrate', text: 'We ensure multi-discipline compatibility by regularly coordinating our architectural model with the structural and MEP engineering teams. This proactive approach resolves spatial conflicts early in the process.' },
          { id: 'architectural-bim-services-p-3', title: 'Document & Schedule', text: 'From the coordinated model, we prepare all necessary outputs for delivery. This includes generating drawing sheets, creating detailed schedules, and exporting data for various project stakeholders.' },
          { id: 'architectural-bim-services-p-4', title: 'Review & Handover', text: 'The complete architectural model and documentation package undergoes a final quality review. We then deliver the final assets in the required formats for construction, permitting, and project archiving.' }
        ],
        features: ["Architectural modeling", "Schedules", "Presentation deliverables"],
      },
      "architectural-cad-drafting": {
        title: "Architectural CAD Drafting",
        subtitle: "2D CAD for architectural workflows",
        image: "https://i.postimg.cc/sfNsBz2Y/ARCHSERVICE.jpg",
        heroTitle: "Architectural CAD Drafting",
        heroDescription: "Precision 2D documentation for architectural projects. At Collective AEC, we produce clear, detailed CAD drawings with proper layering and annotation standards for contractors and consultants.",
        whyParagraph1: "Even in a BIM-centric world, clear, high-quality 2D CAD drawings remain an essential deliverable for many project stakeholders.",
        whyParagraph2: "At Collective AEC, we provide expert architectural CAD drafting services that prioritize clarity, accuracy, and adherence to industry standards. Our drawings, produced with clear layering and precise annotations, serve as reliable and easy-to-use documents for contractors, consultants, and regulatory bodies.",
        sectionDescription: "CAD-driven documentation for teams needing DWG deliverables, produced with clear layering and annotation standards for downstream use by contractors and consultants. Our architectural CAD drafting services maintain industry-standard conventions while ensuring accuracy and clarity in floor plans, elevations, sections, and details that support efficient construction and coordination across all project stakeholders.",
        description: "CAD-driven documentation for teams needing DWG deliverables, produced with clear layering and annotation standards for downstream use by contractors and consultants.",
        keyOfferings: [
          { id: 'architectural-cad-drafting-ko-1', title: 'Layer-Structured CAD Plans', text: 'We produce meticulously organized architectural drawings, including floor plans, elevations, and site plans, using a logical layer structure (e.g., AIA Cad Standards or your own). This ensures that the drawings are easy to navigate and manage, and that different elements like walls, doors, and furniture can be easily isolated or turned off by downstream users.' },
          { id: 'architectural-cad-drafting-ko-2', title: 'Construction Detailing', text: 'Our service includes the drafting of detailed sections and construction details that clearly communicate complex assemblies and material interfaces for accurate on-site execution. These drawings provide the specific, close-up information that is critical for builders to understand how a building is to be constructed, reducing ambiguity and preventing costly field errors.' },
          { id: 'architectural-cad-drafting-ko-3', title: 'Precise Annotations & Callouts', text: 'We ensure all drawings are populated with clear, concise, and accurate annotations, dimensions, and callouts. This attention to detail transforms the base geometry into a readable and useful construction document, providing site teams with the exact information they need to build correctly and minimizing requests for information (RFIs).' },
          { id: 'architectural-cad-drafting-ko-4', title: 'Multi-Format Output', text: 'We deliver final drawing sets in both native DWG format for use by other consultants and high-quality PDF format for printing, distribution, and official submissions. This flexibility ensures that the deliverables are compatible with all project workflows, from design coordination to on-site use.' },
          { id: 'architectural-cad-drafting-ko-5', title: 'Adherence to CAD Standards', text: 'We strictly adhere to established layering, naming, and plotting conventions, whether they are your in-house standards or recognized industry standards. This ensures consistency across all deliverables, promoting a professional and organized workflow that is easy for any team member to follow.' },
          { id: 'architectural-cad-drafting-ko-6', title: 'Redline Markups & As-Builts', text: 'We can efficiently incorporate redline markups from design reviews into the drawing set, ensuring that the latest design changes are accurately documented. We also provide a service to convert field markups into formal as-built drawings for project closeout and facility management.' }
        ],
        process: [
          { id: 'architectural-cad-drafting-p-1', title: 'Set Up & Standardize', text: 'We begin each project by preparing the necessary CAD templates, title blocks, and layer systems. This critical first step ensures that all subsequent drafting work is consistent and conforms to the required standards.' },
          { id: 'architectural-cad-drafting-p-2', title: 'Draft to Specification', text: 'Our skilled drafters produce the architectural drawings precisely to your specifications, using your design sketches or models as a base. We focus on accuracy and clean linework throughout this process.' },
          { id: 'architectural-cad-drafting-p-3', title: 'Quality Assurance Check', text: 'Every drawing undergoes a rigorous quality assurance review. This includes checks for completeness, accuracy of dimensions, and adherence to the established CAD standards before they are issued.' },
          { id: 'architectural-cad-drafting-p-4', title: 'Issue & Deliver', text: 'Once approved, we issue the final drawing set. We export the deliverables into the required DWG and PDF formats, ensuring they are correctly configured for plotting and digital use.' }
        ],
        features: ["CAD plans", "Detailing", "Annotations"],
      },
      "construction-drawings": {
        title: "Construction Drawings",
        subtitle: "Detailed plans for construction",
        image: "https://i.postimg.cc/sfNsBz2Y/ARCHSERVICE.jpg",
        heroTitle: "Construction Drawings",
        heroDescription: "Construction-ready documentation excellence. At Collective AEC, we prepare comprehensive drawing sets with clear callouts and schedules that guide efficient on-site execution and minimize RFIs.",
        whyParagraph1: "The quality and clarity of your construction drawings directly impact the efficiency, cost, and final outcome of your project.",
        whyParagraph2: "At Collective AEC, we specialize in producing comprehensive and fully coordinated construction drawing sets. Our meticulous approach ensures that every plan, detail, and schedule is clear, accurate, and provides the unambiguous instructions needed to guide on-site teams, reduce queries, and deliver the project as designed.",
        sectionDescription: "Construction drawings prepared for procurement, approvals and on-site teams with clear callouts, schedules and detailing to support efficient delivery and reduce queries during construction. Our construction documentation includes complete drawing sets with coordinated plans, elevations, sections, and details that provide contractors with all information needed for accurate bidding, permitting, and field construction activities.",
        description: "Construction drawings prepared for procurement, approvals and on-site teams with clear callouts, schedules and detailing to support efficient delivery and reduce queries during construction.",
        keyOfferings: [
          { id: 'construction-drawings-ko-1', title: 'Complete Coordinated Drawing Sets', text: 'We deliver full sets of construction drawings, including all plans, elevations, sections, and details. Our process ensures these documents are fully coordinated across all architectural, structural, and MEP disciplines, providing a single, reliable source of information for all trades on site and preventing conflicts from outdated or inconsistent drawings.' },
          { id: 'construction-drawings-ko-2', title: 'Integrated Schedules', text: 'Our drawing sets include comprehensive and integrated schedules for rooms, finishes, doors, and windows. These schedules are generated directly from the intelligent model to ensure accuracy and consistency. This automated approach eliminates the risk of human error and ensures that all data in the schedules is perfectly synchronized with the drawings.' },
          { id: 'construction-drawings-ko-3', title: 'Detailed Construction Assemblies', text: 'We provide detailed drawings for critical construction assemblies and complex junctions. These documents clearly illustrate how different materials and components are intended to come together on site, providing essential information that is often missing from standard drawing sets and reducing the need for costly field interpretations and RFIs.' },
          { id: 'construction-drawings-ko-4', title: 'Consultant Coordination', text: 'Our process includes rigorous and proactive coordination with all project consultants, including structural engineers, MEP designers, and other specialists. We ensure that their information is accurately reflected in the final drawing set and that all systems are coordinated to avoid spatial conflicts and ensure a buildable design.' },
          { id: 'construction-drawings-ko-5', title: 'As-Built Documentation', text: 'Upon project completion, we can update the construction drawings to reflect any on-site changes, preparing a final set of as-built records for the client’s facility management and archival needs. This provides a precise and accurate record of the final building, which is invaluable for future maintenance, renovations, and asset management.' }
        ],
        process: [
          { id: 'construction-drawings-p-1', title: 'Develop & Detail', text: 'Starting with the approved design, we develop and produce a fully detailed and coordinated set of construction drawings. This phase focuses on translating design intent into buildable, unambiguous instructions.' },
          { id: 'construction-drawings-p-2', title: 'Review & Approve', text: 'The draft construction set undergoes a series of reviews with all key stakeholders, including the client, engineers, and lead contractors. This collaborative process ensures full alignment and incorporates valuable feedback before issuance.' },
          { id: 'construction-drawings-p-3', title: 'Issue for Tender & Construction', text: 'Once all reviews are complete and approvals are secured, we formally issue the construction drawings. The set is packaged for use in the tendering process and for the construction teams on site.' },
          { id: 'construction-drawings-p-4', title: 'Provide On-Site Support', text: 'We remain available throughout the construction phase to provide support. Our team responds to site queries and provides clarifications as needed to ensure the project is built according to the drawings.' }
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
        whyParagraph1: "The accuracy of structural steel detailing is paramount for the efficiency of fabrication and the safety of on-site erection.",
        whyParagraph2: "At Collective AEC, we transform structural designs into flawless fabrication instructions. Our detailed, shop-ready drawings, connection designs, and clear assembly sequences provide steel fabricators with the precise information they need to manufacture and erect structures safely, on time, and without costly errors.",
        sectionDescription: "Shop-ready steel detailing including member fabrication details and connection design for efficient fabrication and erection. We provide assembly sequences and schedules to streamline site work. Our comprehensive steel detailing services include anchor bolt plans, erection drawings, and material lists that enable fabricators and contractors to execute structural steel installations with precision, efficiency, and safety throughout all construction phases.",
        description: "Shop-ready steel detailing including member fabrication details and connection design for efficient fabrication and erection. We provide assembly sequences and schedules to streamline site work.",
        keyOfferings: [
          { id: 'structural-steel-detailing-ko-1', title: 'Fabrication Shop Drawings', text: 'We produce highly detailed and accurate shop drawings for every steel member, including all dimensions, cuts, and welds. Our drawings are prepared using industry-standard software like Tekla Structures to ensure they are ready for direct use by fabricators, which streamlines the manufacturing process and minimizes the risk of on-site errors.' },
          { id: 'structural-steel-detailing-ko-2', title: 'Connection Design & Detailing', text: 'Our service includes the design and documentation of all steel connections, ensuring they meet engineering requirements for load-bearing capacity, constructability, and code compliance. We provide clear drawings and notes for all connection types, from simple shear connections to complex moment and truss connections, guaranteeing the structural integrity of the final build.' },
          { id: 'structural-steel-detailing-ko-3', title: 'Comprehensive Schedules & Lists', text: 'We generate precise part schedules, bolt lists, and a full bill of materials (BOM) directly from the detailed model. This data is essential for accurate material procurement and efficient inventory management, reducing waste and ensuring that the right materials are available when they are needed for fabrication and erection.' },
          { id: 'structural-steel-detailing-ko-4', title: 'Clear Assembly & Erection Drawings', text: 'We create clear, sequential erection drawings with corresponding notes and piece marks. These drawings serve as the primary guide for the on-site teams, ensuring a safe, logical, and efficient assembly process that minimizes confusion and accelerates the overall construction schedule.' },
          { id: 'structural-steel-detailing-ko-5', title: 'Rigorous Quality Control', text: 'Every drawing and schedule undergoes a rigorous internal quality control and verification process. Our team checks for dimensional accuracy, adherence to project specifications, and coordination with other disciplines to ensure that all deliverables are accurate and clash-free before they are issued for production.' },
          { id: 'structural-steel-detailing-ko-6', title: 'CNC Data & Reporting', text: 'We can provide CNC-compatible data files (e.g., DSTV) directly from our models, enabling automated fabrication and reducing manual input errors for manufacturers. We also generate comprehensive reports, including bolt summaries and material lists, to support efficient planning and procurement.' }
        ],
        process: [
          { id: 'structural-steel-detailing-p-1', title: 'Detail & Model', text: 'Using the structural design drawings as a base, we produce highly detailed, fabrication-ready 3D models and the corresponding shop drawings for every steel component and connection.' },
          { id: 'structural-steel-detailing-p-2', title: 'Review & Coordinate', text: 'Our detailed drawings and models are rigorously checked against architectural and MEP models for coordination. They are also reviewed by fabricators and clients to ensure full alignment with project requirements.' },
          { id: 'structural-steel-detailing-p-3', title: 'Issue Production Packages', text: 'Once all reviews are complete and approvals are received, we issue the final production packages. This includes all shop drawings, erection plans, CNC data, and material lists needed for fabrication.' },
          { id: 'structural-steel-detailing-p-4', title: 'Provide Erection Support', text: 'We remain available to provide technical support to the site teams during the erection phase. Our team is on hand to answer any queries and provide clarifications to ensure a smooth installation.' }
        ],
        features: ["Shop drawings", "Connection details", "Steel schedules"],
      },
      "rebar-detailing-services": {
        title: "Rebar Detailing Services",
        subtitle: "Reinforcement detailing for concrete structures",
        image: "https://i.postimg.cc/ryPMdTpR/STRUCTURESERVICE.jpg",
        heroTitle: "Rebar Detailing Services",
        heroDescription: "Precision reinforcement documentation. At Collective AEC, we create accurate rebar drawings and bar bending schedules that optimize concrete construction and eliminate placement errors.",
        whyParagraph1: "Incorrect rebar placement can compromise structural integrity and lead to significant on-site delays and material waste.",
        whyParagraph2: "At Collective AEC, we specialize in creating precise and easy-to-understand rebar detailing. Our accurate placement drawings and optimized bar bending schedules reduce errors, streamline on-site workflows, and ensure that your concrete structures are reinforced exactly as the engineer intended.",
        sectionDescription: "Accurate rebar drawings and bar bending schedules to support concrete construction and procurement. Our outputs reduce errors in reinforcement placement and speed up onsite workflows. Our rebar detailing services include detailed placement drawings, lap and splice locations, and comprehensive schedules that ensure proper reinforcement installation, structural integrity, and efficient material procurement for concrete construction projects of all complexities.",
        description: "Accurate rebar drawings and bar bending schedules to support concrete construction and procurement. Our outputs reduce errors in reinforcement placement and speed up onsite workflows.",
        keyOfferings: [
          { id: 'rebar-detailing-services-ko-1', title: 'Optimized Bar Bending Schedules (BBS)', text: 'We produce precise and optimized bar bending schedules and cutting lists that are ready for fabrication. This detailed data minimizes material waste and provides clear, unambiguous instructions for the rebar fabrication shop, which reduces human error and accelerates the production process.' },
          { id: 'rebar-detailing-services-ko-2', title: 'Clear Rebar Placement Drawings', text: 'Our service includes the creation of clear, tagged placement drawings that show the exact location, spacing, and layering of all reinforcement. These drawings make on-site installation straightforward for contractors, reducing confusion and ensuring that the rebar is placed precisely as the structural engineer intended to maintain the integrity of the concrete element.' },
          { id: 'rebar-detailing-services-ko-3', title: '3D Rebar Modeling & Coordination', text: 'We model all rebar in a 3D environment to integrate with the main structural and architectural models. This allows us to identify and resolve potential conflicts with formwork, embedded items (e.g., pipes, electrical conduits), or other reinforcement before construction begins, preventing costly on-site clashes and ensuring a smooth workflow.' },
          { id: 'rebar-detailing-services-ko-4', title: 'Quality & Standards Compliance', text: 'Our detailing process includes rigorous checks and verifications to ensure full compliance with all relevant industry standards (e.g., ACI, CRSI, Eurocode) and the specific engineering specifications for the project. This adherence to standards guarantees the quality and safety of the final concrete structure.' },
          { id: 'rebar-detailing-services-ko-5', title: 'As-Built Reinforcement Records', text: 'Upon project completion, we can update the rebar models and drawings to reflect any on-site changes or field modifications. This provides a precise and accurate final set of as-built records for the structure’s reinforcement, which is invaluable for future inspections, renovations, or structural assessments.' }
        ],
        process: [
          { id: 'rebar-detailing-services-p-1', title: 'Extract & Analyze', text: 'We begin by extracting the necessary reinforcement geometry and specifications from the structural design models and drawings. We analyze the requirements to plan the most efficient detailing strategy.' },
          { id: 'rebar-detailing-services-p-2', title: 'Detail & Schedule', text: 'Our team creates the detailed rebar placement drawings and generates the corresponding bar bending schedules. We focus on optimizing bar lengths and minimizing congestion to ensure constructability.' },
          { id: 'rebar-detailing-services-p-3', title: 'Review & Coordinate', text: 'The draft detailing package is reviewed internally for quality and coordinated with the formwork design and site teams. This ensures that our plans are practical and fully aligned with the construction sequence.' },
          { id: 'rebar-detailing-services-p-4', title: 'Deliver for Site & Fab', text: 'Once approved, we provide the final, detailed schedules and drawings to the rebar fabricator and the on-site team. These deliverables are formatted for immediate use in production and installation.' }
        ],
        features: ["Bar bending schedules", "Detailing", "Coordination"],
      },
      "structural-cad-drafting": {
        title: "Structural CAD Drafting",
        subtitle: "CAD documentation for structural engineering",
        image: "https://i.postimg.cc/ryPMdTpR/STRUCTURESERVICE.jpg",
        heroTitle: "Structural CAD Drafting",
        heroDescription: "Detailed structural documentation. At Collective AEC, we produce DWG and CAD deliverables with precise notation and markups that support structural analysis and shop fabrication.",
        whyParagraph1: "Clear and accurate structural drawings are the essential language used to communicate engineering intent to fabricators and builders.",
        whyParagraph2: "At Collective AEC, we provide expert structural CAD drafting services tailored for engineers and fabricators. Our detailed DWG deliverables, complete with precise notation and clear markups, effectively support structural analysis, fabrication planning, and efficient on-site construction.",
        sectionDescription: "DWG and CAD documentation tailored for structural engineers and fabricators, with detailed notation and markups to support analysis and shop fabrication. Our structural CAD drafting services deliver clear foundation plans, framing layouts, and connection details that enable efficient structural design coordination, fabrication planning, and construction execution while maintaining industry-standard conventions and documentation clarity.",
        description: "DWG and CAD documentation tailored for structural engineers and fabricators, with detailed notation and markups to support analysis and shop fabrication.",
        keyOfferings: [
          { id: 'structural-cad-drafting-ko-1', title: 'Production of DWG-Based Drawings', text: 'We specialize in the production of high-quality, DWG-based structural drawings, including foundation plans, framing plans, and elevation views, all adhering to your specified standards. Our drawings are meticulously drafted to ensure precision and clarity, providing a reliable foundation for analysis and construction.' },
          { id: 'structural-cad-drafting-ko-2', title: 'Detailed Annotations & Markups', text: 'Our drawings are enriched with detailed notes, section cuts, and clear callouts. This provides fabricators and site teams with the specific information they need for accurate work, reducing the risk of misinterpretation and minimizing the need for RFIs during the construction phase.' },
          { id: 'structural-cad-drafting-ko-3', title: 'Foundation & Framing Layouts', text: 'We create clear and easy-to-read foundation plans and framing layouts that serve as the primary guide for the on-site construction of the building’s structural system. These drawings are essential for coordinating with other trades and for ensuring the safe and efficient installation of all structural elements.' },
          { id: 'structural-cad-drafting-ko-4', title: 'Multi-Format Exports', text: 'We provide final outputs in both DWG format for use by engineering and fabrication teams, and in high-quality PDF format for easy distribution, printing, and official record-keeping. This flexibility ensures that the deliverables are compatible with all project workflows and can be easily shared with all stakeholders.' },
          { id: 'structural-cad-drafting-ko-5', title: 'Adherence to Drawing Conventions', text: 'Our team consistently maintains established drawing conventions for layering, text styles, and dimensioning, whether they are your in-house standards or recognized industry standards (e.g., AISC, CISC). This ensures clarity, professionalism, and consistency across the entire drawing set, which is critical for complex structural projects.' }
        ],
        process: [
          { id: 'structural-cad-drafting-p-1', title: 'Set Up Templates & Layers', text: 'We begin every project by preparing and configuring the appropriate CAD templates, title blocks, and layer standards. This foundational step ensures consistency and compliance from the very beginning.' },
          { id: 'structural-cad-drafting-p-2', title: 'Draft Structural Drawings', text: 'Working from the engineer’s designs and specifications, our skilled drafters produce the core structural drawings. We focus on achieving a high level of accuracy and clarity in all linework and layouts.' },
          { id: 'structural-cad-drafting-p-3', title: 'Conduct Quality & Dimension Checks', text: 'Every drawing undergoes a meticulous quality assurance and dimension check. This process verifies the accuracy of all information and ensures the drawings are complete and ready for issuance.' },
          { id: 'structural-cad-drafting-p-4', title: 'Export & Handover Drawings', text: 'Once the drawings pass our quality control, they are exported into the required formats. We then perform a formal handover of the complete and approved drawing package to the client.' }
        ],
        features: ["CAD drawings", "Details", "Markups"],
      },
      "steel-shop-drawings": {
        title: "Steel Shop Drawings",
        subtitle: "Fabrication-ready steel documentation",
        image: "https://i.postimg.cc/ryPMdTpR/STRUCTURESERVICE.jpg",
        heroTitle: "Steel Shop Drawings",
        heroDescription: "Complete fabrication packages for steel construction. At Collective AEC, we provide detailed shop drawings with assembly information and part lists that accelerate manufacturing and site installation.",
        whyParagraph1: "The transition from structural design to fabrication requires a specialized level of detail that standard engineering drawings do not provide.",
        whyParagraph2: "At Collective AEC, we create comprehensive, fabrication-ready steel shop drawing packages. Our clear assembly drawings, detailed part lists, and precise dimensions provide fabricators with everything they need to manufacture and install structural steel efficiently, accurately, and safely.",
        sectionDescription: "Fabrication-ready steel shop drawings with clear assembly information, part lists and dimensions to aid fabricators and contractors during manufacturing and site installation. Our steel shop drawing services include piece marks, connection details, weld specifications, and bolt schedules that provide fabricators with complete information for efficient production while ensuring quality control and seamless coordination with field erection activities.",
        description: "Fabrication-ready steel shop drawings with clear assembly information, part lists and dimensions to aid fabricators and contractors during manufacturing and site installation.",
        keyOfferings: [
          { id: 'steel-shop-drawings-ko-1', title: 'Complete Fabrication Packages', text: 'We deliver complete and self-contained packages for shop production. This includes all assembly drawings, single-part drawings, and necessary lists for a seamless workflow. Our packages are organized to aid fabricators in efficient production and to ensure all components are accounted for, from the largest beams to the smallest plates.' },
          { id: 'steel-shop-drawings-ko-2', title: 'Detailed Assembly & Part Drawings', text: 'Our service includes meticulously detailed assembly and single-part drawings. Every component is clearly marked with piece marks and dimensioned to guide the fabrication process. This level of detail reduces fabrication errors and ensures that all parts are manufactured to the correct specifications, ready for assembly on site.' },
          { id: 'steel-shop-drawings-ko-3', title: 'Bill of Materials & Part Lists', text: 'We generate an accurate and comprehensive bill of materials (BOM) and detailed part schedules. This data is essential for efficient material procurement and inventory management, helping to control costs and prevent material shortages during fabrication and erection.' },
          { id: 'steel-shop-drawings-ko-4', title: 'Weld & Bolt Specifications', text: 'Our drawings include precise connection specifications, such as details on weld types and lengths, as well as comprehensive bolt schedules. This information ensures that the structural integrity of the connections is maintained and that they comply with all engineering requirements and industry codes, which is critical for safety.' },
          { id: 'steel-shop-drawings-ko-5', title: 'Clear Erection Guidance & Notes', text: 'We provide clear on-site erection guidance through sequential drawings and specific notes. This helps to ensure a safe, logical, and efficient installation process for the site team, preventing confusion and minimizing the time required for assembly on site.' }
        ],
        process: [
          { id: 'steel-shop-drawings-p-1', title: 'Compile Inputs & Model', text: 'We gather all necessary model and fabrication inputs from the engineering and design teams. We then create a highly detailed 3D model of the steel structure, which forms the basis for all drawings.' },
          { id: 'steel-shop-drawings-p-2', title: 'Detail Drawings & Lists', text: 'From the detailed model, we produce the complete set of shop drawings and all associated lists and schedules. This phase is focused on translating the 3D information into clear 2D fabrication instructions.' },
          { id: 'steel-shop-drawings-p-3', title: 'Conduct Fabricator Reviews', text: 'The draft shop drawing package is submitted for rigorous review by the fabricators and engineers. We incorporate all revisions to ensure the final package is 100% accurate and buildable.' },
          { id: 'steel-shop-drawings-p-4', title: 'Handover Production Files', text: 'Once approved, we perform a formal handover of all production files. This includes the final drawings in PDF and DWG, as well as CNC data files and any relevant notes for the fabrication team.' }
        ],
        features: ["Fabrication details", "Assembly drawings", "Schedules"],
      },
      "structural-bim-services": {
        title: "Structural BIM Services",
        subtitle: "Modeling and analysis for structural systems",
        image: "https://i.postimg.cc/ryPMdTpR/STRUCTURESERVICE.jpg",
        heroTitle: "Structural BIM Services",
        heroDescription: "Intelligent structural modeling and coordination. At Collective AEC, we create analysis-ready BIM models that integrate seamlessly with design workflows and support multi-disciplinary coordination.",
        whyParagraph1: "An intelligent structural model is the foundation not just of the building, but of an integrated and efficient digital design process.",
        whyParagraph2: "At Collective AEC, we create robust, analysis-ready structural BIM models that serve multiple critical functions. They are built for seamless integration with architectural and MEP workflows, provide a solid basis for structural analysis, and contain the rich detail needed for downstream fabrication and construction.",
        sectionDescription: "Structural BIM models prepared for analysis, detailing and multi-disciplinary coordination. Models are exchanged in formats compatible with analysis tools and construction workflows. Our structural BIM services encompass parametric modeling, load case preparation, and coordinated integration with architectural and MEP systems, ensuring accurate structural documentation and efficient coordination throughout design development and construction documentation phases.",
        description: "Structural BIM models prepared for analysis, detailing and multi-disciplinary coordination. Models are exchanged in formats compatible with analysis tools and construction workflows.",
        keyOfferings: [
          { id: 'structural-bim-services-ko-1', title: 'Analysis-Ready Structural Models', text: 'We create precise structural models with clean analytical lines and a logical hierarchy, ensuring they are ready for direct use in structural analysis software like ETABS, SAP2000, or Robot Structural Analysis. This seamless integration saves time and minimizes data loss, providing a solid foundation for accurate engineering calculations.' },
          { id: 'structural-bim-services-ko-2', title: 'Fabrication & Reinforcement Detailing', text: 'Our BIM models can be developed to a high level of detail (LOD 400), incorporating all necessary connection details for steel and precise reinforcement details for concrete structures. This rich detail serves as the basis for generating shop drawings and fabrication data, streamlining the transition from design to construction.' },
          { id: 'structural-bim-services-ko-3', title: 'Multi-Disciplinary Coordination', text: 'We ensure our structural models integrate perfectly with architectural and MEP models. This proactive approach enables effective clash detection and resolves potential spatial conflicts with ductwork, piping, or architectural features before they reach the construction site, saving time and preventing costly rework.' },
          { id: 'structural-bim-services-ko-4', title: 'Material & Element Schedules', text: 'The data-rich nature of our models allows us to provide accurate material schedules and structural element schedules, which are vital for quantity takeoff, cost estimation, and procurement. This automated process ensures consistency and accuracy, reducing manual errors and providing a reliable basis for bidding and budgeting.' },
          { id: 'structural-bim-services-ko-5', title: 'Construction Documentation Handover', text: 'From the coordinated structural model, we can deliver final construction documents and the native model files, ensuring a complete and accurate handover to the construction and fabrication teams. This final package provides all the information needed for a smooth and efficient build, and serves as a valuable record for future asset management.' }
        ],
        process: [
          { id: 'structural-bim-services-p-1', title: 'Model Structural Assets', text: 'Based on the engineer’s design, we produce all the necessary structural model assets. This includes framing, foundations, columns, and beams, all modeled with precision and embedded data.' },
          { id: 'structural-bim-services-p-2', title: 'Prepare for Analysis', text: 'We prepare and export the model into analysis-compatible datasets and formats. We ensure the analytical model is clean and correctly represents the structural system for accurate engineering calculations.' },
          { id: 'structural-bim-services-p-3', title: 'Add Fabrication Details', text: 'We enhance the model by adding a higher level of detail, including fabrication information for steel connections and precise reinforcement details for concrete elements as required by the project.' },
          { id: 'structural-bim-services-p-4', title: 'Coordinate & Deliver', text: 'The detailed structural model is coordinated with other disciplines. Once fully coordinated and approved, we provide the final models and all associated documentation as the final deliverable.' }
        ],
        features: ["Analysis-ready models", "Detailing", "Coordination"],
      },
      "connection-design": {
        title: "Connection Design",
        subtitle: "Detailed connection engineering",
        image: "https://i.postimg.cc/ryPMdTpR/STRUCTURESERVICE.jpg",
        heroTitle: "Connection Design",
        heroDescription: "Engineered connection solutions for structural steel. At Collective AEC, we deliver detailed connection designs with calculations, drawings, and fabrication notes that ensure structural integrity and buildability.",
        whyParagraph1: "The integrity of a steel structure is only as strong as its connections; their design requires specialized engineering expertise.",
        whyParagraph2: "At Collective AEC, we provide expert connection design services that deliver safe, efficient, and constructible solutions. Supported by rigorous structural calculations and detailed fabrication drawings, our designs ensure that every connection in your steel or composite structure performs exactly as intended.",
        sectionDescription: "Connection design services delivering engineered solutions for steel and composite structures, supported by calculations, drawings and fabrication notes. Our comprehensive connection design approach includes moment connections, braced frame connections, and simple shear connections with complete engineering documentation, load verification, and fabrication details that ensure safe, efficient, and code-compliant structural systems for projects of all scales and complexities.",
        description: "Connection design services delivering engineered solutions for steel and composite structures, supported by calculations, drawings and fabrication notes.",
        keyOfferings: [
          { id: 'connection-design-ko-1', title: 'Structural Calculations & Verification', text: 'Our service is underpinned by thorough structural calculations and verification for every connection type. We ensure full compliance with load requirements and engineering codes (e.g., AISC, Eurocode), providing a detailed report that validates the safety and performance of each connection.' },
          { id: 'connection-design-ko-2', title: 'Detailed Connection Drawings', text: 'We produce clear and detailed connection drawings that illustrate the precise assembly of plates, bolts, and welds. These drawings provide unambiguous instructions for fabricators and erectors, reducing confusion on the shop floor and ensuring the connections are built and installed correctly the first time.' },
          { id: 'connection-design-ko-3', title: 'Specific Fabrication Notes', text: 'Our deliverables include specific fabrication notes and required tolerances for manufacturing. This ensures that the connections are fabricated to the quality and precision required by the design, which is essential for both structural performance and efficient on-site erection.' },
          { id: 'connection-design-ko-4', title: 'Wide Range of Connection Types', text: 'We have expertise in designing a wide range of connection types, including simple shear connections, moment connections, and complex braced frame connections, tailored to the project’s needs. Our team is equipped to handle complex and unique connection challenges, providing custom-engineered solutions for any structural system.' },
          { id: 'connection-design-ko-5', title: 'Complete Documentation Handover', text: 'We provide a final, comprehensive documentation package that includes all drawings, calculations, and notes. This package serves as a formal record of the engineered connection designs, which is invaluable for project archives, regulatory review, and future maintenance.' }
        ],
        process: [
          { id: 'connection-design-p-1', title: 'Assess Loads & Conditions', text: 'We begin by thoroughly assessing the structural loads, member sizes, and interface conditions for each connection point. This analysis forms the basis for our engineering design.' },
          { id: 'connection-design-p-2', title: 'Design & Calculate', text: 'Our engineers create the detailed connection designs and perform the necessary structural calculations to verify their performance. We focus on solutions that are both safe and economical to fabricate.' },
          { id: 'connection-design-p-3', title: 'Review & Coordinate', text: 'The proposed connection designs are closely coordinated with the structural engineer of record and the fabrication teams. This review process ensures the designs are practical and integrate seamlessly with the overall structure.' },
          { id: 'connection-design-p-4', title: 'Document & Issue', text: 'Once the designs are approved, we formally issue the complete set of connection drawings and supporting calculations. This package provides the official instructions for the fabrication and erection teams.' }
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
        whyParagraph1: "Compelling visualizations are built upon a foundation of high-quality, meticulously crafted 3D models.",
        whyParagraph2: "At Collective AEC, our 3D modeling service focuses on creating assets that are not only visually accurate but also technically optimized. We tailor our models for use in photorealistic renders, real-time AR/VR applications, and other visualization pipelines, ensuring they bring your designs to life with both beauty and performance.",
        sectionDescription: "High-quality 3D modeling services tailored for photoreal renders, AR/VR and visualization pipelines. Models are optimised for materials, lighting and scene composition to support compelling presentations. Our 3D modeling expertise spans architectural elements, furniture, fixtures, landscape features, and environmental context, delivering assets with proper UV mapping, material application, and geometric optimization for diverse visualization and simulation applications.",
        description: "High-quality 3D modeling services tailored for photoreal renders, AR/VR and visualization pipelines. Models are optimised for materials, lighting and scene composition to support compelling presentations.",
        keyOfferings: [
          { id: '3d-modeling-ko-1', title: 'Custom 3D Asset Modeling', text: 'We create bespoke, high-quality 3D assets for your scenes, including custom furniture, architectural details, and environmental elements, all modeled to your exact specifications. Our artists pay close attention to detail, ensuring that every asset is geometrically accurate and ready for use in photorealistic renders and interactive applications.' },
          { id: '3d-modeling-ko-2', title: 'Scene Composition & Setup', text: 'Beyond individual models, we compose and set up complete 3D scenes. This includes arranging assets, setting up cameras, and preparing the environment for final rendering and animations. Our expertise in composition ensures that every scene is visually compelling and effectively communicates the design intent and spatial experience.' },
          { id: '3d-modeling-ko-3', title: 'Performance Optimisation', text: 'We specialize in optimizing models for real-time applications like AR and VR. This includes reducing polygon counts, creating efficient texture atlases, and implementing level-of-detail (LOD) systems to ensure smooth performance on target devices and provide a seamless, high-frame-rate user experience without compromising visual quality.' },
          { id: '3d-modeling-ko-4', title: 'UV Mapping & Material Setup', text: 'Our process includes proper UV unwrapping and the setup of high-quality, realistic materials and textures. This crucial step ensures that the models look convincing and photorealistic when rendered, and that textures are applied correctly to avoid stretching or distortion. We use physically-based rendering (PBR) workflows to achieve maximum realism.' },
          { id: '3d-modeling-ko-5', title: 'Multi-Format Export', text: 'We provide final models in a variety of standard formats (e.g., FBX, OBJ, GLTF, USD) to ensure they can be seamlessly integrated into your preferred visualization, animation, or game engine pipelines. Our flexible export capabilities ensure that our assets are compatible with a wide range of industry-standard software and applications.' }
        ],
        process: [
          { id: '3d-modeling-p-1', title: 'Define Scope & Concept', text: 'We begin by working with you to define the scope of the project and create a detailed asset list. We gather all necessary reference images and design information to guide the modeling process.' },
          { id: '3d-modeling-p-2', title: 'Build & Optimize Assets', text: 'Our artists build the 3D assets with a focus on clean geometry and technical accuracy. Throughout this stage, we apply optimization techniques tailored to the final use case of the models (e.g., high-poly for renders, low-poly for VR).' },
          { id: '3d-modeling-p-3', title: 'Review for Fidelity & Performance', text: 'The created assets undergo a thorough review process. We check them for visual fidelity against the source material and test their technical performance to ensure they meet the project’s requirements.' },
          { id: '3d-modeling-p-4', title: 'Deliver Assets & Packages', text: 'Once approved, we deliver the final 3D assets. We provide them as individual files or as a complete export package, ready for immediate use in your visualization or interactive application.' }
        ],
        features: ["Asset modeling", "Scene setup", "Optimisation"],
      },
      "cinematic-walkthroughs": {
        title: "Cinematic Walkthroughs",
        subtitle: "Narrative-driven visual tours",
        image: "https://i.postimg.cc/L6gRLWqq/3-DVISUALIZATION.jpg",
        heroTitle: "Cinematic Walkthroughs",
        heroDescription: "Immersive storytelling through motion. At Collective AEC, we craft cinematic walkthroughs with choreographed camera paths and post-production polish that captivate audiences and communicate design intent.",
        whyParagraph1: "A simple fly-through cannot convey the true feeling and story of a space; for that, you need a cinematic approach.",
        whyParagraph2: "At Collective AEC, we blend the arts of architecture and filmmaking. We craft compelling, narrative-driven cinematic walkthroughs that use choreographed camera paths, evocative lighting, and professional post-production to not only showcase your design but to captivate your audience and communicate its core intent.",
        sectionDescription: "Cinematic walkthroughs that communicate spatial experience and design intent through camera choreography, timing and post-production polish. Ideal for client presentations and marketing. Our cinematic services combine architectural visualization with filmmaking techniques, including dynamic camera movements, atmospheric lighting, sound design, and color grading to create compelling narratives that showcase spaces, materials, and experiential qualities for marketing, stakeholder engagement, and design communication.",
        description: "Cinematic walkthroughs that communicate spatial experience and design intent through camera choreography, timing and post-production polish. Ideal for client presentations and marketing.",
        keyOfferings: [
          { id: 'cinematic-walkthroughs-ko-1', title: 'Storyboarding & Narrative Design', text: 'We begin by defining the narrative of your space. Our storyboarding process maps out key camera paths, focal points, and emotional story beats to create a cohesive and engaging visual journey. This ensures that every moment of the walkthrough serves a purpose, guiding the viewer through the design with a clear and compelling story.' },
          { id: 'cinematic-walkthroughs-ko-2', title: 'Expert Digital Cinematography', text: 'Our artists choreograph camera movements, lens choices, and timing with an expert eye. We use cinematic techniques like slow pans, dramatic reveals, and smooth tracking shots to build atmosphere, dynamically showcase spaces, and highlight key design features, elevating the visualization from a simple fly-through to a work of digital art.' },
          { id: 'cinematic-walkthroughs-ko-3', title: 'Professional Post-Production', text: 'The rendered footage is taken into post-production for professional editing, color grading, and visual effects compositing. This final polish is what elevates the walkthrough to a truly cinematic level, adding subtle atmospheric effects, correcting color imbalances, and ensuring the final video has a consistent and professional feel.' },
          { id: 'cinematic-walkthroughs-ko-4', title: 'Immersive Sound Design', text: 'We enhance the visual experience with custom sound design. The addition of subtle ambient sounds (e.g., light breezes, muffled city sounds, or water features), music, and strategic sound effects creates a much more immersive and believable atmosphere for the viewer, stimulating more senses than just sight.' },
          { id: 'cinematic-walkthroughs-ko-5', title: 'Multi-Format Video Delivery', text: 'We deliver the final cinematic walkthrough in a variety of high-resolution video formats, optimized for different platforms, whether it’s for a large presentation screen, a website, social media, or a trade show loop. Our flexible delivery ensures your video is perfectly suited for its intended use and audience.' }
        ],
        process: [
          { id: 'cinematic-walkthroughs-p-1', title: 'Plan & Storyboard', text: 'The first step is a collaborative planning session to create a storyboard and shot list. This defines the narrative, camera paths, and overall schedule for the production.' },
          { id: 'cinematic-walkthroughs-p-2', title: 'Capture & Render', text: 'We then move into the production phase, where we animate and capture the planned camera paths within the 3D scene. This raw footage is then rendered in high quality to prepare for editing.' },
          { id: 'cinematic-walkthroughs-p-3', title: 'Edit & Enhance', text: 'In post-production, we assemble the rendered shots into a cohesive timeline. We add visual effects, perform color grading, and integrate the sound design to create the polished final edit.' },
          { id: 'cinematic-walkthroughs-p-4', title: 'Review & Deliver', text: 'The final cut is presented for your review and feedback. Once approved, we export the final cinematic walkthrough in all the required formats and deliver the complete asset package for your use.' }
        ],
        features: ["Camera paths", "Post-production", "Sound design"],
      },
      "ar-vr-services": {
        title: "AR/VR Services",
        subtitle: "Immersive visualization experiences",
        image: "https://i.postimg.cc/L6gRLWqq/3-DVISUALIZATION.jpg",
        heroTitle: "AR/VR Services",
        heroDescription: "Immersive reality for design exploration. At Collective AEC, we develop AR and VR experiences that enable interactive exploration, stakeholder engagement, and accelerated decision-making.",
        whyParagraph1: "To truly understand a space before it’s built, you need to experience it, not just see it on a screen.",
        whyParagraph2: "At Collective AEC, we create immersive AR and VR experiences that transport you inside your design. By enabling interactive, true-to-scale exploration, our services empower stakeholders, accelerate decision-making, and provide an unparalleled tool for design validation and communication.",
        sectionDescription: "AR/VR development to create immersive experiences for stakeholder engagement, enabling interactive exploration of designs and faster decision cycles. Our augmented and virtual reality services include interactive virtual tours, on-site AR overlays, real-time design reviews, and customizable environments that allow clients and teams to experience spaces at full scale, test design options, and make informed decisions before construction begins.",
        description: "AR/VR development to create immersive experiences for stakeholder engagement, enabling interactive exploration of designs and faster decision cycles.",
        keyOfferings: [
          { id: 'ar-vr-services-ko-1', title: 'Immersive VR Tours', text: 'We create fully immersive and navigable virtual reality tours of your unbuilt projects. This allows clients and stakeholders to walk through and experience the space at a 1:1 scale, gaining a profound sense of its proportions, atmosphere, and spatial relationships. It is the most effective tool for design validation and communication before construction.' },
          { id: 'ar-vr-services-ko-2', title: 'On-Site AR Overlays', text: 'Our augmented reality services allow you to overlay 3D models onto the real-world construction site using a tablet or headset. This is a powerful tool for on-site design validation, progress tracking, and clash detection in the field, enabling teams to visually confirm that the work being done aligns perfectly with the design intent.' },
          { id: 'ar-vr-services-ko-3', title: 'Interactive Design Scenes', text: 'We can develop interactive scenes where users have control over their exploration. This can include features like changing materials, swapping furniture, adjusting lighting conditions, or even opening doors and windows in real-time. This interactivity empowers clients to test and finalize design options on the spot, accelerating the decision-making process.' },
          { id: 'ar-vr-services-ko-4', title: 'Cross-Platform Export', text: 'Our deliverables are packaged for use on common AR/VR platforms, including Oculus (Meta) Quest, HTC Vive, and mobile AR platforms for iOS and Android. This cross-platform compatibility ensures wide accessibility for all your stakeholders, regardless of their device.' },
          { id: 'ar-vr-services-ko-5', title: 'Performance Optimization', text: 'We specialize in the performance tuning and optimization of 3D assets and environments for real-time applications. This ensures that the AR and VR experiences run smoothly and maintain high frame rates on the target devices, providing a stable and comfortable user experience without any lag or technical glitches.' }
        ],
        process: [
          { id: 'ar-vr-services-p-1', title: 'Plan & Define Scope', text: 'We begin by defining the scope, goals, and target platform for the AR or VR experience. This includes mapping out the user journey and the key interactive features to be included.' },
          { id: 'ar-vr-services-p-2', title: 'Build Assets & Interactions', text: 'Our team develops the necessary 3D assets, optimizes them for real-time performance, and builds the interactive logic for the experience. This is where the virtual world and its functionalities are constructed.' },
          { id: 'ar-vr-services-p-3', title: 'Test Performance & UX', text: 'The developed application undergoes rigorous testing. We focus on both technical performance, like frame rates, and the overall user experience (UX) to ensure the application is stable, intuitive, and effective.' },
          { id: 'ar-vr-services-p-4', title: 'Deliver & Support', text: 'Once testing is complete and the application is approved, we provide the final software packages along with clear instructions for installation and use. We also offer ongoing support to ensure a smooth deployment.' }
        ],
        features: ["VR tours", "AR overlays", "Interactive scenes"],
      },
      "project-renders": {
        title: "Project Renders",
        subtitle: "Photorealistic exterior and interior renders",
        image: "https://i.postimg.cc/L6gRLWqq/3-DVISUALIZATION.jpg",
        heroTitle: "Project Renders",
        heroDescription: "Photorealistic visualization that inspires. At Collective AEC, we produce stunning exterior and interior renders with meticulous attention to lighting, materials, and composition for marketing and approvals.",
        whyParagraph1: "A photorealistic render is often the first time a client truly sees and connects with their future project.",
        whyParagraph2: "At Collective AEC, we craft more than just images; we create visual experiences. Our team of artists combines technical skill with an artistic eye, paying meticulous attention to lighting, materials, and composition to produce stunning, photorealistic renders that inspire confidence and support project marketing and approvals.",
        sectionDescription: "Photoreal renders produced for marketing, client review and approvals with attention to materials, lighting and composition. Deliverables include stills and post-processed images ready for presentations. Our rendering services utilize advanced ray-tracing technology, realistic material libraries, and professional post-production to create images that accurately represent design intent while evoking emotional responses that support successful marketing, fundraising, and stakeholder approval processes.",
        description: "Photoreal renders produced for marketing, client review and approvals with attention to materials, lighting and composition. Deliverables include stills and post-processed images ready for presentations.",
        keyOfferings: [
          { id: 'project-renders-ko-1', title: 'Atmospheric Lighting & Composition', text: 'We specialize in creating accurate and atmospheric lighting scenarios, from realistic daylight to dramatic interior lighting. Our expert composition ensures every image is visually compelling, drawing the viewer’s eye to key design features and conveying the intended mood and ambiance of the space. We use a combination of natural and artificial lighting to create a sense of realism.' },
          { id: 'project-renders-ko-2', title: 'High-Quality Material & Texture Definition', text: 'Our artists use high-quality, physically-based materials and textures. This meticulous attention to detail ensures that every surface, from wood grain to concrete and glass, looks convincingly realistic. The textures are applied with precision, and materials are tuned to react to light in a way that is true to life, enhancing the overall photorealism of the image.' },
          { id: 'project-renders-ko-3', title: 'Professional Post-Production', text: 'Every render undergoes a professional post-production process in software like Adobe Photoshop. This includes color grading, compositing, and other enhancements to give the final image a polished, photographic quality. This step is crucial for adding subtle atmospheric effects like haze or lens flares and for ensuring the final image is ready for high-resolution print or web use.' },
          { id: 'project-renders-ko-4', title: 'Still Images & Animated Sequences', text: 'Our service can deliver both high-resolution still images, perfect for print and web, as well as short animated sequences or camera pans that add a dynamic element to your presentations. The animated sequences can showcase a design from multiple angles, providing a more comprehensive view of the project.' },
          { id: 'project-renders-ko-5', title: 'Flexible Format Delivery', text: 'We provide the final rendered images in a variety of required formats, including high-resolution TIFFs for print marketing and optimized JPEGs for online use. Our flexible delivery ensures your final assets are perfectly suited for their intended purpose, whether for a client presentation, a marketing campaign, or a website gallery.' }
        ],
        process: [
          { id: 'project-renders-p-1', title: 'Scene & Lighting Setup', text: 'We begin by setting up the 3D scene, which includes importing models, applying materials, and establishing the key lighting. We work with you to choose the best camera angles and composition for each shot.' },
          { id: 'project-renders-p-2', title: 'Produce High-Quality Renders', text: 'Using advanced rendering engines, we produce high-quality, high-resolution test renders for review. This allows for feedback on lighting and materials before committing to the final, time-intensive rendering process.' },
          { id: 'project-renders-p-3', title: 'Composite & Post-Production', text: 'The final raw renders are taken into post-production. Here, our artists composite different elements, perform color grading, and add final touches to achieve the desired mood and photorealistic polish.' },
          { id: 'project-renders-p-4', title: 'Review & Deliver', text: 'The final, polished images are delivered for your review and approval. Once finalized, we export them in all the requested formats and resolutions for your project’s needs.' }
        ],
        features: ["Lighting", "Materials", "Post-production"],
      },
      "floor-plan-renders": {
        title: "Floor Plan Renders",
        subtitle: "Quick visualizations of plans and layouts",
        image: "https://i.postimg.cc/L6gRLWqq/3-DVISUALIZATION.jpg",
        heroTitle: "Floor Plan Renders",
        heroDescription: "Clear layout visualization for quick decisions. At Collective AEC, we create rendered floor plans that communicate spatial arrangements and planning options for early-stage feedback and alignment.",
        whyParagraph1: "Traditional black and white floor plans can be difficult for stakeholders to read and understand spatially.",
        whyParagraph2: "At Collective AEC, we transform standard floor plans into clear, visually appealing renders. By adding color, texture, and furniture, our rendered floor plans make it easy to communicate spatial arrangements and planning options, facilitating quick feedback and stakeholder alignment during the crucial early stages of design.",
        sectionDescription: "Quick floor plan renders that communicate layout options and planning decisions, useful for early-stage feedback and stakeholder alignment. Our floor plan rendering services provide 2D and 2.5D visualizations with color-coded zones, furniture layouts, material indications, and circulation patterns that help clients, planners, and marketing teams understand spatial organization and make informed decisions during schematic design and space planning phases.",
        description: "Quick floor plan renders that communicate layout options and planning decisions, useful for early-stage feedback and stakeholder alignment.",
        keyOfferings: [
          { id: 'floor-plan-renders-ko-1', title: 'Fast Turnaround Visuals', text: 'Our streamlined process is designed for a quick turnaround, providing you with fast visual feedback on plans and layout options when you need it most during early design phases. We focus on efficiency to deliver professional-quality visuals rapidly, enabling you to iterate on design concepts with clients and stakeholders without delay.' },
          { id: 'floor-plan-renders-ko-2', title: 'Clear Stakeholder Communication', text: 'Our rendered plans simplify complex layouts, making them easy to understand for clients, marketing teams, and other non-technical stakeholders. By adding color, furniture, and materials, we bridge the gap between technical drawings and a clear visual representation, which helps to streamline the decision-making process and get buy-in early on.' },
          { id: 'floor-plan-renders-ko-3', title: 'Presentation-Ready Exports', text: 'We provide deliverables in multiple formats, including high-resolution JPEGs and PNGs, ready for immediate inclusion in your presentations, reports, and marketing materials. The images are optimized for both digital viewing and high-quality printing, ensuring they look great on any medium.' },
          { id: 'floor-plan-renders-ko-4', title: 'Color-Coded Zoning & Layouts', text: 'We can use color coding and other visual cues to clearly delineate different zones, circulation paths, or departmental areas within the plan, enhancing its readability. This is particularly useful for commercial projects where different departments or functions need to be clearly separated for planning and communication purposes.' },
          { id: 'floor-plan-renders-ko-5', title: 'Scalable for Any Project Size', text: 'Our service is fully scalable and can be adapted for any project size, from a small residential unit to a large-scale commercial or institutional floor plate. We maintain a high standard of clarity and quality regardless of the project\'s complexity or size, ensuring you get a professional result every time.' }
        ],
        process: [
          { id: 'floor-plan-renders-p-1', title: 'Prepare Plan & Scale', text: 'We start by importing your 2D CAD or BIM plan and setting the correct scale and layout. We work with you to define the style and level of detail required for the final render.' },
          { id: 'floor-plan-renders-p-2', title: 'Render 2D/2.5D Visuals', text: 'Our artists produce the 2D or 2.5D (axonometric) visual. This involves adding colors, textures, shadows, and entourage elements like furniture to bring the flat plan to life.' },
          { id: 'floor-plan-renders-p-3', title: 'Review for Clarity', text: 'The draft render is submitted for your review. We check for clarity, accuracy of annotations, and overall visual appeal, making any necessary adjustments based on your feedback.' },
          { id: 'floor-plan-renders-p-4', title: 'Deliver Final Images', text: 'Once approved, we provide the final rendered images. The deliverables are exported in the required formats and resolutions, ready for you to use in your project communications.' }
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

    // Ensure why paragraphs have a default
    sub.whyParagraph1 = sub.whyParagraph1 || 'Default intro paragraph.';
    sub.whyParagraph2 = sub.whyParagraph2 || 'Default detailed paragraph.';

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