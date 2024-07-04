#!/usr/bin/env node

import getGameWithUser from "../src/index.js";
import { rules, getUniqGame, checkAnswer } from "../src/games/even.js";

getGameWithUser(rules, getUniqGame, checkAnswer);