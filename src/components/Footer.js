import React from 'react';



function Footer() {

    return (
        <footer id="footer">
           <div className="container">

           <div className="row">
             <div className="call-us">
                <a href="/">Sorularınız mı var? Bizi Arayın.</a>
             </div>
           </div>

           <div className="row">
               <nav className="links">
               <a href="/">SSS</a>
               <a href="/">Yardım Merkezi</a>
               <a href="/">Hesap</a>
               <a href="/">Medya Merkezi</a>
               <a href="/">Yatırımcı İlişkileri</a>
               <a href="/">İş İmkanları</a>
               <a href="/">Hediye Kartı Kullan</a>
               <a href="/">İzleme Yolları</a>
               <a href="/">Kullanım Koşulları</a>
               <a href="/">Gizlilik</a>
               <a href="/">Çerez Tercihleri</a>
               <a href="/">Kurumsal Bilgiler</a>
               <a href="/">Bize Ulaşın</a>
               <a href="/">Hız Testi</a>
               <a href="/">Yasal Hükümler</a>
               <a href="/">Netflix Orijinal İçerikleri</a>
               </nav>
           </div>

           <div className="row">
           
               <select>
                   <option>
                       Türkçe
                   </option>
                   <option>
                       English
                   </option>
               </select>
           </div>

           </div>
        </footer>

    );
}

export default Footer;