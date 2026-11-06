// Neon City server touches: welcome messages, /discord, /rules, /guide
// Runs on the server only (kubejs/server_scripts). Edit the text below freely.

const NC_DISCORD = "https://discord.gg/kHqgDYJbR4"
const NC_GUIDE = "https://github.com/JacobBrekken/mcpack#readme"

const NC_RULES = [
  "Be kind. Everyone here is a friend of a friend.",
  "No griefing or stealing. Ask before using someone else's stuff.",
  "Ask before building right next to someone else's base.",
  "Keep farms and machines reasonable. Huge lag machines hurt everyone.",
  "Found a bug or exploit? Report it in Discord, don't abuse it.",
  "Have fun. Ask questions. Nobody knows all 550 mods."
]

function ncLink(label, url) {
  return Text.aqua(label).underlined().clickOpenUrl(url).hover(Text.of("Open " + url))
}

function ncSendRules(player) {
  player.tell(Text.gold("===== ").append(Text.yellow("Neon City Rules").bold()).append(Text.gold(" =====")))
  NC_RULES.forEach((rule, i) => {
    player.tell(Text.gold((i + 1) + ". ").append(Text.white(rule)))
  })
}

PlayerEvents.loggedIn(event => {
  const player = event.player
  const data = player.persistentData
  const name = player.username

  if (!data.getBoolean("neoncity_welcomed")) {
    data.putBoolean("neoncity_welcomed", true)

    player.tell(Text.of(""))
    player.tell(Text.aqua("Welcome to ").append(Text.lightPurple("Neon City").bold()).append(Text.aqua(", " + name + "!")))
    player.tell(Text.gray("All the Mods 10 plus extras. Start with the quest book in your inventory."))
    player.tell(Text.gray("Discord: ").append(ncLink("join here", NC_DISCORD)).append(Text.gray("  |  Setup guide: ")).append(ncLink("open", NC_GUIDE)))
    player.tell(Text.gray("Type ").append(Text.yellow("/rules").clickRunCommand("/rules").hover(Text.of("Show the rules"))).append(Text.gray(" to read the server rules.")))
    player.tell(Text.of(""))

    event.server.tell(Text.lightPurple(name).append(Text.aqua(" just moved into Neon City for the first time. Say hi!")))
  } else {
    player.tell(Text.aqua("Welcome back to ").append(Text.lightPurple("Neon City").bold()).append(Text.aqua(", " + name + ".")))
    player.tell(Text.gray("/rules  /discord  /guide"))
  }
})

ServerEvents.basicPublicCommand("rules", event => {
  if (event.player == null) return event.cancel("Players only")
  ncSendRules(event.player)
})

ServerEvents.basicPublicCommand("discord", event => {
  if (event.player == null) return event.cancel("Players only")
  event.player.tell(Text.gray("Neon City Discord: ").append(ncLink(NC_DISCORD, NC_DISCORD)))
})

ServerEvents.basicPublicCommand("guide", event => {
  if (event.player == null) return event.cancel("Players only")
  event.player.tell(Text.gray("Setup guide and help: ").append(ncLink("open the guide", NC_GUIDE)))
})
