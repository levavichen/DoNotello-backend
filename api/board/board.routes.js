import express from 'express'

import { requireAuth } from '../../middlewares/requireAuth.middleware.js'
import { log } from '../../middlewares/logger.middleware.js'

import { getBoards, getBoardById, addBoard, updateBoard, removeBoard, addBoardMsg, removeBoardMsg } from './board.controller.js'

export const boardRoutes = express.Router()

// We can add a middleware for the entire router:
// router.use(requireAuth)

boardRoutes.get('/', log, getBoards)
boardRoutes.get('/:id', log, getBoardById)
boardRoutes.post('/', log, addBoard)
// boardRoutes.post('/', log, requireAuth, addBoard)
boardRoutes.put('/:id', updateBoard)
// boardRoutes.put('/:id', requireAuth, updateBoard)
boardRoutes.delete('/:id', removeBoard)
// boardRoutes.delete('/:id', requireAuth, removeBoard)
// boardRoutes.delete('/:id', requireAuth, requireAdmin, removeBoard)

boardRoutes.post('/:id/msg', requireAuth, addBoardMsg)
boardRoutes.delete('/:id/msg/:msgId', requireAuth, removeBoardMsg)