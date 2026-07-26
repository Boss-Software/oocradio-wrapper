![image](https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1673222340274x294259935593612640%2FOut%2520of%2520Character%2520Radio%2520Logo%2520%2528microphone%2529.png?w=192&h=57&auto=compress&dpr=1&fit=max)

# oocradio-wrapper
An API wrapper for oocradio.com because I was bored... 2.0

# Examples
## Getting Setup
```js
const OOCRadio = require('./index.js')

const oocradio = new OOCRadio({ version: 'v1', oocAPIKey: 'YOUR_API_KEY' }) // Takes in the version of the api you want to use 
```

## Get Currently Playing Song
```js 
oocradio.nowPlaying().then(data => console.log(data))
```

<details>
    <summary>Returns</summary>
    
```json
{
  "title": "Thinking out Loud",
  "artist": "Ed Sheeran",
  "album": "x (Deluxe Edition)",
  "art": "https://broadcast.drownradio.net/api/station/oocradio_public/art/abc123.jpg",
  "started_at": "2026-05-23T14:32:00.000Z",
  "duration": 281,
  "listeners": 42
}
```
</details>

## Get Song History
```js 
oocradio.history().then(data => console.log(data))
```

<details>
<summary>Returns</summary>
    
```json
{
  "items": [
    {
      "title": "Thinking out Loud",
      "artist": "Ed Sheeran",
      "album": "x (Deluxe Edition)",
      "art": "https://...",
      "played_at": "2026-05-23T14:27:19.000Z",
      "duration": 281
    }
  ]
}
```
</details>

## Get Next Live Data
```js 
oocradio.live().then(data => console.log(data))
```
<details>
<summary>Returns</summary>
    
```json
{
  "is_live": true,
  "presenter": {
    "id": "uuid",
    "display_name": "DJ Salt",
    "avatar_url": "https://..."
  },
  "started_at": "2026-05-23T20:00:00.000Z"
}
```
</details>

## Get Schedule Data
```js 
oocradio.schedule().then(data => console.log(data))
```
<details>
<summary>Returns</summary>
    
```json
{
  "items": [
    {
      "id": "slot-uuid",
      "title": "Friday Night Drive",
      "description": "Synthwave & retro vibes.",
      "start_time": "2026-05-29T22:00:00.000Z",
      "recurring_type": "weekly",
      "presenter": {
        "id": "uuid",
        "display_name": "DJ Salt",
        "avatar_url": "https://..."
      }
    }
  ]
}
```
</details>

## Get Presenters Data
```js 
oocradio.presenters().then(data => console.log(data))
```
<details>
<summary>Returns</summary>
    
```json
{
  "items": [
    {
      "id": "uuid",
      "display_name": "DJ Salt",
      "avatar_url": "https://...",
      "bio": "Founder of OOC Radio.",
      "social_links": {
        "twitter": "https://..."
      },
      "on_air_now": true
    }
  ]
}
```
</details>

## Get A Presenters Profile
```js 
oocradio.presenterProfile("PRESENTER_PROFILE_ID").then(data => console.log(data))
```
<details>
<summary>Returns</summary>
    
```json
{
  "id": "uuid",
  "display_name": "DJ Salt",
  "avatar_url": "https://...",
  "bio": "Founder of OOC Radio.",
  "social_links": {
    "twitter": "https://..."
  },
  "on_air_now": false,
  "upcoming_shows": [
    {
      "id": "slot-uuid",
      "title": "Friday Night Drive",
      "description": "Synthwave.",
      "start_time": "2026-05-29T22:00:00.000Z",
      "recurring_type": "weekly"
    }
  ]
}
```
</details>

## Get Trending Songs Data
```js 
oocradio.trending().then(data => console.log(data))
```
<details>
<summary>Returns</summary>
    
```json
{
  "items": [
    {
      "title": "Thinking out Loud",
      "artist": "Ed Sheeran",
      "album": "x (Deluxe Edition)",
      "album_art": "https://i.scdn.co/image/...",
      "spotify_track_id": "34gCuhDGsG4...",
      "likes": 42
    }
  ]
}
```
</details>

# Credits
- [@Hyperz](https://bosssoftware.net) *Writing this extremely simple wrapper.*
- [@Shawn E.](https://github.com/Shawn-E) *Rewriting to change to a constructor*

