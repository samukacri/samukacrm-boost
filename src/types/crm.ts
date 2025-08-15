export interface Lead {
  id: number;
  title: string;
  description: string;
  lead_value: number;
  status: number;
  lost_reason?: string;
  closed_at?: string;
  user_id: number;
  person_id: number;
  lead_source_id: number;
  lead_type_id: number;
  lead_pipeline_id: number;
  product: string;
  lead_pipeline_stage_id: number;
  expected_close_date: string;
}

export interface Person {
  id?: number;
  name: string;
  emails: EmailContact[];
  contact_numbers: PhoneContact[];
  organization_id: number;
  job_title: string;
  user_id: number;
}

export interface EmailContact {
  label: string;
  value: string;
}

export interface PhoneContact {
  label: string;
  value: string;
}

export interface Product {
  id?: number;
  sku: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
}

export interface LeadStatus {
  id: number;
  name: string;
  color: string;
}

export interface DashboardStats {
  total_leads: number;
  active_leads: number;
  converted_leads: number;
  total_revenue: number;
  avg_deal_size: number;
  conversion_rate: number;
}