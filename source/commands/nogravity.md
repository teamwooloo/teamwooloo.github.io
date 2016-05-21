title: NoGravity Tips & Tricks!
alias:
  - "/commands/nogravity.html"
  - "/nogravity.html"
  - "/nogravity/index.html"
has_download: true
---

{% youtube iTSTVZ6MMuI %}

----

NoGravity tricks in Minecraft 1.10!

Besides Polar Bears and Structure blocks, the Minecraft 1.10 update also added a small but AWESOME new feature to the game.
The NoGravityTag can now be applied to all entities, and you can do some awesome things with it!

You can try it in your own world by putting one (or more) of the following commands in a command block.

First, get yourself a command block by typing:
    /give @p command_block

Place it down, end enable "Always Active" (Instead of Redstone Ready) and set it to REPEAT (Instead of Impulse or Chain).

Then paste in one of these commands: (You can't have 2 commands in 1 command block, you can use multiple command blocks though!)

    /entitydata @e[type=Arrow] {NoGravity:1}
    /entitydata @e[type=FallingSand] {NoGravity:1}
    /entitydata @e[type=PrimedTnt] {NoGravity:1}
    /entitydata @e[type=XPOrb] {NoGravity:1}
    /entitydata @e[type=MinecartRideable] {NoGravity:1}
    /entitydata @e[type=Cow] {NoGravity:1}
    /entitydata @e[type=Chicken] {NoGravity:1}
    /entitydata @e[type=PolarBear] {NoGravity:1}
    /entitydata @e[type=Item] {NoGravity:1}

Or, if you just want EVERYTHING to be not affected by gravity, use this:

    /entitydata @e {NoGravity:1}


PLEASE NOTE: THIS MIGHT MESS WITH YOUR WORLD, DO THIS IN TEST WORLDS AND MAKE BACK-UPS IF YOU ARE GONNA USE IT IN YOUR SURVIVAL
