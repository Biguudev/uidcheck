export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Only POST allowed");
  }

  try {
    const body = await req.text();

    const response = await fetch(
      "https://www.novatopup.com/reseller/game/1",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Origin": "https://www.novatopup.com",
          "Referer": "https://www.novatopup.com/reseller/game/1",
          "User-Agent": "Mozilla/5.0"
        },
        body
      }
    );

    const data = await response.text();
    res.status(200).send(data);

  } catch (err) {
    res.status(500).send("Server error");
  }
}
