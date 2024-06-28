#!/usr/bin/env node

import getGameWithUser from "../src/index.js";
import {rules, generateQuestion, getUniqGame, checkAnswer} from "../src/games/gcd.js";

getGameWithUser(rules, generateQuestion, getUniqGame, checkAnswer);