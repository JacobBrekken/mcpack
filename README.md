# Neon City — Player Setup Guide

Modded Minecraft server running **All the Mods 10** (Minecraft 1.21.1, NeoForge 21.1.251)
plus about 40 extra mods.

Everything you need to install the pack and get on the server. Budget about 30 minutes,
most of it waiting on a download.

This repo holds packwiz metadata only — no mod files. Mods download from CurseForge and
Modrinth automatically on launch.

---

## Before you start

You need three things, and two of them you probably already have.

- **A paid Minecraft Java Edition account.** Not Bedrock, not the Windows 10/11 Microsoft
  Store version. If you bought Minecraft on a console or phone, that won't work here.
- **Prism Launcher** — free, from [prismlauncher.org](https://prismlauncher.org). This
  replaces the normal Minecraft launcher. You'll still sign in with the same Microsoft account.
- **About 8 GB of free disk space** and a reasonably stable connection. The first launch
  downloads around 3 GB.

You do *not* need to install Java separately, buy anything, or download mods yourself.
Prism handles Java, and the pack downloads its own mods automatically.

## Install

1. **Download and install Prism Launcher** from [prismlauncher.org](https://prismlauncher.org).
   Take the normal Windows installer. Run it, click through, done.
2. **Open Prism and sign in.** It'll ask for a Microsoft account on first run — same one you
   use for Minecraft. If it asks you to open a browser and type a code, that's normal.
3. **Download the pack zip** from the link in Discord. Save it anywhere you'll find it again.
   Don't unzip it.
4. **In Prism, click "Add Instance"** (top left), then the **"Import from zip"** tab.
5. **Browse to the zip you downloaded**, select it, click OK.
6. Wait a few seconds. An instance called **Neon City** appears in the main window.
7. **Double-click it to launch.**

## First launch — what's normal

The first time you hit play, a few things happen that look alarming and aren't.

**A download window appears and sits there for a long time.** It's pulling roughly 530 mods,
about 3 GB. Ten to twenty minutes is normal on a decent connection. Let it finish.

**Then a warning pops up: "You've made too many changes to the modpack!"** Tick
**Don't show again** and click **OK**. This is the pack's own crash helper noticing that our
server runs extra mods on top of the base pack. That's intentional. Everyone sees this once.

**Then Minecraft loads, slowly.** First launch can take 3–5 minutes to reach the title screen
because it's building caches. Later launches are much faster, usually under a minute.

If it gets to the Minecraft title screen, you're done. Everything worked.

## Joining the server

Click **Multiplayer**. The server should already be in your list — it ships with the pack.

If it isn't there, click **Add Server** and enter:

| Field | Value |
| --- | --- |
| Server Name | anything you like |
| Server Address | `cypressed.duckdns.org:25565` |

**You have to be whitelisted before you can join.** Send Jacob your exact Minecraft username —
capitalisation matters — and he'll add you. Without it you'll get kicked with
"You are not white-listed on this server."

If the server shows a red X or "Connection refused," it's probably just restarting. It reboots
itself once a day around 5am for backups. Wait a couple of minutes and refresh.

## Optional mods

During that first download you'll see a checklist of optional mods. These are purely visual —
nicer particles, 3D item models, animations, fancy grass. None of them change gameplay, and
none affect whether you can join.

- **On a good gaming PC:** tick whatever looks appealing.
- **On a laptop, integrated graphics, or anything older:** tick nothing. The game runs fine
  without them and you'll get noticeably better frames.

Unsure? Skip them all for now. You can turn them on later in Prism under
**Edit Instance → Mods**, once you know how the game runs on your machine.

The mods that actually matter — the ones that add content and keep you compatible with the
server — are not optional and install automatically. You can't accidentally break your
connection by unticking things here.

## Making it look good

Shaders and resource packs ship with the pack but are **off by default**, so nobody gets an
unexpected framerate hit. Turn them on only if your PC can take it.

**Shaders** — Options → Video Settings → Shader Packs. Pick one of the
**Complementary + EuphoriaPatches** entries (the patched ones, not the plain ones). Unbound is
cinematic and realistic; Reimagined stays closer to vanilla's look.

Shaders are expensive. If your frames tank, set it back to "None" in the same menu — nothing
is permanent.

**Resource packs** — Options → Resource Packs. Anything that came with the pack sits on the
left; drag it to the right to enable it.

None of this affects the server or other players. It's purely how the game looks on your screen.

## If something goes wrong

| What you see | What to do |
| --- | --- |
| "You are not white-listed on this server" | Send Jacob your exact username. Capitalisation matters. |
| Download window errors on some files | Close Minecraft and launch again. It resumes and usually clears itself. |
| "Too many changes to the modpack" warning | Normal. Tick *Don't show again*, click OK. |
| Game crashes right after the loading bar | Screenshot the error window and post it in Discord. Don't delete the instance. |
| Runs but the framerate is bad | Untick the optional visual mods, turn shaders off, lower render distance to 8 in Video Settings. |
| "Connection refused" or a red X on the server | It's restarting. Wait two minutes and refresh. |
| Out of memory / crash after playing a while | Prism → Edit Instance → Settings → Memory. Set maximum to 6144 MB if you have 16 GB of RAM. |

If none of that helps, post in Discord with a screenshot and say what you were doing.
Don't reinstall — it almost never helps and you'll lose your settings.

## Good to know

**There's a world border** about 4,900 blocks out from spawn in every direction. You'll hit an
invisible wall. That's deliberate — everything inside it is pre-generated so nobody gets lag
from new terrain loading. It's plenty of room, and it can be pushed out later if we need it.

The Nether has its own border at 650 blocks. That sounds small, but Nether travel covers eight
times the distance — 650 there lines up with the overworld border.

**The world is backed up daily.** If something gets griefed or a base gets eaten by a bug, it's
recoverable. Tell Jacob sooner rather than later — backups only go back a few days.

**The server restarts itself once a day**, early morning, for those backups. If you're on at
5am you'll get kicked. It comes back in a couple of minutes.

**Updates reach you automatically.** When mods get added or updated, you just launch and the
pack syncs itself. No re-downloading the zip, no reinstalling. If an update makes the pack and
server disagree, you'll be told to relaunch — that's the fix.

**It's a big pack.** Around 530 mods. If you've not played modded before, open your inventory
and look for the quest book or the JEI panel on the right — that's how you find out what
anything does. Ask in Discord; nobody here knows all of it either.
