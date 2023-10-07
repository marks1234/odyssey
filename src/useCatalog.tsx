import catalogRaw from "./assets/catalog.json";

const catalog = catalogRaw as CitizenScienceFeed;

function useCatalog(id?: string) {
  if (!id) {
    return catalog._project
      .sort(() => Math.random() - 0.5)
      .slice(0, 30)
      .map((p) => ({ ...p, match_percent: Math.random() * 100 }))
      .sort((a, b) => b.match_percent - a.match_percent);
  }
  return catalog._project.find((project) => project.project_id === id);
}

export default useCatalog;
