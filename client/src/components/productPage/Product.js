import React from 'react'
import style from "./product.module.css";

export default function Product() {
  return (
  <>
  <br></br>
  <br></br>
  <br></br>

  <br></br>
  <br></br>
  <br></br><br></br>
  <br></br>
  <br></br>
    <div className="container-xxl mt-2 w-100">
      <div className="row justify-content-between">
            <div id={style.ImageBox} className="col-xxl-5 border border-light bg-white rounded">
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner my-3">
                  <div className="carousel-item active">
                    <img src="https://productimages.hepsiburada.net/s/32/550/10376494710834.jpg/format:webp" className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="https://productimages.hepsiburada.net/s/32/550/10376529969202.jpg/format:webp" className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="https://productimages.hepsiburada.net/s/32/550/10376530001970.jpg/format:webp" className="d-block w-100" alt="..."/>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
              <div id={style.containerInfoBox} className="col-xxl-7 rounded" >
                <div id={style.InfoBox} className='bg-white rounded border border-light h-100'>
                  <div id={style.title} className="m-4">
                    <h5>Anker Soundcore Life Q10 Kablosuz Bluetooth 5.0 Kulaklık - 60 Saate Varan Çalma Süresi - Siyah Kırmızı - A3032</h5>
                  </div>
                  <div id={style.price} className="mx-4 my-5">
                    <h2>1150 TL</h2>
                  </div>
                  <div id={style.addCartButton} className="mx-4 my-5 ">
                    <button type="button" className="btn btn-primary btn-lg btn-block w-100">Sepete Ekle</button>
                  </div>
                </div>
              </div>
        </div>

 

 

      
        <div id={style.descriptionBox} className="container-xxl mt-4 border border-light bg-white rounded h-100 w-100">

                <p>
                Anker tarafından kablosuz kulak üstü kulaklık tercih edenler için geliştirilen Anker Soundcore Life Q10 A3032 kablosuz
  kulaküstü kulaklık modeli, sunduğu ses kalitesiyle kullanıcılardan tam not almayı başarıyor. Model,
  bataryasından tasarımına kadar her bir detayıyla kullanıcı odaklı bir yaklaşımın sonuçlarını yansıtıyor.
  Bluetooth 5.0 desteği ile kablosuz olarak kullanılabilen cihaz, 35 metrelik menziliyle önemli bir avantaj
  sağlıyor. Müzik dinlemeyi sevenler için bambaşka bir ayrıcalık anlamına gelen Soundcore Life Q10,
  dahili mikrofonu ve arka plan seslerini baskılayan teknolojisiyle de telefon görüşmesi yapmak isteyenler
  için ideal bir deneyim sunuyor.Ayrıca kablolu kulaküstü kulaklık olarakta kullanılabiliyor.
  <br></br>
  <br></br>
  <b>Öne Çıkan Özellikleriyle Anker Soundcore Life Q10 Kablosuz Bluetooth Kulaklık</b>
  <br></br>
  <br></br>
  Bluetooth 5.0 bağlantısı ile kablosuz olarak kullanılabilen Anker Soundcore Life Q10, düşük gecikme
  süresiyle oyun severlerin beklentilerini karşılıyor ve kontrolün her daim elinizde olmasını sağlıyor.
  USB Type-C desteği, modelin yeni nesil mobil cihazların kabloları ve adaptörleri ile kullanılabilmesine imkân tanıyor.
  8 farklı cihazı hafızasında tutabilen Soundcore Life Q10, bağlantı sürecini hızlandırarak her defasına bağlantı ayarlarıyla
  uğraşmak zorunda kalmanızı engelliyor.
  Kulaklığın kafa bantlarında kullanılan metal malzemeler ve dış profilini kaplayan sert plastik materyaller darbelere karşı
  olan dirençleri ile ürünün kullanım süresini uzatıyor.
  Modelde yer alan 3.5 mm jack girişi, kablosuz kullanımına ek olarak dileyenlerin cihazı kablolu olarak da kullanılabilmesini
  sağlıyor.
  <br></br>
  <br></br>
  <b>Yanınızdan Ayırmayacağınız Ergonomik Tasarım</b>
  <br></br>
  <br></br>
  Orta segment kulaklık modelleri içerisinden sunduğu üst düzey ses performansıyla ayrışan Anker Soundcore Life Q10,
  şık tasarımıyla ve işlevsel özellikleriyle ayrıcalıklı bir deneyim sunuyor. Cihazda kullanılan siyah ve kırmızı ağırlıklı renkler,
  uyumlululuklarıyla göze hoş gelen bir görünüm çiziyor. Cihazın kapladığı alanı azaltan katlanabilir yapısı ve 290 gramlık hafif
  sayılabilecek ağırlığı, kulaklığı her an yanınızda taşıyabilmenizi sağlıyor. Esnek yapısıyla oldukça konforlu bir kullanım sunan
  Soundcore Life Q10, nefes alabilen yumuşak pedleriyle de oldukça rahat bir deneyimi beraberinde getiriyor. Modelin kulakları
  çevreleyen geniş ped tasarımı ise kulaklarınıza baskı yapmayarak uzun süreli kullanımlarda oluşabilecek ağrıların önüne geçiyor.
  Cihazın üzerinde yer alan detaylara bakıldığında dört adet tuş göze çarpıyor. Bunlardan bir tanesi BassUp modunu devreye
  sokarken diğerleri de ses ayarı ve açma-kapama gibi işlevleri yerine getiriyor. Tuşların kolaylıkla ulaşılabilen bir noktada olması
  da ayrıca ürünün kullanımını kolaylaştıran etkenler arasında yer alıyor. Böylelikle Anker Soundcore Life Q10 dış görünüşüyle şık,
  detaylarıyla da konforlu bir kulaklık arayanlar için ideal bir model olarak öne çıkıyor.
                </p>
          </div>
          
          </div>
 
    
  </>
  ) 
}

/*

     <div classNameName="container-xl rounded bg-primary float-none">
     <img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80" classNameName={style.images + " image fluid"} alt="test"></img>

      </div>
      <img Style="height:700px;object-fit: cover; " className="w-100 m-4 mx-auto d-block" src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80" alt=""></img>
*/