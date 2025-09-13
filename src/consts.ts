// Site configuration for Ash & Elm Contracting
export const SITE_DATA = {
  // Business Information
  name: 'Ash & Elm Contracting',
  tagline: 'Quality Finish Carpentry & Home Improvements',
  description: 'Professional finish carpentry, custom millwork, and home improvement services in Virden, Manitoba and surrounding areas.',

  // Contact Details
  phone: {
    raw: '+12045120866',
    display: '(204) 512-0866'
  },
  email: 'paul@ash-elm.com',
  gst: '81250 2235 RT0001',

  // Location & Service Area
  address: {
    city: 'Virden',
    province: 'Manitoba',
    country: 'Canada'
  },
  serviceArea: [
    'Virden',
    'Oak Lake',
    'Elkhorn',
    'Reston',
    'Surrounding RM'
  ],

  // Services Offered
  services: [
    {
      name: 'Finish Carpentry',
      description: 'Professional trim, casing, and baseboard installation'
    },
    {
      name: 'Doors & Hardware',
      description: 'Expert door installation and hardware fitting'
    },
    {
      name: 'Custom Shelving & Built-ins',
      description: 'Bespoke storage solutions tailored to your space'
    },
    {
      name: 'Deck & Fence Repairs',
      description: 'Maintenance and restoration of outdoor structures'
    },
    {
      name: 'Small Renovations',
      description: 'Home improvements and repair work'
    },
    {
      name: 'Flooring Repairs & Transitions',
      description: 'Seamless flooring fixes and transition strips'
    }
  ],

  // Business Details
  paymentMethods: ['Cash', 'Cheque', 'e-Transfer (CAD)'],
  currency: 'CAD',
  fullyInsured: true,
  ownerOperated: true
};

// Legacy exports for compatibility
export const SITE_TITLE = SITE_DATA.name;
export const SITE_DESCRIPTION = SITE_DATA.description;