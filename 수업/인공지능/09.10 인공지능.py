board = [" "] * 9


def print_board():
    print()
    print(board[0], "|", board[1], "|", board[2])
    print("--+---+--")
    print(board[3], "|", board[4], "|", board[5])
    print("--+---+--")
    print(board[6], "|", board[7], "|", board[8])
    print()


def checkwin(player):
    if board[0] == player and board[1] == player and board[2] == player:
        return True
    if board[3] == player and board[4] == player and board[5] == player:
        return True
    if board[6] == player and board[7] == player and board[8] == player:
        return True
    if board[0] == player and board[3] == player and board[6] == player:
        return True
    if board[1] == player and board[4] == player and board[7] == player:
        return True
    if board[2] == player and board[5] == player and board[8] == player:
        return True
    if board[0] == player and board[4] == player and board[8] == player:
        return True
    if board[2] == player and board[4] == player and board[6] == player:
        return True
    return False

player = "O"
turn = 0

while turn<9:

    print_board()

    num = int(input(player+" 숫자를 입력해주세요 (1~9) : "))-1

    if board[num] != " ":
        print("이미 선택된 칸입니다.")
        continue

    board[num] = player
    turn += 1

    if checkwin(player):
        print_board()
        print(player+"가 승리했습니다!")
        break

    if player=="O":
        player="X"
    else :
        player="O"

if turn == 9 and not checkwin(player):
    print_board()
    print("무승부!") 