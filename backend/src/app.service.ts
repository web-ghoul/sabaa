import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    const treasureMap = {
      message: "🗺️ Welcome to the Treasure Hunt API! 🏴‍☠️",
      clues: [
        "🌴 Follow the path of 'api/' to start the journey.",
        "🦜 Look out for the 'X marks the spot' at each endpoint!",
        "⚓ More treasures await as you navigate the API seas!",
      ],
      disclaimer: "Remember, only true adventurers can unlock the secrets...",
      documentation: "/api-docs",
    };
    return treasureMap;
  }
}
