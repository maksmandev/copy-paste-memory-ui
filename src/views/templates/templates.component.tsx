import React, { useEffect } from "react"
import { useDispatch } from "react-redux"

import { getTemplates } from "./store/templates.actions"

const Templates = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTemplates())
  }, [dispatch])

  return <div>List</div>
}

export default Templates
