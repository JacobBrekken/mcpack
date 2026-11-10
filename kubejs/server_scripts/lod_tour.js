// Neon City: /lodtour — AFK chunk tour so Distant Horizons (client-side) can
// record LODs for the whole pregenerated map. Ops only.
//
//   /lodtour start <radius> [centerX] [centerZ] [stepBlocks] [delaySeconds]
//   /lodtour stop
//   /lodtour status
//
// It puts you in spectator, then teleports you across the map in a snake
// pattern. At each stop the server sends you the nearby chunks, and your DH
// saves them as LODs. Only already-generated chunks are visited inside the
// world border, so nothing new is generated.

let LT = { running: false, player: null, stops: [], i: 0, delay: 160, prevMode: "survival" }

function ltBuild(radius, cx, cz, step) {
  let stops = []
  let row = 0
  for (let z = cz - radius; z <= cz + radius; z += step) {
    let xs = []
    for (let x = cx - radius; x <= cx + radius; x += step) xs.push(x)
    if (row % 2 == 1) xs.reverse()
    xs.forEach(x => stops.push([x, z]))
    row++
  }
  return stops
}

function ltNext(server) {
  if (!LT.running) return
  if (LT.i >= LT.stops.length) {
    server.runCommandSilent(`gamemode ${LT.prevMode} ${LT.player}`)
    server.runCommandSilent(`tellraw ${LT.player} {"text":"LOD tour finished.","color":"green"}`)
    LT.running = false
    return
  }
  let s = LT.stops[LT.i]
  server.runCommandSilent(`execute in minecraft:overworld run tp ${LT.player} ${s[0]} 220 ${s[1]}`)
  if (LT.i % 25 == 0) {
    let pct = Math.floor(LT.i * 100 / LT.stops.length)
    server.runCommandSilent(`title ${LT.player} actionbar {"text":"LOD tour ${LT.i}/${LT.stops.length} (${pct}%)","color":"aqua"}`)
  }
  LT.i++
  server.scheduleInTicks(LT.delay, () => ltNext(server))
}

ServerEvents.basicPublicCommand("lodtour", event => {
  let p = event.player
  if (p == null) return event.cancel("Players only")
  if (!p.hasPermissions(2)) return event.cancel("Ops only")

  let args = String(event.input || "").trim().split(/\s+/)
  let sub = args[0]

  if (sub == "stop") {
    LT.running = false
    event.server.runCommandSilent(`gamemode ${LT.prevMode} ${p.username}`)
    return event.respond(Text.yellow(`LOD tour stopped at stop ${LT.i}/${LT.stops.length}.`))
  }
  if (sub == "status") {
    return event.respond(Text.aqua(LT.running ? `Running: ${LT.i}/${LT.stops.length}` : "Not running"))
  }
  if (sub != "start" || args.length < 2) {
    return event.respond(Text.gray("/lodtour start <radius> [centerX] [centerZ] [stepBlocks] [delaySeconds]  |  /lodtour stop  |  /lodtour status"))
  }
  if (LT.running) return event.respond(Text.red("Already running. /lodtour stop first."))

  let radius = parseInt(args[1])
  let cx = args.length > 2 ? parseInt(args[2]) : 0
  let cz = args.length > 3 ? parseInt(args[3]) : 0
  let step = args.length > 4 ? parseInt(args[4]) : 256
  let delaySec = args.length > 5 ? parseInt(args[5]) : 8

  LT.player = p.username
  LT.prevMode = p.isCreative() ? "creative" : "survival"
  LT.stops = ltBuild(radius, cx, cz, step)
  LT.i = 0
  LT.delay = delaySec * 20
  LT.running = true

  let mins = Math.ceil(LT.stops.length * delaySec / 60)
  event.respond(Text.green(`LOD tour: ${LT.stops.length} stops, about ${mins} min. Stay logged in. /lodtour stop to cancel.`))
  event.server.runCommandSilent(`gamemode spectator ${LT.player}`)
  ltNext(event.server)
})
