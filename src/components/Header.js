import React from 'react';

function Header() {

    return (
        <>
        <header id="header">
              <div className="container">
                  <div className="logo">
                  </div>

                  <div className="introduction">
                  <b>SINIRSIZ DİZİ VE FİLM</b>
                    <button type="button">ŞİMDİ KATIL</button> 
                  <button type="button">OTURUM AÇ</button>
                  </div>

              </div>
          </header>

            <section id="movies-header">

            <div className="container">

                  <div className="row">
                  <h1>Filmler</h1>
                <p>
                            Korkutucu, komik, dramatik, romantik ne türde olursa olsun etkileyici bir film kadar 
                            duygularımızı harekete geçiren başka bir şey yok.
                            Herkese hitap eden geniş bir film arşivi sizi bekliyor. 
                    <a href="/">Şimdi ücretsiz izleyin</a>
                </p>
                  </div>

            </div>

            </section>
            </>
    );
}

export default Header;