export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("POST only");
  }

  const body = await req.text();

  // body එකෙන් player_id extract කරනවා (simple way)
  const params = new URLSearchParams(body);
  const playerId = params.get("player_id");

  const response = await fetch(
    "https://www.novatopup.com/api/verify_dynamic",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Origin": "https://www.novatopup.com",
        "Referer": `https://www.novatopup.com/reseller/game/1?player_id=${playerId}`,
        "User-Agent": "Mozilla/5.0"
      },
      body
    }
  );

  const data = await response.text();
  res.status(200).send(data);
}
