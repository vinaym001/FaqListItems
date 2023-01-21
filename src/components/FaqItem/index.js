import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {iconIsClicked: false}

  onIconBtnClick = () => {
    this.setState(prevState => ({
      iconIsClicked: !prevState.iconIsClicked,
    }))
  }

  render() {
    const {iconIsClicked} = this.state
    const {faqDetails} = this.props
    const {questionText} = faqDetails
    const {answerText} = faqDetails
    const iconImgUrl = iconIsClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const iconName = iconIsClicked ? 'minus' : 'plus'
    return (
      <li className="li-container">
        <div className="faq-item">
          <h1 className="faq-que">{questionText}</h1>
          <button
            onClick={this.onIconBtnClick}
            className="icon-button"
            type="button"
          >
            <img src={iconImgUrl} className="icon" alt={iconName} />
          </button>
        </div>
        {iconIsClicked && (
          <div>
            {' '}
            <hr className="hr-line" /> <p className="faq-ans">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
