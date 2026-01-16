export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send("POST only");
    return;
  }

  const body = await req.body; // encoded
  const response = await fetch(
    "https://www.novatopup.com/api/verify_dynamic",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body
    }
  );
  const json = await response.json();
  res.status(200).json(json);
}
