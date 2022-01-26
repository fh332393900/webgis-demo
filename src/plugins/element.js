import { ElButton, ElForm, ElFormItem, ElInput, ElRow, ElCol, ElCard,ElImage } from 'element-plus'

export default (app) => {
  app.use(ElButton)
  app.use(ElForm)
  app.use(ElFormItem)
  app.use(ElInput)
  app.use(ElRow)
  app.use(ElCol)
  app.use(ElCard)
  app.use(ElImage)
}
