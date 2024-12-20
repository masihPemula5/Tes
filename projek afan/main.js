

    const backToTopBtn = document.getElementById("backToTopBtn");

    window.onscroll = function () {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 200) {
            backToTopBtn.style.display = "block"; 
        } else {
            backToTopBtn.style.display = "none"; 
        }
    };
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth" 
        });
    }


    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const url = `https://wa.me/6285885497377?text=Halo%20saya%20${name}%20dari%20${email}%20dengan%20pesan%3A%20${message}`;
        window.open(url, '_blank');
    });

    // link game

    const apps = [
        {
          name: "Mobile Legend",
          image: "https://downloadr2.apkmirror.com/wp-content/uploads/2024/05/42/6632d219632fb_com.mobile.legends.png",
          deepLink: "mobilelegends://",
          playStoreLink: "https://play.google.com/store/apps/details?id=com.mobile.legends&pcampaignid=web_share"
        },
        {
          name: "Game 2",
          image: "https://i.pinimg.com/originals/9d/de/53/9dde5343f7e8740b4efe341e95fa86d7.jpg",
          deepLink: "://",
          playStoreLink: "https://play.google.com/store/apps/details?id=com.game2"
        },
        {
          name: "PUBG",
          image: "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1640585063/knpecbcury1obxhkqkvc.jpg",
          deepLink: "pubgmobile://",
          playStoreLink: "https://play.google.com/store/apps/details?id=com.tencent.ig&pcampaignid=web_share"
        }
      ];
      
      const container = document.getElementById("appContainer");

apps.forEach(app => {
  const appElement = document.createElement("div");
  appElement.classList.add("app");

  appElement.innerHTML = `
    <img src="${app.image}" alt="${app.name}" style="width:200px;height:auto;cursor:pointer;">
    <p>${app.name}</p>
  `;

  // Tambahkan event click untuk setiap aplikasi
  appElement.addEventListener("click", () => {
    // Redirect ke deep link
    window.location.href = app.deepLink;

    // Fallback ke Play Store jika aplikasi tidak terinstal
    setTimeout(() => {
      window.location.href = app.playStoreLink;
    }, 1000);
  });

  container.appendChild(appElement);
});
