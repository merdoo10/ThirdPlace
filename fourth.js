const sozalani  = document.getElementById("soz-alani");
const buton = document.getElementById("degistir-butonu");
const sozler = [
    "Kapıdan içeri girdiğin an, omuzlarındaki tüm 'yapmalıyım'ları bir kenara bırak. Burası sadece nefes alman ve olduğun gibi kalman için var.",
    "Dünya dışarıda hızla dönmeye devam edebilir; ama bu masada zaman senin ritmine göre akar. Acele etme, sadece anın tadını çıkar.",
    "Burası evinin sorumlulukları ile işinin zorunlulukları arasında bir köprü. Senden hiçbir şey beklenmeyen, sadece var olmanın yettiği o güvenli liman.",
    "Kalabalığın içinde ama tamamen kendi dünyanda... Bir fincan kahvenin kokusunda, zihninin gürültüsünü susturabileceğin o huzurlu köşe burası.",
    "Bedenin bir yerde durmaya, ruhun ise sadece dinlenmeye ihtiyaç duyar. Kendine bu molayı ver; çünkü burada geçirdiğin zaman kayıp değil, kendine dönüş yolculuğudur."
];
buton.addEventListener("click",function(){
    const rastgeleindex = Math.floor(Math.random() * sozler.length );
    const yenisoz = sozler[rastgeleindex];
    sozalani.textContent = yenisoz;
});
const sayac = document.getElementById("sayac");
const mola = document.getElementById("mola");
let id;
mola.addEventListener("click", function () {
    clearInterval(id);
    let kalan = 300;
    id = setInterval(function () {
        kalan--;
        if (kalan <= 0) {
            clearInterval(id);
            sayac.textContent = "Bitti!";
            return;
        }
        sayac.textContent = String(Math.floor(kalan / 60)).padStart(2, "0") + ":" + String(kalan % 60).padStart(2, "0");
    }, 1000);
});
const oneriAlani = document.getElementById("oneri");

const oneriler = {
    iyi: "Bu enerjiyi kullan: kısa bir yürüyüşe çık ya da sevdiğin birine mesaj at.",
    normal: "Bir kahve al, telefonu kenara koy ve 10 dakika pencereden dışarı bak.",
    kotu: "Acele etme. Yukarıdaki nefes animasyonuyla 2 dakika nefes al, sonra 5 dk mola sayacını başlat."
};

function oneriGoster() {
    oneriAlani.textContent = oneriler[mod.value] || oneriler.normal;
}

mod.addEventListener("change", oneriGoster);
oneriGoster(); 