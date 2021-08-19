setInterval(() => {
    const d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    h = (30*h) + (m/2) + (s/120);
    m = 6*m + (s/10);
    s = 6*s;
    hour.style.transform=(`rotate(${h}deg)`);
    minute.style.transform=(`rotate(${m}deg)`);
    second.style.transform=(`rotate(${s}deg)`);
}, 1000);;