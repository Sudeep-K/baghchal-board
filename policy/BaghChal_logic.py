class Board:
    def __init__(self):
        self.directions = [
            {"row": -1, "col": 0},   # Up
            {"row": 1, "col": 0},    # Down
            {"row": 0, "col": -1},   # Left
            {"row": 0, "col": 1},    # Right
        ]
        self.directionsWithDiagonal = [
            {"row": -1, "col": 0},   # Up
            {"row": 1, "col": 0},    # Down
            {"row": 0, "col": -1},   # Left
            {"row": 0, "col": 1},    # Right
            {"row": -1, "col": -1},  # Top left
            {"row": -1, "col": 1},   # Top right
            {"row": 1, "col": -1},   # Bottom left
            {"row": 1, "col": 1},    # Bottom right
        ]
        # Goat: 1, Tiger: 0
        self.board = [
            [0, None, None, None, 0],
            [None, None, None, None, None],
            [None, None, None, None, None],
            [None, None, None, None, None],
            [0, None, None, None, 0],
        ]

        self.tigers = {
            "trapped": [],  # No. of trapped tigers
            "position": []
        }

        self.goats = {
            "onHand": 20,  # Initially 20 Goats are in hand to place
            "killed": 0,   # Initially 0 goats are killed
            "spaceCaptured": [],
        }

        self.playerTurn = "goat"  # Initially it's goat's turn

        # Position of piece selected (find next valid move for this piece)
        # -1 means no selection needed (placing the goats on the board still left)
        self.selectedPosition = [3, 1]
        self.nextValidMoves = []  # Valid moves for the selected piece

    # Function to check if the position is even
    def check_even(self, position):
        if (position[0] + position[1]) % 2 == 0:
            return True
        else:
            return False

    # Function to return the trapped tigers on the board
    def trapped_tigers(self):
        new_trapped = []
       
        for i in range(4):
            valid_move = []
            position = self.tigers["position"][i]
            row = position[0]
            col = position[1]
            # If the selected position is even, we need to check for diagonal as well
            if self.check_even((row, col)):
                direction_choice = self.directionsWithDiagonal
            else:
                direction_choice = self.directions
            for direction in direction_choice:
                new_row = row + direction["row"]
                new_col = col + direction["col"]

                # One more step in a straight line
                new_kill_row = new_row + direction["row"]
                new_kill_col = new_col + direction["col"]

                # Check if the new position is within the bounds of the board
                if 0 <= new_row < len(self.board) and 0 <= new_col < len(self.board[row]):
                    # Check if the new position is empty
                    if self.board[new_row][new_col] is None:
                        valid_move.append((new_row, new_col))
                    # If killing a goat is possible by going over the goat position in a straight line
                    elif self.board[new_row][new_col] == 1:
                        # Check if it is in bound of the board
                        if 0 <= new_kill_row < len(self.board) and 0 <= new_kill_col < len(self.board[row]):
                            if self.board[new_kill_row][new_kill_col] is None:
                                valid_move.append((new_kill_row, new_kill_col))
            if not valid_move:
                new_trapped.append(self.tigers["position"][i])
        return new_trapped

    # Function to return the space captured by goats
    def captured_space(self):
        new_space_captured = []
        
        for row in range(len(self.board)):
            for col in range(len(self.board[row])):
                if self.board[row][col] is None:
                    if self.check_even((row, col)):
                        direction_choice = self.directionsWithDiagonal
                    else:
                        direction_choice = self.directions
                    for direction in direction_choice:
                        new_row = row + direction["row"]
                        new_col = col + direction["col"]

                        # One more step in a straight line
                        new_kill_row = new_row + direction["row"]
                        new_kill_col = new_col + direction["col"]

        return new_space_captured

    # Function to check the action of a goat
    def check_goat_action(self, row, column):
        new_board = Board()
        new_board.board = [row[:] for row in self.board]
        new_board.board[row][column] = 1
        new_board.tigers["trapped"] = self.trapped_tigers()
        return "untrap" if len(self.tigers["trapped"]) > len(new_board.tigers["trapped"]) else "trap" if len(self.tigers["trapped"]) < len(new_board.tigers["trapped"]) else "move"

    # Function to get the valid moves
    def valid_move(self):
        next_valid_moves = []

        # Check if it's the goat's turn and there are goats left to place on the board
        if self.playerTurn == "goat" and self.goats["onHand"] > 0:
            # Iterate over each cell of the board
            for row in range(len(self.board)):
                for col in range(len(self.board[row])):
                    # Check if the cell is empty (None) and add it as a valid move
                    if self.board[row][col] is None:
                        next_valid_moves.append((row, col))
        # Check valid moves when it's the goat's turn to move
        elif self.playerTurn == "goat" and self.goats["onHand"] == 0 and self.board[self.selectedPosition[0]][self.selectedPosition[1]] == 1:
            row, col = self.selectedPosition
            # If the selected position is even, we need to check for diagonal as well
            if self.check_even((row, col)):
                direction_choice = self.directionsWithDiagonal
            else:
                direction_choice = self.directions
            for direction in direction_choice:
                new_row = row + direction["row"]
                new_col = col + direction["col"]
                # Check if the new position is within the bounds of the board
                if 0 <= new_row < len(self.board) and 0 <= new_col < len(self.board[row]):
                    # Check if the new position is empty
                    if self.board[new_row][new_col] is None:
                        next_valid_moves.append((new_row, new_col))
        # Check valid moves when it's the Tiger's turn to move
        else:
            row, col = self.selectedPosition
            # If the selected position is even, we need to check for diagonal as well
            if self.check_even((row, col)):
                direction_choice = self.directionsWithDiagonal
            else:
                direction_choice = self.directions
            for direction in direction_choice:
                new_row = row + direction["row"]
                new_col = col + direction["col"]
                # One more step in a straight line
                new_kill_row = new_row + direction["row"]
                new_kill_col = new_col + direction["col"]
                # Check if the new position is within the bounds of the board
                if 0 <= new_row < len(self.board) and 0 <= new_col < len(self.board[row]):
                    # Check if the new position is empty
                    if self.board[new_row][new_col] is None:
                        next_valid_moves.append((new_row, new_col))
                    # If killing a goat is possible by going over the goat position in a straight line
                    elif self.board[new_row][new_col] == 1:
                        # Check if it is in bound of the board
                        if 0 <= new_kill_row < len(self.board) and 0 <= new_kill_col < len(self.board[row]):
                            if self.board[new_kill_row][new_kill_col] is None:
                                next_valid_moves.append((new_kill_row, new_kill_col))
        return next_valid_moves

    # Function to check if the game is over
    def game_over(self):
        # Condition 1: Killed 5 goats
        if self.goats["killed"] >= 5:
            return 1
        # Condition 2: Goats have no valid moves
        valid_move_number = 0
        if self.goats["onHand"] == 0:
            for row in range(len(self.board)):
                for col in range(len(self.board[row])):
                    if self.board[row][col] is None:
                        if self.check_even((row, col)):
                            direction_choice = self.directionsWithDiagonal
                        else:
                            direction_choice = self.directions
                        for direction in direction_choice:
                            new_row = row + direction["row"]
                            new_col = col + direction["col"]
                            if 0 <= new_row < len(self.board) and 0 <= new_col < len(self.board[row]) and self.board[new_row][new_col] == 1:
                                valid_move_number += 1
                                break
            if valid_move_number == 0:
                return 1
        # Condition 3: All tigers are trapped
        elif len(self.tigers["trapped"]) == 4:
            return 2
        # The game is not over
        return 0

# Create an instance of the Board class
board = Board()
print(board.game_over())
print(board.valid_move())