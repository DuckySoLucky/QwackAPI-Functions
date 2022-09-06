# QwackAPI

> Huge Credits to MattTheCuber and Altpapier for letting me continue this as my own project

This API was made using the [qwackAPI](https://github.com/DuckySoLucky/QwackAPI)

## What does QwackAPI have but SkyHelper doesn't?

- more details about player's pets (lore, abilities, perks, skin url etc..) <br/>
- `auctionHouse` Endpoint <br/>
- More coming soon.. <br/>

# Installing

### Requirements:

Node.js >= 14

### Setup:

1. Clone the repository using `git clone https://github.com/DuckySoLucky/QwackAPI`

2. Install all dependencies using NPM by going into the `QwackAPI` folder `npm install`

3. Set up the [Configuration](#Configuration)

4. Start the API using `node .` or `npm start`

### Configuration

You will have to set the Hypixel API key by replacing the `HYPIXEL_API_KEY` inside of the config.

# Functions:

### `getAuctionHouse(options = {lore: lore, name: name, rarity: rarity, category: category, bin: bin, lowest_price: lowest_price, highest_price: highest_price, user: user })`

### `getAuctions(user)`

### `getBingo(user)`

### `getSkyblockCalendar()`

### `getFetchur()`

### `getItems(user)`

### `getItems(user, profile)`

### `getLatestProfile(user)`

### `getProfile(user, profile)`

### `getProfileParsed(user, profile)`

### `getProfiles(user)`

### `getProfilesParsed(user)`

| Parameter     | Description                                |
| ------------- | ------------------------------------------ |
| user          | This can be the UUID of a user or the name |
| profile       | This can be the users profile id or name   |
| name          | Name of the item                           |
| lore          | Lore of the item                           |
| rarity        | Rarity of the item                         |
| bin           | Bin (true or false)                        |
| category      | Category of them item                      |
| lowest_price  | Lowest price of the item                   |
| highest_price | Highest price of the item                  |

# Features:

| Feature        | Description                                                             | Endpoint               |
| -------------- | ----------------------------------------------------------------------- | ---------------------- |
| auctions       | Get a player's active and ended auctions and information about them     | auctions               |
| auctionhouse   | Get currently active auctions and details about them                    | auctionhouse           |
| bingo          | Get a player's bingo profile and progress                               | bingo                  |
| calendar       | Get Skyblock's calendar including all events                            | calendar               |
| items          | Check what item fetchur wants today including description of the item   | fetchur                |
| skills         | Get a player's skills                                                   | profile/profiles       |
| networth       | Get a player's networth including all information about the calculation | profile/profiles       |
| weight         | Get a player's Senither and Lily weight                                 | profile/profiles       |
| dungeons       | Get a player's dungeons stats                                           | profile/profiles       |
| bestiary       | Get a player's bestiary                                                 | profile/profiles       |
| crimson        | Get player's Crimson Isle data                                          | profile/profiles       |
| trophy_fish    | Get player's trophy fishing caches and information                      | profile/profiles       |
| enchanting     | Get a player's enchanting stats including experimentations              | profile/profiles       |
| farming        | Get a player's farming stats including Jacob's contests                 | profile/profiles       |
| mining         | Get a player's mining stats including HotM tree and forge               | profile/profiles       |
| slayer         | Get a player's slayer stats                                             | profile/profiles       |
| milestones     | Get a player's pet milestones (rock / dolphin)                          | profile/profiles       |
| missing        | Get a player's missing talismans including their price                  | profile/profiles       |
| kills          | Get a player's most killed mobs                                         | profile/profiles       |
| deaths         | Get a player's deaths                                                   | profile/profiles       |
| armor          | Get a player's armor                                                    | profile/profiles/items |
| equipment      | Get a player's equipment                                                | profile/profiles/items |
| pets           | Get a player's pets                                                     | profile/profiles       |
| talismans      | Get a player's talismans                                                | profile/profiles       |
| collections    | Get a player's collections                                              | profile/profiles       |
| minions        | Get a player's minions                                                  | profile/profiles       |
| cakebag        | Get a player's new year cake editions                                   | profile/profiles       |
| backpack       | Get player's backpacks                                                  | items                  |
| quiver         | Get player's quiver                                                     | items                  |
| talisman bag   | Get player's talisman bag                                               | items                  |
| backpack icons | Get data about player's backpacks                                       | items                  |
| ender chest    | Get player's ender chest                                                | items                  |
| potion bag     | Get player's potion bag                                                 | items                  |
| fishing bag    | Get player's fishing bag                                                | items                  |
| personal vault | Get player's personal vault                                             | items                  |
| inventory      | Get player's inventory                                                  | items                  |
| candy bag      | Get player's candy bag                                                  | items                  |

# Credits:

- https://github.com/Altpapier

- https://github.com/MattTheCuber

- https://github.com/zt3h/MaroAPI

- https://github.com/Senither/hypixel-skyblock-facade

- https://github.com/SkyCryptWebsite/SkyCrypt

- https://github.com/slothpixel/core/
