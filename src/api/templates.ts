import api from "./api"

const fetchTemplates = () => {
  return api.get("/templates")
}

export default {
  fetchTemplates,
}
