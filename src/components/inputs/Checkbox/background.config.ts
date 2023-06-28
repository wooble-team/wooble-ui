/* eslint-disable max-len */
import { Colors } from '@itswooble/colors';

const startsWith = 'data:image/svg+xml;base64,';

const BACKGROUND: Record<Colors, string> = {
	white: startsWith + 'PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjIzIiBoZWlnaHQ9IjIzIiByeD0iMyIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOS4yNzU1IDguMDE1NjhDMTkuNTk0OCA4LjMwNTkyIDE5LjYxODMgOC44MDAwMyAxOS4zMjgxIDkuMTE5MjlMMTAuOTM3NCAxOC4zNDg5TDUuNjcxOTMgMTIuNTU2OUM1LjM4MTY5IDEyLjIzNzYgNS40MDUyMiAxMS43NDM1IDUuNzI0NDggMTEuNDUzM0M2LjA0Mzc1IDExLjE2MzEgNi41Mzc4NSAxMS4xODY2IDYuODI4MDkgMTEuNTA1OUwxMC45Mzc0IDE2LjAyNjFMMTguMTcxOSA4LjA2ODIyQzE4LjQ2MjIgNy43NDg5NiAxOC45NTYzIDcuNzI1NDQgMTkuMjc1NSA4LjAxNTY4WiIgZmlsbD0iYmxhY2siLz4KPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjIzIiBoZWlnaHQ9IjIzIiByeD0iMyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo=',
	black: startsWith + 'PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjIzIiBoZWlnaHQ9IjIzIiByeD0iMyIgZmlsbD0iYmxhY2siLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOS4yNzU1IDguMDE1NjhDMTkuNTk0OCA4LjMwNTkyIDE5LjYxODMgOC44MDAwMyAxOS4zMjgxIDkuMTE5MjlMMTAuOTM3NCAxOC4zNDg5TDUuNjcxOTMgMTIuNTU2OUM1LjM4MTY5IDEyLjIzNzYgNS40MDUyMiAxMS43NDM1IDUuNzI0NDggMTEuNDUzM0M2LjA0Mzc1IDExLjE2MzEgNi41Mzc4NSAxMS4xODY2IDYuODI4MDkgMTEuNTA1OUwxMC45Mzc0IDE2LjAyNjFMMTguMTcxOSA4LjA2ODIyQzE4LjQ2MjIgNy43NDg5NiAxOC45NTYzIDcuNzI1NDQgMTkuMjc1NSA4LjAxNTY4WiIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjIzIiBoZWlnaHQ9IjIzIiByeD0iMyIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo=',

	gray100: startsWith + 'PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjIzIiBoZWlnaHQ9IjIzIiByeD0iMyIgZmlsbD0iI0Y5RjlGOSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE5LjI3NTUgOC4wMTU2OEMxOS41OTQ4IDguMzA1OTIgMTkuNjE4MyA4LjgwMDAzIDE5LjMyODEgOS4xMTkyOUwxMC45Mzc0IDE4LjM0ODlMNS42NzE5MyAxMi41NTY5QzUuMzgxNjkgMTIuMjM3NiA1LjQwNTIyIDExLjc0MzUgNS43MjQ0OCAxMS40NTMzQzYuMDQzNzUgMTEuMTYzMSA2LjUzNzg1IDExLjE4NjYgNi44MjgwOSAxMS41MDU5TDEwLjkzNzQgMTYuMDI2MUwxOC4xNzE5IDguMDY4MjJDMTguNDYyMiA3Ljc0ODk2IDE4Ljk1NjMgNy43MjU0NCAxOS4yNzU1IDguMDE1NjhaIiBmaWxsPSJibGFjayIvPgo8cmVjdCB4PSIxIiB5PSIxIiB3aWR0aD0iMjMiIGhlaWdodD0iMjMiIHJ4PSIzIiBzdHJva2U9IiNGOUY5RjkiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4K',
	gray200: startsWith + 'PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjIzIiBoZWlnaHQ9IjIzIiByeD0iMyIgZmlsbD0iI0YyRjJGMiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE5LjI3NTUgOC4wMTU2OEMxOS41OTQ4IDguMzA1OTIgMTkuNjE4MyA4LjgwMDAzIDE5LjMyODEgOS4xMTkyOUwxMC45Mzc0IDE4LjM0ODlMNS42NzE5MyAxMi41NTY5QzUuMzgxNjkgMTIuMjM3NiA1LjQwNTIyIDExLjc0MzUgNS43MjQ0OCAxMS40NTMzQzYuMDQzNzUgMTEuMTYzMSA2LjUzNzg1IDExLjE4NjYgNi44MjgwOSAxMS41MDU5TDEwLjkzNzQgMTYuMDI2MUwxOC4xNzE5IDguMDY4MjJDMTguNDYyMiA3Ljc0ODk2IDE4Ljk1NjMgNy43MjU0NCAxOS4yNzU1IDguMDE1NjhaIiBmaWxsPSJibGFjayIvPgo8cmVjdCB4PSIxIiB5PSIxIiB3aWR0aD0iMjMiIGhlaWdodD0iMjMiIHJ4PSIzIiBzdHJva2U9IiNGMkYyRjIiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4K',
	gray300: startsWith + 'PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjIzIiBoZWlnaHQ9IjIzIiByeD0iMyIgZmlsbD0iI0UwRTBFMCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE5LjI3NTUgOC4wMTU2OEMxOS41OTQ4IDguMzA1OTIgMTkuNjE4MyA4LjgwMDAzIDE5LjMyODEgOS4xMTkyOUwxMC45Mzc0IDE4LjM0ODlMNS42NzE5MyAxMi41NTY5QzUuMzgxNjkgMTIuMjM3NiA1LjQwNTIyIDExLjc0MzUgNS43MjQ0OCAxMS40NTMzQzYuMDQzNzUgMTEuMTYzMSA2LjUzNzg1IDExLjE4NjYgNi44MjgwOSAxMS41MDU5TDEwLjkzNzQgMTYuMDI2MUwxOC4xNzE5IDguMDY4MjJDMTguNDYyMiA3Ljc0ODk2IDE4Ljk1NjMgNy43MjU0NCAxOS4yNzU1IDguMDE1NjhaIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIxIiB5PSIxIiB3aWR0aD0iMjMiIGhlaWdodD0iMjMiIHJ4PSIzIiBzdHJva2U9IiNFMEUwRTAiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4K',
	gray400: startsWith + 'PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjIzIiBoZWlnaHQ9IjIzIiByeD0iMyIgZmlsbD0iI0JEQkRCRCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE5LjI3NTUgOC4wMTU2OEMxOS41OTQ4IDguMzA1OTIgMTkuNjE4MyA4LjgwMDAzIDE5LjMyODEgOS4xMTkyOUwxMC45Mzc0IDE4LjM0ODlMNS42NzE5MyAxMi41NTY5QzUuMzgxNjkgMTIuMjM3NiA1LjQwNTIyIDExLjc0MzUgNS43MjQ0OCAxMS40NTMzQzYuMDQzNzUgMTEuMTYzMSA2LjUzNzg1IDExLjE4NjYgNi44MjgwOSAxMS41MDU5TDEwLjkzNzQgMTYuMDI2MUwxOC4xNzE5IDguMDY4MjJDMTguNDYyMiA3Ljc0ODk2IDE4Ljk1NjMgNy43MjU0NCAxOS4yNzU1IDguMDE1NjhaIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIxIiB5PSIxIiB3aWR0aD0iMjMiIGhlaWdodD0iMjMiIHJ4PSIzIiBzdHJva2U9IiNCREJEQkQiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4K',
	gray500: startsWith + 'PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjIzIiBoZWlnaHQ9IjIzIiByeD0iMyIgZmlsbD0iIzgyODI4MiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE5LjI3NTUgOC4wMTU2OEMxOS41OTQ4IDguMzA1OTIgMTkuNjE4MyA4LjgwMDAzIDE5LjMyODEgOS4xMTkyOUwxMC45Mzc0IDE4LjM0ODlMNS42NzE5MyAxMi41NTY5QzUuMzgxNjkgMTIuMjM3NiA1LjQwNTIyIDExLjc0MzUgNS43MjQ0OCAxMS40NTMzQzYuMDQzNzUgMTEuMTYzMSA2LjUzNzg1IDExLjE4NjYgNi44MjgwOSAxMS41MDU5TDEwLjkzNzQgMTYuMDI2MUwxOC4xNzE5IDguMDY4MjJDMTguNDYyMiA3Ljc0ODk2IDE4Ljk1NjMgNy43MjU0NCAxOS4yNzU1IDguMDE1NjhaIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIxIiB5PSIxIiB3aWR0aD0iMjMiIGhlaWdodD0iMjMiIHJ4PSIzIiBzdHJva2U9IiM4MjgyODIiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4K',
	gray600: startsWith + 'PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjIzIiBoZWlnaHQ9IjIzIiByeD0iMyIgZmlsbD0iIzRGNEY0RiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE5LjI3NTUgOC4wMTU2OEMxOS41OTQ4IDguMzA1OTIgMTkuNjE4MyA4LjgwMDAzIDE5LjMyODEgOS4xMTkyOUwxMC45Mzc0IDE4LjM0ODlMNS42NzE5MyAxMi41NTY5QzUuMzgxNjkgMTIuMjM3NiA1LjQwNTIyIDExLjc0MzUgNS43MjQ0OCAxMS40NTMzQzYuMDQzNzUgMTEuMTYzMSA2LjUzNzg1IDExLjE4NjYgNi44MjgwOSAxMS41MDU5TDEwLjkzNzQgMTYuMDI2MUwxOC4xNzE5IDguMDY4MjJDMTguNDYyMiA3Ljc0ODk2IDE4Ljk1NjMgNy43MjU0NCAxOS4yNzU1IDguMDE1NjhaIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIxIiB5PSIxIiB3aWR0aD0iMjMiIGhlaWdodD0iMjMiIHJ4PSIzIiBzdHJva2U9IiM0RjRGNEYiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4K',

	red: startsWith + 'PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjIzIiBoZWlnaHQ9IjIzIiByeD0iMyIgZmlsbD0iI0VCNTc1NyIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE5LjI3NTUgOC4wMTU2OEMxOS41OTQ4IDguMzA1OTIgMTkuNjE4MyA4LjgwMDAzIDE5LjMyODEgOS4xMTkyOUwxMC45Mzc0IDE4LjM0ODlMNS42NzE5MyAxMi41NTY5QzUuMzgxNjkgMTIuMjM3NiA1LjQwNTIyIDExLjc0MzUgNS43MjQ0OCAxMS40NTMzQzYuMDQzNzUgMTEuMTYzMSA2LjUzNzg1IDExLjE4NjYgNi44MjgwOSAxMS41MDU5TDEwLjkzNzQgMTYuMDI2MUwxOC4xNzE5IDguMDY4MjJDMTguNDYyMiA3Ljc0ODk2IDE4Ljk1NjMgNy43MjU0NCAxOS4yNzU1IDguMDE1NjhaIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIxIiB5PSIxIiB3aWR0aD0iMjMiIGhlaWdodD0iMjMiIHJ4PSIzIiBzdHJva2U9IiNFQjU3NTciIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4K',
	orange: startsWith + 'PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjIzIiBoZWlnaHQ9IjIzIiByeD0iMyIgZmlsbD0iI0YyOTk0QSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE5LjI3NTUgOC4wMTU2OEMxOS41OTQ4IDguMzA1OTIgMTkuNjE4MyA4LjgwMDAzIDE5LjMyODEgOS4xMTkyOUwxMC45Mzc0IDE4LjM0ODlMNS42NzE5MyAxMi41NTY5QzUuMzgxNjkgMTIuMjM3NiA1LjQwNTIyIDExLjc0MzUgNS43MjQ0OCAxMS40NTMzQzYuMDQzNzUgMTEuMTYzMSA2LjUzNzg1IDExLjE4NjYgNi44MjgwOSAxMS41MDU5TDEwLjkzNzQgMTYuMDI2MUwxOC4xNzE5IDguMDY4MjJDMTguNDYyMiA3Ljc0ODk2IDE4Ljk1NjMgNy43MjU0NCAxOS4yNzU1IDguMDE1NjhaIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIxIiB5PSIxIiB3aWR0aD0iMjMiIGhlaWdodD0iMjMiIHJ4PSIzIiBzdHJva2U9IiNGMjk5NEEiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4K',
	yellow: startsWith + 'PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjIzIiBoZWlnaHQ9IjIzIiByeD0iMyIgZmlsbD0iI0YyQzk0QyIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE5LjI3NTUgOC4wMTU2OEMxOS41OTQ4IDguMzA1OTIgMTkuNjE4MyA4LjgwMDAzIDE5LjMyODEgOS4xMTkyOUwxMC45Mzc0IDE4LjM0ODlMNS42NzE5MyAxMi41NTY5QzUuMzgxNjkgMTIuMjM3NiA1LjQwNTIyIDExLjc0MzUgNS43MjQ0OCAxMS40NTMzQzYuMDQzNzUgMTEuMTYzMSA2LjUzNzg1IDExLjE4NjYgNi44MjgwOSAxMS41MDU5TDEwLjkzNzQgMTYuMDI2MUwxOC4xNzE5IDguMDY4MjJDMTguNDYyMiA3Ljc0ODk2IDE4Ljk1NjMgNy43MjU0NCAxOS4yNzU1IDguMDE1NjhaIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIxIiB5PSIxIiB3aWR0aD0iMjMiIGhlaWdodD0iMjMiIHJ4PSIzIiBzdHJva2U9IiNGMkM5NEMiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4K',

	green100: startsWith + 'PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjIzIiBoZWlnaHQ9IjIzIiByeD0iMyIgZmlsbD0iIzZGQ0Y5NyIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE5LjI3NTUgOC4wMTU2OEMxOS41OTQ4IDguMzA1OTIgMTkuNjE4MyA4LjgwMDAzIDE5LjMyODEgOS4xMTkyOUwxMC45Mzc0IDE4LjM0ODlMNS42NzE5MyAxMi41NTY5QzUuMzgxNjkgMTIuMjM3NiA1LjQwNTIyIDExLjc0MzUgNS43MjQ0OCAxMS40NTMzQzYuMDQzNzUgMTEuMTYzMSA2LjUzNzg1IDExLjE4NjYgNi44MjgwOSAxMS41MDU5TDEwLjkzNzQgMTYuMDI2MUwxOC4xNzE5IDguMDY4MjJDMTguNDYyMiA3Ljc0ODk2IDE4Ljk1NjMgNy43MjU0NCAxOS4yNzU1IDguMDE1NjhaIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIxIiB5PSIxIiB3aWR0aD0iMjMiIGhlaWdodD0iMjMiIHJ4PSIzIiBzdHJva2U9IiM2RkNGOTciIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4K',
	green200: startsWith + 'PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjIzIiBoZWlnaHQ9IjIzIiByeD0iMyIgZmlsbD0iIzI3QUU2MCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE5LjI3NTUgOC4wMTU2OEMxOS41OTQ4IDguMzA1OTIgMTkuNjE4MyA4LjgwMDAzIDE5LjMyODEgOS4xMTkyOUwxMC45Mzc0IDE4LjM0ODlMNS42NzE5MyAxMi41NTY5QzUuMzgxNjkgMTIuMjM3NiA1LjQwNTIyIDExLjc0MzUgNS43MjQ0OCAxMS40NTMzQzYuMDQzNzUgMTEuMTYzMSA2LjUzNzg1IDExLjE4NjYgNi44MjgwOSAxMS41MDU5TDEwLjkzNzQgMTYuMDI2MUwxOC4xNzE5IDguMDY4MjJDMTguNDYyMiA3Ljc0ODk2IDE4Ljk1NjMgNy43MjU0NCAxOS4yNzU1IDguMDE1NjhaIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIxIiB5PSIxIiB3aWR0aD0iMjMiIGhlaWdodD0iMjMiIHJ4PSIzIiBzdHJva2U9IiMyN0FFNjAiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4K',
	green300: startsWith + 'PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjIzIiBoZWlnaHQ9IjIzIiByeD0iMyIgZmlsbD0iIzIxOTY1MyIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE5LjI3NTUgOC4wMTU2OEMxOS41OTQ4IDguMzA1OTIgMTkuNjE4MyA4LjgwMDAzIDE5LjMyODEgOS4xMTkyOUwxMC45Mzc0IDE4LjM0ODlMNS42NzE5MyAxMi41NTY5QzUuMzgxNjkgMTIuMjM3NiA1LjQwNTIyIDExLjc0MzUgNS43MjQ0OCAxMS40NTMzQzYuMDQzNzUgMTEuMTYzMSA2LjUzNzg1IDExLjE4NjYgNi44MjgwOSAxMS41MDU5TDEwLjkzNzQgMTYuMDI2MUwxOC4xNzE5IDguMDY4MjJDMTguNDYyMiA3Ljc0ODk2IDE4Ljk1NjMgNy43MjU0NCAxOS4yNzU1IDguMDE1NjhaIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIxIiB5PSIxIiB3aWR0aD0iMjMiIGhlaWdodD0iMjMiIHJ4PSIzIiBzdHJva2U9IiMyMTk2NTMiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4K',

	blue100: startsWith + 'PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjIzIiBoZWlnaHQ9IjIzIiByeD0iMyIgZmlsbD0iIzU2Q0NGMiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE5LjI3NTUgOC4wMTU2OEMxOS41OTQ4IDguMzA1OTIgMTkuNjE4MyA4LjgwMDAzIDE5LjMyODEgOS4xMTkyOUwxMC45Mzc0IDE4LjM0ODlMNS42NzE5MyAxMi41NTY5QzUuMzgxNjkgMTIuMjM3NiA1LjQwNTIyIDExLjc0MzUgNS43MjQ0OCAxMS40NTMzQzYuMDQzNzUgMTEuMTYzMSA2LjUzNzg1IDExLjE4NjYgNi44MjgwOSAxMS41MDU5TDEwLjkzNzQgMTYuMDI2MUwxOC4xNzE5IDguMDY4MjJDMTguNDYyMiA3Ljc0ODk2IDE4Ljk1NjMgNy43MjU0NCAxOS4yNzU1IDguMDE1NjhaIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIxIiB5PSIxIiB3aWR0aD0iMjMiIGhlaWdodD0iMjMiIHJ4PSIzIiBzdHJva2U9IiM1NkNDRjIiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4K',
	blue200: startsWith + 'PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjIzIiBoZWlnaHQ9IjIzIiByeD0iMyIgZmlsbD0iIzJEOUNEQiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE5LjI3NTUgOC4wMTU2OEMxOS41OTQ4IDguMzA1OTIgMTkuNjE4MyA4LjgwMDAzIDE5LjMyODEgOS4xMTkyOUwxMC45Mzc0IDE4LjM0ODlMNS42NzE5MyAxMi41NTY5QzUuMzgxNjkgMTIuMjM3NiA1LjQwNTIyIDExLjc0MzUgNS43MjQ0OCAxMS40NTMzQzYuMDQzNzUgMTEuMTYzMSA2LjUzNzg1IDExLjE4NjYgNi44MjgwOSAxMS41MDU5TDEwLjkzNzQgMTYuMDI2MUwxOC4xNzE5IDguMDY4MjJDMTguNDYyMiA3Ljc0ODk2IDE4Ljk1NjMgNy43MjU0NCAxOS4yNzU1IDguMDE1NjhaIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIxIiB5PSIxIiB3aWR0aD0iMjMiIGhlaWdodD0iMjMiIHJ4PSIzIiBzdHJva2U9IiMyRDlDREIiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4K',
	blue300: startsWith + 'PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjIzIiBoZWlnaHQ9IjIzIiByeD0iMyIgZmlsbD0iIzJGODBFRCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE5LjI3NTUgOC4wMTU2OEMxOS41OTQ4IDguMzA1OTIgMTkuNjE4MyA4LjgwMDAzIDE5LjMyODEgOS4xMTkyOUwxMC45Mzc0IDE4LjM0ODlMNS42NzE5MyAxMi41NTY5QzUuMzgxNjkgMTIuMjM3NiA1LjQwNTIyIDExLjc0MzUgNS43MjQ0OCAxMS40NTMzQzYuMDQzNzUgMTEuMTYzMSA2LjUzNzg1IDExLjE4NjYgNi44MjgwOSAxMS41MDU5TDEwLjkzNzQgMTYuMDI2MUwxOC4xNzE5IDguMDY4MjJDMTguNDYyMiA3Ljc0ODk2IDE4Ljk1NjMgNy43MjU0NCAxOS4yNzU1IDguMDE1NjhaIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIxIiB5PSIxIiB3aWR0aD0iMjMiIGhlaWdodD0iMjMiIHJ4PSIzIiBzdHJva2U9IiMyRjgwRUQiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4K',

	purple100: startsWith + 'PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjIzIiBoZWlnaHQ9IjIzIiByeD0iMyIgZmlsbD0iI0JCNkJEOSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE5LjI3NTUgOC4wMTU2OEMxOS41OTQ4IDguMzA1OTIgMTkuNjE4MyA4LjgwMDAzIDE5LjMyODEgOS4xMTkyOUwxMC45Mzc0IDE4LjM0ODlMNS42NzE5MyAxMi41NTY5QzUuMzgxNjkgMTIuMjM3NiA1LjQwNTIyIDExLjc0MzUgNS43MjQ0OCAxMS40NTMzQzYuMDQzNzUgMTEuMTYzMSA2LjUzNzg1IDExLjE4NjYgNi44MjgwOSAxMS41MDU5TDEwLjkzNzQgMTYuMDI2MUwxOC4xNzE5IDguMDY4MjJDMTguNDYyMiA3Ljc0ODk2IDE4Ljk1NjMgNy43MjU0NCAxOS4yNzU1IDguMDE1NjhaIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIxIiB5PSIxIiB3aWR0aD0iMjMiIGhlaWdodD0iMjMiIHJ4PSIzIiBzdHJva2U9IiNCQjZCRDkiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4K',
	purple200: startsWith + 'PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjIzIiBoZWlnaHQ9IjIzIiByeD0iMyIgZmlsbD0iIzlCNTFFMCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE5LjI3NTUgOC4wMTU2OEMxOS41OTQ4IDguMzA1OTIgMTkuNjE4MyA4LjgwMDAzIDE5LjMyODEgOS4xMTkyOUwxMC45Mzc0IDE4LjM0ODlMNS42NzE5MyAxMi41NTY5QzUuMzgxNjkgMTIuMjM3NiA1LjQwNTIyIDExLjc0MzUgNS43MjQ0OCAxMS40NTMzQzYuMDQzNzUgMTEuMTYzMSA2LjUzNzg1IDExLjE4NjYgNi44MjgwOSAxMS41MDU5TDEwLjkzNzQgMTYuMDI2MUwxOC4xNzE5IDguMDY4MjJDMTguNDYyMiA3Ljc0ODk2IDE4Ljk1NjMgNy43MjU0NCAxOS4yNzU1IDguMDE1NjhaIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIxIiB5PSIxIiB3aWR0aD0iMjMiIGhlaWdodD0iMjMiIHJ4PSIzIiBzdHJva2U9IiM5QjUxRTAiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4K',	
};

export default BACKGROUND;