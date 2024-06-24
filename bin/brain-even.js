#!/usr/bin/env node

import {rules, generateQuestion, getUniqGame, checkAnswer} from "../src/games/even.js";

getGameWithUser(rules, generateQuestion, getUniqGame, checkAnswer);