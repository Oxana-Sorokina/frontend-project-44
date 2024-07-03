#!/usr/bin/env node

import getGameWithUser from "../src/index.js";
import {rules, getUniqGame, checkAnswer} from "../src/games/prime.js";

getGameWithUser(rules, getUniqGame, checkAnswer);