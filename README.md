Kawinin Apps - FE Personal Project
## Getting Started

First, setup environment variable :
```bash
# kawinin apps backend url
NEXT_PUBLIC_API=http://localhost:3000/api/v1/wedding/12
# base imageUrl
NEXT_PUBLIC_IMAGES=http://localhost:3000/images/
```

Second, run the development server
```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Use your own data
```json
{
  "title": "Tamako & Mochizou",
  "weddingPhoto": "https://rojokundo.xyz/kawinin-apps/wedding-photos.jpg",
  "grooms": {
    "name": "Mochizou Mochimatzui",
    "nick": "Mochizou",
    "fatherName": "Minato Namikaze",
    "motherName": "Kushina Uzumaki",
    "ig": "affmakarim",
    "photos": "https://rojokundo.xyz/kawinin-apps/grooms-1.jpg"
  },
  "brides": {
    "name": "Tamako Kitashirakawa",
    "nick": "Tamako",
    "fatherName": "Sasuke Uchiha",
    "motherName": "Haruno Sakura",
    "ig": "9gag",
    "photos": "https://rojokundo.xyz/kawinin-apps/brides-1.jpg"

  },
  "weddingCeremony": {
    "dates": {
      "day": "Senin",
      "date": "08",
      "month": "January",
      "year": "2022"
    },
    "time": "Pukul 08.00 - 09.00 WIB",
    "address": "Jl Dr Sam Ratulangi 122, Sulawesi Selatan",
    "addressLocation": "Saung Wedang Rempah Berkah (WRB)"
  },
  "weddingReception": {
    "dates": {
      "day": "Senin",
      "date": "08",
      "month": "January",
      "year": "2022"
    },
    "time": "Pukul 08.00 - 09.00 WIB",
    "address": "Jl Dr Sam Ratulangi 122, Sulawesi Selatan",
    "addressLocation": "Saung Wedang Rempah Berkah (WRB)"
  },
  "galleries": [
    {
      "imageUrl": "https://rojokundo.xyz/kawinin-apps/tamako-galleries-1.jpg"
    },
    {
      "imageUrl": "https://rojokundo.xyz/kawinin-apps/tamako-galleries-2.jpg"
    },
    {
      "imageUrl": "https://rojokundo.xyz/kawinin-apps/tamako-galleries-3.jpg"
    },
    {
      "imageUrl": "https://rojokundo.xyz/kawinin-apps/tamako-galleries-4.jpg"
    }
  ]
}
```
## Screenshot
### `Modal`
<img src="https://user-images.githubusercontent.com/28927592/194084420-7d5c5804-1085-4f15-8219-21d77741839c.jpg" alt="Landing" width="300">

### `Main`
<img src="https://user-images.githubusercontent.com/28927592/194084858-a07fe40a-dac7-4f20-ab10-d8c6e17aebf4.jpg" alt="Landing" width="300">

### `Main-2`
<img src="https://user-images.githubusercontent.com/28927592/194084979-233bb22b-2c66-48c9-bd9f-69f4c9fcf0b3.jpg" alt="Landing" width="300">
