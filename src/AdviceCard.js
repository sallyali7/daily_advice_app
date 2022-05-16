import React from "react"
import dice from './styles/images/icon-dice.svg'
import dividerdesktop from './styles/images/pattern-divider-desktop.svg'
import dividermobile from './styles/images/pattern-divider-mobile.svg'

function AdviceCard({ advice }) {
  const reload = () => {
    window.location.reload()
  }

  return (
    <section className="advicecard">
      <h1 className='advicenumber'>ADVICE #{advice.id}</h1>
      <p className='advice' >&quot;{advice.advice}&quot;</p>
      <img src={dividerdesktop} srcSet={dividermobile} media="(max-width: 400px)" alt="page divider" className="divider"/>
      <button className='advicebutton' onClick={reload}>
        <img src={dice} alt="dice symbol" />
      </button>
    </section>
  )
}

export default AdviceCard