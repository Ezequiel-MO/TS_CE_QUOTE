export const dbMaster = [
  { title: 'Hotels', route: 'hotel', icon: 'bxs:hotel' },
  { title: 'Restaurants', route: 'restaurant', icon: 'bx:restaurant' },
  { title: 'Events', route: 'event', icon: 'ic:baseline-event-available' },
  { title: 'Transfers', route: 'transfer', icon: 'cil:bus-alt' },
  { title: 'Clients', route: 'client', icon: 'mdi:handshake-outline' },
  { title: 'Locations', route: 'location', icon: 'akar-icons:location' },
  { title: 'Account Managers', route: 'accManager', icon: 'akar-icons:person' },
  { title: 'Countries', route: 'country', icon: 'gis:search-country' },
  {
    title: 'Invoices',
    route: 'invoice',
    icon: 'ant-design:euro-circle-outlined'
  }
]

export const projectMaster = [{ title: 'Projects', route: 'project' }]

export const financialReports = [
  { title: 'Invoices', route: 'invoice' },
  { title: 'ProFormas', route: 'pro_forma' },
  { title: 'Sales Forecast', route: 'forecast' }
]

export const admin = [
  { title: 'SignUp', route: 'signup' },
  { title: 'Delete user', route: 'delete_user' }
]

export const services = [
  {
    title: 'DB Master',
    route: 'db-master',
    icon: 'dashicons:database',
    description:
      'Manage all vendors from the Database, edit their details, add new ones, search them and add them to your project',
    items: dbMaster
  },
  {
    title: 'Projects',
    route: 'projects',
    icon: 'dashicons:portfolio',
    description:
      'Open a new project, add vendors, prices, dates, notes and more. Update the project as you go along',
    items: projectMaster
  },
  {
    title: 'Financial Reports',
    route: 'reports',
    icon: 'healthicons:finance-dept-outline',
    description:
      'View all your invoices, proformas and sales forecast in one place',
    items: financialReports
  },
  {
    title: 'Admin',
    route: 'admin',
    icon: 'material-symbols:admin-panel-settings-outline-rounded',
    description: 'Manage users, add new ones, delete them and more',
    items: admin
  }
]
