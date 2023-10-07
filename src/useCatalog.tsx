import catalogRaw from "./assets/catalog.json";

const catalog = catalogRaw as CitizenScienceFeed;

function useCatalog(id?: string) {
  if (!id) {
    return catalog._project;
  }
  return catalog._project.find((project) => project.project_id === id);
}

export default useCatalog;
