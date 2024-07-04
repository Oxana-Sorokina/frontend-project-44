#!/usr/bin/env node

import {rules, getUniqGame, checkAnswer} from "../src/games/even.js";
import getGameWithUser from "../src/index.js";


getGameWithUser(rules, getUniqGame, checkAnswer);