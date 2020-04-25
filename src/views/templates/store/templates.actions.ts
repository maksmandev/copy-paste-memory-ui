export const GET_TEMPLATES = "GET_TEMPLATES"
export const PUT_TEMPLATES = "PUT_TEMPLATES"

export const getTemplates = () => ({
  type: GET_TEMPLATES,
})

export const putTemplates = (payload: any) => ({
  type: PUT_TEMPLATES,
  payload,
})
