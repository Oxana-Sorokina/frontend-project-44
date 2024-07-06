#!/usr/bin/env node

import getGameWithUser from '../src/index.js';
import { rules, getUniqGame, checkAnswer } from '../src/games/gcd.js';

getGameWithUser(rules, getUniqGame, checkAnswer);
