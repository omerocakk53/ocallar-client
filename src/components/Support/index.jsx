import SupportSection from './SupportSection'
import WorldCyber from './WorldCyber'
import supportData from './support-data'

const Support = () => {
  return (
    <>
      <WorldCyber {...supportData.worldCyber} />
      <SupportSection {...supportData.supportSection} />
    </>
  )
}

export default Support
