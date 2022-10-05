import React from 'react'
import style from "./product.module.css";

export default function Info() {
  return (
    <div id={style.containerInfoBox} className="col-xl-7 rounded p-0 justify-content-end d-flex" >
      <div id={style.InfoBox} className='bg-white rounded border border-light h-100'>
        <div id={style.title} className="m-4 mb-0">
          <h5>Anker Soundcore Life Q10 Kablosuz Bluetooth 5.0 Kulaklık - 60 Saate Varan Çalma Süresi - Siyah Kırmızı - A3032</h5>
        </div>
        <div id={style.freeShippingBox}>
          <h3><span class="badge bg-color2 text-wrap">250 TL Üzeri Kargo Bedava</span ></h3>
        </div>
        <div id={style.shortDescriptionBox} className="mx-4">
          <p className='text-wrap'>
Orta segment kulaklık modelleri içerisinden sunduğu üst düzey ses performansıyla ayrışan Anker Soundcore Life Q10, şık tasarımıyla ve işlevsel özellikleriyle ayrıcalıklı bir deneyim sunuyor. Cihazda kullanılan siyah ve kırmızı ağırlıklı renkler, uyumlululuklarıyla göze hoş gelen bir görünüm çiziyor. Cihazın kapladığı alanı azaltan katlanabilir yapısı ve 290 gramlık hafif sayılabilecek ağırlığı, kulaklığı her an yanınızda taşıyabilmenizi sağlıyor. Esnek yapısıyla oldukça konforlu bir kullanım sunan Soundcore Life Q10, nefes alabilen yumuşak pedleriyle de oldukça rahat bir deneyimi beraberinde getiriyor. Modelin kulakları çevreleyen geniş ped tasarımı ise kulaklarınıza baskı yapmayarak uzun süreli kullanımlarda oluşabilecek ağrıların önüne geçiyor.</p>
        </div>
        <div id={style.category} className="mx-4 d-flex justify-content-start ">
          <h5>Kategori :</h5>
          <h5 Style="margin-left:1rem;">Teknoloji</h5>
        </div>
        <div id={style.price} className="mx-4 d-flex ">
          <h1>1150</h1> <h1>,00  TL</h1>
        </div>
        <div className={style.detailBox + " "}>
          <button type="button" className="btn text-white btn-lg btn-block bg-color1 " >Sepete Ekle</button>
        </div>
      </div>
    </div>
  )
}
