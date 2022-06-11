import React from 'react'

const Main = () => {
  return (
    <div className='main'>

      <iframe className="lazyload" src="https://player.vimeo.com/video/626392197?autoplay=1&amp;loop=1&amp;autopause=0&amp;controls=0&amp;muted=1&amp;background=1" webkitallowfullscreen="True" allowFullScreen="True" allow="autoplay; fullscreen; picture-in-picture" frameBorder="0"></iframe>
      <button >
        <div className="hamburger navbar">
          <span className='ls'></span>
          <span className='ls'></span>
        </div>
      </button>
     
      <div className="overlay"></div>
      <div className="uppericons overlay2 fixedpos">
        <div className="navbar leftside">
        </div>
        <div className="navbar language rightside">
          <div class="lang-list">
            <a href="/" class="">eng</a>
            <a href="/it/" class="">it</a>
            <a href="https://essence.alterego-group.com/fr/" >fr</a>
            <a href="https://essence.alterego-group.com/ar/" >عربي</a>
          </div>
        </div>
        <div className="milan"> 
          <p><a href="/en/office/milan/" class="vl vl01"> <span class="l"></span> Milan</a></p>
        </div>
        <div className="monaco rightside">
          <p><a href="/en/office/monaco/" class="vl vl02">Monaco <span class="l"></span></a></p>
        </div>
        <div className="downfill"></div>
      </div>

      <div className="content">

        <div className='logo icon fixedpos'>
          <img src="https://www.alterego-group.com/img/logo_white.svg" alt="Project group bespoke turm-key projects" className="main_logo_text"></img>
        </div>
        <div className='logo icon fixedpos'>
          <img src="https://www.alterego-group.com/img/main_logo_text_mob.png" alt="Project group bespoke turm-key projects" className='main_logo_text'></img>
        </div>

        <div className='logo Awards fixedpos'>
          <img src="https://www.alterego-group.com//img/main_logo_awards.png" alt="Project group bespoke turm-key projects" className='main_logo_text'></img>
        </div>
      </div>
    </div>
  )
}

export default Main