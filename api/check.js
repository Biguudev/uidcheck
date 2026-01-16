js
export default function handler(req, res) {
  const { game_id, player_id } = req.body;
  res.status(200).json({
    message: 'Request received',
    game_id,
    player_id
  });
}