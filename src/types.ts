interface CitizenScienceFeed {
  version: string;
  title: string;
  home_page_url: string;
  feed_url: string;
  expired: boolean;
  _project: Project[];
}

interface Project {
  project_id: string;
  project_name: string;
  project_url_on_catalog: string;
  project_url_external: string;
  project_description: string;
  keywords: string;
  fields_of_science: string;
  project_status: string;
  agency_sponsor: string;
  agency_sponsor_other: string;
  geographic_scope: string;
  participant_age: string;
  project_goals: string;
  participation_tasks: string;
  scistarter: string;
  email: string;
  start_date: string;
  match_percent: number;
}
