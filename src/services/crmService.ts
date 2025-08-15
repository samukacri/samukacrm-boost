import { Lead, Person, Product, DashboardStats, LeadStatus } from '@/types/crm';

// Mock data based on CSV files
const mockLeads: Lead[] = [
  {
    id: 1,
    title: "Updated Urgent Requirement of Product -> TaskMaster Pro - Advanced Project Management Tool",
    description: "Urgent Requirement: TaskMaster Pro – an advanced project management tool designed to enhance team collaboration, streamline task tracking, and optimize time management for small to medium-sized teams. Ideal for businesses looking to improve project efficiency and productivity.",
    lead_value: 50000,
    status: 1,
    lost_reason: "",
    closed_at: "2024-08-30 14:39:58",
    user_id: 1,
    person_id: 1,
    lead_source_id: 2,
    lead_type_id: 2,
    lead_pipeline_id: 1,
    product: "price=45,quantity=2,id=1",
    lead_pipeline_stage_id: 5,
    expected_close_date: "2024-09-02"
  },
  {
    id: 2,
    title: "Need more information About Product -> CyberGuard Pro",
    description: "A client wants to know about the CyberGuard Pro Product in details and he is interested in the product.",
    lead_value: 100000,
    status: 1,
    lost_reason: "",
    closed_at: "",
    user_id: 1,
    person_id: 2,
    lead_source_id: 4,
    lead_type_id: 1,
    lead_pipeline_id: 1,
    product: "price=45,quantity=2,id=2",
    lead_pipeline_stage_id: 3,
    expected_close_date: "2024-09-06"
  }
];

const mockPersons: Person[] = [
  {
    id: 1,
    name: "Wilson Fisk",
    emails: [
      { label: "work", value: "contact@wilson.com" },
      { label: "home", value: "contact.home@wilson.com" }
    ],
    contact_numbers: [
      { label: "work", value: "5454445454" }
    ],
    organization_id: 1,
    job_title: "Sales Executive",
    user_id: 1
  },
  {
    id: 2,
    name: "Sasha Calle",
    emails: [
      { label: "work", value: "contact@sasha.com" }
    ],
    contact_numbers: [
      { label: "work", value: "15454445454" }
    ],
    organization_id: 1,
    job_title: "Sales Representatives",
    user_id: 1
  }
];

const mockProducts: Product[] = [
  {
    id: 1,
    sku: "100",
    name: "TaskMaster Pro - Advanced Project Management Tool",
    description: "A project management tool designed for small to medium-sized teams. It offers task tracking, team collaboration, and time management features. It also integrates with popular communication platforms.",
    quantity: 45,
    price: 500
  },
  {
    id: 2,
    sku: "101",
    name: "ProjectPulse - A Simple and Effective Project Management Tool",
    description: "A cloud-based project management solution that provides Gantt charts, resource allocation, and project reporting. It is designed for large enterprises and supports multi-project management with real-time analytics.",
    quantity: 20,
    price: 450
  }
];

const leadStatuses: LeadStatus[] = [
  { id: 1, name: "New", color: "bg-blue-500" },
  { id: 2, name: "Qualified", color: "bg-yellow-500" },
  { id: 3, name: "Proposal", color: "bg-orange-500" },
  { id: 4, name: "Negotiation", color: "bg-purple-500" },
  { id: 5, name: "Closed Won", color: "bg-green-500" },
  { id: 6, name: "Closed Lost", color: "bg-red-500" }
];

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const crmService = {
  // Dashboard
  async getDashboardStats(): Promise<DashboardStats> {
    await delay(300);
    const activeLeads = mockLeads.filter(lead => lead.status === 1).length;
    const convertedLeads = mockLeads.filter(lead => lead.status === 5).length;
    const totalRevenue = mockLeads
      .filter(lead => lead.status === 5)
      .reduce((sum, lead) => sum + lead.lead_value, 0);
    
    return {
      total_leads: mockLeads.length,
      active_leads: activeLeads,
      converted_leads: convertedLeads,
      total_revenue: totalRevenue,
      avg_deal_size: totalRevenue / (convertedLeads || 1),
      conversion_rate: (convertedLeads / mockLeads.length) * 100
    };
  },

  // Leads
  async getLeads(): Promise<Lead[]> {
    await delay(500);
    return mockLeads;
  },

  async getLead(id: number): Promise<Lead | undefined> {
    await delay(300);
    return mockLeads.find(lead => lead.id === id);
  },

  async createLead(lead: Omit<Lead, 'id'>): Promise<Lead> {
    await delay(500);
    const newLead = { ...lead, id: Math.max(...mockLeads.map(l => l.id)) + 1 };
    mockLeads.push(newLead);
    return newLead;
  },

  async updateLead(id: number, lead: Partial<Lead>): Promise<Lead> {
    await delay(500);
    const index = mockLeads.findIndex(l => l.id === id);
    if (index === -1) throw new Error('Lead not found');
    mockLeads[index] = { ...mockLeads[index], ...lead };
    return mockLeads[index];
  },

  // Persons
  async getPersons(): Promise<Person[]> {
    await delay(500);
    return mockPersons;
  },

  async getPerson(id: number): Promise<Person | undefined> {
    await delay(300);
    return mockPersons.find(person => person.id === id);
  },

  // Products
  async getProducts(): Promise<Product[]> {
    await delay(500);
    return mockProducts;
  },

  async getProduct(id: number): Promise<Product | undefined> {
    await delay(300);
    return mockProducts.find(product => product.id === id);
  },

  // Lead Statuses
  async getLeadStatuses(): Promise<LeadStatus[]> {
    await delay(200);
    return leadStatuses;
  }
};