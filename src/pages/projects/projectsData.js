// Project image assets
import residentialImg from '../../assets/images/industries/residential.jpg';
import residentialInteriorImg from '../../assets/images/industries/residential-interior.jpg';
import residentialApartmentImg from '../../assets/images/industries/residential-apartment.jpg';
import healthcareImg from '../../assets/images/industries/healthcare.jpg';
import operatingTheatreImg from '../../assets/images/industries/hospital-operating-room.jpg';
import patientFacilityImg from '../../assets/images/industries/hospital-patient-room.jpg';
import hospitalCorridorImg from '../../assets/images/industries/test_corridor.jpg';
import approachPlansImg from '../../assets/images/about/approach-plans-helmet.jpg';
import hospitalityImg from '../../assets/images/industries/hospitality.jpg';
import hotelDiningImg from '../../assets/images/industries/hotel-dining-restaurant.jpg';
import hotelBedroomImg from '../../assets/images/industries/hotel-guest-bedroom.jpg';
import commercialImg from '../../assets/images/industries/commercial.jpg';
import commercialOfficeImg from '../../assets/images/industries/commercial-office-interior.jpg';
import commercialAtriumImg from '../../assets/images/industries/commercial-atrium.jpg';
import institutionalImg from '../../assets/images/industries/institutional.jpg';

// Service imagery
import comfortCoolingImg from '../../assets/images/services/comfort-cooling.jpg';
import lightingSystemsImg from '../../assets/images/services/lighting-systems.jpg';
import electricalImg from '../../assets/images/services/electrical.jpg';
import hvacImg from '../../assets/images/services/hvac.jpg';
import plumbingImg from '../../assets/images/services/plumbing.jpg';
import fireFightingImg from '../../assets/images/services/fire-fighting.jpg';
import elvImg from '../../assets/images/services/elv.jpg';
import networkSwitchesImg from '../../assets/images/services/network-switches.jpg';
import bmsImg from '../../assets/images/services/bms-monitoring-workstation.jpg';

export const projectsData = [
  {
    id: 1,
    name: 'Gopuram Cinema / Residency',
    category: 'Residential',
    slug: 'gopuram-cinema-residency',
    location: 'To be confirmed',
    scope: 'To be confirmed',
    image: residentialImg,
    heroSubtitle: 'Integrated MEP and life-safety systems coordination for residential living and entertainment spaces.',
    overview: 'Gopuram Cinema / Residency is a multi-purpose building development bringing together private residential living quarters with high-density entertainment and cinema spaces. The project requires engineered solutions that balance peaceful residential domestic utilities with high-demand public acoustic and ventilation standards.',
    background: 'Mixed residential and entertainment facilities demand strict segregation of utility distribution, specialized acoustic dampening for mechanical equipment, and resilient life-safety networks capable of handling diverse occupancy patterns across day and night cycles.',
    objectives: [
      'Segregated power sub-distribution separating residential quarters from high-capacity entertainment loads.',
      'Acoustic-conscious comfort cooling and low-vibration ventilation ductwork routing.',
      'Comprehensive fire safety infrastructure including addressable alarm sensors and emergency exit signage.',
      'Reliable domestic water distribution and hygienic drainage networks with pressure management.'
    ],
    systems: [
      {
        id: 'electrical',
        name: 'Electrical Services',
        route: '/electrical-services/',
        image: electricalImg,
        summary: 'Power distribution risers, residential metering boards, and dedicated entertainment circuits.'
      },
      {
        id: 'hvac',
        name: 'HVAC Services',
        route: '/hvac-services/',
        image: comfortCoolingImg,
        summary: 'Zoned comfort cooling, fresh-air replenishment, and low-noise air distribution.'
      },
      {
        id: 'fire',
        name: 'Fire Alarm & Fire Fighting',
        route: '/fire-alarm-fire-fighting/',
        image: fireFightingImg,
        summary: 'Zoned detection, fire sprinkler risers, and emergency acoustic cut-off integration.'
      },
      {
        id: 'plumbing',
        name: 'Plumbing Services',
        route: '/plumbing-services/',
        image: plumbingImg,
        summary: 'Domestic water supply networks, booster pumping systems, and sanitary drainage stacks.'
      }
    ],
    scopeDetails: [
      'Dedicated electrical sub-feeders and breaker coordination for entertainment and residential zones',
      'Air distribution layout with sound attenuators and vibration isolation mountings',
      'Life-safety riser routing with fire barrier compartmentation seals',
      'Sanitary wastewater venting and pressure-tested water delivery lines',
      'Emergency backup generator switchgear integration'
    ],
    gallery: [
      {
        image: residentialApartmentImg,
        caption: 'Residential living quarter spatial planning and utility coordination'
      },
      {
        image: residentialInteriorImg,
        caption: 'Interior lighting circuits and climate distribution layout'
      },
      {
        image: comfortCoolingImg,
        caption: 'Low-vibration comfort cooling and ventilation ducting'
      }
    ],
    relatedIndustries: [
      { name: 'Residential', route: '/industries/residential/' },
      { name: 'Commercial', route: '/industries/commercial/' }
    ],
    relatedServices: [
      { name: 'Electrical Services', route: '/electrical-services/' },
      { name: 'HVAC Services', route: '/hvac-services/' },
      { name: 'Fire Alarm & Fire Fighting', route: '/fire-alarm-fire-fighting/' },
      { name: 'Plumbing Services', route: '/plumbing-services/' }
    ]
  },
  {
    id: 2,
    name: 'JJ Arul Hospital',
    category: 'Healthcare',
    slug: 'jj-arul-hospital',
    location: 'To be confirmed',
    scope: 'To be confirmed',
    image: healthcareImg,
    heroSubtitle: 'High-reliability building systems engineering supporting critical medical care and clinical hygiene.',
    overview: 'JJ Arul Hospital is a healthcare facility engineered with stringent MEP systems to maintain sterile patient care conditions, continuous clean air filtration, and fail-safe power distribution for vital clinical departments.',
    background: 'Healthcare environments require specialized engineering standards where power reliability directly impacts patient safety, indoor air quality prevents hospital-acquired infections, and water delivery meets strict sanitary guidelines.',
    objectives: [
      'Uninterrupted power architecture with segregated clinical life-support circuits and emergency transfer switches.',
      'Controlled air filtration and positive/negative pressure airflow management across corridors and patient care suites.',
      'Medical-grade sanitary drainage, backflow protection, and reliable potable water storage.',
      'Integrated fire detection and emergency alarm signaling coordinated for non-ambulatory patient evacuation.'
    ],
    systems: [
      {
        id: 'electrical',
        name: 'Electrical Services',
        route: '/electrical-services/',
        image: electricalImg,
        summary: 'Emergency power busbars, UPS system connectivity, and medical diagnostic equipment feeds.'
      },
      {
        id: 'hvac',
        name: 'HVAC Services',
        route: '/hvac-services/',
        image: hvacImg,
        summary: 'Zoned hospital air handling, filtration pathways, and temperature-humidity regulation.'
      },
      {
        id: 'plumbing',
        name: 'Plumbing Services',
        route: '/plumbing-services/',
        image: plumbingImg,
        summary: 'Hygienic water supply lines, specialized clinical drainage, and anti-scald mixing systems.'
      },
      {
        id: 'fire',
        name: 'Fire Alarm & Fire Fighting',
        route: '/fire-alarm-fire-fighting/',
        image: fireFightingImg,
        summary: 'Addressable intelligent smoke sensors, wet risers, and zoned alarm staging.'
      },
      {
        id: 'elv',
        name: 'ELV Systems',
        route: '/elv-systems/',
        image: elvImg,
        summary: 'Nurse call system containment, CCTV monitoring, and restricted department access control.'
      }
    ],
    scopeDetails: [
      'Segregated electrical feeders connecting emergency backup power to clinical wings',
      'Clean air ductwork routing with differential pressure balancing across rooms',
      'Anti-microbial sanitary plumbing and backflow prevention valves',
      'Comprehensive fire containment seals at all service wall and floor penetrations',
      'Low-voltage conduit raceways for medical monitoring and security networks'
    ],
    gallery: [
      {
        image: operatingTheatreImg,
        caption: 'Clinical surgical suites requiring specialized air filtration and clean grounding'
      },
      {
        image: patientFacilityImg,
        caption: 'Patient rooms engineered with quiet ventilation and accessible call points'
      },
      {
        image: hospitalCorridorImg,
        caption: 'Overhead MEP service routing above clinical corridor ceiling grids'
      }
    ],
    relatedIndustries: [
      { name: 'Healthcare', route: '/industries/healthcare/' },
      { name: 'Institutional', route: '/industries/institutional/' }
    ],
    relatedServices: [
      { name: 'Electrical Services', route: '/electrical-services/' },
      { name: 'HVAC Services', route: '/hvac-services/' },
      { name: 'Plumbing Services', route: '/plumbing-services/' },
      { name: 'Fire Alarm & Fire Fighting', route: '/fire-alarm-fire-fighting/' },
      { name: 'ELV Systems', route: '/elv-systems/' }
    ]
  },
  {
    id: 3,
    name: 'Marutham',
    category: 'Residential',
    slug: 'marutham',
    location: 'To be confirmed',
    scope: 'To be confirmed',
    image: approachPlansImg,
    heroSubtitle: 'Complete residential building services framework ensuring long-term durability and efficiency.',
    overview: 'Marutham is a modern residential living complex designed to deliver dependable, energy-efficient building systems that support comfortable daily living through organized electrical, plumbing, and security infrastructure.',
    background: 'Residential building developments require streamlined utility shafts, durable water supply lines that prevent pressure drops, and electrical metering layouts that provide safe, easy maintenance for residents and property managers.',
    objectives: [
      'Standardized residential electrical load distribution with comprehensive surge and short-circuit protection.',
      'Durable vertical plumbing stacks and gravity-fed water delivery with pressure balancing.',
      'Optimized natural and mechanical airflow paths for kitchens, washrooms, and living spaces.',
      'Structured low-voltage pathways for entry gate intercom, telecom broadband, and security surveillance.'
    ],
    systems: [
      {
        id: 'electrical',
        name: 'Electrical Services',
        route: '/electrical-services/',
        image: lightingSystemsImg,
        summary: 'Residential switchboards, circuit breakers, and energy-conscious common lighting.'
      },
      {
        id: 'plumbing',
        name: 'Plumbing Services',
        route: '/plumbing-services/',
        image: plumbingImg,
        summary: 'Potable water risers, sanitary drain stacks, and rainwater drainage coordination.'
      },
      {
        id: 'elv',
        name: 'ELV Systems',
        route: '/elv-systems/',
        image: elvImg,
        summary: 'Video door entry intercom pathways and community security camera cabling.'
      }
    ],
    scopeDetails: [
      'Vertical utility riser shaft design for isolated plumbing and electrical distribution',
      'Apartment unit sub-panel scheduling and protective grounding networks',
      'Acoustically insulated drainage pipe routing through residential drops',
      'Common area energy-efficient LED lighting circuits and exterior boundary illumination',
      'Conduit networks for fiber-optic broadband delivery to each residence'
    ],
    gallery: [
      {
        image: residentialImg,
        caption: 'External residential building structure and integrated service shafts'
      },
      {
        image: residentialInteriorImg,
        caption: 'Apartment interior electrical terminal distribution and fixture planning'
      },
      {
        image: lightingSystemsImg,
        caption: 'Energy-efficient lighting distribution and switchgear installation'
      }
    ],
    relatedIndustries: [
      { name: 'Residential', route: '/industries/residential/' }
    ],
    relatedServices: [
      { name: 'Electrical Services', route: '/electrical-services/' },
      { name: 'Plumbing Services', route: '/plumbing-services/' },
      { name: 'ELV Systems', route: '/elv-systems/' }
    ]
  },
  {
    id: 4,
    name: 'Silver Stone Resort',
    category: 'Hospitality',
    slug: 'silver-stone-resort',
    location: 'To be confirmed',
    scope: 'To be confirmed',
    image: hospitalityImg,
    heroSubtitle: 'Hospitality engineering solutions focusing on guest comfort, quiet cooling, and scenic illumination.',
    overview: 'Silver Stone Resort is a premium hospitality property engineered with specialized climate control, aesthetic lighting distribution, and pressurized water systems that enhance the guest experience while providing robust facility maintenance capabilities.',
    background: 'Resort properties combine high guest expectations for acoustic silence and instantaneous hot water with large outdoor footprints requiring distributed underground utility networks and multi-zone climate management.',
    objectives: [
      'Whisper-quiet air conditioning systems that maintain guest comfort without mechanical noise intrusion.',
      'Aesthetic architectural and landscape lighting highlighting natural terrain and architecture.',
      'High-capacity central water heating and multi-zone booster pumping ensuring stable hot water delivery.',
      'Comprehensive life safety systems spanning guest cottages, central dining facilities, and recreation zones.'
    ],
    systems: [
      {
        id: 'hvac',
        name: 'HVAC Services',
        route: '/hvac-services/',
        image: comfortCoolingImg,
        summary: 'Low-decibel guest room fan-coil cooling, dining hall climate control, and kitchen ventilation.'
      },
      {
        id: 'electrical',
        name: 'Electrical Services',
        route: '/electrical-services/',
        image: electricalImg,
        summary: 'Underground resort power distribution, architectural illumination, and backup generator systems.'
      },
      {
        id: 'plumbing',
        name: 'Plumbing Services',
        route: '/plumbing-services/',
        image: plumbingImg,
        summary: 'Centralized hot and cold water distribution, grease traps, and greywater recycling lines.'
      },
      {
        id: 'fire',
        name: 'Fire Alarm & Fire Fighting',
        route: '/fire-alarm-fire-fighting/',
        image: fireFightingImg,
        summary: 'Site-wide hydrant rings, guest villa smoke alarms, and centralized annunciator panel.'
      }
    ],
    scopeDetails: [
      'Low-noise variable refrigerant flow (VRF) and fan-coil unit installation planning',
      'Underground power cabling and landscape lighting control systems',
      'Commercial kitchen ventilation hoods and dedicated exhaust air routing',
      'Insulated domestic hot water recirculation loops preventing temperature drop',
      'Fire hydrant network and portable extinguisher placement across all cottages'
    ],
    gallery: [
      {
        image: hotelDiningImg,
        caption: 'Resort dining and restaurant area with integrated climate and ambient lighting'
      },
      {
        image: hotelBedroomImg,
        caption: 'Guest suite interior with discrete climate registers and convenient bedside power controls'
      },
      {
        image: comfortCoolingImg,
        caption: 'Centralized cooling equipment and chilled air ducting'
      }
    ],
    relatedIndustries: [
      { name: 'Hospitality', route: '/industries/hospitality/' },
      { name: 'Commercial', route: '/industries/commercial/' }
    ],
    relatedServices: [
      { name: 'HVAC Services', route: '/hvac-services/' },
      { name: 'Electrical Services', route: '/electrical-services/' },
      { name: 'Plumbing Services', route: '/plumbing-services/' },
      { name: 'Fire Alarm & Fire Fighting', route: '/fire-alarm-fire-fighting/' }
    ]
  },
  {
    id: 5,
    name: 'Sri Kamatchi Medical Centre',
    category: 'Healthcare',
    slug: 'sri-kamatchi-medical-centre',
    location: 'To be confirmed',
    scope: 'To be confirmed',
    image: healthcareImg,
    heroSubtitle: 'Specialized medical facility building systems ensuring clinical precision and patient wellbeing.',
    overview: 'Sri Kamatchi Medical Centre is a specialized clinical facility requiring precise MEP design to safeguard sterile operational conditions, dependable power supply for diagnostic equipment, and strict hygienic separation throughout patient care departments.',
    background: 'Medical centres operate with sensitive clinical apparatus and high patient turnover. The building systems must guarantee zero downtime for critical diagnostic circuits, absolute water safety, and contamination-free ventilation.',
    objectives: [
      'Isolated electrical power distribution preventing interference with sensitive diagnostic and imaging equipment.',
      'Precision temperature, humidity, and HEPA air filtration control for treatment and patient rooms.',
      'Hygienic water supply and chemical-resistant drainage for diagnostic laboratories and consultation suites.',
      'Multi-stage addressable fire alarm systems ensuring immediate detection without panic.'
    ],
    systems: [
      {
        id: 'electrical',
        name: 'Electrical Services',
        route: '/electrical-services/',
        image: electricalImg,
        summary: 'Medical-grade isolation panels, clean grounding networks, and emergency transfer switchgear.'
      },
      {
        id: 'hvac',
        name: 'HVAC Services',
        route: '/hvac-services/',
        image: hvacImg,
        summary: 'Controlled airflow paths, HEPA filtration integration, and multi-zone climate control.'
      },
      {
        id: 'plumbing',
        name: 'Plumbing Services',
        route: '/plumbing-services/',
        image: plumbingImg,
        summary: 'Continuous pressurized water supply, specialized laboratory drainage, and non-touch fixtures.'
      },
      {
        id: 'fire',
        name: 'Fire Alarm & Fire Fighting',
        route: '/fire-alarm-fire-fighting/',
        image: fireFightingImg,
        summary: 'Multi-sensor intelligent smoke detection, sprinkler risers, and fire door release triggers.'
      }
    ],
    scopeDetails: [
      'Spatial MEP coordination preventing clash between ventilation ductwork and electrical trays',
      'Clean grounding networks ensuring zero static disturbance for sensitive medical analyzers',
      'Dedicated exhaust ducting for laboratory and sanitary consultation rooms',
      'Emergency power routing to critical diagnostic equipment and cold storage medicine units',
      'Centralized fire annunciator panel interfacing with public address system'
    ],
    gallery: [
      {
        image: patientFacilityImg,
        caption: 'Hygienic patient care suites with integrated climate registers and utility connections'
      },
      {
        image: operatingTheatreImg,
        caption: 'Sterile surgical environment requiring laminar air distribution and clean electrical panels'
      },
      {
        image: fireFightingImg,
        caption: 'Fire safety pipework and valve control assembly'
      }
    ],
    relatedIndustries: [
      { name: 'Healthcare', route: '/industries/healthcare/' },
      { name: 'Institutional', route: '/industries/institutional/' }
    ],
    relatedServices: [
      { name: 'Electrical Services', route: '/electrical-services/' },
      { name: 'HVAC Services', route: '/hvac-services/' },
      { name: 'Plumbing Services', route: '/plumbing-services/' },
      { name: 'Fire Alarm & Fire Fighting', route: '/fire-alarm-fire-fighting/' }
    ]
  },
  {
    id: 6,
    name: 'Peral City Engineering Builders',
    category: 'Commercial',
    slug: 'peral-city-engineering-builders',
    location: 'To be confirmed',
    scope: 'To be confirmed',
    image: commercialImg,
    heroSubtitle: 'Modern commercial facility engineering featuring high-speed networking and smart climate control.',
    overview: 'Peral City Engineering Builders is a multi-story commercial complex designed for corporate administration, engineering workstations, and collaborative spaces requiring high-performance power distribution, modern networking, and zoned climate control.',
    background: 'Modern commercial buildings need flexible, energy-efficient MEP services that accommodate open-plan office layouts, server rooms, and fluctuating tenant occupancies while maintaining lower operational expenditure.',
    objectives: [
      'High-capacity electrical distribution with floor-by-floor sub-metering and power factor correction.',
      'Energy-efficient variable air conditioning providing zoned thermal comfort for workstations and boardrooms.',
      'Structured Cat6A and fiber-optic networking infrastructure connecting server rooms to open office floors.',
      'Smart facility readiness through Building Management System (BMS) sensors and automated monitoring.'
    ],
    systems: [
      {
        id: 'electrical',
        name: 'Electrical Services',
        route: '/electrical-services/',
        image: electricalImg,
        summary: 'Main switchgear, busduct risers, floor sub-panels, and energy-saving LED task lighting.'
      },
      {
        id: 'hvac',
        name: 'HVAC Services',
        route: '/hvac-services/',
        image: comfortCoolingImg,
        summary: 'Variable air volume cooling, fresh-air pre-cooling units, and server room precision cooling.'
      },
      {
        id: 'it',
        name: 'IT & Networking',
        route: '/it-networking/',
        image: networkSwitchesImg,
        summary: 'Server rack installations, patch panels, overhead cable trays, and high-speed data backbone.'
      },
      {
        id: 'bms',
        name: 'Building Management Systems',
        route: '/building-management-systems/',
        image: bmsImg,
        summary: 'Centralized workstation monitoring energy consumption, chiller efficiency, and lighting schedules.'
      }
    ],
    scopeDetails: [
      'Vertical busbar trunking delivering reliable three-phase power across office floors',
      'Zoned ceiling diffusers and modulating motorized dampers for independent thermal control',
      'Overhead mesh cable trays separating high-voltage electrical lines from sensitive data cabling',
      'Dedicated precision climate control and fire suppression for central server room',
      'Automatic smoke spill dampers and stairwell pressurization fans for building evacuation safety'
    ],
    gallery: [
      {
        image: commercialOfficeImg,
        caption: 'Corporate office floor plan with integrated task lighting and underfloor raceways'
      },
      {
        image: commercialAtriumImg,
        caption: 'Central atrium architectural volume with coordinated ventilation and smoke extraction'
      },
      {
        image: networkSwitchesImg,
        caption: 'High-density network switch routing and structured data cabling'
      }
    ],
    relatedIndustries: [
      { name: 'Commercial', route: '/industries/commercial/' },
      { name: 'Industrial', route: '/industries/industrial/' }
    ],
    relatedServices: [
      { name: 'Electrical Services', route: '/electrical-services/' },
      { name: 'HVAC Services', route: '/hvac-services/' },
      { name: 'IT & Networking', route: '/it-networking/' },
      { name: 'Building Management Systems', route: '/building-management-systems/' }
    ]
  },
  {
    id: 7,
    name: 'D.A.S.P Smart Hall',
    category: 'Institutional',
    slug: 'dasp-smart-hall',
    location: 'To be confirmed',
    scope: 'To be confirmed',
    image: institutionalImg,
    heroSubtitle: 'Institutional assembly hall engineering integrating high-capacity ventilation, AV, and life safety.',
    overview: 'D.A.S.P Smart Hall is an institutional assembly and multi-purpose event auditorium engineered for seminars, cultural gatherings, and conferences. Systems are tailored to handle rapid shifts in crowd density with quiet, high-volume air movement and high-capacity electrical setups.',
    background: 'Assembly halls present unique engineering challenges: large open-span ceiling volumes, sudden heat loads from dense audiences, high acoustic sensitivity during speeches, and strict fire egress clearance regulations.',
    objectives: [
      'High-volume, low-velocity displacement ventilation maintaining auditorium comfort without acoustic air rumble.',
      'Specialized electrical sub-panels delivering isolated clean power for audio, stage lighting, and projection systems.',
      'Integrated ELV systems including public address speakers, acoustic containment, and assistive listening.',
      'Rapid fire safety evacuation systems with optical beam smoke detectors and high-capacity exit signage.'
    ],
    systems: [
      {
        id: 'hvac',
        name: 'HVAC Services',
        route: '/hvac-services/',
        image: hvacImg,
        summary: 'Large-scale auditorium air handling, acoustic silencers, and conditioned air displacement.'
      },
      {
        id: 'electrical',
        name: 'Electrical Services',
        route: '/electrical-services/',
        image: lightingSystemsImg,
        summary: 'Stage power boards, three-phase audio power supplies, and dimmable architectural hall lighting.'
      },
      {
        id: 'elv',
        name: 'ELV Systems',
        route: '/elv-systems/',
        image: elvImg,
        summary: 'Audio-visual conduit routes, public address network lines, and access-point coverage.'
      },
      {
        id: 'fire',
        name: 'Fire Alarm & Fire Fighting',
        route: '/fire-alarm-fire-fighting/',
        image: fireFightingImg,
        summary: 'Beam smoke detection across high ceilings, sprinkler pipe networks, and audio cut-off relay.'
      }
    ],
    scopeDetails: [
      'Acoustic duct lining and sound attenuator placement minimizing air turbulence noise',
      'Isolated clean grounding circuits eliminating audio hum and buzz in microphone lines',
      'Dual emergency power transfer ensuring continuous illumination during power interruptions',
      'Automated fire alarm interlock that safely shuts down audio-visual sound upon alarm activation',
      'Concealed cable raceways along walls and stage flooring for flexible event equipment staging'
    ],
    gallery: [
      {
        image: commercialAtriumImg,
        caption: 'High-ceiling open hall space with coordinated acoustic vents and perimeter lighting'
      },
      {
        image: lightingSystemsImg,
        caption: 'Dimmable architectural illumination and specialized stage power circuits'
      },
      {
        image: elvImg,
        caption: 'ELV conduit containment for public address and high-definition video distribution'
      }
    ],
    relatedIndustries: [
      { name: 'Institutional', route: '/industries/institutional/' },
      { name: 'Commercial', route: '/industries/commercial/' }
    ],
    relatedServices: [
      { name: 'HVAC Services', route: '/hvac-services/' },
      { name: 'Electrical Services', route: '/electrical-services/' },
      { name: 'ELV Systems', route: '/elv-systems/' },
      { name: 'Fire Alarm & Fire Fighting', route: '/fire-alarm-fire-fighting/' }
    ]
  }
];

export function getProjectBySlug(slug) {
  if (!slug) return null;
  const cleanSlug = slug.toLowerCase().trim().replace(/\/+$/, '');
  return projectsData.find((p) => p.slug.toLowerCase() === cleanSlug) || null;
}
