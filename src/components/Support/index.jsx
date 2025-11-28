import SupportSection from './SupportSection'
import supportData from './support-data'

const Support = () => {
  return (
    <>
      <SupportSection
        header={supportData.header}
        supportSection={supportData.supportSection}
      />
    </>
  )
}

export default Support
