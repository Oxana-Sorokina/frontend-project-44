#!/usr/bin/env node

import {rules, generateQuestion, getUniqGame, checkAnswer} from "../src/games/calculate.js";

getGameWithUser(rules, generateQuestion, getUniqGame, checkAnswer);