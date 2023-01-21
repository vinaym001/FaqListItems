import FaqItem from '../FaqItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="bg-container">
      <div className="content-container">
        <h1 className="heading">FAQs</h1>
        <ul>
          {faqsList.map(eachItem => (
            <FaqItem key={eachItem.id} faqDetails={eachItem} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
